# Scaffolding Basic

Este es un Directorio para projectos basicos, con una arquitectura basica para que el desarrollador se enfoque en el desarrollo.

## Contenido

El directorio contiene carpetas independientes y con una funcionalidad, estan bajo una nomenclatura estandar, las cuales son:

- **bower*components** : contiene las librerias generadas por el bower.json, esta carpeta es generada.
- **node_modules** : contiene los modulos generados por el package.json, esta carpeta es generada.
- **assets**: carpeta de trabajo, aqui va nuestros recursos para el desarrollo, las carpetas son:

  - **img** : aqui van las imagenes de nuestro proyecto (.png,.jpg,.ico,.jpeg,etc).
  - **fonts**: aqui van las fuentes de nuestro proyecto (.ttf,.woff,.woff2,.eot,etc).
  - **media**: aqui van los videos utilizados en nuestro proyecto (.mp4,.ogg,etc).
  - **js**: aqui van nuestros archivos javascript de nuestro proyecto (.js).
  - **css**: aqui va nuestros archivos css, si estas usando sass, el archivo generado se guarda en esta carpeta.
  - **sass**: aqui van nuestros archivos sass, en esta carpeta se usa una arquitectura llamada 7+1, para tener modularidad, organizacion ,etc de nuestros estilos.

- **index.html** : nuestro archivo html, pueden agregar mas archivos html.

- **gulpfile.js** : archivo gulp para la automatización de tareas (sass).

- **package.json**: archivo que contiene el nombre y la version de los modulos/librerias que vamos a usar en nuestro proyecto.

- **bower.json**: archivo que contiene el nombre y la version de las librerias que vamos a utilizar en nuestro proyecto.

## Instalación

- clona el reporsitorio en un directorio.
- posicionate en la carpeta y ejectura:

  ```sh
  $ cd to/path/frontend-b1
  $ bower install
  $ npm install
  ```
- luego ejecuta

  ```sh
  $ gulp
  ```
