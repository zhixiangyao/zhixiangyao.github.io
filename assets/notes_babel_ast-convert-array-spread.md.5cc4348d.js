import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.14d4b9fc.js";const A=JSON.parse('{"title":"AST: 转换数组 Spread","description":"","frontmatter":{},"headers":[],"relativePath":"notes/babel/ast-convert-array-spread.md","filePath":"notes/babel/ast-convert-array-spread.md","lastUpdated":1693363133000}'),p={name:"notes/babel/ast-convert-array-spread.md"},o=l(`<h1 id="ast-转换数组-spread" tabindex="-1">AST: 转换数组 Spread <a class="header-anchor" href="#ast-转换数组-spread" aria-label="Permalink to &quot;AST: 转换数组 Spread&quot;">​</a></h1><p>这里，我们自己来实现一个 <code>Bebel</code> 插件，来转换 <strong>Spread 语法</strong> 用 <strong>ES5</strong> 的 <strong>concat</strong> 实现。</p><embed src="https://cdn.jsdelivr.net/gh/zhixiangyao/CDN/images/icon/babel.svg" type="image/svg+xml"><p>主要是利用 <a href="https://www.npmjs.com/package/@babel/core" target="_blank" rel="noreferrer">@babel/core</a> 库的 <code>transform</code> 方法，还有 <a href="https://www.npmjs.com/package/@babel/types" target="_blank" rel="noreferrer">@babel/types</a> 库的 <code>isArrayExpression</code>, <code>arrayExpression</code>, <code>memberExpression</code>, <code>identifier</code>, <code>callExpression</code>, <code>variableDeclarator</code>, <code>variableDeclaration</code></p><h3 id="工具介绍" tabindex="-1">工具介绍 <a class="header-anchor" href="#工具介绍" aria-label="Permalink to &quot;工具介绍&quot;">​</a></h3><ul><li><p><strong>@babel/core</strong></p><ul><li><code>transform</code> 方法会帮我们自动遍历，在第二个参数中的 <strong><a href="https://babeljs.io/docs/en/plugins/" target="_blank" rel="noreferrer">plugins</a></strong> 参数，可以使用相应的预设或者插件来转换相应的代码</li></ul></li><li><p><strong>@babel/types</strong></p><ul><li><code>isArrayExpression</code> 判断是不是数组表达式</li><li><code>arrayExpression</code> 声明一个 <code>[]</code> 的 <strong>AST</strong></li><li><code>identifier</code> 声明一个 <code>concat</code> 的 <strong>AST</strong></li><li><code>memberExpression</code> 声明一个 <code>xxx.xxx</code> 的 <strong>AST</strong></li><li><code>callExpression</code> 声明一个 <code>xxx(xxx, xxx...)</code> 的 <strong>AST</strong></li><li><code>variableDeclarator</code> 声明一个 <code>xxx = xxx</code> 的 <strong>AST</strong></li><li><code>variableDeclaration</code> 声明一个 <code>xxx xxx, xxx, xxx;</code> 的 <strong>AST</strong></li></ul></li><li><p>在线 <strong><a href="https://astexplorer.net/" target="_blank" rel="noreferrer">AST Explorer</a></strong> 工具</p></li></ul><h3 id="转化对比" tabindex="-1">转化对比 <a class="header-anchor" href="#转化对比" aria-label="Permalink to &quot;转化对比&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-PcLwL" id="tab-TToAwLF" checked="checked"><label for="tab-TToAwLF">tab 转化前</label><input type="radio" name="group-PcLwL" id="tab-GXsvOhH"><label for="tab-GXsvOhH">tab 转化后</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">arr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">arr1, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">arr2]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">arr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">arr1, </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">arr2]</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> arr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [].</span><span style="color:#B392F0;">concat</span><span style="color:#E1E4E8;">(arr1, arr2)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> arr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [].</span><span style="color:#6F42C1;">concat</span><span style="color:#24292E;">(arr1, arr2)</span></span></code></pre></div></div></div><ul><li>本文转换前的 <a href="https://astexplorer.net/#/gist/be77a34f3ffb465797959d1a0c2bf863/5d2c433afa1da36e0fe0f0958e7996fa357f1a61" target="_blank" rel="noreferrer">AST 代码</a></li><li>本文转换后的 <code>var arr = [].concat(arr1, arr2);</code> <a href="https://astexplorer.net/#/gist/be77a34f3ffb465797959d1a0c2bf863/a26b0420c15f3e6ebd03b9bb1ac37b0b778c503d" target="_blank" rel="noreferrer">AST 代码</a></li></ul><h3 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码&quot;">​</a></h3><ul><li><a href="https://github.com/zhixiangyao/typescript-playground/blob/27800ff78097af7aafea4f513508b403b0de8fb3/src/transform/transformArraySpread.ts#L16" target="_blank" rel="noreferrer">Github 源码</a></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  isArrayExpression,</span></span>
<span class="line"><span style="color:#E1E4E8;">  arrayExpression,</span></span>
<span class="line"><span style="color:#E1E4E8;">  identifier,</span></span>
<span class="line"><span style="color:#E1E4E8;">  memberExpression,</span></span>
<span class="line"><span style="color:#E1E4E8;">  callExpression,</span></span>
<span class="line"><span style="color:#E1E4E8;">  variableDeclarator,</span></span>
<span class="line"><span style="color:#E1E4E8;">  variableDeclaration,</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@babel/types&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { transform } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@babel/core&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> chalk } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;chalk&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { log } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@common/index&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { VariableDeclaration, SpreadElement } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@babel/types&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { PluginItem, BabelFileResult, NodePath } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@babel/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">transformArraySpreadPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ()</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PluginItem</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    visitor: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">VariableDeclaration</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">path</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">NodePath</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">VariableDeclaration</span><span style="color:#E1E4E8;">&gt;) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">node</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> path </span><span style="color:#6A737D;">//         节点: const arr = [ ...arr1, ...arr2 ];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">declarations</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> node </span><span style="color:#6A737D;">// declarations: arr = [ ...arr1, ...arr2 ];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">kind</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;var&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 边界判定</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">          node.kind </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> kind </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">          declarations.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">isArrayExpression</span><span style="color:#E1E4E8;">(declarations[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].init)</span></span>
<span class="line"><span style="color:#E1E4E8;">        ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">args</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SpreadElement</span><span style="color:#E1E4E8;">[] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> declarations[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].init.elements.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">argument</span><span style="color:#E1E4E8;"> }</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> item</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> argument</span></span>
<span class="line"><span style="color:#E1E4E8;">          })</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// [].concat()</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">callee</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">memberExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">arrayExpression</span><span style="color:#E1E4E8;">(), </span><span style="color:#B392F0;">identifier</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;concat&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// [].concat(arr1, arr2)</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">callExpression</span><span style="color:#E1E4E8;">(callee, args)</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// arr = [].concat(arr1, arr2)</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">declaration</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">variableDeclarator</span><span style="color:#E1E4E8;">(declarations[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].id, init)</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// var arr = [].concat(arr1, arr2)</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">newVariableDeclaration</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">variableDeclaration</span><span style="color:#E1E4E8;">(kind, [declaration])</span></span>
<span class="line"><span style="color:#E1E4E8;">          path.</span><span style="color:#B392F0;">replaceWith</span><span style="color:#E1E4E8;">(newVariableDeclaration)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Open the array</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">code</span><span style="color:#6A737D;"> const arr = [ ...arr1, ...arr2 ];</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@returns</span><span style="color:#6A737D;"> var arr = [].concat(arr1, arr2)</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">transformArraySpread</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">  code </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`const arr = [ ...arr1, ...arr2 ];\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(chalk.green.</span><span style="color:#B392F0;">bold</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;old =&gt;&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(code)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">data</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BabelFileResult</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">transform</span><span style="color:#E1E4E8;">(code, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: [</span><span style="color:#B392F0;">transformArraySpreadPlugin</span><span style="color:#E1E4E8;">()],</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 转换后</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// var arr = [].concat(arr1, arr2)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(chalk.red.</span><span style="color:#B392F0;">bold</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;New =&gt;&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data?.code)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> data?.code</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> transformArraySpread</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> { transformArraySpreadPlugin }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  isArrayExpression,</span></span>
<span class="line"><span style="color:#24292E;">  arrayExpression,</span></span>
<span class="line"><span style="color:#24292E;">  identifier,</span></span>
<span class="line"><span style="color:#24292E;">  memberExpression,</span></span>
<span class="line"><span style="color:#24292E;">  callExpression,</span></span>
<span class="line"><span style="color:#24292E;">  variableDeclarator,</span></span>
<span class="line"><span style="color:#24292E;">  variableDeclaration,</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@babel/types&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { transform } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@babel/core&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> chalk } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;chalk&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { log } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@common/index&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { VariableDeclaration, SpreadElement } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@babel/types&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { PluginItem, BabelFileResult, NodePath } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@babel/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">transformArraySpreadPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ()</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PluginItem</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    visitor: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">VariableDeclaration</span><span style="color:#24292E;">(</span><span style="color:#E36209;">path</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">NodePath</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">VariableDeclaration</span><span style="color:#24292E;">&gt;) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">node</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> path </span><span style="color:#6A737D;">//         节点: const arr = [ ...arr1, ...arr2 ];</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">declarations</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> node </span><span style="color:#6A737D;">// declarations: arr = [ ...arr1, ...arr2 ];</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">kind</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;var&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 边界判定</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">          node.kind </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> kind </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">          declarations.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">isArrayExpression</span><span style="color:#24292E;">(declarations[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].init)</span></span>
<span class="line"><span style="color:#24292E;">        ) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">args</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SpreadElement</span><span style="color:#24292E;">[] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> declarations[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].init.elements.</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">((</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">argument</span><span style="color:#24292E;"> }</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> item</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> argument</span></span>
<span class="line"><span style="color:#24292E;">          })</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// [].concat()</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">callee</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">memberExpression</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">arrayExpression</span><span style="color:#24292E;">(), </span><span style="color:#6F42C1;">identifier</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;concat&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// [].concat(arr1, arr2)</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">init</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">callExpression</span><span style="color:#24292E;">(callee, args)</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// arr = [].concat(arr1, arr2)</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">declaration</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">variableDeclarator</span><span style="color:#24292E;">(declarations[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].id, init)</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// var arr = [].concat(arr1, arr2)</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">newVariableDeclaration</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">variableDeclaration</span><span style="color:#24292E;">(kind, [declaration])</span></span>
<span class="line"><span style="color:#24292E;">          path.</span><span style="color:#6F42C1;">replaceWith</span><span style="color:#24292E;">(newVariableDeclaration)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Open the array</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">code</span><span style="color:#6A737D;"> const arr = [ ...arr1, ...arr2 ];</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@returns</span><span style="color:#6A737D;"> var arr = [].concat(arr1, arr2)</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">transformArraySpread</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">  code </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`const arr = [ ...arr1, ...arr2 ];\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(chalk.green.</span><span style="color:#6F42C1;">bold</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;old =&gt;&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(code)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">data</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BabelFileResult</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">transform</span><span style="color:#24292E;">(code, {</span></span>
<span class="line"><span style="color:#24292E;">    plugins: [</span><span style="color:#6F42C1;">transformArraySpreadPlugin</span><span style="color:#24292E;">()],</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 转换后</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// var arr = [].concat(arr1, arr2)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(chalk.red.</span><span style="color:#6F42C1;">bold</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;New =&gt;&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data?.code)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> data?.code</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> transformArraySpread</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> { transformArraySpreadPlugin }</span></span></code></pre></div>`,12),e=[o];function r(c,t,E,y,i,d){return a(),n("div",null,e)}const b=s(p,[["render",r]]);export{A as __pageData,b as default};