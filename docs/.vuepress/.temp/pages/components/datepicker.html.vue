<template><div><h1 id="vue-simple-datepicker" tabindex="-1"><a class="header-anchor" href="#vue-simple-datepicker" aria-hidden="true">#</a> Vue Simple Datepicker</h1>
<h4 id="🗃-a-simple-vue-detepicker-perfect-for-all-your-datepicker-scenarios" tabindex="-1"><a class="header-anchor" href="#🗃-a-simple-vue-detepicker-perfect-for-all-your-datepicker-scenarios" aria-hidden="true">#</a> 🗃 A simple vue detepicker. Perfect for all your datepicker scenarios.</h4>
<p>A light weight vue datepicker plugin.</p>
<p><a href="https://www.npmjs.com/package/@vuesimple/vs-datepicker" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/@vuesimple/vs-datepicker.svg" alt="npm"><ExternalLinkIcon/></a>
<a href="https://img.shields.io/npm/dt/@vuesimple/vs-datepicker.svg" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/@vuesimple/vs-datepicker.svg" alt="npm"><ExternalLinkIcon/></a>
<br /></p>
<p><img src="https://forthebadge.com/images/badges/made-with-vue.svg" alt="forthebadge">
<img src="https://forthebadge.com/images/badges/made-with-javascript.svg" alt="forthebadge">
<img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="forthebadge">
<img src="https://forthebadge.com/images/badges/built-with-swag.svg" alt="forthebadge">
<img src="https://forthebadge.com/images/badges/check-it-out.svg" alt="forthebadge">
<img src="https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg" alt="forthebadge"></p>
<br />
<h3 id="📺-live-demo" tabindex="-1"><a class="header-anchor" href="#📺-live-demo" aria-hidden="true">#</a> 📺 Live Demo</h3>
<p>Code Sandbox Demo: <a href="https://4vcnu.csb.app/" target="_blank" rel="noopener noreferrer">Link<ExternalLinkIcon/></a>
Code Sandbox: <a href="https://codesandbox.io/s/vs-datepicker-4vcnu" target="_blank" rel="noopener noreferrer">Link<ExternalLinkIcon/></a></p>
<br />
<h3 id="🛠-install" tabindex="-1"><a class="header-anchor" href="#🛠-install" aria-hidden="true">#</a> 🛠 Install</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i @vuesimple/vs-datepicker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @vuesimple/vs-datepicker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br />
<h3 id="🚀-usage" tabindex="-1"><a class="header-anchor" href="#🚀-usage" aria-hidden="true">#</a> 🚀 Usage</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-datepicker</span>
    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Date<span class="token punctuation">"</span></span>
    <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>deliveryDate<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.date<span class="token punctuation">"</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>DD-MM-YYYY<span class="token punctuation">"</span></span>
    <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>DD-MM-YYYY<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-datepicker</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> VsDatepicker <span class="token keyword">from</span> <span class="token string">'@vuesimple/vs-datepicker'</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      VsDatepicker<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br />
<h3 id="🌎-cdn" tabindex="-1"><a class="header-anchor" href="#🌎-cdn" aria-hidden="true">#</a> 🌎 CDN</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/@vuesimple/vs-datepicker@&lt;version>/dist/vs-datepicker.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-datepicker</span>
    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Date<span class="token punctuation">"</span></span>
    <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>deliveryDate<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.date<span class="token punctuation">"</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>DD-MM-YYYY<span class="token punctuation">"</span></span>
    <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>DD-MM-YYYY<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-datepicker</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br />
<h3> 
  <img src="https://i.imgur.com/MWynQNa.png" width="20px"> Nuxt.js
</h3>
<p>Nuxt Code Snippet</p>
<p>After installation,</p>
<ul>
<li>
<p>Create a file <code v-pre>/plugins/vs-datepicker.js</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VsDatepicker <span class="token keyword">from</span> <span class="token string">'@vuesimple/vs-datepicker'</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'vs-datepicker'</span><span class="token punctuation">,</span> VsDatepicker<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Update <code v-pre>nuxt.config.js</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">'~plugins/vs-datepicker'</span><span class="token punctuation">,</span> <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'client'</span> <span class="token punctuation">}</span>
    <span class="token operator">...</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>In the page/ component</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-datepicker</span>
    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Date<span class="token punctuation">"</span></span>
    <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>deliveryDate<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.date<span class="token punctuation">"</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>DD-MM-YYYY<span class="token punctuation">"</span></span>
    <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>DD-MM-YYYY<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-datepicker</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p><strong>Note</strong></p>
