# 🎉 Asperger para Asperger - 10 Años Conmemorativo

Una página web conmemorativa celebrando 10 años de Asperger para Asperger, con autenticación Google y experiencia interactiva.

## 🌐 Sitio en Vivo

**URL del sitio**: `https://tu-usuario.github.io/asperger-10-anos-conmemorativo`

## 🚀 Despliegue en GitHub Pages

### Configuración Automática
1. Haz fork de este repositorio
2. Ve a Settings → Pages
3. Selecciona "Deploy from a branch" → main
4. Tu sitio estará disponible en minutos

### Configuración Manual
1. Crea un nuevo repositorio en GitHub
2. Sube todos los archivos
3. Sigue la guía en `GITHUB_SETUP.md`

## ⚙️ Configuración

### 1. Configurar Google Sign-in
1. Sigue la guía en `GOOGLE_SETUP.md`
2. Actualiza `config.js` con tu Client ID
3. Configura las URLs autorizadas

### 2. Archivos del Proyecto
```
├── index.html          # Redirección a welcome.html
├── welcome.html        # Página de bienvenida con Google Sign-in
├── main.html          # Página conmemorativa principal
├── styles.css         # Estilos principales
├── script.js          # JavaScript principal
├── config.js          # Configuración Google (NO subir a Git)
├── logo.png           # Logo principal
├── logo2.png          # Logo secundario
└── GOOGLE_SETUP.md    # Guía de configuración
```

## 🔒 Seguridad

- `config.js` está protegido por `.gitignore`
- No subir credenciales a Git
- Usar HTTPS en producción

## 📱 Características

- ✅ Página de bienvenida elegante
- ✅ Google Sign-in integrado
- ✅ Diseño responsive
- ✅ Animaciones suaves
- ✅ Experiencia conmemorativa completa

## 🛠️ Desarrollo Local

1. Abre `welcome.html` en tu navegador
2. O usa un servidor local:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx serve .
   
   # PHP
   php -S localhost:8000
   ```

## 📞 Soporte

Para problemas de configuración, revisa `GOOGLE_SETUP.md`
