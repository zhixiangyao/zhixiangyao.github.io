import{_ as o,c as a,I as s,a8 as e,o as d,E as t}from"./chunks/framework.CBChqOMV.js";const _=JSON.parse('{"title":"htop","description":"","frontmatter":{},"headers":[],"relativePath":"notes/linux/htop.md","filePath":"notes/linux/htop.md","lastUpdated":1692343739000}'),c={name:"notes/linux/htop.md"},p=e('<h1 id="htop" tabindex="-1">htop <a class="header-anchor" href="#htop" aria-label="Permalink to &quot;htop&quot;">​</a></h1><p><a href="https://htop.dev/" target="_blank" rel="noreferrer">htop</a> 是一个交互式的系统监视器, 用于监控 <code>Linux</code> 系统 (也支持 <code>macOS</code>, 因为 <code>macOS</code> 是类 <code>unix</code> 系统) 的资源使用情况. 它提供了一个更直观、更友好的界面, 可以实时显示系统的 <code>CPU</code> 使用率、内存使用情况、进程列表等信息.</p>',2),l=e('<h2 id="安装二进制文件" tabindex="-1">安装二进制文件 <a class="header-anchor" href="#安装二进制文件" aria-label="Permalink to &quot;安装二进制文件&quot;">​</a></h2><p>安装 <code>htop</code> 的方法取决于你使用的 <code>Linux</code> 发行版(<code>macOS</code> 也可以). 以下是一些常见发行版的安装方法:</p><ul><li><p><code>macOS</code>: 使用以下命令安装 <code>htop</code> (<code>macOS</code> 需要先安装 <code>homebrew</code>):</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> htop</span></span></code></pre></div></li><li><p><code>Debian/Ubuntu</code>: 使用以下命令安装 <code>htop</code>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> htop</span></span></code></pre></div></li><li><p><code>CentOS</code>: 使用以下命令安装 <code>htop</code>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> htop</span></span></code></pre></div></li><li><p><code>Fedora</code>: 使用以下命令安装 <code>htop</code>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dnf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> htop</span></span></code></pre></div></li><li><p><code>Arch Linux</code>: 使用以下命令安装 <code>htop</code>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> htop</span></span></code></pre></div></li></ul><h2 id="文档" tabindex="-1">文档 <a class="header-anchor" href="#文档" aria-label="Permalink to &quot;文档&quot;">​</a></h2><p><code>htop</code> 提供了一些颜色标识，用于表示不同的进程状态。例如，<code>红色</code>表示内核线程，<code>绿色</code>表示正常进程，<code>蓝色</code>表示虚拟内存等。</p><p>使用 <code>htop</code> 可以方便地监控系统的资源使用情况，查看进程的详细信息，并进行一些操作，如杀死进程、调整进程的优先级等。</p><h3 id="中间的进程列表术语" tabindex="-1">中间的进程列表术语 <a class="header-anchor" href="#中间的进程列表术语" aria-label="Permalink to &quot;中间的进程列表术语&quot;">​</a></h3><ul><li><p><code>PID</code>: 进程的 <code>ID</code> (<code>Process ID</code>), 用于唯一标识一个进程.</p></li><li><p><code>USER</code>: 进程所属的用户.</p></li><li><p><code>PRI</code>: 进程的优先级 (<code>Priority</code>), 值越小表示优先级越高.</p></li><li><p><code>NI</code>: 进程的 <code>nice</code> 值 (<code>Nice Value</code>), 用于调整进程的优先级, 默认为0.</p></li><li><p><code>VIRT</code>: 进程使用的虚拟内存 (<code>Virtual Memory</code>) 大小.</p></li><li><p><code>RES</code>: 进程使用的物理内存 (<code>Resident Set Size</code>) 大小.</p></li><li><p><code>SHR</code>: 进程使用的共享内存 (<code>Shared Memory</code>) 大小.</p></li><li><p><code>S</code>: 进程的状态 (<code>Status</code>), 包括运行中 (<code>R</code>)、睡眠 (<code>S</code>)、僵尸 (<code>Z</code>)等.</p></li><li><p><code>CPU%</code>: 进程使用的 <code>CPU</code> 资源百分比.</p></li><li><p><code>MEM%</code>: 进程使用的内存资源百分比.</p></li><li><p><code>TIME+</code>: 进程运行的累计 <code>CPU</code> 时间.</p></li><li><p><code>Command</code>: 进程的命令行.</p></li></ul><h3 id="底部的快捷键说明" tabindex="-1">底部的快捷键说明 <a class="header-anchor" href="#底部的快捷键说明" aria-label="Permalink to &quot;底部的快捷键说明&quot;">​</a></h3><ul><li><p><code>F1</code>: 显示 <code>htop</code> 的帮助文档</p></li><li><p><code>F2</code>: 进入设置界面</p></li><li><p><code>F3</code>: 根据进程名称进行搜索</p></li><li><p><code>F4</code>: 根据进程的用户进行搜索</p></li><li><p><code>F5</code>: 刷新显示</p></li><li><p><code>F6</code>: 根据不同的排序方式进行排序</p></li><li><p><code>F9</code>: 向选定的进程发送信号</p></li><li><p><code>F10</code>: 退出 htop</p></li></ul>',10);function h(n,r,k,u,F,g){const i=t("ZoomImg");return d(),a("div",null,[p,s(i,{src:"/screenshot_htop.png",width:"1138",height:"657"}),l])}const m=o(c,[["render",h]]);export{_ as __pageData,m as default};