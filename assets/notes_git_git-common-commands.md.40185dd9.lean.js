import{_ as s,v as a,b as n,R as l}from"./chunks/framework.c224a9d2.js";const A=JSON.parse('{"title":"Git 常用命令","description":"","frontmatter":{},"headers":[],"relativePath":"notes/git/git-common-commands.md","filePath":"notes/git/git-common-commands.md","lastUpdated":1670209852000}'),o={name:"notes/git/git-common-commands.md"},p=l(`<h1 id="git-常用命令" tabindex="-1">Git 常用命令 <a class="header-anchor" href="#git-常用命令" aria-label="Permalink to &quot;Git 常用命令&quot;">​</a></h1><blockquote><p><a href="https://learngitbranching.js.org/?locale=zh_CN" target="_blank" rel="noreferrer">Git learngitbranching 训练第 3 刷达成</a></p></blockquote><h3 id="移动指针" tabindex="-1">移动指针 <a class="header-anchor" href="#移动指针" aria-label="Permalink to &quot;移动指针&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 移动 孙子 到 爷爷</span></span>
<span class="line"><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">3 </span><span style="color:#676E95;font-style:italic;"># 太爷爷</span></span>
<span class="line"><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">2 </span><span style="color:#676E95;font-style:italic;"># 爷爷</span></span>
<span class="line"><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 老爸</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 移动 爸爸辈</span></span>
<span class="line"><span style="color:#FFCB6B;">^</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 老爸</span></span>
<span class="line"><span style="color:#FFCB6B;">^2</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 二伯</span></span>
<span class="line"><span style="color:#FFCB6B;">^3</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 大伯</span></span></code></pre></div><h3 id="初始化-git" tabindex="-1">初始化 git <a class="header-anchor" href="#初始化-git" aria-label="Permalink to &quot;初始化 git&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span></code></pre></div><h3 id="克隆" tabindex="-1">克隆 <a class="header-anchor" href="#克隆" aria-label="Permalink to &quot;克隆&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> [xxx.git]</span></span></code></pre></div><h3 id="提交到暂存区" tabindex="-1">提交到暂存区 <a class="header-anchor" href="#提交到暂存区" aria-label="Permalink to &quot;提交到暂存区&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> [file]</span></span></code></pre></div><h3 id="git-commit" tabindex="-1">git commit <a class="header-anchor" href="#git-commit" aria-label="Permalink to &quot;git commit&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 提交 &amp; 附加信息</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxxx</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 修改 commit message</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--amend</span></span></code></pre></div><h3 id="git-stash" tabindex="-1">git stash <a class="header-anchor" href="#git-stash" aria-label="Permalink to &quot;git stash&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看当前所有缓存操作的堆栈记录</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">stash@</span><span style="color:#A6ACCD;">{0}</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">WIP</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">c1820a9</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">information.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">stash@</span><span style="color:#A6ACCD;">{1}</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">WIP</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">c1820a9</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yyy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">information.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看当前某个缓存的具体缓存内容</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># x为缓存列表中的数字</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">show</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash@{x}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 弹出缓存操作方式一</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 弹出缓存操作方式二</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apply</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 弹出指定的缓存操作，上述两种方式默认弹出缓存列表中最新的缓存记录</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 两种方式： apply &amp; pop</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apply</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash@{x}</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash@{x}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除某个缓存(不是弹出)</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">drop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash@{x}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除所有缓存</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clear</span></span></code></pre></div><h3 id="修改分支名" tabindex="-1">修改分支名 <a class="header-anchor" href="#修改分支名" aria-label="Permalink to &quot;修改分支名&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-M</span><span style="color:#A6ACCD;"> [branch </span><span style="color:#C3E88D;">name]</span></span></code></pre></div><h3 id="删除本地分支" tabindex="-1">删除本地分支 <a class="header-anchor" href="#删除本地分支" aria-label="Permalink to &quot;删除本地分支&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> [branch </span><span style="color:#C3E88D;">name]</span><span style="color:#A6ACCD;"> [branch </span><span style="color:#C3E88D;">name]</span><span style="color:#A6ACCD;"> [branch </span><span style="color:#C3E88D;">name]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">...</span></span></code></pre></div><h3 id="删除远程分支" tabindex="-1">删除远程分支 <a class="header-anchor" href="#删除远程分支" aria-label="Permalink to &quot;删除远程分支&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> [branch </span><span style="color:#C3E88D;">name]</span><span style="color:#A6ACCD;"> [branch </span><span style="color:#C3E88D;">name]</span><span style="color:#A6ACCD;"> [branch </span><span style="color:#C3E88D;">name]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">...</span></span></code></pre></div><h3 id="fetch-只下载远程分支" tabindex="-1">fetch 只下载远程分支 <a class="header-anchor" href="#fetch-只下载远程分支" aria-label="Permalink to &quot;fetch 只下载远程分支&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span></span></code></pre></div><h3 id="挑选-n-个-commit-到当前分支" tabindex="-1">挑选 n 个 commit 到当前分支 <a class="header-anchor" href="#挑选-n-个-commit-到当前分支" aria-label="Permalink to &quot;挑选 n 个 commit 到当前分支&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cherry-pick</span><span style="color:#A6ACCD;"> [HASH] </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">HASH</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">HASH</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> ...</span></span></code></pre></div><h3 id="合并分支" tabindex="-1">合并分支 <a class="header-anchor" href="#合并分支" aria-label="Permalink to &quot;合并分支&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cherry-pick</span><span style="color:#A6ACCD;"> [origin]/</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rebase</span><span style="color:#A6ACCD;"> [origin]/</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">merge</span><span style="color:#A6ACCD;"> [origin]/</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch name</span><span style="color:#89DDFF;">]</span></span></code></pre></div><h3 id="拉取" tabindex="-1">拉取 <a class="header-anchor" href="#拉取" aria-label="Permalink to &quot;拉取&quot;">​</a></h3><ul><li>git pull 就是 git fetch 和 git merge 的缩写！</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> [origin] </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">merge</span><span style="color:#A6ACCD;"> [origin]/</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch name</span><span style="color:#89DDFF;">]</span></span></code></pre></div><h3 id="拉取变基" tabindex="-1">拉取变基 <a class="header-anchor" href="#拉取变基" aria-label="Permalink to &quot;拉取变基&quot;">​</a></h3><ul><li>git pull --rebase 就是 git fetch 和 git rebase [origin]/[branch name] 的缩写！</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rebase</span><span style="color:#A6ACCD;"> [origin] </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rebase</span><span style="color:#A6ACCD;"> [origin]/</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch name</span><span style="color:#89DDFF;">]</span></span></code></pre></div><h3 id="首次推送" tabindex="-1">首次推送 <a class="header-anchor" href="#首次推送" aria-label="Permalink to &quot;首次推送&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> [origin] </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch name</span><span style="color:#89DDFF;">]</span></span></code></pre></div><h3 id="推送" tabindex="-1">推送 <a class="header-anchor" href="#推送" aria-label="Permalink to &quot;推送&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> [origin] </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch name</span><span style="color:#89DDFF;">]</span></span></code></pre></div><h3 id="切换分支" tabindex="-1">切换分支 <a class="header-anchor" href="#切换分支" aria-label="Permalink to &quot;切换分支&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> [HASH]</span></span></code></pre></div><h3 id="创建分支并切换" tabindex="-1">创建分支并切换 <a class="header-anchor" href="#创建分支并切换" aria-label="Permalink to &quot;创建分支并切换&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> [HASH]</span></span></code></pre></div><h3 id="强制-push" tabindex="-1">强制 push <a class="header-anchor" href="#强制-push" aria-label="Permalink to &quot;强制 push&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--force</span></span></code></pre></div><h3 id="重制-清空暂存区" tabindex="-1">重制-清空暂存区 <a class="header-anchor" href="#重制-清空暂存区" aria-label="Permalink to &quot;重制-清空暂存区&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span></span></code></pre></div><h3 id="放弃本地修改的所有文件" tabindex="-1">放弃本地修改的所有文件 <a class="header-anchor" href="#放弃本地修改的所有文件" aria-label="Permalink to &quot;放弃本地修改的所有文件&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span></code></pre></div>`,47),e=[p];function t(c,r,i,C,y,h){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};