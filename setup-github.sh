#!/bin/bash

# Script de configuración rápida para GitHub
# App Conmemorativa - 10 Años de Asperger para Asperger

echo "🔧 Configurando proyecto para GitHub..."

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

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

# Verificar si GitHub CLI está instalado
if ! command -v gh &> /dev/null; then
    print_warning "GitHub CLI no está instalado"
    echo "Instala GitHub CLI desde: https://cli.github.com/"
    echo "O usa la interfaz web de GitHub"
    USE_WEB=true
else
    USE_WEB=false
fi

# Verificar si Git está instalado
if ! command -v git &> /dev/null; then
    print_error "Git no está instalado"
    echo "Instala Git desde: https://git-scm.com/"
    exit 1
fi

# Inicializar Git si no está inicializado
if [ ! -d ".git" ]; then
    print_message "Inicializando repositorio Git..."
    git init
    print_success "Repositorio Git inicializado"
fi

# Crear .gitignore si no existe
if [ ! -f ".gitignore" ]; then
    print_message "Creando .gitignore..."
    cat > .gitignore << EOF
# Archivos de configuración sensibles
config.js
.env
.env.local
.env.production
.env.example

# Archivos de configuración local
config.local.js
secrets.js

# Archivos del sistema
.DS_Store
Thumbs.db

# Archivos de IDE
.vscode/
.idea/
*.swp
*.swo

# Archivos de log
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Dependencias
node_modules/
bower_components/

# Archivos de build
dist/
build/
EOF
    print_success ".gitignore creado"
fi

# Crear config.js desde config.example.js si no existe
if [ ! -f "config.js" ]; then
    if [ -f "config.example.js" ]; then
        print_message "Creando config.js desde config.example.js..."
        cp config.example.js config.js
        print_success "config.js creado"
        print_warning "IMPORTANTE: Debes editar config.js con tus credenciales reales"
    else
        print_error "config.example.js no encontrado"
        exit 1
    fi
fi

# Agregar archivos al staging
print_message "Agregando archivos al staging..."
git add .

# Commit inicial
print_message "Creando commit inicial..."
git commit -m "Initial commit: App Conmemorativa 10 años de Asperger para Asperger"

if [ "$USE_WEB" = true ]; then
    print_message "Configuración local completada"
    echo ""
    echo "📋 Próximos pasos manuales:"
    echo "  1. Ve a https://github.com/new"
    echo "  2. Crea un repositorio llamado 'asperger-10-anos-conmemorativo'"
    echo "  3. Ejecuta estos comandos:"
    echo "     git remote add origin https://github.com/TU_USUARIO/asperger-10-anos-conmemorativo.git"
    echo "     git push -u origin main"
    echo "  4. Ve a Settings > Pages en tu repositorio"
    echo "  5. Selecciona 'Deploy from a branch' y elige 'main'"
    echo "  6. Guarda la configuración"
    echo ""
    echo "🔧 Configuración de Google Cloud:"
    echo "  1. Sigue las instrucciones en GOOGLE_CLOUD_SETUP.md"
    echo "  2. Edita config.js con tus credenciales"
    echo "  3. Prueba con test-config.html"
else
    # Usar GitHub CLI
    print_message "Creando repositorio en GitHub..."
    
    # Preguntar por el nombre del repositorio
    read -p "Nombre del repositorio (default: asperger-10-anos-conmemorativo): " REPO_NAME
    REPO_NAME=${REPO_NAME:-asperger-10-anos-conmemorativo}
    
    # Preguntar por la descripción
    read -p "Descripción del repositorio: " REPO_DESC
    REPO_DESC=${REO_DESC:-"App Conmemorativa - 10 Años de Asperger para Asperger"}
    
    # Crear repositorio
    gh repo create "$REPO_NAME" --public --description "$REPO_DESC"
    
    if [ $? -eq 0 ]; then
        print_success "Repositorio creado en GitHub"
        
        # Agregar remote origin
        print_message "Configurando remote origin..."
        git remote add origin "https://github.com/$(gh api user --jq .login)/$REPO_NAME.git"
        
        # Push inicial
        print_message "Subiendo código a GitHub..."
        git push -u origin main
        
        if [ $? -eq 0 ]; then
            print_success "Código subido exitosamente"
            
            # Habilitar GitHub Pages
            print_message "Habilitando GitHub Pages..."
            gh api repos/$(gh api user --jq .login)/$REPO_NAME/pages --method POST --field source[type]=branch --field source[branch]=main
            
            if [ $? -eq 0 ]; then
                print_success "GitHub Pages habilitado"
            else
                print_warning "No se pudo habilitar GitHub Pages automáticamente"
                echo "Hazlo manualmente en Settings > Pages"
            fi
            
            # Obtener URL
            USERNAME=$(gh api user --jq .login)
            GITHUB_PAGES_URL="https://$USERNAME.github.io/$REPO_NAME"
            
            print_success "🎉 Configuración completada!"
            echo ""
            echo "📱 Tu aplicación estará disponible en:"
            echo "   $GITHUB_PAGES_URL"
            echo ""
            echo "🔧 Próximos pasos:"
            echo "  1. Configura Google Cloud Console (ver GOOGLE_CLOUD_SETUP.md)"
            echo "  2. Edita config.js con tus credenciales"
            echo "  3. Prueba la aplicación en: $GITHUB_PAGES_URL"
            echo "  4. Verifica configuración con: $GITHUB_PAGES_URL/test-config.html"
            
        else
            print_error "Error al subir código a GitHub"
            exit 1
        fi
        
    else
        print_error "Error al crear repositorio en GitHub"
        exit 1
    fi
fi

print_success "✅ Configuración completada"
