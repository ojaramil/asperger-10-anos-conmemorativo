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
    CANCEL_ON_TAP_OUTSIDE: true,
    
    // Google Sheets configuración
    SHEETS: {
        SPREADSHEET_ID: 'TU_SPREADSHEET_ID_AQUI', // Reemplaza con el ID de tu hoja
        RANGE: 'Sheet1!A:D', // Rango donde escribir los datos
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
