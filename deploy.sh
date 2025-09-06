#!/bin/bash

# Script de despliegue para GitHub Pages
# App Conmemorativa - 10 Años de Asperger para Asperger

echo "🚀 Iniciando despliegue a GitHub Pages..."

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para imprimir mensajes
print_message() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Verificar si Git está inicializado
if [ ! -d ".git" ]; then
    print_message "Inicializando repositorio Git..."
    git init
    print_success "Repositorio Git inicializado"
fi

# Verificar si config.js existe
if [ ! -f "config.js" ]; then
    print_warning "config.js no encontrado. Creando desde config.example.js..."
    if [ -f "config.example.js" ]; then
        cp config.example.js config.js
        print_success "config.js creado desde config.example.js"
        print_warning "IMPORTANTE: Debes editar config.js con tus credenciales reales"
    else
        print_error "config.example.js no encontrado. No se puede crear config.js"
        exit 1
    fi
fi

# Verificar que config.js esté en .gitignore
if [ -f ".gitignore" ]; then
    if ! grep -q "config.js" .gitignore; then
        print_message "Agregando config.js a .gitignore..."
        echo "config.js" >> .gitignore
        print_success "config.js agregado a .gitignore"
    fi
else
    print_message "Creando .gitignore..."
    echo "config.js" > .gitignore
    echo ".env" >> .gitignore
    echo ".DS_Store" >> .gitignore
    echo "node_modules/" >> .gitignore
    print_success ".gitignore creado"
fi

# Agregar archivos al staging
print_message "Agregando archivos al staging..."
git add .

# Verificar si hay cambios para commit
if git diff --staged --quiet; then
    print_warning "No hay cambios para commit"
else
    # Commit
    print_message "Creando commit..."
    git commit -m "Deploy: App Conmemorativa 10 años - $(date '+%Y-%m-%d %H:%M:%S')"
    print_success "Commit creado"
fi

# Verificar si hay un remote origin
if ! git remote | grep -q "origin"; then
    print_message "No hay remote origin configurado"
    echo "Por favor, ejecuta uno de estos comandos:"
    echo ""
    echo "Opción 1 - Crear repositorio con GitHub CLI:"
    echo "  gh repo create asperger-10-anos-conmemorativo --public"
    echo "  git remote add origin https://github.com/TU_USUARIO/asperger-10-anos-conmemorativo.git"
    echo ""
    echo "Opción 2 - Crear repositorio manualmente:"
    echo "  1. Ve a https://github.com/new"
    echo "  2. Crea un repositorio llamado 'asperger-10-anos-conmemorativo'"
    echo "  3. Ejecuta: git remote add origin https://github.com/TU_USUARIO/asperger-10-anos-conmemorativo.git"
    echo ""
    echo "Reemplaza TU_USUARIO con tu nombre de usuario de GitHub"
    exit 1
fi

# Push al repositorio
print_message "Subiendo cambios a GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    print_success "Código subido exitosamente a GitHub"
    
    # Obtener URL del repositorio
    REPO_URL=$(git remote get-url origin)
    USERNAME=$(echo $REPO_URL | sed 's/.*github.com[:/]\([^/]*\)\/.*/\1/')
    REPO_NAME=$(echo $REPO_URL | sed 's/.*\/\([^.]*\)\.git/\1/')
    
    GITHUB_PAGES_URL="https://$USERNAME.github.io/$REPO_NAME"
    
    print_success "🎉 Despliegue completado!"
    echo ""
    echo "📱 Tu aplicación estará disponible en:"
    echo "   $GITHUB_PAGES_URL"
    echo ""
    echo "⏰ Nota: Puede tomar 5-10 minutos para que GitHub Pages actualice"
    echo ""
    echo "🔧 Próximos pasos:"
    echo "  1. Configura Google Cloud Console (ver GOOGLE_CLOUD_SETUP.md)"
    echo "  2. Edita config.js con tus credenciales"
    echo "  3. Prueba la aplicación en: $GITHUB_PAGES_URL"
    echo "  4. Verifica configuración con: $GITHUB_PAGES_URL/test-config.html"
    echo ""
    echo "📚 Documentación:"
    echo "  - README.md: Instrucciones completas"
    echo "  - GOOGLE_CLOUD_SETUP.md: Configuración de Google Cloud"
    echo "  - test-config.html: Herramienta de diagnóstico"
    
else
    print_error "Error al subir código a GitHub"
    echo "Verifica que:"
    echo "  1. Tengas permisos de escritura en el repositorio"
    echo "  2. El repositorio exista en GitHub"
    echo "  3. Tu conexión a internet funcione"
    exit 1
fi
