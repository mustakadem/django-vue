# fuerterociero

> INSTALACIÓN

##Base de datos

``` bash
# instalar mysql server
sudo apt-get update
sudo apt-get install mysql-server

# configurar la base de datos
mysqladmin -u root -p create FuerteRociero  //introduce la contraseña creada al instalar mysql

```



## Frontend

``` bash
# install dependencies
npm install

# build for production with minification
npm run build
```

## Backend

``` bash
# install dependencies
pip install -r requirements.txt

# serve with hot reload at localhost:8080
python manage.py collectsatic

# build for production with minification
```
## Ejecutar App

``` bash
python manage.py runserver
```
