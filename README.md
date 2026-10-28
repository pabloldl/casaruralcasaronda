# La Casa Ronda de El Bosque

Web local en HTML5, CSS3 y JavaScript vanilla. Abrir `index.html` con Live Server, sin instalación ni compilación. No se ha desplegado ni modificado otra carpeta del workspace.

## Fotografías incorporadas

Las ocho imágenes nuevas están en `img/`, no en `imgs/`. Se inspeccionaron visualmente todas antes de modificar la web. El cliente confirmó explícitamente en esta conversación que están autorizadas para publicación. Los JPEG originales se conservan intactos; no se deduce una licencia abierta ni se autoriza su redistribución por terceros.

| Original | Dimensiones | Contenido y valoración | Decisión |
| --- | --- | --- | --- |
| 280476400.jpg | 1024 × 768 | Salón con chimenea encendida, sofás y madera. Luz cálida, buen encuadre y ambiente doméstico. | Portada; la imagen que mejor comunica una estancia acogedora. |
| 105813831.jpg | 510 × 768 | Entrada blanca, puerta de madera, persianas verdes y naranjo. Vertical y de menor resolución, con detalle suficiente en tamaño contenido. | Galería vertical; sin ampliar la resolución del archivo. |
| 92018072.jpg | 1024 × 683 | Asiento en L y escalera con azulejos. Luz natural y materiales representativos. | Galería; rincón de estar distinto a la portada. |
| 280476370.jpg | 1024 × 768 | Cocina con madera y azulejos. Contraste alto entre interior y ventana; muestra bien un espacio diferente. | Galería, sin alterar ni reconstruir su contenido. |
| 255316691.jpg | 1024 × 768 | Patio, mesa, toldo y piscina al fondo. Encuadre desde puerta con zona izquierda oscura; aporta contexto de uso exterior. | Galería exterior, encuadre suave que conserva la mesa. |
| 255316659.jpg | 1024 × 768 | Piscina entre paredes blancas. Luz fría y encuadre cercano; complementa la vista del patio. | Galería, a escala secundaria respecto al salón. |
| 105806538.jpg | 1024 × 748 | Otra vista del salón, con vigas y sofás naranjas. Contraste alto en techo y ambientación distinta a la portada. | Descartada por repetición y para no confundir distintas presentaciones del mismo salón. Original conservado. |
| 40898764.jpg | 1024 × 768 | Sendero arbolado, sin vivienda identificable. Mucho detalle y luz moteada. | Descartada para dar prioridad a la casa y no atribuir a su parcela un lugar sin identificar. Original conservado. |

No se han recibido imágenes de dormitorios ni baños. No se muestran espacios de otra vivienda para suplirlos. Se recomienda incorporar en el futuro una fotografía actual de cada dormitorio y de ambos baños, con permiso de publicación. La fachada recibida permite identificar la entrada, pero no es una vista general del edificio.

## Composición y optimización

Portada de salón amplia, con nombre y llamada visibles. La galería combina una entrada vertical, el rincón interior horizontal, cocina, una nota breve y dos vistas exteriores. En móvil cambia a un recorrido de imágenes, conservando una pareja vertical de entrada y rincón. No se repite la portada en la galería. El entorno queda reducido a una foto secundaria, expresamente identificada.

Los seis archivos principales WebP suman 411.818 bytes (aprox. 402 KiB). Se generan variantes de 600 px para las cinco imágenes horizontales y se usan `srcset` y `sizes`; no se aumenta la resolución de los originales. Calidad WebP 84, sin filtros de color ni alteración del contenido. Solo hay recorte de presentación con `object-fit: cover`. La portada utiliza `fetchpriority="high"`; todas las demás fotos llevan `loading="lazy"`, dimensiones y alternativas descriptivas. El visor abre siempre la versión WebP de mayor resolución disponible, con encuadre completo.

Nombres de derivados: `salon-chimenea`, `entrada`, `rincon-escalera`, `cocina`, `patio`, `piscina`; sufijo `-600` para las versiones pequeñas. La herramienta de optimización usada es Sharp, ya disponible en `.qa/node_modules`; la web no depende de ella para funcionar.

## Datos y contacto

Se mantienen los datos contrastados en la revisión del 28/10/2026: Calle Ronda, 10, 11670 El Bosque, Cádiz; teléfono +34 651 613 435. La ficha de Booking describe uso completo, tres dormitorios, dos baños, salón, cocina equipada, piscina privada, terraza y barbacoa. Se conserva atribución en la web y se invita a confirmar las condiciones actuales y el uso de la piscina para cada estancia.

Fuentes: https://www.booking.com/hotel/es/casa-rural-casa-ronda.es.html y https://firmania.es/el-bosque-cadiz-andalucia/casa-rural-casa-ronda-1918129 . La revisión anterior utilizó su contenido indexado porque el acceso directo estaba limitado. No se realizó una nueva verificación comercial para esta integración de fotos ni una inspección física de la vivienda.

Sin aforo, tarifas, disponibilidad, correo, WhatsApp, aparcamiento o condiciones de contratación inventados. Los enlaces `tel:` permiten llamar, Google Maps busca la dirección y Booking se presenta como fuente, no como canal oficial del propietario.

## Créditos

Fotos de la vivienda: facilitadas y autorizadas por el cliente. Fotografía del paseo de El Bosque: Ismael Olea, https://commons.wikimedia.org/wiki/File:El_Bosque_20210609_01.jpg , licencia https://creativecommons.org/licenses/by/4.0/ . Redimensionada, convertida a WebP y recortada visualmente. Se conserva crédito visible en el footer.

La anterior `img/el-bosque.webp`, ahora sin uso, permanece en el proyecto: El Pantera, https://commons.wikimedia.org/wiki/File:El_Bosque_(provincia_de_C%C3%A1diz,_Espa%C3%B1a)_-_P1470062.jpg , CC BY-SA 4.0. Su adaptación conserva esa licencia. Fuentes locales con licencias existentes en `css/OFL-*.txt`; el diseño usa DM Sans y Georgia del sistema.

## Interacciones y comprobaciones ejecutadas

Visor con siete fotografías: portada, cinco imágenes de la galería y una del entorno. Admite ratón, Enter, flechas, Escape, controles táctiles y gesto horizontal; mantiene el foco en sus controles y lo devuelve al abrir/cerrar. Las fotos y los enlaces de llamada siguen visibles sin JavaScript; el visor necesita JavaScript. Se respeta `prefers-reduced-motion`, sin parallax ni animaciones permanentes.

Chrome headless con Playwright local, a 375, 768, 1440 y 1920 px: todas las fotos cargan, sin desbordamiento horizontal, anclas rotas, errores de JavaScript ni respuestas HTTP fallidas. Se prueban apertura, avance, retroceso, cierre, retorno de foco, ciclo de Tab, emulación táctil y gesto sintético; enlaces de contacto, navegación, movimiento reducido y llamadas disponibles sin JavaScript.

Evidencia actual: `.qa/photos.cjs`, `.qa/photos-results.json`, `.qa/photos-{ancho}.png` y `.qa/photo-assets.json`. Las capturas y scripts anteriores corresponden a etapas previas. Se inspeccionan visualmente las capturas de 375 y 1440 px. No se ha probado en un iPhone físico, efectuado llamadas reales, medido conversiones ni realizado una auditoría WCAG integral.
