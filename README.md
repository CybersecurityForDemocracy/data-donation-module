# ddm
Data Donation Module (ddm) - currently under development.

## Development Guidelines
### Local Project for Development and Testing
The repository includes a django test project that can be used for local development and testing.
This project allows 

### Setup

1. **Install required packages** \
Activate your local virtual environment and install the following requirements
(the requirements still need to be defined - files are currently empty):
```
(venv) SomePath/ddm> pip install -r requirements.txt
(venv) SomePath/ddm> pip install -r test_project/requirements.txt
```
2. To setup the django project, first make a copy of *test_project/test_config.json.example* and rename it to *test_project/test_config.json*. \
In this new file, replace the placeholder with your local credentials.[^1]
3. Now you should be good to go.


### Commands
Through this setup, the regular django commands are now available:

- **Run Development Server** \
To start the development server use the following command:
```
(venv) SomePath/ddm> cd test_project
(venv) SomePath/ddm/test_project> manage.py runserver
```
- **Make Database Migrations** \
To apply changes made to models in the code, run (note that this is only necessary, 
if you are actively developing, NOT if you are just checking out the project): \
`(venv) SomePath/ddm/test_project> manage.py makemigrations` \
 \
To migrate the models to your local database, run: \
`(venv) SomePath/ddm/test_project> manage.py migrate` \
&nbsp;
- **Run Unit Tests** \
To run test, run: \
`(venv) SomePath/ddm/test_project> manage.py test`

## Notes
[^1]: For an overview on how to setup a local database for Django, see (the tutorial on digital ocean) [https://www.digitalocean.com/community/tutorials/how-to-create-a-django-app-and-connect-it-to-a-database#step-1-%E2%80%94-creating-the-database].
