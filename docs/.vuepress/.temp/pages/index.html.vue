<template><div><h1 id="vint-ui" tabindex="-1"><a class="header-anchor" href="#vint-ui" aria-hidden="true">#</a> Vint UI</h1>
<blockquote>
<p>基于 <strong>Vue 3.0</strong> 的移动端组件库</p>
</blockquote>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">npm i vint-ui</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<p>全部引入.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> vint </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;vint-ui&#39;</span></span>
<span class="line"><span style="color: var(--shiki-token-constant)">app</span><span style="color: var(--shiki-token-function)">.use</span><span style="color: var(--shiki-color-text)">(vint)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>按需引入.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> { Button } </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;vint-ui&#39;</span></span>
<span class="line"><span style="color: var(--shiki-token-constant)">Vue</span><span style="color: var(--shiki-token-function)">.component</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;vint-button&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> Button)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2>
<p>MIT</p>
</div></template>


