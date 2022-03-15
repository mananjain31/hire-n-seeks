# Installation Guide

<br/>

## Install Node Modules

<br/>

Use the following command to install all the required pacakages for react app

```
npm install
```

<br/>

## Using Virtual Enviroment in Python

<br/>

 - First intall virtualenv in your main environment
```
pip install virtualenv
```

- Create Virtual Environment
```
virtualenv EnvName
```

- Use Environment
```
EnvName\Scripts\activate
```

**Note:**
You may face error while activating environment. This is due to restriction in windows. Use Following to unlock restrictions.

```
set-executionpolicy remotesigned
```

- To create a requirements.txt
```
pip freeze > requirements.txt
```

- To install a requirements.txt file in your environment
```
pip install -r requirements.txt
```

- To close the environment
```
deactivate
```