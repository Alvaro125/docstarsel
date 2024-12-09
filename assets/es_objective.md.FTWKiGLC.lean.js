import{_ as e,c as i,a2 as s,o as t}from"./chunks/framework.BS4CiDIo.js";const h=JSON.parse('{"title":"Propósito de la documentación","description":"","frontmatter":{"aside":true,"outline":[]},"headers":[],"relativePath":"es/objective.md","filePath":"es/objective.md"}'),n={name:"es/objective.md"};function o(l,a,r,c,p,d){return t(),i("div",null,a[0]||(a[0]=[s(`<h1 id="proposito-de-la-documentacion" tabindex="-1">Propósito de la documentación <a class="header-anchor" href="#proposito-de-la-documentacion" aria-label="Permalink to &quot;Propósito de la documentación&quot;">​</a></h1><h2 id="estructura-basica-de-la-documentacion" tabindex="-1"><strong>Estructura Básica de la Documentación</strong> <a class="header-anchor" href="#estructura-basica-de-la-documentacion" aria-label="Permalink to &quot;**Estructura Básica de la Documentación**&quot;">​</a></h2><ul><li><p><strong>Introducción</strong></p><ul><li>Nombre del proyecto.</li><li>Resumen de lo que hace.</li><li>Objetivo principal y público objetivo.</li><li>Enlace al sitio o repositorio.</li></ul></li><li><p><strong>Instalación</strong></p><ul><li>Requisitos (Node.js, npm, yarn, etc.).</li><li>Pasos para configurar el entorno local.</li><li>Instrucciones para ejecutar el proyecto (ej.: <code>npm install</code>, <code>npm run dev</code>).</li></ul></li><li><p><strong>Uso</strong></p><ul><li>Ejemplos de cómo ejecutar la aplicación.</li><li>Descripción de las principales funcionalidades.</li><li>Capturas de pantalla o GIFs demostrativos.</li></ul></li><li><p><strong>Contribución</strong></p><ul><li>Reglas para contribuir al proyecto.</li><li>Cómo abrir issues o pull requests.</li><li>Guía de buenas prácticas de código y estilo.</li></ul></li><li><p><strong>Licencia</strong></p><ul><li>Tipo de licencia del proyecto (MIT, GPL, etc.).</li></ul></li></ul><hr><h2 id="estructura-para-proyectos-frontend" tabindex="-1"><strong>Estructura para Proyectos Frontend</strong> <a class="header-anchor" href="#estructura-para-proyectos-frontend" aria-label="Permalink to &quot;**Estructura para Proyectos Frontend**&quot;">​</a></h2><p>Además de la estructura básica, puedes incluir secciones específicas para proyectos frontend:</p><h4 id="tecnologias-y-dependencias" tabindex="-1"><strong>Tecnologías y Dependencias</strong> <a class="header-anchor" href="#tecnologias-y-dependencias" aria-label="Permalink to &quot;**Tecnologías y Dependencias**&quot;">​</a></h4><ul><li>Lista de tecnologías principales utilizadas, como: <ul><li>Framework (React, Vue, Angular).</li><li>Gestor de estado (Redux, Pinia).</li><li>Herramientas de compilación (Vite, Webpack).</li><li>Otras dependencias importantes.</li></ul></li></ul><h4 id="estructura-de-carpetas" tabindex="-1"><strong>Estructura de Carpetas</strong> <a class="header-anchor" href="#estructura-de-carpetas" aria-label="Permalink to &quot;**Estructura de Carpetas**&quot;">​</a></h4><ul><li><p>Explica cómo están organizados los directorios:</p><div class="language-plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>src/</span></span>
<span class="line"><span>  components/</span></span>
<span class="line"><span>  views/</span></span>
<span class="line"><span>  assets/</span></span>
<span class="line"><span>  styles/</span></span>
<span class="line"><span>  utils/</span></span></code></pre></div></li><li><p>Agrega una breve descripción de cada carpeta.</p></li></ul><h4 id="guia-de-componentes" tabindex="-1"><strong>Guía de Componentes</strong> <a class="header-anchor" href="#guia-de-componentes" aria-label="Permalink to &quot;**Guía de Componentes**&quot;">​</a></h4><ul><li>Documenta los principales componentes.</li><li>Incluye: <ul><li>Propiedades (<code>props</code>).</li><li>Eventos emitidos.</li><li>Ejemplos de uso:<div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Click me&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> color</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;primary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div></li></ul></li></ul><h4 id="estilo-y-temas" tabindex="-1"><strong>Estilo y Temas</strong> <a class="header-anchor" href="#estilo-y-temas" aria-label="Permalink to &quot;**Estilo y Temas**&quot;">​</a></h4><ul><li>Explica cómo están organizados los estilos (CSS, SCSS, Tailwind).</li><li>Instrucciones para cambiar temas, variables o colores.</li></ul><h4 id="rutas" tabindex="-1"><strong>Rutas</strong> <a class="header-anchor" href="#rutas" aria-label="Permalink to &quot;**Rutas**&quot;">​</a></h4><ul><li>Lista todas las rutas de la aplicación.</li><li>Indica sus funcionalidades y parámetros:<div class="language-plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/login - Página de inicio de sesión  </span></span>
<span class="line"><span>/dashboard - Panel principal (requiere autenticación)</span></span></code></pre></div></li></ul><hr><h2 id="herramientas-para-documentacion" tabindex="-1"><strong>Herramientas para Documentación</strong> <a class="header-anchor" href="#herramientas-para-documentacion" aria-label="Permalink to &quot;**Herramientas para Documentación**&quot;">​</a></h2><ul><li><strong>Markdown</strong>: Usa archivos <code>.md</code> para crear documentos simples.</li><li><strong>VitePress/Docusaurus</strong>: Para documentación generada como sitios web.</li><li><strong>Storybook</strong>: Documenta componentes de forma interactiva.</li><li><strong>GitHub README</strong>: Comienza con un archivo <code>README.md</code> en el repositorio.</li></ul><hr><h2 id="estilo-y-accesibilidad" tabindex="-1"><strong>Estilo y Accesibilidad</strong> <a class="header-anchor" href="#estilo-y-accesibilidad" aria-label="Permalink to &quot;**Estilo y Accesibilidad**&quot;">​</a></h2><ul><li>Usa un lenguaje claro y objetivo.</li><li>Agrega imágenes y ejemplos de código.</li><li>Asegúrate de que la documentación esté actualizada y bien formateada.</li></ul>`,22)]))}const m=e(n,[["render",o]]);export{h as __pageData,m as default};
