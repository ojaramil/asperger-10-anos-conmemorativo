// Configuración de Google OAuth
// IMPORTANTE: Este archivo NO debe subirse a Git
// Agrega config.js a tu .gitignore

const GOOGLE_CONFIG = {
    // Reemplaza con tu Client ID real de Google Cloud Console
    CLIENT_ID: 'YOUR_GOOGLE_CLIENT_ID_HERE',
    
    // URLs autorizadas (ajusta según tu dominio)
    AUTHORIZED_ORIGINS: [
        'https://ojaramil.github.io',
        'https://ojaramil.github.io/asperger-10-anos-conmemorativo',
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
