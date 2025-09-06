// Configuración pública de Google OAuth
// Este archivo SÍ se sube a Git y contiene solo información no sensible

const GOOGLE_CONFIG = {
    // Client ID público (no es sensible)
    CLIENT_ID: '523217777262-5qqpqpurkkkede0p3i7fofmt7978hf77.apps.googleusercontent.com',
    
    // URLs autorizadas (ajusta según tu dominio)
    AUTHORIZED_ORIGINS: [
        'https://aniversario.aspergerparaasperger.org',
        'https://ojaramil.github.io',
        'http://localhost:3000' // Para desarrollo local
    ],
    
    // Configuración adicional
    AUTO_SELECT: false,
    CANCEL_ON_TAP_OUTSIDE: true,
    
    // Google Sheets configuración (solo para referencia, no se usa en el cliente)
    SHEETS: {
        SPREADSHEET_ID: '1S3mJLZff9lq_MEJxU3L2h4im0hNnEXcd-Dm_uw623PQ',
        RANGE: 'Sheet1!A:D',
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
