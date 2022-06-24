from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from django.core.exceptions import ValidationError

from ddm.models import ResearchProfile, DonationProject
from ddm.auth import email_is_valid


User = get_user_model()


class ProjectCreateForm(forms.ModelForm):
    secret = forms.CharField(min_length=10, max_length=150, required=False)

    class Meta:
        model = DonationProject
        fields = ['name', 'slug', 'super_secret', 'owner']
        widgets = {'owner': forms.HiddenInput()}

    field_order = ['name', 'slug', 'super_secret', 'secret']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if 'initial' in kwargs:
            self.fields['owner'].initial = kwargs['initial']['owner']

    def clean(self):
        super_secret = self.data.get('super_secret', False)
        secret = self.data.get('secret', None)
        if super_secret and secret in ['', None]:
            raise ValidationError('Super secret project needs a secret.')
        super().clean()

    def save(self, commit=True):
        project = super().save(commit=False)
        if project.super_secret:
            project.secret_key = self.data['secret']
        project.save()
        return project


class DdmUserCreationForm(UserCreationForm):
    email = forms.EmailField(required=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')

    def clean_email(self):
        email = self.cleaned_data['email']
        if not email_is_valid(email):
            raise forms.ValidationError(
                'Only researchers with a valid UZH e-mail address can register.'
            )
        return email

    def save(self, commit=True):
        user = super().save(commit=False)
        user.email = self.cleaned_data['email']
        if commit:
            user.save()
            ResearchProfile.objects.create(user=user)
        return user


class ResearchProfileConfirmationForm(forms.ModelForm):
    confirmed = forms.BooleanField()

    class Meta:
        model = ResearchProfile
        fields = ['user']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['user'].initial = kwargs['initial']['user']  # TODO: Check that this cannot be altered by another user and make hidden input.
        self.fields['confirmed'].initial = True
        self.fields['confirmed'].widget = forms.HiddenInput()

    def is_valid(self):
        if super().is_valid():
            return self.cleaned_data['confirmed']
        else:
            return False
