import{_ as n,f as s,e as a,N as t}from"./plugin-vue_export-helper.147b70e9.js";const h='{"title":"\u8DEF\u7531","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"},{"level":3,"title":"\u6A21\u5757\u8BF4\u660E","slug":"\u6A21\u5757\u8BF4\u660E"},{"level":3,"title":"\u591A\u7EA7\u8DEF\u7531","slug":"\u591A\u7EA7\u8DEF\u7531"},{"level":3,"title":"Meta \u914D\u7F6E\u8BF4\u660E","slug":"meta-\u914D\u7F6E\u8BF4\u660E"},{"level":3,"title":"\u5916\u90E8\u9875\u9762\u5D4C\u5957","slug":"\u5916\u90E8\u9875\u9762\u5D4C\u5957"},{"level":3,"title":"\u5916\u94FE","slug":"\u5916\u94FE"},{"level":3,"title":"\u52A8\u6001\u8DEF\u7531Tab\u81EA\u52A8\u5173\u95ED\u529F\u80FD","slug":"\u52A8\u6001\u8DEF\u7531tab\u81EA\u52A8\u5173\u95ED\u529F\u80FD"},{"level":2,"title":"\u56FE\u6807","slug":"\u56FE\u6807"},{"level":2,"title":"\u65B0\u589E\u8DEF\u7531","slug":"\u65B0\u589E\u8DEF\u7531"},{"level":3,"title":"\u5982\u4F55\u65B0\u589E\u4E00\u4E2A\u8DEF\u7531\u6A21\u5757","slug":"\u5982\u4F55\u65B0\u589E\u4E00\u4E2A\u8DEF\u7531\u6A21\u5757"},{"level":3,"title":"\u9A8C\u8BC1","slug":"\u9A8C\u8BC1"},{"level":2,"title":"\u8DEF\u7531\u5237\u65B0","slug":"\u8DEF\u7531\u5237\u65B0"},{"level":3,"title":"\u5B9E\u73B0","slug":"\u5B9E\u73B0"},{"level":3,"title":"Redirect","slug":"redirect"},{"level":2,"title":"\u9875\u9762\u8DF3\u8F6C","slug":"\u9875\u9762\u8DF3\u8F6C"},{"level":3,"title":"\u65B9\u5F0F","slug":"\u65B9\u5F0F"},{"level":2,"title":"\u591A\u6807\u7B7E\u9875","slug":"\u591A\u6807\u7B7E\u9875"},{"level":3,"title":"\u5982\u4F55\u5F00\u542F\u9875\u9762\u7F13\u5B58","slug":"\u5982\u4F55\u5F00\u542F\u9875\u9762\u7F13\u5B58"},{"level":3,"title":"\u5982\u4F55\u8BA9\u67D0\u4E2A\u9875\u9762\u4E0D\u7F13\u5B58","slug":"\u5982\u4F55\u8BA9\u67D0\u4E2A\u9875\u9762\u4E0D\u7F13\u5B58"},{"level":2,"title":"\u5982\u4F55\u66F4\u6539\u9996\u9875\u8DEF\u7531","slug":"\u5982\u4F55\u66F4\u6539\u9996\u9875\u8DEF\u7531"}],"relativePath":"guide/router.md","lastUpdated":1650320168223}',p={},o=t(`<h1 id="\u8DEF\u7531"><a class="header-anchor" href="#\u8DEF\u7531" aria-hidden="true">#</a> \u8DEF\u7531</h1><p>\u9879\u76EE\u8DEF\u7531\u914D\u7F6E\u5B58\u653E\u4E8E <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/routes" target="_blank" rel="noopener noreferrer">src/router/routes</a> \u4E0B\u9762\u3002 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/routes/modules" target="_blank" rel="noopener noreferrer">src/router/routes/modules</a>\u7528\u4E8E\u5B58\u653E\u8DEF\u7531\u6A21\u5757\uFF0C\u5728\u8BE5\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u4F1A\u81EA\u52A8\u6CE8\u518C\u3002</p><h2 id="\u914D\u7F6E"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h3 id="\u6A21\u5757\u8BF4\u660E"><a class="header-anchor" href="#\u6A21\u5757\u8BF4\u660E" aria-hidden="true">#</a> \u6A21\u5757\u8BF4\u660E</h3><p>\u5728 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/routes/modules" target="_blank" rel="noopener noreferrer">src/router/routes/modules</a> \u5185\u7684 <code>.ts</code> \u6587\u4EF6\u4F1A\u88AB\u89C6\u4E3A\u4E00\u4E2A\u8DEF\u7531\u6A21\u5757\u3002</p><p>\u4E00\u4E2A\u8DEF\u7531\u6A21\u5757\u5305\u542B\u4EE5\u4E0B\u7ED3\u6784</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> AppRouteModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/router/types&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">LAYOUT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/router/constant&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/hooks/web/useI18n&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> dashboard<span class="token operator">:</span> AppRouteModule <span class="token operator">=</span> <span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;/dashboard&#39;</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;Dashboard&#39;</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> <span class="token constant">LAYOUT</span><span class="token punctuation">,</span>
  redirect<span class="token operator">:</span> <span class="token string">&#39;/dashboard/analysis&#39;</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    icon<span class="token operator">:</span> <span class="token string">&#39;ion:grid-outline&#39;</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.dashboard&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;analysis&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;Analysis&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/dashboard/analysis/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        affix<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.analysis&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;workbench&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;Workbench&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/dashboard/workbench/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.workbench&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> dashboard<span class="token punctuation">;</span>
</code></pre></div><h3 id="\u591A\u7EA7\u8DEF\u7531"><a class="header-anchor" href="#\u591A\u7EA7\u8DEF\u7531" aria-hidden="true">#</a> \u591A\u7EA7\u8DEF\u7531</h3><div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F\u4E8B\u9879</p><ul><li>\u6574\u4E2A\u9879\u76EE\u6240\u6709\u8DEF\u7531 <code>name</code> \u4E0D\u80FD\u91CD\u590D</li><li>\u6240\u6709\u7684\u591A\u7EA7\u8DEF\u7531\u6700\u7EC8\u90FD\u4F1A\u8F6C\u6210\u4E8C\u7EA7\u8DEF\u7531\uFF0C\u6240\u4EE5\u4E0D\u80FD\u5185\u5D4C\u5B50\u8DEF\u7531</li><li>\u9664\u4E86 layout \u5BF9\u5E94\u7684 path \u524D\u9762\u9700\u8981\u52A0 <code>/</code>\uFF0C\u5176\u4F59\u5B50\u8DEF\u7531\u90FD\u4E0D\u8981\u4EE5<code>/</code>\u5F00\u5934</li></ul></div><p><strong>\u793A\u4F8B</strong></p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> AppRouteModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/router/types&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getParentLayout<span class="token punctuation">,</span> <span class="token constant">LAYOUT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/router/constant&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/hooks/web/useI18n&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> permission<span class="token operator">:</span> AppRouteModule <span class="token operator">=</span> <span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;/level&#39;</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;Level&#39;</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> <span class="token constant">LAYOUT</span><span class="token punctuation">,</span>
  redirect<span class="token operator">:</span> <span class="token string">&#39;/level/menu1/menu1-1/menu1-1-1&#39;</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    icon<span class="token operator">:</span> <span class="token string">&#39;ion:menu-outline&#39;</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.demo.level.level&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;tabs/:id&#39;</span><span class="token punctuation">,</span> 
      name<span class="token operator">:</span> <span class="token string">&#39;TabsParams&#39;</span><span class="token punctuation">,</span>
      component<span class="token operator">:</span> <span class="token function">getParentLayout</span><span class="token punctuation">(</span><span class="token string">&#39;TabsParams&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        carryParam<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        hidePathForChildren<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u672C\u7EA7path\u5C06\u4F1A\u5728\u5B50\u7EA7\u83DC\u5355\u4E2D\u5408\u6210\u5B8C\u6574path\u65F6\u4F1A\u5FFD\u7565\u8FD9\u4E00\u5C42\u7EA7</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token punctuation">[</span>
        path<span class="token operator">:</span> <span class="token string">&#39;tabs/id1&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5176\u4E0A\u7EA7\u6709\u6807\u8BB0hidePathForChildren\uFF0C\u6240\u4EE5\u672C\u7EA7\u5728\u751F\u6210\u83DC\u5355\u65F6\u6700\u7EC8\u7684path\u4E3A  /level/tabs/id1</span>
        name<span class="token operator">:</span> <span class="token string">&#39;TabsParams&#39;</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span> <span class="token function">getParentLayout</span><span class="token punctuation">(</span><span class="token string">&#39;TabsParams&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
          carryParam<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          ignoreRoute<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// \u672C\u8DEF\u7531\u4EC5\u7528\u4E8E\u83DC\u5355\u751F\u6210\uFF0C\u4E0D\u4F1A\u5728\u5B9E\u9645\u7684\u8DEF\u7531\u8868\u4E2D\u51FA\u73B0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;menu1&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;Menu1Demo&#39;</span><span class="token punctuation">,</span>
      component<span class="token operator">:</span> <span class="token function">getParentLayout</span><span class="token punctuation">(</span><span class="token string">&#39;Menu1Demo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&#39;Menu1&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      redirect<span class="token operator">:</span> <span class="token string">&#39;/level/menu1/menu1-1/menu1-1-1&#39;</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">&#39;menu1-1&#39;</span><span class="token punctuation">,</span>
          name<span class="token operator">:</span> <span class="token string">&#39;Menu11Demo&#39;</span><span class="token punctuation">,</span>
          component<span class="token operator">:</span> <span class="token function">getParentLayout</span><span class="token punctuation">(</span><span class="token string">&#39;Menu11Demo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          meta<span class="token operator">:</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">&#39;Menu1-1&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          redirect<span class="token operator">:</span> <span class="token string">&#39;/level/menu1/menu1-1/menu1-1-1&#39;</span><span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              path<span class="token operator">:</span> <span class="token string">&#39;menu1-1-1&#39;</span><span class="token punctuation">,</span>
              name<span class="token operator">:</span> <span class="token string">&#39;Menu111Demo&#39;</span><span class="token punctuation">,</span>
              <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/demo/level/Menu111.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">&#39;Menu111&#39;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> permission<span class="token punctuation">;</span>
</code></pre></div><h3 id="meta-\u914D\u7F6E\u8BF4\u660E"><a class="header-anchor" href="#meta-\u914D\u7F6E\u8BF4\u660E" aria-hidden="true">#</a> Meta \u914D\u7F6E\u8BF4\u660E</h3><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">RouteMeta</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8DEF\u7531title  \u4E00\u822C\u5FC5\u586B</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// \u52A8\u6001\u8DEF\u7531\u53EF\u6253\u5F00Tab\u9875\u6570</span>
  dynamicLevel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token comment">// \u52A8\u6001\u8DEF\u7531\u7684\u5B9E\u9645Path, \u5373\u53BB\u9664\u8DEF\u7531\u7684\u52A8\u6001\u90E8\u5206;</span>
  realPath<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// \u662F\u5426\u5FFD\u7565\u6743\u9650\uFF0C\u53EA\u5728\u6743\u9650\u6A21\u5F0F\u4E3ARole\u7684\u65F6\u5019\u6709\u6548</span>
  ignoreAuth<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token comment">// \u53EF\u4EE5\u8BBF\u95EE\u7684\u89D2\u8272\uFF0C\u53EA\u5728\u6743\u9650\u6A21\u5F0F\u4E3ARole\u7684\u65F6\u5019\u6709\u6548</span>
  roles<span class="token operator">?</span><span class="token operator">:</span> RoleEnum<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// \u662F\u5426\u5FFD\u7565KeepAlive\u7F13\u5B58</span>
  ignoreKeepAlive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token comment">// \u662F\u5426\u56FA\u5B9A\u6807\u7B7E</span>
  affix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token comment">// \u56FE\u6807\uFF0C\u4E5F\u662F\u83DC\u5355\u56FE\u6807</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5185\u5D4Ciframe\u7684\u5730\u5740</span>
  frameSrc<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// \u6307\u5B9A\u8BE5\u8DEF\u7531\u5207\u6362\u7684\u52A8\u753B\u540D</span>
  transitionName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// \u9690\u85CF\u8BE5\u8DEF\u7531\u5728\u9762\u5305\u5C51\u4E0A\u9762\u7684\u663E\u793A</span>
  hideBreadcrumb<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5982\u679C\u8BE5\u8DEF\u7531\u4F1A\u643A\u5E26\u53C2\u6570\uFF0C\u4E14\u9700\u8981\u5728tab\u9875\u4E0A\u9762\u663E\u793A\u3002\u5219\u9700\u8981\u8BBE\u7F6E\u4E3Atrue</span>
  carryParam<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token comment">// \u9690\u85CF\u6240\u6709\u5B50\u83DC\u5355</span>
  hideChildrenInMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5F53\u524D\u6FC0\u6D3B\u7684\u83DC\u5355\u3002\u7528\u4E8E\u914D\u7F6E\u8BE6\u60C5\u9875\u65F6\u5DE6\u4FA7\u6FC0\u6D3B\u7684\u83DC\u5355\u8DEF\u5F84</span>
  currentActiveMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5F53\u524D\u8DEF\u7531\u4E0D\u518D\u6807\u7B7E\u9875\u663E\u793A</span>
  hideTab<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5F53\u524D\u8DEF\u7531\u4E0D\u518D\u83DC\u5355\u663E\u793A</span>
  hideMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token comment">// \u83DC\u5355\u6392\u5E8F\uFF0C\u53EA\u5BF9\u7B2C\u4E00\u7EA7\u6709\u6548</span>
  orderNo<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5FFD\u7565\u8DEF\u7531\u3002\u7528\u4E8E\u5728ROUTE_MAPPING\u4EE5\u53CABACK\u6743\u9650\u6A21\u5F0F\u4E0B\uFF0C\u751F\u6210\u5BF9\u5E94\u7684\u83DC\u5355\u800C\u5FFD\u7565\u8DEF\u7531\u30022.5.3\u4EE5\u4E0A\u7248\u672C\u6709\u6548</span>
  ignoreRoute<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token comment">// \u662F\u5426\u5728\u5B50\u7EA7\u83DC\u5355\u7684\u5B8C\u6574path\u4E2D\u5FFD\u7565\u672C\u7EA7path\u30022.5.3\u4EE5\u4E0A\u7248\u672C\u6709\u6548</span>
  hidePathForChildren<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5916\u90E8\u9875\u9762\u5D4C\u5957"><a class="header-anchor" href="#\u5916\u90E8\u9875\u9762\u5D4C\u5957" aria-hidden="true">#</a> \u5916\u90E8\u9875\u9762\u5D4C\u5957</h3><p>\u53EA\u9700\u8981\u5C06 <code>frameSrc</code> \u8BBE\u7F6E\u4E3A\u9700\u8981\u8DF3\u8F6C\u7684\u5730\u5740\u5373\u53EF</p><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">IFrame</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/sys/iframe/FrameBlank.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;doc&#39;</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;Doc&#39;</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> IFrame<span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    frameSrc<span class="token operator">:</span> <span class="token string">&#39;https://vvbin.cn/doc-next/&#39;</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.demo.iframe.doc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="\u5916\u94FE"><a class="header-anchor" href="#\u5916\u94FE" aria-hidden="true">#</a> \u5916\u94FE</h3><p>\u53EA\u9700\u8981\u5C06 <code>path</code> \u8BBE\u7F6E\u4E3A\u9700\u8981\u8DF3\u8F6C\u7684<strong>HTTP \u5730\u5740</strong>\u5373\u53EF</p><div class="language-ts"><pre><code><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;https://vvbin.cn/doc-next/&#39;</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;DocExternal&#39;</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> IFrame<span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.demo.iframe.docExternal&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u52A8\u6001\u8DEF\u7531tab\u81EA\u52A8\u5173\u95ED\u529F\u80FD"><a class="header-anchor" href="#\u52A8\u6001\u8DEF\u7531tab\u81EA\u52A8\u5173\u95ED\u529F\u80FD" aria-hidden="true">#</a> \u52A8\u6001\u8DEF\u7531Tab\u81EA\u52A8\u5173\u95ED\u529F\u80FD</h3><p>\u82E5\u9700\u8981\u5F00\u542F\u8BE5\u529F\u80FD\uFF0C\u9700\u8981\u5728\u52A8\u6001\u8DEF\u7531\u7684<code>meta</code>\u4E2D\u8BBE\u7F6E\u5982\u4E0B\u4E24\u4E2A\u53C2\u6570\uFF1A</p><ul><li><code>dynamicLevel</code> \u6700\u5927\u80FD\u6253\u5F00\u7684Tab\u6807\u7B7E\u9875\u6570</li><li><code>realPath</code> \u52A8\u6001\u8DEF\u7531\u5B9E\u9645\u8DEF\u5F84(\u8003\u8651\u5230\u52A8\u6001\u8DEF\u7531\u6709\u65F6\u5019\u53EF\u80FD\u5B58\u5728N\u5C42\u7684\u60C5\u51B5, \u4F8B\uFF1A<code>/:id/:subId/:...</code>), \u4E3A\u4E86\u51CF\u5C11\u8BA1\u7B97\u5F00\u9500, \u4F7F\u7528\u914D\u7F6E\u65B9\u5F0F\u4E8B\u5148\u89C4\u5B9A\u597D\u8DEF\u7531\u7684\u5B9E\u9645\u8DEF\u5F84(\u6CE8\u610F: \u8BE5\u53C2\u6570\u82E5\u4E0D\u8BBE\u7F6E\uFF0C\u5C06\u65E0\u6CD5\u4F7F\u7528\u8BE5\u529F\u80FD)</li></ul><div class="language-ts"><pre><code><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;detail/:id&#39;</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;TabDetail&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/demo/feat/tabs/TabDetail.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    currentActiveMenu<span class="token operator">:</span> <span class="token string">&#39;/feat/tabs&#39;</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.demo.feat.tabDetail&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    hideMenu<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    dynamicLevel<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    realPath<span class="token operator">:</span> <span class="token string">&#39;/feat/tabs/detail&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u56FE\u6807"><a class="header-anchor" href="#\u56FE\u6807" aria-hidden="true">#</a> \u56FE\u6807</h2><p>\u8FD9\u91CC\u7684 <code>icon</code> \u914D\u7F6E\uFF0C\u4F1A\u540C\u6B65\u5230 <strong>\u83DC\u5355</strong>\uFF08icon \u7684\u503C\u53EF\u4EE5\u67E5\u770B<a href="./../components/icon.html">\u6B64\u5904</a>\uFF09\u3002</p><h2 id="\u65B0\u589E\u8DEF\u7531"><a class="header-anchor" href="#\u65B0\u589E\u8DEF\u7531" aria-hidden="true">#</a> \u65B0\u589E\u8DEF\u7531</h2><h3 id="\u5982\u4F55\u65B0\u589E\u4E00\u4E2A\u8DEF\u7531\u6A21\u5757"><a class="header-anchor" href="#\u5982\u4F55\u65B0\u589E\u4E00\u4E2A\u8DEF\u7531\u6A21\u5757" aria-hidden="true">#</a> \u5982\u4F55\u65B0\u589E\u4E00\u4E2A\u8DEF\u7531\u6A21\u5757</h3><ol><li>\u5728 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/routes/modules" target="_blank" rel="noopener noreferrer">src/router/routes/modules</a> \u5185\u65B0\u589E\u4E00\u4E2A\u6A21\u5757\u6587\u4EF6\u3002</li></ol><p>\u793A\u4F8B\uFF0C\u65B0\u589E test.ts \u6587\u4EF6</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> AppRouteModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/router/types&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">LAYOUT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/router/constant&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/hooks/web/useI18n&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> dashboard<span class="token operator">:</span> AppRouteModule <span class="token operator">=</span> <span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;About&#39;</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> <span class="token constant">LAYOUT</span><span class="token punctuation">,</span>
  redirect<span class="token operator">:</span> <span class="token string">&#39;/about/index&#39;</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    icon<span class="token operator">:</span> <span class="token string">&#39;simple-icons:about-dot-me&#39;</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.about&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;AboutPage&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/sys/about/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.about&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token string">&#39;simple-icons:about-dot-me&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> dashboard<span class="token punctuation">;</span>
</code></pre></div><p>\u6B64\u65F6\u8DEF\u7531\u5DF2\u6DFB\u52A0\u5B8C\u6210\uFF0C\u4E0D\u9700\u8981\u624B\u52A8\u5F15\u5165\uFF0C\u653E\u5728<a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/routes/modules" target="_blank" rel="noopener noreferrer">src/router/routes/modules</a> \u5185\u7684\u6587\u4EF6\u4F1A\u81EA\u52A8\u88AB\u52A0\u8F7D\u3002</p><h3 id="\u9A8C\u8BC1"><a class="header-anchor" href="#\u9A8C\u8BC1" aria-hidden="true">#</a> \u9A8C\u8BC1</h3><p>\u8BBF\u95EE <strong>ip:\u7AEF\u53E3/about/index</strong> \u51FA\u73B0\u5BF9\u5E94\u7EC4\u4EF6\u5185\u5BB9\u5373\u4EE3\u8868\u6210\u529F</p><h2 id="\u8DEF\u7531\u5237\u65B0"><a class="header-anchor" href="#\u8DEF\u7531\u5237\u65B0" aria-hidden="true">#</a> \u8DEF\u7531\u5237\u65B0</h2><p>\u9879\u76EE\u4E2D\u91C7\u7528\u7684\u662F<strong>\u91CD\u5B9A\u5411</strong>\u65B9\u5F0F</p><h3 id="\u5B9E\u73B0"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9E\u73B0</h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRedo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/hooks/web/usePage&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> redo <span class="token operator">=</span> <span class="token function">useRedo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6267\u884C\u5237\u65B0</span>
    <span class="token function">redo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="redirect"><a class="header-anchor" href="#redirect" aria-hidden="true">#</a> Redirect</h3><p><a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/views/sys/redirect/index.vue" target="_blank" rel="noopener noreferrer">src/views/sys/redirect/index.vue</a></p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> unref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;Redirect&#39;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> currentRoute<span class="token punctuation">,</span> replace <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> params<span class="token punctuation">,</span> query <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">unref</span><span class="token punctuation">(</span>currentRoute<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> params<span class="token punctuation">;</span>
    <span class="token keyword">const</span> _path <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">?</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token operator">:</span> path<span class="token punctuation">;</span>
    <span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span> <span class="token operator">+</span> _path<span class="token punctuation">,</span>
      query<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u9875\u9762\u8DF3\u8F6C"><a class="header-anchor" href="#\u9875\u9762\u8DF3\u8F6C" aria-hidden="true">#</a> \u9875\u9762\u8DF3\u8F6C</h2><p>\u9875\u9762\u8DF3\u8F6C\u5EFA\u8BAE\u91C7\u7528\u9879\u76EE\u63D0\u4F9B\u7684 <code>useGo</code></p><h3 id="\u65B9\u5F0F"><a class="header-anchor" href="#\u65B9\u5F0F" aria-hidden="true">#</a> \u65B9\u5F0F</h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useGo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/hooks/web/usePage&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> go <span class="token operator">=</span> <span class="token function">useGo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u6267\u884C\u5237\u65B0</span>
    <span class="token function">go</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">go</span><span class="token punctuation">(</span>PageEnum<span class="token punctuation">.</span>Home<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u591A\u6807\u7B7E\u9875"><a class="header-anchor" href="#\u591A\u6807\u7B7E\u9875" aria-hidden="true">#</a> \u591A\u6807\u7B7E\u9875</h2><p>\u6807\u7B7E\u9875\u4F7F\u7528\u7684\u662F <code>keep-alive</code> \u548C <code>router-view</code> \u5B9E\u73B0\uFF0C\u5B9E\u73B0\u5207\u6362 tab \u540E\u8FD8\u80FD\u4FDD\u5B58\u5207\u6362\u4E4B\u524D\u7684\u72B6\u6001\u3002</p><h3 id="\u5982\u4F55\u5F00\u542F\u9875\u9762\u7F13\u5B58"><a class="header-anchor" href="#\u5982\u4F55\u5F00\u542F\u9875\u9762\u7F13\u5B58" aria-hidden="true">#</a> \u5982\u4F55\u5F00\u542F\u9875\u9762\u7F13\u5B58</h3><p>\u5F00\u542F\u7F13\u5B58\u6709 3 \u4E2A\u6761\u4EF6</p><ol><li>\u5728 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/projectSetting.ts" target="_blank" rel="noopener noreferrer">src/settings/projectSetting.ts</a> \u5185\u5C06<code>openKeepAlive</code> \u8BBE\u7F6E\u4E3A <code>true</code></li><li>\u8DEF\u7531\u8BBE\u7F6E <code>name</code>\uFF0C\u4E14<strong>\u4E0D\u80FD\u91CD\u590D</strong></li><li>\u8DEF\u7531\u5BF9\u5E94\u7684\u7EC4\u4EF6\u52A0\u4E0A <code>name</code>\uFF0C\u4E0E\u8DEF\u7531\u8BBE\u7F6E\u7684 <code>name</code> \u4FDD\u6301\u4E00\u81F4</li></ol><div class="language-ts"><pre><code> <span class="token punctuation">{</span>
   <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token comment">// name</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Login&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5BF9\u5E94\u7EC4\u4EF6\u7EC4\u4EF6\u7684name</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/sys/login/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// /@/views/sys/login/index.vue</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// \u9700\u8981\u548C\u8DEF\u7531\u7684name\u4E00\u81F4</span>
    name<span class="token operator">:</span><span class="token string">&quot;Login&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>keep-alive \u751F\u6548\u7684\u524D\u63D0\u662F\uFF1A\u9700\u8981\u5C06\u8DEF\u7531\u7684 <code>name</code> \u5C5E\u6027\u53CA\u5BF9\u5E94\u7684\u9875\u9762\u7684 <code>name</code> \u8BBE\u7F6E\u6210\u4E00\u6837\u3002\u56E0\u4E3A\uFF1A</p><p><strong>include - \u5B57\u7B26\u4E32\u6216\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u53EA\u6709\u540D\u79F0\u5339\u914D\u7684\u7EC4\u4EF6\u4F1A\u88AB\u7F13\u5B58</strong></p></div><h3 id="\u5982\u4F55\u8BA9\u67D0\u4E2A\u9875\u9762\u4E0D\u7F13\u5B58"><a class="header-anchor" href="#\u5982\u4F55\u8BA9\u67D0\u4E2A\u9875\u9762\u4E0D\u7F13\u5B58" aria-hidden="true">#</a> \u5982\u4F55\u8BA9\u67D0\u4E2A\u9875\u9762\u4E0D\u7F13\u5B58</h3><p><strong>\u53EF\u5728 router.meta \u4E0B\u914D\u7F6E</strong></p><p>\u53EF\u4EE5\u5C06 <code>ignoreKeepAlive</code> \u914D\u7F6E\u6210 <code>true</code> \u5373\u53EF\u5173\u95ED\u7F13\u5B58\u3002</p><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">RouteMeta</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u662F\u5426\u5FFD\u7565KeepAlive\u7F13\u5B58</span>
  ignoreKeepAlive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5982\u4F55\u66F4\u6539\u9996\u9875\u8DEF\u7531"><a class="header-anchor" href="#\u5982\u4F55\u66F4\u6539\u9996\u9875\u8DEF\u7531" aria-hidden="true">#</a> \u5982\u4F55\u66F4\u6539\u9996\u9875\u8DEF\u7531</h2><p>\u9996\u9875\u8DEF\u7531\u6307\u7684\u662F\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u9ED8\u8BA4\u8DEF\u7531\uFF0C\u5F53\u4E0D\u8F93\u5165\u5176\u4ED6\u4EFB\u4F55\u8DEF\u7531\u65F6\uFF0C\u4F1A\u81EA\u52A8\u91CD\u5B9A\u5411\u5230\u8BE5\u8DEF\u7531\u4E0B\uFF0C\u5E76\u4E14\u8BE5\u8DEF\u7531\u5728Tab\u4E0A\u662F\u56FA\u5B9A\u7684\uFF0C\u5373\u4F7F\u8BBE\u7F6E<code>affix: false</code>\u4E5F\u4E0D\u5141\u8BB8\u5173\u95ED</p><p>\u4F8B\uFF1A\u9996\u9875\u8DEF\u7531\u914D\u7F6E\u7684\u662F<code>/dashboard/analysis</code>\uFF0C\u90A3\u4E48\u5F53\u76F4\u63A5\u8BBF\u95EE <code>http://localhost:3100/</code> \u4F1A\u81EA\u52A8\u8DF3\u8F6C\u5230<code>http://localhost:3100/#/dashboard/analysis</code> \u4E0A(\u7528\u6237\u5DF2\u767B\u5F55\u7684\u60C5\u51B5\u4E0B)</p><p>\u53EF\u4EE5\u5C06<code>pageEnum.ts</code>\u4E2D\u7684<code>BASE_HOME</code>\u66F4\u6539\u4E3A\u9700\u8981\u4F60\u60F3\u8BBE\u7F6E\u7684\u9996\u9875\u5373\u53EF</p><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">enum</span> PageEnum <span class="token punctuation">{</span>
    <span class="token comment">// basic home path</span>
    <span class="token comment">// \u66F4\u6539\u6B64\u5904\u5373\u53EF</span>
    <span class="token constant">BASE_HOME</span> <span class="token operator">=</span> <span class="token string">&#39;/dashboard&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div>`,60),e=[o];function c(l,u,r,i,k,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{h as __pageData,g as default};
