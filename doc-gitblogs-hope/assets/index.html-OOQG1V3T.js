import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as l,c as u,b as n,d as a,e as s,a as i}from"./app-8t5Tw8wD.js";const k={},r=n("h1",{id:"bfs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#bfs","aria-hidden":"true"},"#"),a(" BFS")],-1),d={href:"https://oi-wiki.org/graph/bfs/",target:"_blank",rel:"noopener noreferrer"},m=n("thead",null,[n("tr",null,[n("th",null,"题目"),n("th",null,"难度"),n("th")])],-1),v={href:"https://leetcode.cn/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/",target:"_blank",rel:"noopener noreferrer"},b=n("td",null,"0-1 BFS",-1),w={href:"https://leetcode.cn/problems/minimum-obstacle-removal-to-reach-corner/",target:"_blank",rel:"noopener noreferrer"},y=n("td",null,"0-1 BFS",-1),h={href:"https://leetcode.cn/problems/6UEx57/",target:"_blank",rel:"noopener noreferrer"},f=n("td",null,"0-1 BFS",-1),_=i(`<h2 id="_0-1-bfs" tabindex="-1"><a class="header-anchor" href="#_0-1-bfs" aria-hidden="true">#</a> 0-1 BFS</h2><p>双端队列 BFS 又称 0-1 BFS。</p><h3 id="_1368-使网格图至少有一条有效路径的最小代价" tabindex="-1"><a class="header-anchor" href="#_1368-使网格图至少有一条有效路径的最小代价" aria-hidden="true">#</a> 1368. 使网格图至少有一条有效路径的最小代价</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayDeque</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Deque</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution1368</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1 右 2 左 3 下 4 上</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token constant">DIRECTIONS</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 0-1 BFS</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">minCost</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> grid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> <span class="token class-name">M</span> <span class="token operator">=</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span> <span class="token class-name">N</span> <span class="token operator">=</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

        <span class="token class-name">Deque</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> deque <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayDeque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dist <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token class-name">M</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token class-name">N</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ints <span class="token operator">:</span> dist<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>ints<span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        deque<span class="token punctuation">.</span><span class="token function">addFirst</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dist<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>deque<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> size <span class="token operator">=</span> deque<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cur <span class="token operator">=</span> deque<span class="token punctuation">.</span><span class="token function">removeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> curDist <span class="token operator">=</span> dist<span class="token punctuation">[</span>cur<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">[</span>cur<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token class-name">M</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token class-name">N</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> curDist<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token comment">// 1 右 2 左 3 下 4 上</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> idx <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> idx <span class="token operator">&lt;=</span> <span class="token number">4</span><span class="token punctuation">;</span> idx<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">int</span> nextM <span class="token operator">=</span> cur<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token constant">DIRECTIONS</span><span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                    <span class="token keyword">int</span> nextN <span class="token operator">=</span> cur<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token constant">DIRECTIONS</span><span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

                    <span class="token keyword">if</span> <span class="token punctuation">(</span>nextM <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nextM <span class="token operator">&lt;</span> <span class="token class-name">M</span> <span class="token operator">&amp;&amp;</span> nextN <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nextN <span class="token operator">&lt;</span> <span class="token class-name">N</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token comment">// 步长 0-1</span>
                        <span class="token keyword">int</span> step <span class="token operator">=</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>cur<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">[</span>cur<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">==</span> idx<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>

                        <span class="token keyword">if</span> <span class="token punctuation">(</span>curDist <span class="token operator">+</span> step <span class="token operator">&lt;</span> dist<span class="token punctuation">[</span>nextM<span class="token punctuation">]</span><span class="token punctuation">[</span>nextN<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            dist<span class="token punctuation">[</span>nextM<span class="token punctuation">]</span><span class="token punctuation">[</span>nextN<span class="token punctuation">]</span> <span class="token operator">=</span> curDist <span class="token operator">+</span> step<span class="token punctuation">;</span>
                            <span class="token keyword">if</span> <span class="token punctuation">(</span>step <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                deque<span class="token punctuation">.</span><span class="token function">addFirst</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>nextM<span class="token punctuation">,</span> nextN<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                                deque<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>nextM<span class="token punctuation">,</span> nextN<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2290-到达角落需要移除障碍物的最小数目" tabindex="-1"><a class="header-anchor" href="#_2290-到达角落需要移除障碍物的最小数目" aria-hidden="true">#</a> 2290. 到达角落需要移除障碍物的最小数目</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayDeque</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Deque</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution2290</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token constant">DIRECTIONS</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 0-1 BFS</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">minimumObstacles</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> grid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> <span class="token class-name">M</span> <span class="token operator">=</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span> <span class="token class-name">N</span> <span class="token operator">=</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

        <span class="token class-name">Deque</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> deque <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayDeque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dist <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token class-name">M</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token class-name">N</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ints <span class="token operator">:</span> dist<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>ints<span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        deque<span class="token punctuation">.</span><span class="token function">addFirst</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dist<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>deque<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> size <span class="token operator">=</span> deque<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cur <span class="token operator">=</span> deque<span class="token punctuation">.</span><span class="token function">removeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> curDist <span class="token operator">=</span> dist<span class="token punctuation">[</span>cur<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">[</span>cur<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token class-name">M</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token class-name">N</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> curDist<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dir <span class="token operator">:</span> <span class="token constant">DIRECTIONS</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">int</span> nextM <span class="token operator">=</span> cur<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> dir<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                    <span class="token keyword">int</span> nextN <span class="token operator">=</span> cur<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> dir<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

                    <span class="token keyword">if</span> <span class="token punctuation">(</span>nextM <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nextM <span class="token operator">&lt;</span> <span class="token class-name">M</span> <span class="token operator">&amp;&amp;</span> nextN <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nextN <span class="token operator">&lt;</span> <span class="token class-name">N</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token comment">// 步长 0-1</span>
                        <span class="token keyword">int</span> step <span class="token operator">=</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>nextM<span class="token punctuation">]</span><span class="token punctuation">[</span>nextN<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>

                        <span class="token keyword">if</span> <span class="token punctuation">(</span>curDist <span class="token operator">+</span> step <span class="token operator">&lt;</span> dist<span class="token punctuation">[</span>nextM<span class="token punctuation">]</span><span class="token punctuation">[</span>nextN<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            dist<span class="token punctuation">[</span>nextM<span class="token punctuation">]</span><span class="token punctuation">[</span>nextN<span class="token punctuation">]</span> <span class="token operator">=</span> curDist <span class="token operator">+</span> step<span class="token punctuation">;</span>
                            <span class="token keyword">if</span> <span class="token punctuation">(</span>step <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                deque<span class="token punctuation">.</span><span class="token function">addFirst</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>nextM<span class="token punctuation">,</span> nextN<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                                deque<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>nextM<span class="token punctuation">,</span> nextN<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,7),x={href:"https://codeforces.com/blog/entry/22276",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,"（全文完）",-1);function N(M,q){const p=t("ExternalLinkIcon"),o=t("Hard"),e=t("Medium");return l(),u("div",null,[r,n("ul",null,[n("li",null,[a("OI Wiki: "),n("a",d,[a("https://oi-wiki.org/graph/bfs/"),s(p)])])]),n("table",null,[m,n("tbody",null,[n("tr",null,[n("td",null,[n("a",v,[a("1368. 使网格图至少有一条有效路径的最小代价"),s(p)])]),n("td",null,[s(o)]),b]),n("tr",null,[n("td",null,[n("a",w,[a("2290. 到达角落需要移除障碍物的最小数目"),s(p)])]),n("td",null,[s(o)]),y]),n("tr",null,[n("td",null,[n("a",h,[a("LCP 56. 信物传送"),s(p)])]),n("td",null,[s(e)]),f])])]),_,n("ul",null,[n("li",null,[n("a",x,[a("0-1 BFS [Tutorial]"),s(p)])])]),g])}const F=c(k,[["render",N],["__file","index.html.vue"]]);export{F as default};