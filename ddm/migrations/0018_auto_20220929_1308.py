# Generated by Django 3.2.13 on 2022-09-29 11:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ddm', '0017_alter_processingrule_comparison_operator'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='donationblueprint',
            name='extracted_fields',
        ),
        migrations.RemoveField(
            model_name='processingrule',
            name='input_type',
        ),
    ]
