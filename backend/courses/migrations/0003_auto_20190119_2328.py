# Generated by Django 2.1.5 on 2019-01-19 23:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0002_auto_20190119_2309'),
    ]

    operations = [
        migrations.CreateModel(
            name='Faculty',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('faculty_name', models.CharField(max_length=128)),
            ],
        ),
        migrations.AlterField(
            model_name='course',
            name='course_faculty',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='courses.Faculty'),
        ),
    ]