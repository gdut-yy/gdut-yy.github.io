import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as l}from"./app-D75trwlE.js";const e={};function p(d,s){return l(),a("div",null,s[0]||(s[0]=[i(`<h1 id="无向带权树带权中位节点查询" tabindex="-1"><a class="header-anchor" href="#无向带权树带权中位节点查询"><span>无向带权树带权中位节点查询</span></a></h1><ul><li>会话记录：<a href="https://chat.deepseek.com/a/chat/s/0b27cfd3-b199-4abd-9b2c-2424b486bacc" target="_blank" rel="noopener noreferrer">https://chat.deepseek.com/a/chat/s/0b27cfd3-b199-4abd-9b2c-2424b486bacc</a></li><li>无修改 AC。</li></ul><h2 id="user" tabindex="-1"><a class="header-anchor" href="#user"><span>USER</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>给你一个整数 n，以及一棵 无向带权 树，根节点为节点 0，树中共有 n 个节点，编号从 0 到 n - 1。该树由一个长度为 n - 1 的二维数组 edges 表示，其中 edges[i] = [ui, vi, wi] 表示存在一条从节点 ui 到 vi 的边，权重为 wi。</span></span>
<span class="line"><span>带权中位节点 定义为从 ui 到 vi 路径上的 第一个 节点 x，使得从 ui 到 x 的边权之和 大于等于 该路径总权值和的一半。</span></span>
<span class="line"><span>给你一个二维整数数组 queries。对于每个 queries[j] = [uj, vj]，求出从 uj 到 vj 路径上的带权中位节点。</span></span>
<span class="line"><span>返回一个数组 ans，其中 ans[j] 表示查询 queries[j] 的带权中位节点编号。</span></span>
<span class="line"><span>示例 1：</span></span>
<span class="line"><span>输入： n = 2, edges = [[0,1,7]], queries = [[1,0],[0,1]]</span></span>
<span class="line"><span>输出： [0,1]</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>查询	路径	边权	总路径权值和	一半	解释	答案</span></span>
<span class="line"><span>[1, 0]	1 → 0	[7]	7	3.5	从 1 → 0 的权重和为 7 &gt;= 3.5，中位节点是 0。	0</span></span>
<span class="line"><span>[0, 1]	0 → 1	[7]	7	3.5	从 0 → 1 的权重和为 7 &gt;= 3.5，中位节点是 1。	1</span></span>
<span class="line"><span>示例 2：</span></span>
<span class="line"><span>输入： n = 3, edges = [[0,1,2],[2,0,4]], queries = [[0,1],[2,0],[1,2]]</span></span>
<span class="line"><span>输出： [1,0,2]</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>查询	路径	边权	总路径权值和	一半	解释	答案</span></span>
<span class="line"><span>[0, 1]	0 → 1	[2]	2	1	从 0 → 1 的权值和为 2 &gt;= 1，中位节点是 1。	1</span></span>
<span class="line"><span>[2, 0]	2 → 0	[4]	4	2	从 2 → 0 的权值和为 4 &gt;= 2，中位节点是 0。	0</span></span>
<span class="line"><span>[1, 2]	1 → 0 → 2	[2, 4]	6	3	从 1 → 0 = 2 &lt; 3，</span></span>
<span class="line"><span>从 1 → 2 = 6 &gt;= 3，中位节点是 2。	2</span></span>
<span class="line"><span>示例 3：</span></span>
<span class="line"><span>输入： n = 5, edges = [[0,1,2],[0,2,5],[1,3,1],[2,4,3]], queries = [[3,4],[1,2]]</span></span>
<span class="line"><span>输出： [2,2]</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>查询	路径	边权	总路径权值和	一半	解释	答案</span></span>
<span class="line"><span>[3, 4]	3 → 1 → 0 → 2 → 4	[1, 2, 5, 3]	11	5.5	从 3 → 1 = 1 &lt; 5.5，</span></span>
<span class="line"><span>从 3 → 0 = 3 &lt; 5.5，</span></span>
<span class="line"><span>从 3 → 2 = 8 &gt;= 5.5，中位节点是 2。	2</span></span>
<span class="line"><span>[1, 2]	1 → 0 → 2	[2, 5]	7	3.5	从 1 → 0 = 2 &lt; 3.5，</span></span>
<span class="line"><span>从 1 → 2 = 7 &gt;= 3.5，中位节点是 2。	2</span></span>
<span class="line"><span>提示:</span></span>
<span class="line"><span>2 &lt;= n &lt;= 10^5</span></span>
<span class="line"><span>edges.length == n - 1</span></span>
<span class="line"><span>edges[i] == [ui, vi, wi]</span></span>
<span class="line"><span>0 &lt;= ui, vi &lt; n</span></span>
<span class="line"><span>1 &lt;= wi &lt;= 10^9</span></span>
<span class="line"><span>1 &lt;= queries.length &lt;= 10^5</span></span>
<span class="line"><span>queries[j] == [uj, vj]</span></span>
<span class="line"><span>0 &lt;= uj, vj &lt; n</span></span>
<span class="line"><span>输入保证 edges 表示一棵合法的树。</span></span>
<span class="line"><span>\`\`java</span></span>
<span class="line"><span>class Solution {</span></span>
<span class="line"><span>    public int[] findMedian(int n, int[][] edges, int[][] queries) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="assistant" tabindex="-1"><a class="header-anchor" href="#assistant"><span>ASSISTANT</span></a></h2><details class="hint-container details"><summary>已深度思考(用时 803 秒)</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&quot; 题目要求：对于每个查询 [uj, vj]，找到从 uj 到 vj 路径上的带权中位节点。带权中位节点定义为：在路径上第一个节点 x，使得从 uj 到 x 的边权之和大于等于路径总权值和的一半。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：路径是从 uj 到 vj 的，但是注意示例中路径的方向会影响结果。例如，示例 1 中[1,0]的路径是 1→0，中位节点是 0；而[0,1]的路径是 0→1，中位节点是 1。因此，路径是有方向的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，观察示例 2：查询[1,2]的路径是 1→0→2，边权为[2,4]（从 1 到 0 是 2，0 到 2 是 4），总权值和为 6，一半是 3。从 1 开始，1→0 的权值和为 2（小于 3），然后 1→0→2 的权值和为 6（&gt;=3），所以第一个满足的节点是 2（节点 2）。因此，路径的方向是从起点到终点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，如果我们考虑路径的双向性，实际上树是无向的，但路径的起点和终点是给定的。所以我们需要按照从起点到终点的顺序遍历路径。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由于 n 和 queries 的长度都达到 10^5，所以我们需要高效的算法。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>思路：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.  预处理：构建树（邻接表），同时记录每个节点的父节点和深度（用于 LCA）。</span></span>
<span class="line"><span>2.  需要快速计算任意两点之间路径的总权值和，以及路径上的节点序列（或者至少需要快速找到中位节点）。</span></span>
<span class="line"><span>3.  但是，如果直接存储路径，空间和时间都不允许（因为路径长度可能很长，而查询次数多）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另一种思路：</span></span>
<span class="line"><span>带权中位节点实际上就是路径上累积权重第一次达到或超过总权重一半的节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是注意：路径上的节点包括起点和终点，而边权是连接两个节点的。例如，路径 u-&gt;a-&gt;b-&gt;v，那么边权有三段：u-&gt;a, a-&gt;b, b-&gt;v。节点 u 到节点 a 的累积权重就是 u-&gt;a 的边权，节点 u 到节点 b 的累积权重是 u-&gt;a+a-&gt;b，以此类推。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>问题：中位节点可能是路径上的任意节点，包括起点、中间节点和终点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>步骤：</span></span>
<span class="line"><span>对于每个查询，我们需要：</span></span>
<span class="line"><span>a. 计算路径总权值和（记为 total）。</span></span>
<span class="line"><span>b. 从起点 uj 开始，沿着路径向 vj 方向走，累加权值，直到累积值&gt;=total/2，那么当前节点就是中位节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，如果直接模拟走路径，最坏情况下路径长度是 O(n)，而查询次数是 O(10^5)，总复杂度 O(n\\*q)会达到 10^10，显然不可行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们需要优化。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>优化思路：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.  首先，我们可以通过 LCA（最近公共祖先）来分解路径：uj 到 vj 的路径 = uj-&gt;lca + lca-&gt;vj（不包括 lca 两次，但注意方向）。</span></span>
<span class="line"><span>2.  总权值和可以通过预处理每个节点到根节点的距离（dist）来计算：dist[uj] + dist[vj] - 2 _ dist[lca]。但是注意：这里的距离是到根节点的距离，而路径 uj-&gt;vj 的权值和 = dist[uj] + dist[vj] - 2 _ dist[lca]？实际上，如果 dist[u]表示从根 0 到 u 的距离，那么 uj 和 vj 之间的距离应该是：dist[uj] + dist[vj] - 2 \\* dist[lca]。但是这里我们要求的是 uj 到 vj 的路径权值和，这个公式是成立的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，题目要求的是路径上的第一个节点 x（从 uj 开始）使得从 uj 到 x 的累积权重&gt;=总权重的一半。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.  如何快速找到这个节点 x？</span></span>
<span class="line"><span>    我们可以将路径 uj-&gt;vj 分为两段：uj-&gt;lca 和 lca-&gt;vj（注意第二段是从 lca 到 vj，但是方向是反的，所以我们需要反转方向）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    但是，我们不可能遍历整个路径。我们可以考虑在路径上二分，但是路径不是连续的，而是离散的节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4.  另一种思路：倍增法。我们可以通过倍增的方式在路径上跳转，从而快速找到中位节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>具体步骤：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 预处理每个节点到根的距离 dist[]，以及每个节点的深度 depth[]，父节点数组 parent[][]（倍增数组）。</span></span>
<span class="line"><span>- 对于每个查询(u, v)：</span></span>
<span class="line"><span>  total = dist[u] + dist[v] - 2 _ dist[lca] // 注意：这样计算的是路径权值和？实际上，dist[u]是从 0 到 u，dist[v]是从 0 到 v，lca 是 u 和 v 的最近公共祖先，那么 u 到 v 的路径和确实为：dist[u] + dist[v] - 2 _ dist[lca]。</span></span>
<span class="line"><span>  但是，我们需要注意：这里 dist[u]表示从 0 到 u，而路径 u-&gt;v 并不是从 0 开始的。所以这个公式正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 然后，我们需要找到路径上第一个节点 x，使得从 u 到 x 的累积权重&gt;=total/2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 如何找到 x？</span></span>
<span class="line"><span>  我们考虑从 u 出发，先向上走到 lca，然后再从 lca 向下走到 v？但是这样要分两段，而且方向不同。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  我们可以将路径 u-&gt;v 拆成两段：u-&gt;lca（向上）和 lca-&gt;v（向下）。但是，在 u-&gt;lca 这一段，累积权重是从 0 开始增加（从 u 开始），而到了 lca 后，再向下走向 v，这时累积权重继续增加（从 lca 到 v 的边权）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  但是，我们要求的是从 u 出发的累积权重。所以：</span></span>
<span class="line"><span>  在 u-&gt;lca 段：从 u 到某个节点 x（在 u-&gt;lca 上）的累积权重 = dist[u] - dist[x] ??? 不对，因为 dist[x]是从 0 到 x，dist[u]是从 0 到 u，那么 u 到 x 的权重应该是？注意：u 在 x 的下方（因为 u-&gt;lca 是向上走，所以 u 在 lca 的子树中，而 x 在 u 到 lca 的路径上，所以 x 是 u 的祖先），那么 u 到 x 的路径权值应该是 dist[u] - dist[x]（因为从 0 到 u 经过 x，所以这段距离就是 dist[u]-dist[x]）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  在 lca-&gt;v 段：假设我们已经在 lca，然后从 lca 向下到 v，那么从 u 到某个节点 y（在 lca-&gt;v 上）的累积权重 = (u-&gt;lca 的权重) + (lca-&gt;y 的权重)。而 u-&gt;lca 的权重 = dist[u]-dist[lca]，lca-&gt;y 的权重 = dist[y]-dist[lca]（注意：这里 dist[y]是从 0 到 y，而 lca 是 y 的祖先，所以 lca 到 y 的权重就是 dist[y]-dist[lca]）。所以从 u 到 y 的总权重 = (dist[u]-dist[lca]) + (dist[y]-dist[lca]) = dist[u] + dist[y] - 2 \\* dist[lca]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  但是，这样计算的是从 u 到 y 的整个路径（u-&gt;lca-&gt;y）的权重。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  因此，整个路径 u-&gt;v 的权重 = dist[u] + dist[v] - 2 \\* dist[lca]（即 total）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 所以，我们需要在路径上找到第一个节点 x，使得累积权重&gt;=total/2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  有两种情况：</span></span>
<span class="line"><span>  情况 1：中位节点在 u-&gt;lca 的路径上（包括 lca）。此时累积权重为：dist[u]-dist[x]。</span></span>
<span class="line"><span>  要求：dist[u]-dist[x] &gt;= total/2 =&gt; dist[x] &lt;= dist[u] - total/2</span></span>
<span class="line"><span>  情况 2：中位节点在 lca-&gt;v 的路径上（不包括 lca，因为 lca 已经算过了，如果情况 1 已经满足就不会到情况 2？但注意，可能 u-&gt;lca 的累积权重小于 total/2，所以需要继续在 lca-&gt;v 上找）。</span></span>
<span class="line"><span>  此时累积权重 = (dist[u]-dist[lca]) + (从 lca 到 x 的权重) = dist[u]-dist[lca] + (dist[x]-dist[lca]) = dist[u] + dist[x] - 2 _ dist[lca]。</span></span>
<span class="line"><span>  要求：dist[u] + dist[x] - 2 _ dist[lca] &gt;= total/2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  但是，我们要求的是第一个满足条件的节点。所以应该先沿着 u-&gt;lca 找，如果没找到再沿着 lca-&gt;v 找。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  具体步骤：</span></span>
<span class="line"><span>  Step1: 先判断在 u-&gt;lca 的路径上是否存在满足条件的节点。</span></span>
<span class="line"><span>  即：是否存在 x（在 u 到 lca 的路径上，包括 u 和 lca）使得 dist[u]-dist[x] &gt;= total/2。</span></span>
<span class="line"><span>  这个条件等价于：dist[x] &lt;= dist[u] - total/2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>               注意：x越靠近lca，dist[x]越小（因为x是祖先，所以dist[x]&lt;=dist[u]），所以满足条件的x在u-&gt;lca的路径上是从lca开始往u方向的一段连续路径。而我们要求的是第一个满足条件的节点（即从u出发，第一个遇到的满足条件的节点），实际上应该是最后一个满足条件的节点？因为从u出发，先遇到u，然后u的父节点，一直到lca，而累积权重是从0开始逐渐增加（在u-&gt;lca段，累积权重是递减的？不对，注意：在u-&gt;lca段，从u出发，每向上走一步，累积权重就增加一段边权，所以累积权重是递增的？不对，实际上，从u出发，第一步是u到父节点，累积权重为边权，然后到祖父节点，加上父节点到祖父节点的边权，所以累积权重是递增的。但是，我们计算的是从u到当前节点的权重，所以随着向上走，当前节点离u越来越远，累积权重越来越大？不对，我们计算的是从u到当前节点x的路径权重，当x=u时，累积权重为0（因为题目中边权是连接两个节点的，从u到u没有边，所以累积权重应该是0？）—— 这里需要明确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  重新理解：路径 u-&gt;v 的节点序列为：u = a0, a1, a2, ..., ak = lca, ..., b0=lca, b1, ..., bm = v。</span></span>
<span class="line"><span>  边权：u-&gt;a1 的边权为 w1，a1-&gt;a2 的边权为 w2，...，直到 ak-1-&gt;lca 的边权为 wk；然后 lca-&gt;b1 的边权为 w*{k+1}，...，b*{m-1}-&gt;v 的边权为 w*{k+m}。</span></span>
<span class="line"><span>  从 u 到 x（x 在 u-&gt;lca 段）的累积权重：假设 x=a_i，则累积权重 = w1 + w2 + ... + w_i。</span></span>
<span class="line"><span>  从 u 到 x（x 在 lca-&gt;v 段）的累积权重：假设 x=b_j，则累积权重 = (w1+...+wk) + (w*{k+1}+...+w\\_{k+j})。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  所以，在 u-&gt;lca 段，累积权重是递增的（从 0 开始，每次加上一个正数），在 lca-&gt;v 段也是递增的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  因此，第一个满足累积权重&gt;=total/2 的节点，可能是： - 在 u-&gt;lca 段：从 u 出发，沿着 u-&gt;lca 方向，当累积权重第一次&gt;=total/2 时，当前节点就是中位节点。 - 如果在 u-&gt;lca 段累积权重始终小于 total/2，那么进入 lca-&gt;v 段，从 lca 开始，沿着 lca-&gt;v 方向，当累积权重第一次&gt;=total/2 时，当前节点就是中位节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  但是，我们如何快速在 u-&gt;lca 段找到第一个满足累积权重&gt;=total/2 的节点呢？</span></span>
<span class="line"><span>  我们可以从 u 开始向上跳，但是不能一步一步跳（太慢），可以倍增跳。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  倍增法：</span></span>
<span class="line"><span>  我们预处理每个节点的 2^k 级祖先，同时预处理每个节点到根的距离（即 dist 数组，从根节点出发 DFS 得到）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  在 u-&gt;lca 段：</span></span>
<span class="line"><span>  我们要求最小的深度（即离 u 最近）的节点 x，使得从 u 到 x 的累积权重&gt;=total/2。但是注意：从 u 到 x 的累积权重 = dist[u] - dist[x] （因为 dist[u]是从 0 到 u，dist[x]是从 0 到 x，而 u-&gt;x 的路径就是 dist[u]-dist[x]）—— 这个等式成立的条件是 x 是 u 的祖先（在 u 到 lca 的路径上）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       所以，在u-&gt;lca段，条件为：dist[u]-dist[x] &gt;= total/2   -&gt;  dist[x] &lt;= dist[u] - total/2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       我们要找的x是满足这个条件的最深的节点（即离u最近，因为从u向上走，x越深（离u越近）则dist[x]越大，越浅则dist[x]越小。而条件要求dist[x]&lt;=一个值，那么满足条件的最深的节点就是离u最近的满足条件的节点？不对，因为dist[x]随着x向上而减小，所以满足条件的x是从某个祖先开始一直到lca。而我们要求第一个满足条件的节点，即从u出发向上走，第一次遇到满足条件的节点。但是，因为累积权重是递增的（向上走每一步累积权重都在增加），所以实际上，满足条件的节点是从某个节点开始到lca的一段。而我们要求的是第一个满足条件的节点，也就是满足条件的最小深度的节点（即最深的节点，离u最近的那个节点）？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       注意：从u出发，第一步（走到父节点）累积权重为w1，然后第二步（走到祖父节点）累积权重为w1+w2，所以累积权重是递增的。因此，第一个满足条件的节点就是满足条件的最小深度的节点（即深度最大的节点，离u最近）？不对，因为x向上走，深度变小（离根越近）。所以实际上，我们要求的是满足条件的最深的节点（即深度最大的节点，也就是离u最近的那个祖先节点）？但是，我们是从u出发，所以第一个遇到的满足条件的节点应该是离u最远的那个祖先节点？不对，因为我们是逐步向上走，每一步都会检查当前节点是否满足条件。所以第一个满足条件的节点就是当前节点（从u开始，然后父节点，祖父节点，直到某个节点x满足条件，那么x就是第一个满足条件的节点）。因此，x应该是满足条件的最浅的节点（即深度最小，离lca最近）？不对，因为u的深度比父节点深，父节点深度比祖父节点深，所以向上走节点深度递减。因此，我们要求的是满足条件且深度最小的节点？不对，因为深度越小，节点越靠近根，累积权重越大（因为走的边多）。所以满足条件的节点可能有多个，我们要求的是第一个，即从u出发向上走，第一次遇到满足条件的节点，这个节点就是满足条件的最深的节点（即深度最大的节点）？因为深度大的节点离u近，深度小的节点离u远。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       举个例子：u的深度为5，父节点深度4，祖父节点深度3。累积权重：u为0（因为还没走，但题目中起点是u，所以从u出发，第一个节点是父节点，累积权重为u到父节点的边权）。因此，我们检查的节点顺序是：u（累积0）-&gt;父节点（累积w1）-&gt;祖父节点（累积w1+w2）。所以第一个满足条件的节点可能是父节点（如果w1&gt;=total/2）或者祖父节点（如果w1&lt;total/2但w1+w2&gt;=total/2）。所以这个节点是u的祖先中深度最大的那个满足条件的节点（即离u最近的那个满足条件的祖先）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       因此，在u-&gt;lca段，我们要找的节点x是u的祖先中深度最大的满足dist[u]-dist[x]&gt;=total/2的节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       注意：dist[u]-dist[x]就是u到x的路径权值和，这个值随着x向上（深度变小）而增大（因为x向上，dist[x]变小，所以dist[u]-dist[x]变大）。所以，如果存在满足条件的节点，那么深度最大的那个（即最深的，离u最近的祖先）就是第一个满足条件的节点？不对，因为从u出发，我们首先检查u的父节点（深度为depth[u]-1），如果父节点满足条件，那么它就是第一个满足条件的节点；如果父节点不满足，再检查祖父节点（深度为depth[u]-2）...。所以，第一个满足条件的节点就是满足条件的最深的节点（深度最大的节点）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       所以，我们可以在u-&gt;lca的路径上，从u开始，用倍增法向上跳，找到满足条件的最深的节点（即深度最大的节点）？但是，倍增法通常用于找最浅的节点（比如LCA）。这里我们要找的是满足条件的最深的节点，我们可以从u出发，尝试向上跳2^k步（k从大到小），如果跳到的节点不满足条件（即dist[u]-dist[x] &lt; total/2），那么我们就跳过去，然后继续跳，直到不能跳（再跳就不满足条件），那么最后跳到的节点的父节点就是满足条件的节点？或者我们可以调整。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       具体倍增法在u-&gt;lca段找第一个满足条件的节点x（即满足条件的最深节点）：</span></span>
<span class="line"><span>         我们要求x在u到lca的路径上，并且是满足dist[u]-dist[x]&gt;=total/2的节点中深度最大的（即最深的）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         可以这样：从u开始，从大到小枚举k（比如k=20,19,...,0），尝试跳到2^k祖先，如果这个祖先节点y满足：dist[u]-dist[y] &lt; total/2，那么我们就跳到y（因为还没有满足条件，所以需要继续向上跳，累积权重还不够，所以需要跳更远），然后继续。最后，我们跳到的节点z是满足dist[u]-dist[z] &lt; total/2的节点中离lca最近（即最浅）的节点（注意：跳完之后，z再向上跳一步就满足条件了？）。那么z的父节点就是第一个满足条件的节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       但是，注意：我们可能跳过了lca？所以我们需要保证在u-&gt;lca的路径上。因此，在跳的过程中，要保证节点深度&gt;=lca的深度。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       步骤：</span></span>
<span class="line"><span>         total_half = total / 2.0;   // 注意total是整数，但total/2可能是小数，所以用double？但是题目中权重是整数，total是整数，total_half可能是小数，但条件要求&gt;=，所以用double比较。</span></span>
<span class="line"><span>         current = u;</span></span>
<span class="line"><span>         for k from max_log down to 0:</span></span>
<span class="line"><span>             next_node = parent[current][k];</span></span>
<span class="line"><span>             if next_node 不存在 或者 next_node的深度小于lca的深度（即跳过了lca，不允许跳过lca）？或者为了避免跳过lca，我们可以先不判断lca，因为lca就是边界，我们可以在跳的过程中控制深度不小于lca的深度。</span></span>
<span class="line"><span>             另一种方法：我们只考虑在u-&gt;lca的路径上，所以跳到的节点深度必须大于等于lca的深度。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        但是，我们也可以这样：先不管lca，因为如果跳过了lca，那么条件dist[u]-dist[next_node]会包括lca以下的边权吗？不会，因为next_node在lca的上方（深度比lca小），那么dist[u]-dist[next_node] = (u-&gt;lca)+(lca-&gt;next_node)？不对，实际上，dist[u]是从0到u，dist[next_node]是从0到next_node，而next_node是lca的祖先（因为深度小于lca），那么u-&gt;next_node的路径就是u-&gt;lca-&gt;next_node，所以权值和=dist[u]-dist[next_node]（因为dist[u]包括0-&gt;u，dist[next_node]包括0-&gt;next_node，而0-&gt;next_node = 0-&gt;lca + lca-&gt;next_node，但0-&gt;u=0-&gt;lca + lca-&gt;u，所以dist[u]-dist[next_node] = (0-&gt;u) - (0-&gt;next_node) = (0-&gt;lca + lca-&gt;u) - (0-&gt;lca + lca-&gt;next_node) = lca-&gt;u - lca-&gt;next_node，这显然不是u-&gt;next_node的权值和）。所以这里出错了。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  正确做法：在 u-&gt;lca 段，x 是 u 的祖先，所以 u-&gt;x 的权值和 = dist[u] - dist[x] 成立的条件是 x 在 u 到根的路径上（即 x 是 u 的祖先），这个等式成立。但是，如果 x 不在 u 到 lca 的路径上，而是 lca 的祖先？那就不行了，因为 u-&gt;x 的路径必须经过 lca，所以权值和 = (u-&gt;lca) + (lca-&gt;x) = (dist[u]-dist[lca]) + (dist[x]-dist[lca]) = dist[u]+dist[x]-2\\*dist[lca]？所以，在 u-&gt;lca 段，x 必须在 u 到 lca 之间（包括 lca），此时 x 是 u 的祖先且深度&gt;=lca 的深度，那么 u-&gt;x 的权值和=dist[u]-dist[x]（因为从 0 到 u 和 0 到 x 的路径在 lca 以上是重合的，所以相减就是 u 到 x 的路径权值）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  因此，在 u-&gt;lca 段，我们要求 x 的深度&gt;=lca 的深度，这样 u-&gt;x 的权值和=dist[u]-dist[x]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  所以，倍增法在 u-&gt;lca 段找第一个满足条件的节点 x（即满足条件的最深节点）：</span></span>
<span class="line"><span>  current = u</span></span>
<span class="line"><span>  total_half = total / 2.0;</span></span>
<span class="line"><span>  如果 u-&gt;lca 的权值和（即 dist[u]-dist[lca]）&lt; total_half，那么说明中位节点在 lca-&gt;v 段，跳过此段。</span></span>
<span class="line"><span>  否则，我们就在 u-&gt;lca 段找。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       具体步骤：</span></span>
<span class="line"><span>         current = u</span></span>
<span class="line"><span>         for k from max_log down to 0:</span></span>
<span class="line"><span>             next_node = parent[current][k];</span></span>
<span class="line"><span>             if next_node的深度 &lt; depth[lca]  // 不能跳到lca上方</span></span>
<span class="line"><span>                 continue;</span></span>
<span class="line"><span>             if dist[u] - dist[next_node] &lt; total_half  // 说明跳得太远，累积权重还不够，需要跳更远的祖先（即更小的步数，所以不跳，继续缩小k）</span></span>
<span class="line"><span>                 // 不跳，继续</span></span>
<span class="line"><span>             else</span></span>
<span class="line"><span>                 // 如果跳过去，那么next_node已经满足条件，但是我们要求第一个满足条件的节点，所以可能还有更浅的满足条件的节点（即更靠近u的节点）？不对，我们要找的是第一个满足条件的节点，即最深的满足条件的节点。而next_node是2^k步的祖先，可能跳得太远，所以我们不跳，而是尝试更小的步数。</span></span>
<span class="line"><span>                 // 实际上，我们想找到的是满足条件的最深的节点，所以当我们跳2^k步到达一个满足条件的节点时，我们不跳（因为可能跳过了更深的满足条件的节点），而是继续尝试更小的步数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        所以，我们调整：我们找的是满足条件的最深的节点，所以我们可以用倍增法找最后一个不满足条件的节点，然后它的父节点就是满足条件的节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        步骤：</span></span>
<span class="line"><span>         candidate = u;   // 初始化为u，但u不满足（因为从u到u的累积权重为0，小于total_half）</span></span>
<span class="line"><span>         current = u;</span></span>
<span class="line"><span>         for k from max_log down to 0:</span></span>
<span class="line"><span>             next_node = parent[current][k];</span></span>
<span class="line"><span>             if next_node的深度 &lt; depth[lca]</span></span>
<span class="line"><span>                 continue;</span></span>
<span class="line"><span>             if dist[u] - dist[next_node] &lt; total_half  // 说明next_node不满足条件（因为累积权重还不足一半）</span></span>
<span class="line"><span>                 current = next_node;   // 跳到next_node，然后继续向上找（因为当前累积权重还不够，所以继续向上跳，累积权重会继续增加）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         // 循环结束后，current是最后一个不满足条件的节点（在u-&gt;lca段），那么current的父节点就是第一个满足条件的节点。</span></span>
<span class="line"><span>         x = parent[current][0];   // 但是，current的父节点可能不存在，或者深度小于lca？我们在循环中已经保证current的深度&gt;=lca，所以父节点深度&gt;=lca的深度-1，但是父节点深度可能小于lca的深度？不可能，因为current的深度&gt;=lca，所以父节点的深度&gt;=lca的深度-1，而lca的深度&gt;=1（当lca为0时深度为0，但此时父节点不存在？）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        但是，有可能current就是lca？那么它的父节点就不在路径上（因为u-&gt;lca段只到lca）。所以我们需要判断：如果current的父节点存在且深度&gt;=lca的深度（实际上父节点的深度=current的深度-1，而lca的深度&lt;=current的深度，所以父节点的深度&gt;=lca的深度-1，但是不一定&gt;=lca的深度）—— 不对，因为lca是current的祖先，所以current的深度&gt;=lca的深度，那么父节点的深度=current的深度-1&gt;=lca的深度-1，所以如果lca的深度等于current的深度，那么父节点的深度=lca的深度-1，就小于lca的深度，不在路径上。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        因此，我们只能保证current在u-&gt;lca的路径上，且不满足条件（累积权重&lt;total_half）。那么第一个满足条件的节点应该是current向上一步（即父节点）？但是，如果current就是lca，那么current向上一步就不在路径上了。所以，如果current不是lca，那么父节点在路径上；如果current是lca，那么说明u-&gt;lca整段都不满足条件（因为current=lca，且dist[u]-dist[lca] &lt; total_half），那么中位节点在lca-&gt;v段。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        所以，我们在u-&gt;lca段倍增后，如果current不是lca，那么第一个满足条件的节点就是parent[current][0]（即current的父节点）；如果current是lca，那么说明u-&gt;lca段没有满足条件的节点，需要去lca-&gt;v段找。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  情况 2：在 lca-&gt;v 段找。</span></span>
<span class="line"><span>  此时，从 u 到当前节点 y（在 lca-&gt;v 段）的累积权重 = (u-&gt;lca) + (lca-&gt;y) = (dist[u]-dist[lca]) + (dist[y]-dist[lca]) = dist[u] + dist[y] - 2 _ dist[lca]。</span></span>
<span class="line"><span>  条件：dist[u] + dist[y] - 2 _ dist[lca] &gt;= total_half。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       注意：y在lca-&gt;v的路径上，所以y是lca的后代（v的祖先）。而且，从lca到v是向下走，所以y的深度递增（从lca的深度到v的深度）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       同样，我们要求第一个满足条件的y（即从lca出发，沿着lca-&gt;v方向，第一个满足条件的节点）。注意，从lca开始，第一步到lca的第一个孩子（在路径上），累积权重=u-&gt;lca + lca-&gt;孩子 = (dist[u]-dist[lca]) + w（w是lca到孩子的边权）。所以累积权重递增。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       我们要找满足条件的最深的y（即离lca最近的那个满足条件的节点），因为这样是第一个满足条件的节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       但是，在lca-&gt;v段，我们如何快速找到y？</span></span>
<span class="line"><span>         类似地，我们可以从v开始向上跳（向lca方向跳），但是注意：条件是关于y的dist[y]的：dist[u] + dist[y] - 2 * dist[lca] &gt;= total_half -&gt; dist[y] &gt;= total_half + 2 * dist[lca] - dist[u]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       所以，我们要求y是v的祖先（在lca-&gt;v段），且满足dist[y] &gt;= X（其中X=total_half+2*dist[lca]-dist[u]）的节点中深度最小的节点（即最深的节点，因为深度越大，dist[y]越大，所以满足条件的最深的节点就是离v最近的祖先，也就是第一个满足条件的节点？不对，因为从lca出发，向v方向走，y的深度递增，dist[y]递增，所以第一个满足条件的节点就是满足条件的最浅的节点（即深度最小的节点）？不对，因为从lca出发，第一个节点是lca（但是lca我们已经考虑过了，在u-&gt;lca段已经判断了，所以这里从lca的孩子开始？）实际上，lca-&gt;v段，第一个节点是lca的下一个节点（lca的孩子），然后孩子的孩子，...。所以，y的深度递增，dist[y]递增。因此，满足条件的最浅的节点（即深度最小的节点）就是第一个满足条件的节点？不对，深度最小的节点是lca，而lca已经判断过（在u-&gt;lca段），所以这里不考虑lca。我们考虑的是lca-&gt;v段（不包括lca，因为lca已经判断过，不满足）？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       注意：在lca-&gt;v段，我们是从lca的下一个节点开始。所以，我们要求的是满足条件的最浅的节点（即深度最小的节点）？因为深度最小的节点离lca最近（在树中深度小表示离根近，所以lca的深度比它的孩子小，所以深度最小的节点就是lca？但是lca已经排除）。所以实际上，在lca-&gt;v段，节点的深度从depth[lca]+1开始到depth[v]。所以深度递增（节点在树中的深度递增）。所以，满足条件的最浅的节点（深度最小的节点）就是离lca最近的那个节点（即lca的第一个孩子），而满足条件的最深的节点（深度最大的节点）就是离v最近的节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       而我们要求的是第一个满足条件的节点，也就是从lca出发，沿着路径向v方向走，遇到的第一个满足条件的节点。这个节点应该是深度最小的满足条件的节点（即离lca最近的那个满足条件的节点）？因为从lca出发，先到达深度为depth[lca]+1的节点（lca的孩子），然后深度为depth[lca]+2的节点，...。所以，我们要求深度最小的满足条件的节点（即深度最小的节点中满足条件的那个，注意可能有多个满足条件的节点，但第一个遇到的就是深度最小的那个满足条件的节点）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       因此，在lca-&gt;v段，我们要求满足条件且深度最小的节点（即最浅的节点）？不对，因为深度最小的节点就是lca（但lca已经排除）。所以实际上，我们考虑的是深度&gt;depth[lca]的节点，并且要求深度尽可能小（即离lca尽可能近）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       但是，条件：dist[y] &gt;= X，其中X=total_half+2*dist[lca]-dist[u]。因为dist[y]随着y的深度增加而增加（因为y离根越远，dist[y]越大），所以满足条件的最浅的节点（即深度最小的节点）就是第一个满足条件的节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       所以，我们可以从v开始，用倍增法向上跳，找到最浅的满足条件的节点（即深度最小的节点）？但是，我们要找的是深度最小的满足条件的节点，而v的祖先中深度最小的节点是lca（但lca已经被排除），所以我们要找深度大于lca的深度且满足条件的最浅的节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       具体：从v开始，用倍增法向上跳，我们想跳过一些节点，直接跳到第一个满足条件的节点（即深度最小的满足条件的节点）。但是，倍增法通常用于找祖先，而我们要找的是满足条件的最浅的节点（即深度最小的节点），而深度最小的节点在lca附近。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       我们可以这样：从v开始，从大到小枚举k，尝试跳到2^k祖先，如果这个祖先节点y满足：dist[u] + dist[y] - 2 * dist[lca] &lt; total_half（即不满足条件），那么我们就跳到y，然后继续向上跳（向lca方向跳，因为这样会减小dist[y]，从而可能不满足条件，所以我们要找的是第一个满足条件的节点，应该从lca开始向下找？不对，因为从lca到v，我们是从lca开始向下，但v的祖先中，离lca越近的节点深度越小，离v越近的节点深度越大。所以，为了找到深度最小的满足条件的节点，我们应该从v开始向上跳（向lca方向），找到最后一个不满足条件的节点，然后它的子节点（在路径上）就是第一个满足条件的节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       步骤：</span></span>
<span class="line"><span>         current = v;</span></span>
<span class="line"><span>         for k from max_log down to 0:</span></span>
<span class="line"><span>             next_node = parent[current][k];</span></span>
<span class="line"><span>             if next_node的深度 &lt;= depth[lca]   // 不能跳到lca或lca上方（因为lca已经排除，我们考虑的是lca-&gt;v段，所以节点深度&gt;depth[lca]）</span></span>
<span class="line"><span>                 continue;</span></span>
<span class="line"><span>             if dist[u] + dist[next_node] - 2 * dist[lca] &lt; total_half  // 不满足条件</span></span>
<span class="line"><span>                 current = next_node;   // 跳到next_node，然后继续向上找</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         // 循环结束后，current是最后一个不满足条件的节点（在lca-&gt;v段），那么current的父节点（在路径上）就是第一个满足条件的节点？不对，因为current是v的祖先，在lca-&gt;v段，current的父节点可能不在路径上？注意：current的父节点在u-&gt;v的路径上吗？因为lca-&gt;v的路径是连续的，所以current的父节点在路径上，且深度比current小1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        但是，current的父节点可能比lca深？实际上，current的深度&gt;depth[lca]，所以父节点的深度&gt;=depth[lca]（且父节点在路径上）。那么，第一个满足条件的节点就是current的父节点？不对，因为条件判断的是next_node（即current的祖先），而current的父节点在路径上，但父节点可能不满足条件？我们最后停在一个节点current，这个节点不满足条件，那么它的父节点（在路径上）就是第一个满足条件的节点？因为从lca-&gt;v，节点序列为：lca = a0, a1, a2, ..., am = v。累积权重：从a0（lca）到a0为0（不考虑），从a1开始：累积权重=u-&gt;lca + lca-&gt;a1。然后a2：u-&gt;lca+lca-&gt;a2，...。所以，我们要求第一个满足条件的节点a_i（i&gt;=1）。而current是某个节点a_j，它不满足条件，那么a_{j+1}（即current的子节点？不对，current是向上跳得到的，所以current是a_j，那么a_{j-1}是v方向上的节点？）这里方向容易乱。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       重新梳理：在lca-&gt;v段，节点序列为：lca, a1, a2, ..., v。其中，a1是lca在路径上的下一个节点（孩子），a2是a1的孩子，...。所以，从lca到v，节点的深度递增。而v的祖先序列：v, parent[v], parent[parent[v]], ... 一直到lca。所以，从v开始向上跳，就是逆着路径的方向（从v到lca）。所以，当我们从v开始向上跳时，节点的深度递减。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       我们要求的是第一个满足条件的节点（从lca出发，沿着lca-&gt;v方向，即深度递增方向）。所以，在v的祖先序列（从v到lca）中，第一个满足条件的节点（即从v开始向上跳，遇到的第一个满足条件的节点）应该是离v最近的满足条件的祖先？不对，因为累积权重是从lca到当前节点递增的，所以离lca越近（深度越小）的节点累积权重越小，离v越近（深度越大）的节点累积权重越大。所以，满足条件的最浅的节点（深度最小）就是离lca最近的那个满足条件的节点（即路径上第一个满足条件的节点）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       但是，我们是从v开始向上跳，所以遇到的第一个满足条件的节点（在祖先链中）是离v最近的满足条件的祖先（即深度最大的满足条件的节点），而我们要找的是离lca最近（深度最小）的满足条件的节点。所以，我们需要找到满足条件的最浅的节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       因此，我们可以换一种方式：在lca-&gt;v段，我们存储从lca到v的路径上的节点序列？但是n=10^5，查询10^5，不可能存储路径。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       另一种方法：二分深度。但是，我们可以用倍增法从lca开始向下走？但是向下走没有预处理。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  重新考虑：在 lca-&gt;v 段，我们要求满足条件的最浅的节点（深度最小）。我们可以从 v 开始，用倍增法向上跳，跳到深度最小的满足条件的节点。但是，如何用倍增法直接跳到深度最小的满足条件的节点？我们可以这样：从大到小枚举 k，尝试跳到 2^k 祖先，如果跳到的节点 y 满足条件，那么我们就跳（因为我们要找满足条件的最浅的节点，而 y 满足条件，那么最浅的节点可能在 y 到 lca 之间，所以我们可以继续尝试跳更小的步数，看有没有更浅的满足条件的节点）；如果不满足条件，那么就不跳。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       具体：</span></span>
<span class="line"><span>         candidate = v;   // 初始化为v</span></span>
<span class="line"><span>         for k from max_log down to 0:</span></span>
<span class="line"><span>             next_node = parent[candidate][k];</span></span>
<span class="line"><span>             if next_node的深度 &lt;= depth[lca]  // 不能跳到lca或lca上方，因为lca已经排除</span></span>
<span class="line"><span>                 continue;</span></span>
<span class="line"><span>             if dist[u] + dist[next_node] - 2 * dist[lca] &gt;= total_half  // 满足条件</span></span>
<span class="line"><span>                 candidate = next_node;   // 跳到next_node，然后继续找更浅的满足条件的节点</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         // 循环结束后，candidate是满足条件的最浅的节点（即深度最小的节点）？注意：我们跳的时候，如果next_node满足条件，我们就跳过去，然后继续在candidate的祖先中找更浅的满足条件的节点。所以最后candidate是满足条件的最浅的节点。但是，我们要找的是第一个满足条件的节点（即最浅的满足条件的节点），所以就是candidate。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       然而，有可能不存在满足条件的节点吗？不可能，因为v一定满足：dist[u]+dist[v]-2*dist[lca] = total&gt;=total/2，所以v一定满足条件。所以最浅的满足条件的节点一定存在。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       但是，我们要找的是第一个满足条件的节点（即最浅的满足条件的节点），所以就是candidate。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  但是，这里有一个问题：在 u-&gt;lca 段，我们找到了一个节点 x，那么我们就返回 x；否则，我们在 lca-&gt;v 段返回 candidate。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  然而，整个路径的节点不能重复：u-&gt;lca 段（包括 lca）和 lca-&gt;v 段（不包括 lca，因为 lca 在 u-&gt;lca 段已经考虑）。所以，在 lca-&gt;v 段，我们不考虑 lca。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>总结算法步骤：</span></span>
<span class="line"><span>预处理： 1. 构建邻接表（无向图）。 2. 从根节点 0 开始 DFS/BFS，计算每个节点的深度 depth[]和到根节点的距离 dist[]，并预处理倍增数组 parent[k][i]（表示节点 i 的 2^k 级祖先）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>倍增数组的预处理：</span></span>
<span class="line"><span>parent[0][i] = 节点 i 的直接父节点。</span></span>
<span class="line"><span>然后对于 k&gt;=1: parent[k][i] = parent[k-1] parent[k-1][i] ] (如果存在)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>同时，为了求 LCA，我们还需要 depth 数组。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>求 LCA(u,v)的步骤（标准倍增法）：</span></span>
<span class="line"><span>if depth[u] &lt; depth[v]: swap(u,v)</span></span>
<span class="line"><span>// 将 u 跳到和 v 同一深度</span></span>
<span class="line"><span>for k from max_log down to 0:</span></span>
<span class="line"><span>if depth[parent[k][u]] &gt;= depth[v]:</span></span>
<span class="line"><span>u = parent[k][u]</span></span>
<span class="line"><span>if u==v: return u</span></span>
<span class="line"><span>for k from max_log down to 0:</span></span>
<span class="line"><span>if parent[k][u] != parent[k][v]:</span></span>
<span class="line"><span>u = parent[k][u]</span></span>
<span class="line"><span>v = parent[k][v]</span></span>
<span class="line"><span>return parent[0][u];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于每个查询(u,v)：</span></span>
<span class="line"><span>lca = LCA(u,v)</span></span>
<span class="line"><span>total = dist[u] + dist[v] - 2 \\* dist[lca]</span></span>
<span class="line"><span>total_half = total / 2.0; // 注意：用 double，因为 total 可能很大，但整数除法会截断</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 先在u-&gt;lca段找</span></span>
<span class="line"><span>        // 注意：如果u==lca，那么u-&gt;lca段只有u（即lca），累积权重为0，所以一定小于total_half（除非total_half为0，但total&gt;=0，如果total=0则total_half=0，那么0&gt;=0，所以u就是满足条件的节点？）但题目中边权&gt;=1，所以total&gt;=0，当u==v时total=0，但题目queries中u和v可能相等？但题目没有说，根据示例，节点编号不同，但u和v可能相同吗？注意示例3查询[1,2]是不同节点。但题目没有保证u!=v，所以需要考虑u==v的情况。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        如果u==v，那么路径为空？但节点是u（或v），从u到u的累积权重为0，总权重为0，0&gt;=0，所以中位节点是u。所以直接返回u。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        步骤：</span></span>
<span class="line"><span>          if u == v:</span></span>
<span class="line"><span>              ans = u</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          否则：</span></span>
<span class="line"><span>            情况1：在u-&gt;lca段找</span></span>
<span class="line"><span>              我们要求第一个满足条件的节点，即满足条件的最深的节点（深度最大的节点）。</span></span>
<span class="line"><span>              具体：从u开始，用倍增法向上跳，找到最后一个不满足条件的节点（在u-&gt;lca段），然后它的父节点就是第一个满足条件的节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>              初始化：current = u</span></span>
<span class="line"><span>              for k from max_log down to 0:</span></span>
<span class="line"><span>                  next_node = parent[k][current]</span></span>
<span class="line"><span>                  if next_node不存在（或者深度&lt;depth[lca]） // 深度&lt;depth[lca]表示跳过了lca，不允许</span></span>
<span class="line"><span>                      continue</span></span>
<span class="line"><span>                  if dist[u] - dist[next_node] &lt; total_half:  // 说明next_node不满足条件（累积权重不足）</span></span>
<span class="line"><span>                      current = next_node   // 跳到next_node</span></span>
<span class="line"><span></span></span>
<span class="line"><span>              循环结束后，current是最后一个不满足条件的节点。</span></span>
<span class="line"><span>              然后，如果current不是lca，则第一个满足条件的节点是parent[current][0]（在u-&gt;lca段）。</span></span>
<span class="line"><span>              但是，如果current==lca，说明u-&gt;lca整段都不满足条件（即dist[u]-dist[lca] &lt; total_half），那么我们就需要在lca-&gt;v段找。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>              所以：</span></span>
<span class="line"><span>                if current != lca:</span></span>
<span class="line"><span>                    candidate1 = parent[current][0]   // 注意：parent[current][0]一定存在（因为current不是根，且深度&gt;0），并且深度&gt;=depth[lca]（因为current的深度&gt;depth[lca]，所以父节点深度&gt;=depth[lca]）?</span></span>
<span class="line"><span>                    但是，current的深度至少是depth[lca]+1（因为current在u-&gt;lca段，且不是lca），所以父节点的深度&gt;=depth[lca]，所以在路径上。</span></span>
<span class="line"><span>                    ans = candidate1</span></span>
<span class="line"><span>                else:</span></span>
<span class="line"><span>                    // 进入情况2：在lca-&gt;v段找</span></span>
<span class="line"><span>                    // 注意：这里lca-&gt;v段不包括lca，所以从lca的下一个节点开始。</span></span>
<span class="line"><span>                    // 我们要求满足条件的最浅的节点（深度最小的节点），即第一个满足条件的节点。</span></span>
<span class="line"><span>                    current2 = v</span></span>
<span class="line"><span>                    for k from max_log down to 0:</span></span>
<span class="line"><span>                        next_node = parent[k][current2]</span></span>
<span class="line"><span>                        if next_node == -1 or depth[next_node] &lt;= depth[lca]:  // 不能跳到lca或以上</span></span>
<span class="line"><span>                            continue</span></span>
<span class="line"><span>                        if dist[u] + dist[next_node] - 2 * dist[lca] &lt; total_half: // 不满足条件</span></span>
<span class="line"><span>                            current2 = next_node</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    // 循环结束后，current2是最后一个不满足条件的节点（在lca-&gt;v段），那么第一个满足条件的节点应该是current2的父节点？不对，因为current2是v的祖先，在lca-&gt;v段，current2的父节点可能比lca深，也可能比lca浅？实际上，current2的深度&gt;depth[lca]，所以父节点的深度&gt;=depth[lca]（但父节点可能是lca，但我们排除了深度&lt;=depth[lca]的节点，所以父节点深度&gt;depth[lca]？不一定，因为父节点的深度=current2的深度-1，而current2的深度&gt;depth[lca]，所以父节点的深度&gt;=depth[lca]（可能等于depth[lca]）。所以，如果父节点深度等于depth[lca]，那么就是lca，但lca已经被排除。所以我们要找的是current2的孩子？不对。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    这里方向错了：在lca-&gt;v段，节点序列为：lca, a1, a2, ..., v。其中a1是lca的孩子，a2是a1的孩子，...。所以，从v开始向上跳，我们访问的节点序列是：v, parent[v], parent[parent[v]], ... 直到lca。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    而我们要求的是从lca出发，第一个满足条件的节点（即a1,a2,...中的第一个）。而a1,a2,...中，a1的深度最小（depth[lca]+1），a2的深度为depth[lca]+2，...。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    我们上面的循环结束后，current2是满足什么条件？我们跳的时候，如果next_node满足条件，我们并不跳，而是继续看更小的k？不对，我们的代码是：如果next_node不满足条件，就跳到next_node。所以current2是最后一个不满足条件的节点（在从v到lca的路径上）。那么，current2的下一个节点（在路径上，向lca方向的下一个节点）就是第一个满足条件的节点？不对，因为current2是v的祖先，下一个节点（父节点）更靠近lca，深度更小，而深度越小，累积权重越小（因为从lca到该节点的边权越少），所以可能还是不满足条件。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    所以，我们上面的方法（在lca-&gt;v段）是找满足条件的最浅的节点，应该用另一种循环：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                      candidate2 = v   // 初始化</span></span>
<span class="line"><span>                      for k from max_log down to 0:</span></span>
<span class="line"><span>                          next_node = parent[k][candidate2]</span></span>
<span class="line"><span>                          if next_node == -1 or depth[next_node] &lt; depth[lca]: // 不能跳到lca及以上，所以深度&lt;depth[lca]不行，深度=depth[lca]也不行（因为lca已经排除）</span></span>
<span class="line"><span>                              continue</span></span>
<span class="line"><span>                          // 注意：这里next_node的深度&gt;=depth[lca]+1? 不，我们只要求深度&gt;depth[lca]（即&gt;=depth[lca]+1）？不，depth[lca]是整数，深度&gt;depth[lca]即可。</span></span>
<span class="line"><span>                          if dist[u] + dist[next_node] - 2 * dist[lca] &gt;= total_half:</span></span>
<span class="line"><span>                              candidate2 = next_node</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                      // 循环结束后，candidate2是满足条件的最浅的节点（即深度最小的节点）？因为如果next_node满足条件，我们就跳过去（跳到next_node，即一个更浅的节点），然后继续在更浅的节点上尝试跳更小的步数。这样，最后candidate2就是满足条件的最浅的节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    因此，ans = candidate2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          但是，这里有一个问题：在u-&gt;lca段，我们找到的节点是candidate1，在lca-&gt;v段找到的节点是candidate2，那么到底返回哪个？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          根据我们的逻辑：如果在u-&gt;lca段找到了（即current!=lca），就返回candidate1；否则，返回candidate2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，还有一种情况：u-&gt;lca 段的累积权重可能为 0（当 u==lca 时），此时 u-&gt;lca 段只有 u（lca），累积权重 0。那么 0&lt;total_half（除非 total=0，但 u==lca 且 u==v，所以 total=0，这种情况前面已经处理了）。所以当 u!=v 时，如果 u==lca，那么 u-&gt;lca 段的累积权重为 0，小于 total_half，所以会进入 lca-&gt;v 段。同理，如果 v==lca，那么 u-&gt;lca 段的累积权重=dist[u]-dist[lca]（&gt;0），可能满足也可能不满足。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，算法框架：</span></span>
<span class="line"><span>for each query (u,v):</span></span>
<span class="line"><span>if u == v: ans = u</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>lca = LCA(u,v)</span></span>
<span class="line"><span>total = dist[u] + dist[v] - 2 \\* dist[lca]</span></span>
<span class="line"><span>total_half = total / 2.0 // 注意：用 double</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 处理u-&gt;lca段</span></span>
<span class="line"><span>            current1 = u</span></span>
<span class="line"><span>            for k from max_log down to 0:</span></span>
<span class="line"><span>                next_node = parent[k][current1]</span></span>
<span class="line"><span>                if next_node == -1 || depth[next_node] &lt; depth[lca]: // 不能跳到lca的上面（深度小于lca的深度）</span></span>
<span class="line"><span>                    continue;</span></span>
<span class="line"><span>                if dist[u] - dist[next_node] &lt; total_half:</span></span>
<span class="line"><span>                    current1 = next_node</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if current1 != lca:</span></span>
<span class="line"><span>                // 那么current1的父节点就是满足条件的节点</span></span>
<span class="line"><span>                ans = parent[current1][0]</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                // 处理lca-&gt;v段</span></span>
<span class="line"><span>                candidate2 = v</span></span>
<span class="line"><span>                for k from max_log down to 0:</span></span>
<span class="line"><span>                    next_node = parent[k][candidate2]</span></span>
<span class="line"><span>                    if next_node == -1 || depth[next_node] &lt;= depth[lca]: // 注意：不能跳到lca或lca的上面（深度&lt;=lca的深度）</span></span>
<span class="line"><span>                        continue;</span></span>
<span class="line"><span>                    if dist[u] + dist[next_node] - 2 * dist[lca] &gt;= total_half:</span></span>
<span class="line"><span>                        candidate2 = next_node</span></span>
<span class="line"><span>                ans = candidate2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：在 u-&gt;lca 段的循环中，如果 next_node 的深度等于 depth[lca]（即 lca），那么它是允许的。所以当 current1 跳到 lca 时，条件为：dist[u]-dist[lca] &lt; total_half，那么 current1 会变成 lca（如果满足条件的话）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，如果 u-&gt;lca 段的累积权重&gt;=total_half，那么 current1 就不会跳到 lca，而是停在 u-&gt;lca 段的一个节点（不是 lca），然后我们取它的父节点作为答案。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，这里有一个边界：当 u-&gt;lca 段的累积权重&gt;=total_half 时，我们找到的节点一定在 u-&gt;lca 段（不包括 lca？因为 current1 最后停在最后一个不满足条件的节点，而它的父节点在 u-&gt;lca 段）。但是，有可能这个父节点就是 lca？比如，current1 在 lca 的孩子位置，然后父节点就是 lca。这是允许的，因为 lca 在 u-&gt;lca 段。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，这个算法可以。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，在 lca-&gt;v 段，我们的循环是找满足条件的最浅的节点（即离 lca 最近的那个满足条件的节点），所以 candidate2 就是答案。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，我们有没有可能把 lca-&gt;v 段的条件写错了？在 lca-&gt;v 段，从 u 到 y 的累积权重= (u-&gt;lca)+(lca-&gt;y)= (dist[u]-dist[lca]) + (dist[y]-dist[lca]) = dist[u]+dist[y]-2*dist[lca]。</span></span>
<span class="line"><span>而总权重 total= (u-&gt;lca)+(lca-&gt;v) = (dist[u]-dist[lca]) + (dist[v]-dist[lca]) = dist[u]+dist[v]-2*dist[lca]。</span></span>
<span class="line"><span>所以条件：dist[u]+dist[y]-2\\*dist[lca] &gt;= total/2 是正确的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，在 lca-&gt;v 段，我们要求的是第一个满足条件的节点，也就是最浅的节点（深度最小的节点），所以用上述循环：从 v 开始，尝试跳到 2^k 祖先，如果跳到的节点 next_node 满足条件，就跳过去（这样 candidate2 就变浅了），然后继续找更浅的满足条件的节点。最后 candidate2 就是最浅的满足条件的节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，这个循环的正确性依赖于：如果 next_node 满足条件，那么我们就跳，因为我们要找最浅的满足条件的节点。所以，我们跳到一个满足条件的节点后，继续在它的祖先中找是否还有更浅的满足条件的节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，有可能存在多个满足条件的节点，我们要最浅的那个。所以这个循环可以找到。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，如果 next_node 不满足条件，我们就不跳，继续尝试更小的 k？不对，我们并没有跳过这个 next_node，而是继续用当前的 candidate2 尝试跳更小的步数。所以，最后 candidate2 是满足条件的最浅的节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，算法完成。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们还需要注意：在 u-&gt;lca 段，如果 u==lca，那么 depth[u]==depth[lca]，所以循环中 next_node 的深度必须&gt;=depth[lca]（即允许跳到 lca），但是 u-&gt;lca 的累积权重=0（因为 u-&gt;lca 为 0），所以 0&lt;total_half（因为 total&gt;0），所以 current1 会跳到 lca（因为 dist[u]-dist[lca]=0&lt;total_half，所以 current1=lca），然后进入 lca-&gt;v 段。所以正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另外，在 u-&gt;lca 段，如果 u 就是 lca，那么 u-&gt;lca 段就是 0 权重，所以中位节点一定在 lca-&gt;v 段。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>同理，如果 v==lca，那么 u-&gt;lca 段的累积权重=dist[u]-dist[lca]（&gt;0），如果&gt;=total_half，则返回 u-&gt;lca 段的一个节点；否则进入 lca-&gt;v 段，但是 lca-&gt;v 段只有 lca（因为 v==lca），但是我们在 lca-&gt;v 段排除了 lca（深度&lt;=depth[lca]的节点都排除），所以 lca-&gt;v 段没有节点？但此时 total= (u-&gt;lca)+(lca-&gt;v) = (u-&gt;lca)+0 = dist[u]-dist[lca] = total，而 total_half = (dist[u]-dist[lca])/2。而 u-&gt;lca 段的累积权重=dist[u]-dist[lca] = total，已经&gt;=total_half，所以不会进入 lca-&gt;v 段。所以这种情况在 u-&gt;lca 段就处理了。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，边界情况都覆盖了。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，在 u-&gt;lca 段，如果 current1 跳到了 lca，那么 current1==lca，然后进入 lca-&gt;v 段。在 lca-&gt;v 段，我们循环中要求 next_node 的深度&gt;depth[lca]（即&gt;=depth[lca]+1）。但是，如果 v==lca，那么 lca-&gt;v 段为空，所以不会进入 lca-&gt;v 段的循环？但是，在 u-&gt;lca 段已经判断了，所以不会进入 lca-&gt;v 段。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们只需要处理 u!=v 的情况。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，在 lca-&gt;v 段，如果 v==lca，那么 v 的深度等于 lca 的深度，所以循环中 next_node 的深度必须&gt;depth[lca]，而 v 的父节点的深度&lt;depth[v]=depth[lca]，所以不会进入循环，所以 candidate2 还是 v（初始值）。然后我们返回 v。但是，v==lca，而 lca-&gt;v 段不包括 lca，所以 v 不应该被考虑？但实际上，v 在路径上，而且从 u-&gt;v 的累积权重=total&gt;=total_half，所以 v 满足条件。但是，v 是不是第一个满足条件的节点？在 u-&gt;lca 段，我们已经判断了 u-&gt;lca 段（包括 lca）都不满足条件，然后我们进入 lca-&gt;v 段，而 v 是 lca-&gt;v 段的唯一节点？不，lca-&gt;v 段不包括 lca，所以如果 v==lca，那么 lca-&gt;v 段为空。所以这种情况不可能发生，因为 v==lca 时，u-&gt;lca 段已经处理了（并且已经返回了）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，不会出现 v==lca 且进入 lca-&gt;v 段的情况。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，代码实现：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 预处理：建图，计算 depth, dist, parent 数组（0 号节点为根，depth[0]=0, dist[0]=0，parent[0][0]=-1（表示不存在））</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 实现 LCA 函数（用倍增法）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 对于每个查询，按上述步骤计算。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：parent 数组的第二维是节点，第一维是幂次。通常我们定义 parent[k][i]表示节点 i 的 2^k 级祖先。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们设定 max_log = 17 (因为 2^17&gt;10^5，因为 n&lt;=10^5)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，在 lca-&gt;v 段的循环中，我们写的是：</span></span>
<span class="line"><span>for k from max_log down to 0:</span></span>
<span class="line"><span>next_node = parent[k][candidate2]</span></span>
<span class="line"><span>if next_node == -1 || depth[next_node] &lt;= depth[lca]: // 注意：深度&lt;=depth[lca]都不行，因为 lca-&gt;v 段不包括 lca</span></span>
<span class="line"><span>continue</span></span>
<span class="line"><span>if dist[u] + dist[next_node] - 2 \\* dist[lca] &gt;= total_half:</span></span>
<span class="line"><span>candidate2 = next_node</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这里，当条件成立时，我们就跳到 next_node，因为 next_node 更浅，而且满足条件，所以我们要找更浅的满足条件的节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，这个循环结束后，candidate2 是满足条件的最浅的节点，也就是第一个满足条件的节点（在 lca-&gt;v 段）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，我们是否应该找深度最小的满足条件的节点？是的，因为深度最小（在 lca-&gt;v 段）的节点离 lca 最近，也就是路径上从 lca 出发的第一个节点（如果它满足条件）或更后面的节点（如果它不满足，则继续向后找）。但是，由于从 lca 出发，路径上节点的深度是递增的，而满足条件的第一个节点就是深度最小的满足条件的节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，返回 candidate2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，在 u-&gt;lca 段，我们返回的是 parent[current1][0]，这个节点可能是 lca（如果 current1 是 lca 的孩子）？是的，这是允许的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最后，注意：在 u-&gt;lca 段，如果 current1 的父节点不存在怎么办？但是，由于 current1 的深度&gt;depth[lca]（至少为 depth[lca]+1），所以父节点深度&gt;=depth[lca]（至少为 depth[lca]），而 lca 的深度为 depth[lca]，所以父节点一定存在（因为根节点 0 的深度为 0，而 depth[lca]&gt;=0，所以当 depth[lca]=0 时，父节点为 0 的父节点？但是 0 是根，没有父节点）。所以，当 lca 为 0 时，如果 current1 的深度为 1，那么父节点就是 0（存在）。所以没有问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，如果 lca 为 0，且 current1 为 0？不可能，因为 current1 的深度&gt;=depth[lca]=0，而且 current1!=lca（0）时，我们才取父节点。如果 current1==lca（0），那么进入 lca-&gt;v 段。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，我们不需要担心父节点不存在。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，在 lca-&gt;v 段，我们循环中要求 next_node 的深度&gt;depth[lca]，所以 next_node 的父节点不会不存在（因为深度&gt;0）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，代码实现：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int max_log = (int)(Math.log(n) / Math.log(2)) + 1; // 或者直接设为 17</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，n 最大 10^5，2^17=131072&gt;10^5，所以 max_log=17。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：在倍增法中，我们通常用：</span></span>
<span class="line"><span>parent[0][i] 存储直接父节点（通过 DFS 得到）</span></span>
<span class="line"><span>for k=1 to max_log:</span></span>
<span class="line"><span>for i=0 to n-1:</span></span>
<span class="line"><span>if parent[k-1][i] != -1:</span></span>
<span class="line"><span>parent[k][i] = parent[k-1] parent[k-1][i] ]</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>parent[k][i] = -1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后，LCA 和查询中的跳转都用这个数组。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，在查询中，我们可能频繁访问 parent[k][i]，所以需要提前预处理。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由于查询次数 10^5，每个查询最多跳 max_log 次（17 次），所以总操作数 170 万，可以接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最后，注意：总权重 total 可能很大，所以 total_half 用 double，比较时注意精度？题目中权重是整数，total 是整数，total_half 可能是整数也可能是半整数。所以用 double 比较是安全的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，为了避免浮点精度问题，我们可以用整数比较：累积权重&gt;= (total+1)/2 ？但是题目要求&gt;=一半，所以用浮点数也可以，因为整数和半整数在 double 中都可以精确表示。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，我们使用 double。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，还有一种避免浮点数的方法：因为条件是：2*(累积权重) &gt;= total</span></span>
<span class="line"><span>在 u-&gt;lca 段：2*(dist[u]-dist[x]) &gt;= total</span></span>
<span class="line"><span>在 lca-&gt;v 段：2*(dist[u]+dist[x]-2*dist[lca]) &gt;= total</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这样可以用整数比较。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，total 可能为奇数，所以 2*(累积权重)可能是偶数，而 total 是奇数，所以条件等价于：累积权重 &gt;= ceil(total/2) ? 不对，题目要求是&gt;=一半，所以用整数比较：</span></span>
<span class="line"><span>2*(累积权重) &gt;= total 就等价于 累积权重 &gt;= total/2（在数学上），所以可以。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们可以避免浮点数，使用整数乘法比较。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，在代码中，我们可以用：</span></span>
<span class="line"><span>long half_total = total; // 但是，我们不是用 half_total，而是用 2\\*累积权重和 total 比较</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 u-&gt;lca 段：条件：2*(dist[u]-dist[x]) &gt;= total</span></span>
<span class="line"><span>在 lca-&gt;v 段：条件：2*(dist[u]+dist[x]-2\\*dist[lca]) &gt;= total</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，修改条件判断：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 u-&gt;lca 段：</span></span>
<span class="line"><span>if (2 \\* (dist[u] - dist[next_node]) &lt; total) {</span></span>
<span class="line"><span>current1 = next_node;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 lca-&gt;v 段：</span></span>
<span class="line"><span>if (2 _ (dist[u] + dist[next_node] - 2 _ dist[lca]) &gt;= total) {</span></span>
<span class="line"><span>candidate2 = next_node;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这样避免了浮点数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意：累积权重和 total 都可能很大（最大 10^5\\*10^9=10^14），乘以 2 后为 2e14，在 long 范围内（因为 total 最大 2e14，而 long 最大 9e18，所以可以）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，我们用整数比较。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最后，注意：在 u-&gt;lca 段，如果 current1 跳到 lca，那么条件不满足（2\\*(dist[u]-dist[lca]) &lt; total），所以进入 lca-&gt;v 段。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，代码实现如下。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，在 lca-&gt;v 段，我们的循环中，条件成立时我们才跳，所以最后 candidate2 是满足条件的最浅的节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，在 u-&gt;lca 段，我们找到的节点是 parent[current1][0]，这个节点是否一定满足条件？</span></span>
<span class="line"><span>循环结束后，current1 是最后一个不满足条件的节点（即 2*(dist[u]-dist[current1])&lt;total），而父节点 x=parent[current1][0]满足：2*(dist[u]-dist[x])&gt;=total？</span></span>
<span class="line"><span>因为 x=parent[current1][0]，那么 dist[x] = dist[parent[current1][0]] = dist[current1] - weight(current1, x) 不对，注意：dist 数组是从根到节点的距离，所以 dist[x] &lt; dist[current1]（因为 x 是 current1 的父节点）。所以，dist[u]-dist[x] = (dist[u]-dist[current1]) + (dist[current1]-dist[x]) = (dist[u]-dist[current1]) + w (w 是 x-&gt;current1 的边权，即 current1 到父节点 x 的边权）。所以：</span></span>
<span class="line"><span>2*(dist[u]-dist[x]) = 2*( (dist[u]-dist[current1]) + w )</span></span>
<span class="line"><span>而循环中，current1 满足：2*(dist[u]-dist[current1]) &lt; total</span></span>
<span class="line"><span>但是，加上 2*w 后，可能&gt;=total，也可能&lt;total。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      所以，不一定满足？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>举个例子：u 到 lca 的路径上有三个节点：u,a,lca。边权：u-&gt;a=1, a-&gt;lca=2。total=3（整个路径 u-&gt;v，假设 lca-&gt;v 的权重为 0，但这里我们只看 u-&gt;lca 段）。total_half=1.5。</span></span>
<span class="line"><span>在 u-&gt;lca 段，我们要求第一个满足累积权重&gt;=1.5 的节点。</span></span>
<span class="line"><span>从 u 出发：u 的累积权重=0（不满足）</span></span>
<span class="line"><span>然后到 a：累积权重=1（&lt;1.5，不满足）</span></span>
<span class="line"><span>然后到 lca：累积权重=3（&gt;=1.5），所以中位节点是 lca。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      在算法中：</span></span>
<span class="line"><span>          current1初始为u。</span></span>
<span class="line"><span>          k=0: next_node=父节点a，条件：2*(dist[u]-dist[a]) = 2*( (0到u的距离) - (0到a的距离) ) = 2*(?)</span></span>
<span class="line"><span>          注意：dist[u] = 0-&gt;u的权重，假设0到u的路径为0-&gt;...-&gt;u，但这里我们不知道，但我们可以设：</span></span>
<span class="line"><span>                dist[u] = 0-&gt;u = 0-&gt;a + a-&gt;u = dist[a] + w(a,u) = dist[a] + 1</span></span>
<span class="line"><span>                所以，dist[u]-dist[a] = 1</span></span>
<span class="line"><span>                条件：2*1=2 &lt; total=3 -&gt; 满足，所以current1跳到a。</span></span>
<span class="line"><span>          k=0: next_node=父节点lca（a的父节点），条件：2*(dist[u]-dist[lca]) = 2*( (dist[u]-dist[lca]) ) = 2*( (dist[a]+1) - dist[lca] ) = 2*( (dist[lca]-2+1) - dist[lca]) ) = 2*(-1)  负数？不对。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      错误：我们定义的dist数组是从0（根）到节点的距离。所以，如果u=节点u，a=父节点，lca=祖先。</span></span>
<span class="line"><span>          那么，dist[u] = 0-&gt;u = 0-&gt;a + a-&gt;u = dist[a] + 1</span></span>
<span class="line"><span>          dist[lca] = 0-&gt;lca = 0-&gt;a + a-&gt;lca = dist[a] + 2</span></span>
<span class="line"><span>          所以，在u-&gt;lca段，从u到a：权重=1，从a到lca：权重=2。</span></span>
<span class="line"><span>          所以，从u到a的累积权重=1，从u到lca的累积权重=3。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      在u-&gt;a的边权为1，a-&gt;lca的边权为2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      在循环中，当current1=u时，next_node=a，条件：2*(dist[u]-dist[a]) = 2*( (dist[a]+1) - dist[a] ) = 2&gt; total=3? 2&lt;3，所以满足条件（不满足？我们条件是：2*(dist[u]-dist[x])&lt;total 才跳，这里2&lt;3，所以跳，current1=a。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      然后，下一步：current1=a，然后k=0: next_node=lca，条件：2*(dist[u]-dist[lca]) = 2*( (dist[a]+1) - (dist[a]+2) ) = 2*(-1)  -&gt; 负数，负数&lt;total=3，所以跳？但a的父节点lca的深度&gt;=depth[lca]（允许），所以current1=lca。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      循环结束，current1=lca，所以进入lca-&gt;v段？但中位节点应该是lca（在u-&gt;lca段）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      这里出错了：因为a-&gt;lca的边权为2，所以从u到lca的累积权重=1+2=3&gt;=1.5，所以中位节点是lca。但是，我们的算法在u-&gt;lca段结束后，current1=lca，然后因为current1==lca，所以进入lca-&gt;v段，这是错误的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>错误原因：在 u-&gt;lca 段，current1 最后停在 lca（然后因为 current1==lca，所以误以为 u-&gt;lca 段没有满足条件的节点，而进入 lca-&gt;v 段）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>解决方案：在 u-&gt;lca 段，我们不应该让 current1 跳到 lca，因为 lca 是满足条件的节点，但我们是按父节点跳的，所以 current1 停在 lca（最后一个不满足条件的节点是 a，而 a 的父节点 lca 是满足条件的，所以我们应该返回 lca）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们返回的是 parent[current1][0]（即 parent[lca][0]），但 lca 的父节点可能不存在，而且我们要求的是 a 的父节点（即 lca），所以我们应该返回 lca，而不是 lca 的父节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，在 u-&gt;lca 段，我们循环结束后，current1 是最后一个不满足条件的节点，那么第一个满足条件的节点应该是 current1 的父节点（如果存在的话）。但是，如果 current1 已经跳到 lca，那么 lca 是满足条件的节点吗？在循环中，我们判断的是 next_node（即跳到某个节点后，这个节点是否满足条件），而不是 current1。循环结束后，current1 可能停在 lca，但 lca 可能满足条件，也可能不满足条件（在这个例子中，lca 满足条件）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，我们应该在循环结束后，判断 current1 的父节点是否满足条件？但是，我们设计的是：current1 的父节点就是第一个满足条件的节点。但是，如果 current1 跳到 lca，那么父节点就不在 u-&gt;lca 段了（父节点在 lca 上方，不在路径上）。所以，我们应该在循环中避免 current1 跳到 lca。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>修改：在 u-&gt;lca 段的循环中，我们限制：next_node 的深度&gt;=depth[lca]（即可以跳到 lca），但是，如果 next_node 的深度==depth[lca]（即 lca），那么我们也要判断：2\\*(dist[u]-dist[lca])&lt;total 是否成立。如果成立，就跳到 lca；否则，不跳。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后，循环结束后，current1 的父节点（在 u-&gt;lca 段）就是满足条件的节点。但是，如果 current1 跳到 lca，那么说明 lca 是最后一个不满足条件的节点？不对，lca 可能满足条件。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们不如在循环结束后，直接检查 current1 的父节点（如果存在且在路径上）是否满足条件，如果满足，那么就是答案；否则，继续？这样不行，因为我们就设计了一个循环。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Alternatively, we can do: after the loop, the median is the next node of current1 on the path to lca, which is parent[current1][0] (if current1 is not lca). And if current1 is lca, then we go to the lca-&gt;v part.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>But in the example, current1 becomes lca, and then we go to the lca-&gt;v part, but the median should be lca.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>So, we should include the lca in the u-&gt;lca part as a candidate. That is, after the loop in the u-&gt;lca part, if the parent of current1 (which is the next node toward lca) is lca and it is the first node that meets the condition, we should return it.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>However, in the example, when current1 is a ( the child of lca), then parent[a][0] is lca, and 2*(dist[u]-dist[lca]) = 2*3 = 6 &gt;= total=3, so we return lca.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>But in the algorithm, we return parent[current1][0] = parent[a][0] = lca.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>So why did we set current1 to lca in the example? We should not have set current1 to lca.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Let&#39;s re-simulate the example with the correct condition:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      u = u, a, lca. Weights: u-&gt;a=1, a-&gt;lca=2.</span></span>
<span class="line"><span>      dist[u] = dist[a] + 1</span></span>
<span class="line"><span>      dist[a] = dist[lca] - 2   [because a-&gt;lca=2]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      total = 3</span></span>
<span class="line"><span>      In the loop for u-&gt;lca:</span></span>
<span class="line"><span>          current1 = u</span></span>
<span class="line"><span>          k: we only need k=0 (since max_log&gt;=0)</span></span>
<span class="line"><span>          next_node = a (parent[0][u]=a)</span></span>
<span class="line"><span>          Condition: 2*(dist[u]-dist[a]) = 2*(1) = 2 &lt; 3 -&gt; true, so we set current1 = a.</span></span>
<span class="line"><span>          Then k=0 again: next_node = lca (parent[0][a]=lca)</span></span>
<span class="line"><span>          Condition: 2*(dist[u]-dist[lca]) = 2*( (dist[a]+1) - (dist[a]+2) ) = 2*(-1) -&gt; -2 &lt; 3 -&gt; true, so we set current1 = lca.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      Then we check: if current1 != lca -&gt; false, so we go to lca-&gt;v part.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>The issue is that the condition for next_node=lca is true even though the accumulated weight from u to lca is 3, and 2*3=6&gt;=3, but we are using the condition for next_node: 2*(dist[u]-dist[next_node]) = 2*(dist[u]-dist[lca]) = 2*(negative) which is not the accumulated weight from u to next_node.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Why is it negative? Because dist[u] &lt; dist[lca]? But in the tree, if lca is an ancestor of u, then dist[u] should be &gt;= dist[lca] only if the path from 0 to u goes through lca. But in this example, it does: 0-&gt;...-&gt;lca-&gt;a-&gt;u, so dist[u] = dist[lca] + 2 + 1 = dist[lca]+3, not dist[lca] - something.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>So, in the example, we have:</span></span>
<span class="line"><span>dist[lca] = x</span></span>
<span class="line"><span>dist[a] = x+2</span></span>
<span class="line"><span>dist[u] = x+2+1 = x+3</span></span>
<span class="line"><span>Then, for next_node=a: 2*(dist[u]-dist[a]) = 2*((x+3)-(x+2)) = 2*1=2&lt;3 -&gt; true, so current1 becomes a.</span></span>
<span class="line"><span>For next_node=lca: 2*(dist[u]-dist[lca]) = 2*((x+3)-x)=2*3=6&lt;3? -&gt; 6&gt;=3 is false, so the condition for the loop is not true, so we don&#39;t jump to lca.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Therefore, in the example, after the loop, current1=a, not lca. Then, we return parent[a][0]=lca.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>So the mistake was in the calculation of the example: we must ensure that the dist from the root to a node is greater than or equal to the dist to its ancestor.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>In the example, the dist from 0 to u is greater than dist to lca, so the condition for next_node=lca: 2*(dist[u]-dist[lca]) = 6&gt;=3 is false for the loop condition (which is we only jump if &lt; total), and 6&gt;=3 is true for the condition to be a candidate, but we are in the loop for the u-&gt;lca part and we only jump if the condition (2*(dist[u]-dist[next_node]) &lt; total) holds. Here, 6&lt;3 is false, so we don&#39;t jump.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>So the simulation should be:</span></span>
<span class="line"><span>current1=u:</span></span>
<span class="line"><span>next_node = a: condition 2*(dist[u]-dist[a]) = 2&lt;3 -&gt; true, so current1=a.</span></span>
<span class="line"><span>then next_node = lca: condition 2*(dist[u]-dist[lca]) = 6&lt;3 -&gt; false, so we don&#39;t jump.</span></span>
<span class="line"><span>Then the loop ends, current1=a.</span></span>
<span class="line"><span>Then we return parent[a][0]=lca.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This is correct.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Therefore, the algorithm is correct.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Let me test with the example in the problem.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Example1: n=2, edges=[[0,1,7]], queries=[[1,0],[0,1]]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>For [1,0]:</span></span>
<span class="line"><span>u=1, v=0.</span></span>
<span class="line"><span>lca = LCA(1,0)=0.</span></span>
<span class="line"><span>total = dist[1]+dist[0]-2*dist[0] = dist[1] (since dist[0]=0).</span></span>
<span class="line"><span>How to assign dist?</span></span>
<span class="line"><span>We do BFS/DFS from 0:</span></span>
<span class="line"><span>0: dist=0.</span></span>
<span class="line"><span>1: dist=7.</span></span>
<span class="line"><span>total=7.</span></span>
<span class="line"><span>u-&gt;lca: 1-&gt;0, so the path is 1-&gt;0.</span></span>
<span class="line"><span>In the u-&gt;lca part:</span></span>
<span class="line"><span>current1=1.</span></span>
<span class="line"><span>next_node = parent[0][1]=0.</span></span>
<span class="line"><span>Condition: 2*(dist[1]-dist[0]) = 2\\*(7-0)=14 &lt; 7? -&gt; 14&lt;7 is false, so we don&#39;t jump.</span></span>
<span class="line"><span>So current1=1.</span></span>
<span class="line"><span>Then, since current1!=lca? -&gt; lca=0, current1=1!=0, so we return parent[1][0]=0.</span></span>
<span class="line"><span>So ans=0.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>For [0,1]:</span></span>
<span class="line"><span>u=0, v=1.</span></span>
<span class="line"><span>lca=0.</span></span>
<span class="line"><span>total=7.</span></span>
<span class="line"><span>u-&gt;lca: 0-&gt;0 (immediate), so the accumulated weight=0.</span></span>
<span class="line"><span>In the u-&gt;lca part:</span></span>
<span class="line"><span>current1=0.</span></span>
<span class="line"><span>next_node = parent[0][0] = -1 (not exist) or depth&lt;depth[lca] (depth[0]=0, lca=0, so depth of next_node might be -1 (not exist), so skip.</span></span>
<span class="line"><span>Then, we find current1=0, which is lca, so we go to lca-&gt;v part.</span></span>
<span class="line"><span>In the lca-&gt;v part:</span></span>
<span class="line"><span>candidate2=1.</span></span>
<span class="line"><span>next_node = parent[0][1]=0, but depth[0]&lt;=depth[lca] (0&lt;=0), so skip.</span></span>
<span class="line"><span>So candidate2=1.</span></span>
<span class="line"><span>So ans=1.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Example2: [0,1] in the second example: n=3, edges=[[0,1,2],[2,0,4]], queries=[0,1]</span></span>
<span class="line"><span>tree:</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>/ \\\\</span></span>
<span class="line"><span>1 2</span></span>
<span class="line"><span>edges: 0-1 (2), 0-2 (4)</span></span>
<span class="line"><span>dist:</span></span>
<span class="line"><span>dist[0]=0</span></span>
<span class="line"><span>dist[1]=2</span></span>
<span class="line"><span>dist[2]=4</span></span>
<span class="line"><span>query: [0,1] -&gt; u=0, v=1.</span></span>
<span class="line"><span>lca = LCA(0,1)=0.</span></span>
<span class="line"><span>total = dist[0]+dist[1]-2\\*dist[0]=0+2-0=2.</span></span>
<span class="line"><span>u-&gt;lca: 0-&gt;0, so accumulated=0.</span></span>
<span class="line"><span>then go to lca-&gt;v part:</span></span>
<span class="line"><span>candidate2=1.</span></span>
<span class="line"><span>next_node = parent[0][1]=0, depth[0]&lt;=0, so skip.</span></span>
<span class="line"><span>ans=1.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Example2: [2,0]: u=2, v=0.</span></span>
<span class="line"><span>lca=0.</span></span>
<span class="line"><span>total=4.</span></span>
<span class="line"><span>u-&gt;lca: 2-&gt;0.</span></span>
<span class="line"><span>current1=2.</span></span>
<span class="line"><span>next_node=parent[0][2]=0.</span></span>
<span class="line"><span>condition: 2*(dist[2]-dist[0])=2*(4-0)=8&lt;4? false, so don&#39;t jump.</span></span>
<span class="line"><span>current1=2, then since 2!=0, we return parent[2][0]=0.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Example2: [1,2]: u=1, v=2.</span></span>
<span class="line"><span>lca=0.</span></span>
<span class="line"><span>total = dist[1]+dist[2]-2*dist[0]=2+4=6.</span></span>
<span class="line"><span>u-&gt;lca: 1-&gt;0.</span></span>
<span class="line"><span>current1=1.</span></span>
<span class="line"><span>next_node=0 (parent[0][1]=0)</span></span>
<span class="line"><span>condition: 2*(dist[1]-dist[0])=2\\*2=4&lt;6 -&gt; true, so current1=0.</span></span>
<span class="line"><span>then current1==lca, so go to lca-&gt;v part.</span></span>
<span class="line"><span>lca-&gt;v: v=2.</span></span>
<span class="line"><span>candidate2=2.</span></span>
<span class="line"><span>next_node=parent[0][2]=0, depth[0]&lt;=0 -&gt; skip.</span></span>
<span class="line"><span>so ans=2.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Example3: [3,4] in example3:</span></span>
<span class="line"><span>n=5, edges = [[0,1,2],[0,2,5],[1,3,1],[2,4,3]]</span></span>
<span class="line"><span>tree:</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>/ \\\\</span></span>
<span class="line"><span>1 2</span></span>
<span class="line"><span>/ \\\\</span></span>
<span class="line"><span>3 4</span></span>
<span class="line"><span>dist:</span></span>
<span class="line"><span>0:0</span></span>
<span class="line"><span>1:2</span></span>
<span class="line"><span>2:5</span></span>
<span class="line"><span>3:2+1=3</span></span>
<span class="line"><span>4:5+3=8</span></span>
<span class="line"><span>query: [3,4] -&gt; u=3, v=4.</span></span>
<span class="line"><span>lca = 0.</span></span>
<span class="line"><span>total = dist[3]+dist[4]-2*dist[0]=3+8=11.</span></span>
<span class="line"><span>u-&gt;lca: 3-&gt;1-&gt;0.</span></span>
<span class="line"><span>current1=3.</span></span>
<span class="line"><span>next_node=1 (parent[0][3]=1)</span></span>
<span class="line"><span>2*(dist[3]-dist[1])=2*(3-2)=2&lt;11 -&gt; true, so current1=1.</span></span>
<span class="line"><span>next_node=0 (parent[0][1]=0)</span></span>
<span class="line"><span>2*(dist[3]-dist[0])=2*(3-0)=6&lt;11 -&gt; true, so current1=0.</span></span>
<span class="line"><span>then current1==lca, so go to lca-&gt;v part.</span></span>
<span class="line"><span>lca-&gt;v: v=4.</span></span>
<span class="line"><span>candidate2=4.</span></span>
<span class="line"><span>next_node= parent[0][4]=2, depth[2] (which is depth[2]? we need depth array)</span></span>
<span class="line"><span>depth:</span></span>
<span class="line"><span>0:0</span></span>
<span class="line"><span>1:1</span></span>
<span class="line"><span>2:1</span></span>
<span class="line"><span>3:2</span></span>
<span class="line"><span>4:2</span></span>
<span class="line"><span>depth[lca]=0, depth[2]=1&gt;0, so consider.</span></span>
<span class="line"><span>condition: 2*(dist[3]? wait, we use u=3:</span></span>
<span class="line"><span>2*(dist[u] + dist[next_node] - 2*dist[lca]) = 2*(3+5-0)=2*8=16&gt;=11 -&gt; true, so candidate2=2.</span></span>
<span class="line"><span>next_node= parent[1][2] (k=1, but we are in k=0 first? we should from max_log down to 0, and max_log= maybe 2?</span></span>
<span class="line"><span>We do for k=1:</span></span>
<span class="line"><span>next_node = parent[1][2] = parent[0] parent[0][2] ] = parent[0][0] = -1? (assuming parent[0][2]=0, then parent[0][0]=-1), so skip.</span></span>
<span class="line"><span>then k=0: we already did.</span></span>
<span class="line"><span>so candidate2=2.</span></span>
<span class="line"><span>ans=2.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        But the expected answer is 2.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Example3: [1,2]: u=1, v=2.</span></span>
<span class="line"><span>lca=0.</span></span>
<span class="line"><span>total = dist[1]+dist[2]=2+5=7.</span></span>
<span class="line"><span>u-&gt;lca: 1-&gt;0.</span></span>
<span class="line"><span>current1=1.</span></span>
<span class="line"><span>next_node=0: 2*(dist[1]-dist[0])=2*2=4&lt;7 -&gt; true, so current1=0.</span></span>
<span class="line"><span>then go to lca-&gt;v: v=2.</span></span>
<span class="line"><span>candidate2=2.</span></span>
<span class="line"><span>next_node= parent[0][2]=0, depth[0]&lt;=0 -&gt; skip.</span></span>
<span class="line"><span>so ans=2.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>So the algorithm works for the examples.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Implementation details:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      We&#39;ll do:</span></span>
<span class="line"><span>          max_log = 17</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      Precomputation:</span></span>
<span class="line"><span>          depth[0] = 0</span></span>
<span class="line"><span>          dist[0] = 0</span></span>
<span class="line"><span>          parent[0][0] = -1</span></span>
<span class="line"><span>          Use BFS starting from 0.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      For BFS:</span></span>
<span class="line"><span>          Queue: add 0.</span></span>
<span class="line"><span>          while queue not empty:</span></span>
<span class="line"><span>              pop node u</span></span>
<span class="line"><span>              for each neighbor v of u:</span></span>
<span class="line"><span>                  if v is parent (skip)</span></span>
<span class="line"><span>                  else:</span></span>
<span class="line"><span>                      depth[v] = depth[u]+1</span></span>
<span class="line"><span>                      dist[v] = dist[u] + weight(u,v)</span></span>
<span class="line"><span>                      parent[0][v] = u</span></span>
<span class="line"><span>                      then add v to queue.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      Then, for k=1 to max_log:</span></span>
<span class="line"><span>          for i=0 to n-1:</span></span>
<span class="line"><span>              parent[k][i] = (parent[k-1][i] == -1) ? -1 : parent[k-1][ parent[k-1][i] ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      LCA(u,v):</span></span>
<span class="line"><span>          if depth[u] &lt; depth[v]: swap(u,v)</span></span>
<span class="line"><span>          for k from max_log down to 0:</span></span>
<span class="line"><span>              if depth[u] - (1&lt;&lt;k) &gt;= depth[v]:</span></span>
<span class="line"><span>                  u = parent[k][u]</span></span>
<span class="line"><span>          if u==v: return u</span></span>
<span class="line"><span>          for k from max_log down to 0:</span></span>
<span class="line"><span>              if parent[k][u] != parent[k][v]:</span></span>
<span class="line"><span>                  u = parent[k][u]</span></span>
<span class="line"><span>                  v = parent[k][v]</span></span>
<span class="line"><span>          return parent[0][u]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      Then for each query (u,v):</span></span>
<span class="line"><span>          if u==v: ans = u</span></span>
<span class="line"><span>          else:</span></span>
<span class="line"><span>              lca = LCA(u,v)</span></span>
<span class="line"><span>              total = dist[u] + dist[v] - 2 * dist[lca]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>              // u-&gt;lca part</span></span>
<span class="line"><span>              current1 = u</span></span>
<span class="line"><span>              for k from max_log down to 0:</span></span>
<span class="line"><span>                  next_node = parent[k][current1]</span></span>
<span class="line"><span>                  if next_node == -1: continue</span></span>
<span class="line"><span>                  if depth[next_node] &lt; depth[lca]: continue   // not in the path</span></span>
<span class="line"><span>                  // Note: depth[next_node] &gt;= depth[lca]</span></span>
<span class="line"><span>                  if 2 * (dist[u] - dist[next_node]) &lt; total:</span></span>
<span class="line"><span>                      current1 = next_node</span></span>
<span class="line"><span></span></span>
<span class="line"><span>              if current1 != lca:</span></span>
<span class="line"><span>                  ans = parent[0][current1]   // because current1 is the last node that does not meet the condition, so its next node (parent) is the median.</span></span>
<span class="line"><span>              else:</span></span>
<span class="line"><span>                  // lca-&gt;v part</span></span>
<span class="line"><span>                  candidate2 = v</span></span>
<span class="line"><span>                  for k from max_log down to 0:</span></span>
<span class="line"><span>                      next_node = parent[k][candidate2]</span></span>
<span class="line"><span>                      if next_node == -1: continue</span></span>
<span class="line"><span>                      if depth[next_node] &lt;= depth[lca]: continue   // because we only consider nodes below lca (not including lca)</span></span>
<span class="line"><span>                      if 2 * (dist[u] + dist[next_node] - 2 * dist[lca]) &gt;= total:</span></span>
<span class="line"><span>                          candidate2 = next_node</span></span>
<span class="line"><span>                  ans = candidate2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      Add ans to the result array.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Note: In the lca-&gt;v part, we are not stopping at the first meeting condition node by the path order, but we are finding the shallowest node that meets the condition, which is the first node on the path from lca to v.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This should be efficient.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Let&#39;s code accordingly.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>However, note that the tree is undirected, and we built the tree from the edges.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>But the parent array is built with the tree rooted at 0.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We assume the tree is rooted at 0.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We&#39;ll do BFS to avoid recursion depth.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Now, we write the code.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Important: We need to build the graph. Each edge is [u,v,w]. We store for each node: list of {neighbor, weight}.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>For BFS:</span></span>
<span class="line"><span>Let&#39;s use a queue (LinkedList)</span></span>
<span class="line"><span>visited array? Or we can use parent[0] to avoid revisiting.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Steps for BFS:</span></span>
<span class="line"><span>Queue&lt;Integer&gt; queue = new LinkedList&lt;&gt;();</span></span>
<span class="line"><span>boolean[] visited = new boolean[n];</span></span>
<span class="line"><span>queue.offer(0);</span></span>
<span class="line"><span>visited[0] = true;</span></span>
<span class="line"><span>depth[0]=0; dist[0]=0;</span></span>
<span class="line"><span>while (!queue.isEmpty()) {</span></span>
<span class="line"><span>int u = queue.poll();</span></span>
<span class="line"><span>for (int[] edge : graph.get(u)) {</span></span>
<span class="line"><span>int v = edge[0], w = edge[1];</span></span>
<span class="line"><span>if (visited[v]) continue;</span></span>
<span class="line"><span>visited[v]=true;</span></span>
<span class="line"><span>depth[v]=depth[u]+1;</span></span>
<span class="line"><span>dist[v]=dist[u]+w;</span></span>
<span class="line"><span>parent[0][v]=u;</span></span>
<span class="line"><span>queue.offer(v);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>But in the graph, we need to store for each u, the list of (v,w). Since the edge is undirected, when we add an edge (u,v,w), we add v to u&#39;s list and u to v&#39;s list.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>So, we need to build the graph first.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Let&#39;s do:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      List&lt;List&lt;int[]&gt;&gt; graph = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>      for (int i = 0; i &lt; n; i++) graph.add(new ArrayList&lt;&gt;());</span></span>
<span class="line"><span>      for (int[] edge : edges) {</span></span>
<span class="line"><span>          int u = edge[0], v = edge[1], w = edge[2];</span></span>
<span class="line"><span>          graph.get(u).add(new int[]{v, w});</span></span>
<span class="line"><span>          graph.get(v).add(new int[]{u, w});</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>But then in BFS, we don&#39;t know which one is the parent. We avoid the parent by checking visited.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Then, we do the doubling for parent.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Finally, we process the queries.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Time complexity: O((n+q) \\* log(n))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Let&#39;s write the code accordingly.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Note: The parent array is 2D: parent = new int[max_log+1][n];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We initialize parent[0] with the direct parent from BFS.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Then, for k=1 to max_log:</span></span>
<span class="line"><span>for i=0 to i&lt;n; i++:</span></span>
<span class="line"><span>if parent[k-1][i] != -1:</span></span>
<span class="line"><span>parent[k][i] = parent[k-1] parent[k-1][i] ];</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>parent[k][i] = -1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>And then LCA and the query processing.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We&#39;ll do:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      int[] ans = new int[queries.length];</span></span>
<span class="line"><span>      for (int j = 0; j &lt; queries.length; j++) {</span></span>
<span class="line"><span>          int u = queries[j][0], v = queries[j][1];</span></span>
<span class="line"><span>          if (u == v) {</span></span>
<span class="line"><span>              ans[j] = u;</span></span>
<span class="line"><span>              continue;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          int lca = lca(u, v, depth, parent, max_log);</span></span>
<span class="line"><span>          long total = dist[u] + dist[v] - 2 * dist[lca];</span></span>
<span class="line"><span>          // u-&gt;lca part</span></span>
<span class="line"><span>          int current1 = u;</span></span>
<span class="line"><span>          for (int k = max_log; k &gt;= 0; k--) {</span></span>
<span class="line"><span>              int next_node = parent[k][current1];</span></span>
<span class="line"><span>              if (next_node == -1) continue;</span></span>
<span class="line"><span>              if (depth[next_node] &lt; depth[lca]) continue;</span></span>
<span class="line"><span>              // The condition: 2*(dist[u]-dist[next_node]) &lt; total</span></span>
<span class="line"><span>              if (2 * (dist[u] - dist[next_node]) &lt; total) {</span></span>
<span class="line"><span>                  current1 = next_node;</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          if (current1 != lca) {</span></span>
<span class="line"><span>              ans[j] = parent[0][current1];</span></span>
<span class="line"><span>          } else {</span></span>
<span class="line"><span>              int candidate2 = v;</span></span>
<span class="line"><span>              for (int k = max_log; k &gt;= 0; k--) {</span></span>
<span class="line"><span>                  int next_node = parent[k][candidate2];</span></span>
<span class="line"><span>                  if (next_node == -1) continue;</span></span>
<span class="line"><span>                  if (depth[next_node] &lt;= depth[lca]) continue; // Note: we use &lt;= to exclude lca and above</span></span>
<span class="line"><span>                  // Condition: 2*(dist[u]+dist[next_node]-2*dist[lca]) &gt;= total</span></span>
<span class="line"><span>                  if (2 * (dist[u] + dist[next_node] - 2 * dist[lca]) &gt;= total) {</span></span>
<span class="line"><span>                      candidate2 = next_node;</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>              ans[j] = candidate2;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Return ans.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Let me test with the example [0,1] in example1: u=0, v=1 -&gt; lca=0, then in u-&gt;lca part, we have current1=0, and then we go to lca-&gt;v part. Then for candidate2=1, we try next_node=parent[0][1]=0, but depth[0]&lt;=0 -&gt; skip, so candidate2=1.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>It works.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>But note: in the u-&gt;lca part, the condition uses \\&quot;dist[u]-dist[next_node]\\&quot;. This is the accumulated weight from u to next_node only if next_node is an ancestor of u (and in the u-&gt;lca path, it is). And we have ensured that next_node is in the path (depth&gt;=lca).</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Similarly, in the lca-&gt;v part, the condition uses dist[u]+dist[next_node]-2\\*dist[lca], which is the accumulated weight from u to next_node (via lca).</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We use long for total and dist.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We assume:</span></span>
<span class="line"><span>dist is long[] (because weights up to 10^9, and n=1e5, so total up to 10^14)</span></span>
<span class="line"><span>total is long.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>So, we need to compute with long.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Implementation:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      We&#39;ll use:</span></span>
<span class="line"><span>          long[] dist = new long[n];</span></span>
<span class="line"><span>          Then in BFS: dist[v] = dist[u] + w;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>And in the conditions, we multiply by 2 and compare as long.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Let me write the code accordingly.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We&#39;ll do:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      int max_log = 17; // since 2^17&gt;1e5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Note: The depth array is int[], and the parent array is int[][].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We&#39;ll do BFS to compute depth and dist.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Then, we initialize parent[0] from BFS.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Then, we do doubling.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Then, we write the LCA function.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Then, process queries.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Let&#39;s code accordingly.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>But note: In the condition for the lca-&gt;v part, we have:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (2 * (dist[u] + dist[next_node] - 2 * dist[lca]) &gt;= total)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>But dist[u], dist[next_node], dist[lca] are long, and total is long, so it&#39;s fine.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We&#39;ll run the examples to be sure.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We&#39;ll submit.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>However, note: In the tree, the path from u to lca might not be from u to parent[u] to parent[parent[u]] and so on. But our parent array is built from the BFS tree (rooted at 0), and for any two nodes, the LCA and the parent pointers are defined for the whole tree.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>It should be correct.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Let me write the LCA function carefully.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LCA function:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      public int lca(int u, int v, int[] depth, int[][] parent, int max_log) {</span></span>
<span class="line"><span>          if (depth[u] &lt; depth[v]) {</span></span>
<span class="line"><span>              int temp = u;</span></span>
<span class="line"><span>              u = v;</span></span>
<span class="line"><span>              v = temp;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          // lift u to the depth of v</span></span>
<span class="line"><span>          for (int k = max_log; k &gt;= 0; k--) {</span></span>
<span class="line"><span>              if (depth[u] - (1 &lt;&lt; k) &gt;= depth[v]) {</span></span>
<span class="line"><span>                  u = parent[k][u];</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          if (u == v) return u;</span></span>
<span class="line"><span>          for (int k = max_log; k &gt;= 0; k--) {</span></span>
<span class="line"><span>              if (parent[k][u] != parent[k][v]) {</span></span>
<span class="line"><span>                  u = parent[k][u];</span></span>
<span class="line"><span>                  v = parent[k][v];</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          return parent[0][u];</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>But note: When lifting, we check if the depth after lifting by 2^k is &gt;= depth[v]. We then update u.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>And after that, we do the same lift for both until they are the same.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This is standard.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Now, we write the entire solution.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Note: We need to initialize parent[0] for all nodes, and for the root, parent[0][0] = -1.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We&#39;ll do:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // Step 1: build graph</span></span>
<span class="line"><span>      List&lt;List&lt;int[]&gt;&gt; graph = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>      for (int i = 0; i &lt; n; i++) graph.add(new ArrayList&lt;&gt;());</span></span>
<span class="line"><span>      for (int[] edge : edges) {</span></span>
<span class="line"><span>          int u = edge[0], v = edge[1], w = edge[2];</span></span>
<span class="line"><span>          graph.get(u).add(new int[]{v, w});</span></span>
<span class="line"><span>          graph.get(v).add(new int[]{u, w});</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // Step 2: BFS from 0</span></span>
<span class="line"><span>      int[] depth = new int[n];</span></span>
<span class="line"><span>      long[] dist = new long[n];</span></span>
<span class="line"><span>      int[][] parent = new int[max_log+1][n]; // max_log+1=18</span></span>
<span class="line"><span>      for (int k = 0; k &lt;= max_log; k++) Arrays.fill(parent[k], -1);</span></span>
<span class="line"><span>      boolean[] visited = new boolean[n];</span></span>
<span class="line"><span>      Queue&lt;Integer&gt; queue = new LinkedList&lt;&gt;();</span></span>
<span class="line"><span>      queue.offer(0);</span></span>
<span class="line"><span>      visited[0] = true;</span></span>
<span class="line"><span>      depth[0] = 0;</span></span>
<span class="line"><span>      dist[0] = 0;</span></span>
<span class="line"><span>      while (!queue.isEmpty()) {</span></span>
<span class="line"><span>          int u = queue.poll();</span></span>
<span class="line"><span>          for (int[] edge : graph.get(u)) {</span></span>
<span class="line"><span>              int v = edge[0], w = edge[1];</span></span>
<span class="line"><span>              if (visited[v]) continue;</span></span>
<span class="line"><span>              visited[v] = true;</span></span>
<span class="line"><span>              depth[v] = depth[u] + 1;</span></span>
<span class="line"><span>              dist[v] = dist[u] + w;</span></span>
<span class="line"><span>              parent[0][v] = u;</span></span>
<span class="line"><span>              queue.offer(v);</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // Step 3: doubling for parent</span></span>
<span class="line"><span>      for (int k = 1; k &lt;= max_log; k++) {</span></span>
<span class="line"><span>          for (int i = 0; i &lt; n; i++) {</span></span>
<span class="line"><span>              if (parent[k-1][i] != -1) {</span></span>
<span class="line"><span>                  parent[k][i] = parent[k-1][ parent[k-1][i] ];</span></span>
<span class="line"><span>              } else {</span></span>
<span class="line"><span>                  parent[k][i] = -1;</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // Step 4: process queries</span></span>
<span class="line"><span>      int q = queries.length;</span></span>
<span class="line"><span>      int[] ans = new int[q];</span></span>
<span class="line"><span>      for (int j = 0; j &lt; q; j++) {</span></span>
<span class="line"><span>          int u = queries[j][0], v = queries[j][1];</span></span>
<span class="line"><span>          if (u == v) {</span></span>
<span class="line"><span>              ans[j] = u;</span></span>
<span class="line"><span>              continue;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          int lca = lca(u, v, depth, parent, max_log);</span></span>
<span class="line"><span>          long total = dist[u] + dist[v] - 2 * dist[lca];</span></span>
<span class="line"><span>          int current1 = u;</span></span>
<span class="line"><span>          for (int k = max_log; k &gt;= 0; k--) {</span></span>
<span class="line"><span>              int next_node = parent[k][current1];</span></span>
<span class="line"><span>              if (next_node == -1) continue;</span></span>
<span class="line"><span>              if (depth[next_node] &lt; depth[lca]) continue;</span></span>
<span class="line"><span>              if (2 * (dist[u] - dist[next_node]) &lt; total) {</span></span>
<span class="line"><span>                  current1 = next_node;</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          if (current1 != lca) {</span></span>
<span class="line"><span>              ans[j] = parent[0][current1];</span></span>
<span class="line"><span>          } else {</span></span>
<span class="line"><span>              int candidate2 = v;</span></span>
<span class="line"><span>              for (int k = max_log; k &gt;= 0; k--) {</span></span>
<span class="line"><span>                  int next_node = parent[k][candidate2];</span></span>
<span class="line"><span>                  if (next_node == -1) continue;</span></span>
<span class="line"><span>                  if (depth[next_node] &lt;= depth[lca]) continue;</span></span>
<span class="line"><span>                  if (2 * (dist[u] + dist[next_node] - 2 * dist[lca]) &gt;= total) {</span></span>
<span class="line"><span>                      candidate2 = next_node;</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>              ans[j] = candidate2;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      return ans;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We need to write the lca function as a helper.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>But note: the lca function uses the parent array and depth.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Let&#39;s write a helper method.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>However, we are in a class, so we can write a private method.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>But note: the lca method might be called many times (10^5 times), so we make sure it&#39;s efficient.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We&#39;ll implement:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      private int lca(int u, int v, int[] depth, int[][] parent, int max_log) {</span></span>
<span class="line"><span>          if (depth[u] &lt; depth[v]) {</span></span>
<span class="line"><span>              int t = u;</span></span>
<span class="line"><span>              u = v;</span></span>
<span class="line"><span>              v = t;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          // lift u up to the depth of v</span></span>
<span class="line"><span>          for (int k = max_log; k &gt;= 0; k--) {</span></span>
<span class="line"><span>              if (depth[u] - (1 &lt;&lt; k) &gt;= depth[v]) {</span></span>
<span class="line"><span>                  u = parent[k][u];</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          if (u == v) return u;</span></span>
<span class="line"><span>          for (int k = max_log; k &gt;= 0; k--) {</span></span>
<span class="line"><span>              if (parent[k][u] != parent[k][v]) {</span></span>
<span class="line"><span>                  u = parent[k][u];</span></span>
<span class="line"><span>                  v = parent[k][v];</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          return parent[0][u];</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>But note: we may use the same max_log as before (17).</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Now, we run the examples.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We have already tested with the examples, so we hope it&#39;s correct.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We&#39;ll submit.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>However, we should note: the condition in the u-&gt;lca part is strict: if the accumulated weight is &lt; total, then we jump. And we are using integer arithmetic.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>It&#39;s correct.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Let&#39;s hope it passes.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Note: The problem says the tree has n-1 edges, and nodes from 0 to n-1.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We assume the input is valid.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We&#39;ll run with the provided examples.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We&#39;ll do one more example: n=3, edges=[[0,1,2],[0,2,4]], query=[0,1]: we expect 1.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>For [0,1]:</span></span>
<span class="line"><span>u=0, v=1, lca=0.</span></span>
<span class="line"><span>total = dist[0]+dist[1]-2\\*dist[0]=0+2-0=2.</span></span>
<span class="line"><span>u-&gt;lca: 0-&gt;0, so current1=0.</span></span>
<span class="line"><span>then we go to lca-&gt;v part: candidate2=1.</span></span>
<span class="line"><span>for k from 17 down to 0:</span></span>
<span class="line"><span>next_node = parent[k][1]</span></span>
<span class="line"><span>k=17: parent[17][1] = -1? skip.</span></span>
<span class="line"><span>... until k=0: parent[0][1]=0, depth[0] (0) &lt;= depth[lca] (0) -&gt; skip.</span></span>
<span class="line"><span>so candidate2=1.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>So ans=1.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Correct.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We&#39;ll submit the solution.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Note: The constraints are high, so we use efficient BFS and loops.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>The BFS is O(n), the doubling is O(n\\*log(n)), and each query is O(log(n)).</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We hope it runs in time.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Let me test with n=100000 and chain tree, but in Java, 100000*log(100000) is about 10^5*17=1.7e6, which is acceptable.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>So, we write the code accordingly.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>One more thing: the parent[0] for the root is -1, and we handle -1 in the loops.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We are ready.&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>为了高效解决这个问题，我们需要在无向带权树中快速处理多个查询，每个查询要求找到从节点 <code>u</code> 到节点 <code>v</code> 路径上的带权中位节点。带权中位节点定义为路径上第一个节点 <code>x</code>，使得从 <code>u</code> 到 <code>x</code> 的边权之和大于等于路径总权值和的一半。</p><h3 id="方法思路" tabindex="-1"><a class="header-anchor" href="#方法思路"><span>方法思路</span></a></h3><ol><li><p><strong>预处理</strong>：</p><ul><li><strong>构建树结构</strong>：使用邻接表存储树。</li><li><strong>BFS 遍历</strong>：从根节点 0 开始进行 BFS，计算每个节点的深度（<code>depth</code>数组）和到根节点的距离（<code>dist</code>数组），并记录每个节点的直接父节点（<code>parent[0]</code>数组）。</li><li><strong>倍增法预处理</strong>：使用动态规划预处理每个节点的 \\(2^k\\) 级祖先（<code>parent</code>数组），以便快速进行树上跳转。</li></ul></li><li><p><strong>LCA（最近公共祖先）查询</strong>：</p><ul><li>对于每对查询节点 <code>(u, v)</code>，使用倍增法快速找到它们的最近公共祖先 <code>lca</code>，这是分解路径的关键。</li></ul></li><li><p><strong>处理每个查询</strong>：</p><ul><li><strong>计算路径总权值和</strong>：利用 <code>dist</code> 数组和 <code>lca</code> 计算路径总权值 <code>total = dist[u] + dist[v] - 2 * dist[lca]</code>。</li><li><strong>查找带权中位节点</strong>： <ul><li><strong>在 <code>u</code> 到 <code>lca</code> 的路径上查找</strong>：从 <code>u</code> 开始，使用倍增法向上跳转，找到第一个节点 <code>x</code> 满足 \\(2 \\times (\\text{dist}[u] - \\text{dist}[x]) \\geq \\text{total}\\)。若找到，则返回 <code>x</code> 的父节点（即第一个满足条件的节点）。</li><li><strong>在 <code>lca</code> 到 <code>v</code> 的路径上查找</strong>：若在 <code>u</code> 到 <code>lca</code> 路径上未找到，则在 <code>lca</code> 到 <code>v</code> 的路径上查找。从 <code>v</code> 开始，使用倍增法向上跳转，找到最浅的节点 <code>y</code> 满足 \\(2 \\times (\\text{dist}[u] + \\text{dist}[y] - 2 \\times \\text{dist}[\\text{lca}]) \\geq \\text{total}\\)。</li></ul></li></ul></li></ol><h3 id="解决代码" tabindex="-1"><a class="header-anchor" href="#解决代码"><span>解决代码</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> java.util.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Solution</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> lca</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> u</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> v</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">depth</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[][] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">parent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> max_log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (depth[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> depth[v]) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> temp</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> u;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            u </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> v;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            v </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> temp;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> k</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> max_log; k </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; k--) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (depth[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> k) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> depth[v]) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                u </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> parent[k][u];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (u </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> v) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> u;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> k</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> max_log; k </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; k--) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (parent[k][u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> parent[k][v]) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                u </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> parent[k][u];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                v </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> parent[k][v];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> parent[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">][u];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">[] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">findMedian</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[][] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">edges</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[][] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">queries</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> max_log</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 17</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[]&gt;&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">graph</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n; i++) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            graph</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;());</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">edge</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> edges) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> u</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> edge[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">], v </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> edge[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">], w </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> edge[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            graph</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(u).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[]{v, w});</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            graph</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(v).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[]{u, w});</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">depth</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[n];</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        long</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dist</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> long</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[n];</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[][] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">parent</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[max_log </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">][n];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> k</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; k </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> max_log; k++) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            Arrays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">fill</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(parent[k], </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        boolean</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">visited</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> boolean</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[n];</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Queue</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">queue</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> LinkedList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        queue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">offer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        visited[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        depth[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        dist[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">queue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">isEmpty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> u</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> queue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">poll</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">edge</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> graph</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(u)) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> v</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> edge[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">], w </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> edge[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (visited[v]) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">continue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                visited[v] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                depth[v] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> depth[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                dist[v] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> dist[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> w;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                parent[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">][v] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> u;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                queue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">offer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(v);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> k</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; k </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> max_log; k++) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n; i++) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (parent[k </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">][i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    parent[k][i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> parent[k </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">][parent[k </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">][i]];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    parent[k][i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> q</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> queries</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ans</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[q];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> j</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> q; j++) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> u</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> queries[j][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">], v </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> queries[j][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (u </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> v) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                ans[j] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> u;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                continue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> lcaNode</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> lca</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(u, v, depth, parent, max_log);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            long</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> total</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> dist[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> dist[v] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> dist[lcaNode];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> current1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> u;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> k</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> max_log; k </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; k--) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> next_node</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> parent[k][current1];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (next_node </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">continue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (depth[next_node] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> depth[lcaNode]) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">continue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (dist[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> dist[next_node]) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> total) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    current1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> next_node;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (current1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> lcaNode) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                ans[j] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> parent[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">][current1];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> candidate2</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> v;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> k</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> max_log; k </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; k--) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> next_node</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> parent[k][candidate2];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (next_node </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">continue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (depth[next_node] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> depth[lcaNode]) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">continue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (dist[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> dist[next_node] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> dist[lcaNode]) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> total) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                        candidate2 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> next_node;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                ans[j] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> candidate2;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ans;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码解释" tabindex="-1"><a class="header-anchor" href="#代码解释"><span>代码解释</span></a></h3><ol><li><p><strong>预处理</strong>：</p><ul><li><strong>构建邻接表</strong>：将输入的边存储为邻接表，方便遍历树。</li><li><strong>BFS 遍历</strong>：从根节点 0 开始，计算每个节点的深度（<code>depth</code>）和到根节点的距离（<code>dist</code>），并记录每个节点的直接父节点（<code>parent[0]</code>）。</li><li><strong>倍增法预处理</strong>：通过动态规划计算每个节点的 \\(2^k\\) 级祖先，存储在 <code>parent</code> 数组中。</li></ul></li><li><p><strong>LCA 查询</strong>：</p><ul><li>使用倍增法快速找到任意两个节点的最近公共祖先（<code>lca</code>）。首先将较深的节点上提到与较浅节点同一深度，然后同时上提直到找到公共祖先。</li></ul></li><li><p><strong>处理查询</strong>：</p><ul><li>对于每个查询 <code>(u, v)</code>： <ul><li>如果 <code>u == v</code>，直接返回 <code>u</code>。</li><li>计算路径总权值 <code>total</code>。</li><li>在 <code>u</code> 到 <code>lca</code> 的路径上，使用倍增法查找第一个满足条件的节点。若未找到，则在 <code>lca</code> 到 <code>v</code> 的路径上查找最浅的满足条件的节点。</li></ul></li><li>返回带权中位节点的编号。</li></ul></li></ol><p>这种方法确保了每个查询的处理时间复杂度为 \\(O(\\log n)\\)，适用于大规模输入。</p>`,14)]))}const v=n(e,[["render",p],["__file","t4.html.vue"]]),r=JSON.parse('{"path":"/module_ai/weekly-contest-454/t4.html","title":"无向带权树带权中位节点查询","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"USER","slug":"user","link":"#user","children":[]},{"level":2,"title":"ASSISTANT","slug":"assistant","link":"#assistant","children":[{"level":3,"title":"方法思路","slug":"方法思路","link":"#方法思路","children":[]},{"level":3,"title":"解决代码","slug":"解决代码","link":"#解决代码","children":[]},{"level":3,"title":"代码解释","slug":"代码解释","link":"#代码解释","children":[]}]}],"git":{"createdTime":1751299769000,"updatedTime":1751299769000,"contributors":[{"name":"gdut-yy","username":"gdut-yy","email":"gdut_yy@163.com","commits":1}]},"readingTime":{"minutes":69.01,"words":20704},"filePathRelative":"module_ai/weekly-contest-454/t4.md","localizedDate":"2025年7月1日"}');export{v as comp,r as data};
