# BUBBLES - Perlas Explosivas con Proteína (Revienta la Rutina)

Proyecto de emprendimiento universitario desarrollado para la materia de **Emprendedores (9° Semestre) en la Universidad Autónoma de Aguascalientes (UAA)**.

Página web interactiva desarrollada con **React**, **Vite** y **JavaScript**, optimizada con diseño estético premium, interactividad sensorial, simulación de pedidos, facturación fiscal (CFDI 4.0), marco regulatorio (NOM-051 / COFEPRIS / PROFECO) y lista para alojarse en **GitHub Pages**.

---

## 🚀 Características Implementadas

1. **Portada & Hero Sensorial:**
   - Logotipo oficial de BUBBLES (la burbuja con la pesa de halterofilia) y eslogan *"Revienta la Rutina"*.
   - Propuesta de valor: perlas de proteína para agregar a cualquier bebida fría o caliente.
   - **Simulador Interactivo de Perla Explosiva**: Haz clic para morder una perla, experimentar la animación de estallido con sonido sintetizado Web Audio, confeti y contador de proteína liberada en vivo.
   - Botón directo de compra.

2. **Información del Producto:**
   - Atributos diferenciadores: Práctico (sin shakers olorosos ni grumos), dosificado con precisión y experiencia sensorial.
   - Presentación de **500 g (10 a 14 porciones)** y edición especial de **1 kg**.
   - Catálogo de sabores: **Chocolate Belga Intenso** (activo), Vainilla Bourbon, Fresa Silvestre y Matcha Latte (próximos lanzamientos).
   - Textura de esferificación con membrana de alginato natural.
   - Fotografías oficiales de producto (`producto1.png` con sello *"EXCESO PROTEÍNA"* y `producto2.png`).

3. **Nutrición & Inocuidad (NOM-051):**
   - **Contenido de proteína por porción destacado (20g de proteína de suero)**: atributo #1 más votado en la encuesta de mercado UAA (53%).
   - Tabla nutrimental interactiva con conmutador entre **Por Porción (45g)** y **Por 100g**.
   - Alerta oficial de alérgenos: **Contiene leche y derivados lácteos (suero de leche)**.
   - Instrucciones de conservación en frío (refrigeración obligatoria a 2°C - 4°C, no congelar) y fecha de caducidad (45 días).

4. **Modo de Uso & Maridajes:**
   - 4 pasos sencillos para consumir.
   - Sugerencias interactivas de bebidas: Café Frío / Iced Americano, Té Chai con Leche, Smoothie de Avena y Plátano, y Agua fría / Agua de coco.

5. **Compra, Carrito & Facturación CFDI:**
   - Rango de precios basado en encuesta ($200 a $350 MXN con IVA incluido): Individual 500g ($249 MXN), Dúo Pack 2x500g ($449 MXN) y Pro 1kg ($399 MXN).
   - Carrito interactivo con selector de cantidades y sabores.
   - Zona de entrega: **Aguascalientes Capital y Jesús María** ($45 MXN o gratis desde $400 MXN).
   - **Opción de Recolección Gratuita (Pickup)** en el Campus Central de la UAA.
   - Explicación de **empaque térmico con gel refrigerante** para asegurar la cadena de frío.
   - **Módulo de Facturación CFDI 4.0**: RFC, Razón Social, Régimen Fiscal (SAT), Código Postal, Uso de CFDI y correo para XML/PDF.
   - Métodos de pago simulados: Tarjeta, Transferencia SPEI (con botón para copiar CLABE) y Mercado Pago.
   - Generación de resumen de orden y botón para enviar el pedido directo a WhatsApp.

6. **Confianza, Alianzas & Marco Legal:**
   - Sección "Quiénes Somos": Origen hidrocálido y equipo UAA.
   - Reseñas y testimonios reales de catas universitarias.
   - Puntos de venta aliados en Aguascalientes.
   - Preguntas frecuentes en acordeón interactivo.
   - **Modales de Información Legal Completa**:
     - Aviso de Privacidad (LFPDPPP).
     - Términos y Condiciones.
     - Política de Cambios y Devoluciones para perecederos.
     - Datos del Proveedor para PROFECO.
     - Cumplimiento de etiquetado NOM-051, leyendas sanitarias COFEPRIS y trámite de marca IMPI.

---

## 🛠️ Cómo Ejecutar en Tu Computadora

1. Abre una terminal en esta carpeta.
2. Si aún no tienes instaladas las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo local:
   ```bash
   npm run dev
   ```
4. Abre tu navegador en la dirección que indica la terminal (por ejemplo, `http://localhost:5173/`).

---

## 🌐 Cómo Subirlo a GitHub y Activar GitHub Pages

1. **Inicializar Git y hacer commit:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Bubbles Perlas Explosivas con Proteina"
   ```

2. **Crear tu repositorio en GitHub** (ej. `bubbles-web`) y enlazarlo:
   ```bash
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
   git push -u origin main
   ```

3. **Activar GitHub Pages con GitHub Actions:**
   - Entra a tu repositorio en GitHub.
   - Dirígete a **Settings** > **Pages**.
   - En **Build and deployment** > **Source**, selecciona **GitHub Actions**.
   - El archivo incluido `.github/workflows/deploy.yml` compilará y publicará tu página de manera automática en cuestión de un par de minutos en:
     `https://TU-USUARIO.github.io/TU-REPOSITORIO/`
