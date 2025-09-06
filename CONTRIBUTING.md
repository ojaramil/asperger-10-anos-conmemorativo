# Guía de Contribución - Sitio Conmemorativo

## 🛡️ Protección del Sitio

Este sitio web está protegido contra cambios no autorizados. Sigue estas reglas:

### ✅ **Proceso de Cambios Seguro:**

1. **NUNCA** hagas cambios directamente en la rama `main`
2. **SIEMPRE** usa la rama `develop` para cambios
3. **SIEMPRE** crea un Pull Request para revisar cambios
4. **SIEMPRE** espera aprobación antes de hacer merge

### 🔒 **Ramas Protegidas:**

- **`main`**: Solo para código estable y desplegado
- **`develop`**: Para desarrollo y pruebas

### 📋 **Pasos para hacer cambios:**

```bash
# 1. Cambiar a rama de desarrollo
git checkout develop

# 2. Hacer tus cambios
# (editar archivos)

# 3. Agregar cambios
git add .

# 4. Hacer commit
git commit -m "Descripción clara del cambio"

# 5. Subir a GitHub
git push origin develop

# 6. Crear Pull Request en GitHub
# 7. Esperar revisión y aprobación
# 8. Merge solo después de aprobación
```

### ⚠️ **Advertencias:**

- Los cambios directos a `main` pueden romper el sitio
- Siempre prueba en `develop` primero
- Mantén el sitio estable y funcional
- Documenta todos los cambios importantes

### 🆘 **En caso de emergencia:**

Si necesitas hacer un cambio urgente:
1. Contacta al administrador del repositorio
2. Documenta la razón de la urgencia
3. Haz el cambio mínimo necesario
4. Notifica inmediatamente después

---
**Recuerda: La estabilidad del sitio es prioritaria**
