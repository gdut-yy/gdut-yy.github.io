import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as p}from"./app-8t5Tw8wD.js";const t="/doc-gitblogs-hope/assets/ranking-nvoM_sQa.png",o="/doc-gitblogs-hope/assets/lc100162-b2wgZqaD.png",e="/doc-gitblogs-hope/assets/lc100165-ETWfOr-s.png",c="/doc-gitblogs-hope/assets/lc100160-_e9hj3np.png",l="/doc-gitblogs-hope/assets/lc100207-9xMsCXSO.png",i={},u=p('<h1 id="力扣第-380-场周赛" tabindex="-1"><a class="header-anchor" href="#力扣第-380-场周赛" aria-hidden="true">#</a> 力扣第 380 场周赛</h1><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>比赛时间 2024-01-14。本场周赛国服共 255 人 AK。</p><h2 id="t1-最大频率元素计数-3-分" tabindex="-1"><a class="header-anchor" href="#t1-最大频率元素计数-3-分" aria-hidden="true">#</a> T1. 最大频率元素计数（3 分）</h2><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h3><p>模拟。</p><p>时间复杂度：<code>O(n)</code>。</p><h3 id="参考代码" tabindex="-1"><a class="header-anchor" href="#参考代码" aria-hidden="true">#</a> 参考代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">maxFrequencyElements</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cnt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">105</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> v <span class="token operator">:</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cnt<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>cnt<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">orElseThrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> v <span class="token operator">:</span> cnt<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>v <span class="token operator">==</span> max<span class="token punctuation">)</span> c<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> c <span class="token operator">*</span> max<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="t2-找出数组中的美丽下标-i-4-分" tabindex="-1"><a class="header-anchor" href="#t2-找出数组中的美丽下标-i-4-分" aria-hidden="true">#</a> T2. 找出数组中的美丽下标 I（4 分）</h2><figure><img src="`+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="解题思路-1" tabindex="-1"><a class="header-anchor" href="#解题思路-1" aria-hidden="true">#</a> 解题思路</h3><p>见 T4。</p><h3 id="参考代码-1" tabindex="-1"><a class="header-anchor" href="#参考代码-1" aria-hidden="true">#</a> 参考代码</h3><p>略。</p><h2 id="t3-价值和小于等于-k-的最大数字-5-分" tabindex="-1"><a class="header-anchor" href="#t3-价值和小于等于-k-的最大数字-5-分" aria-hidden="true">#</a> T3. 价值和小于等于 K 的最大数字（5 分）</h2><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="解题思路-2" tabindex="-1"><a class="header-anchor" href="#解题思路-2" aria-hidden="true">#</a> 解题思路</h3><p>二分 + 数位 DP。注意一般数位 DP 的 <code>i</code> 是左到右，本题的 <code>i</code> 是低位到高位，需要转换成 <code>n-i</code>。</p><p>时间复杂度：<code>O((x + logk)^3)</code>。</p><h3 id="参考代码-2" tabindex="-1"><a class="header-anchor" href="#参考代码-2" aria-hidden="true">#</a> 参考代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> x<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">findMaximumNumber</span><span class="token punctuation">(</span><span class="token keyword">long</span> k<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>

        <span class="token keyword">long</span> left <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">long</span> right <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span> <span class="token number">1e16</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">long</span> mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token comment">// 边界二分 F, F,..., F, [T, T,..., T]</span>
            <span class="token comment">// ----------------------^</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">count</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span> <span class="token operator">&gt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                right <span class="token operator">=</span> mid<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> left <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> s<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dp<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">long</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">long</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        s <span class="token operator">=</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token function">toBinaryString</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">long</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">long</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> sum<span class="token punctuation">,</span> <span class="token keyword">boolean</span> isLimit<span class="token punctuation">,</span> <span class="token keyword">boolean</span> isNum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> isNum <span class="token operator">?</span> sum <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 记忆化搜索</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isLimit <span class="token operator">&amp;&amp;</span> isNum <span class="token operator">&amp;&amp;</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>sum<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>sum<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">long</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isNum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 可以跳过当前数位</span>
            res <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> sum<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> up <span class="token operator">=</span> isLimit <span class="token operator">?</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token char">&#39;0&#39;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> d <span class="token operator">=</span> isNum <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span> d <span class="token operator">&lt;=</span> up<span class="token punctuation">;</span> d<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> is1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">-</span> i<span class="token punctuation">)</span> <span class="token operator">%</span> x <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> d <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
            res <span class="token operator">+=</span> <span class="token function">f</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> sum <span class="token operator">+</span> is1<span class="token punctuation">,</span> isLimit <span class="token operator">&amp;&amp;</span> d <span class="token operator">==</span> up<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isLimit <span class="token operator">&amp;&amp;</span> isNum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>sum<span class="token punctuation">]</span> <span class="token operator">=</span> res<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="t4-找出数组中的美丽下标-ii-6-分" tabindex="-1"><a class="header-anchor" href="#t4-找出数组中的美丽下标-ii-6-分" aria-hidden="true">#</a> T4. 找出数组中的美丽下标 II（6 分）</h2><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="解题思路-3" tabindex="-1"><a class="header-anchor" href="#解题思路-3" aria-hidden="true">#</a> 解题思路</h3><p>KMP + 二分。KMP 预处理出子串所有出现位置，再二分判定每个起点是否符合要求。</p><p>时间复杂度：<code>O(nlogn)</code>。</p><h3 id="参考代码-3" tabindex="-1"><a class="header-anchor" href="#参考代码-3" aria-hidden="true">#</a> 参考代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">beautifulIndices</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token class-name">String</span> a<span class="token punctuation">,</span> <span class="token class-name">String</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> txt <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> patA <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> patB <span class="token operator">=</span> b<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> idsA <span class="token operator">=</span> <span class="token function">getStartIds</span><span class="token punctuation">(</span>txt<span class="token punctuation">,</span> patA<span class="token punctuation">,</span> <span class="token function">prefix_function</span><span class="token punctuation">(</span>patA<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> idsB <span class="token operator">=</span> <span class="token function">getStartIds</span><span class="token punctuation">(</span>txt<span class="token punctuation">,</span> patB<span class="token punctuation">,</span> <span class="token function">prefix_function</span><span class="token punctuation">(</span>patB<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> ans <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span> i <span class="token operator">:</span> idsA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> l <span class="token operator">=</span> i <span class="token operator">-</span> k<span class="token punctuation">,</span> r <span class="token operator">=</span> i <span class="token operator">+</span> k<span class="token punctuation">;</span>

            <span class="token keyword">int</span> j0 <span class="token operator">=</span> <span class="token function">lowerBound</span><span class="token punctuation">(</span>idsB<span class="token punctuation">,</span> l<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> j1 <span class="token operator">=</span> <span class="token function">lowerBound</span><span class="token punctuation">(</span>idsB<span class="token punctuation">,</span> r <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>j0 <span class="token operator">&lt;</span> j1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ans<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">lowerBound</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> r <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> m <span class="token operator">=</span> l <span class="token operator">+</span> <span class="token punctuation">(</span>r <span class="token operator">-</span> l<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> key<span class="token punctuation">)</span> r <span class="token operator">=</span> m<span class="token punctuation">;</span>
            <span class="token keyword">else</span> l <span class="token operator">=</span> m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> l<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">getStartIds</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> txt<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> pat<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> pi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> txt<span class="token punctuation">.</span>length<span class="token punctuation">,</span> m <span class="token operator">=</span> pat<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> txt<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> pat<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> j <span class="token operator">=</span> pi<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>txt<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> pat<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> j<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i <span class="token operator">-</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                j <span class="token operator">=</span> pi<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">prefix_function</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> pi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> j <span class="token operator">=</span> pi<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> j <span class="token operator">=</span> pi<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> j<span class="token operator">++</span><span class="token punctuation">;</span>
            pi<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> j<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> pi<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（全文完）</p>`,31),k=[u];function r(d,v){return s(),a("div",null,k)}const y=n(i,[["render",r],["__file","index.html.vue"]]);export{y as default};