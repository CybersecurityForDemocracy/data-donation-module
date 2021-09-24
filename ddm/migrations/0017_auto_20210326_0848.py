# Generated by Django 2.2.13 on 2021-03-26 07:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('surquest', '0016_auto_20201211_1254'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='QuestionFilter',
            new_name='FilterCondition',
        ),
        migrations.AlterField(
            model_name='page',
            name='page_type',
            field=models.CharField(choices=[('questionpage', 'Question Page'), ('endpage', 'End Page')], default='questionpage', max_length=50),
        ),
        migrations.AlterField(
            model_name='question',
            name='question_type',
            field=models.CharField(choices=[('genericquestion', 'Generic'), ('singlechoicequestion', 'Single Choice'), ('multichoicequestion', 'Multi Choice'), ('matrixquestion', 'Matrix'), ('differentialquestion', 'Differential'), ('listquestion', 'List'), ('transitionquestion', 'Transition'), ('openquestion', 'Open'), ('fileuploadquestion', 'File Upload'), ('filefeedback', 'File Feedback')], default='genericquestion', max_length=44),
        ),
        migrations.AlterField(
            model_name='questionitem',
            name='value',
            field=models.IntegerField(),
        ),
    ]
