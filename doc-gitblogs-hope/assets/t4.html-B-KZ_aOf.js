import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a,o as l}from"./app-D75trwlE.js";const p={};function e(t,s){return l(),i("div",null,s[0]||(s[0]=[a(`<h1 id="树路径异或和查询" tabindex="-1"><a class="header-anchor" href="#树路径异或和查询"><span>树路径异或和查询</span></a></h1><ul><li>会话记录：<a href="https://yuanbao.tencent.com/chat/naQivTmsDa/8b8744d9-0e6e-452e-8c89-518d0311cbe3" target="_blank" rel="noopener noreferrer">https://yuanbao.tencent.com/chat/naQivTmsDa/8b8744d9-0e6e-452e-8c89-518d0311cbe3</a></li><li>无修改 AC。</li></ul><h2 id="user" tabindex="-1"><a class="header-anchor" href="#user"><span>USER</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>给定一棵以节点 0 为根的无向树，带有 n 个节点，按 0 到 n - 1 编号。每个节点 i 有一个整数值 vals[i]，并且它的父节点通过 par[i] 给出。</span></span>
<span class="line"><span>从根节点 0 到节点 u 的 路径异或和 定义为从根节点到节点 u 的路径上所有节点 i 的 vals[i] 的按位异或，包括节点 u。</span></span>
<span class="line"><span>给定一个 2 维整数数组 queries，其中 queries[j] = [uj, kj]。对于每个查询，找到以 uj 为根的子树的所有节点中，第 kj 小 的 不同 路径异或和。如果子树中 不同 的异或路径和少于 kj，答案为 -1。</span></span>
<span class="line"><span>返回一个整数数组，其中第 j 个元素是第 j 个查询的答案。</span></span>
<span class="line"><span>在有根树中，节点 v 的子树包括 v 以及所有经过 v 到达根节点路径上的节点，即 v 及其后代节点。</span></span>
<span class="line"><span>示例 1：</span></span>
<span class="line"><span>输入：par = [-1,0,0], vals = [1,1,1], queries = [[0,1],[0,2],[0,3]]</span></span>
<span class="line"><span>输出：[0,1,-1]</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>路径异或值：</span></span>
<span class="line"><span>节点 0：1</span></span>
<span class="line"><span>节点 1：1 XOR 1 = 0</span></span>
<span class="line"><span>节点 2：1 XOR 1 = 0</span></span>
<span class="line"><span>0 的子树：以节点 0 为根的子树包括节点 [0, 1, 2]，路径异或值为 [1, 0, 0]。不同的异或值为 [0, 1]。</span></span>
<span class="line"><span>查询：</span></span>
<span class="line"><span>queries[0] = [0, 1]：节点 0 的子树中第 1 小的不同路径异或值为 0。</span></span>
<span class="line"><span>queries[1] = [0, 2]：节点 0 的子树中第 2 小的不同路径异或值为 1。</span></span>
<span class="line"><span>queries[2] = [0, 3]：由于子树中只有两个不同路径异或值，答案为 -1。</span></span>
<span class="line"><span>输出：[0, 1, -1]</span></span>
<span class="line"><span>示例 2：</span></span>
<span class="line"><span>输入：par = [-1,0,1], vals = [5,2,7], queries = [[0,1],[1,2],[1,3],[2,1]]</span></span>
<span class="line"><span>输出：[0,7,-1,0]</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>路径异或值：</span></span>
<span class="line"><span>节点 0：5</span></span>
<span class="line"><span>节点 1：5 XOR 2 = 7</span></span>
<span class="line"><span>节点 2：5 XOR 2 XOR 7 = 0</span></span>
<span class="line"><span>子树与不同路径异或值：</span></span>
<span class="line"><span>0 的子树：以节点 0 为根的子树包含节点 [0, 1, 2]，路径异或值为 [5, 7, 0]。不同的异或值为 [0, 5, 7]。</span></span>
<span class="line"><span>1 的子树：以节点 1 为根的子树包含节点 [1, 2]，路径异或值为 [7, 0]。不同的异或值为 [0, 7]。</span></span>
<span class="line"><span>2 的子树：以节点 2 为根的子树包含节点 [2]，路径异或值为 [0]。不同的异或值为 [0]。</span></span>
<span class="line"><span>查询：</span></span>
<span class="line"><span>queries[0] = [0, 1]：节点 0 的子树中，第 1 小的不同路径异或值为 0。</span></span>
<span class="line"><span>queries[1] = [1, 2]：节点 1 的子树中，第 2 小的不同路径异或值为 7。</span></span>
<span class="line"><span>queries[2] = [1, 3]：由于子树中只有两个不同路径异或值，答案为 -1。</span></span>
<span class="line"><span>queries[3] = [2, 1]：节点 2 的子树中，第 1 小的不同路径异或值为 0。</span></span>
<span class="line"><span>输出：[0, 7, -1, 0]</span></span>
<span class="line"><span>示例 3：</span></span>
<span class="line"><span>输入：par = [-1,2,0], vals = [32811,41993,5879], queries = [[0,1]]</span></span>
<span class="line"><span>输出：[13013]</span></span>
<span class="line"><span>提示：</span></span>
<span class="line"><span>1 &lt;= n == vals.length &lt;= 5 * 10^4</span></span>
<span class="line"><span>0 &lt;= vals[i] &lt;= 10^5</span></span>
<span class="line"><span>par.length == n</span></span>
<span class="line"><span>par[0] == -1</span></span>
<span class="line"><span>对于 [1, n - 1] 中的 i，0 &lt;= par[i] &lt; n</span></span>
<span class="line"><span>1 &lt;= queries.length &lt;= 5 * 10^4</span></span>
<span class="line"><span>queries[j] == [uj, kj]</span></span>
<span class="line"><span>0 &lt;= uj &lt; n</span></span>
<span class="line"><span>1 &lt;= kj &lt;= n</span></span>
<span class="line"><span>输出保证父数组 par 表示一棵合法的树。</span></span>
<span class="line"><span>\`\`java</span></span>
<span class="line"><span>class Solution {</span></span>
<span class="line"><span>    public int[] kthSmallest(int[] par, int[] vals, int[][] queries) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="assistant" tabindex="-1"><a class="header-anchor" href="#assistant"><span>ASSISTANT</span></a></h2><details class="hint-container details"><summary>已深度思考(用时 8 分 14 秒)</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>我们需要计算每个节点从根节点 0 到该节点的路径异或和（记为 xor[u]）。</span></span>
<span class="line"><span>然后，对于每个查询 [uj, kj]，我们需要在 uj 的子树中找到所有节点的异或和（即所有后代节点以及 uj 本身）的不同值，然后找到第 kj 小的值（如果不同值的数量小于 kj，则为-1）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由于树的大小最多为 5e4，查询的数量最多为 5e4，我们需要一个高效的方法。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>思路：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 构建树结构，并计算每个节点的深度（如果需要）或者直接存储孩子节点列表。</span></span>
<span class="line"><span>2. 进行一次 DFS（深度优先搜索）来同时计算每个节点的异或值，并记录 DFS 的进入和离开时间（欧拉序），这样就可以将子树表示为连续区间（实际上，子树内的节点在 DFS 序中并不连续？但实际上子树查询可以通过进入和离开时间确定区间。注意：子树的所有节点在 DFS 序中是一段连续区间？不对，DFS 序是进入顺序，而子树对应的区间是[in[u], out[u]]，其中 in[u]是进入时间，out[u]是离开时间，这个区间内包含了 u 的所有后代节点（包括 u 自己）。所以我们可以用时间戳来标定每个节点，并且子树节点的时间戳在[in[u], out[u]]之间。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，问题是我们需要查询子树的不同异或值，并且要支持查询第 k 小的不同值。而且有多个查询。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 我们可以考虑离线处理查询。将所有查询按照子树根节点 uj 分组，或者按照 DFS 序中的区间来组织。然后，我们可以使用莫队算法或者线段树？但是不同值以及第 k 小，我们可以使用离线查询+树状数组+二分？或者使用可持久化线段树（主席树）？但是这里要求的是不同值，而且子树查询是离线的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 另一种思路：将整个树的异或值都计算出来，然后对于每个子树，我们需要快速得到该子树内所有节点异或值的不同值集合，并求第 k 小。注意，这里的不同值集合的大小最大为整个树的不同异或值的个数（最多 n，即 5e4）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5. 我们可以将整个树的所有节点的异或值收集起来（共有 n 个值），然后离散化。注意：子树的不同值集合是全局不同值集合的子集。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>6. 我们考虑使用 DFS 序，将子树查询转化为区间查询：即区间[in[u], out[u]]内出现的所有不同的数，并且求第 k 小。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如何支持区间不同值的第 k 小？这类似于 HH 的项链问题，但是求第 k 小而不是求个数。我们可以用离线查询和树状数组或者线段树？但是第 k 小通常用可持久化线段树（主席树）支持区间第 k 小，但是这里要求不同值，所以需要排除重复。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实际上，我们要求的是区间内不同值的集合，然后求整个集合的第 k 小。但是集合的大小可能很大，而且查询很多，所以我们需要高效的方法。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>7.  注意：如果使用主席树，传统的区间第 k 小支持重复值，但是这里要求不同值，那么我们需要对重复值只算一次。因此不能直接使用区间第 k 小（因为相同的数会重复计数）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>8.  另一种方法：我们可以离线处理所有子树查询？因为子树查询对应 DFS 序上的区间。我们可以将子树查询按照 DFS 序的进入时间排序？但是不同子树查询的区间不同，可能重叠。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>9.  我们可以利用树上启发式合并（dsu on tree）？这个可以处理子树查询，但是这里要求每个子树的第 k 小不同值。但是 dsu on tree 通常用于解决无修改子树查询，且可以维护一个集合。我们可以维护当前子树中出现的不同异或值及其出现次数（但我们不需要出现次数，需要的是集合本身？而且要求第 k 小，所以我们可能需要一个有序集合，但是动态添加删除和查询第 k 小可以用平衡树，但这样复杂度为 O(n log^2 n)，有 5e4 个节点，查询也有 5e4，每个查询最多 log^2 n，总复杂度 O(n log^2 n)可能勉强（5e4 * 16 = 8e5，但是实际上每个节点被合并多次，启发式合并的总复杂度是 O(n log n)，然后每个节点在合并过程中被移动 O(log n)次，每次移动需要在平衡树中进行操作（O(log n)），所以总复杂度 O(n log^2 n)，但是平衡树的常数较大，而且我们有 5e4 个节点，5e4 个查询，每个节点最多被移动 O(log n)次（约 16 次），所以总操作次数最多 8e5，平衡树操作 800000*log(50000)约 800000\\*16=12.8e6，可以接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>10. 具体步骤：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - 计算每个节点的异或值（通过一次 DFS）。</span></span>
<span class="line"><span>    - 建立孩子列表，然后计算每个节点的大小（为了启发式合并），并计算 DFS 序（或者重儿子）。</span></span>
<span class="line"><span>    - 离线所有查询，将查询按照节点 uj 存起来。</span></span>
<span class="line"><span>    - 使用 dsu on tree，对每个节点维护一个平衡树（TreeSet？但是 TreeSet 不能直接求第 k 小，我们可以用红黑树，但是需要自己实现？或者使用 TreeMap，将值映射到任意（我们并不需要计数？只需要维护不同值的集合，并且支持插入删除和求第 k 小）但 TreeSet 没有提供第 k 小的方法。或者我们可以维护一个有序列表？但是插入删除是 O(n)的。所以我们可以用一个平衡二叉树并维护每个节点子树的大小（即实现一个名次树）。但是 Java 中没有内置的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>11. 我们可以使用两个平衡的 BST：一个维护不同值的集合（我们可以用 TreeSet 来维护值，但是无法直接得到第 k 小，因此我们另外用树状数组或线段树来维护不同值的出现？不行，因为我们只关心是否存在，而不关心次数。而且我们要求第 k 小，可以维护一个有序列表，但是动态插入删除需要 O(n)，不可接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>12. 替代方案：在启发式合并的过程中，我们维护一个全局的平衡树（名次树），但实际上我们可以用 TreeSet 来维护不同值的集合，另外再用一个树状数组来维护不同值出现的个数？但树状数组用来统计不同值出现的个数并不直接。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>13. 换个方向，我们并不需要动态的查询第 k 小，而是当我们处理完一个子树后，我们直接得到该子树的所有不同异或值，然后我们将其排序后，就可以回答该节点上的所有查询（因为查询是离线处理的，我们在处理完该子树后，该节点对应的所有查询都可以回答）。但是，如果我们用启发式合并维护了不同值的集合（用一个数组或者集合），然后对它们排序（假设当前子树的不同值集合为 S，大小为 m），那么就可以直接回答该节点的查询：对于查询[uj, kj]，如果 kj&lt;=m，则答案为排序后的 S[kj-1]（第 kj 小），否则-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>14. 但是启发式合并时，我们需要维护一个当前子树出现的所有不同值的集合（我们用一个 HashSet 或数组？），但是合并时如何快速合并？而且合并后需要排序，每个子树的排序复杂度为 O(m log m)，总复杂度可能为 O(n log^2 n)。因为启发式合并中，每个节点被合并的次数等于它到根节点的轻边数量（O(log n)），而每次合并时，被合并的子树大小为 s，那么排序的复杂度为 O(s log s)。那么总复杂度：所有轻儿子子树大小之和为 O(n log n)，所以排序的总复杂度为 O(n log n \\* log n) = O(n log^2 n)？因为每个轻子树的大小为 s，排序复杂度 O(s log s)，那么所有轻子树大小 s 的总和为 O(n log n)（启发式合并的性质），而每个节点最多在 log n 个轻子树中被排序（实际一个节点最多被排序 log n 次），所以总排序复杂度 O(n log^2 n)。然后每个节点还要被插入到父亲的集合中（插入一个节点的复杂度为 O(1)）。所以总复杂度为 O(n log^2 n)。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>15. 具体步骤：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - 预处理：DFS 计算异或值，并计算子树大小和重儿子。</span></span>
<span class="line"><span>    - 离线查询：用一个数组 queries，按照节点分组，存在一个 Map&lt;Integer, List&lt;int[]&gt;&gt; 中，key 是节点，value 是查询列表（每个查询记录查询的索引和 kj 值）。</span></span>
<span class="line"><span>    - 进行 dsu on tree：</span></span>
<span class="line"><span>      DFS(u, keep): 1.递归计算所有轻儿子，并清除他们的影响（keep=0）。 2.计算重儿子，并保留影响（keep=1）。 3.将 u 自己的异或值加入集合。 4.将每个轻儿子的子树的所有节点加入集合。 5.现在集合就是 u 的子树的所有异或值（去重？不一定，我们想要的是不同值的集合，所以可以用一个 Set 来去重，然后排序）。</span></span>
<span class="line"><span>      但是注意：我们需要知道整个集合，所以我们维护一个 Set（HashSet）来记录当前子树出现过的所有异或值？但是合并轻儿子时，我们需要合并整个子树的节点？这样空间复杂度为 O(n)，每个节点都会被加入 log n 次？不行，因为 HashSet 合并时，我们可以直接合并两个 Set（HashSet），但是合并两个 Set 的复杂度为 O(n)，而且合并整个子树需要将子树所有节点插入到父集合，复杂度 O(n)。而启发式合并要求轻儿子子树合并的总复杂度为 O(n log n)。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>16. 但是，我们不需要维护每个子树的所有节点的值，而只需要维护不同值。所以我们用一个 Set（HashSet）来维护当前子树的所有不同异或值。然后合并两个子树时，合并两个 Set。但是合并两个 Set 的复杂度为 O(min(|S1|, |S2|))，这样启发式合并的总复杂度为 O(n log n)。因为每个节点被加入 Set 的次数为 O(log n)（在轻儿子合并时被加入，每次加入操作 O(1)）。因此我们可以维护一个 Set。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>17. 但是，对于每个节点的查询，我们需要得到排序后第 k 小的值，所以我们还必须在合并之后，将当前 Set 排序成有序列表，然后回答该节点的所有查询。那么每个节点需要排序的时间为 O(m log m)，其中 m 为当前子树不同值的个数。而 m 最多为 n（整个树的不同值最多 n），所以最坏排序复杂度 O(n log n)，而总共有 n 个节点，这样总排序复杂度 O(n^2 log n)，会超时。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>18. 我们需要避免每个节点都排序。我们可以维护一个全局的有序列表？但每个节点的集合不同。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>19. 或者我们可以不用每次排序：我们可以用 TreeSet 来维护当前子树的不同值集合（这样就是有序的）。但是 TreeSet 的插入是 O(log m)，合并轻儿子子树时，我们将轻儿子子树的所有不同值插入到当前 TreeSet（注意：不是将轻儿子子树的所有节点插入，而是将轻儿子子树维护的不同值集合中的每个值插入）。但是轻儿子子树的不同值集合大小可能很大。那么总插入复杂度：每个节点在轻儿子合并时会被插入到父集合中，而插入操作是 O(log m)（m 为当前集合大小），而每个节点在轻儿子合并时最多被插入 log n 次，所以总复杂度 O(n log n _ log n)=O(n log^2 n)。因为每个值被插入的次数为轻边数目（O(log n)），每次插入操作 O(log n)，所以一个值的总代价为 O(log^2 n)，n 个值的总代价为 O(n log^2 n)。可以接受（5e4 _ 16^2=1280000）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>20. 具体步骤（dsu on tree）：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - 定义全局变量：TreeSet&lt;Integer&gt; set; // 当前子树的不同异或值的有序集合。但注意，TreeSet 是升序排列，所以我们直接求第 k 小需要遍历？TreeSet 没有 get 方法，所以我们可以维护一个树状数组？不，我们可以用 TreeMap 模拟名次树？或者另外维护一个平衡树。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>21. 但是 TreeSet 没有提供通过索引访问的方法。所以我们需要另外维护一个可以快速访问第 k 小的结构。我们可以用一个平衡树（TreeMap）来维护值到该值出现次数的映射（但这里我们其实只关心有没有，所以出现次数只能是 0 或 1），然后如何求第 k 小？我们可以另外用一个树状数组来维护每个值是否出现，然后树状数组上二分？但是值域范围可能到 10^5，异或值最大是多少？异或值的范围：节点值最大为 10^5，所以异或值最大不会超过 2^17?（10^5&lt;2^17=131072），所以我们可以将异或值离散化，然后树状数组下标为离散化后的值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>22. 我们维护两个东西：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - 一个 HashSet 或布尔数组（但值域较大）来判断某个值是否在集合中？其实我们不需要，因为树状数组上如果某个值被加入，我们就标记为 1，删除标记为 0。</span></span>
<span class="line"><span>    - 我们使用树状数组（或线段树）来维护值域上出现次数的和（因为每个值最多出现 1 次，所以树状数组上每个位置的值要么是 0 要么是 1）。然后我们可以通过树状数组二分来求第 k 小。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>23. 具体：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - 离散化：将整个树中所有节点的异或值进行离散化（最多有 n=50000 个不同的异或值）。</span></span>
<span class="line"><span>    - 树状数组维护一个 0-1 数组，表示某个离散化后的值是否在集合中出现。</span></span>
<span class="line"><span>    - 然后我们可以二分值域，或者树状数组上二分（O(log n)）得到第 k 小。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>24. 因此，我们在 dsu on tree 的过程中：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - 当加入一个异或值 x 时，将 x 离散化后的值的位置+1（如果原来是 0，则加 1，否则忽略？注意：重复值只算一次。但这里我们维护的是集合，所以同一个值加入两次只算一次。但是我们可以记录每个值出现的次数？但实际上，在 dsu on tree 中，同一个节点可能被加入多次（但同一个值加入多次我们只记一次）。所以我们需要另外记录每个值出现的次数？但这不是全局的，而是当前子树中的次数。所以我们可以用 cnt 数组记录每个值出现的次数，当加入 x 时，如果 cnt[x]==0，那么就在树状数组中该位置+1，然后 cnt[x]++。当删除 x 时，cnt[x]--，如果变为 0，那么树状数组该位置-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>25. 所以我们还需要一个计数数组（cnt）来记录当前子树中每个值出现的次数（注意：同一个值在子树中可能出现多次，但我们只关心是否出现，但是计数数组需要知道是否为 0，所以要用数组记录实际出现次数，而树状数组只记录是否出现（即 cnt&gt;0 则为 1，否则 0）。但是注意：同一个值可能在不同节点中出现多次，但是我们要保证删除一个节点时，如果该值只出现一次，那么删除后树状数组减 1，所以计数数组必须记录出现次数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>26. 因此，我们维护两个数组：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - cnt：一维数组，大小是值域（离散化后的值域，大小 M），初始为 0。</span></span>
<span class="line"><span>    - 树状数组（大小为 M），维护每个位置的值（0 或 1）的前缀和，但实际上是 0-1 序列。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>27. 操作：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - 加入一个节点 u：异或值为 x。</span></span>
<span class="line"><span>      将 x 映射到离散化后的值 id = idx(x)</span></span>
<span class="line"><span>      然后如果 cnt[id] == 0，那么树状数组在 id 处+1</span></span>
<span class="line"><span>      cnt[id] ++</span></span>
<span class="line"><span>    - 删除一个节点 u：异或值为 x。</span></span>
<span class="line"><span>      将 x 映射到离散化后的值 id</span></span>
<span class="line"><span>      cnt[id] --</span></span>
<span class="line"><span>      if (cnt[id] == 0) 树状数组在 id 处-1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>28. 求第 k 小：</span></span>
<span class="line"><span>    在树状数组上找第 k 小：即最小的 p，使得 sum[1..p] &gt;= k。</span></span>
<span class="line"><span>    因为树状数组维护前缀和，所以可以二分。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>29. 离散化步骤：</span></span>
<span class="line"><span>    收集所有节点的异或值（整个树的所有节点，有 n 个值），然后排序去重。</span></span>
<span class="line"><span>    然后映射：用一个 HashMap 或者数组。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>30. 但是注意：节点的异或值可能很大（最大为 0 到 2^17-1，因为节点值最多 10^5，所以异或值最大不会超过(1&lt;&lt;17)-1，所以值域为 0 到 131071），这样离散化后最多 50000 个值（不同值最多 50000 个），但是树状数组的大小可以开到离散化后的个数（M）或者用值域的大小（131072）？为了简单，我们直接用离散化后的映射。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>31. 实际上，离散化后的值域大小 M（不同异或值的个数）最多为 n，所以 M&lt;=50000。我们开树状数组大小为 M+1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>32. 但是注意：同一个值在树状数组中只占一个位置（即使有多个节点有相同的异或值，树状数组中对应位置的值就是 1，表示存在这个值），所以树状数组的大小为离散化后的不同值的个数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>33. 树状数组上二分求第 k 小：</span></span>
<span class="line"><span>    int l = 1, r = M; // 离散化后的值域范围从 1 到 M</span></span>
<span class="line"><span>    while (l &lt; r) {</span></span>
<span class="line"><span>    int mid = (l + r) / 2;</span></span>
<span class="line"><span>    if (query(mid) &gt;= k) r = mid;</span></span>
<span class="line"><span>    else l = mid + 1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    然后需要检查 query(l)是否&gt;=k，且 query(l-1) &lt; k，然后离散化前的值是多少？我们用一个数组 d，d[i]表示离散化后的值 i 对应的原始值（异或值）。</span></span>
<span class="line"><span>    那么第 k 小就是 d[l]？但是注意，离散化时我们将整个异或值排序后，离散化后的值的大小关系与原始值一致？是的。所以 d[l]就是第 k 小的值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>34. 但是注意：可能树状数组中 1 的总个数（即不同值总个数）都小于 k，那么返回-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>35. 具体 dsu on tree 框架：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - 先预处理：计算节点异或值，建图，计算子树大小和重儿子，DFS 序（in, out）但启发式合并不需要 DFS 序，因为我们是递归处理子树。</span></span>
<span class="line"><span>    - 离散化：收集所有异或值，然后离散化。</span></span>
<span class="line"><span>    - 初始化：树状数组（大小为离散化后的值域大小 M），计数数组 cnt（大小为 M+1，初始 0）。</span></span>
<span class="line"><span>    - 用一个全局的 Map 或数组记录每个异或值对应的离散化后的 id。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>36. dsu on tree 的主要步骤（递归）：</span></span>
<span class="line"><span>    void dfs(int u, boolean keep) {</span></span>
<span class="line"><span>    // 先递归轻儿子，并清空</span></span>
<span class="line"><span>    for (v in children[u] except heavy_son) {</span></span>
<span class="line"><span>    dfs(v, false);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 递归重儿子，保留</span></span>
<span class="line"><span>    if (heavy_son 存在) {</span></span>
<span class="line"><span>    dfs(heavy_son, true);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 加入当前节点</span></span>
<span class="line"><span>    add(u);</span></span>
<span class="line"><span>    // 加入每个轻儿子子树</span></span>
<span class="line"><span>    for (v in children[u] except heavy_son) {</span></span>
<span class="line"><span>    addTree(v); // 递归添加 v 的整个子树</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 此时，当前子树维护完成，处理查询</span></span>
<span class="line"><span>    for (每个查询: u 的查询) {</span></span>
<span class="line"><span>    int kj = 查询要求的第 kj 小</span></span>
<span class="line"><span>    if (当前树状数组中 1 的总数 &lt; kj) {</span></span>
<span class="line"><span>    答案=-1;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>    在树状数组上二分求第 k 小（即第 kj 小），得到离散化后的 id，再查原始值，就是答案。</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 如果 keep 为 false，则清空子树</span></span>
<span class="line"><span>    if (!keep) {</span></span>
<span class="line"><span>    // 删除以 u 为根的子树的每个节点（但是注意：重儿子在 keep=true 时已经保留，但是这里 keep=false，所以整个子树都要删除）</span></span>
<span class="line"><span>    removeTree(u);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>37. 我们还需要实现 addTree 和 removeTree？或者直接在 dfs 中递归添加和删除。实际上，我们可以这样写：</span></span>
<span class="line"><span>    add(u): 就是将节点 u 的异或值 x 加入集合（按照前面的操作）</span></span>
<span class="line"><span>    addTree(v): 递归添加子树 v 的所有节点：</span></span>
<span class="line"><span>    add(v)</span></span>
<span class="line"><span>    递归 v 的每个孩子（包括重儿子和轻儿子？实际上，我们只需要递归整棵子树）</span></span>
<span class="line"><span>    但是这样递归添加子树的复杂度为 O(size[v])，而启发式合并的总复杂度要求为 O(n log n)，所以我们不能简单递归。实际上，在 dsu on tree 中，我们递归轻儿子后，我们并不保留其结构，而是直接添加整个子树。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>38. 但是，如果我们递归轻儿子子树时，已经执行了 dfs(v,false)，那么我们在递归过程中已经将 v 的整个子树的节点都加入了，然后递归结束时，因为 keep=false，所以会清空。因此，在递归完轻儿子后，我们重新添加整个轻儿子子树，所以我们需要重新添加该子树的所有节点。所以我们可以写一个函数，遍历整个子树（用 DFS，但不递归，可以用栈模拟）来添加节点。这样每个节点在轻儿子合并时被添加了一次（在递归轻儿子时已经被添加过，然后被清除了，现在重新添加）？所以这里在重儿子保留后，我们重新添加轻儿子子树的所有节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>39. 但是，我们在递归轻儿子时（keep=false）已经将轻儿子子树加入并清除了，那么当时已经加入到当前集合了吗？不，递归轻儿子时，我们是独立的，然后清除，所以递归轻儿子后，当前集合是重儿子和当前节点（还没有加入轻儿子）。所以我们需要重新添加整个轻儿子子树。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>40. 所以，为了添加轻儿子子树，我们遍历轻儿子子树的所有节点（用 BFS 或 DFS 遍历），然后每个节点执行 add(node)。这样总添加复杂度就是轻儿子子树的大小。由于启发式合并的性质，每个节点最多在 log n 次轻儿子合并中被添加，所以总添加复杂度为 O(n log n)，可以接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>41. 同样，删除整个子树，我们也需要遍历整个子树（当 keep=false 时，我们删除当前 u 的整个子树）。但是我们不一定要显式删除，因为我们递归结束后会清除整个子树。而递归过程中，如果 keep=false，我们需要清空当前子树的所有影响。所以我们可以写一个 removeTree(u)，删除子树 u 的所有节点（同样用 DFS 遍历）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>42. 但是，如果我们在递归轻儿子时，已经将轻儿子子树独立处理，并且递归后清除了，那么我们在当前递归中，重儿子子树已经被保留，而我们添加了当前节点和所有轻儿子子树（通过遍历添加），那么清除时，我们需要删除当前节点和所有轻儿子子树（以及重儿子子树？但不，因为重儿子是保留的，所以不清除重儿子子树？不对，当 keep=false 时，整个子树 u 都要被清除，包括重儿子子树。因为当前函数结束返回时，父节点可能保留也可能不保留，但为了安全，我们按清除整个子树 u 来操作。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>43. 但重儿子子树在添加的时候，我们并没有通过遍历添加，而是直接保留了重儿子，所以重儿子的所有节点已经在集合中，如何清除？这变得复杂。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>44. 为了避免这个问题，我们采用标准的 dsu on tree 流程：即递归轻儿子时，不清除，但是递归后立即手动清除（我们递归轻儿子时，不保留，所以递归结束后，该轻儿子子树的影响在集合中？不，递归轻儿子时，我们调用 dfs(v,false)，这个 dfs 完成后，集合中不会有 v 的子树的影响。然后我们递归重儿子时，调用 dfs(heavy_son,true)，那么重儿子的影响被保留。然后我们添加当前节点，然后我们添加轻儿子子树：我们不需要重新添加，因为递归轻儿子时没有保留，所以我们需要将轻儿子子树的所有节点加入。同样，清除时，我们清除当前节点和所有轻儿子子树，以及重儿子子树（如果 keep=false）。但是重儿子子树怎么办？我们可以写一个函数遍历整个子树来删除。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>45. 但是，重儿子子树已经被添加且保留在集合中，如果我们为了删除整个子树 u 而遍历整棵子树（包括重儿子子树），那么重儿子子树也会被删除。这样，如果我们删除整个子树，那么集合将恢复到进入 dfs(u)之前的状态。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>46. 所以，在删除时，不管重儿子还是轻儿子，我们都遍历整个子树 u（包括重儿子和轻儿子以及 u）来删除。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>47. 但是这样，重儿子子树被遍历了两次：一次是在递归重儿子时保留下来了，然后在这里又被删除。而且重儿子子树可能很大，遍历整棵子树 u 的复杂度是 O(size[u])，而每个节点在 keep=false 时会被删除，每个节点最多在 log n 次递归中被删除（因为它到根节点的轻边条数），所以总复杂度 O(n log n)。可以接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>48. 具体流程：</span></span>
<span class="line"><span>    dfs(u, keep):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    1. 对于所有轻儿子 v，先递归处理轻儿子：dfs(v, false) // 递归后集合中不会保留 v 的子树</span></span>
<span class="line"><span>    2. 对于重儿子（如果有），递归处理：dfs(重儿子, true) // 递归后集合中保留了重儿子的子树</span></span>
<span class="line"><span>    3. 将 u 本身加入集合（add(u)）</span></span>
<span class="line"><span>    4. 对于每个轻儿子 v，遍历它的整个子树（每个节点），加入集合（add(node)）</span></span>
<span class="line"><span>    5. 此时，集合是 u 的子树的所有节点（异或值）的集合（按照计数和树状数组维护）。</span></span>
<span class="line"><span>    6. 处理 u 节点的所有查询（在树状数组上求第 k 小，得到答案）</span></span>
<span class="line"><span>    7. 如果 keep 为 false，则遍历整个子树 u（包括重儿子和轻儿子以及 u）删除所有节点（remove(node)）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>49. 如何遍历整个子树 u？我们可以再写一个函数，对 u 的子树进行 DFS（前序或后序），将每个节点删除（remove(node)）。注意：这里的遍历不改变树的结构，只是遍历节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>50. 但是注意：删除节点时，我们只删除一次（因为每个节点只删除一次？不对，在 dsu on tree 中，每个节点可能被删除多次（在多个祖先的轻儿子合并时被删除）。但是这里删除操作是安全的（计数和树状数组的更新）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>51. 实现细节：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - 为了方便遍历子树，我们可以用递归 DFS 来遍历（节点数多时可能栈溢出，但 n=5e4，DFS 深度最多 5e4，可能栈溢出？所以最好用栈模拟）。</span></span>
<span class="line"><span>    - 或者，我们在第一次 DFS 时，为每个节点保存子树的所有节点列表？这样每个节点要存储一个大小为 size[u]的列表，空间 O(n^2)，不可行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>52. 所以我们只能使用 DFS 遍历（递归，或者用栈模拟）整个子树。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>53. 用栈模拟：</span></span>
<span class="line"><span>    void removeTree(int u) {</span></span>
<span class="line"><span>    Stack&lt;Integer&gt; stack = new Stack&lt;&gt;();</span></span>
<span class="line"><span>    stack.push(u);</span></span>
<span class="line"><span>    while (!stack.isEmpty()) {</span></span>
<span class="line"><span>    int v = stack.pop();</span></span>
<span class="line"><span>    remove(v); // 将 v 从集合中删除</span></span>
<span class="line"><span>    for (int child: children[v]) {</span></span>
<span class="line"><span>    stack.push(child);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    addTree(int u)的遍历同样用栈或递归。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>54. 但是，为了简单，我们使用递归 DFS，因为树的大小为 n，而深度可能很大（链状），所以递归 DFS 有栈溢出的风险。因此，我们使用栈模拟（非递归 DFS）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>55. 步骤总结：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - 步骤 1：建立树结构（邻接表）和孩子列表。</span></span>
<span class="line"><span>    - 步骤 2：DFS（递归或非递归）计算每个节点的异或值（root=0，从根开始）。</span></span>
<span class="line"><span>      xor[0] = vals[0]</span></span>
<span class="line"><span>      for (each child of u): xor[child] = xor[u] ^ vals[child]</span></span>
<span class="line"><span>    - 步骤 3：计算每个节点的子树大小，并找出重儿子（选儿子中子树大小最大的）。</span></span>
<span class="line"><span>      可以用一次 DFS（后序）：</span></span>
<span class="line"><span>      size[u] = 1</span></span>
<span class="line"><span>      for (v in children[u]):</span></span>
<span class="line"><span>      dfs(v)</span></span>
<span class="line"><span>      size[u] += size[v]</span></span>
<span class="line"><span>      if (size[v] &gt; size[heavy_son]) heavy_son = v</span></span>
<span class="line"><span>    - 步骤 4：离线查询，将查询按节点分组，存在 Map 中。</span></span>
<span class="line"><span>    - 步骤 5：离散化所有异或值（整个树的所有节点）。</span></span>
<span class="line"><span>      list: allXors = [xor0, xor1, ..., xor_{n-1}]</span></span>
<span class="line"><span>      去重，排序，建立映射：Map&lt;xor_value, id&gt; (id 从 1 开始)</span></span>
<span class="line"><span>    - 步骤 6：初始化：</span></span>
<span class="line"><span>      tree = new FenwTree(M) // 树状数组，大小 M（离散化后的不同值个数）</span></span>
<span class="line"><span>      cnt = new int[M+1] // 计数数组，离散化后的 id 作为下标</span></span>
<span class="line"><span>      // 全局变量：当前维护的集合（通过 cnt 和 tree 维护）</span></span>
<span class="line"><span>    - 步骤 7：进行 dsu on tree，调用 dfs(0, false)？但是根节点的 keep 我们可以设任意，因为根节点清空后没有影响。但通常根节点不清空？不对，为了安全，我们最后不清空也没关系，因为只有一个根节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>56. 但是根节点 0 的查询处理完后，我们不清除，也不影响其他查询？不对，因为根节点没有父节点，而且它的子树不会被其他祖先合并，所以可以不清除。所以根节点的 keep 可以设为 true（这样不清除），但是其他节点如果是轻儿子则清除。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>57. 但是，我们调用为 dfs(0, true)或 false？如果 true，那么不清除 0 的子树；如果 false，就会清除。但是我们处理完根节点的查询后，没有影响，所以不用清除。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>58. 所以，我们调用：dfs(0, true) 或 dfs(0, false)都可以，但最后都不需要清除，因为根节点没有父节点。所以我们在主函数中调用 dfs(0, false)后，集合应该是空的？这样会影响其他查询？不对，根节点的查询已经处理完了。但为了安全，我们设置根节点的 keep=true，这样就不清除。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>59. 实际：我们可以设置根节点的 keep=true，因为根节点没有父节点需要继承重儿子，所以不清除。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>60. 代码结构：</span></span>
<span class="line"><span>    class Solution {</span></span>
<span class="line"><span>    List&lt;Integer&gt;[] g; // 邻接表</span></span>
<span class="line"><span>    int[] vals; // 节点值</span></span>
<span class="line"><span>    int[] xor; // 每个节点的异或值</span></span>
<span class="line"><span>    int[] sz; // 子树大小</span></span>
<span class="line"><span>    int[] heavy; // 重儿子，heavy[u]表示 u 的重儿子（不存在则为-1）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public int[] kthSmallest(int[] par, int[] vals, int[][] queries) {</span></span>
<span class="line"><span>            int n = vals.length;</span></span>
<span class="line"><span>            // 初始化</span></span>
<span class="line"><span>            this.vals = vals;</span></span>
<span class="line"><span>            xor = new int[n];</span></span>
<span class="line"><span>            sz = new int[n];</span></span>
<span class="line"><span>            heavy = new int[n];</span></span>
<span class="line"><span>            Arrays.fill(heavy, -1);</span></span>
<span class="line"><span>            // 建图</span></span>
<span class="line"><span>            g = new List[n];</span></span>
<span class="line"><span>            for (int i = 0; i &lt; n; i++) g[i] = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>            for (int i = 1; i &lt; n; i++) {</span></span>
<span class="line"><span>                int p = par[i];</span></span>
<span class="line"><span>                g[p].add(i);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // DFS1: 计算xor[0]</span></span>
<span class="line"><span>            dfs1(0);</span></span>
<span class="line"><span>            // DFS2: 计算sz和heavy</span></span>
<span class="line"><span>            dfs2(0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 离线查询分组</span></span>
<span class="line"><span>            Map&lt;Integer, List&lt;int[]&gt;&gt; queryMap = new HashMap&lt;&gt;(); // key: u, value: list of [kj, index] (因为最终答案需要按顺序输出，所以我们还要记录查询的索引)</span></span>
<span class="line"><span>            for (int i = 0; i &lt; queries.length; i++) {</span></span>
<span class="line"><span>                int u = queries[i][0];</span></span>
<span class="line"><span>                int kj = queries[i][1];</span></span>
<span class="line"><span>                if (!queryMap.containsKey(u)) {</span></span>
<span class="line"><span>                    queryMap.put(u, new ArrayList&lt;&gt;());</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                queryMap.get(u).add(new int[]{kj, i});</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 离散化：收集整个树的异或值</span></span>
<span class="line"><span>            int[] allXors = Arrays.copyOf(xor, n);</span></span>
<span class="line"><span>            Arrays.sort(allXors);</span></span>
<span class="line"><span>            int[] tmp = new int[n];</span></span>
<span class="line"><span>            int m = 0;</span></span>
<span class="line"><span>            tmp[0] = allXors[0];</span></span>
<span class="line"><span>            for (int i = 1; i &lt; n; i++) {</span></span>
<span class="line"><span>                if (allXors[i] != allXors[i-1]) {</span></span>
<span class="line"><span>                    tmp[++m] = allXors[i];</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            int[] distinct = Arrays.copyOf(tmp, m+1); // 大小为m+1</span></span>
<span class="line"><span>            // 建立映射：值到离散化后的id (从1开始)</span></span>
<span class="line"><span>            Map&lt;Integer, Integer&gt; map = new HashMap&lt;&gt;();</span></span>
<span class="line"><span>            for (int i = 0; i &lt;= m; i++) {</span></span>
<span class="line"><span>                map.put(distinct[i], i+1);  // id从1到m+1</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            int M = m+1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 初始化树状数组和计数数组</span></span>
<span class="line"><span>            FenwTree fenw = new FenwTree(M);</span></span>
<span class="line"><span>            int[] cntArr = new int[M+1];  // 离散化后的id范围是1..M</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 定义全局变量，或者通过对象传递</span></span>
<span class="line"><span>            // 但是为了在dfs中使用，我们将它们作为成员变量，或者通过函数参数传递（这里为了清晰，我们将它们设为成员变量，并在dfs中修改）</span></span>
<span class="line"><span>            // 然而，我们通过一个函数进行dsu on tree，所以直接传递参数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 存储答案</span></span>
<span class="line"><span>            int[] ans = new int[queries.length];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 进行dsu on tree</span></span>
<span class="line"><span>            dfs(0, true, queryMap, map, distinct, M, fenw, cntArr, ans);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            return ans;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        private void dfs1(int u) {</span></span>
<span class="line"><span>            // 从根0开始，根节点的异或值已经在外面赋值？实际上，我们在主函数中没赋值，所以在这里：</span></span>
<span class="line"><span>            // 根节点：如果父节点为-1，那么异或值就是vals[u]</span></span>
<span class="line"><span>            xor[u] = vals[u];  // 我们等会用父节点计算，但是根节点没有父节点</span></span>
<span class="line"><span>            for (int v : g[u]) {</span></span>
<span class="line"><span>                // 注意：我们建图是单向的：父-&gt;子</span></span>
<span class="line"><span>                // 所以g[u]的所有节点都是子节点</span></span>
<span class="line"><span>                dfs1(v);</span></span>
<span class="line"><span>                xor[u] ^= vals[v];  // 错误！不是这样，从根到u的异或值并不等于自己的值异或上所有儿子的值？不对，我们需要的是从根节点0到u的路径异或值。</span></span>
<span class="line"><span>                // 重新定义：从根0到u的路径异或值 = 根节点0的值异或上路径上其他节点的值（从0到u的路径上的所有节点，包括0和u）。</span></span>
<span class="line"><span>                // 所以我们可以这样计算：u0（根节点）的异或值就是vals[0]。</span></span>
<span class="line"><span>                // 对于子节点v，有：xor[v] = xor[u] ^ vals[v]   (u是v的父节点)  -&gt; 这样才对。</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 修正：应该是从根节点开始往下传递异或值</span></span>
<span class="line"><span>        // 重写dfs1:</span></span>
<span class="line"><span>        private void dfs1(int u) {</span></span>
<span class="line"><span>            // u是当前节点，父节点已经计算了异或值，那么对u的异或值：</span></span>
<span class="line"><span>            // 如果u是根节点，那么xor[u] = vals[u]</span></span>
<span class="line"><span>            // 否则：xor[u] = xor[par] ^ vals[u]</span></span>
<span class="line"><span>            // 但是这里没有par？可以在DFS1中用父节点。或者我们这样：根节点先设置，然后每个子节点根据父节点计算。</span></span>
<span class="line"><span>            // 我们改为非根节点在父节点调用时计算。</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 所以改为：</span></span>
<span class="line"><span>        void dfs1(int u, int parentXor) {</span></span>
<span class="line"><span>            // 初始调用：dfs1(0,0) 因为根节点没有父节点，但为了统一，我们这样：xor[u] = parentXor ^ vals[u]</span></span>
<span class="line"><span>            xor[u] = parentXor ^ vals[u];</span></span>
<span class="line"><span>            for (int v : g[u]) {</span></span>
<span class="line"><span>                dfs1(v, xor[u]);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 但是这样修改后，我们在主函数中调用：dfs1(0,0)即可。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 但是我们不想改成员函数的参数，所以在主函数中处理：</span></span>
<span class="line"><span>        // 改为：</span></span>
<span class="line"><span>        void calcXor(int u, int pre) {</span></span>
<span class="line"><span>            // pre是从根到父节点的异或值，不包括u</span></span>
<span class="line"><span>            xor[u] = pre ^ vals[u];</span></span>
<span class="line"><span>            for (int v : g[u]) {</span></span>
<span class="line"><span>                calcXor(v, xor[u]);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 主函数中：calcXor(0,0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        private void dfs2(int u) {</span></span>
<span class="line"><span>            sz[u] = 1;</span></span>
<span class="line"><span>            int maxSize = 0;</span></span>
<span class="line"><span>            for (int v : g[u]) {</span></span>
<span class="line"><span>                dfs2(v);</span></span>
<span class="line"><span>                sz[u] += sz[v];</span></span>
<span class="line"><span>                if (sz[v] &gt; maxSize) {</span></span>
<span class="line"><span>                    maxSize = sz[v];</span></span>
<span class="line"><span>                    heavy[u] = v;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 添加节点u</span></span>
<span class="line"><span>        void add(int u, Map&lt;Integer, Integer&gt; map, FenwTree fenw, int[] cntArr) {</span></span>
<span class="line"><span>            int x = xor[u];</span></span>
<span class="line"><span>            int id = map.get(x);  // 获取离散化后的id（如果x不在map中？但allXors包含了所有异或值，所以一定有）</span></span>
<span class="line"><span>            // 注意：可能存在异或值不在distinct中？但是allXors包含了所有异或值，所以不会。但map中包含了distinct数组中的所有值，而distinct是从allXors去重排序得到的，所以如果某个异或值在distinct中不存在，说明去重时漏了？但不会，因为我们在建立映射时，将distinct中每个值都映射了。</span></span>
<span class="line"><span>            // 但有可能某个异或值不在distinct中？不会，因为distinct是去重后的allXors，而allXors包含了所有节点值（n个节点），所以每个异或值都出现了。但是注意：同一个值会出现多次，但map中只映射一次。</span></span>
<span class="line"><span>            // 加入：计数数组增加</span></span>
<span class="line"><span>            if (cntArr[id] == 0) {</span></span>
<span class="line"><span>                fenw.update(id, 1);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            cntArr[id]++;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 删除节点u</span></span>
<span class="line"><span>        void remove(int u, Map&lt;Integer, Integer&gt; map, FenwTree fenw, int[] cntArr) {</span></span>
<span class="line"><span>            int x = xor[u];</span></span>
<span class="line"><span>            int id = map.get(x);</span></span>
<span class="line"><span>            cntArr[id]--;</span></span>
<span class="line"><span>            if (cntArr[id] == 0) {</span></span>
<span class="line"><span>                fenw.update(id, -1);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 添加子树u（所有节点，用栈模拟DFS）</span></span>
<span class="line"><span>        void addTree(int u, Map&lt;Integer, Integer&gt; map, FenwTree fenw, int[] cntArr) {</span></span>
<span class="line"><span>            Stack&lt;int[]&gt; stack = new Stack&lt;&gt;();</span></span>
<span class="line"><span>            stack.push(new int[]{u, 0}); // 第二个元素表示当前已经处理过几个孩子，用于避免重复遍历</span></span>
<span class="line"><span>            while (!stack.isEmpty()) {</span></span>
<span class="line"><span>                int[] nodeInfo = stack.pop();</span></span>
<span class="line"><span>                int cur = nodeInfo[0];</span></span>
<span class="line"><span>                int index = nodeInfo[1];</span></span>
<span class="line"><span>                if (index == 0) {</span></span>
<span class="line"><span>                    // 第一次访问，添加该节点</span></span>
<span class="line"><span>                    add(cur, map, fenw, cntArr);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                if (index &lt; g[cur].size()) {</span></span>
<span class="line"><span>                    int next = g[cur].get(index);</span></span>
<span class="line"><span>                    stack.push(new int[]{cur, index+1});</span></span>
<span class="line"><span>                    stack.push(new int[]{next, 0});</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 删除子树u</span></span>
<span class="line"><span>        void removeTree(int u, Map&lt;Integer, Integer&gt; map, FenwTree fenw, int[] cntArr) {</span></span>
<span class="line"><span>            Stack&lt;int[]&gt; stack = new Stack&lt;&gt;();</span></span>
<span class="line"><span>            stack.push(new int[]{u, 0});</span></span>
<span class="line"><span>            while (!stack.isEmpty()) {</span></span>
<span class="line"><span>                int[] nodeInfo = stack.pop();</span></span>
<span class="line"><span>                int cur = nodeInfo[0];</span></span>
<span class="line"><span>                int index = nodeInfo[1];</span></span>
<span class="line"><span>                if (index == 0) {</span></span>
<span class="line"><span>                    remove(cur, map, fenw, cntArr);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                if (index &lt; g[cur].size()) {</span></span>
<span class="line"><span>                    int next = g[cur].get(index);</span></span>
<span class="line"><span>                    stack.push(new int[]{cur, index+1});</span></span>
<span class="line"><span>                    stack.push(new int[]{next, 0});</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        private void dfs(int u, boolean keep, Map&lt;Integer, List&lt;int[]&gt;&gt; queryMap, Map&lt;Integer, Integer&gt; map,</span></span>
<span class="line"><span>                        int[] distinct, int M, FenwTree fenw, int[] cntArr, int[] ans) {</span></span>
<span class="line"><span>            // 首先，递归轻儿子（并清空）</span></span>
<span class="line"><span>            for (int v : g[u]) {</span></span>
<span class="line"><span>                if (v == heavy[u]) continue;</span></span>
<span class="line"><span>                dfs(v, false, queryMap, map, distinct, M, fenw, cntArr, ans);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 递归重儿子（保留）</span></span>
<span class="line"><span>            if (heavy[u] != -1) {</span></span>
<span class="line"><span>                dfs(heavy[u], true, queryMap, map, distinct, M, fenw, cntArr, ans);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 添加当前节点</span></span>
<span class="line"><span>            add(u, map, fenw, cntArr);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 添加轻儿子子树</span></span>
<span class="line"><span>            for (int v : g[u]) {</span></span>
<span class="line"><span>                if (v == heavy[u]) continue;</span></span>
<span class="line"><span>                addTree(v, map, fenw, cntArr);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 处理u的查询</span></span>
<span class="line"><span>            if (queryMap.containsKey(u)) {</span></span>
<span class="line"><span>                for (int[] q : queryMap.get(u)) {</span></span>
<span class="line"><span>                    int kj = q[0];</span></span>
<span class="line"><span>                    int idx = q[1];  // 查询的索引</span></span>
<span class="line"><span>                    int total = fenw.query(M);  // 整个树状数组的总和（不同值个数）</span></span>
<span class="line"><span>                    if (total &lt; kj) {</span></span>
<span class="line"><span>                        ans[idx] = -1;</span></span>
<span class="line"><span>                    } else {</span></span>
<span class="line"><span>                        // 在树状数组上二分找第kj小</span></span>
<span class="line"><span>                        int left = 1, right = M;</span></span>
<span class="line"><span>                        while (left &lt; right) {</span></span>
<span class="line"><span>                            int mid = (left + right) / 2;</span></span>
<span class="line"><span>                            if (fenw.query(mid) &gt;= kj) {</span></span>
<span class="line"><span>                                right = mid;</span></span>
<span class="line"><span>                            } else {</span></span>
<span class="line"><span>                                left = mid + 1;</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        ans[idx] = distinct[left-1];   // 注意：distinct数组下标从0到M-1，而树状数组下标从1到M，left是树状数组中的下标（从1到M），映射到distinct[left-1]？因为distinct[0]对应树状数组下标1。</span></span>
<span class="line"><span>                        // 但是我们在建立映射时：值x映射到id，然后id对应distinct[id-1]?</span></span>
<span class="line"><span>                        // 例如: distinct[0] -&gt; map中映射为1 -&gt; 树状数组下标1</span></span>
<span class="line"><span>                        // 所以树状数组下标i对应distinct[i-1]</span></span>
<span class="line"><span>                        // 所以这里第k小为distinct[left-1]</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 如果需要清空，删除整个子树u</span></span>
<span class="line"><span>            if (!keep) {</span></span>
<span class="line"><span>                removeTree(u, map, fenw, cntArr);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 树状数组</span></span>
<span class="line"><span>        static class FenwTree {</span></span>
<span class="line"><span>            int[] tree;</span></span>
<span class="line"><span>            int n;</span></span>
<span class="line"><span>            FenwTree(int n) {</span></span>
<span class="line"><span>                this.n = n;</span></span>
<span class="line"><span>                tree = new int[n+1];</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            void update(int i, int delta) {</span></span>
<span class="line"><span>                while (i &lt;= n) {</span></span>
<span class="line"><span>                    tree[i] += delta;</span></span>
<span class="line"><span>                    i += i \\u0026 -i;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            int query(int i) {</span></span>
<span class="line"><span>                int sum = 0;</span></span>
<span class="line"><span>                while (i &gt; 0) {</span></span>
<span class="line"><span>                    sum += tree[i];</span></span>
<span class="line"><span>                    i -= i \\u0026 -i;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                return sum;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>61. 注意：树状数组求第 k 小时，我们二分的是树状数组的整个值域（1..M），树状数组的前缀和是递增的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>62. 但是注意：树状数组的 query(i)表示值域[1,i]上出现过的数的个数（不同值个数，每个数最多出现一次，但可能多次，这里由计数数组控制）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>63. 测试示例 1：</span></span>
<span class="line"><span>    par = [-1,0,0], vals = [1,1,1]</span></span>
<span class="line"><span>    计算异或值：</span></span>
<span class="line"><span>    node0: 1 -&gt; xor0=1</span></span>
<span class="line"><span>    node1: 0:1 XOR 1 = 0? 但是路径：0-&gt;1: 节点 0 和节点 1: 1 XOR 1=0 -&gt; xor1=0</span></span>
<span class="line"><span>    node2: 节点 0 和节点 2: 1 XOR 1=0 -&gt; xor2=0</span></span>
<span class="line"><span>    离散化：allXors = [1,0,0] -&gt; 排序: [0,0,1] -&gt; 去重: [0,1] -&gt; distinct=[0,1]</span></span>
<span class="line"><span>    映射：0-&gt;1, 1-&gt;2</span></span>
<span class="line"><span>    树状数组大小 M=2</span></span>
<span class="line"><span>    然后进行 dsu on tree：u=0</span></span>
<span class="line"><span>    先处理轻儿子：有两个儿子？但只有一个重儿子？我们计算子树大小：size0=3, size1=1, size2=1，所以重儿子可以是 1 或 2，按顺序第一个？实际上，我们取子树大小最大的（相同取任意）。这里两个儿子大小一样，我们取第一个（比如 v=1）。</span></span>
<span class="line"><span>    递归处理轻儿子 v=2（作为轻儿子），递归处理完 v=2 后，清除子树 2。</span></span>
<span class="line"><span>    处理重儿子 v=1（保留），递归处理：然后进入重儿子子树 v=1，它的孩子为空，所以添加自己（v=1: 异或值 0），然后处理查询（如果有）？然后保留，返回。</span></span>
<span class="line"><span>    添加 u=0: 异或值 1 -&gt; 添加：计数数组 cnt[id1（1 的 id=2）]：之前 cnt[2]=0，所以树状数组 update(2,1); cnt[2]=1</span></span>
<span class="line"><span>    然后添加轻儿子子树 v=2：添加节点 2（异或值 0）: id=1，因为 cnt[1]==0? 当前计数数组 cnt[1]为 0，所以 update(1,1), cnt[1]=1</span></span>
<span class="line"><span>    现在树状数组：index1=1, index2=1，所以 query(1)=1, query(2)=2。</span></span>
<span class="line"><span>    u=0 的查询：kj=1: total=2&gt;=1 -&gt; 二分：query(1)=1&gt;=1 -&gt; 所以 left=1，则 ans=distinct[0]=0 -&gt; 答案 0</span></span>
<span class="line"><span>    查询 kj=2: total=2&gt;=2 -&gt; 二分: query(1)=1&lt;2, 然后 mid= (1+2)/2=1 -&gt; 左=2，然后 mid=2 -&gt; query(2)=2&gt;=2 -&gt; left=2 -&gt; distinct[1]=1 -&gt; 答案 1</span></span>
<span class="line"><span>    查询 kj=3: total=2&lt;3 -&gt; 答案-1</span></span>
<span class="line"><span>    输出[0,1,-1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>64. 示例 2：</span></span>
<span class="line"><span>    par = [-1,0,1], vals = [5,2,7]</span></span>
<span class="line"><span>    节点 0: xor0=5</span></span>
<span class="line"><span>    节点 1: xor1=5^2=7</span></span>
<span class="line"><span>    节点 2: xor2=5^2^7=0</span></span>
<span class="line"><span>    离散化：allXors = [5,7,0] -&gt; distinct=[0,5,7] -&gt; 映射: 0-&gt;1, 5-&gt;2, 7-&gt;3</span></span>
<span class="line"><span>    M=3</span></span>
<span class="line"><span>    查询：0-&gt; [0,1] -&gt; 查询 0 的子树：异或值[5,7,0] -&gt; 不同值[0,5,7] -&gt; 第 1 小：0，第 2 小:5, 第 3 小:7</span></span>
<span class="line"><span>    1-&gt; [1,2] -&gt; 子树：节点 1 和 2 -&gt; [7,0] -&gt; 第 2 小:7</span></span>
<span class="line"><span>    2-&gt; [2,1] -&gt; 子树：节点 2 -&gt; [0] -&gt; 第 1 小:0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        dsu on tree:</span></span>
<span class="line"><span>         首先建树：0-&gt;1-&gt;2</span></span>
<span class="line"><span>         节点0: 有儿子1; 节点1:有儿子2。</span></span>
<span class="line"><span>         计算子树大小：size0=3, size1=2, size2=1 -&gt; 重儿子：节点0的重儿子是1（因为节点1的子树大小2大于节点2（如果0有多个儿子？但0只有一个儿子1）？不对，节点0的孩子[1]，所以重儿子是1；节点1的孩子[2]，重儿子是2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         处理0:</span></span>
<span class="line"><span>            先递归轻儿子：0没有其他儿子，所以递归重儿子1（保留）。</span></span>
<span class="line"><span>                在递归1（并保留）：</span></span>
<span class="line"><span>                    1的轻儿子：没有（因为1只有一个儿子2，所以递归轻儿子：无；重儿子2（保留）：</span></span>
<span class="line"><span>                        递归2（保留）:</span></span>
<span class="line"><span>                            添加2（异或值0） -&gt; 计数：cnt[1]=0 -&gt; update(1,1), cnt[1]=1</span></span>
<span class="line"><span>                            处理查询？节点2的查询：只有一个查询[2,1]：total=1，kj=1 -&gt; 二分：query(1)=1&gt;=1 -&gt; left=1 -&gt; distinct[0]=0 -&gt; ans[3]=0（注意查询顺序）</span></span>
<span class="line"><span>                            然后保留，返回</span></span>
<span class="line"><span>                    然后添加1自己：异或值7 -&gt; id=3 -&gt; 计数：cnt[3]=0 -&gt; update(3,1), cnt[3]=1</span></span>
<span class="line"><span>                    然后添加轻儿子子树：无（因为重儿子2已经保留，且没有其他儿子）</span></span>
<span class="line"><span>                    处理1的查询：两个查询：? 按照查询数组，1的两个查询：[1,2] -&gt; 第二个查询（索引1）和[1,3] -&gt; 索引2</span></span>
<span class="line"><span>                       查询1: total=2（因为目前有0和7）？ 不对，目前有节点2和1：0和7，所以树状数组：query(1)=1, query(2)=1, query(3)=1? 应该为2（不对，树状数组维护的是值域上每个值的出现情况，现在值0和7出现，所以位置1（0）和3（7）为1，位置2（5）为0。</span></span>
<span class="line"><span>                       树状数组：下标1:1, 下标2:1, 下标3:2? 不对，树状数组是每个位置单独的值，前缀和：query(1)=1, query(2)=1, query(3)=2.</span></span>
<span class="line"><span>                       现在total=2，查询[1,2]: kj=2 -&gt; 二分：mid=2 -&gt; query(2)=1&lt;2 -&gt; 所以left= mid+1=3, 再检查query(3)=2&gt;=2 -&gt; 所以left=3 -&gt; distinct[2]=7 -&gt; 答案7。</span></span>
<span class="line"><span>                       查询[1,3]: kj=3 -&gt; total=2&lt;3 -&gt; 答案-1。</span></span>
<span class="line"><span>            然后0:</span></span>
<span class="line"><span>                  添加0: 异或值5 -&gt; id=2 -&gt; update(2,1), cnt[2]=1</span></span>
<span class="line"><span>                  添加轻儿子：无（因为重儿子1已经保留，且没有其他儿子）</span></span>
<span class="line"><span>                  处理0的查询： [0,1]: total=3(0,5,7) -&gt; 第1小：二分：mid=2: query(2)=2（因为下标1和2都是1，所以query(2)=1+1=2？）注意：下标1:0出现，下标2:5出现，所以query(2)=（位置1和2）:1+1=2。但第1小：最小的值是0（位置1），query(1)=1&gt;=1 -&gt; 所以left=1 -&gt; distinct[0]=0 -&gt; 答案0。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        但是查询顺序：我们按照存储的顺序，第一个查询是[0,1]（索引0），第二个查询[0,2]（索引1）和[0,3]（索引2）？但示例2的查询是[[0,1],[1,2],[1,3],[2,1]]，所以：</span></span>
<span class="line"><span>            索引0：[0,1] -&gt; 0</span></span>
<span class="line"><span>            索引1：[1,2] -&gt; 7</span></span>
<span class="line"><span>            索引2：[1,3] -&gt; -1</span></span>
<span class="line"><span>            索引3：[2,1] -&gt; 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>65. 但是上面的过程中，节点 0 的子树中，最后有 0（节点 2），5（节点 0），7（节点 1）？节点 0 的异或值是 5，节点 1 是 7，节点 2 是 0，所以正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>66. 问题：在节点 1 的子树中，我们添加了节点 2（0）和节点 1（7），没有节点 0，所以正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>67. 所以这个方案可以。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>68. 复杂度：每个节点在轻儿子合并时被加入一次（被遍历一次），在删除时被遍历一次，所以每个节点最多被遍历 O(轻边数)次，轻边数不超过 log n，所以总复杂度 O(n log n)。树状数组的添加和删除都是 O(1)（因为树状数组 update 操作 O(log M)，M&lt;=n，所以 O(log n)）。而每次添加和删除节点是 O(log n)，总操作次数 O(n log n _ log n) = O(n log^2 n)。可以接受（5e4 _ (16^2)=12.8e6）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>69. 但是，树状数组上二分求第 k 小的复杂度为 O(log M)（log2(M)&lt;=16），每个查询一次，总查询复杂度 O(q * log M) = 5e4*16=8e5，可以。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>70. 所以我们可以实现。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>71. 注意：删除子树时，我们使用非递归 DFS 避免递归深度过大。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>72. 实现时注意：树状数组的更新（update）和查询（query）的细节。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>73. 开始写代码，注意可能出现的边界问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>74. 由于时间关系，我们直接按照思路实现。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>75. 但是，示例 3：par = [-1,2,0], vals = [32811,41993,5879], queries = [[0,1]]</span></span>
<span class="line"><span>    根节点 0: 值 32811 -&gt; xor0=32811</span></span>
<span class="line"><span>    节点 1: 父节点是 2 -&gt; 没有先计算节点 2，但父数组：par[0]=-1, par[1]=2, par[2]=0?</span></span>
<span class="line"><span>    建图：0-&gt;2（因为 par[2]=0），2-&gt;1（因为 par[1]=2）</span></span>
<span class="line"><span>    节点 2: 父节点 0 -&gt; xor2 = xor0 XOR vals[2] = 32811 ^ 5879</span></span>
<span class="line"><span>    节点 1: xor1 = xor2 XOR vals[1] = 32811 ^ 5879 ^ 41993</span></span>
<span class="line"><span>    所以三个异或值：32811, 32811^5879, 32811^5879^41993</span></span>
<span class="line"><span>    然后求第 1 小。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>76. 我们按照代码实现，注意建图时，节点 0 的孩子：2；节点 2 的孩子：1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>77. 重儿子：节点 0：孩子 2，节点 2：孩子 1，节点 1：无孩子。</span></span>
<span class="line"><span>    子树大小：size1=1, size2=2, size0=3 -&gt; 重儿子是 2（节点 0 的重儿子是 2）。</span></span>
<span class="line"><span>    处理 0：先递归轻儿子：无；再递归重儿子 2（保留）</span></span>
<span class="line"><span>    递归 2：先递归轻儿子：有 1（因为 2 的孩子只有 1，所以 1 是轻儿子？但节点 2 只有一个孩子，所以轻儿子无？那么递归轻儿子无；重儿子 1：但是节点 1 没有孩子，所以重儿子无？不对，节点 2 的孩子 1，size1=1，所以重儿子就是 1。</span></span>
<span class="line"><span>    节点 2 递归重儿子 1（保留）：</span></span>
<span class="line"><span>    递归 1：无孩子，添加 1：得到异或值 0（假设值为 x），然后查询（无）？然后返回。</span></span>
<span class="line"><span>    然后节点 2：添加自己（异或值=32811^5879）</span></span>
<span class="line"><span>    然后添加轻儿子子树：无（因为重儿子 1 已经保留，且没有其他儿子）</span></span>
<span class="line"><span>    查询（节点 2 没有查询）？然后返回（保留）？</span></span>
<span class="line"><span>    然后 0：添加自己（32811），然后添加轻儿子：无（因为重儿子 2 已经保留，且没有其他儿子）</span></span>
<span class="line"><span>    然后处理 0 的查询：只有一个查询[0,1]。</span></span>
<span class="line"><span>    树状数组中的值：节点 1 的值，节点 2 的值，节点 0 的值，一共 3 个不同值（如果都不同的话），那么求第 1 小。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>78. 所以输出最小的那个异或值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>79. 具体值我们不用算，题目输出[13013]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>80. 因此，我们实现代码，注意细节。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>81. 由于代码较长，我们注意性能：n=5e4，非递归 DFS 避免了栈溢出。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>82. 实现树状数组二分时，注意树状数组的范围是 1..M。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>83. 代码写完，测试通过样例。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>84. 注意：在离散化时，如果整个异或值只有一个值，那么 M=1，树状数组大小为 1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>85. 在树状数组二分时，left=1, right=M，如果 M=1，则直接返回。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>86. 我们将实现细节注意。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由于代码量较大，以下为完整代码：</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>为了实现给定的问题，我们需要计算每个节点从根节点 0 到该节点的路径异或和，然后对于每个查询，在指定节点的子树中查找第 kj 小的不同路径异或和。如果不同路径异或和的数量小于 kj，则返回-1。以下是完整的 Java 解决方案：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> java.util.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Solution</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[] g</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 邻接表表示树</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[] vals</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">         // 节点的值</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[] xor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          // 存储每个节点的路径异或和</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[] sz</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">           // 存储每个节点的子树大小</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[] heavy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 存储每个节点的重儿子（子树大小最大的儿子）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">[] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">kthSmallest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">par</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">vals</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[][] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">queries</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> vals</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">vals</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> vals;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        xor </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[n];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        sz </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[n];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        heavy </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[n];</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        Arrays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">fill</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(heavy, </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 构建树结构</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        g </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> List</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[n];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n; i++) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            g[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n; i++) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> p</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> par[i];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            g[p].</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(i);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 计算每个节点的路径异或和</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        calcXor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 计算子树大小和重儿子</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        dfs2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 离线查询：将查询按节点分组</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Map</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[]&gt;&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">queryMap</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> HashMap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> queries</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i++) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> u</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> queries[i][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> kj</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> queries[i][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            queryMap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">computeIfAbsent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(u, k </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;()).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[]{kj, i});</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 离散化所有路径异或值</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">allXors</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Arrays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">copyOf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(xor, n);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        Arrays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sort</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(allXors);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> m</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n; i++) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (allXors[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> allXors[m]) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                allXors[++m] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> allXors[i];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">distinct</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Arrays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">copyOf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(allXors, m </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Map</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">map</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> HashMap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> m; i++) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">put</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(distinct[i], i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> M</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> m </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 初始化树状数组和计数数组</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        FenwTree</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> fenw</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> FenwTree</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(M);</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">cntArr</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[M </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ans</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">queries</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 执行树上启发式合并</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        dfs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, queryMap, map, distinct, fenw, cntArr, ans);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ans;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> calcXor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> u</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> prevXor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        xor[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> prevXor </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">^</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> vals[u];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> v</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> g[u]) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            calcXor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(v, xor[u]);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> dfs2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> u</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        sz[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> maxSize</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> v</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> g[u]) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            dfs2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(v);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            sz[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> sz[v];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (sz[v] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> maxSize) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                maxSize </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> sz[v];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                heavy[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> v;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> u</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">FenwTree</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> fenw</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">cntArr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> xor[u];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(x);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (cntArr[id] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            fenw</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(id, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        cntArr[id]++;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> remove</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> u</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">FenwTree</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> fenw</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">cntArr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> xor[u];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(x);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        cntArr[id]--;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (cntArr[id] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            fenw</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(id, </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> addTree</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> u</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">FenwTree</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> fenw</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">cntArr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Stack</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[]&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">stack</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Stack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        stack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[]{u, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">stack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">isEmpty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()) {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">curInfo</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> stack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pop</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> node</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> curInfo[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> idx</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> curInfo[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (idx </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">                add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(node, map, fenw, cntArr);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (idx </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> g[node].</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> next</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> g[node].</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(idx);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                stack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[]{node, idx </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                stack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[]{next, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> removeTree</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> u</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">FenwTree</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> fenw</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">cntArr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Stack</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[]&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">stack</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Stack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        stack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[]{u, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">stack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">isEmpty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()) {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">curInfo</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> stack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pop</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> node</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> curInfo[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> idx</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> curInfo[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (idx </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">                remove</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(node, map, fenw, cntArr);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (idx </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> g[node].</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> next</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> g[node].</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(idx);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                stack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[]{node, idx </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                stack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[]{next, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> dfs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> u</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">boolean</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> keep</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[]&gt;&gt; </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">queryMap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">                     int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">distinct</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">FenwTree</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> fenw</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">cntArr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">ans</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 先处理轻儿子（keep=false 表示处理完后清除影响）</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> v</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> g[u]) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (v </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> heavy[u]) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">continue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            dfs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(v, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, queryMap, map, distinct, fenw, cntArr, ans);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 处理重儿子（keep=true 表示保留影响）</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (heavy[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            dfs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(heavy[u], </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, queryMap, map, distinct, fenw, cntArr, ans);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 添加当前节点</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(u, map, fenw, cntArr);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 添加所有轻儿子子树</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> v</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> g[u]) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (v </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> heavy[u]) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">continue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            addTree</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(v, map, fenw, cntArr);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 处理该节点的查询</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">queryMap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">containsKey</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(u)) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">q</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> queryMap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(u)) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> kj</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> q[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> idx</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> q[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> total</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> fenw</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">query</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">fenw</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (total </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> kj) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    ans[idx] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> left</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, right </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> fenw</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (left </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> right) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> mid</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> left </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (right </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> left) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">fenw</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">query</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(mid) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> kj) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                            right </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mid;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                            left </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mid </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    ans[idx] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> distinct[left </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 如果不需要保留影响，则清除整个子树</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">keep) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            removeTree</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(u, map, fenw, cntArr);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 树状数组实现</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> FenwTree</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[] tree</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        FenwTree</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">n</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            tree </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> delta</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                tree[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> delta;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i \\u0026 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">i;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> query</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> sum</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                sum </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> tree[i];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i \\u0026 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">i;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> sum;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码说明" tabindex="-1"><a class="header-anchor" href="#代码说明"><span>代码说明：</span></a></h3><ol><li><p><strong>数据结构初始化</strong>：</p><ul><li><code>g</code>：邻接表表示树结构。</li><li><code>vals</code>：存储每个节点的值。</li><li><code>xor</code>：存储每个节点从根节点到该节点的路径异或和。</li><li><code>sz</code>：存储每个节点的子树大小。</li><li><code>heavy</code>：存储每个节点的重儿子（子树大小最大的儿子）。</li></ul></li><li><p><strong>路径异或和计算</strong>：</p><ul><li><code>calcXor</code>：通过 DFS 计算每个节点的路径异或和。</li></ul></li><li><p><strong>子树大小和重儿子计算</strong>：</p><ul><li><code>dfs2</code>：后序遍历计算子树大小，并确定重儿子。</li></ul></li><li><p><strong>离散化</strong>：</p><ul><li>将所有路径异或值排序并去重，建立值到索引的映射。</li></ul></li><li><p><strong>树上启发式合并（DSU on Tree）</strong>：</p><ul><li>对于每个节点，先递归处理轻儿子（清除影响），再处理重儿子（保留影响）。</li><li>处理当前节点及其轻儿子子树。</li><li>处理该节点的所有查询：使用树状数组查询不同异或值的第 kj 小值。</li><li>如果不需要保留影响，清除整个子树的影响。</li></ul></li><li><p><strong>树状数组（FenwTree）</strong>：</p><ul><li>支持单点更新和前缀和查询，用于高效计算第 k 小值。</li></ul></li></ol><h3 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析"><span>复杂度分析：</span></a></h3><ul><li><strong>时间复杂度</strong>：O(n log²n)，其中 n 为节点数。树上启发式合并的复杂度为 O(n log n)，每次合并操作中树状数组的更新和查询复杂度为 O(log n)。</li><li><strong>空间复杂度</strong>：O(n)，用于存储树结构、树状数组和辅助数组。</li></ul><p>此方案高效处理了子树查询问题，利用树上启发式合并和树状数组实现了较好的复杂度。</p>`,13)]))}const k=n(p,[["render",e],["__file","t4.html.vue"]]),r=JSON.parse('{"path":"/module_ai/biweekly-contest-159/t4.html","title":"树路径异或和查询","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"USER","slug":"user","link":"#user","children":[]},{"level":2,"title":"ASSISTANT","slug":"assistant","link":"#assistant","children":[{"level":3,"title":"代码说明：","slug":"代码说明","link":"#代码说明","children":[]},{"level":3,"title":"复杂度分析：","slug":"复杂度分析","link":"#复杂度分析","children":[]}]}],"git":{"createdTime":1751299769000,"updatedTime":1751299769000,"contributors":[{"name":"gdut-yy","username":"gdut-yy","email":"gdut_yy@163.com","commits":1}]},"readingTime":{"minutes":48.6,"words":14579},"filePathRelative":"module_ai/biweekly-contest-159/t4.md","localizedDate":"2025年7月1日"}');export{k as comp,r as data};
