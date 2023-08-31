import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.14d4b9fc.js";const v=JSON.parse('{"title":"class 是如何被 babel 转译","description":"","frontmatter":{},"headers":[],"relativePath":"notes/babel/class-translated-by-babel.md","filePath":"notes/babel/class-translated-by-babel.md","lastUpdated":1693295129000}'),p={name:"notes/babel/class-translated-by-babel.md"},o=l(`<h1 id="class-是如何被-babel-转译" tabindex="-1">class 是如何被 babel 转译 <a class="header-anchor" href="#class-是如何被-babel-转译" aria-label="Permalink to &quot;class 是如何被 babel 转译&quot;">​</a></h1><ul><li><a href="https://babeljs.io/repl#?browsers=&amp;build=&amp;builtIns=false&amp;corejs=3.6&amp;spec=false&amp;loose=false&amp;code_lz=MYGwhgzhAECCB2BLAtgU2gbwFDWgYgCMxoBeaARgCYBmHfAg06ay8uiAFzA8WGmAAMTKrVyduvfuWE0sdYAHt4nAE4BXYBwUqAFGAEAaaGHIBKTHVwcAFoggA6fU32XoNu4-lkTr9w8LEZAKuisoKIKj2IAoA5jp-9gGmIUoQ4ZHRcQmEBMm4AL5Y-UA&amp;debug=false&amp;forceAllTransforms=false&amp;shippedProposals=false&amp;circleciRepo=&amp;evaluate=true&amp;fileSize=true&amp;timeTravel=false&amp;sourceType=module&amp;lineWrap=true&amp;presets=env%2Ctypescript&amp;prettier=true&amp;targets=&amp;version=7.15.8&amp;externalPlugins=&amp;assumptions=%7B%7D" target="_blank" rel="noreferrer">Babel PlayGround</a></li></ul><h2 id="es6-code" tabindex="-1">ES6+ code <a class="header-anchor" href="#es6-code" aria-label="Permalink to &quot;ES6+ code&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Anime</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">#ba</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">123</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">#bb</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">321</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">c0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">123</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">c1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">123</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a0</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">a1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.a0 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> a0</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.a1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> a1</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.#ba </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.#ba)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.#bb)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Anime</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">#ba</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">123</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">#bb</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">321</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#E36209;">c0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">123</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#E36209;">c1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">123</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">a0</span><span style="color:#24292E;">, </span><span style="color:#E36209;">a1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.a0 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> a0</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.a1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> a1</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.#ba </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.#ba)</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.#bb)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="es5-code" tabindex="-1">ES5 code <a class="header-anchor" href="#es5-code" aria-label="Permalink to &quot;ES5 code&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Lccd_" id="tab-RmTkDBo" checked="checked"><label for="tab-RmTkDBo">Class</label><input type="radio" name="group-Lccd_" id="tab-P_SsdLM"><label for="tab-P_SsdLM">_classCallCheck &amp; _defineProperty</label><input type="radio" name="group-Lccd_" id="tab-RvOVOas"><label for="tab-RvOVOas">_classApplyDescriptorGet &amp; _classApplyDescriptorSet</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> _ba </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">/*#__PURE__*/</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WeakMap</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> _bb </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">/*#__PURE__*/</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WeakMap</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Anime</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Anime</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a0</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">a1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">_classCallCheck</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, Anime)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// #ba = 123</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">_classPrivateFieldInitSpec</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, _ba, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    writable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// #bb = 321</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">_classPrivateFieldInitSpec</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, _bb, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    writable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: </span><span style="color:#79B8FF;">321</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.a0 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> a0</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.a1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> a1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// this.#ba = 0</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">_classPrivateFieldSet</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, _ba, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// this.#ba</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">_classPrivateFieldGet</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, _ba))</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// this.#bb</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">_classPrivateFieldGet</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, _bb))</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// static c0 = 123</span></span>
<span class="line"><span style="color:#B392F0;">_defineProperty</span><span style="color:#E1E4E8;">(Anime, </span><span style="color:#9ECBFF;">&#39;c0&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// static c1 = 123</span></span>
<span class="line"><span style="color:#B392F0;">_defineProperty</span><span style="color:#E1E4E8;">(Anime, </span><span style="color:#9ECBFF;">&#39;c1&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> _ba </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">/*#__PURE__*/</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WeakMap</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> _bb </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">/*#__PURE__*/</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WeakMap</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Anime</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Anime</span><span style="color:#24292E;">(</span><span style="color:#E36209;">a0</span><span style="color:#24292E;">, </span><span style="color:#E36209;">a1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">_classCallCheck</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, Anime)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// #ba = 123</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">_classPrivateFieldInitSpec</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, _ba, {</span></span>
<span class="line"><span style="color:#24292E;">    writable: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    value: </span><span style="color:#005CC5;">123</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// #bb = 321</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">_classPrivateFieldInitSpec</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, _bb, {</span></span>
<span class="line"><span style="color:#24292E;">    writable: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    value: </span><span style="color:#005CC5;">321</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.a0 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> a0</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.a1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> a1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// this.#ba = 0</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">_classPrivateFieldSet</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, _ba, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// this.#ba</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">_classPrivateFieldGet</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, _ba))</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// this.#bb</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">_classPrivateFieldGet</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, _bb))</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// static c0 = 123</span></span>
<span class="line"><span style="color:#6F42C1;">_defineProperty</span><span style="color:#24292E;">(Anime, </span><span style="color:#032F62;">&#39;c0&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">123</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// static c1 = 123</span></span>
<span class="line"><span style="color:#6F42C1;">_defineProperty</span><span style="color:#24292E;">(Anime, </span><span style="color:#032F62;">&#39;c1&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">123</span><span style="color:#24292E;">)</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&#39;use strict&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// class clall 检查 (new)</span></span>
<span class="line"><span style="color:#6A737D;">// class clall check</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_classCallCheck</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">instance</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">Constructor</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">(instance </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Constructor</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TypeError</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Cannot call a class as a function&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// define property</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_defineProperty</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (key </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> obj) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    Object.</span><span style="color:#B392F0;">defineProperty</span><span style="color:#E1E4E8;">(obj, key, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: value,</span></span>
<span class="line"><span style="color:#E1E4E8;">      enumerable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      configurable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      writable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    obj[key] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> obj</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&#39;use strict&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// class clall 检查 (new)</span></span>
<span class="line"><span style="color:#6A737D;">// class clall check</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_classCallCheck</span><span style="color:#24292E;">(</span><span style="color:#E36209;">instance</span><span style="color:#24292E;">, </span><span style="color:#E36209;">Constructor</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(instance </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Constructor</span><span style="color:#24292E;">)) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TypeError</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Cannot call a class as a function&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// define property</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_defineProperty</span><span style="color:#24292E;">(</span><span style="color:#E36209;">obj</span><span style="color:#24292E;">, </span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (key </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> obj) {</span></span>
<span class="line"><span style="color:#24292E;">    Object.</span><span style="color:#6F42C1;">defineProperty</span><span style="color:#24292E;">(obj, key, {</span></span>
<span class="line"><span style="color:#24292E;">      value: value,</span></span>
<span class="line"><span style="color:#24292E;">      enumerable: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      configurable: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      writable: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    obj[key] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> obj</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&#39;use strict&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// class apply descriptor get</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_classApplyDescriptorGet</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">receiver</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">descriptor</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (descriptor.get) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> descriptor.get.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(receiver)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> descriptor.value</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// class apply descriptor set</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_classApplyDescriptorSet</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">receiver</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">descriptor</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (descriptor.set) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    descriptor.set.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(receiver, value)</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">descriptor.writable) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TypeError</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;attempted to set read only private field&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    descriptor.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&#39;use strict&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// class apply descriptor get</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_classApplyDescriptorGet</span><span style="color:#24292E;">(</span><span style="color:#E36209;">receiver</span><span style="color:#24292E;">, </span><span style="color:#E36209;">descriptor</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (descriptor.get) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> descriptor.get.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(receiver)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> descriptor.value</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// class apply descriptor set</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_classApplyDescriptorSet</span><span style="color:#24292E;">(</span><span style="color:#E36209;">receiver</span><span style="color:#24292E;">, </span><span style="color:#E36209;">descriptor</span><span style="color:#24292E;">, </span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (descriptor.set) {</span></span>
<span class="line"><span style="color:#24292E;">    descriptor.set.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(receiver, value)</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">descriptor.writable) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TypeError</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;attempted to set read only private field&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    descriptor.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-YyWyM" id="tab-tpC4eqY" checked="checked"><label for="tab-tpC4eqY">_classPrivateFieldGet &amp; _classPrivateFieldSet</label><input type="radio" name="group-YyWyM" id="tab-awxzGIF"><label for="tab-awxzGIF">_classPrivateFieldInitSpec &amp; _checkPrivateRedeclaration &amp; _classExtractFieldDescriptor</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&#39;use strict&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// get class private 字段</span></span>
<span class="line"><span style="color:#6A737D;">// class private field get</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_classPrivateFieldGet</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">receiver</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">privateMap</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> descriptor </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_classExtractFieldDescriptor</span><span style="color:#E1E4E8;">(receiver, privateMap, </span><span style="color:#9ECBFF;">&#39;get&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_classApplyDescriptorGet</span><span style="color:#E1E4E8;">(receiver, descriptor)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// set class private 字段</span></span>
<span class="line"><span style="color:#6A737D;">// class private field set</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_classPrivateFieldSet</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">receiver</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">privateMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> descriptor </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_classExtractFieldDescriptor</span><span style="color:#E1E4E8;">(receiver, privateMap, </span><span style="color:#9ECBFF;">&#39;set&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">_classApplyDescriptorSet</span><span style="color:#E1E4E8;">(receiver, descriptor, value)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> value</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&#39;use strict&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// get class private 字段</span></span>
<span class="line"><span style="color:#6A737D;">// class private field get</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_classPrivateFieldGet</span><span style="color:#24292E;">(</span><span style="color:#E36209;">receiver</span><span style="color:#24292E;">, </span><span style="color:#E36209;">privateMap</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> descriptor </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_classExtractFieldDescriptor</span><span style="color:#24292E;">(receiver, privateMap, </span><span style="color:#032F62;">&#39;get&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_classApplyDescriptorGet</span><span style="color:#24292E;">(receiver, descriptor)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// set class private 字段</span></span>
<span class="line"><span style="color:#6A737D;">// class private field set</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_classPrivateFieldSet</span><span style="color:#24292E;">(</span><span style="color:#E36209;">receiver</span><span style="color:#24292E;">, </span><span style="color:#E36209;">privateMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> descriptor </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_classExtractFieldDescriptor</span><span style="color:#24292E;">(receiver, privateMap, </span><span style="color:#032F62;">&#39;set&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">_classApplyDescriptorSet</span><span style="color:#24292E;">(receiver, descriptor, value)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> value</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&#39;use strict&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// class 的 private 字段初始化规范</span></span>
<span class="line"><span style="color:#6A737D;">// class private field init spec</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_classPrivateFieldInitSpec</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">privateMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">_checkPrivateRedeclaration</span><span style="color:#E1E4E8;">(obj, privateMap)</span></span>
<span class="line"><span style="color:#E1E4E8;">  privateMap.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(obj, value)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 检查 class private 重新声明</span></span>
<span class="line"><span style="color:#6A737D;">// check private redeclaration</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_checkPrivateRedeclaration</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">privateCollection</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (privateCollection.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(obj)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TypeError</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Cannot initialize the same private elements twice on an object&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 提取 class 的字段描述符</span></span>
<span class="line"><span style="color:#6A737D;">// class extract field descriptor</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_classExtractFieldDescriptor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">receiver</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">privateMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">action</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">privateMap.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(receiver)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TypeError</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;attempted to &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> action </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39; private field on non-instance&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> privateMap.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(receiver)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&#39;use strict&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// class 的 private 字段初始化规范</span></span>
<span class="line"><span style="color:#6A737D;">// class private field init spec</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_classPrivateFieldInitSpec</span><span style="color:#24292E;">(</span><span style="color:#E36209;">obj</span><span style="color:#24292E;">, </span><span style="color:#E36209;">privateMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">_checkPrivateRedeclaration</span><span style="color:#24292E;">(obj, privateMap)</span></span>
<span class="line"><span style="color:#24292E;">  privateMap.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(obj, value)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 检查 class private 重新声明</span></span>
<span class="line"><span style="color:#6A737D;">// check private redeclaration</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_checkPrivateRedeclaration</span><span style="color:#24292E;">(</span><span style="color:#E36209;">obj</span><span style="color:#24292E;">, </span><span style="color:#E36209;">privateCollection</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (privateCollection.</span><span style="color:#6F42C1;">has</span><span style="color:#24292E;">(obj)) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TypeError</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Cannot initialize the same private elements twice on an object&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 提取 class 的字段描述符</span></span>
<span class="line"><span style="color:#6A737D;">// class extract field descriptor</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_classExtractFieldDescriptor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">receiver</span><span style="color:#24292E;">, </span><span style="color:#E36209;">privateMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">action</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">privateMap.</span><span style="color:#6F42C1;">has</span><span style="color:#24292E;">(receiver)) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TypeError</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;attempted to &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> action </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39; private field on non-instance&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> privateMap.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(receiver)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div>`,7),e=[o];function c(t,r,E,y,i,F){return a(),n("div",null,e)}const A=s(p,[["render",c]]);export{v as __pageData,A as default};
