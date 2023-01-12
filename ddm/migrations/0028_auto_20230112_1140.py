# Generated by Django 3.2.13 on 2023-01-12 10:40

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('ddm', '0027_auto_20230110_1738'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exceptionlogentry',
            name='date',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.CreateModel(
            name='EventLog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(default=django.utils.timezone.now)),
                ('description', models.CharField(max_length=100)),
                ('message', models.TextField()),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ddm.donationproject')),
            ],
        ),
    ]
