<template><div><masthead title="Spacing" description="Spacing helpers are useful for modifying the padding and margin of an element.">
</masthead>
<h2 id="how-it-works" tabindex="-1"><a class="header-anchor" href="#how-it-works" aria-hidden="true">#</a> How It Works</h2>
<p>These classes can be applied using the following format <br/>
<code v-pre>u-{property}{direction}-{size}.</code></p>
<p>The <strong>property</strong> applies the type of spacing:</p>
<ul>
<li><code v-pre>m</code> - applies margin.</li>
<li><code v-pre>p</code> - applies padding.</li>
</ul>
<p>The <strong>direction</strong> designates the side, the property applies to:</p>
<ul>
<li><code v-pre>t</code> - applies the spacing for <code v-pre>margin-top</code> or <code v-pre>padding-top</code>.</li>
<li><code v-pre>r</code> - applies the spacing for <code v-pre>margin-right</code> or <code v-pre>padding-right</code>.</li>
<li><code v-pre>b</code> - applies the spacing for <code v-pre>margin-bottom</code> or <code v-pre>padding-bottom</code>.</li>
<li><code v-pre>l</code> - applies the spacing for <code v-pre>margin-left</code> or <code v-pre>padding-left</code>.</li>
<li><code v-pre>h</code> - applies the spacing for both <code v-pre>*-left</code> and <code v-pre>*-right</code>.</li>
<li><code v-pre>v</code> - applies the spacing for both <code v-pre>*-top</code> and <code v-pre>*-bottom</code>.</li>
<li>If left empty, applies the spacing for the property in all directions. (Ex: <code v-pre>u-p</code>, <code v-pre>u-m</code>)</li>
</ul>
<p>The <strong>size</strong> controls the increment of the property:</p>
<ul>
<li><code v-pre>xxs</code> - sets <code v-pre>margin</code> or <code v-pre>padding</code> to 4px.</li>
<li><code v-pre>xs</code> - sets <code v-pre>margin</code> or <code v-pre>padding</code> to 8px.</li>
<li><code v-pre>sm</code> - sets <code v-pre>margin</code> or <code v-pre>padding</code> to 12px.</li>
<li>If left empty, sets <code v-pre>margin</code> or <code v-pre>padding</code> to 20px. (Ex: <code v-pre>u-pt</code>, <code v-pre>u-mt</code>)</li>
<li><code v-pre>lg</code> - sets <code v-pre>margin</code> or <code v-pre>padding</code> to 32px.</li>
<li><code v-pre>xl</code> - sets <code v-pre>margin</code> or <code v-pre>padding</code> to 40px.</li>
<li><code v-pre>xxl</code> - sets <code v-pre>margin</code> or <code v-pre>padding</code> to 48px.</li>
</ul>
</div></template>


