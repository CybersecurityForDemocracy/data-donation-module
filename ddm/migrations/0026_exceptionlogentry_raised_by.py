# Generated by Django 3.2.13 on 2023-01-10 16:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ddm', '0025_rename_customtoken_projectaccesstoken'),
    ]

    operations = [
        migrations.AddField(
            model_name='exceptionlogentry',
            name='raised_by',
            field=models.CharField(blank=True, choices=[('server', 'Server'), ('client', 'Client')], max_length=20),
        ),
    ]
