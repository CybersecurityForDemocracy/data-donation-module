import random

from ckeditor.fields import RichTextField
from django.db import models
from django.forms import model_to_dict
from django.template import Context, Template

from polymorphic.models import PolymorphicModel
from ddm.models import DonationProject, DonationBlueprint


class QuestionType(models.TextChoices):
    GENERIC = 'generic', 'Generic Question'
    SINGLE_CHOICE = 'single_choice', 'Single Choice Question'
    MULTI_CHOICE = 'multi_choice', 'Multi Choice Question'
    MATRIX = 'matrix', 'Matrix Question'
    SEMANTIC_DIFF = 'semantic_diff', 'Semantic Differential'
    OPEN = 'open', 'Open Question'
    TRANSITION = 'transition', 'Transition Block'


class QuestionBase(PolymorphicModel):
    project = models.ForeignKey(
        DonationProject,
        on_delete=models.CASCADE
    )
    blueprint = models.ForeignKey(
        DonationBlueprint,
        on_delete=models.CASCADE
    )

    DEFAULT_QUESTION_TYPE = QuestionType.GENERIC
    question_type = models.CharField(
        max_length=20,
        blank=False,
        choices=QuestionType.choices,
        default=DEFAULT_QUESTION_TYPE
    )

    name = models.CharField(max_length=255)
    index = models.PositiveIntegerField(default=1)

    # TODO: Make sure this updates responses if is changed.
    variable_name = models.SlugField(
        max_length=50,
        null=False
    )

    text = RichTextField(null=True, blank=True)
    required = models.BooleanField(default=False)

    class Meta:
        ordering = ['index']
        constraints = [
            models.UniqueConstraint(
                fields=['variable_name', 'project'],
                name='unique_varname_per_project'
            ),
        ]

    def __init__(self, *args, **kwargs):
        kwargs['question_type'] = self.DEFAULT_QUESTION_TYPE
        super().__init__(*args, **kwargs)

    def __str__(self):
        return self.name

    def materialize_text(self, particpant_id):
        template = Template(self.question_text)
        # get blueprint.donatedate and participant
        context = Context({'stuff': 'bla'})
        return template.render(context)

    def populate_items(self):
        # similar to materialize: loop over items
        return

    def get_config(self):
        config = {
            'question': self.pk,
            'type': self.question_type,
            'text': self.text,
            'items': [],
            'scale': [],
            'options': {}
        }
        return config

    def validate_answer(self):
        return


class ItemMixin(models.Model):
    randomize_items = models.BooleanField(default=False)

    class Meta:
        abstract = True

    def get_config(self):
        config = super().get_config()
        config = self.add_item_config(config)
        return config

    def add_item_config(self, config):
        items = QuestionItem.objects.filter(question=self)
        for item in items:
            config['items'].append(item.serialize_to_config())

        if self.randomize_items:
            random.shuffle(config['items'])
        return config


class ScaleMixin:
    def get_config(self):
        config = super().get_config()
        config = self.add_scale_config(config)
        return config

    def add_scale_config(self, config):
        scale_points = ScalePoint.objects.filter(question=self)
        for point in scale_points:
            config['scale'].append(point.serialize_to_config())
        return config


class SingleChoiceQuestion(ItemMixin, QuestionBase):
    DEFAULT_QUESTION_TYPE = QuestionType.SINGLE_CHOICE


class MultiChoiceQuestion(ItemMixin, QuestionBase):
    DEFAULT_QUESTION_TYPE = QuestionType.MULTI_CHOICE


class OpenQuestion(QuestionBase):
    DEFAULT_QUESTION_TYPE = QuestionType.OPEN

    max_length = None  # TODO: Define max length. Maybe add regex option?

    class DisplayOptions(models.TextChoices):
        SMALL = 'small', 'Small'
        LARGE = 'large', 'Large'
    display = models.CharField(
        max_length=20,
        blank=False,
        choices=DisplayOptions.choices,
        default=DisplayOptions.LARGE
    )

    def get_config(self):
        config = super().get_config()
        config['options']['max_length'] = self.max_length
        config['options']['display'] = self.display
        return config


class MatrixQuestion(ScaleMixin, ItemMixin, QuestionBase):
    DEFAULT_QUESTION_TYPE = QuestionType.MATRIX


class SemanticDifferential(ScaleMixin, ItemMixin, QuestionBase):
    DEFAULT_QUESTION_TYPE = QuestionType.SEMANTIC_DIFF


class Transition(QuestionBase):
    DEFAULT_QUESTION_TYPE = QuestionType.TRANSITION


class QuestionItem(models.Model):
    class Meta:
        ordering = ['index']

    question = models.ForeignKey(
        QuestionBase,
        on_delete=models.CASCADE
    )
    label = models.CharField(
        max_length=255,
        null=True,
        blank=True
    )
    label_alt = models.CharField(
        max_length=255,
        null=True,
        blank=True,
    )
    index = models.IntegerField()
    value = models.IntegerField()
    randomize = models.BooleanField(default=False)

    def serialize_to_config(self):
        item_config = model_to_dict(self, exclude=['question'])
        return item_config


class ScalePoint(models.Model):
    class Meta:
        ordering = ['index']
        constraints = [
            models.UniqueConstraint(
                fields=['index', 'question'],
                name='unique_index_per_question'
            ),
        ]

    question = models.ForeignKey(
        QuestionBase,
        on_delete=models.CASCADE
    )
    index = models.IntegerField()
    label = models.CharField(
        max_length=100,
        null=True,
        blank=True
    )
    value = models.IntegerField()
    add_border = models.BooleanField(default=False)

    def serialize_to_config(self):
        scale_config = model_to_dict(self, exclude=['question', 'add_border'])
        return scale_config
