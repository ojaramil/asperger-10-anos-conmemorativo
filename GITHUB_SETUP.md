# 🐙 Configuración para GitHub Pages

## 🔐 ¿Por qué GitHub Pages es más seguro?

### Ventajas de Seguridad:
- ✅ **HTTPS automático** - Siempre encriptado
- ✅ **CDN global** - Distribución segura
- ✅ **Protección DDoS** - Automática
- ✅ **Sin servidor que mantener** - Menos vulnerabilidades
- ✅ **Backup automático** - Tu código está respaldado
- ✅ **Control de versiones** - Historial completo

## 🚀 Pasos para Configurar GitHub Pages

### 1. Crear Repositorio en GitHub

1. Ve a [github.com](https://github.com)
2. Clic en "New repository" (botón verde)
3. **Nombre del repositorio**: `asperger-10-anos-conmemorativo`
4. **Descripción**: "Página conmemorativa de 10 años de Asperger para Asperger"
5. Marca **"Public"** (necesario para GitHub Pages gratuito)
6. **NO marques** "Add README" (ya tienes uno)
7. Clic en "Create repository"

### 2. Subir Código a GitHub

#### Opción A - GitHub Desktop (Recomendado para principiantes)

1. **Descarga GitHub Desktop**:
   - Ve a [desktop.github.com](https://desktop.github.com)
   - Descarga e instala GitHub Desktop
   - Inicia sesión con tu cuenta de GitHub

2. **Clonar el repositorio**:
   - En GitHub Desktop: "Clone a repository from the Internet"
   - Busca tu repositorio: `asperger-10-anos-conmemorativo`
   - Selecciona una carpeta local (ej: `C:\Users\TuUsuario\Documents\`)

3. **Subir archivos**:
   - Copia todos los archivos del proyecto a la carpeta del repositorio
   - En GitHub Desktop verás los archivos nuevos
   - Escribe un mensaje: "Initial commit - Asperger 10 años conmemorativo"
   - Clic en "Commit to main"
   - Clic en "Push origin"

#### Opción B - Git por línea de comandos

```bash
# 1. Navegar a tu carpeta del proyecto
cd "ruta/a/tu/proyecto"

# 2. Inicializar Git
git init

# 3. Agregar archivos
git add .

# 4. Hacer commit
git commit -m "Initial commit - Asperger 10 años conmemorativo"

# 5. Conectar con GitHub
git branch -M main
git remote add origin https://github.com/TU-USUARIO/asperger-10-anos-conmemorativo.git

# 6. Subir código
git push -u origin main
```

### 3. Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Clic en **"Settings"** (pestaña superior)
3. Scroll hacia abajo hasta **"Pages"** (menú lateral izquierdo)
4. En **"Source"**, selecciona **"Deploy from a branch"**
5. **Branch**: `main`
6. **Folder**: `/ (root)`
7. Clic en **"Save"**

### 4. Esperar el Despliegue

- GitHub tardará 1-2 minutos en desplegar tu sitio
- Verás un mensaje verde: "Your site is published at..."
- Tu sitio estará en: `https://TU-USUARIO.github.io/asperger-10-anos-conmemorativo`

### 5. Configurar Google Sign-in

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Ve a **"APIs & Services"** → **"Credentials"**
3. Edita tu **OAuth 2.0 Client ID**
4. Agrega a **"Authorized JavaScript origins"**:
   - `https://TU-USUARIO.github.io`
   - `https://TU-USUARIO.github.io/asperger-10-anos-conmemorativo`
5. **Guarda** los cambios

### 6. Actualizar config.js

1. **Copia** `config.example.js` como `config.js`
2. **Edita** `config.js` y reemplaza:
   ```javascript
   CLIENT_ID: 'YOUR_GOOGLE_CLIENT_ID_HERE' // Con tu Client ID real
   AUTHORIZED_ORIGINS: [
       'https://TU-USUARIO.github.io',
       'https://TU-USUARIO.github.io/asperger-10-anos-conmemorativo',
       'http://localhost:3000' // Para desarrollo local
   ]
   ```

3. **Sube** el archivo actualizado a GitHub

## 🌐 URLs de tu Sitio

- **Principal**: `https://TU-USUARIO.github.io/asperger-10-anos-conmemorativo`
- **Bienvenida**: `https://TU-USUARIO.github.io/asperger-10-anos-conmemorativo/welcome.html`
- **Conmemorativa**: `https://TU-USUARIO.github.io/asperger-10-anos-conmemorativo/main.html`

## 📁 Archivos Necesarios para GitHub

### ✅ Archivos que SÍ subir:
```
asperger-10-anos-conmemorativo/
├── index.html              # ✅ Página principal
├── welcome.html            # ✅ Página de bienvenida
├── main.html              # ✅ Página conmemorativa
├── styles.css             # ✅ Estilos
├── script.js              # ✅ JavaScript
├── config.js              # ✅ Configuración (con tu Client ID)
├── logo.png               # ✅ Logo principal
├── logo2.png              # ✅ Logo secundario
├── README.md              # ✅ Documentación
├── .gitignore             # ✅ Archivos a ignorar
├── config.example.js      # ✅ Ejemplo de configuración
├── GOOGLE_SETUP.md        # ✅ Guía de Google
└── GITHUB_SETUP.md        # ✅ Esta guía
```

### ❌ Archivos que NO subir:
- Archivos temporales
- Archivos de configuración local
- Archivos del sistema (.DS_Store, Thumbs.db)

## 🔧 Configuración Adicional

### Dominio Personalizado (Opcional)
Si quieres usar tu propio dominio:

1. En GitHub Pages settings, agrega tu dominio en **"Custom domain"**
2. Configura DNS en tu proveedor de dominio:
   - **CNAME**: `www` → `TU-USUARIO.github.io`
   - **A**: `@` → `185.199.108.153` (IP de GitHub)

### Actualizaciones Automáticas
- Cada vez que hagas `git push`, GitHub actualizará automáticamente tu sitio
- Los cambios se reflejan en 1-2 minutos

## 🚨 Solución de Problemas

### El sitio no carga
1. Verifica que todos los archivos estén en la rama `main`
2. Revisa que GitHub Pages esté activado en Settings
3. Espera 2-3 minutos para el despliegue

### Google Sign-in no funciona
1. Verifica que `config.js` esté subido con tu Client ID real
2. Confirma que las URLs estén en Google Cloud Console
3. Revisa la consola del navegador (F12) para errores

### Error 404
1. Verifica que `index.html` esté en la raíz del repositorio
2. Asegúrate de que el nombre del repositorio sea correcto

## 🎉 ¡Despliegue Completado!

Una vez configurado, tu sitio estará disponible en:
**`https://TU-USUARIO.github.io/asperger-10-anos-conmemorativo`**

### Ventajas de GitHub Pages:
- ✅ **Gratis** para siempre
- ✅ **HTTPS automático**
- ✅ **CDN global** (carga rápida)
- ✅ **Despliegue automático**
- ✅ **Control de versiones**
- ✅ **Muy seguro**

## 📞 Soporte

- **GitHub Docs**: [docs.github.com](https://docs.github.com)
- **GitHub Support**: [support.github.com](https://support.github.com)
- **GitHub Pages**: [pages.github.com](https://pages.github.com)

