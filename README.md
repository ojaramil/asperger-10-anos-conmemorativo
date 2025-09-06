# 🎉 App Conmemorativa - 10 Años de Asperger para Asperger

Una aplicación web conmemorativa que celebra 10 años de la comunidad Asperger para Asperger, con autenticación de Google y registro de usuarios en Google Sheets.

## 🌟 Características

- **Autenticación con Google OAuth 2.0**
- **Registro automático de usuarios en Google Sheets**
- **Diseño responsivo y moderno**
- **Entrevistas especiales de la comunidad**
- **Álbum conmemorativo con timeline**
- **Álbum musical con playlist**
- **Sección de agradecimientos**
- **Recursos y soluciones para la comunidad**

## 🚀 Despliegue en GitHub Pages

### Opción 1: Usar GitHub CLI (Recomendado)

```bash
# 1. Inicializar repositorio Git
git init

# 2. Agregar archivos
git add .

# 3. Commit inicial
git commit -m "Initial commit: App Conmemorativa 10 años"

# 4. Crear repositorio en GitHub
gh repo create asperger-10-anos-conmemorativo --public

# 5. Conectar repositorio local con GitHub
git remote add origin https://github.com/TU_USUARIO/asperger-10-anos-conmemorativo.git

# 6. Subir código
git push -u origin main

# 7. Habilitar GitHub Pages
gh api repos/TU_USUARIO/asperger-10-anos-conmemorativo/pages --method POST --field source[type]=branch --field source[branch]=main
```

### Opción 2: Usar Interfaz Web de GitHub

1. **Crear repositorio en GitHub:**
   - Ve a [GitHub](https://github.com)
   - Haz clic en "New repository"
   - Nombre: `asperger-10-anos-conmemorativo`
   - Descripción: "App Conmemorativa - 10 Años de Asperger para Asperger"
   - Marca como **Público**
   - NO inicialices con README (ya tienes uno)

2. **Subir archivos:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: App Conmemorativa 10 años"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/asperger-10-anos-conmemorativo.git
   git push -u origin main
   ```

3. **Habilitar GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Haz clic en **Settings**
   - Ve a **Pages** en el menú lateral
   - En **Source**, selecciona **Deploy from a branch**
   - Selecciona **main** branch
   - Haz clic en **Save**

## ⚙️ Configuración Requerida

### 1. Google Cloud Console

Antes de usar la aplicación, debes configurar Google Cloud:

1. **Crear proyecto en Google Cloud Console**
2. **Habilitar APIs:**
   - Google+ API
   - Google Sheets API
3. **Crear credenciales:**
   - OAuth 2.0 Client ID
   - API Key para Google Sheets
4. **Configurar dominios autorizados:**
   ```
   https://TU_USUARIO.github.io
   https://TU_USUARIO.github.io/asperger-10-anos-conmemorativo
   https://aniversario.asperger.org
   http://localhost:3000
   ```

### 2. Archivo de Configuración

1. **Copiar archivo de ejemplo:**
   ```bash
   cp config.example.js config.js
   ```

2. **Editar config.js con tus credenciales:**
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

3. **Asegurar que config.js esté en .gitignore:**
   ```bash
   echo "config.js" >> .gitignore
   ```

## 🧪 Pruebas

### Probar Configuración Local

1. **Abrir test-config.html en tu navegador**
2. **Verificar que todas las pruebas pasen**
3. **Revisar la consola del navegador para errores**

### Probar en GitHub Pages

1. **Esperar 5-10 minutos después del push**
2. **Visitar:** `https://TU_USUARIO.github.io/asperger-10-anos-conmemorativo`
3. **Probar autenticación con Google**
4. **Verificar que los datos se guarden en Google Sheets**

## 📁 Estructura del Proyecto

```
asperger-10-anos-conmemorativo/
├── index.html              # Página de redirección
├── welcome.html            # Página de bienvenida con autenticación
├── main.html              # Página principal de la aplicación
├── script.js              # JavaScript principal
├── styles.css             # Estilos CSS
├── config.js              # Configuración (NO subir a Git)
├── config.example.js      # Plantilla de configuración
├── test-config.html       # Herramienta de pruebas
├── GOOGLE_CLOUD_SETUP.md  # Guía de configuración
├── .gitignore             # Archivos a ignorar
├── CNAME                  # Dominio personalizado (opcional)
└── README.md              # Este archivo
```

## 🔧 Comandos Útiles

### Desarrollo Local

```bash
# Servir localmente (requiere Python)
python -m http.server 3000

# O usar Node.js
npx http-server -p 3000

# O usar PHP
php -S localhost:3000
```

### Git

```bash
# Ver estado
git status

# Agregar cambios
git add .

# Commit
git commit -m "Descripción del cambio"

# Push
git push origin main

# Ver logs
git log --oneline
```

## 🌐 URLs de la Aplicación

- **GitHub Pages:** `https://TU_USUARIO.github.io/asperger-10-anos-conmemorativo`
- **Dominio personalizado:** `https://aniversario.asperger.org` (si configurado)

## 🐛 Solución de Problemas

### Error: "This app isn't verified"
- **Solución:** En Google Cloud Console, ve a OAuth consent screen y marca como "Testing"

### Error: "Access blocked: This app's request is invalid"
- **Solución:** Verifica que los dominios autorizados coincidan exactamente con tu URL

### Error: "API key not valid"
- **Solución:** Verifica que la API Key tenga permisos para Google Sheets API

### La aplicación no carga
- **Solución:** Verifica que `config.js` esté configurado correctamente
- **Solución:** Revisa la consola del navegador para errores

## 📞 Soporte

Para más ayuda, consulta:
- [GOOGLE_CLOUD_SETUP.md](GOOGLE_CLOUD_SETUP.md) - Guía completa de configuración
- [test-config.html](test-config.html) - Herramienta de diagnóstico
- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## 📄 Licencia

Este proyecto es parte de la comunidad Asperger para Asperger y está destinado a uso educativo y comunitario.

---

**¡Celebrando 10 años de comunidad y crecimiento! 🎉**