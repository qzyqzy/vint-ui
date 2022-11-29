<template><div><h1 id="vite-项目优化" tabindex="-1"><a class="header-anchor" href="#vite-项目优化" aria-hidden="true">#</a> Vite 项目优化</h1>
<h2 id="css-预处理" tabindex="-1"><a class="header-anchor" href="#css-预处理" aria-hidden="true">#</a> Css 预处理</h2>
<p>Vite 已经提供了对 <code v-pre>.scss</code>, <code v-pre>.sass</code>, <code v-pre>.less</code>, <code v-pre>.styl</code> 和 <code v-pre>.stylus</code> 文件的内置支持。没有必要为它们安装特定的 Vite 插件，但必须安装相应的预处理器依赖：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-comment)"># .scss and .sass</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">npm add -D sass</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-token-comment)"># .less</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">npm add -D less</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-token-comment)"># .styl and .stylus</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">npm add -D stylus</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用的是单文件组件，可以通过 <code v-pre>&lt;style lang=&quot;sass&quot;&gt;</code>（或其他预处理器）自动开启。</p>
<p>安装 scss</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">pnpm add -D sass</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


