// Configuración de Google OAuth - ARCHIVO DE EJEMPLO
// IMPORTANTE: Copia este archivo como config.js y reemplaza los valores con tus credenciales reales

const GOOGLE_CONFIG = {
    // Reemplaza con tu Client ID real de Google Cloud Console
    CLIENT_ID: 'TU_CLIENT_ID_AQUI.apps.googleusercontent.com',
    
    // URLs autorizadas (ajusta según tu dominio)
    AUTHORIZED_ORIGINS: [
        'https://tu-dominio.github.io/tu-repositorio',  // Tu dominio de GitHub Pages
        'https://aniversario.asperger.org',              // Tu dominio personalizado
        'http://localhost:3000'                          // Para desarrollo local
    ],
    
    // Configuración adicional
    AUTO_SELECT: false,
    CANCEL_ON_TAP_OUTSIDE: true,
    
    // Google Sheets configuración
    SHEETS: {
        SPREADSHEET_ID: 'TU_SPREADSHEET_ID_AQUI',        // ID de tu hoja de Google Sheets
        RANGE: 'Sheet1!A:D',                            // Rango donde escribir los datos
        API_KEY: 'TU_API_KEY_AQUI',                     // API Key para Google Sheets
        SCOPES: [
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/spreadsheets'
        ]
    }
};

// Función para obtener la configuración
function getGoogleConfig() {
    return GOOGLE_CONFIG;
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getGoogleConfig };
}