# 🔐 Configuración de Google Sign-in

## Pasos para Configurar Google OAuth

### 1. Crear Proyecto en Google Cloud Console

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Nombra tu proyecto (ej: "Asperger para Asperger - 10 Años")

### 2. Habilitar Google Identity API

1. En el menú lateral, ve a **"APIs & Services"** → **"Library"**
2. Busca **"Google Identity"** o **"Google Sign-In API"**
3. Haz clic en **"Enable"**

### 3. Configurar OAuth Consent Screen

1. Ve a **"APIs & Services"** → **"OAuth consent screen"**
2. Selecciona **"External"** (para usuarios externos)
3. Completa la información:
   - **App name**: "Asperger para Asperger - 10 Años"
   - **User support email**: tu email
   - **Developer contact information**: tu email
4. Haz clic en **"Save and Continue"**

### 4. Crear Credenciales OAuth 2.0

1. Ve a **"APIs & Services"** → **"Credentials"**
2. Haz clic en **"+ CREATE CREDENTIALS"** → **"OAuth 2.0 Client IDs"**
3. Selecciona **"Web application"**
4. Configura las URLs autorizadas:
   - **Authorized JavaScript origins**:
     - `http://localhost:3000` (desarrollo)
     - `https://tu-dominio.com` (producción)
   - **Authorized redirect URIs**:
     - `http://localhost:3000` (desarrollo)
     - `https://tu-dominio.com` (producción)

### 5. Configurar el Client ID

1. Copia el **Client ID** generado
2. Abre el archivo `config.js`
3. Reemplaza `YOUR_GOOGLE_CLIENT_ID_HERE` con tu Client ID real
4. Actualiza las URLs en `AUTHORIZED_ORIGINS` con tus dominios reales

### 6. Verificar Configuración

```javascript
// En config.js
const GOOGLE_CONFIG = {
    CLIENT_ID: '123456789-abcdefghijklmnop.apps.googleusercontent.com', // Tu Client ID real
    AUTHORIZED_ORIGINS: [
        'http://localhost:3000',
        'https://tu-dominio-real.com'
    ],
    // ... resto de configuración
};
```

## 🔒 Seguridad

### Archivos Protegidos
- ✅ `config.js` está en `.gitignore`
- ✅ No se sube a Git
- ✅ Solo accesible localmente

### Buenas Prácticas
1. **Nunca** subas `config.js` a Git
2. **Nunca** compartas tu Client ID públicamente
3. **Usa HTTPS** en producción
4. **Actualiza** las URLs autorizadas cuando cambies de dominio

## 🚀 Despliegue

### Para Desarrollo Local
1. Configura `config.js` con `http://localhost:3000`
2. Ejecuta tu servidor local
3. Prueba la autenticación

### Para Producción
1. Actualiza `config.js` con tu dominio real
2. Asegúrate de que el dominio esté en Google Cloud Console
3. Usa HTTPS obligatoriamente

## ❗ Solución de Problemas

### Error: "Invalid client"
- Verifica que el Client ID sea correcto
- Asegúrate de que el dominio esté autorizado

### Error: "Origin mismatch"
- Agrega tu dominio a las URLs autorizadas en Google Cloud Console

### Error: "Access blocked"
- Verifica la configuración del OAuth consent screen
- Asegúrate de que la app esté verificada si es necesario

## 📞 Soporte

Si tienes problemas:
1. Revisa la consola del navegador para errores
2. Verifica la configuración en Google Cloud Console
3. Asegúrate de que todas las URLs estén correctas
