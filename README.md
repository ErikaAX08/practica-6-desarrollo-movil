# 🎬 Práctica 6 - Desarrollo Móvil con Ionic

Una aplicación móvil desarrollada con **Ionic Framework** y **Angular** para explorar películas y series utilizando la API de **The Movie Database (TMDB)**.

---

## 📱 Características

- 🎥 **Catálogo de Películas:** Explora las películas más populares y mejor valoradas.  
- 🔍 **Búsqueda Avanzada:** Encuentra contenido específico por título.  
- ⭐ **Información Detallada:** Sinopsis, reparto, calificaciones y más.  
- 📱 **Diseño Responsive:** Optimizada para dispositivos móviles.  
- 🌙 **Tema Oscuro:** Interfaz moderna y amigable con los ojos.  

---

## 🛠️ Tecnologías Utilizadas

- **Ionic Framework 8.0.0** – Framework UI para aplicaciones móviles híbridas  
- **Angular 20.0.0** – Framework de aplicaciones web  
- **Capacitor 7.4.4** – Runtime para aplicaciones nativas  
- **TypeScript 5.8.0** – Superset tipado de JavaScript  
- **RxJS 7.8.0** – Programación reactiva  
- **The Movie DB API** – Fuente de datos de películas y series  

---

## 📦 Instalación y Configuración

### 🔧 Prerrequisitos

- Node.js (versión 18 o superior)  
- npm o yarn  
- Cuenta en [The Movie Database (TMDB)](https://www.themoviedb.org/) para obtener una API key  

### ⚙️ Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/ErikaAX08/practica-6-desarrollo-movil.git
   cd practica-6-desarrollo-movil
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**

   Crear un archivo `.env` en la raíz del proyecto y agregar tu API key de TMDB:
   ```text
   TMDB_API_KEY=tu_api_key_aqui
   ```

4. **Ejecutar en modo desarrollo**
   ```bash
   npm start
   # o
   ionic serve
   ```

---

## 🚀 Scripts Disponibles

| Comando | Descripción |
|----------|-------------|
| `npm start` | Ejecuta la aplicación en modo desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run build:prod` | Construye con optimizaciones de producción |
| `npm test` | Ejecuta las pruebas unitarias |
| `npm run lint` | Ejecuta el linter para verificar código |
| `ionic build` | Construye la aplicación Ionic |

---

## 📱 Build para Dispositivos Móviles

### Android
```bash
# Agregar plataforma Android
ionic capacitor add android

# Construir y sincronizar
ionic capacitor build android

# Abrir en Android Studio
ionic capacitor open android
```

### iOS
```bash
# Agregar plataforma iOS
ionic capacitor add ios

# Construir y sincronizar
ionic capacitor build ios

# Abrir en Xcode
ionic capacitor open ios
```

---

## 🏗️ Estructura del Proyecto

```text
src/
├── app/
│   ├── pages/           # Componentes de páginas
│   ├── services/        # Servicios (TMDB API)
│   ├── components/      # Componentes reutilizables
│   ├── models/          # Interfaces y modelos TypeScript
│   └── environments/    # Configuración de entornos
├── assets/              # Recursos estáticos
└── theme/               # Variables CSS y temas
```

---

## 🔧 Configuración de API

La aplicación utiliza **The Movie Database API**.  
Para configurarla:

1. Regístrate en [TMDB](https://www.themoviedb.org/).  
2. Obtén tu API Key.  
3. Configúrala en el archivo `.env` como se muestra en la sección de instalación.
