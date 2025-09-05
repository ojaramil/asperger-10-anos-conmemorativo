// Configuración de Google OAuth - ARCHIVO DE EJEMPLO
// IMPORTANTE: 
// 1. Copia este archivo como config.js
// 2. Reemplaza YOUR_GOOGLE_CLIENT_ID_HERE con tu Client ID real
// 3. NO subas config.js a GitHub (está en .gitignore)

const GOOGLE_CONFIG = {
    // Reemplaza con tu Client ID real de Google Cloud Console
    CLIENT_ID: 'YOUR_GOOGLE_CLIENT_ID_HERE',
    
    // URLs autorizadas (ajusta según tu dominio)
    AUTHORIZED_ORIGINS: [
        'https://tu-usuario.github.io',
        'https://tu-usuario.github.io/asperger-10-anos-conmemorativo',
        'http://localhost:3000' // Para desarrollo local
    ],
    
    // Configuración adicional
    AUTO_SELECT: false,
    CANCEL_ON_TAP_OUTSIDE: true
};

// Función para obtener la configuración
function getGoogleConfig() {
    return GOOGLE_CONFIG;
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getGoogleConfig };
}

