import{_ as e,f as s,e as t,N as a}from"./plugin-vue_export-helper.147b70e9.js";const k='{"title":"Lint","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD"},{"level":2,"title":"ESLint","slug":"eslint"},{"level":3,"title":"\u624B\u52A8\u6821\u9A8C\u4EE3\u7801","slug":"\u624B\u52A8\u6821\u9A8C\u4EE3\u7801"},{"level":3,"title":"\u914D\u7F6E\u9879","slug":"\u914D\u7F6E\u9879"},{"level":3,"title":"\u7F16\u8F91\u5668\u914D\u5408","slug":"\u7F16\u8F91\u5668\u914D\u5408"},{"level":2,"title":"CommitLint","slug":"commitlint"},{"level":3,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"},{"level":3,"title":"Git \u63D0\u4EA4\u89C4\u8303","slug":"git-\u63D0\u4EA4\u89C4\u8303"},{"level":3,"title":"\u5982\u4F55\u5173\u95ED","slug":"\u5982\u4F55\u5173\u95ED"},{"level":3,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"},{"level":2,"title":"Stylelint","slug":"stylelint"},{"level":3,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E-1"},{"level":3,"title":"\u7F16\u8F91\u5668\u914D\u5408","slug":"\u7F16\u8F91\u5668\u914D\u5408-1"},{"level":2,"title":"Prettier","slug":"prettier"},{"level":3,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E-2"},{"level":3,"title":"\u7F16\u8F91\u5668\u914D\u5408","slug":"\u7F16\u8F91\u5668\u914D\u5408-2"},{"level":2,"title":"Git Hook","slug":"git-hook"},{"level":3,"title":"husky","slug":"husky"},{"level":3,"title":"\u5982\u4F55\u5173\u95ED","slug":"\u5982\u4F55\u5173\u95ED-1"},{"level":3,"title":"\u5982\u4F55\u8DF3\u8FC7\u67D0\u4E00\u4E2A\u68C0\u67E5","slug":"\u5982\u4F55\u8DF3\u8FC7\u67D0\u4E00\u4E2A\u68C0\u67E5"},{"level":3,"title":"lint-staged","slug":"lint-staged"}],"relativePath":"dep/lint.md","lastUpdated":1650320168223}',n={},i=a(`<h1 id="lint"><a class="header-anchor" href="#lint" aria-hidden="true">#</a> Lint</h1><h2 id="\u4ECB\u7ECD"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><div class="tip custom-block"><p class="custom-block-title">\u4F7F\u7528 lint \u7684\u597D\u5904</p><p>\u5177\u5907\u57FA\u672C\u5DE5\u7A0B\u7D20\u517B\u7684\u540C\u5B66\u90FD\u4F1A\u6CE8\u91CD\u7F16\u7801\u89C4\u8303\uFF0C\u800C\u4EE3\u7801\u98CE\u683C\u68C0\u67E5\uFF08Code Linting\uFF0C\u7B80\u79F0 Lint\uFF09\u662F\u4FDD\u969C\u4EE3\u7801\u89C4\u8303\u4E00\u81F4\u6027\u7684\u91CD\u8981\u624B\u6BB5\u3002</p><p>\u9075\u5FAA\u76F8\u5E94\u7684\u4EE3\u7801\u89C4\u8303\u6709\u4EE5\u4E0B\u597D\u5904</p><ul><li>\u8F83\u5C11 bug \u9519\u8BEF\u7387</li><li>\u9AD8\u6548\u7684\u5F00\u53D1\u6548\u7387</li><li>\u66F4\u9AD8\u7684\u53EF\u8BFB\u6027</li></ul></div><p>\u9879\u76EE\u5185\u96C6\u6210\u4E86\u4EE5\u4E0B\u51E0\u79CD\u4EE3\u7801\u6821\u9A8C\u65B9\u5F0F</p><ol><li>eslint \u7528\u4E8E\u6821\u9A8C\u4EE3\u7801\u683C\u5F0F\u89C4\u8303</li><li>commitlint \u7528\u4E8E\u6821\u9A8C git \u63D0\u4EA4\u4FE1\u606F\u89C4\u8303</li><li>stylelint \u7528\u4E8E\u6821\u9A8C css/less \u89C4\u8303</li><li>prettier \u4EE3\u7801\u683C\u5F0F\u5316</li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>lint \u4E0D\u662F\u5FC5\u987B\u7684\uFF0C\u4F46\u662F\u5F88\u6709\u5FC5\u8981\uFF0C\u4E00\u4E2A\u9879\u76EE\u505A\u5927\u4E86\u4EE5\u540E\u6216\u8005\u53C2\u4E0E\u4EBA\u5458\u8FC7\u591A\u540E\uFF0C\u5C31\u4F1A\u51FA\u73B0\u5404\u79CD\u98CE\u683C\u8FE5\u5F02\u7684\u4EE3\u7801\uFF0C\u5BF9\u540E\u7EED\u7684\u7EF4\u62A4\u9020\u6210\u4E86\u4E00\u5B9A\u7684\u9EBB\u70E6</p></div><h2 id="eslint"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> ESLint</h2><p>ESLint \u662F\u4E00\u4E2A\u4EE3\u7801\u89C4\u8303\u548C\u9519\u8BEF\u68C0\u67E5\u5DE5\u5177\uFF0C\u6709\u4EE5\u4E0B\u51E0\u4E2A\u7279\u6027</p><ul><li>\u6240\u6709\u4E1C\u897F\u90FD\u662F\u53EF\u4EE5\u63D2\u62D4\u7684\u3002\u4F60\u53EF\u4EE5\u8C03\u7528\u4EFB\u610F\u7684 rule api \u6216\u8005 formatter api \u53BB\u6253\u5305\u6216\u8005\u5B9A\u4E49 rule or formatter\u3002</li><li>\u4EFB\u610F\u7684 rule \u90FD\u662F\u72EC\u7ACB\u7684</li><li>\u6CA1\u6709\u7279\u5B9A\u7684 coding style\uFF0C\u4F60\u53EF\u4EE5\u81EA\u5DF1\u914D\u7F6E</li></ul><h3 id="\u624B\u52A8\u6821\u9A8C\u4EE3\u7801"><a class="header-anchor" href="#\u624B\u52A8\u6821\u9A8C\u4EE3\u7801" aria-hidden="true">#</a> \u624B\u52A8\u6821\u9A8C\u4EE3\u7801</h3><div class="language-bash"><pre><code><span class="token comment"># \u6267\u884C\u4E0B\u9762\u4EE3\u7801.\u80FD\u4FEE\u590D\u7684\u4F1A\u81EA\u52A8\u4FEE\u590D\uFF0C\u4E0D\u80FD\u4FEE\u590D\u7684\u9700\u8981\u624B\u52A8\u4FEE\u6539</span>
<span class="token function">yarn</span> run lint:eslint
</code></pre></div><h3 id="\u914D\u7F6E\u9879"><a class="header-anchor" href="#\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u914D\u7F6E\u9879</h3><p>\u9879\u76EE\u7684 eslint \u914D\u7F6E\u4F4D\u4E8E\u6839\u76EE\u5F55\u4E0B <strong>.eslintrc.js</strong> \u5185\uFF0C\u53EF\u4EE5\u6839\u636E\u56E2\u961F\u81EA\u884C\u4FEE\u6539\u4EE3\u7801\u89C4\u8303</p><h3 id="\u7F16\u8F91\u5668\u914D\u5408"><a class="header-anchor" href="#\u7F16\u8F91\u5668\u914D\u5408" aria-hidden="true">#</a> \u7F16\u8F91\u5668\u914D\u5408</h3><p>\u63A8\u8350\u4F7F\u7528 vscode \u8FDB\u884C\u5F00\u53D1\uFF0Cvscode \u81EA\u5E26 eslint \u63D2\u4EF6\uFF0C\u53EF\u4EE5\u81EA\u52A8\u4FEE\u6539\u4E00\u4E9B\u9519\u8BEF\u3002</p><p>\u540C\u65F6\u9879\u76EE\u5185\u4E5F\u81EA\u5E26\u4E86 vscode eslint \u914D\u7F6E\uFF0C\u5177\u4F53\u5728 <code>.vscode/setting.json</code> \u6587\u4EF6\u5939\u5185\u90E8\u3002\u53EA\u8981\u4F7F\u7528 vscode \u5F00\u53D1\u4E0D\u7528\u4EFB\u4F55\u8BBE\u7F6E\u5373\u53EF\u4F7F\u7528</p><h2 id="commitlint"><a class="header-anchor" href="#commitlint" aria-hidden="true">#</a> CommitLint</h2><p>\u5728\u4E00\u4E2A\u56E2\u961F\u4E2D\uFF0C\u6BCF\u4E2A\u4EBA\u7684 git \u7684 commit \u4FE1\u606F\u90FD\u4E0D\u4E00\u6837\uFF0C\u4E94\u82B1\u516B\u95E8\uFF0C\u6CA1\u6709\u4E00\u4E2A\u673A\u5236\u5F88\u96BE\u4FDD\u8BC1\u89C4\u8303\u5316\uFF0C\u5982\u4F55\u624D\u80FD\u89C4\u8303\u5316\u5462\uFF1F\u53EF\u80FD\u4F60\u60F3\u5230\u7684\u662F git \u7684 hook \u673A\u5236\uFF0C\u53BB\u5199 shell \u811A\u672C\u53BB\u5B9E\u73B0\u3002\u8FD9\u5F53\u7136\u53EF\u4EE5\uFF0C\u5176\u5B9E JavaScript \u6709\u4E00\u4E2A\u5F88\u597D\u7684\u5DE5\u5177\u53EF\u4EE5\u5B9E\u73B0\u8FD9\u4E2A\u6A21\u677F\uFF0C\u5B83\u5C31\u662F commitlint\uFF08\u7528\u4E8E\u6821\u9A8C git \u63D0\u4EA4\u4FE1\u606F\u89C4\u8303\uFF09\u3002</p><h3 id="\u914D\u7F6E"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h3><p>commit-lint \u7684\u914D\u7F6E\u4F4D\u4E8E\u9879\u76EE\u6839\u76EE\u5F55\u4E0B <strong>commitlint.config.js</strong></p><h3 id="git-\u63D0\u4EA4\u89C4\u8303"><a class="header-anchor" href="#git-\u63D0\u4EA4\u89C4\u8303" aria-hidden="true">#</a> Git \u63D0\u4EA4\u89C4\u8303</h3><ul><li><p>\u53C2\u8003 <a href="https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md" target="_blank" rel="noopener noreferrer">vue</a> \u89C4\u8303 (<a href="https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular" target="_blank" rel="noopener noreferrer">Angular</a>)</p><ul><li><code>feat</code> \u589E\u52A0\u65B0\u529F\u80FD</li><li><code>fix</code> \u4FEE\u590D\u95EE\u9898/BUG</li><li><code>style</code> \u4EE3\u7801\u98CE\u683C\u76F8\u5173\u65E0\u5F71\u54CD\u8FD0\u884C\u7ED3\u679C\u7684</li><li><code>perf</code> \u4F18\u5316/\u6027\u80FD\u63D0\u5347</li><li><code>refactor</code> \u91CD\u6784</li><li><code>revert</code> \u64A4\u9500\u4FEE\u6539</li><li><code>test</code> \u6D4B\u8BD5\u76F8\u5173</li><li><code>docs</code> \u6587\u6863/\u6CE8\u91CA</li><li><code>chore</code> \u4F9D\u8D56\u66F4\u65B0/\u811A\u624B\u67B6\u914D\u7F6E\u4FEE\u6539\u7B49</li><li><code>workflow</code> \u5DE5\u4F5C\u6D41\u6539\u8FDB</li><li><code>ci</code> \u6301\u7EED\u96C6\u6210</li><li><code>mod</code> \u4E0D\u786E\u5B9A\u5206\u7C7B\u7684\u4FEE\u6539</li><li><code>wip</code> \u5F00\u53D1\u4E2D</li><li><code>types</code> \u7C7B\u578B\u4FEE\u6539</li></ul></li></ul><h3 id="\u5982\u4F55\u5173\u95ED"><a class="header-anchor" href="#\u5982\u4F55\u5173\u95ED" aria-hidden="true">#</a> \u5982\u4F55\u5173\u95ED</h3><p>\u5728 <code>.husky/commit-msg</code> \u5185\u6CE8\u91CA\u4EE5\u4E0B\u4EE3\u7801\u5373\u53EF</p><div class="language-bash"><pre><code><span class="token comment"># npx --no-install commitlint --edit &quot;$1&quot;</span>
</code></pre></div><h3 id="\u793A\u4F8B"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><div class="language-bash"><pre><code>
<span class="token function">git</span> commit -m <span class="token string">&#39;feat(home): add home page&#39;</span>

</code></pre></div><h2 id="stylelint"><a class="header-anchor" href="#stylelint" aria-hidden="true">#</a> Stylelint</h2><p>stylelint \u7528\u4E8E\u6821\u9A8C\u9879\u76EE\u5185\u90E8 css \u7684\u98CE\u683C,\u52A0\u4E0A\u7F16\u8F91\u5668\u7684\u81EA\u52A8\u4FEE\u590D\uFF0C\u53EF\u4EE5\u5F88\u597D\u7684\u7EDF\u4E00\u9879\u76EE\u5185\u90E8 css \u98CE\u683C</p><h3 id="\u914D\u7F6E-1"><a class="header-anchor" href="#\u914D\u7F6E-1" aria-hidden="true">#</a> \u914D\u7F6E</h3><p>stylelint \u914D\u7F6E\u4F4D\u4E8E\u6839\u76EE\u5F55\u4E0B <strong>stylelint.config.js</strong></p><h3 id="\u7F16\u8F91\u5668\u914D\u5408-1"><a class="header-anchor" href="#\u7F16\u8F91\u5668\u914D\u5408-1" aria-hidden="true">#</a> \u7F16\u8F91\u5668\u914D\u5408</h3><p>\u5982\u679C\u60A8\u4F7F\u7528\u7684\u662F vscode \u7F16\u8F91\u5668\u7684\u8BDD\uFF0C\u53EA\u9700\u8981\u5B89\u88C5\u4E0B\u9762\u63D2\u4EF6\uFF0C\u5373\u53EF\u5728\u4FDD\u5B58\u7684\u65F6\u5019\u81EA\u52A8\u683C\u5F0F\u5316\u6587\u4EF6\u5185\u90E8 css \u6837\u5F0F</p><p><strong>\u63D2\u4EF6</strong></p><p><a href="https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint" target="_blank" rel="noopener noreferrer">StyleLint</a></p><h2 id="prettier"><a class="header-anchor" href="#prettier" aria-hidden="true">#</a> Prettier</h2><p>prettier \u53EF\u4EE5\u7528\u4E8E\u7EDF\u4E00\u9879\u76EE\u4EE3\u7801\u98CE\u683C\uFF0C\u7EDF\u4E00\u7684\u7F29\u8FDB\uFF0C\u5355\u53CC\u5F15\u53F7\uFF0C\u5C3E\u9017\u53F7\u7B49\u7B49\u98CE\u683C</p><h3 id="\u914D\u7F6E-2"><a class="header-anchor" href="#\u914D\u7F6E-2" aria-hidden="true">#</a> \u914D\u7F6E</h3><p>prettier \u914D\u7F6E\u6587\u4EF6\u4F4D\u4E8E\u9879\u76EE\u6839\u76EE\u5F55\u4E0B <strong>prettier.config.js</strong></p><h3 id="\u7F16\u8F91\u5668\u914D\u5408-2"><a class="header-anchor" href="#\u7F16\u8F91\u5668\u914D\u5408-2" aria-hidden="true">#</a> \u7F16\u8F91\u5668\u914D\u5408</h3><p>\u5982\u679C\u60A8\u4F7F\u7528\u7684\u662F vscode \u7F16\u8F91\u5668\u7684\u8BDD\uFF0C\u53EA\u9700\u8981\u5B89\u88C5\u4E0B\u9762\u63D2\u4EF6\uFF0C\u5373\u53EF\u5728\u4FDD\u5B58\u7684\u65F6\u5019\u81EA\u52A8\u683C\u5F0F\u5316\u6587\u4EF6\u5185\u90E8 js \u683C\u5F0F</p><p><strong>\u63D2\u4EF6</strong></p><p><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noopener noreferrer">Prettier</a></p><h2 id="git-hook"><a class="header-anchor" href="#git-hook" aria-hidden="true">#</a> Git Hook</h2><p>git hook \u4E00\u822C\u7ED3\u5408\u5404\u79CD lint\uFF0C\u5728 git \u63D0\u4EA4\u4EE3\u7801\u7684\u65F6\u5019\u8FDB\u884C\u4EE3\u7801\u98CE\u683C\u6821\u9A8C\uFF0C\u5982\u679C\u6821\u9A8C\u6CA1\u901A\u8FC7\uFF0C\u5219\u4E0D\u4F1A\u8FDB\u884C\u63D0\u4EA4\u3002\u9700\u8981\u5F00\u53D1\u8005\u81EA\u884C\u4FEE\u6539\u540E\u518D\u6B21\u8FDB\u884C\u63D0\u4EA4</p><h3 id="husky"><a class="header-anchor" href="#husky" aria-hidden="true">#</a> husky</h3><p>\u6709\u4E00\u4E2A\u95EE\u9898\u5C31\u662F\u6821\u9A8C\u4F1A\u6821\u9A8C\u5168\u90E8\u4EE3\u7801\uFF0C\u4F46\u662F\u6211\u4EEC\u53EA\u60F3\u6821\u9A8C\u6211\u4EEC\u81EA\u5DF1\u63D0\u4EA4\u7684\u4EE3\u7801\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u53EF\u4EE5\u4F7F\u7528 husky\u3002</p><p>\u6700\u6709\u6548\u7684\u89E3\u51B3\u65B9\u6848\u5C31\u662F\u5C06 Lint \u6821\u9A8C\u653E\u5230\u672C\u5730\uFF0C\u5E38\u89C1\u505A\u6CD5\u662F\u4F7F\u7528 husky \u6216\u8005 pre-commit \u5728\u672C\u5730\u63D0\u4EA4\u4E4B\u524D\u5148\u505A\u4E00\u6B21 Lint \u6821\u9A8C\u3002</p><p>\u9879\u76EE\u5728 <code>.husky</code> \u5185\u90E8\u5B9A\u4E49\u4E86\u76F8\u5E94\u7684 hooks</p><h3 id="\u5982\u4F55\u5173\u95ED-1"><a class="header-anchor" href="#\u5982\u4F55\u5173\u95ED-1" aria-hidden="true">#</a> \u5982\u4F55\u5173\u95ED</h3><div class="language-bash"><pre><code><span class="token comment"># \u5220\u9664husky\u4F9D\u8D56\u5373\u53EF</span>
<span class="token function">yarn</span> remove huksy

</code></pre></div><h3 id="\u5982\u4F55\u8DF3\u8FC7\u67D0\u4E00\u4E2A\u68C0\u67E5"><a class="header-anchor" href="#\u5982\u4F55\u8DF3\u8FC7\u67D0\u4E00\u4E2A\u68C0\u67E5" aria-hidden="true">#</a> \u5982\u4F55\u8DF3\u8FC7\u67D0\u4E00\u4E2A\u68C0\u67E5</h3><div class="language-bash"><pre><code><span class="token comment"># \u52A0\u4E0A --no-verify\u5373\u53EF\u8DF3\u8FC7git hook\u6821\u9A8C\uFF08--no-verify \u7B80\u5199\u4E3A -n\uFF09</span>
<span class="token function">git</span> commit -m <span class="token string">&quot;xxx&quot;</span> --no-verify
</code></pre></div><h3 id="lint-staged"><a class="header-anchor" href="#lint-staged" aria-hidden="true">#</a> lint-staged</h3><p>\u7528\u4E8E\u81EA\u52A8\u4FEE\u590D\u63D0\u4EA4\u6587\u4EF6\u98CE\u683C\u95EE\u9898</p><p><strong>lint-staged</strong> \u914D\u7F6E\u4F4D\u4E8E\u9879\u76EE <code>.husky</code> \u76EE\u5F55\u4E0B <strong>lintstagedrc.js</strong></p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5BF9\u6307\u5B9A\u683C\u5F0F\u6587\u4EF6 \u5728\u63D0\u4EA4\u7684\u65F6\u5019\u6267\u884C\u76F8\u5E94\u7684\u4FEE\u590D\u547D\u4EE4</span>
  <span class="token string-property property">&#39;*.{js,jsx,ts,tsx}&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;eslint --fix&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;prettier --write&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;{!(package)*.json,*.code-snippets,.!(browserslist)*rc}&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;prettier --write--parser json&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;package.json&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;prettier --write&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;*.vue&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;eslint --fix&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;stylelint --fix&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;prettier --write&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;git add .&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;*.{scss,less,styl,css,html}&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;stylelint --fix&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;prettier --write&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;git add .&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;*.md&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;prettier --write&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,57),l=[i];function o(r,p,c,d,h,u){return t(),s("div",null,l)}var m=e(n,[["render",o]]);export{k as __pageData,m as default};
