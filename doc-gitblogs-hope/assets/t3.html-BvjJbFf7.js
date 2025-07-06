import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as l}from"./app-D75trwlE.js";const p={};function e(d,s){return l(),a("div",null,s[0]||(s[0]=[i(`<h1 id="使树路径成本相等方法" tabindex="-1"><a class="header-anchor" href="#使树路径成本相等方法"><span>使树路径成本相等方法</span></a></h1><ul><li>会话记录：<a href="https://yuanbao.tencent.com/chat/naQivTmsDa/fb47de3b-0ed1-43c4-aff1-ad0e7f78a418" target="_blank" rel="noopener noreferrer">https://yuanbao.tencent.com/chat/naQivTmsDa/fb47de3b-0ed1-43c4-aff1-ad0e7f78a418</a></li><li>无修改 AC。</li></ul><h2 id="user" tabindex="-1"><a class="header-anchor" href="#user"><span>USER</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>给你一个整数 n，以及一个无向树，该树以节点 0 为根节点，包含 n 个节点，节点编号从 0 到 n - 1。这棵树由一个长度为 n - 1 的二维数组 edges 表示，其中 edges[i] = [ui, vi] 表示节点 ui 和节点 vi 之间存在一条边。</span></span>
<span class="line"><span>每个节点 i 都有一个关联的成本 cost[i]，表示经过该节点的成本。</span></span>
<span class="line"><span>路径得分 定义为路径上所有节点成本的总和。</span></span>
<span class="line"><span>你的目标是通过给任意数量的节点 增加 成本（可以增加任意非负值），使得所有从根节点到叶子节点的路径得分 相等 。</span></span>
<span class="line"><span>返回需要增加成本的节点数的 最小值 。</span></span>
<span class="line"><span>示例 1：</span></span>
<span class="line"><span>输入： n = 3, edges = [[0,1],[0,2]], cost = [2,1,3]</span></span>
<span class="line"><span>输出： 1</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>树中有两条从根到叶子的路径：</span></span>
<span class="line"><span>路径 0 → 1 的得分为 2 + 1 = 3。</span></span>
<span class="line"><span>路径 0 → 2 的得分为 2 + 3 = 5。</span></span>
<span class="line"><span>为了使所有路径的得分都等于 5，可以将节点 1 的成本增加 2。</span></span>
<span class="line"><span>仅需增加一个节点的成本，因此输出为 1。</span></span>
<span class="line"><span>示例 2：</span></span>
<span class="line"><span>输入： n = 3, edges = [[0,1],[1,2]], cost = [5,1,4]</span></span>
<span class="line"><span>输出： 0</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>树中只有一条从根到叶子的路径：</span></span>
<span class="line"><span>路径 0 → 1 → 2 的得分为 5 + 1 + 4 = 10。</span></span>
<span class="line"><span>由于只有一条路径，所有路径的得分天然相等，因此输出为 0。</span></span>
<span class="line"><span>示例 3：</span></span>
<span class="line"><span>输入： n = 5, edges = [[0,4],[0,1],[1,2],[1,3]], cost = [3,4,1,1,7]</span></span>
<span class="line"><span>输出： 1</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>树中有三条从根到叶子的路径：</span></span>
<span class="line"><span>路径 0 → 4 的得分为 3 + 7 = 10。</span></span>
<span class="line"><span>路径 0 → 1 → 2 的得分为 3 + 4 + 1 = 8。</span></span>
<span class="line"><span>路径 0 → 1 → 3 的得分为 3 + 4 + 1 = 8。</span></span>
<span class="line"><span>为了使所有路径的得分都等于 10，可以将节点 1 的成本增加 2。 因此输出为 1。</span></span>
<span class="line"><span>示例 4：</span></span>
<span class="line"><span>输入：n = 4, edges = [[0,1],[0,2],[0,3]], cost = [10,12,7,13]</span></span>
<span class="line"><span>输出：2</span></span>
<span class="line"><span>示例 5：</span></span>
<span class="line"><span>输入：n = 4, edges = [[0,1],[0,2],[0,3]], cost = [10,12,7,13]</span></span>
<span class="line"><span>输出：2</span></span>
<span class="line"><span>示例 6：</span></span>
<span class="line"><span>输入：n = 5, edges = [[0,1],[1,2],[0,3],[3,4]], cost = [2,22,3,4,21]</span></span>
<span class="line"><span>输出：0</span></span>
<span class="line"><span>提示：</span></span>
<span class="line"><span>2 &lt;= n &lt;= 10^5</span></span>
<span class="line"><span>edges.length == n - 1</span></span>
<span class="line"><span>edges[i] == [ui, vi]</span></span>
<span class="line"><span>0 &lt;= ui, vi &lt; n</span></span>
<span class="line"><span>cost.length == n</span></span>
<span class="line"><span>1 &lt;= cost[i] &lt;= 10^9</span></span>
<span class="line"><span>输入保证 edges 表示一棵合法的树。</span></span>
<span class="line"><span>\`\`java</span></span>
<span class="line"><span>class Solution {</span></span>
<span class="line"><span>    public int minIncrease(int n, int[][] edges, int[] cost) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="assistant" tabindex="-1"><a class="header-anchor" href="#assistant"><span>ASSISTANT</span></a></h2><details class="hint-container details"><summary>已深度思考(用时 10 分 12 秒)</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>我们需要通过增加节点的成本，使得从根节点 0 到每个叶子节点的路径总成本（得分）相等。我们要求最小化增加成本的节点数（注意：不是最小化总增加量，而是最小化被增加成本的节点个数）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>观察：我们只能在节点上增加成本（非负值）。由于树的结构，我们可以从叶子向上考虑。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：我们可以增加任意非负值，所以我们可以让路径成本变成任意不小于原始值的值。但是，我们希望尽可能少的节点被增加。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>目标：所有根到叶子的路径成本都相等。设这个相等的值为 T。显然 T 至少为所有路径原始成本的最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>问题是我们希望最小化被增加成本的节点数，而不是总增加量。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>思路：</span></span>
<span class="line"><span>我们考虑自底向上计算。对于每个节点，我们可能需要记录一些关于其子树中路径的信息。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>关键点：当我们向上走的时候，从当前节点到根节点的路径是公共的。而不同分支的路径在分叉点以下可能是独立的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们可能希望调整从当前节点到其各个子树中的叶子节点的那部分路径，使得从当前节点出发到各个叶子节点的路径成本相等（然后向上传递）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>设当前节点为 u，它有几个子节点。那么从 u 到其子树中的叶子的路径会经过不同的子节点分支。我们需要让这些分支的路径成本（从 u 到叶子）都相等。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们可以在 u 上增加成本，从而影响所有经过 u 的路径（即所有从 u 到叶子的路径都会加上 u 上增加的值）。同样，我们也可以在其他节点增加成本，但我们的目标是最小化被增加的节点数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们可以对每个节点 u 计算：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 如果不调整（即不在 u 的子树中增加任何节点），从 u 到各个叶子的路径原始成本的最大值是多少？设为 maxPath[u]。</span></span>
<span class="line"><span>- 但我们可能希望在一个节点上增加成本，从而一次性解决多条路径的调整问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，问题要求最小化被增加成本的节点数。我们需要选择在哪些节点上增加成本，使得所有叶子路径成本相等，且被修改的节点数最少。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另一种思路：我们最终希望所有根到叶子的路径总成本相等。那么根到叶子的路径总成本可以分成几段：从根到一个分叉点，然后从分叉点到叶子。我们可以在分叉点处调整其子树中的路径。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们可以从叶子开始，向上传递信息。考虑每个节点 u，我们希望其所有子树（即从 u 的不同分支到叶子）的路径成本在调整后相等。注意，我们可以在 u 处增加成本，这样所有分支都会加上相同的值；我们也可以在分支内部的节点上增加成本（这可能会影响该分支的多个路径，但若在一个分支内部的不同节点上增加，则可能影响不同的路径）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们希望最小化被增加成本的节点数。因此，我们更倾向于在较高的节点（比如 u）上增加一次，以覆盖所有分支。然而，如果 u 的子树中的不同分支的路径成本已经相等了，那么我们就无需在 u 处增加，只需传递这个值；如果不相等，我们可以通过在 u 处增加使得它们相等吗？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：在 u 处增加成本只能让所有分支的路径成本同时增加相同的值，所以不能改变分支之间的差异。因此，我们必须先调整好每个分支，使得每个分支中的路径成本（从 u 的子节点到叶子的部分）都相等，然后才能通过调整 u 来统一所有分支（加上相同的值）使得从 u 出发的所有路径成本相等？不对，因为每个分支内部可能已经调整到了不同的值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实际上，我们需要的是：对于节点 u，我们调整其子树（在 u 的子节点以下的子树）后，使得从 u 的每个子节点 v 出发的路径成本都相等（设为 M_u），然后 u 的成本可以任意增加（如果我们选择在 u 上增加，那么就可以让所有分支都增加相同的值，从而保持相等）。但如果我们不在 u 上增加，那么各个分支的值必须原来就是相等的（此时 M_u 就是那个相等的值），然后加上 u 的原始成本。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，问题是我们可以在任意节点增加成本。所以对于 u 的子树，我们调整后，从 u 出发到叶子的路径成本必须是同一个值（记为 T_u）。这个 T_u 是多少？我们可以自由设定，只要不小于原始路径的最大值（因为我们只能增加不能减少）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，为了最小化被修改的节点数，我们希望尽量用较少的修改节点（在较高层的节点修改）来统一多条路径。因此，我们可能会将每个子树调整到相同的值，然后通过父节点的一次修改来统一。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，我们也可以选择不在 u 处修改，而是将每个子树调整到不同的值（但这些值加上 u 的成本后变成相等的值）？实际上，如果我们不在 u 处修改，那么从 u 到叶子的路径成本就是 u 的原始成本加上从子节点到叶子的路径成本。为了使它们相等，我们要求每个分支（即从 u 到每个子节点分支的叶子）的路径成本（从子节点 v 到叶子）在调整后必须都等于同一个值，设为 x，那么从 u 出发的路径成本就是 cost[u] + x（如果不在 u 上增加）。但如果我们选择在 u 上增加一个值 a，那么从 u 出发的路径成本就是 cost[u] + a + （从 v 到叶子的路径成本，但注意我们已经调整了子树）。所以实际上，我们可以将每个分支调整到任意值，然后通过在 u 处增加来统一。但注意，我们调整子树时可能已经让每个分支内部的路径成本相等了，但不同分支可能不同。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>策略：</span></span>
<span class="line"><span>我们定义 dp[u]为：在以 u 为根的子树中，不修改 u 节点的情况下，从 u 到叶子的路径成本在调整后必须达到的公共值（注意：调整只能增加，所以这个公共值不能小于该子树中原始路径成本的最大值）。但这样定义并不直接。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另一种思路：我们定义每个节点 u 需要满足：其所有子树（分支）的路径成本（指从 u 的子节点到叶子的部分）在经过调整后（已经调整好）是相等的。然后我们在 u 上增加一个值（如果必要）来使得从 u 出发的所有路径成本相等（同时，这个值也是相等的）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但这样无法直接表达最小节点数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们定义：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 我们考虑以 u 为根的子树，经过调整后，从 u 到叶子的所有路径成本都相等（设为 T_u）。</span></span>
<span class="line"><span>- 我们还需要记录在子树 u 中被修改的节点数的最小值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，问题在于，当我们考虑 u 的多个子节点时，每个子节点 v 对应的子树已经被调整好了：即从 v 出发到叶子的路径成本都相等（设为 T_v），并且我们知道在子树 v 中被修改的最小节点数。现在，我们要将 u 和这些子树合并。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果我们不在 u 上增加，那么从 u 出发的路径成本就是 cost[u] + T_v（这里 T_v 对于不同的 v 可能不同）。我们需要将它们调整为相等的值，唯一的办法是调整某些 v 子树中的节点（注意我们不能再调整 v 子树中的 T_v 了，因为子树 v 已经调整好了？不对，我们之前调整子树 v 的时候，并没有限制 T_v 的值，我们只是要求子树 v 中所有路径相等，但具体等于多少我们可以自由选择，只要大于等于原始值）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们调整子树 v 时，可以自由设定 T_v（但是不能小于该子树原始路径成本的最大值）。也就是说，在满足不小于原始路径成本的最大值的条件下，我们可以选择任意一个值作为 T_v。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>那么，对于节点 u，我们要求所有子节点 v 的 T_v 都等于同一个值，然后加上 u 的成本（或者加上 u 上增加的值）就可以相等。但注意，如果我们选择让所有 v 的 T_v 都等于 x，那么从 u 到叶子的路径成本就是 cost[u] + x（如果不在 u 上增加）。而 x 必须不小于每个子树 v 的原始路径成本的最大值（设为 max_v）。因此 x 至少为 max_v（v 在 u 的子节点中）的最大值。这样，我们选择一个 x = max{ max_v }，然后对于那些原始最大值小于 x 的子树 v，我们可以通过增加该子树中的节点来将 T_v 提升到 x（这里提升的方式又涉及到最小节点数？）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在问题变成：对于每个子树 v，我们可以通过增加该子树中节点的成本，将 T_v 提升到任意值（但不能小于原始最大值），并且我们希望最小化整个树中被修改的节点数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：我们可以在子树 v 中通过增加一个节点（可能是 v 本身，也可能是子树中的其他节点）来将整个子树 v 的路径成本提升一个差值（比如，我们可以在 v 处增加，这样整个子树所有路径都增加相同的值；也可以在子树中的多个节点上分别增加，但这样可能修改的节点数就多了）。显然，为了最小化修改节点数，我们更倾向于在子树的根节点（v）上增加一次，从而提升整个子树的路径成本。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，对于子树 v，如果我们希望将其 T_v 提升到目标值 x，那么我们可以：</span></span>
<span class="line"><span>在子树 v 中，我们只需要在节点 v 上增加 (x - T_v) 的值，就可以让整个子树 v 的路径成本增加(x - T_v)，从而使得 T_v 从原来的值（即该子树原始路径成本最大值）提升到 x。这样修改的节点数为 1（如果 x&gt;T_v）。当然，我们也可以不提升（如果 x 等于 T_v，则无需修改）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，如果我们在子树 v 中已经修改过一些节点（在计算子树 v 的时候），那么此时子树 v 的 T_v 已经被我们选择了一个值（这个值可能大于原始最大值，因为被提升了），并且我们记录在子树 v 中修改的最小节点数。然而，我们之前调整子树 v 时，我们并不知道父节点 u 会要求 T_v 提升到多少？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们需要在不知道父节点要求的情况下，调整子树 v？这似乎难以进行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>重新思考：由于我们可以自由选择 T_v（只要不低于原始最大值），并且我们希望最小化全局的修改节点数，那么对于节点 u，我们希望让所有子节点 v 的 T_v 都等于一个值，记为 T_u - cost[u]（如果我们不在 u 上增加），或者 T_u - (cost[u] + delta_u)（如果我们在 u 上增加了 delta_u）。我们也可以选择在 u 上增加，这样我们就可以将 u 以下的子树统一提升，使得从 u 出发的路径成本达到 T_u。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，整个调整过程应该是自顶向下？不，自底向上。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们定义状态：</span></span>
<span class="line"><span>dp[u] 表示在 u 的子树中，从 u 到叶子的路径成本的最小可能的最大值（注意：在调整后，所有路径成本相等，我们要求这个值最小，因为如果太大，可能对父节点要求就高，增加的值就多？不对，我们只关心修改节点数，不关心增加的总量，但我们需要满足条件：所有路径成本相等，且这个值至少为原始最大值）。</span></span>
<span class="line"><span>但是，实际上这个值我们无法自由选择：因为父节点会要求一个值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另一种思路：我们只关心被修改的节点数，不关心实际增加的值。那么，我们尽量推迟修改（即不在子节点修改，而是等到父节点再修改）可能会更好？因为父节点修改一次可以影响多个分支。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>考虑：当节点 u 有多个子节点时，我们观察到每个子节点 v 对应的子树的最大路径成本（从 v 到叶子）可能不同。我们可以选择在 u 处增加，使得所有分支都加上相同的值，但这只能解决整体提升的问题，不能解决分支之间不平衡的问题。因此，分支之间的不平衡必须在每个分支内部处理，即通过调整（提升）某些分支的成本，使得它们都达到一个公共值（比如所有分支中最大值）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，对于节点 u，我们首先要求每个子分支的路径成本都提升到同一个值，记这个公共值为 M（M 不小于所有分支原始路径成本的最大值）。那么，我们可以在每个分支中，通过增加分支中的节点（我们选择在分支的根节点，即子节点 v 上增加）来提升该分支的整个路径成本（只需增加一次）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，对于节点 u，我们可以这样处理：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.  先递归求解每个子节点 v，得到每个子树 v 的原始最大路径成本（从 v 到叶子的原始最大值）和子树 v 中被修改的节点数（并且子树 v 已经被调整为：从 v 到叶子的所有路径成本都相等，且值为 T_v，其中 T_v 至少为子树 v 的原始最大值）。</span></span>
<span class="line"><span>2.  注意，此时我们并未要求各 v 的 T_v 相等。现在，我们需要选择一个目标值 M（M 至少为所有 v 的原始路径成本的最大值中的最大值，记为 maxM）。然后，对于每个子树 v，如果 T_v &lt; M，我们就需要在 v 上增加(M - T_v)（这样该分支所有路径都会加上这个值），这样该分支的路径成本就提升到 M 了。同时，修改次数增加 1（因为我们在 v 上修改）。如果 T_v &gt;= M，那么该分支的路径成本已经是 M（或大于 M，但我们不需要提升，所以不会增加修改节点数？注意，如果 T_v 已经大于等于 M，我们不用做任何事，因为目标已经达到，但是我们希望从 v 出发的路径成本是 M，所以如果 T_v 大于 M，我们其实应该调整？不对，因为题目只允许增加，不能减少。所以 T_v 只能大于等于目标值 M，我们不需要调整。但这样，从 v 出发的路径成本就是 T_v，而不是 M。所以为了使所有分支的路径成本都恰好等于 M，我们需要 T_v &lt;= M，然后通过提升使其等于 M？不对，我们允许路径成本大于 M 吗？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：目标只需要所有根到叶子的路径成本相等，并不规定是多少。所以我们并不强制要求每个分支的路径成本恰好等于 M，只要它们相等即可。因此，我们可以选择 M 为所有 T_v 的最大值。这样，对于每个子树 v，如果 T_v &lt; M，那么我们在 v 上增加(M - T_v)，从而将路径成本提升到 M；对于 T_v&gt;=M 的，我们不需要提升（因为它们已经大于等于 M 了，但是它们可能不相等？注意，我们要求每个分支都相等，因此我们必须让所有分支的路径成本都变成 M（因为我们已经选择了 M，并且只能增加不能减少，所以只能让原来小的提升到 M，而原来大的我们无法降低，所以 M 只能取最大值，并且大的分支我们无法降低，只能让小的提升到 M）。但是，如果我们让每个分支都等于 M，那么从 u 出发的路径成本会是多少？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果我们在 u 上不做任何操作，那么从 u 出发的路径成本为：cost[u] + T_v（调整后变成 cost[u] + M（因为我们把每个分支的路径成本都提升到 M））。但是，这里要注意：我们只在子节点 v 上增加，而 u 本身的成本不变。那么，对于每个分支 v，从 u 到叶子的路径成本实际为：cost[u] + (如果 v 分支被提升后，该分支的路径成本=M)? 但提升操作是在 v 上增加(M-T_v)，所以 v 分支的路径成本变为 M（从 v 到叶子的部分），然后加上 u 的成本，所以就是 cost[u]+M。因此，所有分支都是 cost[u]+M，自然相等。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，这样修改后，节点 u 本身没有被修改，而我们在每个需要提升的子节点 v 上修改了一次。那么，修改的节点数就是那些 T_v &lt; M 的子节点 v 的个数（我们在这些 v 上修改了，每个一次）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后，我们返回给父节点：以 u 为根的子树的 T_u = cost[u] + M（注意，这个 M 是所有子节点的 T_v 的最大值）? 不对，我们实际上调整后，每个分支从 v 到叶子都是 M，所以从 u 到叶子就是 cost[u]+M。因此，我们返回的 T_u = cost[u] + M。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，我们还有一种选择：不在子节点上修改，而在 u 上修改？这个思路我们之前没有考虑。实际上，我们可以在 u 上增加一个值 a，然后让每个子分支的路径成本都变成同一个值（比如设为 x），然后从 u 出发的路径成本就是 cost[u]+a+x。这个 x 怎么选？我们可以自由选，只要不小于每个分支的原始最大值（因为我们只能增加，不能降低分支的路径成本）。那么，我们可以选择 x 为每个分支原始最大值中的最大值（记为 maxM），然后在 u 上增加一个值 a，这样所有分支的路径成本都变成 x，而从 u 出发的路径成本就是 cost[u]+a+x。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>那么，我们如何达到 x？对于每个分支 v，我们如果不在分支 v 中修改，那么分支 v 的路径成本就是它原始的值（在调整之前，我们递归得到的子树 v 的 T_v 是什么？注意，我们递归时返回的 T_v 就是已经调整好的值吗？不对，我们还没有调整，所以递归返回的应该是该子树在调整后从 v 出发到叶子的路径成本（这个值是相等的）？但实际上，我们递归计算时，还没有进行子树的调整（我们是在当前节点才进行调整的），所以我们需要递归时返回两个值：子树 v 的最小修改节点数，以及子树 v 的原始最大路径成本（即没有任何调整的情况下）？或者返回在子树 v 中调整后达到的 T_v（这个 T_v 是可以被设定的最小值？因为我们要最小化修改节点数，所以我们在子树 v 中会选择一个最小的 T_v，即原始最大值，不做任何提升？不对，因为父节点可能要求更高的值）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们需要重新设计递归状态。对于节点 u，我们返回两个值： - 在子树 u 中，我们经过调整后，从 u 到叶子的路径成本（所有路径相等）的值（记作 val[u]）。 - 在子树 u 中被修改的节点数的最小值（记作 cnt[u]）。</span></span>
<span class="line"><span>但是，val[u]不是唯一确定的，因为我们可以选择不同的目标值。我们希望在满足条件（不小于原始最大值）的前提下，使得父节点合并时总的修改节点数最少。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但这样状态不确定，很复杂。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>回到上面的处理：对于节点 u，我们递归得到每个子节点 v 的两个信息：</span></span>
<span class="line"><span>max_val[v]: 子树 v 中，从 v 到叶子的所有路径成本在调整后都相等，这个相等的值（即 T_v）是多少？</span></span>
<span class="line"><span>modified_nodes[v]: 子树 v 中被修改的节点数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后，我们选择 M = max{ T_v } (v 是 u 的子节点)，然后对于每个 v，如果 T_v &lt; M，那么我们需要在 v 上增加（这样修改节点数增加 1），然后整个分支 v 的路径成本就变成了 M。然后，从 u 出发的路径成本就是 cost[u] + M（因为我们没有在 u 上增加）。这样，整个子树 u 中，所有路径成本都变成了 cost[u] + M？注意，这要求我们修改了每个 T_v 小于 M 的子节点 v。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们也可以选择不在 v 上修改，而是在 u 上修改？注意，如果我们不在 v 上修改，那么分支 v 的路径成本就是 T_v（&lt;M），我们可以在 u 上增加(M - T_v)来使得这个分支的路径成本变成 T_v + (M-T_v) = M。但是，这只能解决一个分支？不对，因为我们在 u 上增加的值会同时作用到所有分支。如果我们想同时提升多个分支，但每个分支缺少的值不同，那么在 u 上增加的值只能是一个统一的值，无法解决不同分支缺少不同值的问题。例如，分支 1 缺少 2，分支 2 缺少 3，那么我们在 u 上增加 2，则分支 1 达到 M，但分支 2 仍然缺少 1；如果增加 3，则分支 1 多增加了 1。但是，题目允许我们在多个节点上分别增加，所以我们可以选择在 v 上分别增加各自缺少的值（这样每个分支独立调整）或者在 u 上增加一个值（但这样无法同时满足不同分支的不同要求）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，在父节点 u 处，我们只能通过以下两种方式： 1. 在每个子节点 v 上分别增加，使得每个分支的路径成本都达到 M（最大值），这样修改节点数等于 T_v&lt;M 的子节点数。 2. 在 u 上增加一个值（但是不能解决不同分支需要不同提升量的问题），所以如果不同分支的 T_v 不相同，我们无法通过在 u 上增加一次来使它们相等（只能整体提升，不能改变分支之间的差异）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，我们只能采用方式 1：在子节点 v 上分别增加（或者在该分支内部的其他节点上增加），将各个分支的路径成本统一到 M。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>那么，我们如何处理 u 节点？以上操作后，各个分支的路径成本都变成了 M（从 v 到叶子的部分），然后加上 u 的原始成本（没有增加），所以从 u 到叶子就是 cost[u] + M。然后我们把这个值返回给父节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，这里有一个问题：我们可以在 u 上增加吗？实际上，我们并没有禁止在 u 上增加，但在这个方案中，我们并没有在 u 上增加（因为我们是在子节点 v 上增加的）。而且，如果我们不在 u 上增加，那么返回的就是 cost[u]+M。这个值可能很小，父节点可能需要为此在子树上做更多修改（比如父节点要求一个更大的值，那么父节点就会在 u 上增加，或者要求 u 返回一个更大的值？）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：在子节点上增加，我们可以独立调整每个分支，所以我们可以自由地设定每个分支的路径成本为 M（选择 M 为最大值）。但是，如果我们选择在 u 上增加，我们可以怎么做？实际上，在 u 上增加一个值，会同时影响所有分支。所以，我们可以在子节点 v 上不增加（保持 T_v），然后在 u 上增加，从而使得从 u 到叶子的路径成本变成 cost[u] + delta_u + T_v。为了让所有分支相等，我们必须要求所有分支的 T_v 都相等（即 T_v1 = T_v2 = ... = T_vk）。因此，我们必须在分支内部调整使得所有分支的原始路径成本都相等（即每个分支的 T_v 相等），然后在 u 上增加 delta_u，这样从 u 出发的所有路径成本就是 cost[u]+delta_u+T_v（每个分支都一样）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>那么，我们也可以选择这种策略：先在分支内部调整（不提升或者提升到相同的值），然后在 u 上增加。这样修改节点数可能是（分支内部调整的节点数）+（在 u 上增加算 1 次修改）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>比较两种策略：</span></span>
<span class="line"><span>策略 1：在子节点上提升（每个需要提升的子节点 v 上修改一次，修改次数=需要提升的子节点数），然后返回 cost[u] + M（其中 M 是子节点 T_v 的最大值）。</span></span>
<span class="line"><span>策略 2：要求所有分支的 T_v 都相等（设为 T），这个 T 可以选择为所有分支 T_v 的最大值（设为 M）？或者更小？但是不能小于任何分支的原始最大值（因为只能增加不能减少，所以 T 至少为每个分支的原始最大值）。但是，每个分支的原始最大值是不同的，所以 T 至少为各分支原始最大值中的最大值（即 M）。因此，T 必须等于 M。然后，我们要求每个分支的 T_v 都等于 M（这和在子节点上提升到 M 是一样的）。然后我们在 u 上增加 delta_u（这里 delta_u 可以是 0，也可以任意值？不对，我们要求从 u 出发的路径成本相等，并且我们可以自由设定为任意值，所以 delta_u 可以是任意非负值）？实际上，delta_u 可以是 0，因为我们已经让每个分支都等于 M 了。这样，策略 2 实际上等同于策略 1：我们同样在每个需要提升的分支 v 上修改（即分支的 T_v&lt;M 的分支），然后 u 上不修改。修改节点数是一样的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，策略 2 无法节省节点数。因此我们统一采用策略 1：在每个需要提升的分支 v 上修改（即 T_v 小于 M 的分支，我们在 v 上增加，使该分支路径成本提升到 M），然后 u 上不修改，返回 T_u = cost[u] + M。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们还有一种选择：不在子节点 v 上修改，而是继续在 v 的子树中修改？这样可能修改的节点数更多？因为如果在 v 的子节点上修改，可能影响多个路径，而我们只需要修改一个节点（v）就可以提升整个分支，所以肯定修改 v 是最优的（修改一次就能提升整个分支）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，递归计算：</span></span>
<span class="line"><span>假设 u 的子节点为 v1, v2, ..., vk。</span></span>
<span class="line"><span>递归计算每个 vi 的 (T_vi, cnt_vi) （T_vi 表示从 vi 出发到叶子的路径成本，在调整后相等，值为 T_vi；cnt_vi 是子树 vi 中被修改的节点数）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      令 M = max{ T_vi }  (i=1..k)</span></span>
<span class="line"><span>      令 add_u = 0   # 记录当前节点u需要新增的修改节点数（即对于每个T_vi &lt; M的vi，我们需要在vi上修改一次）</span></span>
<span class="line"><span>       对于每个子节点vi:</span></span>
<span class="line"><span>            if T_vi &lt; M:</span></span>
<span class="line"><span>                那么我们需要在vi上增加（所以该分支的路径成本提升到M），并且新增一次修改（所以该分支的修改节点数增加1）</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                不需要新增修改</span></span>
<span class="line"><span>      然后，u节点的总修改节点数 = sum( cnt_vi ) + (那些T_vi &lt; M的vi的个数)   （注意：cnt_vi是子树vi中已经修改的节点数，而我们现在又在vi上修改（如果T_vi&lt;M））</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      然后，返回给u的父节点：T_u = cost[u] + M</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意：如果 u 是叶子节点怎么办？叶子节点没有子节点，则 M 为 0（因为没有子节点，所以没有最大值）？所以 T_u = cost[u] + 0 = cost[u]。修改节点数为 0（因为没有任何子节点需要提升，所以 add_u=0，并且没有子节点所以子节点修改和为 0）？合理。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另外，如果 u 只有一个子节点？那么子节点列表只有一个 v，M=T_v，那么就不会新增修改节点数（因为不需要提升），然后 T_u = cost[u] + T_v。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，这样计算的话，整个树根 0 我们得到 T_0，它等于什么？但是我们最终要求的是修改节点数，即根节点的子树中的修改节点数（包括在子节点上修改的次数）？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，根节点 0 没有父节点，所以我们计算完根节点后，修改节点数就是 cnt[0]（我们定义的状态）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们还没有考虑根节点 0：我们可能还需要在根节点 0 上增加吗？注意，我们在策略中，在根节点 0 处理子节点后，返回的 T_0 = cost[0] + M（其中 M 是根节点 0 的所有子节点的 T_v 的最大值）。然后我们并没有在根节点 0 上增加（因为我们在根节点 0 处理中，只会在其子节点上增加）。那么，根节点 0 本身没有被修改。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们的算法是自底向上的：先处理所有子节点，然后处理父节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们递归时返回两个值：修改节点数 cnt 和 T_u。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>步骤总结：</span></span>
<span class="line"><span>定义递归函数：dfs(u, parent) 返回 (long T_u, int cnt_u)</span></span>
<span class="line"><span>对于当前节点 u：</span></span>
<span class="line"><span>T_u = ?</span></span>
<span class="line"><span>cnt_u = 0 # 累计所有子树的修改节点数，以及在本节点新增的修改节点数（即需要提升的分支数）</span></span>
<span class="line"><span>子节点列表：遍历 edges，找到所有与 u 相连的非父节点</span></span>
<span class="line"><span>如果没有子节点（叶子节点）：返回 (cost[u], 0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        否则，对于每个子节点v，递归得到 (T_v, cnt_v) = dfs(v, u)，然后累加cnt_v到cnt_u中（即所有子树中的修改节点数）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        然后，令 M = 所有子节点的T_v中的最大值。</span></span>
<span class="line"><span>        然后，再遍历所有子节点v：</span></span>
<span class="line"><span>               如果 T_v &lt; M，那么我们需要在v上增加，因此修改节点数增加1（即cnt_u += 1）</span></span>
<span class="line"><span>            （注意，这里新增的1次修改，就是因为我们在这个分支的根节点v上增加了一次，从而将该分支提升到M）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        然后，设置 T_u = cost[u] + M</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        返回 (T_u, cnt_u)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：这样处理，我们并没有在 u 上修改，而是在 u 的子节点 v 上修改（当 T_v&lt;M 时）。修改节点数记录在 cnt_u 里。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，这里有一个问题：为什么我们只在 v 上修改，而 u 上没有修改？因为 u 是当前节点，在 u 上修改并不影响 u 的父节点？而且，我们返回的是从 u 到叶子的路径成本（包括 u 的成本），所以 u 的成本是原始成本（不会被增加）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>那么，最后根节点 0 返回的 cnt_0 就是答案？不对，因为我们并没有考虑根节点 0 本身。按照上面的逻辑，根节点 0 也会被处理：它可能有多个子节点，然后我们将它的子节点中 T_v 小于 M 的那些都修改一次（在子节点上增加），然后 0 返回的 T_0 = cost[0] + M，修改节点数包括所有子树中修改的节点数以及在 0 的子节点上修改的次数（如果有）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，根节点 0 本身没有父节点，所以不存在父节点要求提升的情况，所以整个树调整完成。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>验证示例 1：</span></span>
<span class="line"><span>树：0-1, 0-2, cost = [2,1,3]</span></span>
<span class="line"><span>节点 0：有两个子节点 1 和 2。</span></span>
<span class="line"><span>节点 1：叶子，返回 T1 = cost[1]=1, cnt1=0。</span></span>
<span class="line"><span>节点 2：叶子，返回 T2 = cost[2]=3, cnt2=0。</span></span>
<span class="line"><span>然后，0 节点： M = max(1,3)=3.</span></span>
<span class="line"><span>对于子节点 1：T1=1&lt;3 -&gt; 需要修改一次（在节点 1 上增加 2，使其提升到 3），修改节点数+1=1。</span></span>
<span class="line"><span>对于子节点 2：T2=3，不需要修改。</span></span>
<span class="line"><span>所以总修改节点数 = 0（子树 1 的 0+子树 2 的 0）+1（在节点 1 新增的修改）=1。</span></span>
<span class="line"><span>然后 T0 = cost[0] + M = 2+3=5.</span></span>
<span class="line"><span>返回 1，正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例 2：</span></span>
<span class="line"><span>树：0-1-2, cost=[5,1,4]</span></span>
<span class="line"><span>节点 2：叶子 -&gt; (4,0)</span></span>
<span class="line"><span>节点 1：有一个子节点 2 -&gt; 得到 T2=4, cnt=0；然后 M=4；子节点 2 不需要提升（因为 4==4）；然后 T1 = cost[1]+4=1+4=5, cnt1=0（因为不需要新增修改）</span></span>
<span class="line"><span>节点 0：有一个子节点 1 -&gt; 得到 T1=5, cnt=0；然后 M=5；子节点 1 的 T1=5（等于 M），不需要新增修改；所以总修改节点数=0；然后 T0=cost[0]+5=5+5=10。</span></span>
<span class="line"><span>返回 0，正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例 3：</span></span>
<span class="line"><span>树：5 个节点，edges = [[0,4],[0,1],[1,2],[1,3]] -&gt; 结构：0-4, 0-1, 1-2, 1-3; cost=[3,4,1,1,7]</span></span>
<span class="line"><span>节点 4：叶子 -&gt; T4=7,0</span></span>
<span class="line"><span>节点 2：叶子 -&gt; T2=1,0</span></span>
<span class="line"><span>节点 3：叶子 -&gt; T3=1,0</span></span>
<span class="line"><span>节点 1：两个子节点 2,3。</span></span>
<span class="line"><span>M = max(1,1)=1</span></span>
<span class="line"><span>对于 2 和 3，都不需要修改（因为 1==1）？不对，它们都小于 1？不对，它们是 1。所以不需要修改。</span></span>
<span class="line"><span>然后 T1 = cost[1] + 1 = 4+1=5, cnt1=0</span></span>
<span class="line"><span>节点 0：两个子节点 4 和 1。</span></span>
<span class="line"><span>T4=7, T1=5 -&gt; M=7</span></span>
<span class="line"><span>子节点 1：T1=5&lt;7 -&gt; 需要修改一次（在节点 1 上增加 2）</span></span>
<span class="line"><span>所以修改节点数 = (节点 4 的 cnt=0) + (节点 1 的 cnt=0) + 1（因为节点 1 需要提升）=1</span></span>
<span class="line"><span>T0 = cost[0] + 7 = 3+7=10</span></span>
<span class="line"><span>返回 1，正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例 4：</span></span>
<span class="line"><span>输入：n=4, edges=[[0,1],[0,2],[0,3]], cost=[10,12,7,13]</span></span>
<span class="line"><span>节点 1：叶子 -&gt; (12,0) [注意：这里节点 1 的 cost 是 12，所以 T1=12]</span></span>
<span class="line"><span>节点 2：叶子 -&gt; (7,0)</span></span>
<span class="line"><span>节点 3：叶子 -&gt; (13,0)</span></span>
<span class="line"><span>节点 0：三个子节点 1,2,3 -&gt; M = max(12,7,13)=13</span></span>
<span class="line"><span>然后检查：节点 1:12&lt;13 -&gt; 需要修改，修改节点数+1</span></span>
<span class="line"><span>节点 2:7&lt;13 -&gt; 需要修改，修改节点数+1</span></span>
<span class="line"><span>节点 3:13 -&gt; 不需要</span></span>
<span class="line"><span>总修改节点数=0+0+0 + 2 = 2</span></span>
<span class="line"><span>T0 = 10+13=23</span></span>
<span class="line"><span>返回 2，正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例 5 和示例 4 相同，输出 2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例 6：</span></span>
<span class="line"><span>输入：n=5, edges=[[0,1],[1,2],[0,3],[3,4]], cost=[2,22,3,4,21]</span></span>
<span class="line"><span>节点 2：叶子 -&gt; (3,0)</span></span>
<span class="line"><span>节点 4：叶子 -&gt; (21,0)</span></span>
<span class="line"><span>节点 1：一个子节点 2 -&gt; T1 = 22 + max{3}=22+3? 不对，注意：节点 1 到叶子的路径：从 1 出发，经过 2，所以 T1 = cost[1] + T2 ? 不对。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们的递归定义：对于节点 1，它是中间节点，有一个子节点 2。那么它的处理：</span></span>
<span class="line"><span>先得到子节点 2 的 T2=3（因为节点 2 到叶子（只有自己）的路径成本=3，注意节点 2 的 cost[2]=3，所以叶子节点 2 就是 3？不对，叶子节点 2 的路径：从 2 到叶子（就是它自己）的路径成本是 3（即节点 2 本身的成本）？不对，我们的定义是从当前节点到叶子的路径成本（当前节点本身也包括在内？）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意我们定义的 T_u：对于节点 u，返回的是从 u 到叶子的路径成本（在调整后，所有路径相等），这个路径成本包括 u 本身的成本。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以节点 2：T2 = 3（路径：2-&gt; 叶子，只有 2）。</span></span>
<span class="line"><span>节点 1：有一个子节点 2，那么它的 T1 = cost[1] + M，其中 M 是子节点的 T_v 的最大值（这里 M=3），所以 T1=22+3=25? 但是原始路径成本：22（节点 1）+3（节点 2）=25，所以不需要额外修改（因为子节点 2 的 T2=3，小于 3 的最大值就是 3，所以 M=3，而 T2=3==M，所以不需要在节点 2 上增加）。因此，节点 1 返回(T1=25, cnt1=0)。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>节点 4：叶子节点，T4=21? 不对，节点 4 的 cost=21，所以 T4=21。</span></span>
<span class="line"><span>节点 3：有一个子节点 4，所以 T3 = cost[3] + max{ T4 } = 4+21=25，且不需要修改（因为 T4=21==M（21）），所以 cnt3=0。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>节点 0：两个子节点 1 和 3，T1=25，T3=25 -&gt; M=25。</span></span>
<span class="line"><span>T1=25，T3=25，都等于 25，所以不需要新增修改。</span></span>
<span class="line"><span>cnt0 = cnt1 + cnt3 + 0 = 0</span></span>
<span class="line"><span>T0 = cost[0] + M = 2 + 25 = 27.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以修改节点数为 0，正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意节点 0 的另一个子节点？还有节点 3，以及节点 1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>树的结构：0-1-2，0-3-4，所以 0 有两个子节点 1 和 3。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以示例 6 正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们的递归函数中，对于每个节点 u，我们只考虑它的子节点（直接子节点）？注意：我们构建树的时候，我们需要把边存储为无向图，然后通过 parent 来避免回环。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另外，注意：在递归过程中，T_u 的计算：T_u = cost[u] + M，其中 M 是子节点的 T_v 的最大值？然后如果某个子节点的 T_v 小于 M，我们就在该子节点 v 上增加，从而将该分支提升到 M。然后所有分支都变成 M，所以整体就是 cost[u]+M。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，这里有一个问题：我们并不改变 u 的成本，所以 u 的成本是固定的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，现在我们可以编写代码：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>步骤：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.  构建无向图。</span></span>
<span class="line"><span>2.  从根 0 开始 DFS，注意需要记录父节点避免循环。</span></span>
<span class="line"><span>3.  对于当前节点 u：</span></span>
<span class="line"><span>    if 是叶子节点（即除了父节点外没有其他邻居）-&gt; 返回 (cost[u], 0)</span></span>
<span class="line"><span>    else：</span></span>
<span class="line"><span>    初始化：</span></span>
<span class="line"><span>    long max = 0; // 记录子节点中 T_v 的最大值</span></span>
<span class="line"><span>    int cnt = 0; // 累加子树中的修改节点数（包括在子节点的操作中修改的，以及接下来可能新增的修改节点数）</span></span>
<span class="line"><span>    遍历所有子节点 v（不是父节点）：</span></span>
<span class="line"><span>    (T_v, cnt_v) = dfs(v, u)</span></span>
<span class="line"><span>    cnt += cnt_v; // 先累加上子树的修改节点数</span></span>
<span class="line"><span>    if (T_v &gt; max) max = T_v;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          然后，再次遍历所有子节点v（不是父节点）：</span></span>
<span class="line"><span>              if (T_v &lt; max) {</span></span>
<span class="line"><span>                  cnt++;   // 在v上增加，修改节点数+1</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          然后 T_u = cost[u] + max;</span></span>
<span class="line"><span>          返回 (T_u, cnt)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意：这里我们两次遍历子节点，而且我们 DFS 的递归已经计算了所有子节点的状态。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，这种写法对于节点 0，我们可能还需要考虑根节点 0 是否被修改？按照算法，我们并没有修改 0，所以 0 不会被修改。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们还需要注意：根节点 0 可能会被修改吗？在根节点 0 的处理中，我们只会在 0 的子节点上修改（如果它们需要提升），而不会在 0 上修改。但我们在算法中，并没有在 0 上修改。所以根节点 0 不会被修改。这没问题，因为我们的修改只发生在非根节点（除了 0 的其他节点）。但是题目要求返回的是需要增加成本的节点数的最小值，不管是不是根节点。那么如果我们在根节点 0 上增加，是否能减少修改节点数？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>考虑：如果我们在根节点 0 上增加，那么我们可以让所有分支整体提升一个值。但是，这并不能消除分支之间的差异（因为分支之间需要不同的提升量）。所以我们在根节点 0 上增加并不能减少修改节点数（因为它只能整体提升，不能解决差异）。因此，根节点 0 的修改是多余的：它只能让整体值变大，但是分支之间的差异仍然需要通过在分支上修改来解决。所以根节点 0 上修改不会减少修改节点数，所以我们不需要在根节点 0 上修改。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，算法正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意：我们可能会在非叶子节点上修改（即子节点需要提升时，我们在 v 上增加），那么同一个节点可能会被多次修改吗？不会，因为我们只在 v 上增加一次（将其分支整体提升），而且每个节点只在它作为子节点（在父节点处理时）时才可能被要求提升（但是，一个节点只会被一个父节点处理，因为树的结构）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意：我们在处理 u 时，会判断 v 是否需要提升（v 的 T_v&lt;M，那么我们在 v 上增加）。然后 v 的成本被增加了（从而影响到 v 的子树中的所有路径），但是我们并不在 DFS(v,u)的过程中修改 v 的成本，而是在 v 的父节点 u 处理时，将 v 标记为需要修改（并增加修改次数）。这相当于我们在回溯到 u 时，才决定在 v 上增加。而 v 返回的 T_v 是在没有增加的情况下（即原始分支的最大值），但之后我们会将 v 的整个分支提升到 M（实际上相当于增加了 M - T_v，从而使得该分支的路径成本变成 M）。所以，在返回给 u 的父节点时，我们的 T_u 计算中，我们假设每个分支都已经提升到 M 了。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，代码实现中，我们不需要实际修改 cost 数组，我们只需要在计算过程中使用调整后的值（即对于 v 分支，我们将其视为 T_v 已经提升到 M，所以 u 计算时用 M）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，在 DFS(v,u)时，我们返回的是该分支的原始最大值 T_v（即没有提升前的值），然后我们后来才提升它。这样是合理的，因为提升操作是在回溯到 u 时才决定的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>代码实现：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：由于节点数最多 10^5，所以递归深度可能会栈溢出？我们可以用栈或者迭代 DFS，但通常递归 DFS 是可以的（JVM 默认栈大小可能不够，但题目没有特别说明，我们先写递归，并注意避免深度递归问题？在 Java 中我们可以用非递归 DFS，但这里先写递归）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>步骤： 1. 构建图：List&lt;List&lt;Integer&gt;&gt; graph = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>for(int i=0;i&lt;n;i++) graph.add(new ArrayList&lt;&gt;());</span></span>
<span class="line"><span>for(int[] edge:edges) {</span></span>
<span class="line"><span>int u = edge[0], v = edge[1];</span></span>
<span class="line"><span>graph.get(u).add(v);</span></span>
<span class="line"><span>graph.get(v).add(u);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      2. 全局变量：cost数组。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      3. DFS函数：输入当前节点u和父节点parent，返回一个long[]，其中long[0]表示T_u，long[1]表示修改节点数（由于节点数最大10^5，修改节点数不会超过10^5，所以用int即可，但返回类型用long[2]？或者我们用对象？这里为了方便，用long[2]：索引0是T_u（long，因为cost[i]最大10^9，路径可能有多个节点累加，所以用long），索引1是cnt（int，但我们放在long中也可以）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      4. DFS(u, parent)：</span></span>
<span class="line"><span>            if (u是叶子节点) {</span></span>
<span class="line"><span>                // 叶子节点：除了父节点没有其他邻居</span></span>
<span class="line"><span>                if (graph.get(u).size()==0 || (graph.get(u).size()==1 \\u0026\\u0026 parent != -1)) {</span></span>
<span class="line"><span>                    return new long[] {cost[u], 0};</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                // 否则，即使有子节点，但我们在有父节点的情况下，只需要考虑非父节点的邻居</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            long maxChild = 0;  // 记录子节点的T_v的最大值（初始化为0？但是路径成本至少1，但叶子节点返回的T_u=cost[u]&gt;=1，所以初始化为0安全吗？因为我们要取最大值，所以初始化为最小（0））</span></span>
<span class="line"><span>            long totalCnt = 0;   // 所有子节点v的cnt_v之和（整型，但这里用long）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 遍历u的邻居</span></span>
<span class="line"><span>            List&lt;Long&gt; childVals = new ArrayList&lt;&gt;(); // 保存每个子节点返回的T_v，用于下一步判断是否小于最大值</span></span>
<span class="line"><span>            for (int v: graph.get(u)) {</span></span>
<span class="line"><span>                if (v == parent) continue;</span></span>
<span class="line"><span>                long[] res = dfs(v, u);</span></span>
<span class="line"><span>                long tVal = res[0];</span></span>
<span class="line"><span>                long cntVal = res[1];</span></span>
<span class="line"><span>                childVals.add(tVal);</span></span>
<span class="line"><span>                totalCnt += cntVal;</span></span>
<span class="line"><span>                if (tVal &gt; maxChild) maxChild = tVal;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 注意：有可能没有任何子节点？但我们已经跳过父节点了，如果非父节点邻居数为0，则叶子节点情况已经处理。所以这里childVals不会是空。</span></span>
<span class="line"><span>            // 但是，如果u只有一个父节点邻居（即叶子节点），我们上面已经处理了。所以这里非叶子节点一定有至少一个子节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 然后，遍历childVals：</span></span>
<span class="line"><span>            for (long val : childVals) {</span></span>
<span class="line"><span>                if (val &lt; maxChild) {</span></span>
<span class="line"><span>                    totalCnt++;   // 对于每个小于最大值的子节点，我们需要在对应的v上增加（修改节点数+1）</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            long T_u = cost[u] + maxChild;</span></span>
<span class="line"><span>            return new long[] {T_u, totalCnt};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      5. 调用：从根节点0开始，parent=-1</span></span>
<span class="line"><span>          long[] res = dfs(0, -1);</span></span>
<span class="line"><span>          return (int) res[1];   // 返回修改节点数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：叶子节点的判断？在遍历邻居时，如果除了父节点没有其他邻居，则为叶子节点。所以我们在循环邻居之前就可以判断？但是为了统一，我们可以在循环邻居前，初始化 childVals 和 maxChild 等，然后循环。如果循环中没有任何子节点（即所有邻居都是父节点），那么 childVals 为空。此时，我们就应该返回叶子节点的情况。但是我们在进入 DFS 时，如果遇到叶子节点（只有一个父节点），我们可以在循环后判断：if (childVals.size()==0) -&gt; 叶子节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以修改 DFS：</span></span>
<span class="line"><span>long totalCnt = 0;</span></span>
<span class="line"><span>List&lt;Long&gt; childVals = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>long maxChild = 0; // 初始化为 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        for (int v: graph.get(u)) {</span></span>
<span class="line"><span>            if (v == parent) continue;</span></span>
<span class="line"><span>            long[] childRes = dfs(v, u);</span></span>
<span class="line"><span>            long tVal = childRes[0];</span></span>
<span class="line"><span>            long cntVal = childRes[1];</span></span>
<span class="line"><span>            childVals.add(tVal);</span></span>
<span class="line"><span>            totalCnt += cntVal;</span></span>
<span class="line"><span>            if (tVal &gt; maxChild) maxChild = tVal;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (childVals.isEmpty()) {</span></span>
<span class="line"><span>            // 叶子节点</span></span>
<span class="line"><span>            return new long[] { (long)cost[u], 0 };</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 否则，非叶子节点</span></span>
<span class="line"><span>        for (long val : childVals) {</span></span>
<span class="line"><span>            if (val &lt; maxChild) {</span></span>
<span class="line"><span>                totalCnt++;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        long T_u = (long)cost[u] + maxChild;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return new long[] { T_u, totalCnt };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，这样对于叶子节点，返回的是(cost[u],0)。而其他节点，则按非叶子节点处理。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：maxChild 的初始化：如果一开始为 0，那么当所有子节点的 T_v 都是 0（不可能）？所以初始化为 0 是安全的，因为 cost[u]&gt;=1，所以子节点的 T_v 至少为 1？但是，叶子节点已经返回，非叶子节点的子节点的 T_v 至少是叶子节点的 cost（&gt;=1），所以初始化为 0 没问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，考虑极端情况：树是一条链，那么每个非叶子节点只有一个子节点。那么不会增加任何修改节点数（因为只有一个子节点，所以 maxChild 就是唯一的子节点的 T_v，不会小于它自己）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>测试：一条链 [0-1-2]，cost=[2,1,3]</span></span>
<span class="line"><span>节点 2：叶子 -&gt; (3,0)</span></span>
<span class="line"><span>节点 1：子节点 2 -&gt; maxChild=3, totalCnt=0; 然后检查：3==3，所以不增加修改；然后 T1=1+3=4，返回(4,0)</span></span>
<span class="line"><span>节点 0：子节点 1 -&gt; maxChild=4, totalCnt=0; 检查：4==4，不增加；T0=2+4=6，返回(6,0)</span></span>
<span class="line"><span>修改节点数为 0？但是实际需要修改吗？</span></span>
<span class="line"><span>路径 0-&gt;1-&gt;2：2+1+3=6</span></span>
<span class="line"><span>只有一条路径，所以不需要修改，正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，为什么示例 1 中 0 有两个子节点？我们处理 0 时，子节点 1 返回 1，子节点 2 返回 3，然后我们让子节点 1 提升到 3（在 1 上增加 2），所以 0 返回的 T0=2+3=5，修改节点数 1。正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以我们的算法可以处理链的情况。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们需要注意：long 的溢出问题？cost[i]最大 10^9，节点数最多 10^5，所以路径总成本最大为 10^5 \\* 10^9 = 10^14，在 long 范围内（约 9e18）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>编写代码，注意：图可能有多个邻居，用邻接表。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，递归深度：树为链状时，深度 10^5，在 Java 中可能栈溢出？我们可以用 BFS 或非递归 DFS？或者用栈模拟递归。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但题目允许 10^5 节点，我们可以尝试优化递归深度，或者使用迭代 DFS（栈）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这里，我们使用迭代 DFS（后序遍历）来避免递归深度问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>迭代 DFS（后序遍历）步骤： 1. 构建树（无向图转有向树？）：从根 0 开始，我们可以构建一个树结构（每个节点只连接子节点，不连父节点） 2. 用栈：我们需要记录每个节点处理的阶段（例如，当节点第一次入栈时，我们访问所有子节点，并压入栈；然后当所有子节点处理完再处理该节点）。 3. 我们也可以先做一次 BFS（或者 DFS）得到每个节点的父节点和子节点列表。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>步骤：</span></span>
<span class="line"><span>为了简化，我们先构建树（有向）：用邻接表（只包含子节点）。</span></span>
<span class="line"><span>首先，用无向图构建，然后从根 0 开始 BFS，得到每个节点的父节点，并且构建一个只包含子节点的树（childList[u] = 所有非父节点的邻居）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      然后，我们进行后序遍历：从根开始，维护一个栈，栈中元素为节点u，以及当前访问的子节点索引（或者标记已经访问的子节点个数）。</span></span>
<span class="line"><span>        或者：我们可以先计算每个节点的子节点列表，然后按后续遍历顺序压栈：先将根节点压栈，然后当节点出栈时，如果它的所有子节点都已经计算完毕，我们就计算它；否则将它的子节点压栈（并标记该节点还需要再次入栈）？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      另一种方法：逆后续遍历（从叶子到根）。我们可以用队列（拓扑排序），但是树没有环，我们可以用队列处理叶子节点（类似层序遍历的逆序？）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      这里使用：先进行BFS得到拓扑序（从根到叶子），然后逆序处理节点（从叶子到根）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      具体：</span></span>
<span class="line"><span>          1. 构建树（得到每个节点的子节点列表）</span></span>
<span class="line"><span>          2. 计算入度：实际上，树中非根节点的入度都是1（但这里我们按有向树，根节点入度0，子节点入度1）。我们不需要入度，只需要一个顺序：从叶子到根。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          我们可以用队列，初始化：将所有叶子节点（即子节点列表为空的节点）加入队列（实际上，叶子节点就是度为1的节点？不，根节点如果没有子节点就是叶子，但本题根0一定有子节点？）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          实际上，我们可以构建一个数组deg表示节点的度（在树中，就是邻接表的大小），但是我们已经构建了有向树（每个节点知道子节点，不知道父节点），所以叶子节点就是没有子节点的节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          因此，我们使用：</span></span>
<span class="line"><span>              初始化：将没有子节点的节点加入队列（叶子节点）。同时，我们维护一个数组：inDegrees（实际上是记录每个节点还有几个子节点未处理？不，这里我们只需要知道节点已经处理好了）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          但更简单的：我们逆序处理节点（从叶子到根）。我们可以用队列进行拓扑排序（但是树没有环）。我们维护一个队列，首先将叶子节点入队。然后处理完一个节点后，将其出队，然后将该节点的父节点的出度数减一（但这里我们没有存储父节点？）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          所以我们需要先构建一个父节点关系：parent数组。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          步骤：</span></span>
<span class="line"><span>              先构建无向图。</span></span>
<span class="line"><span>              用BFS（从0开始）记录每个节点的父节点，并且得到每个节点的子节点列表。</span></span>
<span class="line"><span>              然后，我们构建一个队列（用于拓扑排序），一个数组degree（表示每个节点的子节点个数（即子节点列表的大小）），另外，每个节点需要记录它的父节点（用于更新）。</span></span>
<span class="line"><span>              初始化：将子节点个数为0的节点加入队列（叶子节点）。</span></span>
<span class="line"><span>              然后，用一个数组保存每个节点需要传递的信息：一个long表示T_u，一个long表示cnt_u。</span></span>
<span class="line"><span>              然后用一个数组等待处理：用队列保存节点（从叶子节点开始）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          算法：</span></span>
<span class="line"><span>              // 预先存储父节点和子节点列表</span></span>
<span class="line"><span>              parent[0] = -1;</span></span>
<span class="line"><span>              BFS：用一个队列，从0开始，记录每个节点的父节点和子节点列表。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>              // 初始化：</span></span>
<span class="line"><span>              for (int i=0; i&lt;n; i++) {</span></span>
<span class="line"><span>                  childCount[i] = childList[i].size(); // 孩子个数</span></span>
<span class="line"><span>                  if (childCount[i] == 0) {</span></span>
<span class="line"><span>                      // 叶子节点</span></span>
<span class="line"><span>                      queue.offer(i);</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>              // 初始化传递数组：T[i] 和 cnt[i]</span></span>
<span class="line"><span>              long[] T = new long[n];</span></span>
<span class="line"><span>              long[] cnt = new long[n];   // 修改节点数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>              // 初始化叶子节点：</span></span>
<span class="line"><span>              // 对于叶子节点i：T[i] = cost[i]; cnt[i]=0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>              while (!queue.isEmpty()) {</span></span>
<span class="line"><span>                  int u = queue.poll();</span></span>
<span class="line"><span>                  // 如果是根节点0，且已经处理了所有子节点，那么就不需要再入队了？但是我们处理节点u后，它的父节点会减少一个子节点计数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                  // 设置叶子节点：如果u是叶子节点，则T[u] = cost[u]，cnt[u]=0 （但后面非叶子节点会根据子节点计算）</span></span>
<span class="line"><span>                  // 但是叶子节点我们直接设置：T[u]=cost[u], cnt[u]=0  （已经在入队时初始化了？不，我们在入队后处理）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                  // 处理u：如果u不是叶子节点，我们需要计算（但这里只有叶子节点才会入队？然后非叶子节点在子节点处理完后入队）</span></span>
<span class="line"><span>                  // 但我们的队列中包括所有出度为0的节点（叶子节点），以及处理完子节点后出度变0的节点（非叶子节点）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                  // 所以，我们不需要区分，统一处理：首先，u已经处理了所有子节点（即childList[u]中的每个子节点都已经计算出T和cnt）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                  // 那么，我们如何得到u的子节点信息？我们已经构建了子节点列表childList[u]，但是我们在处理u之前，需要知道每个子节点的T和cnt。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                  // 实际上，我们在处理u时，我们并不知道子节点的信息？所以需要存储。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                  所以，我们修改：我们在每次处理一个节点u时，它的子节点已经处理完毕（因为我们从叶子节点开始）。我们可以在队列中存储节点u，并且确保当u被处理时，所有子节点都已经处理完。这样，我们就可以用之前存储的T和cnt数组（从子节点那里得到值）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                  因此，我们不需要将叶子节点单独初始化？我们可以：</span></span>
<span class="line"><span>                        初始化：T[u] = 0; cnt[u] = 0;  对于所有节点，然后叶子节点会被处理。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                  然后，对于u，我们收集它所有子节点的信息：</span></span>
<span class="line"><span>                      maxChild = 0</span></span>
<span class="line"><span>                      totalCnt = 0   # u的所有子节点的cnt总和</span></span>
<span class="line"><span>                      然后，遍历每个子节点v：</span></span>
<span class="line"><span>                          T[u] = ?</span></span>
<span class="line"><span>                      ... 和递归类似。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                  但是，我们如何收集子节点的信息？在T和cnt数组中保存。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>              具体步骤：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                  1. 构建有向树：childList 和 parent数组。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                  2. 初始化一个出度数组：outDegree，大小为n，初始为每个节点的子节点个数（即childList[i].size()）。注意根节点0没有父节点，所以它的子节点个数就是graph[0].size()。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                  3. 初始化一个队列（存储所有出度为0的节点（叶子节点）），加入这些节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                  4. 初始化数组：</span></span>
<span class="line"><span>                         long[] T = new long[n];   // T[i]表示以i为根的子树的T_i（路径成本）</span></span>
<span class="line"><span>                         long[] cnt = new long[n]; // 修改节点数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                  5. 先设置所有叶子节点：当叶子节点被处理时，我们设置：</span></span>
<span class="line"><span>                         T[i] = cost[i];</span></span>
<span class="line"><span>                         cnt[i] = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                  6. 然后，开始处理队列：</span></span>
<span class="line"><span>                         while (!queue.isEmpty()) {</span></span>
<span class="line"><span>                             int u = queue.poll();</span></span>
<span class="line"><span>                             // 注意：u可能是叶子节点，也可能是非叶子节点（但此时它的子节点都已处理完）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                             // 我们计算u的T和cnt：</span></span>
<span class="line"><span>                             // 先得到u的子节点（childList[u]）</span></span>
<span class="line"><span>                             if (childList[u].size()&gt;0) {</span></span>
<span class="line"><span>                                 // 非叶子节点</span></span>
<span class="line"><span>                                 long maxChild = 0;</span></span>
<span class="line"><span>                                 long totalCntU = 0;</span></span>
<span class="line"><span>                                 // 遍历每个子节点v：</span></span>
<span class="line"><span>                                 for (int v : childList[u]) {</span></span>
<span class="line"><span>                                     totalCntU += cnt[v];</span></span>
<span class="line"><span>                                     if (T[v] &gt; maxChild) maxChild = T[v];</span></span>
<span class="line"><span>                                 }</span></span>
<span class="line"><span>                                 // 再遍历每个子节点v：</span></span>
<span class="line"><span>                                 for (int v : childList[u]) {</span></span>
<span class="line"><span>                                     if (T[v] &lt; maxChild) {</span></span>
<span class="line"><span>                                         totalCntU++;</span></span>
<span class="line"><span>                                     }</span></span>
<span class="line"><span>                                 }</span></span>
<span class="line"><span>                                 T[u] = (long)cost[u] + maxChild;</span></span>
<span class="line"><span>                                 cnt[u] = totalCntU;</span></span>
<span class="line"><span>                             } else {</span></span>
<span class="line"><span>                                 // 叶子节点：这步在入队前已经初始化？或者我们统一处理：入队时并不初始化，而是在这里处理？</span></span>
<span class="line"><span>                                 // 由于叶子节点没有子节点，所以上面的代码不会执行？所以我们不会设置T[u]和cnt[u]？</span></span>
<span class="line"><span>                                 // 因此，我们需要在入队时就设置好叶子节点的值？</span></span>
<span class="line"><span>                                 // 我们可以在叶子节点入队时设置：</span></span>
<span class="line"><span>                                 // 但是，为了避免重复处理，我们在入队时并不设置，而是在出队时处理：如果是叶子节点，我们在这里设置。</span></span>
<span class="line"><span>                                 T[u] = cost[u];</span></span>
<span class="line"><span>                                 cnt[u] = 0;</span></span>
<span class="line"><span>                             }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                             // 然后，如果u不是根节点（有父节点），则更新父节点的出度（将父节点的出度减一），如果父节点出度变成0，则入队。</span></span>
<span class="line"><span>                             int p = parent[u];</span></span>
<span class="line"><span>                             if (p != -1) {</span></span>
<span class="line"><span>                                 outDegree[p]--;</span></span>
<span class="line"><span>                                 if (outDegree[p] == 0) {</span></span>
<span class="line"><span>                                     queue.offer(p);</span></span>
<span class="line"><span>                                 }</span></span>
<span class="line"><span>                             }</span></span>
<span class="line"><span>                         }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                  7. 然后，根节点0会在最后被处理，然后返回 cnt[0]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，这样处理，非叶子节点会跳过上面的 else 分支？因为非叶子节点一定不是叶子节点（childList[u].size()&gt;0），所以执行 if 代码块；叶子节点执行 else 代码块。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们也可以在出队时统一用非叶子节点的方法：如果 childList[u].size()&gt;0，就用非叶子节点的方法计算；否则用叶子节点的方法（但实际上我们可以在非叶子节点的方法中处理叶子节点？不行，因为叶子节点没有子节点，所以第一个循环不会执行）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，我们分开处理。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意：可能存在节点 u 不是叶子节点（即 childList[u]非空），但在队列中时，它已经被处理完了所有子节点？是的，所以它就可以计算了。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>步骤：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>初始化：</span></span>
<span class="line"><span>用邻接表构建无向图。</span></span>
<span class="line"><span>初始化 parent 数组（长度 n，初始化为-1），outDegree 数组（长度 n，初始 0），childList 数组（长度为 n 的列表数组）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     从根节点0开始BFS：</span></span>
<span class="line"><span>         Queue&lt;Integer&gt; q = new LinkedList&lt;&gt;();</span></span>
<span class="line"><span>         q.offer(0);</span></span>
<span class="line"><span>         parent[0] = -1;</span></span>
<span class="line"><span>         while (!q.isEmpty()) {</span></span>
<span class="line"><span>             int u = q.poll();</span></span>
<span class="line"><span>             for (int v: graph.get(u)) {</span></span>
<span class="line"><span>                 if (v == parent[u]) continue;</span></span>
<span class="line"><span>                 parent[v] = u;</span></span>
<span class="line"><span>                 // u是v的父节点，那么v是u的子节点，将v加入u的子节点列表</span></span>
<span class="line"><span>                 childList[u].add(v);</span></span>
<span class="line"><span>                 outDegree[u]++;   // 注意：outDegree[u]就是我们说的u的子节点个数</span></span>
<span class="line"><span>                 q.offer(v);</span></span>
<span class="line"><span>             }</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     然后，初始化一个队列（比如leafQueue）用于拓扑排序：</span></span>
<span class="line"><span>         Queue&lt;Integer&gt; topoQueue = new LinkedList&lt;&gt;();</span></span>
<span class="line"><span>         for (int i=0; i&lt;n; i++) {</span></span>
<span class="line"><span>             if (outDegree[i] == 0) {   // 叶子节点</span></span>
<span class="line"><span>                 topoQueue.offer(i);</span></span>
<span class="line"><span>             }</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     初始化T: long[] T = new long[n];</span></span>
<span class="line"><span>             long[] cntArr = new long[n];  // 用于记录每个节点的修改节点数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     处理队列：</span></span>
<span class="line"><span>         while (!topoQueue.isEmpty()) {</span></span>
<span class="line"><span>             int u = topoQueue.poll();</span></span>
<span class="line"><span>             if (childList[u].isEmpty()) {</span></span>
<span class="line"><span>                 // 叶子节点</span></span>
<span class="line"><span>                 T[u] = cost[u];</span></span>
<span class="line"><span>                 cntArr[u] = 0;</span></span>
<span class="line"><span>             } else {</span></span>
<span class="line"><span>                 long maxChild = 0;</span></span>
<span class="line"><span>                 long totalCnt = 0;</span></span>
<span class="line"><span>                 for (int v : childList[u]) {</span></span>
<span class="line"><span>                     totalCnt += cntArr[v];   // 累加子树中的修改节点数</span></span>
<span class="line"><span>                     if (T[v] &gt; maxChild) {</span></span>
<span class="line"><span>                         maxChild = T[v];</span></span>
<span class="line"><span>                     }</span></span>
<span class="line"><span>                 }</span></span>
<span class="line"><span>                 // 再遍历子节点</span></span>
<span class="line"><span>                 for (int v : childList[u]) {</span></span>
<span class="line"><span>                     if (T[v] &lt; maxChild) {</span></span>
<span class="line"><span>                         totalCnt++;   // 在子节点v上增加一次</span></span>
<span class="line"><span>                     }</span></span>
<span class="line"><span>                 }</span></span>
<span class="line"><span>                 T[u] = (long)cost[u] + maxChild;</span></span>
<span class="line"><span>                 cntArr[u] = totalCnt;</span></span>
<span class="line"><span>             }</span></span>
<span class="line"><span>             // 然后，如果u不是根节点，则更新父节点</span></span>
<span class="line"><span>             int p = parent[u];</span></span>
<span class="line"><span>             if (p != -1) {</span></span>
<span class="line"><span>                 outDegree[p]--;   // u是p的一个子节点，现在处理完了，所以p的出度减1</span></span>
<span class="line"><span>                 if (outDegree[p] == 0) {</span></span>
<span class="line"><span>                     topoQueue.offer(p);</span></span>
<span class="line"><span>                 }</span></span>
<span class="line"><span>             }</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     最后，答案就是 cntArr[0]  （根节点0的修改节点数）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：根节点 0 的 parent 为-1，所以不需要更新。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意：根节点 0 的 outDegree 可能为 0 吗？不会，因为一开始 outDegree[0]等于它的子节点个数（至少一个），所以 0 会最后被处理？除非 0 没有子节点，但题目至少 2 个节点（n&gt;=2），所以 0 一定有子节点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，最后我们返回 (int)cntArr[0]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，示例 1：</span></span>
<span class="line"><span>节点 0：有两个子节点 1 和 2。</span></span>
<span class="line"><span>节点 1：叶子 -&gt; T[1]=1, cntArr[1]=0</span></span>
<span class="line"><span>节点 2：叶子 -&gt; T[2]=3, cntArr[2]=0</span></span>
<span class="line"><span>然后，节点 1 和 2 处理完后，节点 0 的子节点出度变为 0？在构建时，节点 0 的 outDegree=2（有两个子节点 1 和 2）。我们首先将叶子节点 1 和 2 加入 topoQueue。</span></span>
<span class="line"><span>处理 1：设置 T[1]=1, cntArr[1]=0; 然后更新 parent[1]即 0：将 outDegree[0]减 1，此时 outDegree[0]变成 1，所以 0 还不入队。</span></span>
<span class="line"><span>处理 2：设置 T[2]=3, cntArr[2]=0; 然后更新 parent[2]即 0：将 outDegree[0]减 1，此时 outDegree[0]变成 0，将 0 入队。</span></span>
<span class="line"><span>处理 0：收集子节点 1 和 2：maxChild=max(1,3)=3; totalCnt=0+0=0; 然后遍历 1 和 2：T[1]=1&lt;3 -&gt; totalCnt=1; T[2]=3 -&gt; 不增加。所以 totalCnt=1; T[0]=cost[0]+3=2+3=5; cntArr[0]=1.</span></span>
<span class="line"><span>返回 1.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们写迭代版本（拓扑排序）来避免递归深度问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>代码实现：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：cost 数组是整数，但 T 和计算用 long。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另外，注意：拓扑队列初始化时，我们加入所有叶子节点（即 outDegree 为 0 的节点）。在树中，所有非根节点的子节点数就是 outDegree，而根节点有初始的子节点数（不为 0），所以不会一开始加入。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，树中可能有多个叶子节点（没有子节点的节点）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>代码：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      public int minIncrease(int n, int[][] edges, int[] cost) {</span></span>
<span class="line"><span>          // 构建图</span></span>
<span class="line"><span>          List&lt;List&lt;Integer&gt;&gt; graph = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>          for (int i = 0; i &lt; n; i++) {</span></span>
<span class="line"><span>              graph.add(new ArrayList&lt;&gt;());</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          for (int[] edge : edges) {</span></span>
<span class="line"><span>              int u = edge[0], v = edge[1];</span></span>
<span class="line"><span>              graph.get(u).add(v);</span></span>
<span class="line"><span>              graph.get(v).add(u);</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          // 构建树（有向）：记录父节点和每个节点的子节点</span></span>
<span class="line"><span>          int[] parent = new int[n];</span></span>
<span class="line"><span>          List&lt;List&lt;Integer&gt;&gt; childList = new ArrayList&lt;&gt;(); // 每个节点的子节点列表</span></span>
<span class="line"><span>          for (int i = 0; i &lt; n; i++) {</span></span>
<span class="line"><span>              childList.add(new ArrayList&lt;&gt;());</span></span>
<span class="line"><span>              parent[i] = -1;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          int[] outDegree = new int[n]; // 出度：每个节点的子节点个数</span></span>
<span class="line"><span>          Queue&lt;Integer&gt; queue = new LinkedList&lt;&gt;(); // BFS用于构建树结构</span></span>
<span class="line"><span>          queue.offer(0);</span></span>
<span class="line"><span>          parent[0] = -1;</span></span>
<span class="line"><span>          while (!queue.isEmpty()) {</span></span>
<span class="line"><span>              int u = queue.poll();</span></span>
<span class="line"><span>              for (int v : graph.get(u)) {</span></span>
<span class="line"><span>                  if (v == parent[u]) continue;</span></span>
<span class="line"><span>                  parent[v] = u;</span></span>
<span class="line"><span>                  childList.get(u).add(v);</span></span>
<span class="line"><span>                  outDegree[u]++;</span></span>
<span class="line"><span>                  queue.offer(v);</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          // 初始化拓扑排序队列（叶子节点：outDegeree=0）</span></span>
<span class="line"><span>          Queue&lt;Integer&gt; topoQueue = new LinkedList&lt;&gt;();</span></span>
<span class="line"><span>          for (int i = 0; i &lt; n; i++) {</span></span>
<span class="line"><span>              if (outDegree[i] == 0) {</span></span>
<span class="line"><span>                  topoQueue.offer(i);</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          // T数组和cntArr数组</span></span>
<span class="line"><span>          long[] T = new long[n];</span></span>
<span class="line"><span>          long[] cntArr = new long[n]; // 修改节点数（用long，但实际int够，但为了统一）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          while (!topoQueue.isEmpty()) {</span></span>
<span class="line"><span>              int u = topoQueue.poll();</span></span>
<span class="line"><span>              if (childList.get(u).isEmpty()) {</span></span>
<span class="line"><span>                  T[u] = cost[u];</span></span>
<span class="line"><span>                  cntArr[u] = 0;</span></span>
<span class="line"><span>              } else {</span></span>
<span class="line"><span>                  long maxChild = 0;</span></span>
<span class="line"><span>                  long totalCnt = 0;</span></span>
<span class="line"><span>                  // 遍历u的所有子节点</span></span>
<span class="line"><span>                  for (int v : childList.get(u)) {</span></span>
<span class="line"><span>                      totalCnt += cntArr[v];   // 先累加子树中的修改节点数</span></span>
<span class="line"><span>                      if (T[v] &gt; maxChild) {</span></span>
<span class="line"><span>                          maxChild = T[v];</span></span>
<span class="line"><span>                      }</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span>                  // 再遍历子节点</span></span>
<span class="line"><span>                  for (int v : childList.get(u)) {</span></span>
<span class="line"><span>                      if (T[v] &lt; maxChild) {</span></span>
<span class="line"><span>                          totalCnt++;</span></span>
<span class="line"><span>                      }</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span>                  T[u] = (long) cost[u] + maxChild;</span></span>
<span class="line"><span>                  cntArr[u] = totalCnt;</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>              // 更新父节点</span></span>
<span class="line"><span>              int p = parent[u];</span></span>
<span class="line"><span>              if (p != -1) {</span></span>
<span class="line"><span>                  outDegree[p]--;   // u的父节点p的出度减1</span></span>
<span class="line"><span>                  if (outDegree[p] == 0) {</span></span>
<span class="line"><span>                      topoQueue.offer(p);</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          return (int) cntArr[0];</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>测试：示例 1,2,3,4,5,6。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：示例 4：n=4, cost=[10,12,7,13]</span></span>
<span class="line"><span>节点 0：子节点 1,2,3 -&gt; outDegree=3</span></span>
<span class="line"><span>节点 1：叶子 -&gt; 入队</span></span>
<span class="line"><span>节点 2：叶子 -&gt; 入队</span></span>
<span class="line"><span>节点 3：叶子 -&gt; 入队</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        处理1：T[1]=12, 然后更新0的出度：3-&gt;2 -&gt;0不入队。</span></span>
<span class="line"><span>        处理2：T[2]=7，更新0：2-&gt;1 -&gt;0不入队。</span></span>
<span class="line"><span>        处理3：T[3]=13，更新0：1-&gt;0，然后0入队。</span></span>
<span class="line"><span>        处理0：maxChild=13, totalCnt=0（因为节点1、2、3的cnt都是0）; 然后1:12&lt;13 -&gt; cnt+1; 2:7&lt;13 -&gt; cnt+1; 3：13不变。总cnt=2。T[0]=10+13=23。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        返回2，正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>运行，提交。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：可能存在一个节点有多个子节点，并且子节点的 T_v 相等的情况，不会增加修改节点数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们假设树是连通的（题目给定树）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>潜在问题：在拓扑排序中，节点的处理顺序是否保证一个节点的所有子节点都在它之前被处理？是的，因为我们只有当一个节点的所有子节点都被处理完（即出度变为 0）才会加入队列。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，这个迭代 DFS（后序的拓扑排序）是正确的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，在 Java 中，我们使用了多个队列，以及邻接表，空间复杂度 O(n)，时间 O(n)。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>提交代码。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：可能存在大输入测试用例，注意 long 的使用。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们还有一种情况：节点 u 的所有子节点的 T_v 都相等（但小于某个最大值？这种情况我们处理时不会出现，因为我们在第一个循环中已经找到最大值了。然后我们检查每个子节点，如果等于最大值就不需要增加，只有小于的需要增加。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，如果最大值是 0？不可能，因为每个叶子节点的 T_u&gt;=1（叶子节点的 cost 至少 1），所以非叶子节点的 T_u 至少是 cost[u]（&gt;=1）加上一个非负数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以安全。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>运行所有示例。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，示例 5 和示例 4 相同？我们输出 2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例 5 的输入和示例 4 相同，所以没问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例 6：我们之前分析过，输出 0，正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们写完代码。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：在构建树时，我们使用了 BFS 从 0 开始，所以没有问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们运行一下示例 1：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      n=3, edges=[[0,1],[0,2]], cost=[2,1,3]</span></span>
<span class="line"><span>      构建图：节点0: [1,2]; 节点1:[0]; 节点2:[0]</span></span>
<span class="line"><span>      BFS:</span></span>
<span class="line"><span>          0: parent[1]=0, parent[2]=0;</span></span>
<span class="line"><span>          childList[0] = [1,2]; outDegree[0]=2</span></span>
<span class="line"><span>          节点1: 孩子节点？看graph[1] -&gt; [0]，但0是父节点（因为parent[1]=0）所以跳过 -&gt; childList[1]为空 -&gt; outDegree[1]=0</span></span>
<span class="line"><span>          节点2: 同理 -&gt; childList[2]为空 -&gt; outDegree[2]=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      然后拓扑队列初始化：节点1、2入队（因为outDegree为0）。</span></span>
<span class="line"><span>      处理1：叶子 -&gt; T[1]=1, cntArr[1]=0; 然后更新父节点0：outDegree[0]从2变为1（没到0，所以0不入队）</span></span>
<span class="line"><span>      处理2：叶子 -&gt; T[2]=3, cntArr[2]=0; 更新父节点0：outDegree[0]变为0 -&gt; 0入队。</span></span>
<span class="line"><span>      处理0：子节点1,2：maxChild= max(1,3)=3; totalCnt=0+0=0; 然后遍历：1:1&lt;3 -&gt; cnt+1=1; 2:3==3 -&gt; 不增加。所以cntArr[0]=1.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     返回1，正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以代码正确。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>为了解决这个问题，我们需要确保从根节点到每个叶子节点的路径得分（即路径上所有节点的成本总和）都相等，通过增加任意数量的节点的成本（非负值），并最小化需要增加成本的节点数量。以下是解决该问题的思路和代码实现：</p><h3 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h3><ol><li><strong>问题分析</strong>：给定一棵无向树，以节点 0 为根，每个节点有一个成本值。我们需要通过增加节点成本，使得所有从根节点到叶子节点的路径总成本相等。要求最小化需要增加成本的节点数量。</li><li><strong>关键观察</strong>：在树中，我们可以通过自底向上的方式（从叶子节点到根节点）处理每个节点。对于每个节点，我们计算其所有子节点到叶子节点的路径成本，并根据这些成本调整节点成本。</li><li><strong>算法选择</strong>： <ul><li><strong>构建树结构</strong>：将无向树转换为有向树，以节点 0 为根，记录每个节点的父节点和子节点列表。</li><li><strong>拓扑排序</strong>：使用队列进行拓扑排序，从叶子节点开始处理节点，确保每个节点的子节点在处理该节点之前已经处理完毕。</li><li><strong>成本调整</strong>：对于每个非叶子节点，其所有子节点到叶子节点的路径成本必须相等。为此，我们找出子节点路径成本的最大值，并将其他子节点的路径成本提升到这个最大值（通过在对应的子节点上增加成本）。提升操作将增加需要调整成本的节点数量。</li></ul></li><li><strong>复杂度分析</strong>：时间复杂度为 O(n)，空间复杂度为 O(n)，其中 n 是节点数量。这是因为我们遍历了所有节点和边各常数次。</li></ol><h3 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现"><span>代码实现</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> java.util.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Solution</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> minIncrease</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[][] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">edges</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">cost</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 构建无向图</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">graph</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n; i++) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            graph</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;());</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">edge</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> edges) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> u</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> edge[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">], v </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> edge[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            graph</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(u).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(v);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            graph</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(v).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(u);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 构建有向树：记录父节点和子节点列表</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">parent</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[n];</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        Arrays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">fill</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(parent, </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">childList</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n; i++) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            childList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;());</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">outDegree</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[n]; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 子节点数量</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Queue</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">queue</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> LinkedList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        queue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">offer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 从根节点0开始BFS</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">queue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">isEmpty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> u</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> queue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">poll</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> v</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> graph</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(u)) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (v </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> parent[u]) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">continue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                parent[v] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> u;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                childList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(u).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(v);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                outDegree[u]++;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                queue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">offer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(v);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 初始化拓扑排序队列（叶子节点）</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Queue</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">topoQueue</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> LinkedList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n; i++) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (outDegree[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                topoQueue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">offer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(i);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // T[u]表示节点u到叶子节点的路径成本（调整后）</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        long</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">T</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> long</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[n];</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // cntArr[u]记录以u为根的子树中需要增加成本的节点数量</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        long</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">cntArr</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> long</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[n];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">topoQueue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">isEmpty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> u</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> topoQueue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">poll</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">childList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(u).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">isEmpty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                // 叶子节点：T[u] = 节点u的成本</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">                T</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> cost[u];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                cntArr[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                long</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> maxChild</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                long</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> totalCnt</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                // 遍历所有子节点，找出最大路径成本和累加子树中调整的节点数</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> v</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> childList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(u)) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    totalCnt </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> cntArr[v];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[v] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> maxChild) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                        maxChild </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> T</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[v];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                // 遍历子节点，将路径成本低于最大值的子节点提升到最大值</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> v</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> childList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(u)) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[v] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> maxChild) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                        totalCnt++; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 在子节点v上增加成本，调整节点数+1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">                T</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> cost[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> maxChild;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                cntArr[u] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> totalCnt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            // 更新父节点的出度</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> p</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> parent[u];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (p </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                outDegree[p]--;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (outDegree[p] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                    topoQueue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">offer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(p);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) cntArr[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解释" tabindex="-1"><a class="header-anchor" href="#解释"><span>解释</span></a></h3><ol><li><strong>构建树结构</strong>：首先将输入的无向树转换为以节点 0 为根的有向树，记录每个节点的父节点和子节点列表。</li><li><strong>拓扑排序</strong>：初始化队列，将所有叶子节点（没有子节点的节点）加入队列。从叶子节点开始处理，确保每个节点的子节点在处理该节点之前已经处理完毕。</li><li><strong>成本调整</strong>： <ul><li><strong>叶子节点</strong>：路径成本就是节点自身的成本。</li><li><strong>非叶子节点</strong>： <ul><li>找出所有子节点路径成本的最大值（<code>maxChild</code>）。</li><li>对于每个子节点，如果其路径成本小于<code>maxChild</code>，则在该子节点上增加成本（<code>totalCnt</code>加 1）。</li><li>节点<code>u</code>的路径成本为<code>cost[u] + maxChild</code>。</li></ul></li></ul></li><li><strong>更新父节点</strong>：处理完节点<code>u</code>后，减少其父节点的出度。如果父节点的出度变为 0（即所有子节点已处理），将父节点加入队列。</li><li><strong>返回结果</strong>：根节点<code>0</code>的<code>cntArr[0]</code>即为需要增加成本的最小节点数量。</li></ol><p>通过这种自底向上的处理，我们确保了所有从根节点到叶子节点的路径成本相等，同时最小化了需要调整成本的节点数量。</p>`,14)]))}const t=n(p,[["render",e],["__file","t3.html.vue"]]),r=JSON.parse('{"path":"/module_ai/weekly-contest-455/t3.html","title":"使树路径成本相等方法","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"USER","slug":"user","link":"#user","children":[]},{"level":2,"title":"ASSISTANT","slug":"assistant","link":"#assistant","children":[{"level":3,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":3,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[]},{"level":3,"title":"解释","slug":"解释","link":"#解释","children":[]}]}],"git":{"createdTime":1751299769000,"updatedTime":1751299769000,"contributors":[{"name":"gdut-yy","username":"gdut-yy","email":"gdut_yy@163.com","commits":1}]},"readingTime":{"minutes":63.07,"words":18921},"filePathRelative":"module_ai/weekly-contest-455/t3.md","localizedDate":"2025年7月1日"}');export{t as comp,r as data};
