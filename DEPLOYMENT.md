# 🚀 Guía de Despliegue - GitHub Pages

Esta guía te ayudará a desplegar tu aplicación conmemorativa en GitHub Pages.

## 🎯 Opciones de Despliegue

### Opción 1: Script Automatizado (Recomendado)

```bash
# Ejecutar script de configuración
./setup-github.sh
```

Este script:
- ✅ Inicializa Git
- ✅ Crea repositorio en GitHub
- ✅ Configura GitHub Pages
- ✅ Sube el código

### Opción 2: Despliegue Manual

#### Paso 1: Preparar Repositorio Local

```bash
# Inicializar Git
git init

# Agregar archivos
git add .

# Commit inicial
git commit -m "Initial commit: App Conmemorativa 10 años"

# Crear rama main
git branch -M main
```

#### Paso 2: Crear Repositorio en GitHub

1. **Ve a [GitHub](https://github.com)**
2. **Haz clic en "New repository"**
3. **Configuración:**
   - Nombre: `asperger-10-anos-conmemorativo`
   - Descripción: `App Conmemorativa - 10 Años de Asperger para Asperger`
   - Visibilidad: **Público**
   - NO marques "Add a README file"

#### Paso 3: Conectar y Subir

```bash
# Agregar remote origin (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/asperger-10-anos-conmemorativo.git

# Subir código
git push -u origin main
```

#### Paso 4: Habilitar GitHub Pages

1. **Ve a tu repositorio en GitHub**
2. **Haz clic en "Settings"**
3. **Ve a "Pages" en el menú lateral**
4. **En "Source", selecciona "Deploy from a branch"**
5. **Selecciona "main" branch**
6. **Haz clic en "Save"**

## 🔧 Configuración Post-Despliegue

### 1. Configurar Google Cloud Console

**IMPORTANTE:** Debes configurar Google Cloud antes de que la aplicación funcione.

1. **Sigue las instrucciones en [GOOGLE_CLOUD_SETUP.md](GOOGLE_CLOUD_SETUP.md)**
2. **Obtén tus credenciales:**
   - Client ID de OAuth 2.0
   - API Key para Google Sheets
   - Spreadsheet ID

### 2. Actualizar Configuración

```bash
# Editar config.js con tus credenciales
nano config.js
# o
code config.js
```

**Reemplaza estos valores:**
```javascript
const GOOGLE_CONFIG = {
    CLIENT_ID: 'TU_CLIENT_ID_REAL.apps.googleusercontent.com',
    AUTHORIZED_ORIGINS: [
        'https://TU_USUARIO.github.io/asperger-10-anos-conmemorativo',
        'https://aniversario.asperger.org',
        'http://localhost:3000'
    ],
    SHEETS: {
        SPREADSHEET_ID: 'TU_SPREADSHEET_ID_REAL',
        RANGE: 'Sheet1!A:D',
        API_KEY: 'TU_API_KEY_REAL'
    }
};
```

### 3. Subir Configuración Actualizada

```bash
# Agregar cambios
git add config.js

# Commit
git commit -m "Update configuration with real credentials"

# Push
git push origin main
```

## 🧪 Verificar Despliegue

### 1. Probar Aplicación

**URL de tu aplicación:**
```
https://TU_USUARIO.github.io/asperger-10-anos-conmemorativo
```

### 2. Verificar Configuración

**Herramienta de diagnóstico:**
```
https://TU_USUARIO.github.io/asperger-10-anos-conmemorativo/test-config.html
```

### 3. Probar Funcionalidades

- ✅ Página de bienvenida carga
- ✅ Botón de Google Sign-in funciona
- ✅ Autenticación exitosa
- ✅ Redirección a página principal
- ✅ Datos se guardan en Google Sheets

## 🌐 Dominio Personalizado (Opcional)

### Configurar aniversario.asperger.org

1. **En tu proveedor de DNS:**
   - Crea un registro CNAME
   - Nombre: `aniversario`
   - Valor: `TU_USUARIO.github.io`

2. **En GitHub:**
   - El archivo `CNAME` ya está configurado
   - GitHub detectará automáticamente el dominio

3. **Verificar:**
   - Espera 5-10 minutos
   - Visita `https://aniversario.asperger.org`

## 🔄 Actualizaciones Futuras

### Despliegue de Cambios

```bash
# Hacer cambios en tu código
# ...

# Agregar cambios
git add .

# Commit
git commit -m "Descripción del cambio"

# Push
git push origin main
```

**GitHub Pages se actualizará automáticamente en 5-10 minutos.**

### Script de Despliegue Rápido

```bash
# Usar script de despliegue
./deploy.sh
```

## 🐛 Solución de Problemas

### La aplicación no carga

1. **Verifica la URL:**
   - Debe ser exactamente: `https://TU_USUARIO.github.io/asperger-10-anos-conmemorativo`

2. **Revisa la consola del navegador:**
   - F12 > Console
   - Busca errores en rojo

3. **Verifica configuración:**
   - Usa `test-config.html`
   - Revisa que `config.js` esté correcto

### Error de CORS

1. **Verifica dominios autorizados en Google Cloud:**
   - Debe incluir tu URL exacta de GitHub Pages

2. **Verifica que la aplicación esté en HTTPS:**
   - GitHub Pages siempre usa HTTPS

### Google Sheets no funciona

1. **Verifica API Key:**
   - Debe tener permisos para Google Sheets API

2. **Verifica Spreadsheet ID:**
   - Debe ser correcto y la hoja debe existir

3. **Verifica permisos de la hoja:**
   - Debe permitir edición pública o con la API Key

## 📊 Monitoreo

### GitHub Pages Status

- Ve a tu repositorio > Settings > Pages
- Verifica el estado del despliegue

### Logs de Despliegue

- Ve a Actions en tu repositorio
- Revisa los logs de despliegue

## 🎉 ¡Listo!

Tu aplicación conmemorativa estará disponible en:

**🌐 GitHub Pages:** `https://TU_USUARIO.github.io/asperger-10-anos-conmemorativo`

**🌐 Dominio personalizado:** `https://aniversario.asperger.org` (si configurado)

---

**¡Celebrando 10 años de comunidad! 🎉**