<ul>
<li>For older Nuxt versions, use <code v-pre>&lt;no-ssr&gt;...&lt;/no-ssr&gt;</code> tag.</li>
<li>You can also do
<code v-pre>import VsDatepicker from '@vuesimple/vs-datepicker'</code>
&amp; add in <code v-pre>component:{VsDatepicker}</code> and use it within component, without globally installing in plugin folder.</li>
</ul>
<br />
<h3 id="⚙-props" tabindex="-1"><a class="header-anchor" href="#⚙-props" aria-hidden="true">#</a> ⚙ Props</h3>
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
<td>type</td>
<td>`date</td>
<td>datetime</td>
<td>year</td>
</tr>
<tr>
<td>format</td>
<td><a href="#token">Token</a></td>
<td><code v-pre>MM-DD-YYYY</code></td>
<td>To set the date format. similar to moment.js</td>
</tr>
<tr>
<td>value-type</td>
<td><a href="#value-type">Value-Type</a></td>
<td>'date'</td>
<td>Data type of the binding value/v-model.</td>
</tr>
<tr>
<td>range</td>
<td>Boolean</td>
<td>false</td>
<td>If true, pick the range date</td>
</tr>
<tr>
<td>label</td>
<td>String</td>
<td>Date</td>
<td>Label to datepicker</td>
</tr>
<tr>
<td>isError</td>
<td>Boolean</td>
<td>-</td>
<td>Highlight input box with red if error</td>
</tr>
<tr>
<td>required</td>
<td>Boolean</td>
<td>-</td>
<td>show <code v-pre>*</code> with label</td>
</tr>
<tr>
<td>disabled</td>
<td>Boolean</td>
<td>-</td>
<td>Disable datepicker</td>
</tr>
<tr>
<td>disabled-date</td>
<td>Function</td>
<td>-</td>
<td>Disable dates in datepicker</td>
</tr>
<tr>
<td>id</td>
<td>String</td>
<td>-</td>
<td>Id added to datepicker component</td>
</tr>
<tr>
<td>placeholder</td>
<td>String</td>
<td>-</td>
<td>Placeholder to datepicker input box</td>
</tr>
<tr>
<td>lang</td>
<td>Object</td>
<td>-</td>
<td>Override the default locale</td>
</tr>
<tr>
<td>editable</td>
<td>Boolean</td>
<td>false</td>
<td>Whether the input is editable</td>
</tr>
<tr>
<td>clearable</td>
<td>Boolean</td>
<td>false</td>
<td>If false, don't show the clear icon</td>
</tr>
<tr>
<td>is-compact</td>
<td>Boolean</td>
<td>false</td>
<td>Applies compact style to datepicker</td>
</tr>
</tbody>
</table>
<br />
<p><strong>NOTE</strong>
Example for <code v-pre>maxdate</code></p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-datepicker</span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Date<span class="token punctuation">"</span></span>
  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>deliveryDate<span class="token punctuation">"</span></span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.date<span class="token punctuation">"</span></span>
  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>DD-MM-YYYY<span class="token punctuation">"</span></span>
  <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>DD-MM-YYYY<span class="token punctuation">"</span></span>
  <span class="token attr-name">:disabled-date</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>disabledDate<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-datepicker</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">disabledDates</span><span class="token punctuation">(</span><span class="token parameter">date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> date <span class="token operator">&lt;</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'Your Min Date'</span><span class="token punctuation">)</span> <span class="token operator">||</span> date <span class="token operator">></span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'Your Max Date'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br />
<h3 id="🔥-events" tabindex="-1"><a class="header-anchor" href="#🔥-events" aria-hidden="true">#</a> 🔥 Events</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>v-model</td>
<td>When the value changes</td>
</tr>
<tr>
<td>change</td>
<td>When the value change(same as v-model)</td>
</tr>
<tr>
<td>open</td>
<td>When panel opening</td>
</tr>
<tr>
<td>close</td>
<td>When panel closing</td>
</tr>
</tbody>
</table>
<br />
<h3 id="token" tabindex="-1"><a class="header-anchor" href="#token" aria-hidden="true">#</a> Token</h3>
<table>
<thead>
<tr>
<th>Unit</th>
<th>Token</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>Year</td>
<td>YY</td>
<td>70 71 ... 10 11</td>
</tr>
<tr>
<td></td>
<td>YYYY</td>
<td>1970 1971 ... 2010 2011</td>
</tr>
<tr>
<td></td>
<td>Y</td>
<td>-1000 ...20 ... 1970 ... 9999 +10000</td>
</tr>
<tr>
<td>Month</td>
<td>M</td>
<td>1 2 ... 11 12</td>
</tr>
<tr>
<td></td>
<td>MM</td>
<td>01 02 ... 11 12</td>
</tr>
<tr>
<td></td>
<td>MMM</td>
<td>Jan Feb ... Nov Dec</td>
</tr>
<tr>
<td></td>
<td>MMMM</td>
<td>January February ... November December</td>
</tr>
<tr>
<td>Day of Month</td>
<td>D</td>
<td>1 2 ... 30 31</td>
</tr>
<tr>
<td></td>
<td>DD</td>
<td>01 02 ... 30 31</td>
</tr>
<tr>
<td>Day of Week</td>
<td>d</td>
<td>0 1 ... 5 6</td>
</tr>
<tr>
<td></td>
<td>dd</td>
<td>Su Mo ... Fr Sa</td>
</tr>
<tr>
<td></td>
<td>ddd</td>
<td>Sun Mon ... Fri Sat</td>
</tr>
<tr>
<td></td>
<td>dddd</td>
<td>Sunday Monday ... Friday Saturday</td>
</tr>
<tr>
<td>AM/PM</td>
<td>A</td>
<td>AM PM</td>
</tr>
<tr>
<td></td>
<td>a</td>
<td>am pm</td>
</tr>
<tr>
<td>Hour</td>
<td>H</td>
<td>0 1 ... 22 23</td>
</tr>
<tr>
<td></td>
<td>HH</td>
<td>00 01 ... 22 23</td>
</tr>
<tr>
<td></td>
<td>h</td>
<td>1 2 ... 12</td>
</tr>
<tr>
<td></td>
<td>hh</td>
<td>01 02 ... 12</td>
</tr>
<tr>
<td>Minute</td>
<td>m</td>
<td>0 1 ... 58 59</td>
</tr>
<tr>
<td></td>
<td>mm</td>
<td>00 01 ... 58 59</td>
</tr>
<tr>
<td>Second</td>
<td>s</td>
<td>0 1 ... 58 59</td>
</tr>
<tr>
<td></td>
<td>ss</td>
<td>00 01 ... 58 59</td>
</tr>
<tr>
<td>Fractional Second</td>
<td>S</td>
<td>0 1 ... 8 9</td>
</tr>
<tr>
<td></td>
<td>SS</td>
<td>00 01 ... 98 99</td>
</tr>
<tr>
<td></td>
<td>SSS</td>
<td>000 001 ... 998 999</td>
</tr>
<tr>
<td>Time Zone</td>
<td>Z</td>
<td>-07:00 -06:00 ... +06:00 +07:00</td>
</tr>
<tr>
<td></td>
<td>ZZ</td>
<td>-0700 -0600 ... +0600 +0700</td>
</tr>
<tr>
<td>Week of Year</td>
<td>w</td>
<td>1 2 ... 52 53</td>
</tr>
<tr>
<td></td>
<td>ww</td>
<td>01 02 ... 52 53</td>
</tr>
<tr>
<td>Unix Timestamp</td>
<td>X</td>
<td>1360013296</td>
</tr>
<tr>
<td>Unix Millisecond Timestamp</td>
<td>x</td>
<td>1360013296123</td>
</tr>
</tbody>
</table>
<br />
<h3 id="value-type" tabindex="-1"><a class="header-anchor" href="#value-type" aria-hidden="true">#</a> Value Type</h3>
<table>
<thead>
<tr>
<th>Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>'date'</td>
<td>Returns a Date object</td>
</tr>
<tr>
<td>'timestamp'</td>
<td>Returns a timestamp number</td>
</tr>
<tr>
<td>'format'</td>
<td>Returns a string formatted using pattern of format</td>
</tr>
<tr>
<td>token(MM/DD/YYYY)</td>
<td>Returns a string formatted using this pattern</td>
</tr>
</tbody>
</table>
<br />
<h3 id="full-lang-config" tabindex="-1"><a class="header-anchor" href="#full-lang-config" aria-hidden="true">#</a> Full lang config</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// the locale of formatting and parsing function</span>
  <span class="token literal-property property">formatLocale</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// MMMM</span>
    <span class="token literal-property property">months</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'January'</span><span class="token punctuation">,</span> <span class="token string">'February'</span><span class="token punctuation">,</span> <span class="token string">'March'</span><span class="token punctuation">,</span> <span class="token string">'April'</span><span class="token punctuation">,</span> <span class="token string">'May'</span><span class="token punctuation">,</span> <span class="token string">'June'</span><span class="token punctuation">,</span> <span class="token string">'July'</span><span class="token punctuation">,</span> <span class="token string">'August'</span><span class="token punctuation">,</span> <span class="token string">'September'</span><span class="token punctuation">,</span> <span class="token string">'October'</span><span class="token punctuation">,</span> <span class="token string">'November'</span><span class="token punctuation">,</span> <span class="token string">'December'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// MMM</span>
    <span class="token literal-property property">monthsShort</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Jan'</span><span class="token punctuation">,</span> <span class="token string">'Feb'</span><span class="token punctuation">,</span> <span class="token string">'Mar'</span><span class="token punctuation">,</span> <span class="token string">'Apr'</span><span class="token punctuation">,</span> <span class="token string">'May'</span><span class="token punctuation">,</span> <span class="token string">'Jun'</span><span class="token punctuation">,</span> <span class="token string">'Jul'</span><span class="token punctuation">,</span> <span class="token string">'Aug'</span><span class="token punctuation">,</span> <span class="token string">'Sep'</span><span class="token punctuation">,</span> <span class="token string">'Oct'</span><span class="token punctuation">,</span> <span class="token string">'Nov'</span><span class="token punctuation">,</span> <span class="token string">'Dec'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// dddd</span>
    <span class="token literal-property property">weekdays</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Sunday'</span><span class="token punctuation">,</span> <span class="token string">'Monday'</span><span class="token punctuation">,</span> <span class="token string">'Tuesday'</span><span class="token punctuation">,</span> <span class="token string">'Wednesday'</span><span class="token punctuation">,</span> <span class="token string">'Thursday'</span><span class="token punctuation">,</span> <span class="token string">'Friday'</span><span class="token punctuation">,</span> <span class="token string">'Saturday'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// ddd</span>
    <span class="token literal-property property">weekdaysShort</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Sun'</span><span class="token punctuation">,</span> <span class="token string">'Mon'</span><span class="token punctuation">,</span> <span class="token string">'Tue'</span><span class="token punctuation">,</span> <span class="token string">'Wed'</span><span class="token punctuation">,</span> <span class="token string">'Thu'</span><span class="token punctuation">,</span> <span class="token string">'Fri'</span><span class="token punctuation">,</span> <span class="token string">'Sat'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// dd</span>
    <span class="token literal-property property">weekdaysMin</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Su'</span><span class="token punctuation">,</span> <span class="token string">'Mo'</span><span class="token punctuation">,</span> <span class="token string">'Tu'</span><span class="token punctuation">,</span> <span class="token string">'We'</span><span class="token punctuation">,</span> <span class="token string">'Th'</span><span class="token punctuation">,</span> <span class="token string">'Fr'</span><span class="token punctuation">,</span> <span class="token string">'Sa'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// first day of week</span>
    <span class="token literal-property property">firstDayOfWeek</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// first week contains January 1st.</span>
    <span class="token literal-property property">firstWeekContainsDate</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br />
<p>Original credits to <a href="https://github.com/mengxiong10/vue2-datepicker" target="_blank" rel="noopener noreferrer">Vue2 Datepicker<ExternalLinkIcon/></a></p>
</div></template>


