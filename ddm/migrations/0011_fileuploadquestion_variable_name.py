# Generated by Django 2.2.13 on 2020-11-01 15:56

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('surquest', '0010_auto_20201030_2218'),
    ]

    operations = [
        migrations.AddField(
            model_name='fileuploadquestion',
            name='variable_name',
            field=models.CharField(default='ul_var', max_length=20, validators=[django.core.validators.RegexValidator('^[0-9a-zA-Z_-]*$', 'Only alphanumeric characters, underscores and hyphens are allowed.')]),
            preserve_default=False,
        ),
    ]
