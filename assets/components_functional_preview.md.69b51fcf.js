import{_ as n,f as a,e as s,N as t}from"./plugin-vue_export-helper.147b70e9.js";const m='{"title":"Preview","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"createImgPreview","slug":"createimgpreview"},{"level":3,"title":"\u53C2\u6570/Options","slug":"\u53C2\u6570-options"},{"level":3,"title":"\u8FD4\u56DE\u503C/PreviewActions","slug":"\u8FD4\u56DE\u503C-previewactions"}],"relativePath":"components/functional/preview.md","lastUpdated":1650320168223}',p={},o=t(`<h1 id="preview"><a class="header-anchor" href="#preview" aria-hidden="true">#</a> Preview</h1><p>\u5C06\u56FE\u7247\u9884\u89C8\u7EC4\u4EF6\u7EC4\u4EF6\u51FD\u6570\u5316\u3002\u901A\u8FC7\u51FD\u6570\u65B9\u4FBF\u521B\u5EFA\u7EC4\u4EF6</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6709\u9884\u89C8\u56FE<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex justify-center mt-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img in imgList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mr-2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick(img)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u65E0\u9884\u89C8\u56FE<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handlePreview<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mt-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u9884\u89C8\u56FE\u7247<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> createImgPreview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Preview/index&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token literal-property property">imgList</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;https://picsum.photos/id/66/346/216&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;https://picsum.photos/id/67/346/216&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;https://picsum.photos/id/68/346/216&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Alert <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">function</span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">img</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">createImgPreview</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">imageList</span><span class="token operator">:</span> <span class="token punctuation">[</span>img<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">function</span> <span class="token function">handlePreview</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">createImgPreview</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">imageList</span><span class="token operator">:</span> imgList <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> imgList<span class="token punctuation">,</span> handleClick<span class="token punctuation">,</span> handlePreview <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="createimgpreview"><a class="header-anchor" href="#createimgpreview" aria-hidden="true">#</a> createImgPreview</h2><h3 id="\u53C2\u6570-options"><a class="header-anchor" href="#\u53C2\u6570-options" aria-hidden="true">#</a> \u53C2\u6570/Options</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>imgList</td><td><code>string[]</code></td><td>-</td><td>-</td><td>\u56FE\u7247\u5217\u8868</td></tr><tr><td>index</td><td><code>number</code></td><td>0</td><td>-</td><td>\u521D\u59CB\u9884\u89C8\u65F6\u7684\u56FE\u7247\u7D22\u5F15</td></tr><tr><td>scaleStep</td><td><code>number</code></td><td>-</td><td>-</td><td>\u7F29\u653E\u6B65\u8FDB\u503C\uFF08\u6BCF\u6B21\u7F29\u653E\u7684\u5E45\u5EA6\uFF09\u3002\u9ED8\u8BA4\u4E3A\u81EA\u52A8\uFF08\u5F53\u524D\u7F29\u653E\u503C\u768410%\uFF09</td></tr><tr><td>defaultWidth</td><td><code>number</code></td><td>-</td><td>-</td><td>\u9ED8\u8BA4\u5BBD\u5EA6\uFF08\u5355\u4F4Dpx\uFF09\u3002\u5F53\u63D0\u4F9B\u6B64\u503C\u65F6\uFF0C\u6240\u6709\u56FE\u7247\u521D\u59CB\u65F6\u90FD\u4F1A\u88AB\u7F29\u653E\u81F3\u6B64\u5BBD\u5EA6</td></tr><tr><td>maskClosable</td><td><code>boolean</code></td><td>false</td><td><code>true/false</code></td><td>\u70B9\u51FB\u906E\u7F69\u65F6\u662F\u5426\u81EA\u52A8\u5173\u95ED\u9884\u89C8</td></tr><tr><td>rememberState</td><td><code>boolean</code></td><td>false</td><td><code>true/false</code></td><td>\u662F\u5426\u8BB0\u4F4F\u6BCF\u5F20\u56FE\u7247\u5404\u81EA\u7684\u7F29\u653E\u72B6\u6001</td></tr><tr><td>onImgLoad</td><td><code>({ index: number, url: string, dom: HTMLImageElement }) =&gt; void</code></td><td>-</td><td>-</td><td>\u56FE\u7247\u52A0\u8F7D\u6210\u529F\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>onImgError</td><td><code>({ index: number, url: string, dom: HTMLImageElement }) =&gt; void</code></td><td>-</td><td>-</td><td>\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><h3 id="\u8FD4\u56DE\u503C-previewactions"><a class="header-anchor" href="#\u8FD4\u56DE\u503C-previewactions" aria-hidden="true">#</a> \u8FD4\u56DE\u503C/PreviewActions</h3><p>\u53EF\u7528\u4E8E\u63A7\u5236\u5F53\u524D\u9884\u89C8\u72B6\u6001</p><div class="language-typescript"><pre><code><span class="token keyword">interface</span> <span class="token class-name">PreviewActions</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u91CD\u7F6E\u72B6\u6001</span>
  <span class="token function-variable function">resume</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5173\u95ED\u9884\u89C8</span>
  <span class="token function-variable function">close</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token comment">// \u663E\u793A\u524D\u4E00\u5F20</span>
  <span class="token function-variable function">prev</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token comment">// \u663E\u793A\u540E\u4E00\u5F20</span>
  <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token comment">// \u8BBE\u7F6E\u7F29\u653E\u6BD4\u4F8B(\u9488\u5BF9\u5F53\u524D\u56FE\u7247)</span>
  <span class="token function-variable function">setScale</span><span class="token operator">:</span> <span class="token punctuation">(</span>scale<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token comment">// \u8BBE\u7F6E\u65CB\u8F6C\u89D2\u5EA6(\u9488\u5BF9\u5F53\u524D\u56FE\u7247)</span>
  <span class="token function-variable function">setRotate</span><span class="token operator">:</span> <span class="token punctuation">(</span>rotate<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,10),e=[o];function c(u,l,i,k,r,d){return s(),a("div",null,e)}var v=n(p,[["render",c]]);export{m as __pageData,v as default};
