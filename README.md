# fuerterociero
> VERSIONES
``` bash
# VUE 2
# PYTHON 3
# DJANGO 2
```

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
pip install -r requirement.txt

#migrar las tablas
python manage.py makemigrations
pyhton manage.py migrate

#crear usuario admin
python manage.py createsuperuser //usuario que luego se usara para poder ver la vista del administrador
#directorio publico
python manage.py collectsatic

# build for production with minification
```
## Ejecutar App

``` bash
python manage.py runserver
```
