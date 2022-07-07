<template><div><masthead title="Modal" description="A light weight & flexible dialog prompts, with importance to accessibility.">
  <component-links
    codesandbox="https://codesandbox.io/s/vs-modal-n2wwm"
    github="https://github.com/ashwinkshenoy/vue-simple/tree/master/packages/vs-modal"
    packageName="@vuesimple/vs-modal">
  </component-links>
</masthead>
<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i @vuesimple/vs-modal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @vuesimple/vs-modal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openModal('modal1')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Basic Modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-modal</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal1<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Funny, Modal Works 🥳<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Hello Peeps from vs-modal!!
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-modal</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openModal('backdrop-modal')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Basic Modal (with blur backdrop)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-modal</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backdrop-modal<span class="token punctuation">"</span></span> <span class="token attr-name">backdropBlur</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Funny, Modal Works 🥳<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Wow!! Backdrop is blurred out 🔥
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-modal</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> VsModal <span class="token keyword">from</span> <span class="token string">'@vuesimple/vs-modal'</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      VsModal<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">openModal</span><span class="token punctuation">(</span><span class="token parameter">ref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span>ref<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">closeModal</span><span class="token punctuation">(</span><span class="token parameter">ref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span>ref<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cdn" tabindex="-1"><a class="header-anchor" href="#cdn" aria-hidden="true">#</a> CDN</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/@vuesimple/vs-modal@&lt;version>/dist/vs-modal.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Replace <code v-pre>&lt;version&gt;</code> with a version number in the above url.</p>
</div>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openModal('modal1')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Basic Modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-modal</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal1<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Funny, Modal Works 🥳<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Hello Peeps from vs-modal!!
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-modal</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">openModal</span><span class="token punctuation">(</span><span class="token parameter">ref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span>ref<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">closeModal</span><span class="token punctuation">(</span><span class="token parameter">ref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span>ref<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nuxt-js" tabindex="-1"><a class="header-anchor" href="#nuxt-js" aria-hidden="true">#</a> Nuxt.js</h2>
<p>Nuxt Demo - Code Sandbox: <a href="https://codesandbox.io/s/vs-modal-nuxt-w35gj" target="_blank" rel="noopener noreferrer">Link<ExternalLinkIcon/></a></p>
<p>After installation,</p>
<ul>
<li>
<p>Create a file <code v-pre>/plugins/vs-modal.js</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VsModal <span class="token keyword">from</span> <span class="token string">'@vuesimple/vs-modal'</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'vs-modal'</span><span class="token punctuation">,</span> VsModal<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Update <code v-pre>nuxt.config.js</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">'~plugins/vs-modal'</span><span class="token punctuation">,</span> <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'client'</span> <span class="token punctuation">}</span>
    <span class="token operator">...</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>In the page/ component</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openModal('modal1')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Basic Modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>client-only</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-modal</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal1<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Funny, Modal Works 🥳<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      Hello Peeps from V-Simple-Modal!!
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-modal</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>client-only</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">openModal</span><span class="token punctuation">(</span><span class="token parameter">ref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span>ref<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">closeModal</span><span class="token punctuation">(</span><span class="token parameter">ref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span>ref<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ul>
<li>For older Nuxt versions, use <code v-pre>&lt;no-ssr&gt;...&lt;/no-ssr&gt;</code> tag.</li>
<li>You can also do
<code v-pre>import VsModal from '@vuesimple/vs-modal'</code>
&amp; add in <code v-pre>component:{VsModal}</code> and use it within component, without globally installing in plugin folder.</li>
</ul>
</div>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>String</td>
<td>Modal title</td>
<td>The modal title (text only). For HTML, use the header slot.</td>
</tr>
<tr>
<td>size</td>
<td>String</td>
<td><code v-pre>m</code></td>
<td>The size of the modal. One of <code v-pre>s</code>, <code v-pre>m</code>, <code v-pre>l</code>, <code v-pre>fullscreen</code>, or <code v-pre>auto</code>. <br />Setting the size to auto will make the modal's width grow to fit its content.</td>
</tr>
<tr>
<td>alignTop</td>
<td>Boolean</td>
<td>false</td>
<td>Whether or not the modal should be vertically aligned to the top of the viewport. When <code v-pre>true</code>, the modal will be top aligned, instead of vertically centered.</td>
</tr>
<tr>
<td>alignTopMargin</td>
<td>Number</td>
<td>60</td>
<td>The modal's distance from the top of the viewport, in pixels. <br/>Applies only when the <code v-pre>alignTop</code> prop is <code v-pre>true</code>.</td>
</tr>
<tr>
<td>role</td>
<td>String</td>
<td>dialog</td>
<td>The ARIA role for the modal (important for accessibility). One of <code v-pre>dialog</code> or <code v-pre>alertdialog</code>.</td>
</tr>
<tr>
<td>removeHeader</td>
<td>Boolean</td>
<td>false</td>
<td>Whether or not the modal header is removed.</td>
</tr>
<tr>
<td>removeCloseButton</td>
<td>Boolean</td>
<td>false</td>
<td>Whether or not the header close button is removed.</td>
</tr>
<tr>
<td>preventShift</td>
<td>Boolean</td>
<td>false</td>
<td>Whether or not to add a dummy scrollbar to the modal backdrop to prevent the modal shifting horizontally when the <code v-pre>&lt;body&gt;</code> scrollbar is hidden. Set to <code v-pre>true</code> to prevent the modal shift.</td>
</tr>
<tr>
<td>dismissible</td>
<td>Boolean</td>
<td>true</td>
<td>Whether or not the modal can be dismissed. Set to false to prevent the user from dismissing the modal. This will also hide the header close button.</td>
</tr>
<tr>
<td>dismissOn</td>
<td>String</td>
<td><code v-pre>backdrop close-button esc</code></td>
<td>The type of event or events that will cause the modal to be dismissed. One or more of <code v-pre>backdrop</code>, <code v-pre>close-button</code>, or <code v-pre>esc</code>. Separate multiple events with a space.</td>
</tr>
</tbody>
</table>
<h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>open</td>
<td>Emitted when the modal starts to open. Listen for it using <code v-pre>@open</code>.</td>
</tr>
<tr>
<td>reveal</td>
<td>Emitted when the modal is revealed (i.e. when the transition completes). Listen for it using <code v-pre>@reveal</code>.</td>
</tr>
<tr>
<td>close</td>
<td>Emitted when the modal starts to close. Listen for it using <code v-pre>@close</code>.</td>
</tr>
<tr>
<td>hide</td>
<td>Emitted when the modal close transition completes. Listen for it using <code v-pre>@hide</code>.</td>
</tr>
</tbody>
</table>
<h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2>
<p>You can define own item markup via slots:</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>(default)</td>
<td>Holds the modal body and can contain HTML.</td>
</tr>
<tr>
<td>header</td>
<td>Holds the the modal header and can contain HTML.</td>
</tr>
<tr>
<td>footer</td>
<td>Holds the the modal footer and can contain HTML.</td>
</tr>
</tbody>
</table>
</div></template>


