# Carpeta de Imágenes (`assets/img/`)

Esta carpeta contiene todos los recursos gráficos del sitio web organizados por categorías.

## Estructura de Carpetas

- **`profile/`**: Foto de perfil y avatares del portafolio.
- **`projects/`**: Capturas de pantalla o miniaturas de los proyectos/trabajos.
- **`icons/`**: Logotipos, íconos personalizados o insignias.

---

## Buenas Prácticas de Optimización y Rendimiento

1. **Formatos recomendados**:
   - Fotos/Capturas: **`.webp`** (o `.jpg`/`.png` debidamente comprimidos).
   - Logotipos/Íconos: **`.svg`** (vectoriales, escalables y ligeros).

2. **Convención de nombres**:
   - Todo en **minúsculas** separado por guiones cortos (`kebab-case`).
   - *Ejemplo correcto*: `proyecto-ecommerce.webp`, `foto-perfil.webp`.
   - *Evitar*: `Foto Perfil 1 (Nueva).PNG`, `IMG_0023.jpg`.

3. **Dimensiones sugeridas**:
   - Foto de perfil: `400x400 px` (relación 1:1).
   - Capturas de proyectos: `800x450 px` (relación 16:9).

4. **Accesibilidad (SEO y lectores de pantalla)**:
   - Siempre define el atributo `alt="Descripción clara de la imagen"` en tus etiquetas `<img>`.
