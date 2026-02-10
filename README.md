# Proyecto Carpintería

Este proyecto es una web para una carpintería

## Estructura del Proyecto

La web está organizada de forma modular para facilitar su mantenimiento:
* **HTML5:** Estructura semántica (header, main, section, footer).
* **CSS3:** Estilos personalizados organizados por secciones.
* **JavaScript:** Lógica para la validación del formulario.
* **Imágenes:** Fotos de carpinteros guardadas en  `/img`.


## Tecnologías y Metodologías

### Responsividad
La web se ha diseñado con una adaptación total a dispositivos móviles. 
* Menú de navegación colapsable y grids que pasan de 3 columnas a 1 en pantallas pequeñas.

### Layout: Flexbox y CSS Grid
* **CSS Grid:** Utilizado para las estructuras complejas como la cuadrícula de servicios y el sistema de tarjetas (cards).
* **Flexbox:** Aplicado en la navegación, el footer y la alineación interna de los botones para centrar el contenido.

### Validaciones y Formularios
El formulario de contacto incluye un archivo .js para validar los campos escritos:
* **Validación de JavaScript:** Comprobación en tiempo real de campos obligatorios, formato de email y longitud de mensaje.
* **Feedback al usuario:** Mensajes de error claros y visuales para guiar al usuario.

### Accesibilidad y Semántica
* Uso de etiquetas semánticas para que los lectores de pantalla interpreten correctamente la jerarquía.
* Contraste de colores optimizado.
* Atributos `alt` en todas las imágenes para mejorar la indexación y accesibilidad.


## Optimización y Rendimiento

Se han realizado pruebas de rendimiento utilizando **Google PageSpeed Insights**.

### Resultados obtenidos:
| Métrica | Móvil | Ordenador |
| :--- | :---: | :---: |
| **Rendimiento** | 74 | 94 |
| **Accesibilidad** | 98 | 98 |
| **Prácticas recomendadas** | 100 | 100 |
| **SEO** | 91 | 91 |

![alt text](<Captura de pantalla 2026-02-10 181140.png>)

![alt text](<Captura de pantalla 2026-02-10 181148.png>)
