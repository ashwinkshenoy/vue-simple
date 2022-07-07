<template><div><masthead title="Border Classes" description="Use these utility classes to set element borders." /><h2 id="border" tabindex="-1"><a class="header-anchor" href="#border" aria-hidden="true">#</a> Border</h2>
<p>These classes can be applied using the following format <br/>
<code v-pre>u-border-{direction}</code></p>
<p>The <strong>direction</strong> designates the side the property applies to:</p>
<ul>
<li><code v-pre>t</code> - applies the border to <code v-pre>top</code>.</li>
<li><code v-pre>r</code> - applies the border to <code v-pre>right</code>.</li>
<li><code v-pre>b</code> - applies the border to <code v-pre>bottom</code>.</li>
<li><code v-pre>l</code> - applies the border to <code v-pre>left</code>.</li>
<li><code v-pre>h</code> - applies the border to both <code v-pre>*-left</code> and <code v-pre>*-right</code>.</li>
<li><code v-pre>v</code> - applies the border to both <code v-pre>*-top</code> and <code v-pre>*-bottom</code>.</li>
<li>If left empty, applies the border in all directions. (Ex: <code v-pre>u-border</code>)</li>
</ul>
<h2 id="border-radius" tabindex="-1"><a class="header-anchor" href="#border-radius" aria-hidden="true">#</a> Border Radius</h2>
<p>These classes can be applied using the following format <br/>
<code v-pre>u-br-{direction}-{size}</code></p>
<p>The <strong>direction</strong> designates the side, the property applies to:</p>
<ul>
<li><code v-pre>t</code> - applies the border radius to both <code v-pre>top-left</code> &amp; <code v-pre>top-right</code>.</li>
<li><code v-pre>tl</code> - applies the border radius to <code v-pre>top-left</code>.</li>
<li><code v-pre>tr</code> - applies the border radius to <code v-pre>top-left</code>.</li>
<li><code v-pre>b</code> - applies the border radius to both <code v-pre>bottom-left</code> &amp; <code v-pre>bottom-right</code>.</li>
<li><code v-pre>bl</code> - applies the border radius to <code v-pre>bottom-left</code>.</li>
<li><code v-pre>br</code> - applies the border radius to <code v-pre>bottom-right</code>.</li>
<li><code v-pre>l</code> - applies the border radius to both <code v-pre>bottom-left</code> &amp; <code v-pre>top-left</code>.</li>
<li><code v-pre>r</code> - applies the border radius to both <code v-pre>bottom-right</code> &amp; <code v-pre>top-right</code>.</li>
<li>If left empty/skipped, it sets border-radius of all sides to <code v-pre>4px</code>. (Ex: <code v-pre>u-br</code>, <code v-pre>u-br-xl</code>)</li>
</ul>
<p>The <strong>size</strong> controls the increment of border property:</p>
<ul>
<li><code v-pre>0</code> - sets border-radius to <code v-pre>0</code>.</li>
<li><code v-pre>sm</code> - sets border-radius to <code v-pre>2px</code>.</li>
<li>If left empty, sets border-radius to <code v-pre>4px</code>. (Ex: <code v-pre>u-br-t</code>, <code v-pre>u-br</code>)</li>
<li><code v-pre>lg</code> - sets border-radius to <code v-pre>6px</code>.</li>
<li><code v-pre>xl</code> - sets border-radius to <code v-pre>8px</code>.</li>
</ul>
</div></template>


