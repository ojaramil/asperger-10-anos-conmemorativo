# Configuración de Google Cloud para la App Conmemorativa

## 🚨 Problemas Identificados

Tu aplicación tiene varios problemas de configuración que impiden su funcionamiento:

1. **Google OAuth no configurado correctamente**
2. **Google Sheets API sin permisos adecuados**
3. **Dominios autorizados no coinciden con GitHub Pages**
4. **API Keys hardcodeadas en el código**

## 📋 Pasos para Solucionar

### 1. Configurar Google Cloud Console

#### A. Crear/Configurar Proyecto
1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Anota el **Project ID**

#### B. Habilitar APIs Necesarias
1. Ve a **APIs & Services** > **Library**
2. Busca y habilita estas APIs:
   - **Google+ API** (para OAuth)
   - **Google Sheets API**
   - **Google Drive API** (si es necesario)

#### C. Configurar OAuth 2.0
1. Ve a **APIs & Services** > **Credentials**
2. Haz clic en **Create Credentials** > **OAuth 2.0 Client IDs**
3. Selecciona **Web application**
4. Configura los **Authorized JavaScript origins**:
   ```
   https://tu-usuario.github.io
   https://tu-usuario.github.io/asperger-10-anos-conmemorativo
   https://aniversario.asperger.org
   http://localhost:3000
   ```
5. Configura los **Authorized redirect URIs**:
   ```
   https://tu-usuario.github.io/asperger-10-anos-conmemorativo/welcome.html
   https://aniversario.asperger.org/welcome.html
   http://localhost:3000/welcome.html
   ```
6. Copia el **Client ID** generado

#### D. Crear API Key para Google Sheets
1. En **Credentials**, haz clic en **Create Credentials** > **API Key**
2. Copia la **API Key**
3. Haz clic en **Restrict Key**
4. En **API restrictions**, selecciona **Restrict key**
5. Selecciona **Google Sheets API**
6. Guarda los cambios

### 2. Configurar Google Sheets

#### A. Crear Hoja de Cálculo
1. Ve a [Google Sheets](https://sheets.google.com/)
2. Crea una nueva hoja de cálculo
3. Nombra la primera columna como "Fecha"
4. Nombra la segunda columna como "Nombre"
5. Nombra la tercera columna como "Email"
6. Nombra la cuarta columna como "ID Usuario"
7. Copia el **Spreadsheet ID** de la URL

#### B. Configurar Permisos
1. Haz clic en **Share** en la esquina superior derecha
2. Cambia los permisos a **Anyone with the link can edit**
3. O crea una cuenta de servicio con permisos de editor

### 3. Actualizar Archivo de Configuración

#### A. Crear config.js
1. Copia `config.example.js` como `config.js`
2. Reemplaza los valores:

```javascript
const GOOGLE_CONFIG = {
    CLIENT_ID: 'TU_CLIENT_ID_REAL.apps.googleusercontent.com',
    
    AUTHORIZED_ORIGINS: [
        'https://tu-usuario.github.io/asperger-10-anos-conmemorativo',
        'https://aniversario.asperger.org',
        'http://localhost:3000'
    ],
    
    AUTO_SELECT: false,
    CANCEL_ON_TAP_OUTSIDE: true,
    
    SHEETS: {
        SPREADSHEET_ID: 'TU_SPREADSHEET_ID_REAL',
        RANGE: 'Sheet1!A:D',
        API_KEY: 'TU_API_KEY_REAL',
        SCOPES: [
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/spreadsheets'
        ]
    }
};
```

### 4. Verificar Configuración

#### A. Probar Localmente
1. Abre `welcome.html` en tu navegador
2. Abre las **Developer Tools** (F12)
3. Ve a la pestaña **Console**
4. Verifica que no hay errores de CORS o autenticación

#### B. Probar en GitHub Pages
1. Sube todos los archivos a tu repositorio
2. Asegúrate de que `config.js` esté en `.gitignore`
3. Verifica que la URL coincida con los dominios autorizados

## 🔧 Soluciones a Problemas Comunes

### Error: "This app isn't verified"
- **Solución**: En Google Cloud Console, ve a **OAuth consent screen** y marca como "Testing"

### Error: "Access blocked: This app's request is invalid"
- **Solución**: Verifica que los dominios autorizados coincidan exactamente con tu URL

### Error: "API key not valid"
- **Solución**: Verifica que la API Key tenga permisos para Google Sheets API

### Error: "The caller does not have permission"
- **Solución**: Verifica que la hoja de cálculo tenga permisos de escritura

## 📝 Checklist de Verificación

- [ ] Google Cloud Console configurado
- [ ] APIs habilitadas (OAuth, Sheets)
- [ ] OAuth 2.0 Client ID creado
- [ ] Dominios autorizados configurados
- [ ] API Key creada y restringida
- [ ] Google Sheets creada y configurada
- [ ] config.js creado con credenciales reales
- [ ] config.js en .gitignore
- [ ] Aplicación probada localmente
- [ ] Aplicación probada en GitHub Pages

## 🆘 Si Aún No Funciona

1. **Revisa la consola del navegador** para errores específicos
2. **Verifica que todas las URLs coincidan** exactamente
3. **Asegúrate de que las APIs estén habilitadas** en Google Cloud
4. **Confirma que la hoja de Google Sheets** tenga los permisos correctos
5. **Prueba con un dominio local** primero antes de GitHub Pages

## 📞 Soporte

Si necesitas ayuda adicional, revisa:
- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)
- [Google Sheets API Documentation](https://developers.google.com/sheets/api)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
