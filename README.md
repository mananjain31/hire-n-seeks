# Using Virtual Enviroment in Python

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
EnvName\Scripts\activae
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

- To close the environment
```
deactivate
```