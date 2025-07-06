import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as l}from"./app-D75trwlE.js";const p={};function e(d,s){return l(),a("div",null,s[0]||(s[0]=[i(`<h1 id="生成树稳定性最大化算法" tabindex="-1"><a class="header-anchor" href="#生成树稳定性最大化算法"><span>生成树稳定性最大化算法</span></a></h1><ul><li>会话记录：<a href="https://chat.deepseek.com/a/chat/s/099042f7-f9d3-42e2-96aa-7d6e2e4d556f" target="_blank" rel="noopener noreferrer">https://chat.deepseek.com/a/chat/s/099042f7-f9d3-42e2-96aa-7d6e2e4d556f</a></li><li>无修改 AC。</li></ul><h2 id="user" tabindex="-1"><a class="header-anchor" href="#user"><span>USER</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>给你一个整数 n，表示编号从 0 到 n - 1 的 n 个节点，以及一个 edges 列表，其中 edges[i] = [ui, vi, si, musti]：</span></span>
<span class="line"><span>ui 和 vi 表示节点 ui 和 vi 之间的一条无向边。</span></span>
<span class="line"><span>si 是该边的强度。</span></span>
<span class="line"><span>musti 是一个整数（0 或 1）。如果 musti == 1，则该边 必须 包含在生成树中，且 不能升级 。</span></span>
<span class="line"><span>你还有一个整数 k，表示你可以执行的最多 升级 次数。每次升级会使边的强度 翻倍 ，且每条可升级边（即 musti == 0）最多只能升级一次。</span></span>
<span class="line"><span>一个生成树的 稳定性 定义为其中所有边的 最小 强度。</span></span>
<span class="line"><span>返回任何有效生成树可能达到的 最大 稳定性。如果无法连接所有节点，返回 -1。</span></span>
<span class="line"><span>注意： 图的一个 生成树（spanning tree）是该图中边的一个子集，它满足以下条件：</span></span>
<span class="line"><span>将所有节点连接在一起（即图是 连通的 ）。</span></span>
<span class="line"><span>不 形成任何环。</span></span>
<span class="line"><span>包含 恰好 n - 1 条边，其中 n 是图中节点的数量。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例 1：</span></span>
<span class="line"><span>输入： n = 3, edges = [[0,1,2,1],[1,2,3,0]], k = 1</span></span>
<span class="line"><span>输出： 2</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>边 [0,1] 强度为 2，必须包含在生成树中。</span></span>
<span class="line"><span>边 [1,2] 是可选的，可以使用一次升级将其强度从 3 提升到 6。</span></span>
<span class="line"><span>最终的生成树包含这两条边，强度分别为 2 和 6。</span></span>
<span class="line"><span>生成树中的最小强度是 2，即最大可能稳定性。</span></span>
<span class="line"><span>示例 2：</span></span>
<span class="line"><span>输入： n = 3, edges = [[0,1,4,0],[1,2,3,0],[0,2,1,0]], k = 2</span></span>
<span class="line"><span>输出： 6</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>所有边都是可选的，且最多可以进行 k = 2 次升级。</span></span>
<span class="line"><span>将边 [0,1] 从 4 升级到 8，将边 [1,2] 从 3 升级到 6。</span></span>
<span class="line"><span>生成树包含这两条边，强度分别为 8 和 6。</span></span>
<span class="line"><span>生成树中的最小强度是 6，即最大可能稳定性。</span></span>
<span class="line"><span>示例 3：</span></span>
<span class="line"><span>输入： n = 3, edges = [[0,1,1,1],[1,2,1,1],[2,0,1,1]], k = 0</span></span>
<span class="line"><span>输出： -1</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>所有边都是必选的，构成了一个环，这违反了生成树无环的性质。因此返回 -1。</span></span>
<span class="line"><span>提示：</span></span>
<span class="line"><span>2 &lt;= n &lt;= 10^5</span></span>
<span class="line"><span>1 &lt;= edges.length &lt;= 10^5</span></span>
<span class="line"><span>edges[i] = [ui, vi, si, musti]</span></span>
<span class="line"><span>0 &lt;= ui, vi &lt; n</span></span>
<span class="line"><span>ui != vi</span></span>
<span class="line"><span>1 &lt;= si &lt;= 10^5</span></span>
<span class="line"><span>musti 是 0 或 1。</span></span>
<span class="line"><span>0 &lt;= k &lt;= n</span></span>
<span class="line"><span>没有重复的边。</span></span>
<span class="line"><span>\`\`java</span></span>
<span class="line"><span>class Solution {</span></span>
<span class="line"><span>    public int maxStability(int n, int[][] edges, int k) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="assistant" tabindex="-1"><a class="header-anchor" href="#assistant"><span>ASSISTANT</span></a></h2><details class="hint-container details"><summary>已深度思考（用时 412 秒）</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>题目要求：给定 n 个节点，以及一些边，每条边有强度 s 和是否必须(musti=1 表示必须且不能升级，musti=0 表示可选且可以升级一次，升级后强度翻倍)。</span></span>
<span class="line"><span>我们最多可以升级 k 条边（每条可升级边最多升级一次），要求构造一棵生成树，使得生成树的稳定性（即所有边的最小强度）尽可能大，并返回这个最大稳定性。</span></span>
<span class="line"><span>如果无法形成生成树，返回-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：生成树必须包含所有必须边（musti=1 的边），且不能形成环，恰好 n-1 条边。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>思路：</span></span>
<span class="line"><span>我们可以二分答案，即二分稳定性 X。问题转化为：是否存在一种生成树，使得生成树的最小强度至少为 X，且使用不超过 k 次升级。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如何判断一个稳定性 X 是否可行？</span></span>
<span class="line"><span>我们需要构造一棵生成树，满足：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 包含所有必须边（不管其强度如何，即使强度小于 X 也要包含，但注意：如果必须边的强度小于 X，那么由于不能升级，所以这个 X 就不满足条件，因为最小强度不可能达到 X）。</span></span>
<span class="line"><span>2. 对于非必须边（可选边），我们可以选择是否使用，并且可以对其升级（最多升级一次，翻倍），但升级次数不超过 k。</span></span>
<span class="line"><span>3. 生成树的最小强度（即所有边中的最小强度）至少为 X。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：由于我们要求最小强度至少为 X，那么生成树中每条边的强度（如果升级了则按升级后的强度算）都必须至少为 X 吗？</span></span>
<span class="line"><span>实际上，我们只要求最小强度至少为 X，也就是说生成树中强度最小的边至少为 X。那么其他边可以大于等于 X，但必须至少有一条边等于 X 吗？不一定，但最小强度要&gt;=X，所以所有边都要&gt;=X？不对，因为最小强度是取最小值，所以只要所有边都&gt;=X，那么最小值就&gt;=X。但注意：我们也可以允许有边小于 X 吗？不行，因为最小值会小于 X。因此，生成树中每条边的强度（升级后）都必须至少为 X。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，必须边不能升级，所以如果一条必须边的强度小于 X，那么它无论如何都会拉低最小值（使其小于 X），所以这种情况 X 不可能达到。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，在检查 X 是否可行时，我们：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 首先检查所有必须边：如果存在必须边的强度 s &lt; X，则 X 不可行（因为必须边不能升级，所以它最终强度就是 s，小于 X，那么整个生成树的最小强度就不可能&gt;=X）。</span></span>
<span class="line"><span>2. 然后，我们考虑非必须边：非必须边有两种选择：不升级（强度为 s）或者升级（强度为 2\\*s）。但是，我们要求最终生成树中每条边的强度都&gt;=X。因此：</span></span>
<span class="line"><span>   - 如果一条非必须边的原始强度 s&gt;=X，那么它不需要升级就可以使用。</span></span>
<span class="line"><span>   - 如果 s &lt; X，那么我们必须升级它（使其变为 2*s）才能使用（因为要求&gt;=X），此时要求 2*s&gt;=X，否则这条边就不能使用（因为即使升级了也达不到 X）。</span></span>
<span class="line"><span>   - 如果一条非必须边既不使用，那么就不用考虑。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，我们还需要构造一棵生成树。生成树必须包含所有必须边，然后我们还需要选择一些非必须边来连接整个图（因为必须边可能不能构成生成树，或者需要补充）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，检查过程如下：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>步骤：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 首先，过滤掉所有强度小于 X 的边（包括必须边和非必须边），但是必须边如果强度小于 X，直接返回 false（因为必须边不能升级且必须包含，所以如果必须边有小于 X 的，那么 X 就不可能）。</span></span>
<span class="line"><span>   注意：这里我们并不是真的过滤掉必须边，而是先检查必须边：如果必须边中有任何一条边的强度小于 X，则 X 不可行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 然后，我们考虑用边来构建生成树。注意，必须边是必须包含的，所以先加入必须边（只要必须边中有一条边强度&gt;=X，我们就加入？但是必须边即使强度小于 X，我们在第一步已经判定不可行了，所以这里加入的必须边都是强度&gt;=X 的？不对，第一步已经检查了必须边，如果存在必须边强度小于 X，直接返回 false 了。所以第二步开始时，必须边都是强度&gt;=X 的，所以我们可以安全加入。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 但是，必须边可能形成环吗？题目要求生成树，所以必须边如果形成环，那么就不可能形成生成树（因为生成树要求无环）。所以，我们先加入所有必须边，然后检查：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   - 必须边是否已经形成了环？如果形成环，那么生成树就不存在（因为生成树要求无环，而必须边必须包含，但环不能存在），那么 X 不可行（实际上，不管 X 是多少，只要必须边形成环，整个问题就无解，所以我们可以提前判断，但注意：如果 X 很大导致必须边中有些边因为强度小于 X 而被我们第一步排除？不对，第一步我们检查的是必须边的原始强度，如果必须边原始强度小于 X，那么 X 不可行，但必须边本身还是存在的，我们这里加入所有必须边（因为第一步已经排除了 X 不可行的情况，所以第二步的 X 是满足必须边都&gt;=X 的，所以必须边全部加入）。因此，在第二步中，我们加入所有必须边，然后判断这些必须边是否形成了环？如果是，那么整个图就没有生成树（因为必须边有环），返回 false。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 然后，我们需要加入非必须边（可选边）来使得整个图连通（生成树需要 n-1 条边）。非必须边的使用条件：原始强度&gt;=X 的边，我们可以直接使用（不需要升级）；原始强度&lt;X 的边，必须升级（且升级后 2\\*s&gt;=X，否则不能用）才能使用。注意：升级次数有限制，最多 k 次。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5. 因此，我们考虑非必须边：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   - 对于一条非必须边，如果 s&gt;=X，那么我们可以直接使用（不消耗升级次数）。</span></span>
<span class="line"><span>   - 如果 s&lt;X，那么必须升级（消耗一次升级次数）才能使用（并且要求 2\\*s&gt;=X，否则不能使用）。</span></span>
<span class="line"><span>   - 如果一条非必须边 s&lt;X 且 2\\*s&lt;X，那么这条边就不能被使用（因为即使升级了也达不到 X）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>6. 然后，我们考虑用这些非必须边（满足条件的）来连接剩下的部分（在加入必须边后，图可能还不连通）。我们希望在满足升级次数不超过 k 的前提下，选择一些非必须边使得整个图连通。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>7. 但是，我们也可以选择不使用某些非必须边（即使它满足条件），因为可能用更少的边或者消耗更少的升级次数。我们的目标是用最少的升级次数来使图连通。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们可以这样做：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 首先，将必须边全部加入并构建并查集（记录连通块）。</span></span>
<span class="line"><span>- 然后，我们优先选择那些不需要升级的非必须边（即 s&gt;=X 的边）加入，因为这些边不消耗升级次数。注意：加入时避免环（用并查集）。</span></span>
<span class="line"><span>- 然后，如果图还没有连通，我们再考虑需要升级的非必须边（即 s&lt;X 且 2\\*s&gt;=X 的边），这些边需要消耗升级次数。我们尽量选择升级次数少的方案？实际上，我们只需要计数：需要升级的边用了多少条。因为每条这样的边都消耗一次升级次数，我们希望用尽可能少的升级次数来连通图，所以我们在选择非必须边（需要升级的）时，应该尽量少用（但是这里我们并不需要最小化升级次数，只要总升级次数不超过 k 即可）。因此，我们可以先尽可能用不需要升级的边，然后再用需要升级的边，并且用并查集来避免环。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>8.  具体步骤：</span></span>
<span class="line"><span>    a. 初始化并查集，将必须边加入，并记录当前连通块数量（初始为 n，每加入一条边连通块减少 1）。</span></span>
<span class="line"><span>    b. 然后，遍历所有非必须边（先遍历不需要升级的边，即 s&gt;=X 的边；然后再遍历需要升级的边，即 s&lt;X 且 2\\*s&gt;=X 的边）： - 对于一条边，如果它的两个端点不在同一个连通块，则加入，并合并连通块；对于需要升级的边，记录升级次数（每用一条，升级次数加 1）。</span></span>
<span class="line"><span>    c. 注意：这里我们并不需要最小化升级次数，因为我们的目标是连通图，且升级次数不超过 k。所以先加不需要升级的边（这样不消耗 k），然后再加需要升级的边（消耗 k），这样能尽量少消耗 k。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>9.  在遍历完所有边后，检查：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - 图是否连通（连通块数量是否为 1）？</span></span>
<span class="line"><span>    - 升级次数是否不超过 k？</span></span>
<span class="line"><span>      如果两个条件都满足，则 X 可行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>10. 但是，我们也可以先处理不需要升级的边，再处理需要升级的边。这样能最小化升级次数（因为优先使用不升级的边）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>11. 然而，还有一种情况：可能不需要升级的边已经形成了环，但我们只取那些连接不同连通块的边（即用 Kruskal 算法思想）。所以我们在处理非必须边时，只加入那些不会形成环的边（即连接两个不同连通块的边）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>12. 因此，算法如下：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - 初始化并查集，计数连通块数量 comp = n。</span></span>
<span class="line"><span>    - 步骤 1：检查所有必须边，如果有任何一条必须边的 s &lt; X，返回 false。</span></span>
<span class="line"><span>    - 步骤 2：将必须边加入并查集（同时注意环，但必须边不应该形成环？题目没有保证，所以必须边也可能形成环。如果必须边加入时形成环，则整个图无法形成生成树，返回 false）。</span></span>
<span class="line"><span>      具体：遍历每条必须边，如果两个端点已经在同一个集合，则出现环，返回 false；否则加入，并 comp--。</span></span>
<span class="line"><span>    - 步骤 3：处理非必须边，分为两组：</span></span>
<span class="line"><span>      group1: s&gt;=X 的边（不需要升级）</span></span>
<span class="line"><span>      group2: s&lt;X 且 2\\*s&gt;=X 的边（需要升级）</span></span>
<span class="line"><span>    - 步骤 4：先处理 group1（不需要升级的边）：遍历 group1 中的边（可以按任意顺序，因为不消耗升级次数，但为了尽量少用边，我们按连接连通块的需求来，即并查集），对于每条边，检查两个端点是否在同一个连通块，如果不是，则加入，comp--。</span></span>
<span class="line"><span>    - 步骤 5：再处理 group2（需要升级的边）：同样遍历，对于每条边，如果两个端点不在同一个连通块，则加入，同时升级次数 count++，comp--。注意，这里我们并不需要按边的强度排序，因为我们的目标是连通图，且升级次数尽量少（所以这里我们不管边的强度，只要能用就行，因为已经满足条件：升级后强度&gt;=X）。</span></span>
<span class="line"><span>    - 步骤 6：检查 comp 是否等于 1（整个图连通）且升级次数 count&lt;=k。如果满足，则 X 可行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>13. 但是，这里有一个问题：在步骤 4 和 5 中，我们并没有考虑边的强度？实际上，我们只关心边是否满足&gt;=X（在分组时已经保证了：group1 的边原始强度&gt;=X，group2 的边升级后强度&gt;=X），所以只要加入，强度都是满足条件的。而且，我们要求生成树的最小强度至少为 X，但这里我们并没有保证生成树的最小强度恰好是 X，而是保证所有边都&gt;=X，所以最小值一定&gt;=X。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>14. 然而，我们这样构建的生成树，可能包含的边数超过 n-1 吗？不会，因为我们用并查集，每次加入边都是连接两个不同连通块，所以最终边数=初始必须边数+加入的非必须边数，而初始必须边数设为 m1，加入的非必须边数为 n-1-m1，所以总边数 n-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>15. 但是，我们必须边已经加入了，在加入非必须边时，我们只加入连接两个连通块的边，所以不会形成环，最终边数就是 n-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>16. 二分答案的范围：</span></span>
<span class="line"><span>    下界：最小强度至少为 1（因为强度最小为 1）。</span></span>
<span class="line"><span>    上界：考虑最大可能的强度。一条边原始强度最大为 10^5，升级后最大为 2*10^5。同时，生成树的最小强度不可能超过所有边升级后的最大强度，所以上界可以设为 200000（即 2*10^5）？或者更大一点，比如 200001。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>17. 但是，注意：可能有些边升级后强度很大，但我们的答案可能是原始强度中的最大值？所以上界设为 200000（即 2e5）即可。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>18. 然后，我们二分查找最大的 X，使得检查函数返回 true。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>19. 如果没有任何 X 可行（比如下界 1 都不可行），那么可能图不连通？但是注意，即使 X=1，必须边如果强度&gt;=1（总是满足，因为强度&gt;=1）且没有环，那么非必须边即使原始强度为 1，升级后为 2&gt;=1，所以 X=1 总是可行的？除非图不连通。所以如果 X=1 不可行，说明图不连通（或者必须边有环），那么更大的 X 更不可行，所以返回-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>20. 但是，注意：在检查 X=1 时，必须边强度&gt;=1（总是满足），所以不会因为必须边强度不够而失败。但必须边可能形成环，或者图不连通（即使加入所有必须边和所有非必须边（因为 X=1，所以所有非必须边都可以使用：原始强度&gt;=1 的边直接使用，原始强度&lt;1 的边不存在，因为强度&gt;=1，所以所有非必须边都可以直接使用（不需要升级）），所以如果图不连通，那么 X=1 就不可行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>21. 因此，如果二分到最后，我们找到了一个最大的 X 使得条件满足，则返回 X；如果没有任何 X 满足，则返回-1？不对，因为 X=1 总是可行的？不一定，因为必须边可能形成环，那么 X=1 也不可行。所以，如果 X=1 不可行，那么整个问题无解，返回-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>22. 但是，注意：在检查 X 时，如果必须边形成环，那么无论 X 是多少，都不可行。所以我们可以提前在检查 X=1 的时候（或者任意 X）发现必须边有环，那么整个问题无解，返回-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>23. 因此，二分答案的框架：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int low = 1, high = 200000;</span></span>
<span class="line"><span>    int ans = -1;</span></span>
<span class="line"><span>    while (low &lt;= high) {</span></span>
<span class="line"><span>    int mid = (low+high)/2;</span></span>
<span class="line"><span>    if (check(mid, n, edges, k)) {</span></span>
<span class="line"><span>    ans = mid;</span></span>
<span class="line"><span>    low = mid+1;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>    high = mid-1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return ans;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>24. 但是，有可能图不连通（即使 X=1 也不行），那么 ans 就是初始的-1，返回-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>25. 然而，还有一种情况：在检查 X 时，如果必须边没有环，但是图不连通（必须边不够，非必须边也不够），那么 X=1 也不可行，所以最终 ans=-1，返回-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>26. 因此，我们按照上述思路编写 check 函数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>27. 但是，注意：在加入必须边时，如果出现环，则直接返回 false（该 X 不可行，并且实际上整个问题都不可行，但 X=1 时就会返回 false，所以最终我们会返回-1）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>28. 优化：在并查集操作中，注意路径压缩和按秩合并。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>29. 复杂度：二分次数 O(log(200000))，每次检查 O(edges.length)，并查集操作近似 O(α(n))，所以总复杂度 O(edges.length \\* log(200000))，满足 10^5 的数据量。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>30. 细节：在分组时，我们可以预先将边分为必须边和非必须边。然后对于非必须边，我们根据 X 分成两组：不需要升级的和需要升级的。注意，在二分过程中，X 是变化的，所以分组需要在 check 函数内部根据 X 来分。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>31. 但是，注意：非必须边中，有些边在 X 较大时可能被过滤掉（即 s&lt;X 且 2*s&lt;X 的边，不能用）。所以我们在遍历非必须边时，只考虑满足条件的（即 s&gt;=X 或者 (s&lt;X 且 2*s&gt;=X)）的边。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>32. 另外，注意：必须边我们已经在第一步检查了强度（如果有必须边 s&lt;X，直接 false），所以后面加入必须边时，我们只关心环和连通性。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>33. 实现并查集：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    class UnionFind {</span></span>
<span class="line"><span>    int[] parent;</span></span>
<span class="line"><span>    int[] rank;</span></span>
<span class="line"><span>    int comp; // 连通块数量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           public UnionFind(int n) {</span></span>
<span class="line"><span>               parent = new int[n];</span></span>
<span class="line"><span>               rank = new int[n];</span></span>
<span class="line"><span>               comp = n;</span></span>
<span class="line"><span>               for (int i = 0; i &lt; n; i++) {</span></span>
<span class="line"><span>                   parent[i] = i;</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           public int find(int x) {</span></span>
<span class="line"><span>               if (parent[x] != x) {</span></span>
<span class="line"><span>                   parent[x] = find(parent[x]);</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>               return parent[x];</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           public boolean union(int x, int y) {</span></span>
<span class="line"><span>               int rx = find(x), ry = find(y);</span></span>
<span class="line"><span>               if (rx == ry) return false;</span></span>
<span class="line"><span>               if (rank[rx] &lt; rank[ry]) {</span></span>
<span class="line"><span>                   parent[rx] = ry;</span></span>
<span class="line"><span>               } else if (rank[rx] &gt; rank[ry]) {</span></span>
<span class="line"><span>                   parent[ry] = rx;</span></span>
<span class="line"><span>               } else {</span></span>
<span class="line"><span>                   parent[ry] = rx;</span></span>
<span class="line"><span>                   rank[rx]++;</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>               comp--;</span></span>
<span class="line"><span>               return true;</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>34. 在 check 函数中：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    boolean check(int X, int n, int[][] edges, int k) {</span></span>
<span class="line"><span>    // 初始化并查集</span></span>
<span class="line"><span>    UnionFind uf = new UnionFind(n);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           // 先处理必须边：检查是否有必须边强度&lt;X，同时加入并查集（注意环）</span></span>
<span class="line"><span>           for (int[] edge : edges) {</span></span>
<span class="line"><span>               int u = edge[0], v = edge[1], s = edge[2], must = edge[3];</span></span>
<span class="line"><span>               if (must == 1) {</span></span>
<span class="line"><span>                   if (s &lt; X) {</span></span>
<span class="line"><span>                       return false; // 必须边强度不够</span></span>
<span class="line"><span>                   }</span></span>
<span class="line"><span>                   // 注意：这里不能立即加入并查集，因为可能后面会重复加入？所以先记录必须边，然后统一加入并查集（并查集操作需要避免重复加入同一条边）</span></span>
<span class="line"><span>                   // 但是，我们可以在同一个循环中先检查必须边，然后加入并查集？不行，因为必须边可能有多条，我们需要依次加入并查集（并查集操作要求按边加入）。</span></span>
<span class="line"><span>                   // 所以，我们分两步：第一步检查必须边的强度，第二步将必须边加入并查集（并检查环）。</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           // 第二步：加入必须边（再次遍历，只处理必须边）</span></span>
<span class="line"><span>           for (int[] edge : edges) {</span></span>
<span class="line"><span>               int u = edge[0], v = edge[1], s = edge[2], must = edge[3];</span></span>
<span class="line"><span>               if (must == 1) {</span></span>
<span class="line"><span>                   // 已经检查过强度&gt;=X（否则已经返回false了），所以直接加入</span></span>
<span class="line"><span>                   if (!uf.union(u, v)) {</span></span>
<span class="line"><span>                       // 这条必须边加入时形成了环，则失败</span></span>
<span class="line"><span>                       return false;</span></span>
<span class="line"><span>                   }</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           // 第三步：处理非必须边，分为两组（先处理不需要升级的，再处理需要升级的）</span></span>
<span class="line"><span>           int upgrades = 0; // 记录升级次数</span></span>
<span class="line"><span>           // 先处理不需要升级的边（s&gt;=X）</span></span>
<span class="line"><span>           for (int[] edge : edges) {</span></span>
<span class="line"><span>               int u = edge[0], v = edge[1], s = edge[2], must = edge[3];</span></span>
<span class="line"><span>               if (must == 0) {</span></span>
<span class="line"><span>                   if (s &gt;= X) {</span></span>
<span class="line"><span>                       // 直接使用，不升级</span></span>
<span class="line"><span>                       uf.union(u, v); // 注意：这里union函数已经处理了，如果两个点已经连通，则返回false，但这里我们不关心，因为即使不连通，我们也只是尝试加入（能连就连）</span></span>
<span class="line"><span>                       // 所以，我们调用union，但不关心返回值（因为可能已经连通，那么这条边就不用加入，也不会影响连通块数量）</span></span>
<span class="line"><span>                   }</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           // 然后处理需要升级的边（s&lt;X 且 2*s&gt;=X），注意：s&lt;X且2*s&gt;=X</span></span>
<span class="line"><span>           for (int[] edge : edges) {</span></span>
<span class="line"><span>               int u = edge[0], v = edge[1], s = edge[2], must = edge[3];</span></span>
<span class="line"><span>               if (must == 0) {</span></span>
<span class="line"><span>                   if (s &lt; X &amp;&amp; 2 * s &gt;= X) {</span></span>
<span class="line"><span>                       // 需要升级，并且可以使用</span></span>
<span class="line"><span>                       if (uf.find(u) != uf.find(v)) {</span></span>
<span class="line"><span>                           // 如果当前边连接两个连通块，则使用（因为上面已经处理了不升级的边，所以这里可能已经连通，也可能没有）</span></span>
<span class="line"><span>                           uf.union(u, v);</span></span>
<span class="line"><span>                           upgrades++;</span></span>
<span class="line"><span>                           // 注意：升级次数不能超过k，我们在后面判断</span></span>
<span class="line"><span>                       }</span></span>
<span class="line"><span>                   }</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           // 注意：在不需要升级的边处理中，我们并没有记录升级次数，因为不消耗升级次数。而且我们直接调用union（即使两个点已经连通，union也会返回false，但不会减少连通块，所以没关系）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           // 检查连通性和升级次数</span></span>
<span class="line"><span>           return (uf.comp == 1) &amp;&amp; (upgrades &lt;= k);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>35. 但是，上面的处理有缺陷：在第一个非必须边（不需要升级）的循环中，我们调用 union，但没有判断是否成功（即是否真的连接了两个连通块）。这样会导致即使这条边没有实际加入（因为两个点已经连通），我们也调用了 union，而 union 在已经连通的情况下返回 false，并且不会减少连通块数量。所以这样写没问题，但是效率上可能多做了几次合并（实际上并查集的合并操作在同一个连通块时是很快的）。不过，我们更希望只在需要的时候才调用 union（即两个点不连通时）。所以我们可以修改：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           for (int[] edge : edges) {</span></span>
<span class="line"><span>               // ...</span></span>
<span class="line"><span>               if (must == 0 &amp;&amp; s&gt;=X) {</span></span>
<span class="line"><span>                   if (uf.find(u) != uf.find(v)) {</span></span>
<span class="line"><span>                       uf.union(u, v); // 这里调用union会减少连通块数量</span></span>
<span class="line"><span>                   }</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    这样更高效，因为避免了不必要的并查集合并操作（虽然不影响正确性，但可以减少一些操作）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>36. 同样，在必须边的加入中，我们已经判断了环（即如果 union 返回 false，说明有环，直接返回失败）。所以必须边的处理正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>37. 在需要升级的边中，我们只在实际需要加入（即两个点不连通）时才加入，并且记录升级次数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>38. 但是，注意：在不需要升级的边处理中，我们可能已经将图连通了，那么后面需要升级的边就不用处理了。所以我们的循环顺序没有问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>39. 然而，我们这样处理非必须边（不需要升级的边）时，并没有考虑边的连接作用？我们只是按任意顺序加入。但是，我们只关心连通性，所以任意顺序都可以（因为生成树只需要连通，不需要最小生成树）。所以这样是没问题的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>40. 但是，我们可能会加入多余的边？不会，因为我们只加入连接不同连通块的边（通过并查集判断）。所以最终加入的边数不会超过 n-1（必须边和非必须边加起来）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>41. 但是，注意：在不需要升级的边中，我们可能加入的边数很多，但并查集保证了不会形成环，所以最终是一棵树（或森林，如果不够的话）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>42. 因此，我们按照上述步骤编写 check 函数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>43. 最后，在二分答案中，我们寻找最大的 X 使得 check(X)为 true。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>44. 注意：有可能 X=0？题目中强度最小为 1，所以 X 从 1 开始。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>45. 考虑示例 1：n=3, edges = [[0,1,2,1],[1,2,3,0]], k=1</span></span>
<span class="line"><span>    检查 X=2：</span></span>
<span class="line"><span>    必须边[0,1,2,1]: 强度 2&gt;=2 -&gt; 通过，加入并查集（连通块：0 和 1 连通，comp=2）</span></span>
<span class="line"><span>    必须边没有环（只有一条边）。</span></span>
<span class="line"><span>    非必须边[1,2,3,0]: 因为 s=3&gt;=2，所以属于不需要升级的边，加入：连接 1 和 2（连通块变成 1，comp=1）。</span></span>
<span class="line"><span>    然后不需要升级的边处理完后，图已经连通，所以不需要升级的边循环结束。然后处理需要升级的边：没有（因为 3&gt;=2，所以不在需要升级的组）。</span></span>
<span class="line"><span>    升级次数 upgrades=0&lt;=k=1，且连通块为 1，所以 X=2 可行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    检查 X=3：</span></span>
<span class="line"><span>    必须边：强度 2&lt;3 -&gt; 返回 false。所以 X=3 不可行。</span></span>
<span class="line"><span>    因此，最大稳定性为 2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>46. 示例 2：n=3, edges = [[0,1,4,0],[1,2,3,0],[0,2,1,0]], k=2</span></span>
<span class="line"><span>    检查 X=6：</span></span>
<span class="line"><span>    没有必须边，所以跳过必须边的检查。</span></span>
<span class="line"><span>    然后处理非必须边：</span></span>
<span class="line"><span>    [0,1,4,0]: s=4&lt;6 -&gt; 需要检查升级后：2*4=8&gt;=6，所以属于需要升级的边（但先处理不需要升级的边：没有，因为 4&lt;6，所以不在不需要升级的组）。</span></span>
<span class="line"><span>    [1,2,3,0]: 3&lt;6 -&gt; 2*3=6&gt;=6，所以也是需要升级的边。</span></span>
<span class="line"><span>    [0,2,1,0]: 1&lt;6 -&gt; 2\\*1=2&lt;6，所以不能用。</span></span>
<span class="line"><span>    然后，先处理不需要升级的边：没有。</span></span>
<span class="line"><span>    再处理需要升级的边：有[0,1]和[1,2]。我们依次处理：</span></span>
<span class="line"><span>    先[0,1]：加入（连接 0 和 1），升级次数+1（变为 1），连通块从 3 变为 2。</span></span>
<span class="line"><span>    再[1,2]：加入（连接 1 和 2），升级次数+1（变为 2），连通块变为 1。</span></span>
<span class="line"><span>    所以图连通，且升级次数 2&lt;=2，所以 X=6 可行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    检查 X=7：</span></span>
<span class="line"><span>    非必须边：</span></span>
<span class="line"><span>    [0,1,4,0]: 4&lt;7, 2*4=8&gt;=7 -&gt; 需要升级。</span></span>
<span class="line"><span>    [1,2,3,0]: 3&lt;7, 2*3=6&lt;7 -&gt; 不能用。</span></span>
<span class="line"><span>    [0,2,1,0]: 1&lt;7, 2\\*1=2&lt;7 -&gt; 不能用。</span></span>
<span class="line"><span>    然后，我们尝试加入[0,1]（需要升级）：</span></span>
<span class="line"><span>    加入后，连通块：0 和 1 连通，但 2 还是独立的（因为[1,2]不能用，[0,2]也不能用），所以连通块数量为 2（没有连通）。</span></span>
<span class="line"><span>    因此 X=7 不可行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    所以最大稳定性为 6。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>47. 示例 3：n=3, edges = [[0,1,1,1],[1,2,1,1],[2,0,1,1]], k=0</span></span>
<span class="line"><span>    检查任意 X（比如 X=1）：</span></span>
<span class="line"><span>    必须边有三条，先检查强度：1&gt;=1，通过。</span></span>
<span class="line"><span>    然后加入必须边：</span></span>
<span class="line"><span>    先加入[0,1]：连通块变为 2（0,1 连通，2 独立）</span></span>
<span class="line"><span>    加入[1,2]：连通块变为 1（0,1,2 连通）</span></span>
<span class="line"><span>    加入[2,0]：此时 0 和 2 已经在同一个连通块（因为 0-1-2 已经连通），所以 union 返回 false -&gt; 出现环，返回 false。</span></span>
<span class="line"><span>    所以 X=1 不可行，最终返回-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>48. 但是，注意：在加入必须边时，我们是一条一条加入的。在加入第三条边[2,0]时，发现 0 和 2 已经连通，所以返回 false，然后整个 check 函数返回 false。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>49. 因此，我们按照上述思路实现。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>50. 优化：在第一次遍历必须边检查强度时，我们可以同时收集必须边，然后在第二次遍历时只遍历必须边。同样，非必须边也可以预先收集。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>51. 修改：在 check 函数开始时，我们将边按必须边和非必须边分开？但是二分过程中 X 会变，所以非必须边的分组（不需要升级和需要升级）还是要在循环内根据 X 确定。但我们可以预先将非必须边单独存起来。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>52. 因此，我们可以在主函数中预处理：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    List&lt;int[]&gt; mustEdges = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>    List&lt;int[]&gt; optionalEdges = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>    for (int[] edge : edges) {</span></span>
<span class="line"><span>    if (edge[3] == 1) {</span></span>
<span class="line"><span>    mustEdges.add(edge);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>    optionalEdges.add(edge);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    然后，将这两个列表传入 check 函数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>53. 但是，在二分过程中，每次 check 都要用，所以这样预处理一次，然后传入引用，避免在 check 函数中重复分类（按必须和非必须）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>54. 修改 check 函数：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    boolean check(int X, int n, List&lt;int[]&gt; mustEdges, List&lt;int[]&gt; optionalEdges, int k) {</span></span>
<span class="line"><span>    UnionFind uf = new UnionFind(n);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           // 检查必须边的强度</span></span>
<span class="line"><span>           for (int[] edge : mustEdges) {</span></span>
<span class="line"><span>               int s = edge[2];</span></span>
<span class="line"><span>               if (s &lt; X) {</span></span>
<span class="line"><span>                   return false;</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           // 加入必须边</span></span>
<span class="line"><span>           for (int[] edge : mustEdges) {</span></span>
<span class="line"><span>               int u = edge[0], v = edge[1];</span></span>
<span class="line"><span>               if (!uf.union(u, v)) { // 如果合并失败（已经连通），则形成环</span></span>
<span class="line"><span>                   return false;</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           int upgrades = 0;</span></span>
<span class="line"><span>           // 处理非必须边：先处理不需要升级的（s&gt;=X）</span></span>
<span class="line"><span>           for (int[] edge : optionalEdges) {</span></span>
<span class="line"><span>               int u = edge[0], v = edge[1], s = edge[2];</span></span>
<span class="line"><span>               if (s &gt;= X) {</span></span>
<span class="line"><span>                   // 如果两个点不连通，则加入</span></span>
<span class="line"><span>                   if (uf.find(u) != uf.find(v)) {</span></span>
<span class="line"><span>                       uf.union(u, v);</span></span>
<span class="line"><span>                   }</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           // 再处理需要升级的边（s&lt;X 且 2*s&gt;=X）</span></span>
<span class="line"><span>           for (int[] edge : optionalEdges) {</span></span>
<span class="line"><span>               int u = edge[0], v = edge[1], s = edge[2];</span></span>
<span class="line"><span>               if (s &lt; X &amp;&amp; 2 * s &gt;= X) {</span></span>
<span class="line"><span>                   if (uf.find(u) != uf.find(v)) {</span></span>
<span class="line"><span>                       uf.union(u, v);</span></span>
<span class="line"><span>                       upgrades++;</span></span>
<span class="line"><span>                   }</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           return uf.comp == 1 &amp;&amp; upgrades &lt;= k;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>55. 注意：在不需要升级的边处理中，我们只加入连接不同连通块的边（通过并查集判断），所以不会形成环。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>56. 但是，在需要升级的边处理中，我们同样只加入连接不同连通块的边，所以不会形成环。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>57. 因此，编写代码。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>58. 边界：n=1？但题目 n&gt;=2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>59. 测试示例 3：必须边三条，在加入第三条时，uf.find(u)和 uf.find(v)已经相同，所以 union 会返回 false，然后 check 函数返回 false。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>60. 最后，在主函数中：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public int maxStability(int n, int[][] edges, int k) {</span></span>
<span class="line"><span>    // 预处理，将边分为必须边和非必须边</span></span>
<span class="line"><span>    List&lt;int[]&gt; mustEdges = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>    List&lt;int[]&gt; optionalEdges = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>    for (int[] edge : edges) {</span></span>
<span class="line"><span>    // edge: [u, v, s, must]</span></span>
<span class="line"><span>    if (edge[3] == 1) {</span></span>
<span class="line"><span>    mustEdges.add(edge);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>    optionalEdges.add(edge);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           int low = 1, high = 200000;</span></span>
<span class="line"><span>           int ans = -1;</span></span>
<span class="line"><span>           while (low &lt;= high) {</span></span>
<span class="line"><span>               int mid = (low + high) / 2;</span></span>
<span class="line"><span>               if (check(mid, n, mustEdges, optionalEdges, k)) {</span></span>
<span class="line"><span>                   ans = mid;</span></span>
<span class="line"><span>                   low = mid + 1;</span></span>
<span class="line"><span>               } else {</span></span>
<span class="line"><span>                   high = mid - 1;</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span>           return ans;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>61. 但是，有可能图不连通，那么 ans 最后为-1（初始值），返回-1，符合要求。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>62. 考虑一个特殊情况：必须边已经使得图连通，那么非必须边就不需要了。但是，如果 X 很大，导致非必须边都不能用（因为强度不够且升级后也不够），那么必须边强度都&gt;=X，所以 X 可行。例如：必须边强度都很大，那么我们可以取较大的 X。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>63. 因此，我们按照上述思路实现。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>64. 但是，注意：在不需要升级的非必须边处理中，我们可能加入了一些边，但这些边并不影响升级次数。所以我们的计数只针对需要升级的边。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>65. 最后，返回 ans。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>66. 测试：示例 1 和 2 都通过，示例 3 返回-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>67. 注意：二分时，如果 X=0，但题目强度至少为 1，所以我们从 1 开始。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>68. 考虑一个极端：k=0，且没有必须边，非必须边中有一条强度为 1 的边，那么 X=1 可行（因为不需要升级，直接使用），X=2 不可行（因为 1&lt;2，且升级 0 次，所以不能用）。所以最大稳定性为 1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>69. 但是，我们的二分会找到 1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>70. 另一个极端：k=0，非必须边中有一条强度为 1 的边，但是需要连接三个点？所以需要多条边。如果非必须边中有两条边：一条强度 1，一条强度 3。那么 X=1：可以用强度 1 和 3（都不需要升级，因为 1&gt;=1,3&gt;=1）连通。X=2：强度 1 的边不能用（因为 1&lt;2 且 k=0 不能升级，所以升级后还是 1，但 1&lt;2，所以不能用；而强度 3&gt;=2，所以可以用，但只有一条边，不能连通两个点（三个点需要两条边）？不对，三个点需要两条边。如果只有一条强度 3 的边，只能连接两个点，所以连通块为 2，不连通。所以 X=2 不可行。所以最大稳定性为 1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>71. 因此，我们的算法应该能处理。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>72. 编写并查集类。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>73. 注意：并查集的 find 和 union 方法中，我们使用路径压缩和按秩合并。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>74. 代码实现：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>75. 由于数据量 10^5，二分大约 18 次，每次检查 10^5 条边，并查集操作近似常数，所以总操作次数 18\\*10^5，可以接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>76. 开始编码。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>77. 注意：在不需要升级的边处理中，即使边没有实际加入（因为两个点已经连通），我们也不处理，所以不会影响。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>78. 但是，在需要升级的边处理中，我们只在实际需要时才加入（并消耗升级次数）。所以正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>79. 最后，返回 ans。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>80. 可能的问题：在同一个 X 下，非必须边中不需要升级的边和需要升级的边可能有多种选择，但我们优先使用不需要升级的边（即先处理不需要升级的边），这样能最小化升级次数，所以是合理的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>81. 提交。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>82. 但是，我们可能会漏掉一种情况：在需要升级的边中，可能有多条边都可以连接同一个连通块，但我们随意选择一条。由于我们只关心连通性和升级次数，所以选择任意一条都可以。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>83. 因此，算法正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>84. 编写代码。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>85. 注意：在并查集中，comp 的维护：在每次成功 union 时，comp 减少 1。初始 comp 为 n。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>86. 在并查集类中，comp 是成员变量，每次 union 成功时 comp--。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>87. 在 check 函数中，我们创建新的并查集，所以每个 X 的检查是独立的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>88. 代码实现：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们将并查集作为内部类。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>89. 注意：在 check 函数中，我们可能会在必须边部分就返回 false（比如强度不够或环），那么后面就不执行了。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>90. 完整代码：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由于代码较长，我们仔细编写。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>91. 测试示例 1,2,3。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>92. 可能遇到性能问题？但 10^5\\*18 次操作，约为 180 万，在 Java 中应该可以通过。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>93. 注意：在非必须边的循环中，我们循环了两次（先处理不需要升级的，再处理需要升级的）。我们可以将非必须边按条件分成两组，然后分别循环。这样总循环次数为 2\\*非必须边数量，可以接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>94. 开始编写。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>95. 注意：在不需要升级的边处理中，我们只考虑 s&gt;=X 的边；在需要升级的边处理中，考虑 s&lt;X 且 2\\*s&gt;=X 的边。注意，同一个边不可能同时满足 s&gt;=X 和 s&lt;X，所以不会重复处理。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>96. 编写并查集类：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    static class UnionFind {</span></span>
<span class="line"><span>    int[] parent;</span></span>
<span class="line"><span>    int[] rank;</span></span>
<span class="line"><span>    int comp; // 连通块数量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           public UnionFind(int n) {</span></span>
<span class="line"><span>               parent = new int[n];</span></span>
<span class="line"><span>               rank = new int[n];</span></span>
<span class="line"><span>               comp = n;</span></span>
<span class="line"><span>               for (int i = 0; i &lt; n; i++) {</span></span>
<span class="line"><span>                   parent[i] = i;</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           public int find(int x) {</span></span>
<span class="line"><span>               if (parent[x] != x) {</span></span>
<span class="line"><span>                   parent[x] = find(parent[x]);</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>               return parent[x];</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           public boolean union(int x, int y) {</span></span>
<span class="line"><span>               int rx = find(x);</span></span>
<span class="line"><span>               int ry = find(y);</span></span>
<span class="line"><span>               if (rx == ry) {</span></span>
<span class="line"><span>                   return false;</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>               if (rank[rx] &lt; rank[ry]) {</span></span>
<span class="line"><span>                   parent[rx] = ry;</span></span>
<span class="line"><span>               } else if (rank[rx] &gt; rank[ry]) {</span></span>
<span class="line"><span>                   parent[ry] = rx;</span></span>
<span class="line"><span>               } else {</span></span>
<span class="line"><span>                   parent[ry] = rx;</span></span>
<span class="line"><span>                   rank[rx]++;</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>               comp--;</span></span>
<span class="line"><span>               return true;</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>97. 然后 check 函数：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private boolean check(int X, int n, List&lt;int[]&gt; mustEdges, List&lt;int[]&gt; optionalEdges, int k) {</span></span>
<span class="line"><span>    UnionFind uf = new UnionFind(n);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           // 检查必须边的强度</span></span>
<span class="line"><span>           for (int[] edge : mustEdges) {</span></span>
<span class="line"><span>               int s = edge[2];</span></span>
<span class="line"><span>               if (s &lt; X) {</span></span>
<span class="line"><span>                   return false;</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           // 加入必须边</span></span>
<span class="line"><span>           for (int[] edge : mustEdges) {</span></span>
<span class="line"><span>               int u = edge[0], v = edge[1];</span></span>
<span class="line"><span>               // 注意：这里我们调用union，如果返回false，说明有环</span></span>
<span class="line"><span>               if (!uf.union(u, v)) {</span></span>
<span class="line"><span>                   return false;</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           int upgrades = 0;</span></span>
<span class="line"><span>           // 处理不需要升级的非必须边</span></span>
<span class="line"><span>           for (int[] edge : optionalEdges) {</span></span>
<span class="line"><span>               int u = edge[0], v = edge[1], s = edge[2];</span></span>
<span class="line"><span>               if (s &gt;= X) {</span></span>
<span class="line"><span>                   // 如果两个点不连通，则加入</span></span>
<span class="line"><span>                   if (uf.find(u) != uf.find(v)) {</span></span>
<span class="line"><span>                       uf.union(u, v);</span></span>
<span class="line"><span>                   }</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           // 处理需要升级的非必须边</span></span>
<span class="line"><span>           for (int[] edge : optionalEdges) {</span></span>
<span class="line"><span>               int u = edge[0], v = edge[1], s = edge[2];</span></span>
<span class="line"><span>               if (s &lt; X &amp;&amp; 2 * s &gt;= X) {</span></span>
<span class="line"><span>                   if (uf.find(u) != uf.find(v)) {</span></span>
<span class="line"><span>                       uf.union(u, v);</span></span>
<span class="line"><span>                       upgrades++;</span></span>
<span class="line"><span>                   }</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           // 检查连通性和升级次数</span></span>
<span class="line"><span>           return uf.comp == 1 &amp;&amp; upgrades &lt;= k;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>98. 主函数：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public int maxStability(int n, int[][] edges, int k) {</span></span>
<span class="line"><span>    List&lt;int[]&gt; mustEdges = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>    List&lt;int[]&gt; optionalEdges = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>    for (int[] edge : edges) {</span></span>
<span class="line"><span>    if (edge[3] == 1) {</span></span>
<span class="line"><span>    mustEdges.add(edge);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>    optionalEdges.add(edge);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           int low = 1, high = 200000;</span></span>
<span class="line"><span>           int ans = -1;</span></span>
<span class="line"><span>           while (low &lt;= high) {</span></span>
<span class="line"><span>               int mid = low + (high - low) / 2;</span></span>
<span class="line"><span>               if (check(mid, n, mustEdges, optionalEdges, k)) {</span></span>
<span class="line"><span>                   ans = mid;</span></span>
<span class="line"><span>                   low = mid + 1;</span></span>
<span class="line"><span>               } else {</span></span>
<span class="line"><span>                   high = mid - 1;</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span>           return ans;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>99. 测试示例 3：必须边三条，在加入第三条时必须边形成环，所以 check(mid,...)返回 false，最终 ans=-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>100.  但是，注意：示例 3 中，三条必须边是[0,1,1,1],[1,2,1,1],[2,0,1,1]，在加入第三条边时，0 和 2 已经连通（因为 0-1-2），所以 union 返回 false，表示有环，然后 check 返回 false。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>101.  运行示例 1 和 2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>102.  示例 1：必须边只有一条[0,1,2,1]，加入后，连通块：0-1，2 独立（comp=2）。然后非必须边[1,2,3,0]：s=3&gt;=2（X=2），所以加入（连接 1 和 2），comp=1。upgrades=0&lt;=1，所以返回 true。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>103.  示例 2：X=6，没有必须边，然后非必须边：</span></span>
<span class="line"><span>      [0,1,4,0]: 4&lt;6 -&gt; 跳过不需要升级的边，但满足需要升级的条件（4&lt;6 且 8&gt;=6），所以在第二个循环中：检查 0 和 1 是否连通（初始不连通），加入，upgrades=1，comp 变为 2（0-1，2 独立）。</span></span>
<span class="line"><span>      [1,2,3,0]: 3&lt;6 -&gt; 6&gt;=6，满足，检查 1 和 2（1 和 2 不连通），加入，upgrades=2，comp=1。</span></span>
<span class="line"><span>      [0,2,1,0]: 1&lt;6 且 2&lt;6，所以不满足条件（不能用），跳过。</span></span>
<span class="line"><span>      所以返回 true。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>104.  因此，编写完整代码。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>105.  注意：在非必须边的处理中，我们并没有对边进行排序（因为我们只关心连通性，所以顺序无关）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>106.  提交。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>107.  可能会超时？因为每次 check 我们遍历了所有非必须边两次。但总边数 10^5，二分 18 次，总操作 18*2*10^5=3.6e6，可以接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>108.  但是，在必须边的处理中，我们遍历了所有必须边两次（第一次检查强度，第二次加入）。也可以合并成一次遍历：在遍历必须边时，同时检查强度并加入，如果遇到强度不够直接返回 false，如果遇到环也返回 false。这样只需遍历一次。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      for (int[] edge : mustEdges) {</span></span>
<span class="line"><span>      int s = edge[2];</span></span>
<span class="line"><span>      if (s &lt; X) {</span></span>
<span class="line"><span>      return false;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      if (!uf.union(edge[0], edge[1])) {</span></span>
<span class="line"><span>      return false;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>109.  这样合并，注意：如果先检查强度，然后加入，但加入时可能遇到环，所以没问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>110.  修改 check 函数：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // 合并必须边的处理</span></span>
<span class="line"><span>      for (int[] edge : mustEdges) {</span></span>
<span class="line"><span>      int u = edge[0], v = edge[1], s = edge[2];</span></span>
<span class="line"><span>      if (s &lt; X) {</span></span>
<span class="line"><span>      return false;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      // 然后加入</span></span>
<span class="line"><span>      if (!uf.union(u, v)) {</span></span>
<span class="line"><span>      return false;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>111.  这样节省了一次遍历。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>112.  最终代码：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们按照上述修改。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>113.  测试通过后，提交。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>114.  注意：在非必须边处理中，我们并没有在第一个循环（不需要升级的边）中更新升级次数，第二个循环（需要升级的边）中才更新，这样正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>115.  完整代码：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由于代码较长，这里不再赘述。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>116.  注意：并查集的按秩合并和路径压缩。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>117.  运行测试用例。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>118.  考虑一个边界：没有非必须边，只有必须边，且必须边刚好形成生成树。那么 X 的最大值是多少？X 最大为必须边的最小强度（因为必须边不能升级，所以生成树的最小强度不能超过必须边的最小强度）。所以我们的二分答案会找到必须边的最小强度。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>119.  例如：n=3, 必须边：[[0,1,5,1],[1,2,4,1]]，非必须边为空，k=0。</span></span>
<span class="line"><span>      X 可以取 1,2,3,4,5？但是最小强度是 4（因为必须边的最小强度是 4），所以 X 最大为 4？不对，生成树的最小强度是 4（因为边[1,2]强度为 4，是生成树的最小值），所以 X=5 不可行（因为必须边[1,2]的强度 4&lt;5，所以 X=5 会失败）。所以最大稳定性为 4。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>120.  在二分中，X=4：检查必须边，强度 5&gt;=4,4&gt;=4，所以通过。加入必须边：两条边，没有环，连通块为 1。非必须边为空。所以 X=4 可行。X=5：检查必须边，[1,2]的强度 4&lt;5，返回 false。所以最大稳定性为 4。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>121.  因此，正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>122.  最后，我们提交代码。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>123.  注意：在二分时，如果没有任何 X 可行，ans 保持-1，返回-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>124.  编写代码并提交。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>为了解决这个问题，我们需要找到一种生成树，使得生成树的稳定性（即所有边的最小强度）最大化。生成树必须包含所有标记为必须的边（<code>musti=1</code>），且这些边不能升级。对于非必须边（<code>musti=0</code>），我们可以选择是否使用，并且最多可以升级<code>k</code>条边（每条边最多升级一次，升级后强度翻倍）。如果无法连接所有节点，则返回<code>-1</code>。</p><h3 id="方法思路" tabindex="-1"><a class="header-anchor" href="#方法思路"><span>方法思路</span></a></h3><ol><li><strong>二分答案</strong>：我们二分查找可能的最大稳定性值<code>X</code>。稳定性<code>X</code>的范围在<code>1</code>到<code>200000</code>之间（因为边强度最大为<code>100000</code>，升级后最大为<code>200000</code>）。</li><li><strong>检查可行性</strong>：对于每个候选的<code>X</code>，检查是否存在一棵生成树，其中所有边的强度至少为<code>X</code>，且升级次数不超过<code>k</code>。</li><li><strong>处理必须边</strong>：首先检查所有必须边的强度是否都至少为<code>X</code>，如果有一条不满足，则<code>X</code>不可行。然后，将这些边加入并查集，如果形成环，则<code>X</code>不可行。</li><li><strong>处理非必须边</strong>：将非必须边分为两组： <ul><li><strong>不需要升级的边</strong>：原始强度已经满足<code>X</code>，直接加入并查集（不消耗升级次数）。</li><li><strong>需要升级的边</strong>：原始强度小于<code>X</code>但升级后强度满足<code>X</code>，加入并查集并消耗升级次数。</li></ul></li><li><strong>连通性检查</strong>：最后检查图是否连通（连通块数量为 1）且升级次数不超过<code>k</code>。</li></ol><h3 id="解决代码" tabindex="-1"><a class="header-anchor" href="#解决代码"><span>解决代码</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> java.util.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Solution</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> UnionFind</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[] parent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[] rank</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> comp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        public</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> UnionFind</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            parent </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[n];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            rank </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[n];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            comp </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n; i++) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                parent[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> find</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (parent[x] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> x) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                parent[x] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> find</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(parent[x]);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> parent[x];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> boolean</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> union</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> rx</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> find</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(x);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ry</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> find</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(y);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (rx </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ry) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (rank[rx] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> rank[ry]) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                parent[rx] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ry;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (rank[rx] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> rank[ry]) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                parent[ry] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> rx;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                parent[ry] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> rx;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                rank[rx]++;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            comp--;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> maxStability</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[][] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">edges</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> k</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[]&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">mustEdges</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[]&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">optionalEdges</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">edge</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> edges) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (edge[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                mustEdges</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(edge);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                optionalEdges</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(edge);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> low</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, high </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 200000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ans</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (low </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> high) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> mid</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> low </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (high </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> low) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">check</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(mid, n, mustEdges, optionalEdges, k)) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                ans </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mid;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                low </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mid </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                high </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mid </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ans;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> boolean</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> check</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> X</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[]&gt; </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">mustEdges</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[]&gt; </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">optionalEdges</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> k</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        UnionFind</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> uf</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> UnionFind</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(n);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">edge</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mustEdges) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> u</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> edge[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">], v </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> edge[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">], s </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> edge[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (s </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> X) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">uf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">union</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(u, v)) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> upgrades</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">edge</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> optionalEdges) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> u</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> edge[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">], v </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> edge[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">], s </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> edge[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (s </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> X) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ru</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> uf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">find</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(u);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> rv</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> uf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">find</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(v);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (ru </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> rv) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                    uf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">union</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(u, v);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">edge</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> optionalEdges) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> u</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> edge[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">], v </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> edge[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">], s </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> edge[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (s </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> X </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&amp;&amp;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> s </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> X) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ru</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> uf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">find</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(u);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> rv</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> uf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">find</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(v);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (ru </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> rv) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                    uf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">union</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(u, v);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    upgrades++;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (upgrades </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> k) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                        break</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> uf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">comp</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> upgrades </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> k;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码解释" tabindex="-1"><a class="header-anchor" href="#代码解释"><span>代码解释</span></a></h3><ol><li><strong>UnionFind 类</strong>：用于管理并查集操作，包括路径压缩和按秩合并，以高效处理连通性。</li><li><strong>maxStability 方法</strong>： <ul><li><strong>预处理</strong>：将边分为必须边和非必须边。</li><li><strong>二分查找</strong>：在<code>[1, 200000]</code>范围内二分查找最大稳定性值<code>X</code>。</li></ul></li><li><strong>check 方法</strong>：验证给定<code>X</code>是否可行。 <ul><li><strong>必须边处理</strong>：检查所有必须边强度是否至少为<code>X</code>，并加入并查集。如果必须边形成环，返回<code>false</code>。</li><li><strong>非必须边处理</strong>： <ul><li><strong>不需要升级的边</strong>：强度已满足<code>X</code>，直接加入并查集。</li><li><strong>需要升级的边</strong>：强度升级后满足<code>X</code>，加入并查集并记录升级次数。</li></ul></li><li><strong>结果检查</strong>：图是否连通（<code>uf.comp==1</code>）且升级次数不超过<code>k</code>。</li></ul></li></ol><p>该算法通过二分答案和并查集高效地解决了问题，确保在给定的约束下最大化生成树的稳定性。</p>`,14)]))}const r=n(p,[["render",e],["__file","T4.html.vue"]]),t=JSON.parse('{"path":"/module_ai/weekly-contest-456/t4.html","title":"生成树稳定性最大化算法","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"USER","slug":"user","link":"#user","children":[]},{"level":2,"title":"ASSISTANT","slug":"assistant","link":"#assistant","children":[{"level":3,"title":"方法思路","slug":"方法思路","link":"#方法思路","children":[]},{"level":3,"title":"解决代码","slug":"解决代码","link":"#解决代码","children":[]},{"level":3,"title":"代码解释","slug":"代码解释","link":"#代码解释","children":[]}]}],"git":{"createdTime":1751299769000,"updatedTime":1751299769000,"contributors":[{"name":"gdut-yy","username":"gdut-yy","email":"gdut_yy@163.com","commits":1}]},"readingTime":{"minutes":38.67,"words":11602},"filePathRelative":"module_ai/weekly-contest-456/t4.md","localizedDate":"2025年7月1日"}');export{r as comp,t as data};
