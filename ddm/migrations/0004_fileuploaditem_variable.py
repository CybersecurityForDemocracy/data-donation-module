# Generated by Django 2.2.13 on 2020-09-01 08:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('surquest', '0003_auto_20200901_0813'),
    ]

    operations = [
        migrations.AddField(
            model_name='fileuploaditem',
            name='variable',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.PROTECT, to='surquest.Variable'),
        ),
    ]
