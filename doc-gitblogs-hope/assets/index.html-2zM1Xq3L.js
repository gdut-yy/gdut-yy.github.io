import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as c,c as i,b as n,d as e,e as a,a as r}from"./app-8t5Tw8wD.js";const u={},d=n("h1",{id:"boyer-moore-投票算法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#boyer-moore-投票算法","aria-hidden":"true"},"#"),e(" Boyer-Moore 投票算法")],-1),k=n("thead",null,[n("tr",null,[n("th",null,"题目"),n("th",null,"难度"),n("th")])],-1),m={href:"https://leetcode.cn/problems/majority-element/",target:"_blank",rel:"noopener noreferrer"},v=n("td",null,null,-1),b={href:"https://leetcode.cn/problems/online-majority-element-in-subarray/",target:"_blank",rel:"noopener noreferrer"},h=n("td",null,"TODO",-1),_=r(`<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p><strong>思路</strong></p><p>如果我们把众数记为 +1，把其他数记为 −1，将它们全部加起来，显然和大于 0，从结果本身我们可以看出众数比其他数多。</p><p><strong>算法</strong></p><p>Boyer-Moore 算法的本质和方法四中的分治十分类似。我们首先给出 Boyer-Moore 算法的详细步骤：</p><ul><li>我们维护一个候选众数 candidate 和它出现的次数 count。初始时 candidate 可以为任意值，count 为 0；</li><li>我们遍历数组 nums 中的所有元素，对于每个元素 x，在判断 x 之前，如果 count 的值为 0，我们先将 x 的值赋予 candidate，随后我们判断 x： <ul><li>如果 x 与 candidate 相等，那么计数器 count 的值增加 1；</li><li>如果 x 与 candidate 不等，那么计数器 count 的值减少 1。</li></ul></li><li>在遍历完成后，candidate 即为整个数组的众数。</li></ul><h3 id="_169-多数元素" tabindex="-1"><a class="header-anchor" href="#_169-多数元素" aria-hidden="true">#</a> 169. 多数元素</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution169</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">majorityElement</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> candidate <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> num <span class="token operator">:</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                candidate <span class="token operator">=</span> num<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            count <span class="token operator">+=</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> candidate<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> candidate<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（全文完）</p>`,9);function y(f,x){const t=s("ExternalLinkIcon"),o=s("Easy"),l=s("Hard");return c(),i("div",null,[d,n("table",null,[k,n("tbody",null,[n("tr",null,[n("td",null,[n("a",m,[e("169. 多数元素"),a(t)])]),n("td",null,[a(o)]),v]),n("tr",null,[n("td",null,[n("a",b,[e("1157. 子数组中占绝大多数的元素"),a(t)])]),n("td",null,[a(l)]),h])])]),_])}const j=p(u,[["render",y],["__file","index.html.vue"]]);export{j as default};