import{_ as s,o as i,c as a,R as t}from"./chunks/framework.QNTO5f8h.js";const c=JSON.parse('{"title":"grep","description":"","frontmatter":{},"headers":[],"relativePath":"notes/linux/grep.md","filePath":"notes/linux/grep.md","lastUpdated":1701856660000}'),e={name:"notes/linux/grep.md"},h=t(`<h1 id="grep" tabindex="-1">grep <a class="header-anchor" href="#grep" aria-label="Permalink to &quot;grep&quot;">​</a></h1><p><a href="https://www.geeksforgeeks.org/grep-command-in-unixlinux/" target="_blank" rel="noreferrer">grep</a> 是 <code>global regular expression print</code> 的缩写，它是一个 Unix 和类 Unix 系统中的命令，是一个强大的文本搜索工具，通常与管道符号一起使用以过滤文本。</p><p>其基本语法是：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;pattern&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filename</span></span></code></pre></div><p>这将在指定的文件（filename）中搜索匹配给定模式（pattern）的行，并将它们输出到标准输出。</p><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><p>常用的选项包括：</p><ul><li><code>-i</code>：忽略大小写，使匹配不区分大小写。</li><li><code>-n</code>：在开头显示匹配行的行号。</li><li><code>-r</code>：递归搜索。</li><li><code>-v</code>：反向匹配。</li></ul><p>例如，如果你想过滤文件名包含 &quot;bash&quot; 的数据，你可以运行以下命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -la</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bash&#39;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">6:-rw-------</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> saki</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  staff</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                28</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Jun</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  2022</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .bash_history</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">7:-rw-r--r--</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> saki</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  staff</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">               321</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Sep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 16</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  2022</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .bash_profile</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">8:-rw-r--r--</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> saki</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  staff</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">               117</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Aug</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 15</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:32</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .bashrc</span></span></code></pre></div>`,11),n=[h];function p(l,k,r,d,F,o){return i(),a("div",null,n)}const C=s(e,[["render",p]]);export{c as __pageData,C as default};