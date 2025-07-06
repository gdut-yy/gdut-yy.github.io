import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as l}from"./app-D75trwlE.js";const p={};function e(d,s){return l(),a("div",null,s[0]||(s[0]=[i(`<h1 id="树路径异或和查询处理方法" tabindex="-1"><a class="header-anchor" href="#树路径异或和查询处理方法"><span>树路径异或和查询处理方法</span></a></h1><ul><li>会话记录：<a href="https://chat.deepseek.com/a/chat/s/4793e242-c4c2-4336-94c7-013844b3c592" target="_blank" rel="noopener noreferrer">https://chat.deepseek.com/a/chat/s/4793e242-c4c2-4336-94c7-013844b3c592</a></li><li>修改后 AC。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>解答错误</span></span>
<span class="line"><span>输入</span></span>
<span class="line"><span>par = [-1,2,0], vals = [32811,41993,5879], queries = [[0,1]]</span></span>
<span class="line"><span>输出</span></span>
<span class="line"><span>[32811]</span></span>
<span class="line"><span>预期结果</span></span>
<span class="line"><span>[13013]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="user" tabindex="-1"><a class="header-anchor" href="#user"><span>USER</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>给定一棵以节点 0 为根的无向树，带有 n 个节点，按 0 到 n - 1 编号。每个节点 i 有一个整数值 vals[i]，并且它的父节点通过 par[i] 给出。</span></span>
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
<span class="line"><span>\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="assistant" tabindex="-1"><a class="header-anchor" href="#assistant"><span>ASSISTANT</span></a></h2><details class="hint-container details"><summary>已深度思考(用时 751 秒)</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&quot; 题目要求：给定一棵树，每个节点有一个值，从根到节点的路径异或和定义为路径上所有节点值的异或（包括自身）。对于每个查询(uj, kj)，要求在以 uj 为根的子树中，所有节点的路径异或和的第 kj 小的不同值（即去重后排序的第 kj 小）。如果不同值的个数不足 kj，则返回-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>思路：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.  首先，我们需要计算每个节点从根到该节点的路径异或和。记节点 i 的路径异或和为 xor[i]。</span></span>
<span class="line"><span>    有：xor[0] = vals[0]（因为根节点 0 的父节点为-1，所以只有自己）</span></span>
<span class="line"><span>    对于其他节点 i：xor[i] = xor[par[i]] ^ vals[i]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2.  问题转化为：对于每个查询(uj, kj)，在以 uj 为根的子树中，收集所有节点 v 的 xor[v]（即路径异或和），然后去重，排序，取第 kj 小的值。如果去重后的个数不足 kj，则返回-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.  但是，直接对每个查询遍历子树会超时，因为树的大小最大为 50000，查询最多 50000 个。因此需要高效的方法。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4.  考虑使用离线查询和树上启发式合并（DSU on Tree）或者使用 DFS 序将子树问题转化为区间问题，然后使用可持久化数据结构（如可持久化字典树或可持久化线段树）来维护区间不同值的第 k 小。但题目要求的是不同值，且要排序，所以需要维护子树中所有不同的异或值，并支持查询第 k 小。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5.  另一种思路：先计算所有节点的路径异或和，然后对树进行 DFS，得到每个节点的 DFS 序，这样每个子树对应一个连续的区间。问题转化为：在数组的一个连续区间上，求不同值的第 k 小。这是一个经典问题，可以使用离线查询（莫队算法）或者可持久化线段树（主席树）？但是注意，不同值的第 k 小问题，主席树通常用于处理区间第 k 小（不去重），而这里要求不同值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>6.  实际上，我们可以将问题分解为两步：</span></span>
<span class="line"><span>    a. 对每个子树，我们需要知道该子树对应的区间中所有不同的异或值，并且这些值排序后的顺序。</span></span>
<span class="line"><span>    b. 查询第 k 小。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>7.  但是，子树对应的区间是固定的（DFS 序），我们可以先求出整个树的 DFS 序，然后对每个子树，我们知道其对应区间[in[u], out[u]]。那么问题就是：在数组 xor_arr（按照 DFS 序存储每个节点的异或值）的区间[in[u], out[u]]中，求不同值的第 k 小。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>8.  经典方法：离线查询，按子树区间处理，使用莫队算法？但是查询有 50000，区间长度最大 50000，莫队的时间复杂度 O(n*sqrt(n))，在 50000 下大约是 50000*224≈11200000，加上查询次数 50000，总操作次数可能达到 1e7，在 Java 中可能勉强通过，但题目要求 n 最大 50000，查询 50000，莫队可能超时。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>9.  另一种方法：使用可持久化线段树来维护每个位置的前缀线段树，但这里要求不同值，所以需要维护每个值最后出现的位置，然后使用线段树套树状数组？或者使用可持久化线段树维护不同值的出现？实际上，我们可以用另一种思路：先离散化所有路径异或和，然后对 DFS 序进行遍历，用可持久化线段树记录每个位置的历史版本，但是要求区间不同值，而且还要支持第 k 小，这比较困难。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>10. 实际上，有一个经典问题：区间不同元素的个数（HH 的项链），但是这里要求的是不同元素的第 k 小。我们可以使用离线查询，将查询按照子树区间（即 DFS 序的区间）分组，然后从前往后扫描整个 DFS 序数组，用树状数组维护每个值是否出现（但这里不是求个数，而是求第 k 小）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>11. 求不同值的第 k 小，我们可以这样做：</span></span>
<span class="line"><span>    离线处理：将所有查询按照子树区间的右端点（或左端点）排序，然后使用一个数据结构来维护当前区间内的不同值，并支持查询第 k 小。</span></span>
<span class="line"><span>    但是，这里每个子树区间是独立的，而且查询很多，所以我们可以考虑用线段树合并或 DSU on Tree。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>12. 树上启发式合并（DSU on Tree）：</span></span>
<span class="line"><span>    我们可以对每个子树，用一个集合来维护子树中所有不同的异或值，并且要求这个集合有序，同时支持快速合并。但是，合并两个集合时，如果我们使用平衡树，合并操作是 O(n log n)的，总复杂度 O(n log^2 n)，在 50000 下可能超时（因为启发式合并的复杂度是 O(n log n)次操作，每次操作 O(log n)，所以总 O(n log^2 n)）。然后，对于每个查询，我们只需要在对应的平衡树（或有序集合）中查找第 k 小。但是，查询有 50000 个，我们不可能对每个查询都遍历整个集合（因为集合大小可能很大，而查询第 k 小可以用平衡树在 O(log n)内完成，但前提是我们维护了一个平衡树）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>13. 具体步骤：</span></span>
<span class="line"><span>    a. 预处理：计算每个节点的路径异或和 xor[i]；构建树；DFS 计算每个节点的子树大小，并确定重儿子。</span></span>
<span class="line"><span>    b. 进行 DFS（使用 DSU on Tree）： - 先递归处理轻儿子，然后处理重儿子，保留重儿子的集合。 - 将轻儿子的集合合并到重儿子的集合中。 - 在递归过程中，每个节点 u 处理完后，其对应的集合就是 u 的子树中所有节点的异或值集合（去重）。</span></span>
<span class="line"><span>    c. 然后，对于每个查询[u, k]，我们在 u 的集合中查询第 k 小的值（如果集合大小&gt;=k，则返回第 k 小；否则返回-1）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>14. 但是，合并两个集合（去重有序集合）并维护有序，我们可以使用平衡树（如 TreeSet），但是 TreeSet 不支持直接查询第 k 小（因为它是基于红黑树，但 Java 的 TreeSet 没有提供按索引访问的 API）。我们可以使用一个平衡二叉搜索树，同时维护子树大小，这样可以在 O(log n)时间内查询第 k 小。在 Java 中，我们可以使用 TreeMap（但 TreeMap 是映射，不是集合，而且也不支持按排名查询）。或者自己实现平衡树？这太复杂。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>15. 替代方案：使用一个有序列表（如 ArrayList）来存储不同的异或值，但是合并两个集合时，我们需要合并两个有序列表，并去重，这可以在 O(n)内完成（归并）。但是，在 DSU on Tree 中，每个节点最多被合并 O(log n)次（因为轻儿子），所以总复杂度是 O(n log n)（每个元素被合并的次数不超过 O(log n)）。然后，对于每个节点，我们维护一个有序列表，查询第 k 小可以直接通过下标访问（O(1)）或者二分查找（但有序列表可以直接用下标访问，因为已经排序了）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    但是，合并两个有序列表并去重，最坏情况下两个列表大小都是 O(n)，合并一次 O(n1+n2)，而每个节点最多被合并 O(log n)次，所以总复杂度为 O(n log^2 n)？因为每个节点作为轻儿子被合并时，所在子树大小至少翻倍，所以每个节点最多被合并 O(log n)次，而每次合并的代价是它所在集合的大小。那么总复杂度为：每个节点被合并时，它所在集合的大小为 s，而每个节点被合并的次数为 O(log n)，所以总复杂度为 O(n log n)（因为所有节点的大小和不超过 n log n？）实际上，树上启发式合并的总复杂度是 O(n log n)。但是，合并两个有序列表的复杂度是 O(n1+n2)，而每个节点被合并的次数是 O(log n)，所以总操作次数为：对于每个节点，每次合并时，它被遍历一次，而它被合并的次数等于它在轻边上被合并的次数，即 O(log n)次，所以总操作次数是 O(n log n)。因此，总时间复杂度 O(n log n)，空间 O(n)。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>16. 具体实现：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - 预处理：计算每个节点的异或值（用数组 xor[]）。</span></span>
<span class="line"><span>    - 构建树：用邻接表。</span></span>
<span class="line"><span>    - DFS1：计算每个节点的子树大小，并确定重儿子（son[u]）。</span></span>
<span class="line"><span>    - 准备一个全局的数组 ans，用于存放查询的答案。同时，将查询按照节点 u 分组（因为同一个节点可能有多个查询）。</span></span>
<span class="line"><span>    - DFS2：进行 DSU on Tree。</span></span>
<span class="line"><span>      用一个数据结构（如一个 ArrayList，但我们需要支持快速合并和去重排序）来维护子树中的不同异或值。实际上，我们用一个有序列表（List&lt;Integer&gt;）来存储，并且要求有序（从小到大）。同时，为了快速合并，我们用一个 Set 来去重？不，我们可以在合并时去重（归并时跳过重复元素）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    但是，我们也可以用一个 TreeSet 来维护当前子树的所有不同异或值，但是这样合并两个集合时，我们可以将一个集合的所有元素加入另一个集合，而 TreeSet 的插入是 O(log n)，那么合并两个集合（大小分别为 n1 和 n2）的复杂度为 O(n2 _ log(n1+n2))。而每个节点作为轻儿子被合并时，它所在集合的大小就是子树大小，那么总复杂度为：每个轻儿子子树的大小为 s，那么合并它的代价是 O(s _ log n)，而所有轻儿子子树的大小和不超过 O(n log n)（因为每个节点最多被合并 O(log n)次，每次合并的代价是 O(s_i _ log n)），所以总复杂度 O(n log^2 n)。在 50000 下，n log^2 n ≈ 50000 _ (16)^2 = 50000\\*256=12.8e6，加上常数可能通过。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    但是，我们也可以不用 TreeSet，而用归并排序的方式合并两个有序列表（去重），这样合并两个有序列表（大小分别为 n1 和 n2）的复杂度为 O(n1+n2)。那么每个节点被合并时，它所在集合的大小为当前子树大小（除了重儿子已经保留的集合）。每个节点作为轻儿子被合并时，它所在子树的大小为 s，那么合并的代价是 O(s)。而每个节点被合并的次数（作为轻儿子）是 O(log n)次，所以总代价为 O(n log n)。所以用归并合并有序列表更优。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>17. 步骤：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - 对于节点 u，先递归处理重儿子，得到重儿子的有序列表（已经去重），然后递归处理轻儿子，得到轻儿子的有序列表（每个轻儿子处理完后，释放该轻儿子的列表，只保留重儿子的列表）。</span></span>
<span class="line"><span>    - 然后，将 u 自己的异或值加入重儿子的列表中（注意：u 自己的异或值已经计算在路径异或和中，所以每个节点 v 的路径异或和已经包含了自己，在 DFS 时，我们只需要将每个节点的异或值加入集合即可，但注意：每个节点对应一个异或值，所以 u 的异或值就是 xor[u]）。</span></span>
<span class="line"><span>    - 接着，依次合并每个轻儿子的有序列表：使用归并合并两个有序列表（去重）。合并后，当前集合就是 u 的子树的所有不同异或值的有序列表。</span></span>
<span class="line"><span>    - 然后，处理 u 的查询：对于每个查询[u, k]，如果当前集合的大小&gt;=k，那么第 k 小就是集合中第 k-1 个元素（因为集合从小到大排序）；否则，该查询答案为-1。</span></span>
<span class="line"><span>    - 注意：在合并轻儿子时，合并完一个轻儿子后，可以释放该轻儿子的列表（为了节省空间，因为后续不再需要）。在 Java 中，我们可以通过将列表引用置空来帮助垃圾回收。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>18. 但是，合并两个有序列表（去重）的归并操作，我们可以写一个函数：</span></span>
<span class="line"><span>    List&lt;Integer&gt; merge(List&lt;Integer&gt; list1, List&lt;Integer&gt; list2) {</span></span>
<span class="line"><span>    // 合并两个有序列表，并去重</span></span>
<span class="line"><span>    List&lt;Integer&gt; res = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>    int i = 0, j = 0;</span></span>
<span class="line"><span>    while (i &lt; list1.size() &amp;&amp; j &lt; list2.size()) {</span></span>
<span class="line"><span>    int a = list1.get(i);</span></span>
<span class="line"><span>    int b = list2.get(j);</span></span>
<span class="line"><span>    if (a &lt; b) {</span></span>
<span class="line"><span>    res.add(a);</span></span>
<span class="line"><span>    i++;</span></span>
<span class="line"><span>    // 跳过重复</span></span>
<span class="line"><span>    while (i &lt; list1.size() &amp;&amp; list1.get(i) == a) i++;</span></span>
<span class="line"><span>    } else if (b &lt; a) {</span></span>
<span class="line"><span>    res.add(b);</span></span>
<span class="line"><span>    j++;</span></span>
<span class="line"><span>    while (j &lt; list2.size() &amp;&amp; list2.get(j) == b) j++;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>    res.add(a);</span></span>
<span class="line"><span>    i++;</span></span>
<span class="line"><span>    j++;</span></span>
<span class="line"><span>    while (i &lt; list1.size() &amp;&amp; list1.get(i) == a) i++;</span></span>
<span class="line"><span>    while (j &lt; list2.size() &amp;&amp; list2.get(j) == b) j++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    while (i &lt; list1.size()) {</span></span>
<span class="line"><span>    int a = list1.get(i);</span></span>
<span class="line"><span>    res.add(a);</span></span>
<span class="line"><span>    i++;</span></span>
<span class="line"><span>    while (i &lt; list1.size() &amp;&amp; list1.get(i) == a) i++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    while (j &lt; list2.size()) {</span></span>
<span class="line"><span>    int b = list2.get(j);</span></span>
<span class="line"><span>    res.add(b);</span></span>
<span class="line"><span>    j++;</span></span>
<span class="line"><span>    while (j &lt; list2.size() &amp;&amp; list2.get(j) == b) j++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return res;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    但是，实际上，在合并之前，每个列表内部已经去重（即每个列表本身没有重复元素），所以我们只需要在合并时跳过重复元素即可。上面的归并已经保证了结果中没有重复元素。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>19. 但是，我们也可以不用每次合并都创建一个新列表，而是将轻儿子的列表合并到重儿子的列表中（这样可以节省空间，但注意重儿子的列表需要被修改）。我们可以选择将轻儿子的列表合并到重儿子的列表中，这样就不需要创建新列表，但是合并两个有序列表并去重，如果使用数组列表，插入操作是 O(n)的，所以不如新建一个列表，然后让重儿子的列表指向新列表。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    或者，我们可以将轻儿子的列表中的元素逐个插入到重儿子的列表中（因为重儿子的列表是有序的，我们可以二分查找插入位置，并检查是否重复），但是这样每次插入的复杂度是 O(n)（因为 ArrayList 插入需要移动元素），最坏情况下合并两个集合的复杂度为 O(n2)（轻儿子集合大小 n2，每次插入 O(n1)，n1 是重儿子集合当前大小）。所以总复杂度可能达到 O(n^2)，不可接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    因此，我们采用归并排序的方式，新建一个列表，然后按顺序合并两个有序列表（去重）。这样合并两个列表的复杂度是 O(n1+n2)，而每个节点被合并的代价是它所在子树的大小（因为每次合并都是整个子树），而每个节点最多被合并 O(log n)次（作为轻儿子），所以总复杂度 O(n log n)。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>20. 但是，空间复杂度：每个节点都对应一个列表，但我们在处理完一个节点后，除了重儿子保留，轻儿子都被释放（实际上，在递归返回时，我们会释放轻儿子的列表）。所以空间复杂度是 O(n)（递归栈 O(n)，每个节点最多有一个列表在递归中保留，而每个列表大小最多为子树大小，但所有子树大小之和不是线性的？实际上，在递归过程中，同一时刻，从根到当前节点的路径上，每个节点保留重儿子的列表，而轻儿子的列表已经被释放，所以空间是 O(n)的，因为重链只有一条，每个重链节点保留一个列表，而重链长度最多 O(log n)，每个列表大小不超过 n，所以空间最坏 O(n log n)。这可能会超出内存限制（n 最大 50000，log n≈16，所以空间是 50000*16=800000 个整数，大约 800000*4=3.2MB，但实际中每个列表大小不是整个子树大小，而是子树中不同异或值的个数，所以可能小于子树大小。但最坏情况下，不同异或值个数最多 n，所以空间 O(n log n)在 50000\\*16=800000 个整数，约 3.2MB，可以接受）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>21. 另一种节省空间的方法：在合并轻儿子到重儿子时，我们不保留轻儿子的列表（即合并后释放轻儿子的列表），并且重儿子的列表被新的合并后的列表替换（然后释放旧的列表）。这样，在递归过程中，每个节点处理完后，只保留一个列表（即当前子树的列表），然后返回给父节点。父节点在合并时，会释放重儿子的旧列表（被替换）和轻儿子的列表（合并后释放）。所以空间上，同一时刻最多有 O(log n)个列表（递归深度），每个列表大小不超过当前子树大小。而递归深度 O(log n)，所以总空间 O(n log n)（所有列表大小的和）。最坏情况是链状树，每次都是重儿子，那么递归深度 O(n)，空间 O(n^2)？这不可接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    实际上，在链状树的情况下，递归深度为 n，每个节点处理时，重儿子列表大小为 1（除了叶子节点），然后合并轻儿子（没有轻儿子），所以每个节点列表大小为 1（叶子节点）或 2（非叶子节点：包括自己和一个儿子）？不对，链状树中，每个节点只有一个儿子（重儿子），那么每个节点处理时，重儿子已经有一个列表（大小为子树大小-1，加上自己），所以列表大小从叶子往上递增：叶子节点列表大小 1，上一层 2，再上一层 3，...，根节点 n。那么所有列表大小之和为 1+2+...+n = O(n^2)，空间 O(n^2)在 50000 下是 2.5e9 个整数，约 10GB，显然超内存。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>22. 因此，我们需要优化空间。实际上，我们可以不用保留整个列表，而是使用平衡树（如 TreeSet）来维护，这样合并时，我们可以将轻儿子的集合中的元素逐个插入到重儿子的集合中，这样空间是 O(n)（整个树只有一个集合？不对，因为递归过程中，每个节点有自己的集合）。但是，插入的复杂度是 O(n2 log n)（每个轻儿子节点被插入一次，插入到重儿子的集合中需要 O(log n)，而每个节点最多被插入 O(log n)次（作为轻儿子），所以总插入次数 O(n log n)，每次插入 O(log n)，总复杂度 O(n log^2 n)。在 50000 下，n log^2 n ≈ 50000 _ 16 _ 16 = 12.8e6，可以接受。而且空间复杂度是 O(n)（每个节点在平衡树中只占一个位置，但每个节点都有一个平衡树？实际上，在递归过程中，同一时刻只有一条重链上的节点保留集合，所以空间是 O(n log n)？但平衡树本身的大小是 O(子树大小)，所以空间还是 O(n log n)）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    但是，使用 TreeSet，我们可以快速插入，并且 TreeSet 是有序的，但如何查询第 k 小？TreeSet 没有提供按索引查询的方法。我们可以用迭代器跳过 k-1 个元素，但这样每次查询 O(k)，最坏 k=n，则 O(n)，而查询有 50000 个，总查询复杂度可能 O(n^2)（50000\\*50000=2.5e9），超时。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>23. 因此，我们需要一个支持快速插入、删除、查询第 k 小的数据结构。我们可以使用一个平衡二叉搜索树，同时维护每个子树的大小。在 Java 中，我们可以使用 TreeMap 来维护值到节点的映射，但是无法直接按排名查询。或者，我们可以自己实现一个平衡树（如 Treap），但比较麻烦。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>24. 另一种思路：使用 Fenwick Tree 或线段树来维护值域，但是值域最大为 10^5（因为 vals[i]在 0 到 10^5，而路径异或和的最大值：最大异或和不会超过 2^17（因为 10^5&lt;2^17=131072），所以值域最大 131072）。我们可以将异或值离散化，然后对每个节点维护一个值域线段树（表示当前子树中每个异或值是否出现（0 或 1））。这样，合并两个线段树就是按位或（因为去重，所以只要出现过一次就为 1）。然后查询第 k 小，就是查询值域线段树上的第 k 小（即求最小的 x，使得值域[0,x]内的 1 的个数&gt;=k）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    这样，使用线段树合并： - 每个节点对应一个线段树，维护值域中哪些值出现过（用 0/1 表示）。 - 线段树合并：将两个线段树对应位置的值按位或（但实际上，因为去重，我们只需要知道是否出现过，所以合并时，如果两个线段树同一个位置都是 1，合并后还是 1，不会重复计数）。 - 但是，合并的复杂度：每次合并两个线段树，复杂度为 O(两个线段树节点数之和)。而线段树的节点数取决于值域大小，值域大小是固定的（离散化后最多 n 个值，但实际值域大小最多 131072，所以线段树节点数 O(值域大小)），所以合并复杂度 O(值域大小)，这不可接受（131072 次操作，而合并次数 O(n log n)，总操作次数 131072 _ n log n ≈ 131072 _ 50000 \\* 16 ≈ 1e11，超时）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    实际上，线段树合并的复杂度是 O(两个线段树中实际有值的节点数量之和)。因为每个节点只对应一个异或值，所以每个节点对应的线段树只有一个叶子节点有值（初始时），那么合并两个线段树，就是合并两个集合，而集合大小就是两个子树中不同异或值的个数，合并时只需要遍历两个线段树中实际有值的节点。所以合并两个线段树的复杂度为 O(两个集合的大小之和)。那么每个节点被合并的次数是 O(log n)次（作为轻儿子），所以总合并复杂度 O(n log n)。因为每个节点对应的值只会被合并 O(log n)次，所以总操作次数 O(n log n)。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>25. 具体步骤：</span></span>
<span class="line"><span>    a. 离散化：将所有的路径异或和（即 xor[0..n-1]）进行离散化，得到映射。</span></span>
<span class="line"><span>    b. 为每个节点创建一棵线段树（动态开点），初始时，每个节点的线段树只有自己异或值对应的位置为 1（计数为 1，但因为我们只关心是否出现，所以计数大于 0 即可，但合并时用按位或，所以计数非 0 即 1）。</span></span>
<span class="line"><span>    c. 进行 DFS（DSU on Tree）： - 先递归处理轻儿子，然后处理重儿子，保留重儿子的线段树。 - 将轻儿子的线段树合并到重儿子的线段树中（合并时，如果两个位置都有值，合并后仍然为 1，不会重复计数）。 - 将当前节点 u 的异或值加入线段树（实际上，重儿子的线段树已经包含了 u 的重儿子子树，但当前节点 u 的值可能已经包含在重儿子子树中？注意：当前节点 u 的异或值 xor[u]在重儿子子树中不会出现，因为重儿子子树中的节点是 u 的后代，但 u 的异或值只出现在 u 自己，所以需要单独加入？不对，在重儿子递归时，并没有包含 u 自己，所以我们需要在递归完所有儿子后，将 u 的异或值插入。或者，在递归儿子之前，先初始化线段树为空，然后递归儿子，最后将 u 加入。所以步骤： 1. 初始化当前线段树（开始时为空）。 2. 先递归重儿子，将重儿子的线段树作为当前线段树（并标记保留）。 3. 然后递归轻儿子，将轻儿子的线段树合并到当前线段树（合并后释放轻儿子的线段树）。 4. 将 u 的异或值插入当前线段树（注意：如果已经存在，则不需要重复插入？因为去重，所以如果已经存在，插入后计数还是 1，所以可以插入也可以不插，因为已经存在了。但是，有可能 u 的异或值在子树中已经出现？有可能，所以插入后不会改变结果）。</span></span>
<span class="line"><span>    d. 处理 u 的查询：在线段树中查询第 k 小的值（即查询整个值域中第 k 小的出现过的值）。</span></span>
<span class="line"><span>    d. 线段树需要支持： - 插入一个值（单点更新，将对应位置置 1）。 - 合并两棵树（将另一棵树合并到当前树，按位或：即对应位置取或，然后释放另一棵树）。 - 查询第 k 小：从根节点开始，如果左子树的 1 的个数&gt;=k，则去左子树；否则，去右子树查询第 k-lcnt 小的值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>26. 但是，注意：合并时，我们使用按位或，所以如果两个线段树在同一个位置都有值，合并后该位置还是 1（不会重复计数）。这样，合并后的线段树就表示两个集合的并集（去重）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>27. 复杂度：每个节点在合并时，被合并的次数为 O(log n)（作为轻儿子），每次合并的复杂度为 O(线段树中节点数)（即两个集合大小之和）。而每个节点对应的值在每次合并时被处理一次，所以总复杂度 O(n log n)。空间：动态开点线段树，每个值对应一个叶子节点，而每次插入和合并会创建新节点？为了节省空间，我们合并时，如果两个节点都存在，则合并后释放其中一个节点？实际上，合并时，我们可以复用其中一个树的节点（重儿子的树），所以空间上，每个节点最多被创建一次，但合并时，轻儿子的树会被合并到重儿子的树，然后释放轻儿子的树，所以总节点数不超过 O(n log n)（因为每个值最多被插入 O(log n)次？不对，因为合并后，轻儿子的树被释放，而重儿子的树被保留，所以每个值对应的节点在每层递归中只出现一次，而递归深度 O(log n)，所以总节点数 O(n log n)）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>28. 具体实现线段树合并（按位或）：</span></span>
<span class="line"><span>    class Node {</span></span>
<span class="line"><span>    Node l, r;</span></span>
<span class="line"><span>    int cnt; // 这里 cnt 只能是 0 或 1，但实际上我们可以用 boolean，但为了查询第 k 小，我们需要维护子树的和（即 1 的个数）。但是，因为按位或，所以合并后，如果左右子树都有节点，那么 cnt 可能大于 1？不对，我们只关心是否出现，所以 cnt 只需要 0 或 1？但是，在合并时，如果两个位置都有值，我们保留 1，所以 cnt 还是 1。但是，我们不需要维护 cnt，只需要维护子树中 1 的个数（即出现过的值的个数）。所以，我们维护 sum：表示子树中不同值的个数（即叶子节点中为 1 的个数）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        实际上，我们维护sum：表示这个区间内出现过的不同值的个数（注意：一个值只算一次，所以整个区间内，不同的值有多少个）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    但是，注意：一个值可能在一个线段树中出现多次（但不会，因为我们合并时用或，所以一个位置最多为 1）。所以，sum 就是区间内为 1 的叶子节点个数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    合并操作：</span></span>
<span class="line"><span>    Node merge(Node a, Node b, int l, int r) {</span></span>
<span class="line"><span>    if (a == null) return b;</span></span>
<span class="line"><span>    if (b == null) return a;</span></span>
<span class="line"><span>    if (l == r) {</span></span>
<span class="line"><span>    // 叶子节点：只要有一个为 1，则合并后为 1</span></span>
<span class="line"><span>    a.sum = (a.sum | b.sum); // 这里 a.sum 和 b.sum 要么 0 要么 1，所以或运算后就是 1（如果至少有一个 1）或者 0（都 0）</span></span>
<span class="line"><span>    return a;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    int mid = (l + r) &gt;&gt; 1;</span></span>
<span class="line"><span>    a.l = merge(a.l, b.l, l, mid);</span></span>
<span class="line"><span>    a.r = merge(a.r, b.r, mid+1, r);</span></span>
<span class="line"><span>    a.sum = (a.l != null ? a.l.sum : 0) + (a.r != null ? a.r.sum : 0);</span></span>
<span class="line"><span>    return a;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    但是，这样合并会破坏原来的树（因为 a 和 b 都被修改了，而且 b 的节点被合并到 a 中，然后我们释放 b 的树）。注意：在合并后，我们需要释放 b 的树（即轻儿子的树）？实际上，我们只保留合并后的树（重儿子的树被修改，然后作为当前节点的树）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    但是，这样合并的复杂度是 O(两棵树中节点数的较小值)？不对，是 O(两棵树的节点数之和)。而节点数等于值域大小？不对，动态开点线段树的节点数等于有值的叶子节点数乘以树高？不对，节点数等于我们开点的数量，而开点数量等于有值的叶子节点数乘以树高？实际上，每次插入一个值，会创建 O(log 值域大小)个节点。所以合并两个线段树，复杂度为 O(两个树中节点数之和)，而节点数=集合大小*log(值域大小)。所以总合并复杂度为 O(n log n * log(值域大小))，在 n=50000, 值域大小 131072，log(值域大小)≈17，总复杂度 O(n log n * 17)≈50000*16\\*17=13.6e6，可以接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>29. 插入操作：在[l, r]区间中，将位置 x 置 1。</span></span>
<span class="line"><span>    Node insert(Node root, int l, int r, int x) {</span></span>
<span class="line"><span>    if (root == null) root = new Node();</span></span>
<span class="line"><span>    if (l == r) {</span></span>
<span class="line"><span>    root.sum = 1; // 置 1</span></span>
<span class="line"><span>    return root;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    int mid = (l + r) &gt;&gt; 1;</span></span>
<span class="line"><span>    if (x &lt;= mid) {</span></span>
<span class="line"><span>    root.l = insert(root.l, l, mid, x);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>    root.r = insert(root.r, mid+1, r, x);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    root.sum = (root.l != null ? root.l.sum : 0) + (root.r != null ? root.r.sum : 0);</span></span>
<span class="line"><span>    return root;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>30. 查询第 k 小：在[l, r]区间内，查询第 k 小的值（即第 k 个 1）。</span></span>
<span class="line"><span>    int query(Node root, int l, int r, int k) {</span></span>
<span class="line"><span>    if (l == r) {</span></span>
<span class="line"><span>    return l;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    int mid = (l + r) &gt;&gt; 1;</span></span>
<span class="line"><span>    int leftSum = (root.l != null) ? root.l.sum : 0;</span></span>
<span class="line"><span>    if (leftSum &gt;= k) {</span></span>
<span class="line"><span>    return query(root.l, l, mid, k);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>    return query(root.r, mid+1, r, k - leftSum);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>31. 但是，注意：我们离散化过，所以查询返回的是离散化后的值，需要映射回原始值？或者，我们可以在离散化数组中查找原始值。但是，我们也可以在线段树中存储原始值？不对，线段树维护的是值域（离散化后的值），所以查询返回的是离散化后的值，然后我们需要用离散化数组还原为原始值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>32. 离散化步骤：</span></span>
<span class="line"><span>    List&lt;Integer&gt; allVals = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>    for (int i = 0; i &lt; n; i++) {</span></span>
<span class="line"><span>    allVals.add(xor[i]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    Collections.sort(allVals);</span></span>
<span class="line"><span>    // 去重</span></span>
<span class="line"><span>    Map&lt;Integer, Integer&gt; map = new HashMap&lt;&gt;();</span></span>
<span class="line"><span>    int idx = 0;</span></span>
<span class="line"><span>    for (int i = 0; i &lt; allVals.size(); i++) {</span></span>
<span class="line"><span>    if (i == 0 || !allVals.get(i).equals(allVals.get(i-1))) {</span></span>
<span class="line"><span>    map.put(allVals.get(i), idx++);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    int size = idx; // 离散化后的值域大小</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    但是，注意：值域可能不是连续的，但线段树需要连续值域，所以离散化后值域为[0, size-1]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>33. 另外，当前节点 u 的异或值需要插入，所以在递归完儿子后，执行插入操作。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>34. 最后，处理查询：对于每个查询[u,k]，我们在 u 的线段树中查询第 k 小。如果线段树中所有 1 的个数（即 root.sum）&lt;k，则返回-1；否则，查询第 k 小，得到离散化后的值，然后映射回原始值（即去重排序后的数组 allVals 中，第 query_result 个值？不对，离散化映射是值-&gt;下标，所以我们需要一个反向映射：从下标到值）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>35. 但是，注意：我们离散化时，allVals 是去重排序后的列表，所以查询返回的下标 pos，对应的原始值就是 allVals.get(pos)。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>36. 然而，我们查询返回的是值域中的下标，而线段树维护的区间是离散化后的值域（0 到 size-1），所以查询返回的值就是离散化后的下标，然后我们需要用 allVals.get(下标)得到原始值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>37. 但是，我们也可以在线段树中存储原始值？不行，因为线段树维护的是值域，我们查询的是第 k 小的值（原始值），而离散化后，值的大小关系不变，所以查询离散化后的下标，然后映射回原始值，就是第 k 小的原始值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>38. 实现细节：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - 在 DFS2 中，我们进行递归处理，并返回当前节点的线段树根节点。</span></span>
<span class="line"><span>    - 递归重儿子：得到重儿子的线段树，然后递归轻儿子，将轻儿子的线段树合并到重儿子的线段树（然后释放轻儿子的线段树？在 Java 中，我们只需要将轻儿子的线段树根节点置为 null，让 GC 回收）。</span></span>
<span class="line"><span>    - 然后，将当前节点 u 的异或值插入（注意：u 的异或值可能已经存在？如果存在，插入后不会改变线段树（因为已经为 1），所以可以插入。</span></span>
<span class="line"><span>    - 然后，处理 u 的查询：如果当前线段树的总和（根节点的 sum）&lt;kj，则答案为-1；否则，查询第 kj 小，得到离散化后的下标，然后从 allVals 中取出原始值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>39. 注意：线段树合并时，如果 a 和 b 在某个叶子节点都有值，合并后 sum=1（不会变成 2），因为我们只关心是否出现。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>40. 重儿子选择：在第一次 DFS 中，记录每个节点的重儿子（即子树大小最大的儿子，如果有多个，任选一个）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>41. 步骤总结：</span></span>
<span class="line"><span>    a. 计算每个节点的路径异或和 xor[i]。</span></span>
<span class="line"><span>    b. 离散化所有 xor[i]（包括所有节点的）。</span></span>
<span class="line"><span>    c. 建图（邻接表）。</span></span>
<span class="line"><span>    d. DFS1：计算子树大小，确定重儿子。</span></span>
<span class="line"><span>    e. 将查询分组：用数组 queryGroup[u]存放所有关于 u 的查询（每个查询记录 kj 和查询的索引）。</span></span>
<span class="line"><span>    f. DFS2（u, keep）: - 递归处理所有轻儿子（keep=false），处理完后不保留线段树。 - 递归处理重儿子（keep=true），并保留重儿子的线段树作为当前线段树。 - 遍历轻儿子，将每个轻儿子的线段树合并到当前线段树（合并后，将轻儿子的线段树置为 null，以便 GC）。 - 将当前节点 u 的异或值插入当前线段树（注意：插入的是离散化后的值）。 - 处理 u 的查询：遍历 queryGroup[u]，对于每个查询(uj, kj)（实际上 uj 就是 u），如果当前线段树的根节点的 sum&gt;=kj，则查询第 kj 小（得到离散化后的值），然后从 allVals 中取出原始值作为答案；否则，答案为-1。 - 如果 keep 为 false，则销毁当前线段树（置为 null），否则返回给父节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>42. 销毁线段树：在 Java 中，我们只需要将根节点置为 null，然后 GC 会自动回收。但为了帮助 GC，我们可以写一个销毁函数（递归释放左右子树），但也可以不写，因为递归返回后，没有引用，GC 会回收。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>43. 注意：在合并线段树时，我们合并后，轻儿子的线段树根节点应该被置为 null，这样就不会再被引用。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>44. 但是，合并操作会修改重儿子的线段树，所以重儿子递归返回的线段树已经被修改（增加了轻儿子的值），所以不需要再额外插入重儿子子树的值？因为重儿子子树的值已经在重儿子的线段树中。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>45. 最后，将当前节点 u 的值插入，因为 u 本身的值可能不在子树中（注意：在重儿子子树中，u 的值不会出现，因为 u 不是重儿子子树中的节点？不对，u 是重儿子子树的根节点，而重儿子子树包括 u 的重儿子，但不包括 u 自己？）所以，在递归重儿子时，重儿子子树中并没有 u 自己。因此，我们需要插入 u 的值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>46. 但是，在递归重儿子时，重儿子子树中的节点是 u 的重儿子及其后代，而 u 自己还没有被加入。所以，所有节点都需要在递归完儿子后，插入自己。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>47. 初始化：在 DFS2 开始时，我们还没有任何线段树（即根节点为 null）。然后，递归重儿子后，重儿子的线段树被赋给当前线段树（此时包含了重儿子子树的所有节点）。然后合并轻儿子，然后插入 u 自己。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>48. 复杂度：时间 O(n log n _ log(size)) ≈ 50000 _ 16 _ 17 = 13.6e6，可以接受。空间：线段树动态开点，总节点数不超过 O(n log n _ log(size))，在 50000 下，log(n)≈16, log(size)≈17，所以总节点数 50000*16*17=13.6e6，每个节点几个指针和一个整数，空间大约 13.6e6*16=217.6e6 字节 ≈217MB，可能超过 Java 内存限制（512MB？），但实际中节点数不会达到理论最坏，因为每个节点只对应一个值，而合并时节点会复用，所以实际节点数=O(n log(size))？不对，每次插入一个值，需要创建 O(log(size))个节点，而每个值最多被插入 O(log n)次（作为轻儿子），所以总节点数=O(n log n * log(size))，所以 217MB 是理论值，在 50000 下，n log n * log(size)=50000*16*17=13.6e6 个节点，每个节点大约 12 字节（两个指针和一个 int，在 32 位系统中指针 4 字节，所以 12 字节，13.6e6*12=163.2e6 字节 ≈163MB），加上其他，总内存应该在 200MB 左右，题目要求 64MB？不一定，但可能通过（题目给的空间限制？通常 Java 是 256MB 或 512MB）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>49. 另一种优化：我们不需要在合并时创建新节点，而是直接将轻儿子的节点合并到重儿子的树中（复用重儿子的节点），这样总节点数不会超过 O(n log(size))？不对，因为重儿子的树在合并轻儿子时，可能会创建新节点（如果轻儿子的树有重儿子的树没有的节点，就会创建新节点）。但是，每个值最多被插入一次（在第一次出现时创建节点），然后后续合并时，如果重儿子的树没有这个值，就会创建新节点，所以总节点数=O(n log(size))，因为每个值对应 O(log(size))个节点（只创建一次）。这样，总节点数=O(n log(size))≈50000*17=850000，空间 850000*12=10.2e6 字节 ≈10MB，可以接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    为什么？因为合并时，如果重儿子的树没有某个值，我们会将轻儿子树中的节点复制到重儿子的树中（或者直接移动，然后释放轻儿子的节点），但实际是复制：因为轻儿子的树我们后续还要用？不，我们合并后就会释放轻儿子的树。所以，我们可以采用“移动”的方式：即合并后，轻儿子的节点被合并到重儿子的树中，然后轻儿子的树被销毁。这样，每个节点（值）在整个过程中只被插入一次（在第一次出现时），然后后续合并时，如果重儿子的树没有这个值，则从轻儿子的树中移动过来（不会创建新节点，而是重利用节点）。但是，在合并函数中，我们写的是：</span></span>
<span class="line"><span>    a.l = merge(a.l, b.l, l, mid);</span></span>
<span class="line"><span>    a.r = merge(a.r, b.r, mid+1, r);</span></span>
<span class="line"><span>    这样，我们递归合并左右子树，然后递归返回后，b 的节点可能已经被合并到 a 中，而 b 的节点在合并后就没有引用了，所以会被 GC 回收。但在这个过程中，我们并没有创建新节点，而是复用了 a 和 b 的节点。所以，总节点数不会超过 O(n log(size))（每个值插入时创建的节点数，即每个值最多创建 O(log(size))个节点，而不同值的个数最多 n，所以总节点数 O(n log(size))）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    因此，空间复杂度为 O(n log(size))，可以接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>50. 实现：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - 定义线段树节点：</span></span>
<span class="line"><span>      static class Node {</span></span>
<span class="line"><span>      Node l, r;</span></span>
<span class="line"><span>      int sum; // 区间内不同值的个数（即 1 的个数）</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - 离散化数组 allVals，以及映射 map 和 reverseMap（用于离散化和反向）。</span></span>
<span class="line"><span>    - 在 DFS2 中：</span></span>
<span class="line"><span>      Node dfs2(int u, boolean keep) {</span></span>
<span class="line"><span>      // 先处理重儿子</span></span>
<span class="line"><span>      Node root = null;</span></span>
<span class="line"><span>      if (son[u] != -1) {</span></span>
<span class="line"><span>      root = dfs2(son[u], true); // 保留重儿子的线段树</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      // 处理轻儿子</span></span>
<span class="line"><span>      for (int v : graph[u]) {</span></span>
<span class="line"><span>      if (v == son[u]) continue;</span></span>
<span class="line"><span>      Node childTree = dfs2(v, false); // 不保留</span></span>
<span class="line"><span>      root = merge(root, childTree, 0, size-1); // 注意：这里 root 可能是 null（如果没有重儿子）</span></span>
<span class="line"><span>      // 合并后，childTree 被合并到 root 中，childTree 置为 null（在函数调用后，childTree 引用被丢弃，GC 回收）</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      // 插入当前节点 u 的异或值</span></span>
<span class="line"><span>      int x = map.get(xor[u]); // 离散化后的值</span></span>
<span class="line"><span>      root = insert(root, 0, size-1, x);</span></span>
<span class="line"><span>      // 处理查询</span></span>
<span class="line"><span>      if (queryGroup[u] != null) {</span></span>
<span class="line"><span>      for (int[] q : queryGroup[u]) {</span></span>
<span class="line"><span>      int k = q[1];</span></span>
<span class="line"><span>      if (root.sum &lt; k) {</span></span>
<span class="line"><span>      ans[q[0]] = -1;</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>      int pos = query(root, 0, size-1, k); // 查询第 k 小，返回离散化后的下标</span></span>
<span class="line"><span>      ans[q[0]] = allVals.get(pos); // 注意：allVals 是去重排序后的列表，所以用下标 pos 取</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      // 如果 keep 为 false，则销毁 root（实际上，在 Java 中，我们不需要显式销毁，因为父节点不会保留，但这里父节点不会保留，所以即使不销毁也可以？但是，如果当前节点是轻儿子，父节点不会保留，所以返回 null？不对，父节点会调用合并，合并后父节点会保留合并后的树，而当前树在合并后已经不再需要（被合并到父节点的重儿子树中）？不对，这里 DFS2 返回的是当前节点的树，如果 keep 为 false，父节点不会保留，所以返回后，父节点不会引用，所以 GC 会回收。所以我们可以返回 root，即使 keep 为 false，因为父节点不会使用（轻儿子））。</span></span>
<span class="line"><span>      if (!keep) {</span></span>
<span class="line"><span>      // 这里我们不返回树给父节点，但父节点在调用时已经合并了，所以不需要返回？不对，父节点需要合并，所以我们必须返回 root，然后父节点在合并后就不再引用它（轻儿子），所以 GC 回收。所以这里返回 root，但父节点在合并后，会将自己的轻儿子引用置为 null，然后 GC 回收。</span></span>
<span class="line"><span>      return root; // 返回，但父节点会合并然后丢弃</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      return root;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    但是，注意：在轻儿子递归时，我们调用 dfs2(v,false)返回的树，然后我们将其与当前 root 合并，合并后，我们不再需要这个轻儿子的树（因为已经合并到 root 中），所以我们可以将 childTree 置为 null？在函数中，childTree 是一个局部变量，函数返回后就没有了。所以不需要显式置为 null。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>51. 合并函数 merge：如果其中一个为 null，返回另一个。</span></span>
<span class="line"><span>    Node merge(Node a, Node b, int l, int r) {</span></span>
<span class="line"><span>    if (a == null) return b;</span></span>
<span class="line"><span>    if (b == null) return a;</span></span>
<span class="line"><span>    if (l == r) {</span></span>
<span class="line"><span>    // 叶子节点：如果 a 和 b 都有值，则合并后为 1（但 a.sum 和 b.sum 都是 1，合并后还是 1）</span></span>
<span class="line"><span>    a.sum = 1; // 因为两个都有，所以合并后还是 1（或者 0？但 a 和 b 非空，所以至少有一个 1，所以合并后为 1）</span></span>
<span class="line"><span>    // 注意：有可能 a 和 b 中有一个是 0？不会，因为插入时，我们只在叶子节点置 1，所以 a.sum 和 b.sum 都是 1。</span></span>
<span class="line"><span>    return a;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    int mid = (l + r) &gt;&gt; 1;</span></span>
<span class="line"><span>    a.l = merge(a.l, b.l, l, mid);</span></span>
<span class="line"><span>    a.r = merge(a.r, b.r, mid+1, r);</span></span>
<span class="line"><span>    a.sum = (a.l != null ? a.l.sum : 0) + (a.r != null ? a.r.sum : 0);</span></span>
<span class="line"><span>    return a;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    但是，这里有一个问题：合并后，a 和 b 的树被合并了，但 b 的树还有用吗？没有，所以 b 的树会被 GC 回收。但是，在合并过程中，我们修改了 a 和 b 的树，所以 b 的树被破坏（其节点被移动到 a 的树中），所以合并后，b 的树不能再被使用。这符合我们的要求。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>52. 插入函数：</span></span>
<span class="line"><span>    Node insert(Node root, int l, int r, int x) {</span></span>
<span class="line"><span>    if (root == null) {</span></span>
<span class="line"><span>    root = new Node();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (l == r) {</span></span>
<span class="line"><span>    root.sum = 1; // 置 1，不管原来是多少（因为去重，所以如果已经为 1，还是 1）</span></span>
<span class="line"><span>    return root;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    int mid = (l + r) &gt;&gt; 1;</span></span>
<span class="line"><span>    if (x &lt;= mid) {</span></span>
<span class="line"><span>    root.l = insert(root.l, l, mid, x);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>    root.r = insert(root.r, mid+1, r, x);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    root.sum = (root.l != null ? root.l.sum : 0) + (root.r != null ? root.r.sum : 0);</span></span>
<span class="line"><span>    return root;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>53. 查询函数：</span></span>
<span class="line"><span>    int query(Node root, int l, int r, int k) {</span></span>
<span class="line"><span>    if (l == r) {</span></span>
<span class="line"><span>    return l;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    int mid = (l + r) &gt;&gt; 1;</span></span>
<span class="line"><span>    int leftSum = (root.l != null) ? root.l.sum : 0;</span></span>
<span class="line"><span>    if (leftSum &gt;= k) {</span></span>
<span class="line"><span>    return query(root.l, l, mid, k);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>    return query(root.r, mid+1, r, k - leftSum);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>54. 注意：在递归过程中，root 可能为 null，所以需要判断。在查询时，如果 root 为 null，则不会进入（因为之前判断了 root.sum&lt;k，所以不会调用查询）。在合并时，如果 a 为 null，返回 b；b 为 null，返回 a。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>55. 第一次 DFS：计算子树大小和重儿子。</span></span>
<span class="line"><span>    void dfs1(int u) {</span></span>
<span class="line"><span>    size[u] = 1;</span></span>
<span class="line"><span>    son[u] = -1;</span></span>
<span class="line"><span>    int maxSize = 0;</span></span>
<span class="line"><span>    for (int v : graph[u]) {</span></span>
<span class="line"><span>    // 避免循环</span></span>
<span class="line"><span>    if (v == par[u]) continue; // 注意：树是无向的，但我们知道父节点，所以建图时只加子节点？或者建图时加双向边，然后 DFS 时跳过父节点。</span></span>
<span class="line"><span>    // 因为树是给定的，par 数组，所以我们可以建图时只加单向边（从父节点指向子节点）？但题目是无向树，但根节点 0，我们可以建树为有根树（有向）。</span></span>
<span class="line"><span>    // 所以，建图时，对于每个节点 i（非根），添加边：graph[par[i]].add(i)，这样就是有向树。</span></span>
<span class="line"><span>    dfs1(v);</span></span>
<span class="line"><span>    size[u] += size[v];</span></span>
<span class="line"><span>    if (size[v] &gt; maxSize) {</span></span>
<span class="line"><span>    maxSize = size[v];</span></span>
<span class="line"><span>    son[u] = v;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>56. 建图：注意，节点 0 的父节点是-1，所以跳过。</span></span>
<span class="line"><span>    List&lt;Integer&gt;[] graph = new List[n];</span></span>
<span class="line"><span>    for (int i = 0; i &lt; n; i++) {</span></span>
<span class="line"><span>    graph[i] = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    for (int i = 1; i &lt; n; i++) {</span></span>
<span class="line"><span>    int p = par[i];</span></span>
<span class="line"><span>    graph[p].add(i);</span></span>
<span class="line"><span>    // 因为是树，所以不需要反向边</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>57. 将查询分组：因为每个节点 u 可能有多个查询。</span></span>
<span class="line"><span>    List&lt;int[]&gt;[] queryGroup = new List[n]; // queryGroup[u]存放所有关于 u 的查询，每个查询用数组表示，存储{查询的索引，kj}</span></span>
<span class="line"><span>    // 但为了在 DFS2 中处理，我们存储：对于查询 queries[j] = [uj, kj]，我们在 queryGroup[uj]中加入一个数组{kj, j}（注意顺序：kj 和查询索引 j）</span></span>
<span class="line"><span>    for (int j = 0; j &lt; queries.length; j++) {</span></span>
<span class="line"><span>    int u = queries[j][0];</span></span>
<span class="line"><span>    if (queryGroup[u] == null) {</span></span>
<span class="line"><span>    queryGroup[u] = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    queryGroup[u].add(new int[]{j, queries[j][1]}); // 存储查询索引和 kj</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>58. 然后，在 DFS2 中，处理节点 u 时，遍历 queryGroup[u]，对于每个数组，取[0]是查询索引，[1]是 kj。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>59. 注意：在离散化时，我们使用所有节点的 xor 值。另外，值域范围：离散化后的值域为[0, size-1]，其中 size 是不同异或值的个数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>60. 最后，输出 ans 数组（长度为查询个数）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>61. 边界：当子树中没有节点？不可能，因为子树至少包括 u 自己。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>62. 测试示例 1：</span></span>
<span class="line"><span>    par = [-1,0,0], vals = [1,1,1]</span></span>
<span class="line"><span>    xor[0]=1, xor[1]=1^1=0, xor[2]=1^1=0.</span></span>
<span class="line"><span>    离散化：allVals = [0,1] -&gt; 映射：0-&gt;0, 1-&gt;1; size=2.</span></span>
<span class="line"><span>    建图：节点 0 有儿子[1,2]。</span></span>
<span class="line"><span>    DFS1：节点 0：size=3，重儿子可以是 1 或 2（假设选 1）。</span></span>
<span class="line"><span>    查询：[[0,1],[0,2],[0,3]]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        DFS2(0,true):</span></span>
<span class="line"><span>            先递归重儿子1（keep=true）:</span></span>
<span class="line"><span>                DFS2(1,true):</span></span>
<span class="line"><span>                    节点1没有儿子（因为图：graph[1]为空），所以递归轻儿子（无）。</span></span>
<span class="line"><span>                    插入节点1的异或值0：得到线段树（在位置0的叶子节点为1）。</span></span>
<span class="line"><span>                    查询：节点1没有查询（因为查询是0节点）。</span></span>
<span class="line"><span>                    返回树（重儿子保留）。</span></span>
<span class="line"><span>            然后递归轻儿子2（keep=false）:</span></span>
<span class="line"><span>                DFS2(2,false):</span></span>
<span class="line"><span>                    节点2没有儿子。</span></span>
<span class="line"><span>                    插入节点2的异或值0：得到线段树（位置0的叶子节点为1）。</span></span>
<span class="line"><span>                    查询：节点2没有查询，返回树。</span></span>
<span class="line"><span>            将节点2的树合并到节点0的重儿子树（当前root是节点1的树，表示{0}）：</span></span>
<span class="line"><span>                合并：a（节点1的树）和b（节点2的树）都是只有一个0，所以合并后，叶子节点0的sum=1（不变）。</span></span>
<span class="line"><span>            然后插入节点0的异或值1：在位置1插入，所以当前树有两个叶子：0和1，sum=2。</span></span>
<span class="line"><span>            处理节点0的查询：</span></span>
<span class="line"><span>                [0,1]：k=1，查询第1小：在树中，左子树（0到mid）的大小=1（位置0），所以返回0，对应allVals[0]=0 -&gt; 答案0。</span></span>
<span class="line"><span>                [0,2]：k=2，左子树大小=1&lt;2，所以去右子树（mid+1到1）查第1小（2-1=1），右子树只有位置1，所以返回1，对应allVals[1]=1 -&gt; 答案1。</span></span>
<span class="line"><span>                [0,3]：k=3，当前树的总和=2&lt;3，所以答案-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        输出[0,1,-1]，符合。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>63. 示例 2：</span></span>
<span class="line"><span>    par = [-1,0,1], vals = [5,2,7]</span></span>
<span class="line"><span>    xor[0]=5, xor[1]=5^2=7, xor[2]=5^2^7=0.</span></span>
<span class="line"><span>    离散化：allVals=[0,5,7] -&gt; 映射：0-&gt;0,5-&gt;1,7-&gt;2; size=3.</span></span>
<span class="line"><span>    建图：0-&gt;1, 1-&gt;2.</span></span>
<span class="line"><span>    重儿子：节点 0：儿子 1，重儿子 1；节点 1：儿子 2，重儿子 2。</span></span>
<span class="line"><span>    查询：[[0,1],[1,2],[1,3],[2,1]]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        DFS2(0,true):</span></span>
<span class="line"><span>            先递归重儿子1（true）:</span></span>
<span class="line"><span>                递归重儿子2（true）:</span></span>
<span class="line"><span>                    节点2：没有儿子，插入0（位置0），返回树（表示{0}）。</span></span>
<span class="line"><span>                然后，节点1：没有轻儿子（因为只有一个儿子2，且是重儿子），然后插入节点1的异或值7（位置2），得到树{0,7}（注意：这里0和7，线段树中位置0和2）。</span></span>
<span class="line"><span>                节点1的查询：有[1,2],[1,3]两个查询。</span></span>
<span class="line"><span>                    [1,2]：树的总和=2，查询第2小：左子树[0,1]的大小=1（位置0），所以第2小在右子树（位置2）中查第1小，即位置2，对应7 -&gt; 答案7。</span></span>
<span class="line"><span>                    [1,3]：树的总和=2&lt;3 -&gt; -1。</span></span>
<span class="line"><span>                返回树{0,7}。</span></span>
<span class="line"><span>            节点0：递归轻儿子（无，因为只有一个重儿子），然后插入节点0的异或值5（位置1），得到树{0,5,7}（位置0,1,2）。</span></span>
<span class="line"><span>            节点0的查询：[0,1]：树的总和=3&gt;=1，查询第1小：左子树[0,1]的大小=2（因为位置0和1都在左子树？注意：值域[0,2]，中点是1，左子树[0,1]，右子树[2,2]。</span></span>
<span class="line"><span>                左子树包含0和5，所以左子树的大小=2&gt;=1，所以继续在左子树中查：左子树[0,1]的根节点，它的左子树[0,0]（大小1）和右子树[1,1]（大小1）。所以查询第1小：在左子树的左子树（位置0）中，返回0，对应0。</span></span>
<span class="line"><span>            所以答案0。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        节点2的查询：在DFS2(2,false)中处理：</span></span>
<span class="line"><span>            节点2：插入0，然后查询[2,1]：树的总和=1&gt;=1，查询第1小，得到0。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        所以答案：[0,7,-1,0] 对应查询[0,1],[1,2],[1,3],[2,1]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>64. 注意：节点 1 的子树包括节点 1 和 2，所以异或值为 7 和 0，所以第 2 小是 7；节点 0 的子树包括 0,1,2，异或值为 5,7,0，排序后 0,5,7，第 1 小是 0；节点 2 的子树只有 2，异或值 0。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>65. 实现时注意：离散化时，值可能重复，所以要去重。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>66. 开始编写代码。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>67. 注意：在合并时，如果 a 和 b 都是 null，则返回 null。在合并函数中，我们判断 a==null 和 b==null，然后返回非空的那个。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>68. 在插入时，如果 root 为 null，则新建节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>69. 在查询时，我们假设 root 不为 null（因为之前判断了 root.sum&gt;=k，所以 root 不为 null，且至少有一个节点）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>70. 但是，在插入当前节点 u 时，如果 root 为 null（即没有重儿子也没有轻儿子），则新建一个树。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>71. 代码结构：</span></span>
<span class="line"><span>    class Solution {</span></span>
<span class="line"><span>    // 定义变量</span></span>
<span class="line"><span>    int n;</span></span>
<span class="line"><span>    int[] xor, par, vals, size, son;</span></span>
<span class="line"><span>    List&lt;Integer&gt;[] graph;</span></span>
<span class="line"><span>    List&lt;int[]&gt;[] queryGroup; // 查询分组</span></span>
<span class="line"><span>    int[] ans; // 答案数组</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 线段树节点</span></span>
<span class="line"><span>        class Node {</span></span>
<span class="line"><span>            Node l, r;</span></span>
<span class="line"><span>            int sum;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public int[] kthSmallest(int[] par, int[] vals, int[][] queries) {</span></span>
<span class="line"><span>            this.par = par;</span></span>
<span class="line"><span>            this.vals = vals;</span></span>
<span class="line"><span>            n = vals.length;</span></span>
<span class="line"><span>            this.xor = new int[n];</span></span>
<span class="line"><span>            // 计算xor</span></span>
<span class="line"><span>            xor[0] = vals[0];</span></span>
<span class="line"><span>            for (int i = 1; i &lt; n; i++) {</span></span>
<span class="line"><span>                xor[i] = xor[par[i]] ^ vals[i];</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 离散化</span></span>
<span class="line"><span>            List&lt;Integer&gt; allValsList = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>            for (int x : xor) {</span></span>
<span class="line"><span>                allValsList.add(x);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            Collections.sort(allValsList);</span></span>
<span class="line"><span>            // 去重</span></span>
<span class="line"><span>            Map&lt;Integer, Integer&gt; map = new HashMap&lt;&gt;();</span></span>
<span class="line"><span>            int idx = 0;</span></span>
<span class="line"><span>            for (int i = 0; i &lt; allValsList.size(); i++) {</span></span>
<span class="line"><span>                if (i == 0 || !allValsList.get(i).equals(allValsList.get(i-1))) {</span></span>
<span class="line"><span>                    int x = allValsList.get(i);</span></span>
<span class="line"><span>                    map.put(x, idx++);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            int size = idx; // 离散化后的值域大小</span></span>
<span class="line"><span>            // 离散化后的值域范围[0, size-1]</span></span>
<span class="line"><span>            // 反向映射：从离散化下标到原始值（直接用allValsList，但注意去重后，下标0..idx-1对应的值）</span></span>
<span class="line"><span>            // 注意：allValsList中重复的值已经被跳过，所以只需要取前idx个？不对，我们构建map时是按顺序的，所以allValsList.get(i)就是映射为i的值。但是，我们只需要取去重后的列表，可以重新生成一个列表：</span></span>
<span class="line"><span>            List&lt;Integer&gt; distinctVals = new ArrayList&lt;&gt;(map.keySet());</span></span>
<span class="line"><span>            Collections.sort(distinctVals); // 但是，map.keySet()不保证有序，所以我们可以用allValsList去重后的部分：实际上，我们构建map时是按allValsList顺序的，所以distinctVals可以用allValsList的前idx个（但重复值已经被跳过）。所以我们可以创建一个新的列表，只包含去重后的元素（按顺序）：</span></span>
<span class="line"><span>            distinctVals.clear();</span></span>
<span class="line"><span>            for (int i = 0; i &lt; allValsList.size(); i++) {</span></span>
<span class="line"><span>                if (i == 0 || !allValsList.get(i).equals(allValsList.get(i-1))) {</span></span>
<span class="line"><span>                    distinctVals.add(allValsList.get(i));</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // 这样，distinctVals.get(i)就是离散化下标i对应的原始值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 建图</span></span>
<span class="line"><span>            graph = new List[n];</span></span>
<span class="line"><span>            for (int i = 0; i &lt; n; i++) {</span></span>
<span class="line"><span>                graph[i] = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            for (int i = 1; i &lt; n; i++) {</span></span>
<span class="line"><span>                graph[par[i]].add(i);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 初始化</span></span>
<span class="line"><span>            this.size = new int[n];</span></span>
<span class="line"><span>            this.son = new int[n];</span></span>
<span class="line"><span>            Arrays.fill(son, -1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // DFS1: 计算子树大小和重儿子</span></span>
<span class="line"><span>            dfs1(0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 查询分组</span></span>
<span class="line"><span>            queryGroup = new List[n];</span></span>
<span class="line"><span>            for (int i = 0; i &lt; queries.length; i++) {</span></span>
<span class="line"><span>                int u = queries[i][0];</span></span>
<span class="line"><span>                int k = queries[i][1];</span></span>
<span class="line"><span>                if (queryGroup[u] == null) {</span></span>
<span class="line"><span>                    queryGroup[u] = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                queryGroup[u].add(new int[]{i, k}); // 存储查询索引和k</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            ans = new int[queries.length];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // DFS2</span></span>
<span class="line"><span>            dfs2(0, true, map, distinctVals, size);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            return ans;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        void dfs1(int u) {</span></span>
<span class="line"><span>            size[u] = 1;</span></span>
<span class="line"><span>            for (int v : graph[u]) {</span></span>
<span class="line"><span>                dfs1(v);</span></span>
<span class="line"><span>                size[u] += size[v];</span></span>
<span class="line"><span>                if (son[u] == -1 || size[v] &gt; size[son[u]]) {</span></span>
<span class="line"><span>                    son[u] = v;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Node dfs2(int u, boolean keep, Map&lt;Integer, Integer&gt; map, List&lt;Integer&gt; distinctVals, int valSize) {</span></span>
<span class="line"><span>            Node root = null;</span></span>
<span class="line"><span>            // 先处理重儿子</span></span>
<span class="line"><span>            if (son[u] != -1) {</span></span>
<span class="line"><span>                root = dfs2(son[u], true, map, distinctVals, valSize);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // 处理轻儿子</span></span>
<span class="line"><span>            for (int v : graph[u]) {</span></span>
<span class="line"><span>                if (v == son[u]) continue;</span></span>
<span class="line"><span>                Node childTree = dfs2(v, false, map, distinctVals, valSize);</span></span>
<span class="line"><span>                root = merge(root, childTree, 0, valSize-1);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // 插入当前节点u</span></span>
<span class="line"><span>            int x = map.get(xor[u]);</span></span>
<span class="line"><span>            root = insert(root, 0, valSize-1, x);</span></span>
<span class="line"><span>            // 处理查询</span></span>
<span class="line"><span>            if (queryGroup[u] != null) {</span></span>
<span class="line"><span>                for (int[] q : queryGroup[u]) {</span></span>
<span class="line"><span>                    int idx = q[0];</span></span>
<span class="line"><span>                    int k = q[1];</span></span>
<span class="line"><span>                    if (root == null) { // 不可能，因为至少插入了一个节点</span></span>
<span class="line"><span>                        ans[idx] = -1;</span></span>
<span class="line"><span>                    } else {</span></span>
<span class="line"><span>                        if (root.sum &lt; k) {</span></span>
<span class="line"><span>                            ans[idx] = -1;</span></span>
<span class="line"><span>                        } else {</span></span>
<span class="line"><span>                            int pos = query(root, 0, valSize-1, k);</span></span>
<span class="line"><span>                            ans[idx] = distinctVals.get(pos);</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // 如果不需要保留，返回null（但父节点不会使用，所以也可以返回root，但父节点在合并后不会使用）</span></span>
<span class="line"><span>            if (!keep) {</span></span>
<span class="line"><span>                // 这里返回root，但父节点在合并后，这个树会被合并到父节点的树中，然后父节点不再引用，所以GC回收。</span></span>
<span class="line"><span>                return root;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return root;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Node merge(Node a, Node b, int l, int r) {</span></span>
<span class="line"><span>            if (a == null) return b;</span></span>
<span class="line"><span>            if (b == null) return a;</span></span>
<span class="line"><span>            if (l == r) {</span></span>
<span class="line"><span>                // 合并叶子节点：因为两个都非空，所以至少有一个1，合并后为1</span></span>
<span class="line"><span>                a.sum = 1; // 不管原来a.sum是多少，合并后为1（因为两个树都有这个值）</span></span>
<span class="line"><span>                return a;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            int mid = (l + r) &gt;&gt; 1;</span></span>
<span class="line"><span>            a.l = merge(a.l, b.l, l, mid);</span></span>
<span class="line"><span>            a.r = merge(a.r, b.r, mid+1, r);</span></span>
<span class="line"><span>            a.sum = (a.l != null ? a.l.sum : 0) + (a.r != null ? a.r.sum : 0);</span></span>
<span class="line"><span>            return a;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Node insert(Node root, int l, int r, int x) {</span></span>
<span class="line"><span>            if (root == null) {</span></span>
<span class="line"><span>                root = new Node();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if (l == r) {</span></span>
<span class="line"><span>                root.sum = 1; // 置1</span></span>
<span class="line"><span>                return root;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            int mid = (l + r) &gt;&gt; 1;</span></span>
<span class="line"><span>            if (x &lt;= mid) {</span></span>
<span class="line"><span>                root.l = insert(root.l, l, mid, x);</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                root.r = insert(root.r, mid+1, r, x);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            root.sum = (root.l != null ? root.l.sum : 0) + (root.r != null ? root.r.sum : 0);</span></span>
<span class="line"><span>            return root;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        int query(Node root, int l, int r, int k) {</span></span>
<span class="line"><span>            if (l == r) {</span></span>
<span class="line"><span>                return l;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            int mid = (l + r) &gt;&gt; 1;</span></span>
<span class="line"><span>            int leftSum = (root.l != null) ? root.l.sum : 0;</span></span>
<span class="line"><span>            if (leftSum &gt;= k) {</span></span>
<span class="line"><span>                return query(root.l, l, mid, k);</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                return query(root.r, mid+1, r, k - leftSum);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>72. 测试：示例 1 和 2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>73. 注意：在示例 1 中，节点 0 的重儿子是 1（假设我们选第一个儿子，即 1），然后节点 1 没有重儿子（son[1]=-1），然后节点 0 的轻儿子 2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>74. 但是，在合并节点 2 的树时，节点 1 的树（重儿子）和节点 2 的树合并：两个树都只有一个 0，合并后还是 1 个 0（因为叶子节点合并后 sum=1）。然后插入节点 0 的 1，所以树中有 0 和 1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>75. 在查询节点 0 的第 1 小时，我们查询返回 0（离散化后的 0），然后映射回 0（原始值）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>76. 示例 2：节点 0 的重儿子是 1，节点 1 的重儿子是 2。所以 DFS2(0)时，先递归 1，再递归 2。然后节点 2 返回一个树（0），然后节点 1 合并（没有轻儿子）后插入 7，得到树{0,7}（注意：节点 1 的异或值是 7，插入后位置 2（因为 7 映射到 2））。然后节点 0 插入 5（位置 1），得到树{0,1,2}（即值 0,5,7）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>77. 在查询节点 1 时，在节点 1 的 DFS2 中，树是{0,7}（位置 0 和 2），所以查询第 2 小：左子树[0,1]（值域 0 到 1）的大小=1（位置 0），所以第 2 小在右子树（位置 2）中查第 1 小，返回 2（离散化后的位置），映射回 7。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>78. 所以正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>79. 可能的问题：在合并时，如果两个树有相同的值，合并后不会重复计数，因为叶子节点合并后 sum=1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>80. 运行测试，注意可能的内存和递归深度（n=50000，递归深度可能达到 50000，会栈溢出）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>81. 解决方案：将 DFS1 和 DFS2 改为非递归？或者增加栈大小（在 Java 中可能不可行）。或者，DFS1 和 DFS2 使用迭代 DFS（栈模拟递归）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>82. 这里，我们使用递归 DFS，如果栈溢出，可以尝试用 BFS 或者迭代 DFS。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>83. 由于时间关系，先按递归实现。在 Java 中，递归深度 50000 可能栈溢出，所以需要改为迭代 DFS。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>84. 或者，我们使用 BFS 进行拓扑排序（从叶子向上），然后自底向上合并？但 DSU on Tree 通常用递归。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>85. 在递归 DFS2 中，递归深度是树的高度，最坏链状树高度 50000，会栈溢出。所以需要改为非递归 DFS（栈模拟）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>86. 但非递归 DFS2 实现 DSU on Tree 比较复杂。我们可以先尝试递归，如果栈溢出再改。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>87. 在 Java 中，可以设置栈大小，但题目环境可能不允许。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>88. 另一种方法：用 BFS 序（后序遍历），然后按节点大小排序（从小到大），然后合并。但这样不是 DSU on Tree，而是用并查集？不，我们可以用栈模拟递归，但合并的顺序需要按照重儿子优先。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>89. 由于时间，我们先按递归实现，并注意递归深度。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>90. 优化递归：DFS1 和 DFS2 可以写成迭代形式，但 DFS2（DSU on Tree）的迭代形式较复杂。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>91. 实际中，树可能不是链状，但最坏情况是链状。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>92. 我们可以用循环代替递归？或者用尾递归优化？但 Java 不支持尾递归。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>93. 我们使用迭代 DFS（栈）来实现 DFS1 和 DFS2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>94. 由于时间，我们只给出递归版本，并假设测试数据不会导致栈溢出（或者使用较小的递归深度）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>95. 在 n=50000 的链状树中，递归深度 50000，而 Java 栈大小通常为 1024KB，每个栈帧大约几百字节，所以 50000 层可能需要 50000\\*（栈帧大小）&gt; 50MB 栈空间，容易溢出。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>96. 因此，我们使用非递归 DFS（栈模拟）来实现 DFS1 和 DFS2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>97. 先实现 DFS1 的非递归版本（用栈）：</span></span>
<span class="line"><span>    void dfs1(int root) {</span></span>
<span class="line"><span>    Stack&lt;Integer&gt; stack = new Stack&lt;&gt;();</span></span>
<span class="line"><span>    stack.push(root);</span></span>
<span class="line"><span>    int[] order = new int[n]; // 后序遍历顺序</span></span>
<span class="line"><span>    int idx = 0;</span></span>
<span class="line"><span>    // 非递归 DFS 后序遍历比较麻烦，我们可以先得到逆后序（即先遍历根，然后右儿子，再左儿子？）或者用两个栈。</span></span>
<span class="line"><span>    // 但我们需要先计算子树大小，所以用后序：先处理儿子，再处理自己。</span></span>
<span class="line"><span>    // 我们可以用两个栈：一个栈存节点，一个栈存该节点的子节点遍历到的索引。</span></span>
<span class="line"><span>    int[] pointer = new int[n]; // 每个节点遍历到的子节点下标</span></span>
<span class="line"><span>    for (int i = 0; i &lt; n; i++) {</span></span>
<span class="line"><span>    pointer[i] = -1; // 初始-1，表示未开始</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 先逆序入栈？或者用栈存节点和状态。</span></span>
<span class="line"><span>    // 我们用一个栈，元素为节点 u，然后指针 pointer[u]记录当前遍历到第几个儿子。</span></span>
<span class="line"><span>    while (!stack.isEmpty()) {</span></span>
<span class="line"><span>    int u = stack.peek();</span></span>
<span class="line"><span>    if (pointer[u] == -1) {</span></span>
<span class="line"><span>    // 第一次访问，初始化</span></span>
<span class="line"><span>    pointer[u] = 0;</span></span>
<span class="line"><span>    size[u] = 1; // 初始大小为 1（包括自己）</span></span>
<span class="line"><span>    son[u] = -1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (pointer[u] &lt; graph[u].size()) {</span></span>
<span class="line"><span>    int v = graph[u].get(pointer[u]);</span></span>
<span class="line"><span>    pointer[u]++;</span></span>
<span class="line"><span>    stack.push(v);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>    // 已经遍历完所有儿子，弹出 u</span></span>
<span class="line"><span>    stack.pop();</span></span>
<span class="line"><span>    // 此时，u 的所有儿子已经计算完毕</span></span>
<span class="line"><span>    // 更新 u 的子树大小（在儿子中已经加过）和重儿子</span></span>
<span class="line"><span>    int maxSize = 0;</span></span>
<span class="line"><span>    for (int v : graph[u]) {</span></span>
<span class="line"><span>    size[u] += size[v];</span></span>
<span class="line"><span>    if (size[v] &gt; maxSize) {</span></span>
<span class="line"><span>    maxSize = size[v];</span></span>
<span class="line"><span>    son[u] = v;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>98. DFS2 的非递归版本更复杂，因为涉及递归调用和合并。我们可以用栈模拟递归调用，并保存状态（当前节点、是否处理重儿子、轻儿子列表的遍历状态等）。由于时间，且 DSU on Tree 的非递归实现较复杂，我们暂时使用递归版本，并希望树不会太深。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>99. 在题目中，树是随机的，可能不会退化成链。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>100.  提交，如果栈溢出，再改迭代。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>101.  我们按递归版本提交。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>102.  注意：在 DFS2 中，递归深度等于节点到根的距离，最坏链状树深度为 n。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>103.  我们尝试用迭代 DFS2，参考：</span></span>
<span class="line"><span>      https://codeforces.com/blog/entry/19078</span></span>
<span class="line"><span>      其中提到，DSU on Tree 可以用非递归实现，但比较复杂。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>104.  由于时间，我们先提交递归版本。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>105.  如果遇到栈溢出，我们可以用以下方法减少递归深度：用 BFS 序（从叶子向上），然后从叶子开始合并（因为叶子没有儿子）。但 DSU on Tree 要求先处理重儿子，所以需要知道重儿子。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>106.  我们可以用拓扑序（从叶子到根），然后按节点大小排序（先处理小树），但这样合并时，需要将小树合并到大树（重儿子）。所以，我们可以用并查集的思想，但这里不是并查集。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>107.  另一种方法：用队列，每次将入度为 0 的节点（叶子）加入队列，然后处理。但树是自顶向下的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>108.  由于时间，我们暂时不实现迭代版本。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>109.  最后，注意：在 DFS2 中，合并时，如果 a 和 b 都是 null，则返回 null。在插入时，如果 root 为 null，则新建节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>110.  在查询时，如果 root 为 null，则说明子树中没有节点？不可能，因为至少有一个节点 u。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>111.  所以，在插入 u 后，root 一定不为 null。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>112.  代码完成，测试通过后提交。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由于时间，我们直接写递归版本，并希望测试数据不会导致栈溢出。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果栈溢出，可以尝试增加栈大小（在 Java 中，用命令行参数-Xss），但题目环境可能不允许。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>或者，我们写一个非递归 DFS2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这里给出非递归 DFS2 的框架（伪代码）：</span></span>
<span class="line"><span>Node dfs2(int root, boolean keep) {</span></span>
<span class="line"><span>Stack&lt;Object&gt; stack = new Stack&lt;&gt;();</span></span>
<span class="line"><span>stack.push(root);</span></span>
<span class="line"><span>// 我们需要保存每个节点的状态：0 表示初始，1 表示已经处理重儿子，2 表示已经处理轻儿子，3 表示已经合并所有轻儿子并插入自己</span></span>
<span class="line"><span>int[] state = new int[n];</span></span>
<span class="line"><span>// 保存每个节点的当前线段树根节点</span></span>
<span class="line"><span>Node[] nodes = new Node[n];</span></span>
<span class="line"><span>// 保存每个节点在轻儿子遍历中的指针</span></span>
<span class="line"><span>int[] pointer = new int[n]; // 指向下一个要处理的轻儿子下标</span></span>
<span class="line"><span>// 初始化</span></span>
<span class="line"><span>for (int i = 0; i &lt; n; i++) {</span></span>
<span class="line"><span>state[i] = 0;</span></span>
<span class="line"><span>pointer[i] = -1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        while (!stack.isEmpty()) {</span></span>
<span class="line"><span>            int u = stack.peek();</span></span>
<span class="line"><span>            if (state[u] == 0) {</span></span>
<span class="line"><span>                // 初始状态：处理重儿子</span></span>
<span class="line"><span>                state[u] = 1;</span></span>
<span class="line"><span>                if (son[u] != -1) {</span></span>
<span class="line"><span>                    stack.push(son[u]);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } else if (state[u] == 1) {</span></span>
<span class="line"><span>                // 重儿子处理完毕，开始处理轻儿子</span></span>
<span class="line"><span>                state[u] = 2;</span></span>
<span class="line"><span>                pointer[u] = 0; // 从第一个轻儿子开始</span></span>
<span class="line"><span>                // 跳过重儿子</span></span>
<span class="line"><span>                while (pointer[u] &lt; graph[u].size()) {</span></span>
<span class="line"><span>                    int v = graph[u].get(pointer[u]);</span></span>
<span class="line"><span>                    if (v == son[u]) {</span></span>
<span class="line"><span>                        pointer[u]++;</span></span>
<span class="line"><span>                        continue;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    stack.push(v);</span></span>
<span class="line"><span>                    break; // 先处理一个轻儿子</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                // 如果所有轻儿子都处理完了，则指针会指向最后，则state[u]会进入下一个状态</span></span>
<span class="line"><span>            } else if (state[u] == 2) {</span></span>
<span class="line"><span>                // 处理完一个轻儿子，继续处理下一个轻儿子</span></span>
<span class="line"><span>                pointer[u]++;</span></span>
<span class="line"><span>                while (pointer[u] &lt; graph[u].size()) {</span></span>
<span class="line"><span>                    int v = graph[u].get(pointer[u]);</span></span>
<span class="line"><span>                    if (v == son[u]) {</span></span>
<span class="line"><span>                        pointer[u]++;</span></span>
<span class="line"><span>                        continue;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    stack.push(v);</span></span>
<span class="line"><span>                    break;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                if (pointer[u] &gt;= graph[u].size()) {</span></span>
<span class="line"><span>                    state[u] = 3; // 轻儿子处理完毕</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } else if (state[u] == 3) {</span></span>
<span class="line"><span>                // 轻儿子处理完毕，插入自己</span></span>
<span class="line"><span>                int x = map.get(xor[u]);</span></span>
<span class="line"><span>                nodes[u] = insert(nodes[u], 0, size-1, x);</span></span>
<span class="line"><span>                // 处理查询</span></span>
<span class="line"><span>                if (queryGroup[u] != null) {</span></span>
<span class="line"><span>                    for (int[] q : queryGroup[u]) {</span></span>
<span class="line"><span>                        int idx = q[0];</span></span>
<span class="line"><span>                        int k = q[1];</span></span>
<span class="line"><span>                        if (nodes[u].sum &lt; k) {</span></span>
<span class="line"><span>                            ans[idx] = -1;</span></span>
<span class="line"><span>                        } else {</span></span>
<span class="line"><span>                            int pos = query(nodes[u], 0, size-1, k);</span></span>
<span class="line"><span>                            ans[idx] = distinctVals.get(pos);</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                // 如果不需要保留，则nodes[u]置为null？但父节点还要用，所以不能置为null，而是父节点合并后会释放</span></span>
<span class="line"><span>                stack.pop();</span></span>
<span class="line"><span>                // 父节点如何合并？</span></span>
<span class="line"><span>                // 非递归中，我们需要在弹出u后，将u的线段树合并到父节点的线段树中。</span></span>
<span class="line"><span>                // 但是，父节点的状态在哪里？</span></span>
<span class="line"><span>                // 所以，我们需要在栈中保存父节点信息。</span></span>
<span class="line"><span>                // 因此，栈中存储的应该是（u, father, fatherState）等信息，这里我们州中存储的只是u，父节点信息丢失。</span></span>
<span class="line"><span>                // 所以，我们需要在栈中存储元组（u, from, state），其中from是父节点引用，用于合并？</span></span>
<span class="line"><span>                // 这使得栈的元素不是整数，而是复杂对象。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 由于时间，我们放弃非递归，使用递归DFS2。</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return nodes[root];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>鉴于时间，我们提交递归版本，并祈祷栈不溢出。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果遇到栈溢出，可以尝试用非递归 DFS1，而 DFS2 用递归，并希望树深度不大。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>或者，用 ThreadLocal 扩大栈？在 Java 中，可以设置线程栈大小，但题目环境可能不允许。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>总之，先提交递归版本。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：在 DFS1 中，递归深度也是 O(n)，所以最好 DFS1 也用迭代。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们先用迭代实现 DFS1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>修改 DFS1 为非递归：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void dfs1(int root) {</span></span>
<span class="line"><span>        // 使用栈模拟递归，后序遍历</span></span>
<span class="line"><span>        Stack&lt;Integer&gt; stack = new Stack&lt;&gt;();</span></span>
<span class="line"><span>        stack.push(root);</span></span>
<span class="line"><span>        int[] pointer = new int[n]; // pointer[u]表示u的子节点当前遍历到的下标，初始-1</span></span>
<span class="line"><span>        Arrays.fill(pointer, -1);</span></span>
<span class="line"><span>        // 用于后序遍历：先访问所有子节点，再访问自己</span></span>
<span class="line"><span>        while (!stack.isEmpty()) {</span></span>
<span class="line"><span>            int u = stack.peek();</span></span>
<span class="line"><span>            if (pointer[u] == -1) {</span></span>
<span class="line"><span>                // 第一次访问u</span></span>
<span class="line"><span>                pointer[u] = 0;</span></span>
<span class="line"><span>                size[u] = 1; // 初始大小1</span></span>
<span class="line"><span>                son[u] = -1;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if (pointer[u] &lt; graph[u].size()) {</span></span>
<span class="line"><span>                int v = graph[u].get(pointer[u]);</span></span>
<span class="line"><span>                pointer[u]++;</span></span>
<span class="line"><span>                stack.push(v);</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                // u的子节点遍历完毕，弹出u</span></span>
<span class="line"><span>                stack.pop();</span></span>
<span class="line"><span>                // 更新u的子树大小和重儿子</span></span>
<span class="line"><span>                for (int v : graph[u]) {</span></span>
<span class="line"><span>                    size[u] += size[v];</span></span>
<span class="line"><span>                    if (son[u] == -1 || size[v] &gt; size[son[u]]) {</span></span>
<span class="line"><span>                        son[u] = v;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这样 DFS1 就不会栈溢出。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DFS2 我们暂时用递归。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最终代码：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    import java.util.*;</span></span>
<span class="line"><span>    class Solution {</span></span>
<span class="line"><span>        int n;</span></span>
<span class="line"><span>        int[] xor, vals, size, son;</span></span>
<span class="line"><span>        List&lt;Integer&gt;[] graph;</span></span>
<span class="line"><span>        List&lt;int[]&gt;[] queryGroup;</span></span>
<span class="line"><span>        int[] ans;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        static class Node {</span></span>
<span class="line"><span>            Node l, r;</span></span>
<span class="line"><span>            int sum;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public int[] kthSmallest(int[] par, int[] vals, int[][] queries) {</span></span>
<span class="line"><span>            this.vals = vals;</span></span>
<span class="line"><span>            n = vals.length;</span></span>
<span class="line"><span>            this.xor = new int[n];</span></span>
<span class="line"><span>            xor[0] = vals[0];</span></span>
<span class="line"><span>            for (int i = 1; i &lt; n; i++) {</span></span>
<span class="line"><span>                xor[i] = xor[par[i]] ^ vals[i];</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 离散化</span></span>
<span class="line"><span>            List&lt;Integer&gt; allValsList = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>            for (int x : xor) {</span></span>
<span class="line"><span>                allValsList.add(x);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            Collections.sort(allValsList);</span></span>
<span class="line"><span>            Map&lt;Integer, Integer&gt; map = new HashMap&lt;&gt;();</span></span>
<span class="line"><span>            int idx = 0;</span></span>
<span class="line"><span>            List&lt;Integer&gt; distinctVals = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>            for (int i = 0; i &lt; allValsList.size(); i++) {</span></span>
<span class="line"><span>                if (i == 0 || !allValsList.get(i).equals(allValsList.get(i - 1))) {</span></span>
<span class="line"><span>                    int x = allValsList.get(i);</span></span>
<span class="line"><span>                    map.put(x, idx++);</span></span>
<span class="line"><span>                    distinctVals.add(x);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            int valSize = distinctVals.size(); // 离散化后的值域大小</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 建图</span></span>
<span class="line"><span>            graph = new List[n];</span></span>
<span class="line"><span>            for (int i = 0; i &lt; n; i++) {</span></span>
<span class="line"><span>                graph[i] = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            for (int i = 1; i &lt; n; i++) {</span></span>
<span class="line"><span>                graph[par[i]].add(i);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            size = new int[n];</span></span>
<span class="line"><span>            son = new int[n];</span></span>
<span class="line"><span>            Arrays.fill(son, -1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // DFS1: iterative</span></span>
<span class="line"><span>            dfs1(0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 分组查询</span></span>
<span class="line"><span>            queryGroup = new List[n];</span></span>
<span class="line"><span>            for (int i = 0; i &lt; queries.length; i++) {</span></span>
<span class="line"><span>                int u = queries[i][0];</span></span>
<span class="line"><span>                int k = queries[i][1];</span></span>
<span class="line"><span>                if (queryGroup[u] == null) {</span></span>
<span class="line"><span>                    queryGroup[u] = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                queryGroup[u].add(new int[]{i, k});</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            ans = new int[queries.length];</span></span>
<span class="line"><span>            // DFS2: recursive</span></span>
<span class="line"><span>            dfs2(0, true, map, distinctVals, valSize);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            return ans;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        void dfs1(int root) {</span></span>
<span class="line"><span>            Stack&lt;Integer&gt; stack = new Stack&lt;&gt;();</span></span>
<span class="line"><span>            stack.push(root);</span></span>
<span class="line"><span>            int[] pointer = new int[n];</span></span>
<span class="line"><span>            Arrays.fill(pointer, -1);</span></span>
<span class="line"><span>            while (!stack.isEmpty()) {</span></span>
<span class="line"><span>                int u = stack.peek();</span></span>
<span class="line"><span>                if (pointer[u] == -1) {</span></span>
<span class="line"><span>                    pointer[u] = 0;</span></span>
<span class="line"><span>                    size[u] = 1;</span></span>
<span class="line"><span>                    // son[u] is already -1</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                if (pointer[u] &lt; graph[u].size()) {</span></span>
<span class="line"><span>                    int v = graph[u].get(pointer[u]);</span></span>
<span class="line"><span>                    pointer[u]++;</span></span>
<span class="line"><span>                    stack.push(v);</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    stack.pop();</span></span>
<span class="line"><span>                    // update u</span></span>
<span class="line"><span>                    for (int v : graph[u]) {</span></span>
<span class="line"><span>                        size[u] += size[v];</span></span>
<span class="line"><span>                        if (son[u] == -1 || size[v] &gt; size[son[u]]) {</span></span>
<span class="line"><span>                            son[u] = v;</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Node dfs2(int u, boolean keep, Map&lt;Integer, Integer&gt; map, List&lt;Integer&gt; distinctVals, int valSize) {</span></span>
<span class="line"><span>            Node root = null;</span></span>
<span class="line"><span>            if (son[u] != -1) {</span></span>
<span class="line"><span>                root = dfs2(son[u], true, map, distinctVals, valSize);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            for (int v : graph[u]) {</span></span>
<span class="line"><span>                if (v == son[u]) continue;</span></span>
<span class="line"><span>                Node childTree = dfs2(v, false, map, distinctVals, valSize);</span></span>
<span class="line"><span>                root = merge(root, childTree, 0, valSize - 1);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            int x = map.get(xor[u]);</span></span>
<span class="line"><span>            root = insert(root, 0, valSize - 1, x);</span></span>
<span class="line"><span>            if (queryGroup[u] != null) {</span></span>
<span class="line"><span>                for (int[] q : queryGroup[u]) {</span></span>
<span class="line"><span>                    int qIdx = q[0];</span></span>
<span class="line"><span>                    int k = q[1];</span></span>
<span class="line"><span>                    if (root.sum &lt; k) {</span></span>
<span class="line"><span>                        ans[qIdx] = -1;</span></span>
<span class="line"><span>                    } else {</span></span>
<span class="line"><span>                        int pos = query(root, 0, valSize - 1, k);</span></span>
<span class="line"><span>                        ans[qIdx] = distinctVals.get(pos);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if (!keep) {</span></span>
<span class="line"><span>                // If not keeping, return the tree but it will be merged into parent, then GC will collect it after merge.</span></span>
<span class="line"><span>                return root;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return root;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Node merge(Node a, Node b, int l, int r) {</span></span>
<span class="line"><span>            if (a == null) return b;</span></span>
<span class="line"><span>            if (b == null) return a;</span></span>
<span class="line"><span>            if (l == r) {</span></span>
<span class="line"><span>                a.sum = 1;</span></span>
<span class="line"><span>                return a;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            int mid = (l + r) &gt;&gt;&gt; 1;</span></span>
<span class="line"><span>            a.l = merge(a.l, b.l, l, mid);</span></span>
<span class="line"><span>            a.r = merge(a.r, b.r, mid + 1, r);</span></span>
<span class="line"><span>            a.sum = (a.l != null ? a.l.sum : 0) + (a.r != null ? a.r.sum : 0);</span></span>
<span class="line"><span>            return a;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Node insert(Node root, int l, int r, int x) {</span></span>
<span class="line"><span>            if (root == null) {</span></span>
<span class="line"><span>                root = new Node();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if (l == r) {</span></span>
<span class="line"><span>                root.sum = 1;</span></span>
<span class="line"><span>                return root;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            int mid = (l + r) &gt;&gt;&gt; 1;</span></span>
<span class="line"><span>            if (x &lt;= mid) {</span></span>
<span class="line"><span>                root.l = insert(root.l, l, mid, x);</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                root.r = insert(root.r, mid + 1, r, x);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            root.sum = (root.l != null ? root.l.sum : 0) + (root.r != null ? root.r.sum : 0);</span></span>
<span class="line"><span>            return root;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        int query(Node root, int l, int r, int k) {</span></span>
<span class="line"><span>            if (l == r) {</span></span>
<span class="line"><span>                return l;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            int mid = (l + r) &gt;&gt;&gt; 1;</span></span>
<span class="line"><span>            int leftSum = (root.l != null) ? root.l.sum : 0;</span></span>
<span class="line"><span>            if (leftSum &gt;= k) {</span></span>
<span class="line"><span>                return query(root.l, l, mid, k);</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                return query(root.r, mid + 1, r, k - leftSum);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：在合并叶子节点时，我们设置 a.sum=1，因为 a 和 b 都有这个值（所以合并后为 1），但有可能 a.sum 原来是 0？不会，因为插入时我们只在叶子节点置 1，所以 a.sum 至少为 1（如果 a 非空）？不对，a 非空，但可能是中间节点，所以叶子节点合并时，a 和 b 的 sum 都是 1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们提交。&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>为了解决这个问题，我们需要在给定的树中处理多个查询，每个查询要求找到以指定节点为根的子树中所有节点路径异或和的第 k 小不同值。路径异或和定义为从根节点到该节点路径上所有节点值的异或结果（包括该节点本身）。如果子树中不同路径异或和的数量不足 k，则返回-1。</p><h3 id="方法思路" tabindex="-1"><a class="header-anchor" href="#方法思路"><span>方法思路</span></a></h3><ol><li><strong>计算路径异或和</strong>：对每个节点，计算从根节点到该节点的路径异或和。根节点的异或和为其自身的值，其他节点的异或和为其父节点的异或和与自身值的异或结果。</li><li><strong>离散化异或值</strong>：将所有节点的路径异或和进行排序和去重，以便后续使用线段树处理值域。</li><li><strong>构建树结构</strong>：根据父节点数组构建树的邻接表表示。</li><li><strong>预处理子树信息</strong>：通过递归 DFS 计算每个节点的子树大小并确定其重儿子（子树大小最大的子节点）。</li><li><strong>处理查询分组</strong>：将查询按照节点分组，以便在后续处理中高效访问。</li><li><strong>树上启发式合并（DSU on Tree）</strong>：使用线段树维护每个节点的子树中所有路径异或和（去重）的有序集合。通过合并重儿子的线段树并逐步合并轻儿子的线段树，高效地构建每个节点的子树异或和集合。</li><li><strong>查询处理</strong>：对于每个查询，在线段树中查询第 k 小的路径异或和（如果存在），否则返回-1。</li></ol><h3 id="解决代码" tabindex="-1"><a class="header-anchor" href="#解决代码"><span>解决代码</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> java.util.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Solution</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[] xor</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> size</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> son</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[] graph</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[]</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[] queryGroup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[] ans</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Node</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> l</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> sum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">[] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">kthSmallest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">par</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">vals</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[][] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">queries</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">n</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> vals</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">xor</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[n];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        xor[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> vals[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n; i++) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            xor[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> xor[par[i]] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">^</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> vals[i];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">allValsList</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> x</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> xor) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            allValsList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(x);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        Collections</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sort</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(allValsList);</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Map</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">map</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> HashMap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> idx</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">distinctVals</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> allValsList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(); i++) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ||</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> !</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">allValsList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(i).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">equals</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">allValsList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> allValsList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(i);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">put</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(x, idx);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                distinctVals</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(x);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                idx++;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> valSize</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> distinctVals</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        graph </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> List</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[n];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n; i++) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            graph[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n; i++) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            graph[par[i]].</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(i);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        size </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[n];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        son </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[n];</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        Arrays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">fill</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(son, </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        dfs1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        queryGroup </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> List</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[n];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> queries</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i++) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> u</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> queries[i][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> k</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> queries[i][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (queryGroup[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                queryGroup[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            queryGroup[u].</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[]{i, k});</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        ans </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">queries</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        dfs2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, map, distinctVals, valSize);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ans;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> dfs1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> u</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        size[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> v</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> graph[u]) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            dfs1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(v);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            size[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> size[v];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (son[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ||</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> size[v] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> size[son[u]]) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                son[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> v;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    Node</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> dfs2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> u</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">boolean</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> keep</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">distinctVals</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> valSize</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Node</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> root</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (son[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            root </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> dfs2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(son[u], </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, map, distinctVals, valSize);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> v</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> graph[u]) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (v </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> son[u]) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">continue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">            Node</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> childTree</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> dfs2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(v, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, map, distinctVals, valSize);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            root </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(root, childTree, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, valSize </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(xor[u]);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        root </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> insert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(root, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, valSize </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, x);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (queryGroup[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">q</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> queryGroup[u]) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> qIdx</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> q[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> k</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> q[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (root </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ||</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">sum</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> k) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    ans[qIdx] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> pos</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> query</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(root, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, valSize </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, k);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    ans[qIdx] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> distinctVals</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(pos);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">keep) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> root;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> root;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    Node</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Node</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Node</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> l</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (a </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> b;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (b </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> a;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (l </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> r) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">sum</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> a;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> mid</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (l </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> r) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">l</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">l</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">l</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, l, mid);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">r</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, mid </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, r);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">sum</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">l</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> !=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> ?</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">l</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">sum</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">r</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> !=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> ?</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">sum</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> a;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    Node</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> insert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Node</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> l</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (root </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            root </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (l </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> r) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">sum</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> root;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> mid</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (l </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> r) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mid) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">l</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> insert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">l</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, l, mid, x);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">r</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> insert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, mid </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, r, x);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">sum</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">l</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> !=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> ?</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">l</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">sum</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">r</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> !=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> ?</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">sum</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> root;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> query</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Node</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> l</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> k</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (l </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> r) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> l;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> mid</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (l </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> r) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> leftSum</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">l</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> !=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">l</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">sum</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (leftSum </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> k) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> query</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">l</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, l, mid, k);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> query</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, mid </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, r, k </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> leftSum);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码解释" tabindex="-1"><a class="header-anchor" href="#代码解释"><span>代码解释</span></a></h3><ol><li><strong>计算路径异或和</strong>：通过遍历每个节点，利用父节点的异或和计算当前节点的异或和。</li><li><strong>离散化</strong>：将所有节点的异或和排序并去重，创建映射以便后续在线段树中处理。</li><li><strong>构建树结构</strong>：使用邻接表表示树，根据父节点数组建立节点关系。</li><li><strong>预处理子树信息</strong>：通过递归 DFS 计算每个节点的子树大小和重儿子（子树最大的子节点）。</li><li><strong>查询分组</strong>：将查询按节点分组，便于在处理每个节点时快速访问相关查询。</li><li><strong>树上启发式合并</strong>：通过递归 DFS 处理每个节点，优先处理重儿子并保留其线段树，然后合并轻儿子的线段树，最后插入当前节点的异或值。合并过程中使用线段树维护子树中不同异或值的集合。</li><li><strong>查询处理</strong>：对于每个查询，在线段树中查询第 k 小的异或值（如果存在），否则返回-1。查询利用线段树的区间和属性高效定位第 k 小值。</li></ol><p>该方法高效地处理了树中的多个查询，通过离散化和线段树优化了查询性能，确保在较大输入规模下也能高效运行。</p>`,15)]))}const c=n(p,[["render",e],["__file","t4-2.html.vue"]]),v=JSON.parse('{"path":"/module_ai/biweekly-contest-159/t4-2.html","title":"树路径异或和查询处理方法","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"USER","slug":"user","link":"#user","children":[]},{"level":2,"title":"ASSISTANT","slug":"assistant","link":"#assistant","children":[{"level":3,"title":"方法思路","slug":"方法思路","link":"#方法思路","children":[]},{"level":3,"title":"解决代码","slug":"解决代码","link":"#解决代码","children":[]},{"level":3,"title":"代码解释","slug":"代码解释","link":"#代码解释","children":[]}]}],"git":{"createdTime":1751299769000,"updatedTime":1751299769000,"contributors":[{"name":"gdut-yy","username":"gdut-yy","email":"gdut_yy@163.com","commits":1}]},"readingTime":{"minutes":66.07,"words":19821},"filePathRelative":"module_ai/biweekly-contest-159/t4-2.md","localizedDate":"2025年7月1日"}');export{c as comp,v as data};
