import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as l}from"./app-D75trwlE.js";const p={};function e(d,s){return l(),a("div",null,s[0]||(s[0]=[i(`<h1 id="人员过河时间优化问题" tabindex="-1"><a class="header-anchor" href="#人员过河时间优化问题"><span>人员过河时间优化问题</span></a></h1><ul><li>会话记录：<a href="https://yuanbao.tencent.com/chat/naQivTmsDa/818d87fb-54ed-49e0-9643-d71de7114f65" target="_blank" rel="noopener noreferrer">https://yuanbao.tencent.com/chat/naQivTmsDa/818d87fb-54ed-49e0-9643-d71de7114f65</a></li><li>无修改 AC。</li></ul><h2 id="user" tabindex="-1"><a class="header-anchor" href="#user"><span>USER</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>给你一个整数 n，表示编号从 0 到 n - 1 的 n 个节点，以及一个 edges 列表，其中 edges[i] = [ui, vi, si, musti]：</span></span>
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
<span class="line"><span>\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="assistant" tabindex="-1"><a class="header-anchor" href="#assistant"><span>ASSISTANT</span></a></h2><details class="hint-container details"><summary>已深度思考(用时 8 分 56 秒)</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>题目分析：我们需要将 n 个人从营地通过船渡河到目的地。船最多可载 k 人。渡河时间取决于组内最大划船能力和当前阶段的倍率。</span></span>
<span class="line"><span>此外，阶段会随着渡河和返回的时间（取整后对 m 取模）而周期性变化。返回时也必须有人划船回来，同样会影响阶段。</span></span>
<span class="line"><span>由于 n&lt;=12，k&lt;=5，m&lt;=5，我们可以考虑使用状态压缩动态规划（DP）或记忆化搜索。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>状态设计：</span></span>
<span class="line"><span>我们需要记录：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 当前营地里还有哪些人（用二进制掩码 mask 表示，n 位，1 表示还在营地，0 表示已到达）</span></span>
<span class="line"><span>2. 当前阶段（一个 0 到 m-1 的整数）</span></span>
<span class="line"><span>3. 船的位置：0 表示在目的地，1 表示在营地（初始在营地，最后需要船在目的地且所有人都到）</span></span>
<span class="line"><span>   但是注意：题目中每次划船过程会改变阶段，而且划船的时间是连续的，总时间是累加的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，阶段变化与渡河和返回的时间有关（floor(d)%m），所以阶段变化依赖于实际时间（取整）。但总时间是连续值，而阶段变化是离散的（整数步），所以我们需要在状态中记录当前阶段。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>状态定义：dp[mask][stage][boat] 表示当前剩余人员状态为 mask，当前阶段为 stage，船的位置为 boat（0 表示目的地，1 表示营地）时，已经花费的最小总时间（double）。</span></span>
<span class="line"><span>由于阶段变化依赖于取整后的时间，而时间又是连续的，我们需要考虑时间对阶段变化的影响。但是，状态转移时，我们计算一次划船（渡河或返回）的时间，然后根据这个时间计算阶段前进的步数（取整后模 m），从而更新阶段。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，状态转移中，我们可能会从不同的时间到达同一个状态（mask, stage, boat），但时间不同。我们需要取最小值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，问题在于：阶段变化依赖于时间（取整），而时间本身是连续的，并且取整后的值（floor(d)）可能不同。因此，我们可能无法仅仅通过离散的阶段（0~m-1）来完全表示状态，因为阶段变化依赖于时间的具体整数部分。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意：阶段变化是 floor(d) % m，而 d 是时间（浮点数），取整后模 m。因此，阶段变化只依赖于 d 的整数部分和 m。然而，d 的整数部分可能会很大，我们不能直接记录整数部分。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，观察到：阶段变化是模 m 的，所以每次阶段变化实际上只关心（整数部分）模 m 的余数？不对。注意：floor(d)%m，其中 d 是时间，所以 floor(d)可能是很大的整数，但模 m 后结果在 0 到 m-1 之间。因此，阶段的变化步数只与 floor(d)模 m 有关。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，当我们有多个连续的划船操作时，阶段的变化是累积的。比如，先有 d1，阶段变化了 s1 = floor(d1) % m，然后又有 d2，阶段变化 s2 = floor(d2) % m，那么总阶段变化是(s1+s2) % m？不对，注意每次操作后阶段立即变化，然后下一次操作从新的阶段开始。而且，每个操作的时间 d 会取整然后模 m，得到阶段变化步数，然后阶段变为 (当前阶段 + 变化步数) % m。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，在状态转移时，我们只需要当前阶段，然后计算这次操作（渡河或返回）的时间 d，然后得到新的阶段 = (当前阶段 + floor(d)) % m。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，状态中只需要记录当前阶段（0 到 m-1），而不用记录总时间对 m 的余数之类，因为阶段变化是独立的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，总时间是一个连续累加的值，阶段变化只依赖于每次操作的时间的整数部分，与总时间无关（只与本次操作的时间有关）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，状态可以定义为：dp[mask][stage][boat] = 最小总时间（double），其中：</span></span>
<span class="line"><span>mask: 0 到(1&lt;&lt;n)-1，表示营地中剩余的人（二进制位 1 表示在营地，0 表示在目的地）</span></span>
<span class="line"><span>stage: 0 到 m-1</span></span>
<span class="line"><span>boat: 0 或 1，0 表示船在对岸（目的地），1 表示船在营地（出发地）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>初始状态：所有人都在营地，船在营地，阶段 0，总时间为 0。即 dp[(1&lt;&lt;n)-1][0][1] = 0.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>目标状态：mask=0，船在目的地（0），阶段可以任意（但我们不关心），总时间最小值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，状态转移：</span></span>
<span class="line"><span>如果船在营地（boat=1），则我们可以选择一组人渡河（从 mask 中选一个非空子集 g，大小不超过 k）。然后划船到目的地。</span></span>
<span class="line"><span>组 g 的最大划船时间为 max_time = max{time[i] for i in g}</span></span>
<span class="line"><span>渡河时间 = max_time _ mul[stage]</span></span>
<span class="line"><span>然后阶段变化 step = (int)Math.floor(max_time _ mul[stage]) % m (注意：取模 m，但因为是整数，所以取模 m 即可)</span></span>
<span class="line"><span>新阶段 = (stage + step) % m</span></span>
<span class="line"><span>新 mask = mask 去掉 g 中的人（即 mask ^ g）</span></span>
<span class="line"><span>船变为目的地（0）</span></span>
<span class="line"><span>新状态：dp[new_mask][new_stage][0] = min( dp[new_mask][new_stage][0], dp[mask][stage][1] + max_time \\* mul[stage] )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果船在目的地（boat=0），并且还有人留在营地（mask 非 0），则必须派一个人返回。注意：返回的人必须是已经到达目的地的（即 mask 中对应位为 0），但是我们当前状态 mask 记录的是营地中的人（所以目的地的人是 mask 的补集）。因此，返回的人必须是 mask 中为 0 的那些人中的一个。但是，我们如何知道哪些人已经在目的地？我们的状态 mask 表示的是营地中的人，那么已经到目的地的人就是全集减去 mask。所以返回的人 r 属于全集且不在 mask 中。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    返回时间 = time[r] * mul[stage]</span></span>
<span class="line"><span>    阶段变化 step = (int)Math.floor(time[r] * mul[stage]) % m</span></span>
<span class="line"><span>    新阶段 = (stage + step) % m</span></span>
<span class="line"><span>    新mask = 将r加入mask（因为r回到营地） -&gt; mask | (1&lt;&lt;r)</span></span>
<span class="line"><span>    船变为营地（1）</span></span>
<span class="line"><span>    新状态：dp[new_mask][new_stage][1] = min( dp[new_mask][new_stage][1], dp[mask][stage][0] + time[r] * mul[stage] )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，这里有一个关键问题：在目的地，我们只能选择已经到达的人（即不在 mask 中的人）返回。因此，我们需要从不在 mask 中的人中选择一个返回。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，状态表示中，我们只记录了 mask（营地中的人），并没有记录目的地的人有哪些。但是，我们知道所有人的总数，所以我们可以通过 mask 知道哪些人不在营地（即在目的地）。但是，我们不知道具体是哪些人？实际上，我们不需要知道每个人的时间，只需要选择一个人返回，并且我们希望总时间最小，那么我们会选择时间最小的人返回吗？不一定，因为不同的人返回，时间不同，而且还会影响阶段的变化。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，在状态转移中，当船在目的地时，我们需要枚举一个不在 mask 中的人（即已经到达的人）返回。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意：状态 mask 中 0 表示不在营地（即在目的地），所以我们可以枚举所有 i（0&lt;=i&lt;n），如果 mask 的第 i 位为 0，那么可以选择 i 返回。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，转移方程：</span></span>
<span class="line"><span>对于每个状态(mask, stage, boat)：</span></span>
<span class="line"><span>如果 boat=1：选择一组非空子集 g（g 是 mask 的子集，且 1&lt;=|g|&lt;=k），计算组内最大时间 max_time，然后计算渡河时间 d = max_time \\* mul[stage]。</span></span>
<span class="line"><span>new_mask = mask 去掉 g（mask xor g_mask） 注意：g_mask 是 g 中人的二进制或</span></span>
<span class="line"><span>new_stage = (stage + (int)Math.floor(d)) % m</span></span>
<span class="line"><span>new_boat = 0</span></span>
<span class="line"><span>dp[new_mask][new_stage][0] = min( dp[new_mask][new_stage][0], dp[mask][stage][1] + d)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    如果boat=0：并且mask !=0（即还有人没过去），那么枚举一个不在mask中的人i（即mask的第i位为0），</span></span>
<span class="line"><span>        d = time[i] * mul[stage]</span></span>
<span class="line"><span>        new_mask = mask 中加入i（mask or (1&lt;&lt;i)）</span></span>
<span class="line"><span>        new_stage = (stage + (int)Math.floor(d)) % m</span></span>
<span class="line"><span>        new_boat = 1</span></span>
<span class="line"><span>        dp[new_mask][new_stage][1] = min( dp[new_mask][new_stage][1], dp[mask][stage][0] + d)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：当船在目的地时，我们也可以选择不返回？不，题目要求：如果还有人留在营地，则必须有一人带着船返回。所以当 mask!=0 时必须返回。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们可能会问：为什么返回的人只能是一个？题目没有说返回必须一个人，但返回时船只能载人，而题目中船最多可以承载 k 人。但返回时，我们也可以多个人一起返回吗？题目规则中说的是“必须有一人带着船返回”，意思是至少一人，但没有说只能一人。注意规则原文：</span></span>
<span class="line"><span>“则必须有一人带着船返回。设返回人的索引为 r，返回所需时间为 time[r] × mul[current_stage]”</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这里说的是“一人”，所以返回时只能是一个人？但是，规则中只设了一个索引 r，并且计算时间是用 time[r]（单个人）。所以返回时只能是一个人。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，在返回时，我们只能选择一个人。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另外，在渡河时，我们可以选 1 到 k 人。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>状态数量：状态 mask 有 2^n 种，阶段有 m 种，船有 2 种，所以总状态数为 2^n _ m _ 2。n&lt;=12，所以 2^12=4096，m&lt;=5，所以总状态数 4096*5*2=40960，可以接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，转移时，当 boat=1 时，我们枚举非空子集 g（大小为 1 到 k）。对于每个状态，我们需要枚举 C(|mask|,1) + ... + C(|mask|,min(|mask|,k))。由于|mask|&lt;=n，k&lt;=5，所以每个状态的转移数最多是 C(12,1)+C(12,2)+...+C(12,5)=12+66+220+495+792=1585。而总状态数 40960，所以总转移数 40960\\*1585 ≈ 65e6，在 Java 中可能有点大（但实际由于 mask 中 1 的个数可能少于 n，所以会少一些，而且很多状态是无效的）。但我们需要优化。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>优化：我们可以预处理所有大小为 1 到 k 的子集对应的最大时间，以及子集的二进制掩码。但是，在状态转移中，mask 是变化的，所以我们需要从当前 mask 中枚举子集。枚举子集 g（非空，且大小&lt;=k）的方法：可以用二进制枚举，枚举 mask 的子集，并且满足子集非空且 popcount&lt;=k。枚举子集的时间复杂度是 O(3^(popcount))，但我们可以通过剪枝（只枚举大小不超过 k 的子集）来减少。但最坏情况下，mask 中 12 个人，枚举所有子集（不管大小）是 2^popcount，但 k&lt;=5，所以我们可以只枚举大小不超过 k 的子集：循环 popcount=0 到 k，然后在该 popcount 下枚举组合。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实际实现中，我们可以这样：对于每个 mask，我们用一个 List 保存当前 mask 中所有不超过 k 的非空子集（二进制表示）。但是，由于状态转移中 mask 很多，我们可以在外层循环 mask，内层枚举子集。枚举子集 g 的方法：可以用循环，从 mask 中取出所有 1 的位置，然后组合枚举大小从 1 到 min(k, popcount)的所有组合。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另外，注意：同一个子集的二进制表示，我们可以预先计算子集 g 的最大时间，因为同一个子集 g（二进制表示）的最大时间是不变的，我们可以提前计算出每个子集（二进制掩码）的最大时间。因为 n&lt;=12，我们可以预处理所有 mask（0 到(1&lt;&lt;n)-1）的最大时间（如果 mask 不为空）？但是，一个掩码的最大时间就是掩码中所有位置对应的 time[i]的最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>预处理：maxTime[mask] = max{ time[i] | i 在 mask 中 }。但注意，mask=0 时，我们不关心。我们可以预处理一个数组 maxTime，大小为 1&lt;&lt;n。但注意：mask 中必须至少包含一个人，因为非空。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>同样，在返回时，我们枚举一个人，这个人的索引 i 满足 mask 的第 i 位为 0。这个枚举数量最多为 n（&lt;=12）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>算法步骤：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 初始化 dp 数组：大小为 [1&lt;&lt;n][m][2]，初始化为无穷大（比如 Double.POSITIVE_INFINITY）</span></span>
<span class="line"><span>2. dp[(1&lt;&lt;n)-1][0][1] = 0.0 // 初始状态</span></span>
<span class="line"><span>3. 预处理：</span></span>
<span class="line"><span>   maxTime[mask]：对于每个 mask，计算 maxTime[mask] = 掩码中所有人的最大划船时间。如果 mask=0，我们可以设为 0？但注意转移中 mask 非空。</span></span>
<span class="line"><span>   // 或者，在转移时，对于子集 g，我们可以直接取 maxTime[g]。</span></span>
<span class="line"><span>4. 遍历所有状态（mask，stage，boat），然后根据 boat 进行转移：</span></span>
<span class="line"><span>   如果 boat=1：</span></span>
<span class="line"><span>   // 枚举一个非空子集 g（g 是 mask 的子集，且 1&lt;=|g|&lt;=k）</span></span>
<span class="line"><span>   // 如何枚举：从 mask 中枚举所有大小不超过 k 的子集</span></span>
<span class="line"><span>   // 方法：获取 mask 中所有 1 的位置，然后从这些位置中枚举大小为 1,2,...,min(k, popcount(mask))的组合。</span></span>
<span class="line"><span>   // 或者我们可以用位运算枚举子集，然后检查 popcount&lt;=k？但枚举所有子集是 2^{popcount(mask)}，当 popcount(mask)=12 时达到 4096，但 k=5，所以我们希望只枚举大小&lt;=5 的子集，这样组合数最多为 C(12,5)=792，可以接受。因此，对于每个 mask，枚举所有子集 g，如果 g 非空且 popcount(g)&lt;=k，且 g 是 mask 的子集（即 g \\u0026 ~mask ==0）。</span></span>
<span class="line"><span>   // 但实际上，我们可以用一层循环：for(int g = mask; g !=0; g=(g-1)\\u0026mask) 这样枚举所有非空子集，然后检查 popcount(g)&lt;=k。这样枚举的次数是 2^{popcount(mask)}次，当 popcount(mask)=12 时 4096 次，然后乘以状态数 40960，总转移数 40960*4096 太大（1600 万*4096?）不可接受。</span></span>
<span class="line"><span>   // 因此，我们需要更高效的枚举：只枚举大小不超过 k 的子集。我们可以预处理每个 mask 的符合条件的子集列表。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>为了避免重复计算，我们可以预先为每个 mask 计算一个列表：List&lt;Integer&gt;[] subsets = new ArrayList[1&lt;&lt;n]</span></span>
<span class="line"><span>对于每个 mask，枚举所有子集 g，满足 g 是 mask 的子集，且 g 非空，且 1&lt;=popcount(g)&lt;=k。然后将 g 的二进制数存入列表。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，总状态 mask 有 1&lt;&lt;n 个，每个 mask 枚举所有子集（用二进制枚举）需要 O(2^{popcount(mask)})，总复杂度为 O(3^n)（二项式定理求和：C(n,0)*1 + C(n,1)*2 + ... + C(n,n)\\*2^n = 3^n）。n=12，3^12=531441，可以接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>或者，我们可以用组合枚举：对于每个 mask，我们枚举子集大小 t，从 1 到 min(k, popcount(mask))，然后枚举大小为 t 的子集。这样总预处理复杂度：每个 mask，枚举 t，然后每个 t 的组合数为 C(popcount(mask), t)，再对所有 mask 求和：sum\\_{s=0}^{n} C(n,s) \\* (C(s,1)+C(s,2)+...+C(s,min(k,s))))，n=12,k=5，这个求和可以计算，但实际我们直接做循环即可。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>预处理每个 mask 的合法子集列表：</span></span>
<span class="line"><span>for (int mask = 0; mask &lt; (1&lt;&lt;n); mask++) {</span></span>
<span class="line"><span>subsets[mask] = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>int cnt = Integer.bitCount(mask);</span></span>
<span class="line"><span>// 枚举子集：使用嵌套循环枚举所有大小为 1 到 min(k, cnt)的子集</span></span>
<span class="line"><span>// 但是，如何枚举一个集合 mask 的所有大小为 t 的子集？我们可以用递归或迭代的方式，但这里我们用位运算枚举所有子集并跳过大小超过 k 的子集可能更简单？因为总子集数 2^{cnt}，而 cnt&lt;=n=12，但 k=5，所以大小超过 5 的子集我们不要。</span></span>
<span class="line"><span>// 方法 1：枚举所有非空子集 g，如果 popcount(g)&lt;=k，则加入</span></span>
<span class="line"><span>for (int g = mask; g &gt; 0; g = (g-1) \\u0026 mask) {</span></span>
<span class="line"><span>int gc = Integer.bitCount(g);</span></span>
<span class="line"><span>if (gc &lt;= k) {</span></span>
<span class="line"><span>subsets[mask].add(g);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这样，每个 mask 的子集列表 subsets[mask]包含了所有大小不超过 k 的非空子集。注意：g=0 被跳过了。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5. 然后，我们进行状态转移：使用队列（BFS）？或者按 mask 中剩余人数从多到少（或者用拓扑顺序）？但状态转移是离散的，没有明显的拓扑序（因为阶段会循环变化，而且船的位置来回变）。所以我们用记忆化搜索（DFS）或者用多个数组交替？或者直接三重循环：mask，stage，boat，然后松弛。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：总时间是递增的，所以我们可以用类似 Dijkstra 的思想（优先队列），因为时间都是正的。但是，阶段变化依赖于本次操作时间的取整（模 m），所以阶段变化可能形成环？但是时间只增不减，所以不会形成环。但是，状态转移时，同一个状态（mask, stage, boat）可能被多次更新（时间不同），我们取最小时间。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们使用动态规划：迭代直到收敛？但我们有有限个状态，所以我们可以循环多次？或者按 mask 中剩余人数减少的顺序？但是船需要往返，所以 mask 可能会先减少（送人过去）然后增加（有人返回）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们考虑：用三重循环（mask 从大到小？但返回时 mask 会增加）。所以我们用队列：类似于 Bellman-Ford 或 SPFA：用队列存储状态（mask, stage, boat），然后松弛。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>具体：</span></span>
<span class="line"><span>初始化队列，将初始状态((1&lt;&lt;n)-1,0,1)加入队列，dp 值=0.0。</span></span>
<span class="line"><span>然后，每次从队列中取出一个状态，尝试所有可能的转移（渡河或返回），如果更新了相邻状态，就把相邻状态加入队列。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但注意：时间是连续值，而且阶段变化是确定的，所以我们这样更新。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，状态数量是有限且不太大（40960），所以我们可以使用 dp 数组，然后迭代：循环多次直到没有更新。或者用优先队列（Dijkstra）：按照总时间排序，每次取出最小时间的状态进行松弛。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>为什么 Dijkstra？因为每次操作时间增加都是正的（时间&gt;=0），所以我们可以保证一个状态被取出时，它的 dp 值已经是最小的，然后由它去松弛其他状态。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>算法：</span></span>
<span class="line"><span>PriorityQueue&lt;Node&gt;，Node（mask，stage，boat），按 dp[mask][stage][boat]排序。</span></span>
<span class="line"><span>初始化：将初始状态（(1&lt;&lt;n)-1, 0, 1）加入，时间为 0.0。</span></span>
<span class="line"><span>循环，直到队列为空：</span></span>
<span class="line"><span>取出一个状态（mask, stage, boat）和当前时间 t0=dp[mask][stage][boat]。</span></span>
<span class="line"><span>如果这个状态是目标状态（mask==0 且 boat==0），则记录答案。</span></span>
<span class="line"><span>否则，根据 boat 进行转移：</span></span>
<span class="line"><span>如果 boat=1：</span></span>
<span class="line"><span>枚举 mask 的一个合法子集 g（从 subsets[mask]中取），则：</span></span>
<span class="line"><span>max_time = maxTime[g] // 注意：g 这个子集的最大划船时间</span></span>
<span class="line"><span>d = max_time \\* mul[stage];</span></span>
<span class="line"><span>new_mask = mask ^ g; // 去掉 g 中的人（因为送他们过去）</span></span>
<span class="line"><span>new_stage = (stage + (int)Math.floor(d)) % m; // 阶段变化</span></span>
<span class="line"><span>new_boat = 0;</span></span>
<span class="line"><span>new_time = t0 + d;</span></span>
<span class="line"><span>// 如果 new_time &lt; dp[new_mask][new_stage][new_boat]，则更新并加入队列。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          如果boat=0：</span></span>
<span class="line"><span>            如果mask不为0：枚举一个不在mask中的人i（即mask的第i位为0）：</span></span>
<span class="line"><span>                // 注意：我们只需要枚举i，使得i不在mask中（已经在目的地的人）</span></span>
<span class="line"><span>                // 但是，我们状态mask中，1表示在营地，0表示在目的地。所以i需要满足：((mask&gt;&gt;i)\\u00261)==0</span></span>
<span class="line"><span>                d = time[i] * mul[stage];</span></span>
<span class="line"><span>                new_mask = mask | (1&lt;&lt;i);   // 返回一个人i，所以营地中多了一个人</span></span>
<span class="line"><span>                new_stage = (stage + (int)Math.floor(d)) % m;</span></span>
<span class="line"><span>                new_boat = 1;</span></span>
<span class="line"><span>                new_time = t0 + d;</span></span>
<span class="line"><span>                // 更新dp[new_mask][new_stage][new_boat] = min(原值, new_time)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    最后，如果找到目标状态（mask=0, boat=0）的dp值，则输出最小值（可能多个阶段都能达到），否则返回-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：我们可能从不同阶段到达目标状态（mask=0, boat=0），所以我们要遍历所有阶段，取最小值？不对，目标状态是：mask=0 且 boat=0，此时无论阶段是什么，都是结束状态。所以我们在状态中，当 mask=0 且 boat=0 时，该状态的时间就是总时间。所以我们在循环中，一旦取出一个状态满足 mask==0 且 boat==0，就可以直接返回？不行，因为可能有更短的时间在其他分支。但根据 Dijkstra，第一次取出目标状态时，其时间就是最小值（因为优先队列按时间递增）。所以我们可以直接返回？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意：阶段的变化是取模的，可能形成环，但是时间是不断增加的，所以不会出现负权。因此，我们使用 Dijkstra 算法是合理的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>6. 如果队列为空，我们都没有达到目标状态，则返回-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，有一个特例：当 n=0 时？但题目 n&gt;=1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另外，特殊情况：n=0，但题目 n&gt;=1，所以不用处理。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，示例 3：n=2, k=1，无法完成，返回-1。那么在我们的状态转移中，会出现什么情况？</span></span>
<span class="line"><span>初始状态：mask=3（二进制 11），阶段 0，船 1。</span></span>
<span class="line"><span>送一个人（比如 0）过河：g=1（即第 0 个人），渡河时间为 10*2.0=20.0，阶段变化 floor(20)=20 % 2=0，所以新阶段 0，新 mask=3^1=2（二进制 10），船 0。</span></span>
<span class="line"><span>然后必须有人返回：此时目的地上有 0（因为 mask=2 表示第 1 位在营地，第 0 位已到达），所以可以选择 0 返回：返回时间=10*2.0=20.0，阶段变化 20%2=0，新阶段 0，新 mask=2|1=3（11），船 1。这样回到了初始状态，且总时间增加了 40.0。因此，会形成循环，永远不能达到状态(0,0,?)。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们需要避免重复状态？但 Dijkstra 中，同一个状态可能被多次加入队列，但只要时间增加，就不会被再次更新（因为 Dijkstra 是取最小时间）。但是，注意：阶段是循环的，所以同一个状态（mask,stage,boat）可能会多次出现（但时间不同）。我们使用 dp 数组记录最小时间，如果已经有更小的时间，就跳过。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，算法不会无限循环：因为每次操作时间至少增加 min(time)\\*0.5（因为 mul 最小 0.5），所以总时间会趋于无穷。当时间超过一个很大的值（比如 1e9）时，我们可以认为无解？但题目没有给出时间上限。所以我们需要通过状态来避免重复：如果某个状态（mask,stage,boat）已经被取出过（即时间最小），那么后续再遇到该状态且时间更大就可以跳过。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们使用 dp 数组记录最小时间，当新时间大于等于当前 dp 记录的时间时，就跳过转移。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>7. 实现细节：</span></span>
<span class="line"><span>   dp 数组：double[][][] dp = new double[1&lt;&lt;n][m][2];</span></span>
<span class="line"><span>   初始化所有状态为 Double.MAX_VALUE（或 Double.POSITIVE_INFINITY）</span></span>
<span class="line"><span>   PriorityQueue：存储状态（mask, stage, boat），并按 dp 值排序。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   优先队列的节点定义：</span></span>
<span class="line"><span>   class Node {</span></span>
<span class="line"><span>   int mask;</span></span>
<span class="line"><span>   int stage;</span></span>
<span class="line"><span>   int boat;</span></span>
<span class="line"><span>   double time;</span></span>
<span class="line"><span>   // 或者我们不存 time，而是用节点的 time 和 dp 数组比较，但是为了排序，我们需要存 time。</span></span>
<span class="line"><span>   // 然后按 time 从小到大排序。</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   注意：当我们更新一个状态时，可能这个状态之前已经在优先队列中，我们不需要从队列中删除旧的节点，因为我们使用 dp 数组记录最小时间，当取出节点时，如果发现节点的 time 大于当前 dp 数组的值，说明该节点已经松弛过，就跳过。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>8. 预处理的 maxTime 数组：我们预处理每个子集掩码 g 的 maxTime，即子集 g 中人的最大划船时间。</span></span>
<span class="line"><span>   maxTime[g] = 0;</span></span>
<span class="line"><span>   for (int i=0; i&lt;n; i++) {</span></span>
<span class="line"><span>   if ((g&gt;&gt;i \\u0026 1)==1) {</span></span>
<span class="line"><span>   if (time[i] &gt; maxTime[g]) maxTime[g] = time[i];</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意：同一个子集 g，在不同 mask 下，如果 mask 包含 g，那么 g 是 mask 的子集。所以我们可以对每个 g（0 到(1&lt;&lt;n)-1）预处理。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>9.  代码结构：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 预处理：maxTime 数组</span></span>
<span class="line"><span>    double[] maxTimeSub = new double[1&lt;&lt;n];</span></span>
<span class="line"><span>    for (int g=0; g&lt;(1&lt;&lt;n); g++) {</span></span>
<span class="line"><span>    double maxT = 0;</span></span>
<span class="line"><span>    for (int i=0; i&lt;n; i++) {</span></span>
<span class="line"><span>    if (((g&gt;&gt;i)\\u00261)==1) {</span></span>
<span class="line"><span>    if (time[i] &gt; maxT) maxT = time[i];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    maxTimeSub[g] = maxT;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 预处理：每个 mask 的合法子集列表</span></span>
<span class="line"><span>    List&lt;Integer&gt;[] subsets = new ArrayList[1&lt;&lt;n];</span></span>
<span class="line"><span>    for (int mask=0; mask&lt;(1&lt;&lt;n); mask++) {</span></span>
<span class="line"><span>    subsets[mask] = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>    for (int g=mask; g&gt;0; g=(g-1)\\u0026mask) {</span></span>
<span class="line"><span>    int cnt = Integer.bitCount(g);</span></span>
<span class="line"><span>    if (cnt&lt;=k) {</span></span>
<span class="line"><span>    subsets[mask].add(g);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // dp 数组和优先队列初始化</span></span>
<span class="line"><span>    double[][][] dp = new double[1&lt;&lt;n][m][2];</span></span>
<span class="line"><span>    for (int i=0; i&lt;1&lt;&lt;n; i++) {</span></span>
<span class="line"><span>    for (int j=0; j&lt;m; j++) {</span></span>
<span class="line"><span>    Arrays.fill(dp[i][j], Double.POSITIVE_INFINITY);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 优先队列，按时间从小到大</span></span>
<span class="line"><span>    PriorityQueue&lt;double[]&gt; pq = new PriorityQueue&lt;&gt;((a, b) -&gt; Double.compare(a[3], b[3]));</span></span>
<span class="line"><span>    // 这里我们使用数组表示状态：{mask, stage, boat, time}，这样在队列中存储，并更新 dp</span></span>
<span class="line"><span>    // 但是，当我们更新 dp 数组时，如果队列中同一个状态出现多次，我们如何避免重复？我们用 dp 数组来保证：如果新的时间比 dp 值小，才更新并加入，否则不加。</span></span>
<span class="line"><span>    // 初始状态：</span></span>
<span class="line"><span>    dp[(1&lt;&lt;n)-1][0][1] = 0.0;</span></span>
<span class="line"><span>    pq.add(new double[]{(1&lt;&lt;n)-1, 0, 1, 0.0});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while (!pq.isEmpty()) {</span></span>
<span class="line"><span>    double[] cur = pq.poll();</span></span>
<span class="line"><span>    int mask = (int)cur[0];</span></span>
<span class="line"><span>    int stage = (int)cur[1];</span></span>
<span class="line"><span>    int boat = (int)cur[2];</span></span>
<span class="line"><span>    double t = cur[3];</span></span>
<span class="line"><span>    // 如果取出的时间大于当前 dp 数组的，说明已经有过更新，跳过</span></span>
<span class="line"><span>    if (t &gt; dp[mask][stage][boat]) continue;</span></span>
<span class="line"><span>    // 检查是否达到目标状态</span></span>
<span class="line"><span>    if (mask == 0 \\u0026\\u0026 boat == 0) {</span></span>
<span class="line"><span>    // 找到目标，由于是 Dijkstra，此时 t 就是最小值</span></span>
<span class="line"><span>    return t;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (boat == 1) {</span></span>
<span class="line"><span>            // 船在营地：枚举送一个非空子集g（从营地出发，送g中的人过河）</span></span>
<span class="line"><span>            for (int g : subsets[mask]) { // g是二进制掩码，且是mask的子集，非空，大小&lt;=k</span></span>
<span class="line"><span>                double maxT = maxTimeSub[g];   // 子集g的最大划船时间</span></span>
<span class="line"><span>                double d = maxT * mul[stage];  // 本次渡河时间</span></span>
<span class="line"><span>                int new_mask = mask ^ g;        // 移除了g中的人</span></span>
<span class="line"><span>                int time_floor = (int)Math.floor(d);</span></span>
<span class="line"><span>                int new_stage = (stage + time_floor) % m;</span></span>
<span class="line"><span>                int new_boat = 0;</span></span>
<span class="line"><span>                double new_time = t + d;</span></span>
<span class="line"><span>                // 如果new_time小于dp[new_mask][new_stage][new_boat]</span></span>
<span class="line"><span>                if (new_time &lt; dp[new_mask][new_stage][new_boat]) {</span></span>
<span class="line"><span>                    dp[new_mask][new_stage][new_boat] = new_time;</span></span>
<span class="line"><span>                    pq.add(new double[]{new_mask, new_stage, new_boat, new_time});</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            // 船在目的地，且mask非0（因为目标状态是mask==0且boat==0，此时已经返回了，所以mask非0才需要返回）</span></span>
<span class="line"><span>            // 注意：有可能mask已经0了？但在if条件里已经处理了目标状态，所以这里mask非0？</span></span>
<span class="line"><span>            if (mask != 0) {</span></span>
<span class="line"><span>                // 枚举一个人i（在目的地的人，即mask的0位对应的人）</span></span>
<span class="line"><span>                for (int i=0; i&lt;n; i++) {</span></span>
<span class="line"><span>                    if ((mask \\u0026 (1&lt;&lt;i)) == 0) { // 注意：mask记录的是营地的人，所以如果mask的第i位为0，表示i在目的地，可以作为返回的人</span></span>
<span class="line"><span>                        double d = time[i] * mul[stage];   // 返回的时间</span></span>
<span class="line"><span>                        int new_mask = mask | (1&lt;&lt;i);   // 将i加入营地（因为返回）</span></span>
<span class="line"><span>                        int time_floor = (int)Math.floor(d);</span></span>
<span class="line"><span>                        int new_stage = (stage + time_floor) % m;</span></span>
<span class="line"><span>                        int new_boat = 1;</span></span>
<span class="line"><span>                        double new_time = t + d;</span></span>
<span class="line"><span>                        if (new_time &lt; dp[new_mask][new_stage][new_boat]) {</span></span>
<span class="line"><span>                            dp[new_mask][new_stage][new_boat] = new_time;</span></span>
<span class="line"><span>                            pq.add(new double[]{new_mask, new_stage, new_boat, new_time});</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 如果队列为空都没有找到目标状态，返回-1</span></span>
<span class="line"><span>    return -1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>10. 测试示例：</span></span>
<span class="line"><span>    示例 1：n=1, k=1, m=2, time=[5], mul=[1.0,1.3]</span></span>
<span class="line"><span>    初始状态：mask=1, stage=0, boat=1, time=0</span></span>
<span class="line"><span>    船在营地：枚举子集：subsets[1] -&gt; [1]</span></span>
<span class="line"><span>    g=1: maxT=5, d=5\\*1.0=5, new_mask=0, time_floor=5, new_stage=(0+5)%2=1, new_boat=0, new_time=5.</span></span>
<span class="line"><span>    dp[0][1][0]=5.0 -&gt; 加入队列。</span></span>
<span class="line"><span>    然后取出(0,1,0,5.0)发现是目标状态，返回 5.0。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    示例 2：n=3, k=2, m=3, time=[2,5,8], mul=[1.0,1.5,0.75]</span></span>
<span class="line"><span>    按最优策略：先送 0 和 2（子集 g= mask=7（111）的子集，g=5（二进制 101，表示第 0 人和第 2 人））</span></span>
<span class="line"><span>    maxT = max(2,8)=8, d=8*1.0=8.0, new_mask=7^5=2（二进制 010，即第 1 人在营地），阶段变化：8%3=8%3=2（取整后还是 8，8%3=2），新阶段=(0+2)%3=2，船 0，时间 8.0。</span></span>
<span class="line"><span>    然后，船在目的地，且 mask=2（非 0），所以返回一个人：选择 0（因为 0 在目的地）-&gt; 注意：目的地的人：0 和 2，mask=2（二进制 010）表示营地只有第 1 人，所以目的地有 0 和 2。</span></span>
<span class="line"><span>    i=0: mask 的 0 位为 0（因为 mask=2，即二进制 010，第 0 位 0），返回时间=2*mul[2]=2*0.75=1.5，时间取整为 1，新阶段=(2+1)%3=0，new_mask=2|1=3（011），船 1，时间 8+1.5=9.5。</span></span>
<span class="line"><span>    然后，船在营地（mask=011，stage=0），再送 0 和 1：g=3（二进制 11，即第 0 和第 1 人），maxT=max(2,5)=5, d=5*1.0=5, new_mask=011^011=0，阶段变化=5%3=2，新阶段=(0+2)%3=2，船 0，总时间=9.5+5=14.5。</span></span>
<span class="line"><span>    然后取状态(0,2,0,14.5)是目标状态，返回 14.5。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，在状态转移中，我们有可能先送其他人，比如先送 0 和 1？那么就会得到不同的路径。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们通过优先队列，按时间从小到大，最后得到的最小时间应该是 14.5。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>11. 但是，在返回时，我们选择了 0 返回，但也可以选择 2 返回？那么我们需要枚举所有可能返回的人（在目的地的所有人员）。</span></span>
<span class="line"><span>    在第一次渡河后，目的地有 0 和 2，那么枚举 i=0 和 i=2。</span></span>
<span class="line"><span>    如果选择 2 返回：返回时间=8*0.75=6.0，取整=6%3=0，新阶段=(2+0)%3=2，新\\_mask=2|4=6（二进制 110，即第 1 和第 2 人在营地），船 1，时间=8+6=14。</span></span>
<span class="line"><span>    然后从营地（mask=110，stage=2）送人：注意在营地的人有 1（第 1 人）和 2（第 2 人）。我们可以送 2 人（110）吗？可以，子集可以是 110（表示第 1 和第 2 人），但注意：我们枚举子集时，非空子集且大小&lt;=2：子集包括：10（第 1 人），100（第 2 人），110（第 1 和第 2 人）。</span></span>
<span class="line"><span>    如果我们送 110：maxT=max(5,8)=8, d=8*mul[2]=8*0.75=6.0，新\\_mask=0，阶段变化=6%3=0，新阶段=(2+0)%3=2，船 0，总时间=14+6=20。</span></span>
<span class="line"><span>    如果送 10（第 1 人）：maxT=5, d=5*0.75=3.75，取整=3%3=0，新\\_mask=110^010=100（第 2 人还在营地），阶段=2（不变），时间=14+3.75=17.75。然后返回必须一个人：此时目的地上的人有 0,1（注意：我们营地还有第 2 人，mask=100，所以目的地有 0 和 1），选 0 返回：返回时间=2\\*mul[2]=1.5（此时阶段是 2？新阶段是(2+1)%3=0，然后送 0 和 2？）这样会超过 14.5。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    所以选择 2 返回的路径时间更长。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们的算法会优先选择时间更小的路径：第一次渡河后得到状态(2,2,0,8.0)，然后返回时，0 返回需要 1.5，2 返回需要 6.0。所以 0 返回的路径时间更小（9.5&lt;14.0），所以优先队列会先处理 9.5 这条路径，然后达到 14.5 返回。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>12. 示例 3：n=2, k=1, m=2, time=[10,10], mul=[2.0,2.0]</span></span>
<span class="line"><span>    初始状态：mask=3（11），阶段 0，船 1。</span></span>
<span class="line"><span>    只能送一人：枚举子集：g 可以是 1（01）和 2（10）</span></span>
<span class="line"><span>    送第 0 人：g=1，maxT=10, d=10*2.0=20.0，取整=20%2=0，新阶段=(0+0)%2=0，新\\_mask=11^1=2（10），船 0，时间 20.0。</span></span>
<span class="line"><span>    然后状态(10,0,0)取出：mask=2（10）非 0，所以需要返回。</span></span>
<span class="line"><span>    枚举返回的人：此时目的地上只有 0（因为 mask=2，第 0 位为 0 表示 0 在目的地，第 1 位为 1 表示 1 在营地），所以只能选 0 返回（因为 1 在营地，不能返回？返回的人必须是目的地的人）。</span></span>
<span class="line"><span>    返回时间=10*2.0=20.0，取整=20%2=0，新阶段=0，新\\_mask=10|1=11（3），船 1，时间 20+20=40.0。</span></span>
<span class="line"><span>    然后状态(3,0,1)取出：时间 40.0，然后又可以送一个人（和上面一样），进入循环。</span></span>
<span class="line"><span>    所以，我们永远达不到目标状态。因此，在优先队列中，时间会不断增大（每次加 40），直到时间超过一个很大的值？但我们的循环不会停止。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如何避免无限循环？我们需要判断无解的情况。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：当船在目的地时，我们要求返回的人必须是目的地的人。但有时候，目的地没有人？不可能，因为船在目的地，至少送过去一个人（在目的地），所以一定有返回的人。因此，只要营地还有人，我们就会执行返回操作。但是，可能形成循环：状态重复出现（但时间增加）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们需要设定一个时间上限。因为 n&lt;=12，k&lt;=5，m&lt;=5，划船时间最大是 100，最大倍率 2.0，所以一次操作时间最大 200 分钟。而状态数量最多 40960（mask 有 4096 种，阶段 5 种，船 2 种），所以最多有 40960 个状态，每个状态在 Dijkstra 中最多被扩展一次（即被取出时松弛一次）。所以，时间上限我们可以不用设置，因为状态有限（虽然阶段是循环的，但状态总数是有限的），并且时间只增不减，所以每个状态（mask,stage,boat）只会以最小时间被取出一次。然后，当队列为空时，我们就返回-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，在示例 3 中，状态(mask=3,stage=0,boat=1)在时间 0.0 被取出，然后扩展得到状态(2,0,0)和(1,0,0)？不对，我们只处理了送 1（第 0 人）得到(2,0,0)。然后状态(2,0,0)扩展得到状态(3,0,1)（时间 40.0）。然后状态(3,0,1)又会扩展，再送一个人，得到状态(2,0,0)（时间 40+20=60.0）？但注意，此时状态(2,0,0)之前已经被扩展过（时间为 20.0），而 60.0 大于 20.0，所以不会加入队列（因为 dp[2][0][0]已经是 20.0，60&gt;20，所以不加入）。同理，状态(3,0,1)在时间 40.0 时被处理，然后扩展后只有状态(2,0,0)（但不会加入）。然后状态(2,0,0)已经处理过（最小时间 20.0），我们并没有再扩展，因为返回操作时，我们只选择了 0 返回得到了(3,0,1)。所以状态(3,0,1)在时间 40.0 时被加入，然后从队列中取出，然后它再送一个人（送 0 或 1），得到状态(2,0,0)和(1,0,0)？但 dp[2][0][0]=20.0&lt;60.0，所以不会加入。这样队列就空了？然后返回-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>不对，状态(3,0,1)取出后，会枚举子集（大小 1 到 1，因为 k=1）：</span></span>
<span class="line"><span>g=1：送 0：得到状态(3^1=2,0,0)，时间=40+10*2.0=60.0，然后更新 dp[2][0][0]？之前记录的是 20.0，60&gt;20，所以不更新，不加入。</span></span>
<span class="line"><span>g=2：送 1：得到状态(3^2=1,0,0)，时间=40+10*2.0=60.0，然后 dp[1][0][0]（初始无穷大）会更新为 60.0，加入队列。</span></span>
<span class="line"><span>然后状态(1,0,0)：非 0，所以要返回：返回的人必须是目的地上的人（此时目的地上的人：0（因为营地有 1，所以目的地有 0）和之前送过去的 1？不对：注意状态(1,0,0)中，mask=1（二进制 01）表示营地只有第 0 人？不对：我们 mask 的二进制位：第 0 位为 1 表示第 0 人在营地，第 1 位为 0 表示第 1 人在目的地。所以目的地上的人有第 1 人？还有第 0 人：之前送过去的人。但是，实际上我们之前只送过一次 0 和一次 1，状态(1,0,0)表示营地还有第 0 人（因为 mask=1 表示第 0 位为 1），而第 1 人已经在目的地（因为 mask 的第 1 位为 0）。所以目的地上的人有第 1 人？注意：状态转移过程中，我们并没有记录历史，只记录当前营地中的人，所以目的地上的人是全集减去 mask。因此，在状态(1,0,0)中，目的地上的人：第 1 人（下标 1）？还有第 0 人呢？不对，我们只送过第 0 人（在状态(3,0,1)时）得到状态(2,0,0)（mask=2:10）表示第 0 人已到达（第 1 人在营地），那么再送第 1 人（在状态(3,0,1)中又送第 1 人）得到状态(1,0,0)（mask=1:01）表示第 0 人在营地（未出发）？这不对，因为第 0 人已经在之前送过一次（状态(2,0,0)时，第 0 人已经到目的地了），怎么又回到了营地？这是状态转移的问题吗？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>重新梳理状态：</span></span>
<span class="line"><span>状态(mask, stage, boat)中，mask 表示当前在营地的人员（无论船在哪儿）。当船在营地时，表示这些人在营地（包括船）；当船在目的地时，表示这些人在营地（船在对岸，这些人在营地）。但是，目的地上的人员不在 mask 中。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     在状态(3,0,1)（mask=3，二进制11）送第0人（g=1），新mask=3^1=2（10），即第1人在营地（因为mask=10的第1位为1，第0位为0？注意：二进制位0表示第0人，1表示第1人？mask=3的二进制是11，第0位和第1位都是1。送第0人（g=01）后，mask=11^01=10（即第1位为1，第0位0）表示营地有第1人（下标1），而第0人已到达目的地。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     在状态(3,0,1)送第1人（g=2，即10）时，新mask=11^10=01，即第0位为1（营地有第0人），第1人已到达。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     因此，状态(2,0,0)（mask=10）和状态(1,0,0)（mask=01）是两种状态。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     在状态(2,0,0)：我们选择返回的人必须是在目的地的人（即第0人）返回，因为mask=10中第0位0（表示第0人不在营地，即已到达目的地），所以只能选第0人返回（实际上，目的地只有第0人？第1人还在营地，所以还没有到目的地？不对：目的地：当船在目的地时，我们送过去的人就已经在目的地了。状态(2,0,0)表示船在目的地，营地有第1人（因为mask=10表示第1人在营地），而第0人已经到达目的地（因为mask=10的第0位0，表示第0人不在营地，所以应该是在目的地）。所以目的地上的人只有第0人。所以只能选择第0人返回。得到状态(2|1=3, (0+floor(20))%2=0, 1)，时间20+20=40.0。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     在状态(1,0,0)：mask=01（第0人在营地，第1人在目的地），船在目的地。所以返回操作：必须选目的地的人返回，目的地的人有第1人（因为mask=01中第1位0，表示第1人不在营地，所以在目的地）。所以返回第1人：返回时间=10*2.0=20.0，新_mask=01 | 10 = 11（3），新阶段=(0+20)%2=0，船1，时间=40+20=60.0。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     然后状态(3,0,1)（时间40.0）已经处理过，再送人后得到的状态(2,0,0)和(1,0,0)因为时间60.0比之前记录（20.0和最初(1,0,0)？第一次得到(1,0,0)是60.0）大，所以不会加入队列。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     然后队列中还有状态(3,0,1):时间40.0，处理完后，队列为空？然后返回-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，在队列为空时，我们没有达到目标状态，所以返回-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们的算法能够处理示例 3，返回-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>13. 复杂度：状态数最多 40960，优先队列每次取一个状态，每个状态最多被扩展一次（因为 dp 数组记录了最小时间）。每次扩展：</span></span>
<span class="line"><span>    boat=1：枚举 subsets[mask]中的子集，最多约 792（当 mask 全 1 时，但 k=5，实际组合数 C(12,5)=792）？但最坏情况 mask 全 1 时，我们枚举子集的数量最多为 C(12,1)+...+C(12,5)=1585（实际 1585 个）。所以总转移数：状态数最多 40960，其中只有部分状态会出现。船 1 的状态数大约为状态总数的一半（因为船有两个位置）。</span></span>
<span class="line"><span>    boat=0：枚举一个人，最多 12 人。</span></span>
<span class="line"><span>    所以，总转移边数：boat1 状态数 _ 1585 + boat0 状态数 _ 12。而状态总数是 40960（理论上界），但实际状态数取决于转移。因此，最坏情况可能有 40960*1585 + 40960*12，约 40960\\*1600=65536000（6500 万），在 Java 中运行可能有点勉强（时间限制？但题目 n&lt;=12，而且实际可能状态较少）。我们可以尝试优化。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>优化：我们可以不处理无效状态（即不会出现的状态），例如，当船在营地时，mask 必须至少包含一个人？不一定，但初始状态有。另外，目标状态是 mask=0 且 boat=0，一旦出现就可以返回。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们也可以使用 Dijkstra，优先队列会优先处理时间小的状态。所以可能会先找到目标状态。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由于状态数最多 40960，转移边数约 6500 万，在 Java 中可能超时（1 秒大约 10^7~10^8 次操作）。所以我们需要优化枚举子集的部分。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另一种方法：避免预处理所有 mask 的子集，而是使用状态转移时动态枚举大小不超过 k 的子集？但是，我们之前已经预处理了每个 mask 的合法子集列表，但是每个 mask 的合法子集最多 1585 个，所以总转移边数会很大。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意：每个 mask 的合法子集个数最多为 sum*{t=1}^{min(k, popcount(mask))} C(popcount(mask), t) &lt;= min(2^{popcount(mask)}, sum*{t=1}^{k} C(12, t)) = 1585（当 popcount(mask)=12 时）。但是，在状态转移中，mask 的 popcount 从 n 逐渐减少，但是返回时可能会增加（但一般不会超过 n）。所以平均 popcount 可能比较大（比如 10 左右），那么子集数量大约为 C(10,1)+...+C(10,5)=10+45+120+210+252=637。所以总转移数：状态数 40960，其中一半是船 1（20480 个状态），每个船 1 状态枚举约 637 个子集，总约 20480*637≈13e6，然后船 0 状态（20480）每个枚举 12 个人，共 20480*12≈0.25e6，总约 13.25e6，可以接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们预处理 subsets[mask]时，是用位运算枚举所有非空子集再过滤大小&lt;=k 的，这种枚举在 popcount(mask)较大时（比如 12）会枚举 2^popcount(mask)=4096 次。预处理所有 mask（4096 个 mask）的总枚举量：sum\\_{pop=0}^{12} C(12,pop)\\*2^pop = (1+2)^12 = 3^12=531441，可以接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，总转移边数约 13.25e6，在 Java 中可能可以运行（但可能接近 1 秒边界）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们还要考虑浮点数运算和优先队列的开销（优先队列每次 push 和 pop 是 log(状态数)，状态数最多 40960，所以 log(40960)≈16），总操作次数 13.25e6 次 push（每个转移边最多 push 一次，但实际上只有当更新时才 push，所以最多 13.25e6 次 push 和 pop）。总优先队列操作次数 13.25e6 次，每次 log(40960)≈16，总时间约 13.25e6\\*16=212e6 操作，在 Java 中可能超过 1 秒。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们需要优化：避免使用优先队列，而用状态数组 dp，然后按时间从大到小？不行，阶段影响依赖于当前时间（但阶段变化只与本次操作时间有关，与总时间无关），所以我们可以换一种顺序：按 mask 中 1 的个数（剩余人数）从小到大？但返回时 1 的个数会增加。因此，不行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>或者，我们可以用 SPFA：用一个普通队列（FIFO），然后松弛。因为时间都是正数，但 SPFA 对于正权图可能会慢（但这里没有负权边），而状态数有限，所以可能比 Dijkstra 快？因为每个状态只更新常数次（最多 1585+12 次）。SPFA 平均复杂度可能接近 O(VE)（13.25e6），那么最坏可能 O(VE)（13.25e6）次操作，可以接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>为什么用 SPFA？因为每个状态（mask,stage,boat）可以多次被更新，因为从不同路径更新时间可能更小，但是更新次数不会太多（因为状态总数有限）。SPFA 用一个队列，当一个状态被更新时，就加入队列。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们修改为用队列（FIFO）：</span></span>
<span class="line"><span>初始化：队列加入初始状态(1&lt;&lt;n-1,0,1) [dp=0.0]</span></span>
<span class="line"><span>然后循环直到队列为空：</span></span>
<span class="line"><span>取队首状态(mask,stage,boat)和当前时间 t=dp[mask][stage][boat]</span></span>
<span class="line"><span>然后进行转移（和 Dijkstra 的转移相同）：</span></span>
<span class="line"><span>如果更新了某个邻接状态（得到更小的时间），就更新 dp，并将该邻接状态加入队列。</span></span>
<span class="line"><span>最后，dp[0][*][0]的最小值？不对，我们只需要任意阶段下 mask=0 且 boat=0 的最小时间。所以最后扫描所有阶段，dp[0][stage][0]的最小值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     但是，我们可能没有达到mask=0，所以如果所有dp[0][stage][0]都是无穷大，返回-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这样，我们避免了优先队列的 log 开销。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：用 SPFA，如果更新次数太多，可能会被卡。但状态数 40960，每个状态最多更新（1585+12）次，所以总更新次数最多 40960\\*1600≈65.5e6（最坏情况），可以接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们改用 FIFO 队列（注意：同一个状态可能多次入队，但更新条件是用更小的时间更新，所以不会无限循环）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>算法步骤（SPFA）：</span></span>
<span class="line"><span>初始化 dp 数组为无穷大，dp[init_mask][0][1]=0.0</span></span>
<span class="line"><span>队列 q 加入（init_mask,0,1）</span></span>
<span class="line"><span>while (!q.isEmpty()) {</span></span>
<span class="line"><span>(mask, stage, boat) = q.poll()</span></span>
<span class="line"><span>for each transition from (mask,stage,boat) to (new_mask, new_stage, new_boat) with time_cost = d:</span></span>
<span class="line"><span>double nt = dp[mask][stage][boat] + d</span></span>
<span class="line"><span>if (nt &lt; dp[new_mask][new_stage][new_boat]) {</span></span>
<span class="line"><span>dp[new_mask][new_stage][new_boat] = nt;</span></span>
<span class="line"><span>q.add(new State(new_mask, new_stage, new_boat));</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>double ans = Double.POSITIVE_INFINITY;</span></span>
<span class="line"><span>for (int stage=0; stage&lt;m; stage++) {</span></span>
<span class="line"><span>if (dp[0][stage][0] &lt; ans)</span></span>
<span class="line"><span>ans = dp[0][stage][0];</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>if (ans is infinity) return -1;</span></span>
<span class="line"><span>else return ans;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：状态(mask,stage,boat)在状态转移时，我们每次松弛都要计算 new_stage（依赖于本次操作的时间 d 的取整部分）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但注意：当我们计算 d 时，是依赖于当前阶段 stage 的倍率 mul[stage]的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>14. 代码实现（使用队列，SPFA 风格）：</span></span>
<span class="line"><span>    // 队列使用 LinkedList</span></span>
<span class="line"><span>    Queue&lt;int[]&gt; queue = new LinkedList&lt;&gt;(); // 每个状态是 int[]{mask, stage, boat}</span></span>
<span class="line"><span>    // 初始化</span></span>
<span class="line"><span>    double[][][] dp = new double[1&lt;&lt;n][m][2];</span></span>
<span class="line"><span>    for (int i=0; i&lt;1&lt;&lt;n; i++) {</span></span>
<span class="line"><span>    for (int j=0; j&lt;m; j++) {</span></span>
<span class="line"><span>    Arrays.fill(dp[i][j], Double.POSITIVE_INFINITY);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    dp[(1&lt;&lt;n)-1][0][1] = 0.0;</span></span>
<span class="line"><span>    queue.add(new int[]{(1&lt;&lt;n)-1, 0, 1});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while (!queue.isEmpty()) {</span></span>
<span class="line"><span>    int[] cur = queue.poll();</span></span>
<span class="line"><span>    int mask = cur[0];</span></span>
<span class="line"><span>    int stage = cur[1];</span></span>
<span class="line"><span>    int boat = cur[2];</span></span>
<span class="line"><span>    double t = dp[mask][stage][boat];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          if (boat == 1) {</span></span>
<span class="line"><span>              for (int g : subsets[mask]) {</span></span>
<span class="line"><span>                  double maxT = maxTimeSub[g];</span></span>
<span class="line"><span>                  double d = maxT * mul[stage];</span></span>
<span class="line"><span>                  int new_mask = mask ^ g;</span></span>
<span class="line"><span>                  int time_floor = (int)Math.floor(d);</span></span>
<span class="line"><span>                  int new_stage = (stage + time_floor) % m;</span></span>
<span class="line"><span>                  int new_boat = 0;</span></span>
<span class="line"><span>                  double new_time = t + d;</span></span>
<span class="line"><span>                  if (new_time &lt; dp[new_mask][new_stage][new_boat]) {</span></span>
<span class="line"><span>                      dp[new_mask][new_stage][new_boat] = new_time;</span></span>
<span class="line"><span>                      queue.add(new int[]{new_mask, new_stage, new_boat});</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>          } else {</span></span>
<span class="line"><span>              if (mask != 0) { // 营地还有人，需要返回</span></span>
<span class="line"><span>                  for (int i=0; i&lt;n; i++) {</span></span>
<span class="line"><span>                      if ((mask \\u0026 (1&lt;&lt;i)) == 0) {</span></span>
<span class="line"><span>                          double d = time[i] * mul[stage];</span></span>
<span class="line"><span>                          int new_mask = mask | (1&lt;&lt;i);</span></span>
<span class="line"><span>                          int time_floor = (int)Math.floor(d);</span></span>
<span class="line"><span>                          int new_stage = (stage + time_floor) % m;</span></span>
<span class="line"><span>                          int new_boat = 1;</span></span>
<span class="line"><span>                          double new_time = t + d;</span></span>
<span class="line"><span>                          if (new_time &lt; dp[new_mask][new_stage][new_boat]) {</span></span>
<span class="line"><span>                              dp[new_mask][new_stage][new_boat] = new_time;</span></span>
<span class="line"><span>                              queue.add(new int[]{new_mask, new_stage, new_boat});</span></span>
<span class="line"><span>                          }</span></span>
<span class="line"><span>                      }</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 结束后，在目标状态（mask=0, boat=0）中找最小值</span></span>
<span class="line"><span>    double ans = Double.POSITIVE_INFINITY;</span></span>
<span class="line"><span>    for (int stage=0; stage&lt;m; stage++) {</span></span>
<span class="line"><span>    ans = Math.min(ans, dp[0][stage][0]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (ans == Double.POSITIVE_INFINITY)</span></span>
<span class="line"><span>    return -1.0;</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>    return ans;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>15. 注意：浮点数精度问题？题目要求返回-1.00000，5.00000，所以返回 double。但我们的时间计算（double）可能会有精度问题？但输入数据范围不大（时间最多 100，倍率 2.0，操作次数最多 2*n（去返），所以总时间最多 12*2*100*2.0=4800，所以 double 可以精确表示。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>16. 运行测试：示例 1,2,3。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>17. 边界：当 n=0？但题目 n&gt;=1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最终代码实现：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：预处理 maxTimeSub 数组，注意 mask=0 时，但我们在循环中 mask 从 0 到(1&lt;&lt;n)-1，所以 mask=0 时，maxTimeSub[0]我们不用（因为枚举子集时，mask=0 的子集为空，不枚举）。但是，我们的预处理循环中包括了 mask=0，计算 maxTimeSub[0]=0（因为没有人为 0）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>预处理 subsets 数组：同样处理 mask=0，但 mask=0 时，子集为空列表。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最后，返回 double，保留 5 位小数？题目要求输出示例是 5.00000，所以直接返回 double 即可，系统会格式化输出。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们使用 FIFO 队列（SPFA）来实现。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>开始写代码：</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>为了解决这个问题，我们需要找到一种生成树，使得生成树的稳定性（即所有边的最小强度）最大化。生成树必须包含所有标记为必须的边（<code>musti=1</code>），且这些边不能升级。对于非必须边（<code>musti=0</code>），我们可以选择是否使用，并且最多可以升级<code>k</code>条边（每条边最多升级一次，升级后强度翻倍）。如果无法连接所有节点，则返回<code>-1</code>。</p><h3 id="方法思路" tabindex="-1"><a class="header-anchor" href="#方法思路"><span>方法思路</span></a></h3><p>为了解决这个问题，我们需要模拟一艘船在周期变化的环境条件下运送人员过河的过程。船每次可以运送最多 k 人，但环境条件会周期性变化，影响渡河时间。我们的目标是找到将所有人员运送到对岸所需的最少时间，如果无法完成则返回-1。</p><h3 id="方法思路-1" tabindex="-1"><a class="header-anchor" href="#方法思路-1"><span>方法思路</span></a></h3><ol><li><p><strong>问题分析</strong>：</p><ul><li>有 n 名人员需要过河，船一次最多载 k 人。</li><li>环境条件周期性变化，共有 m 个阶段，每个阶段有对应的速度倍率 mul[j]。若 mul[j] &gt; 1，时间变长；若 mul[j] &lt; 1，时间变短。</li><li>渡河时间取决于组内人员的最大划船能力和当前环境倍率。</li><li>船每次渡河或返回后，环境阶段会根据耗时（取整后模 m）发生变化。</li><li>若营地还有人，必须有一个人将船带回营地，返回时间同样受环境倍率影响。</li></ul></li><li><p><strong>状态表示</strong>：</p><ul><li>使用动态规划（DP）结合状态压缩。状态定义为<code>dp[mask][stage][boat]</code>： <ul><li><code>mask</code>：二进制数，表示当前还在营地的人员（1 表示在营地，0 表示已到目的地）。</li><li><code>stage</code>：当前环境阶段（0 到 m-1）。</li><li><code>boat</code>：船的位置（0 在目的地，1 在营地）。</li></ul></li><li><code>dp[mask][stage][boat]</code>存储达到该状态所需的最少时间。</li></ul></li><li><p><strong>状态转移</strong>：</p><ul><li><strong>船在营地（boat=1）</strong>：选择 1 到 k 人的非空子集 g 渡河。计算渡河时间（组内最大划船能力 × 当前倍率）。更新状态： <ul><li><code>new_mask = mask</code> 移除 g 中人员。</li><li><code>new_stage = (stage + floor(渡河时间)) % m</code>。</li><li><code>new_boat = 0</code>（船到目的地）。</li></ul></li><li><strong>船在目的地（boat=0）且营地还有人（mask≠0）</strong>：选择一个已到目的地的人员返回。计算返回时间（该人员划船能力 × 当前倍率）。更新状态： <ul><li><code>new_mask = mask</code> 加入返回人员。</li><li><code>new_stage = (stage + floor(返回时间)) % m</code>。</li><li><code>new_boat = 1</code>（船回营地）。</li></ul></li></ul></li><li><p><strong>算法选择</strong>：</p><ul><li>使用 SPFA（Shortest Path Faster Algorithm）进行状态转移。SPFA 通过队列处理状态，每次从队列取出状态并尝试转移，若新时间更优则更新状态并加入队列。</li><li>预处理：计算所有子集的最大划船能力；为每个<code>mask</code>预处理大小不超过 k 的非空子集列表。</li></ul></li><li><p><strong>终止条件</strong>：</p><ul><li>目标状态：<code>mask=0</code>（无人滞留营地）且<code>boat=0</code>（船在目的地）。</li><li>遍历所有阶段，取最小时间值；若未达到目标状态，返回-1。</li></ul></li></ol><h3 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析"><span>复杂度分析</span></a></h3><ul><li><strong>时间复杂度</strong>：状态数为 \\(O(2^n \\times m \\times 2)\\)，每个状态转移最多处理 \\(O(2^k \\times n)\\) 次操作。综合复杂度约为 \\(O(2^n \\times m \\times n \\times 2^k)\\)，其中 n≤12，k≤5，m≤5，可接受。</li><li><strong>空间复杂度</strong>：\\(O(2^n \\times m \\times 2)\\) 存储 DP 数组和预处理子集信息。</li></ul><h3 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现"><span>代码实现</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> java.util.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Solution</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> double</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> minTime</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> k</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> m</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">time</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">double</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">mul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // Precompute maxTime for each subset</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        double</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">maxTimeSub</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> double</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> g</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; g </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n); g++) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            double</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> maxT</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n; i++) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (((g </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i) \\u0026 </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (time[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> maxT) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                        maxT </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> time[i];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            maxTimeSub[g] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> maxT;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // Precompute subsets for each mask: non-empty subsets of size &lt;= k</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">subsets</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> mask</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; mask </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n); mask++) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            subsets[mask] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> g</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mask; g </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; g </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (g </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) \\u0026 mask) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> cnt</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Integer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bitCount</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(g);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (cnt </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> \\u0026\\u0026 cnt </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> k) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    subsets[mask].</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(g);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // DP array: dp[mask][stage][boat]</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        double</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[][][] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dp</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> double</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n][m][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n); i++) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> j</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> m; j++) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                Arrays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">fill</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(dp[i][j], </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">Double</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">POSITIVE_INFINITY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // Queue for SPFA: stores {mask, stage, boat}</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Queue</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[]&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">queue</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> LinkedList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        dp[(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0.0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        queue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[]{(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">queue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">isEmpty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()) {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">state</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> queue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">poll</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> mask</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> state[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> stage</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> state[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> boat</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> state[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            double</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> t</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> dp[mask][stage][boat];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (boat </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                // Boat at camp: send a non-empty group (subset g of mask, size 1~k)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> g</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> subsets[mask]) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    double</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> maxT</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> maxTimeSub[g];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    double</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> d</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> maxT </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mul[stage];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> time_floor</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">Math</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">floor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(d);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> new_stage</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (stage </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> time_floor) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> m;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> new_mask</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mask </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">^</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> g;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> new_boat</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    double</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> new_time</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> d;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (new_time </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> dp[new_mask][new_stage][new_boat]) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                        dp[new_mask][new_stage][new_boat] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> new_time;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                        queue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[]{new_mask, new_stage, new_boat});</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                // Boat at destination: if people left at camp, return one person</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (mask </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n; i++) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ((mask \\</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">u0026</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i)) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                            double</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> d</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> time[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mul[stage];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> time_floor</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">Math</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">floor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(d);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> new_stage</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (stage </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> time_floor) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> m;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> new_mask</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mask </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">|</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> new_boat</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                            double</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> new_time</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> d;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (new_time </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> dp[new_mask][new_stage][new_boat]) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                                dp[new_mask][new_stage][new_boat] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> new_time;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                                queue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[]{new_mask, new_stage, new_boat});</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // Check the target states: mask=0, boat=0 for any stage</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        double</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> minTotalTime</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Double</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">POSITIVE_INFINITY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> stage</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; stage </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> m; stage++) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (dp[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">][stage][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> minTotalTime) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                minTotalTime </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> dp[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">][stage][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> minTotalTime </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Double</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">POSITIVE_INFINITY</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> ?</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1.0</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> minTotalTime;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码解释" tabindex="-1"><a class="header-anchor" href="#代码解释"><span>代码解释</span></a></h3><ol><li><p><strong>预处理</strong>：</p><ul><li><code>maxTimeSub</code>：存储每个人员子集的最大划船时间。</li><li><code>subsets</code>：存储每个<code>mask</code>下大小不超过 k 的非空子集列表。</li></ul></li><li><p><strong>初始化</strong>：</p><ul><li><code>dp</code>数组初始化为无穷大，起始状态<code>dp[(1&lt;&lt;n)-1][0][1] = 0.0</code>（所有人在营地，船在营地，阶段 0）。</li><li>队列初始化，加入起始状态。</li></ul></li><li><p><strong>状态转移</strong>：</p><ul><li><strong>船在营地</strong>：枚举合法子集渡河，计算新状态（时间、阶段、船位），更新<code>dp</code>并加入队列。</li><li><strong>船在目的地</strong>：枚举目的地人员返回，更新状态（时间、阶段、船位），加入队列。</li></ul></li><li><p><strong>结果提取</strong>：</p><ul><li>遍历所有阶段，取<code>mask=0</code>且<code>boat=0</code>的最小时间值。</li><li>若未找到有效解，返回-1。</li></ul></li></ol><p>此方法高效地利用状态压缩和队列优化，处理了人员运送过程中的各种状态变化，确保在给定约束下找到最优解。</p>`,18)]))}const c=n(p,[["render",e],["__file","t4.html.vue"]]),h=JSON.parse('{"path":"/module_ai/weekly-contest-455/t4.html","title":"人员过河时间优化问题","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"USER","slug":"user","link":"#user","children":[]},{"level":2,"title":"ASSISTANT","slug":"assistant","link":"#assistant","children":[{"level":3,"title":"方法思路","slug":"方法思路","link":"#方法思路","children":[]},{"level":3,"title":"方法思路","slug":"方法思路-1","link":"#方法思路-1","children":[]},{"level":3,"title":"复杂度分析","slug":"复杂度分析","link":"#复杂度分析","children":[]},{"level":3,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[]},{"level":3,"title":"代码解释","slug":"代码解释","link":"#代码解释","children":[]}]}],"git":{"createdTime":1751299769000,"updatedTime":1751299769000,"contributors":[{"name":"gdut-yy","username":"gdut-yy","email":"gdut_yy@163.com","commits":1}]},"readingTime":{"minutes":47.31,"words":14192},"filePathRelative":"module_ai/weekly-contest-455/t4.md","localizedDate":"2025年7月1日"}');export{c as comp,h as data};
