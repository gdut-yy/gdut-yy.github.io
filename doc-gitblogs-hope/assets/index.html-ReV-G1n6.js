import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as c,c as l,b as n,d as s,e as a,a as u}from"./app-8t5Tw8wD.js";const i={},k=n("h1",{id:"费用流",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#费用流","aria-hidden":"true"},"#"),s(" 费用流")],-1),r={href:"https://oi-wiki.org/graph/flow/min-cost/",target:"_blank",rel:"noopener noreferrer"},d=n("thead",null,[n("tr",null,[n("th",null,"题目"),n("th",null,"难度"),n("th")])],-1),m={href:"https://leetcode.cn/problems/maximum-compatibility-score-sum/",target:"_blank",rel:"noopener noreferrer"},v=n("td",null,null,-1),b=u(`<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>给定一个网络 <code>G = (V, E)</code>，每条边 <code>(x, y)</code> 除了有容量限制 <code>c(x, y)</code>，还有一个给定的“单位费用” <code>w(x, y)</code>。当边 <code>(x, y)</code> 的流量为 <code>f(x, y)</code> 时，就要花费 <code>f(x, y) * w(x, y)</code>。该网络中总花费最小的最大流被称为“最小费用最大流”，总花费最大的最大流被称为“最大费用最大流”，二者合称为“费用流”模型。注意，费用流的前提是最大流，然后才考虑费用的最值。</p><p>类似于“二分图最大匹配”与最大流关系，“二分图带权最大匹配”可直接用最大费用最大流求解，每条边的权值就是它的单位费用。</p><p>《算法竞赛进阶指南》</p><h3 id="_1947-最大兼容性评分和" tabindex="-1"><a class="header-anchor" href="#_1947-最大兼容性评分和" aria-hidden="true">#</a> 1947. 最大兼容性评分和</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">maxCompatibilitySum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> students<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> mentors<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// m 名学生和 m 名导师，n 个问题</span>
        <span class="token keyword">int</span> m <span class="token operator">=</span> students<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> students<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

        <span class="token comment">// score[i][j] 表示第 i 个学生与第 j 个老师的 兼容性评分</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> score <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>students<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">==</span> mentors<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        score<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// [1,m] [m+1, 2m] 2m+1 2m+2</span>
        <span class="token class-name">S</span> <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token class-name">T</span> <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> m <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
        tot <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">S</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">add</span><span class="token punctuation">(</span>i <span class="token operator">+</span> m<span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> m<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">+</span> m<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> score<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token function">spfa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> <span class="token class-name">N</span> <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token class-name">M</span> <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token class-name">M</span><span class="token punctuation">]</span><span class="token punctuation">,</span> he <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token class-name">N</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ne <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token class-name">M</span><span class="token punctuation">]</span><span class="token punctuation">,</span> pre <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token class-name">N</span><span class="token punctuation">]</span><span class="token punctuation">,</span> vis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token class-name">N</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ed <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">long</span><span class="token punctuation">[</span><span class="token class-name">M</span><span class="token punctuation">]</span><span class="token punctuation">,</span> cost <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">long</span><span class="token punctuation">[</span><span class="token class-name">M</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">long</span><span class="token punctuation">[</span><span class="token class-name">N</span><span class="token punctuation">]</span><span class="token punctuation">,</span> incf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">long</span><span class="token punctuation">[</span><span class="token class-name">N</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> tot<span class="token punctuation">,</span> <span class="token class-name">S</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> <span class="token constant">INF</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span> <span class="token number">1e18</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> maxflow<span class="token punctuation">,</span> ans<span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">,</span> <span class="token keyword">long</span> z<span class="token punctuation">,</span> <span class="token keyword">int</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 正向边，初始容量 z，单位费用 c</span>
        ver<span class="token punctuation">[</span><span class="token operator">++</span>tot<span class="token punctuation">]</span> <span class="token operator">=</span> y<span class="token punctuation">;</span>
        ed<span class="token punctuation">[</span>tot<span class="token punctuation">]</span> <span class="token operator">=</span> z<span class="token punctuation">;</span>
        cost<span class="token punctuation">[</span>tot<span class="token punctuation">]</span> <span class="token operator">=</span> c<span class="token punctuation">;</span>
        ne<span class="token punctuation">[</span>tot<span class="token punctuation">]</span> <span class="token operator">=</span> he<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>
        he<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> tot<span class="token punctuation">;</span>
        <span class="token comment">// 反向边，初始容量 0，单位费用 -c，与正向边 成对存储</span>
        ver<span class="token punctuation">[</span><span class="token operator">++</span>tot<span class="token punctuation">]</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>
        ed<span class="token punctuation">[</span>tot<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        cost<span class="token punctuation">[</span>tot<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span>c<span class="token punctuation">;</span>
        ne<span class="token punctuation">[</span>tot<span class="token punctuation">]</span> <span class="token operator">=</span> he<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">;</span>
        he<span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> tot<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">boolean</span> <span class="token function">spfa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> q <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayDeque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>dis<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token constant">INF</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        q<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">S</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dis<span class="token punctuation">[</span><span class="token class-name">S</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        vis<span class="token punctuation">[</span><span class="token class-name">S</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// SPFA 求最长路</span>
        incf<span class="token punctuation">[</span><span class="token class-name">S</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">INF</span><span class="token punctuation">;</span> <span class="token comment">// 增广路上各边的最小剩余容量</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>q<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> x <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            vis<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> he<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span> i <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">=</span> ne<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> y <span class="token operator">=</span> ver<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>ed<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">// 剩余容量为 0，不在残量网络中，不遍历</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>dis<span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">&lt;</span> dis<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">+</span> cost<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    dis<span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> dis<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">+</span> cost<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                    incf<span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>incf<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">,</span> ed<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    pre<span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span> <span class="token comment">// 记录前驱，便于找到最长路的实际方案</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>vis<span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        vis<span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                        q<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> dis<span class="token punctuation">[</span><span class="token class-name">T</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token constant">INF</span><span class="token punctuation">;</span> <span class="token comment">// 汇点不可达，已求出最大流</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token class-name">T</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">!=</span> <span class="token class-name">S</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> i <span class="token operator">=</span> pre<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>
            ed<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-=</span> incf<span class="token punctuation">[</span><span class="token class-name">T</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            ed<span class="token punctuation">[</span>i <span class="token operator">^</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+=</span> incf<span class="token punctuation">[</span><span class="token class-name">T</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 利用 成对存储 的 xor 1 技巧</span>
            x <span class="token operator">=</span> ver<span class="token punctuation">[</span>i <span class="token operator">^</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        maxflow <span class="token operator">+=</span> incf<span class="token punctuation">[</span><span class="token class-name">T</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        ans <span class="token operator">+=</span> dis<span class="token punctuation">[</span><span class="token class-name">T</span><span class="token punctuation">]</span> <span class="token operator">*</span> incf<span class="token punctuation">[</span><span class="token class-name">T</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（全文完）</p>`,7);function y(w,f){const p=t("ExternalLinkIcon"),o=t("Hard");return c(),l("div",null,[k,n("ul",null,[n("li",null,[s("OI Wiki: "),n("a",r,[s("https://oi-wiki.org/graph/flow/min-cost/"),a(p)])])]),n("table",null,[d,n("tbody",null,[n("tr",null,[n("td",null,[n("a",m,[s("1947. 最大兼容性评分和"),a(p)])]),n("td",null,[a(o)]),v])])]),b])}const _=e(i,[["render",y],["__file","index.html.vue"]]);export{_ as default};