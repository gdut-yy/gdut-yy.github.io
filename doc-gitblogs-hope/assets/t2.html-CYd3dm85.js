import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as l}from"./app-D75trwlE.js";const p={};function e(d,s){return l(),a("div",null,s[0]||(s[0]=[i(`<h1 id="还原硬币面值集合" tabindex="-1"><a class="header-anchor" href="#还原硬币面值集合"><span>还原硬币面值集合</span></a></h1><ul><li>会话记录：<a href="https://yuanbao.tencent.com/chat/naQivTmsDa/eb04dca3-4cc2-4940-a8dd-82ae7ef5a30f" target="_blank" rel="noopener noreferrer">https://yuanbao.tencent.com/chat/naQivTmsDa/eb04dca3-4cc2-4940-a8dd-82ae7ef5a30f</a></li><li>无修改 AC。</li></ul><h2 id="user" tabindex="-1"><a class="header-anchor" href="#user"><span>USER</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>给你一个 从 1 开始计数 的整数数组 numWays，其中 numWays[i] 表示使用某些 固定 面值的硬币（每种面值可以使用无限次）凑出总金额 i 的方法数。每种面值都是一个 正整数 ，并且其值 最多 为 numWays.length。</span></span>
<span class="line"><span>然而，具体的硬币面值已经 丢失 。你的任务是还原出可能生成这个 numWays 数组的面值集合。</span></span>
<span class="line"><span>返回一个按从小到大顺序排列的数组，其中包含所有可能的 唯一 整数面值。</span></span>
<span class="line"><span>如果不存在这样的集合，返回一个 空 数组。</span></span>
<span class="line"><span>示例 1：</span></span>
<span class="line"><span>输入： numWays = [0,1,0,2,0,3,0,4,0,5]</span></span>
<span class="line"><span>输出： [2,4,6]</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>金额	方法数	解释</span></span>
<span class="line"><span>1	0	无法用硬币凑出总金额 1。</span></span>
<span class="line"><span>2	1	唯一的方法是 [2]。</span></span>
<span class="line"><span>3	0	无法用硬币凑出总金额 3。</span></span>
<span class="line"><span>4	2	可以用 [2, 2] 或 [4]。</span></span>
<span class="line"><span>5	0	无法用硬币凑出总金额 5。</span></span>
<span class="line"><span>6	3	可以用 [2, 2, 2]、[2, 4] 或 [6]。</span></span>
<span class="line"><span>7	0	无法用硬币凑出总金额 7。</span></span>
<span class="line"><span>8	4	可以用 [2, 2, 2, 2]、[2, 2, 4]、[2, 6] 或 [4, 4]。</span></span>
<span class="line"><span>9	0	无法用硬币凑出总金额 9。</span></span>
<span class="line"><span>10	5	可以用 [2, 2, 2, 2, 2]、[2, 2, 2, 4]、[2, 4, 4]、[2, 2, 6] 或 [4, 6]。</span></span>
<span class="line"><span>示例 2：</span></span>
<span class="line"><span>输入： numWays = [1,2,2,3,4]</span></span>
<span class="line"><span>输出： [1,2,5]</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>金额	方法数	解释</span></span>
<span class="line"><span>1	1	唯一的方法是 [1]。</span></span>
<span class="line"><span>2	2	可以用 [1, 1] 或 [2]。</span></span>
<span class="line"><span>3	2	可以用 [1, 1, 1] 或 [1, 2]。</span></span>
<span class="line"><span>4	3	可以用 [1, 1, 1, 1]、[1, 1, 2] 或 [2, 2]。</span></span>
<span class="line"><span>5	4	可以用 [1, 1, 1, 1, 1]、[1, 1, 1, 2]、[1, 2, 2] 或 [5]。</span></span>
<span class="line"><span>示例 3：</span></span>
<span class="line"><span>输入： numWays = [1,2,3,4,15]</span></span>
<span class="line"><span>输出： []</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>没有任何面值集合可以生成该数组。</span></span>
<span class="line"><span>提示：</span></span>
<span class="line"><span>1 &lt;= numWays.length &lt;= 100</span></span>
<span class="line"><span>0 &lt;= numWays[i] &lt;= 2 * 10^8</span></span>
<span class="line"><span>\`\`java</span></span>
<span class="line"><span>class Solution {</span></span>
<span class="line"><span>    public List&lt;Integer&gt; findCoins(int[] numWays) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="assistant" tabindex="-1"><a class="header-anchor" href="#assistant"><span>ASSISTANT</span></a></h2><details class="hint-container details"><summary>已深度思考(用时 9 分 28 秒)</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>我们已知一个数组 numWays，其中 numWays[i] 表示凑出金额 i 的方法数（i 从 1 开始，但数组下标 0 对应金额 1？注意：题目说“从 1 开始计数”，即 numWays[0]对应金额 1，numWays[1]对应金额 2，...，numWays[n-1]对应金额 n）</span></span>
<span class="line"><span>但是注意：示例 1 的输入：numWays = [0,1,0,2,0,3,0,4,0,5] 对应金额 1 到 10。所以下标为 i 的位置对应金额 i+1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>问题：还原可能生成这个 numWays 数组的面值集合（一个由正整数组成的集合，每个面值最多为 numWays.length，且面值集合中的数在 1 到 n 之间？注意：n=numWays.length，而金额最大为 n，但实际上硬币面值可以超过 n 吗？但题目规定“每种面值最多为 numWays.length”，所以面值不会超过数组长度）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>观察：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. numWays[0]（即金额 1）的方法数：如果为 0，说明最小面值至少为 2；如果为 1，则必须有面值 1。</span></span>
<span class="line"><span>2. 一般来说，动态规划的状态转移方程为：dp[i] = dp[i] + dp[i - coin] for each coin，初始 dp[0]=1（金额 0 有一种方法：不取）。</span></span>
<span class="line"><span>   但是这里给出的 numWays 数组对应的是从金额 1 到金额 n（n 为数组长度）的方法数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们设 dp[i]表示凑出金额 i 的方法数，那么 dp[0]=1（虽然题目没有给出金额 0，但这是动态规划的起点）。题目给的数组是 dp[1], dp[2], ... , dp[n]（即 numWays[0]对应 dp[1], numWays[1]对应 dp[2]）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在，我们需要还原硬币集合 S（一个正整数集合，且每个元素在[1, n]范围内），使得对于每个金额 i（1&lt;=i&lt;=n）有：</span></span>
<span class="line"><span>dp[i] = sum\\_{j} dp[i - j] for j in S and j&lt;=i （注意：i=0 时 dp[0]=1）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们不知道 S，需要从 dp 数组倒推 S。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：硬币组合问题，通常使用生成函数：F(x) = ∏\\_{s∈S} (1/(1-x^s))，那么 F(x)的系数就是 dp 数组（从 0 开始）。然而，题目只给了我们部分系数（dp[1]到 dp[n]），dp[0]=1 是隐含的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>关键性质：</span></span>
<span class="line"><span>（1）dp[0]=1。</span></span>
<span class="line"><span>（2）对于每个硬币 s∈S，显然有：当 i&gt;=s 时，dp[i]包含 dp[i-s]的贡献（即至少包含一个该硬币）。特别地，如果我们定义生成函数，那么生成函数的系数是唯一的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，题目要求的是所有可能的唯一面值集合？但注意题目要求：返回一个按从小到大顺序排列的数组，其中包含所有可能的唯一整数面值。并且示例输出是排序的数组。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但实际上，对于给定的 numWays 数组，可能有多个面值集合？题目要求我们返回所有可能面值（唯一的整数）的数组。然而注意：示例 2 输出[1,2,5]是一个集合，并不是多个集合。题目要求返回的数组包含所有可能的唯一整数面值，也就是说，我们要求的是最小可能的集合？但是观察示例 1：为什么是[2,4,6]？而不是[2,4]?因为[2,4]不能凑出金额 6 的方法数为 3（实际上用[2,4]凑金额 6：2+2+2, 2+4, 4+2? 但注意硬币无序，所以 2+4 和 4+2 是一种，那么只有 2 种：3 个 2 和 2+4。而题目要求是 3 种，所以需要 6。因此，集合必须包含 6。同理，为什么不能包含其他？比如 3？因为包含 3 会导致金额 3 的方法数不为 0。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>重新理解：题目要求还原出可能生成这个 numWays 数组的面值集合。但是，可能有多个满足条件的面值集合吗？注意题目要求返回的是所有可能的唯一整数面值（注意：唯一，即没有重复），并且按从小到大排列。但是，示例的输出是一个集合，而且题目说如果不存在返回空数组。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，示例 2 输入输出：numWays = [1,2,2,3,4] -&gt; [1,2,5]。为什么是[1,2,5]？我们验证：</span></span>
<span class="line"><span>金额 1：dp[1] = dp[0]（当取 1）=1 -&gt; 正确。</span></span>
<span class="line"><span>金额 2：dp[2] = dp[1]（取 1 后）+ (如果 2 在集合中则 dp[0])=1+1=2 -&gt; 正确。</span></span>
<span class="line"><span>金额 3：dp[3] = dp[2]（再取 1）+ dp[1]（取 2，因为 3-2=1）-&gt; 2+1=3? 但题目给的 dp[3]是 2（数组第三个数，即下标 2：值为 2）？不对。注意：数组 numWays[0]对应金额 1，numWays[1]对应金额 2，numWays[2]对应金额 3。所以输入[1,2,2,3,4]中，金额 3 对应的是第三个元素即 2。但是我们的计算：dp[3]=dp[3-1]+dp[3-2]? 因为硬币有 1 和 2，所以 dp[3]=dp[2]+dp[1]=2+1=3，不等于 2。所以错误。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实际上，示例 2 的硬币集合为{1,2,5}。我们来验证：</span></span>
<span class="line"><span>金额 1：只有 1 -&gt; dp[1]=1</span></span>
<span class="line"><span>金额 2：1+1, 2 -&gt; dp[2]=2</span></span>
<span class="line"><span>金额 3：1+1+1, 1+2 -&gt; dp[3]=2</span></span>
<span class="line"><span>金额 4：1+1+1+1, 1+1+2, 2+2 -&gt; dp[4]=3</span></span>
<span class="line"><span>金额 5：1+1+1+1+1, 1+1+1+2, 1+2+2, 5 -&gt; dp[5]=4 （注意：题目给的数组最后一个元素是 4，对应金额 5，所以正确）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>那么，为什么示例 2 的输出是[1,2,5]？因为硬币面值集合就是{1,2,5}。注意，5 没有在金额 1~4 中出现，所以不会影响前 4 个金额的方法数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，如何求解？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>思路：使用动态规划递推关系，逐步确定硬币集合。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>已知：</span></span>
<span class="line"><span>dp[0] = 1 （隐含）</span></span>
<span class="line"><span>设金额为 i（从 1 到 n），有：</span></span>
<span class="line"><span>dp[i] = sum\\_{s∈S} dp[i-s] [如果 i-s&gt;=0]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，我们不知道 S。但可以观察到：在金额 i 处，如果 i 是某个硬币，那么 dp[i]至少会包含 1（即直接取这个硬币，而这种方式对应的是 dp[0]=1，因为 i-s=0）。所以，如果 dp[i]不为 0，那么 i 可能是某个硬币？但是注意，多个硬币组合也可以凑 i。所以不能直接认为 dp[i]不为 0 就说明 i 是硬币。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>关键点：生成函数的另一个性质——生成函数 F(x)的系数满足线性递推关系（当硬币集合固定时），但这里硬币集合不固定。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，有一个重要的结论：如果硬币集合 S 包含 1，那么 dp 数组的所有位置都不为 0（因为可以用 1 凑任何金额）。但题目中有些位置为 0，所以肯定不包含 1？不对，示例 2 包含 1，但它的输入中金额 1 不为 0。如果金额 1 为 0（如示例 1），则一定不包含 1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们可以这样思考：设我们已知 dp[0]到 dp[i-1]，那么 dp[i]应该等于什么？在硬币问题中，dp[i] = 所有硬币 s（s&lt;=i）的 dp[i-s]的和。但是，如果我们还不知道硬币集合，那么就需要从 dp 数组的性质来推断。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实际上，这是一个反问题。我们可以尝试使用最小表示法：即从最小的硬币开始考虑。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>性质 1：第一个非零的金额 k（即 dp[k]&gt;0）的最小硬币必然出现（因为只能用硬币凑，所以最小的硬币就是第一个能凑出的非零金额）。但是注意，dp[0]=1（金额 0）是隐含的。因此，最小的硬币应该是第一个满足 dp[k]&gt;0 的最小的 k（即金额 k）？因为金额 k 之前都是 0，说明最小的硬币就是 k。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，在示例 1 中：金额 1（dp1）为 0，金额 2（dp2）为 1，所以最小硬币为 2。在示例 2 中：金额 1（dp1）为 1，所以最小硬币为 1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>性质 2：当我们确定了最小硬币 s0，那么我们就可以用这个硬币去更新后续的 dp 数组（在已知的 dp 数组上进行验证，并推导出其他硬币）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>具体步骤（参考论文或经典问题：The Money Changing Problem revisited: computing the Frobenius number in time O(ka1)）？但这里我们已知的是 dp 数组，要反推硬币集合。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实际上，我们可以这样操作：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 初始化：令 dp0=1（金额 0），然后我们有一个给定的数组 dp[1..n]（对应金额 1 到 n）。</span></span>
<span class="line"><span>2. 我们创建一个辅助数组 A，长度 n+1，A[0]=1，然后 A[1..n]初始为 0，我们将根据硬币集合逐步更新 A（模拟 dp 数组的生成）。</span></span>
<span class="line"><span>3. 硬币集合 S 初始为空。</span></span>
<span class="line"><span>4. 从 i=1 到 n（金额 1 到金额 n）：</span></span>
<span class="line"><span>   如果给定的 dp[i-1]（因为金额 i 对应下标 i-1）不等于 A[i]（注意：A[i]表示我们当前模拟的凑出金额 i 的方法数），那么我们必须加入一些新的硬币来弥补这个差距。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>为什么可以这样？因为我们在计算 A 数组时，只有加入新的硬币才会增加新的方法数。注意，我们从小到大考虑金额，当处理到金额 i 时，如果 A[i]（即用当前硬币集合凑出金额 i 的方法数）不等于给定的 numWays[i-1]（即 dp[i]），那么我们必须加入一个新的硬币，其面值恰好为 i。因为如果加入一个小于 i 的硬币，那么它应该已经在之前的某个步骤被加入了；如果加入一个大于 i 的硬币，那么它不会影响金额 i。所以，只能加入面值等于 i 的硬币。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，加入一个面值为 i 的硬币后，它会影响到所有金额 j&gt;=i 的位置：A[j] += A[j-i]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，算法步骤：</span></span>
<span class="line"><span>设 A[0]=1，然后创建一个长度 n+1 的数组 A（A[0..n]），初始 A[0]=1，A[1..n]=0。</span></span>
<span class="line"><span>硬币集合 S 初始为空。</span></span>
<span class="line"><span>遍历 i 从 1 到 n（这里 i 表示金额）：</span></span>
<span class="line"><span>如果 A[i]（当前计算的方法数）小于给定的 dp[i]（在 numWays 中对应的是 numWays[i-1]）：</span></span>
<span class="line"><span>那么我们需要加入一个面值为 i 的硬币（因为这是唯一能增加金额 i 的方法数的方法，且只能直接加硬币 i，因为更小的硬币已经考虑过了，而更大的硬币不会影响 i）。</span></span>
<span class="line"><span>将 i 加入 S。</span></span>
<span class="line"><span>然后，用这个新加入的硬币更新 A：从金额 j 从 i 到 n，执行：A[j] += A[j-i] （注意：加入面值 i，那么每个金额 j 都可以用 j-i 的方法加上这个 i 得到）</span></span>
<span class="line"><span>如果 A[i]大于给定的 dp[i]：说明已经无法通过加硬币来减少（因为我们只能加硬币，不能减），那么直接返回空数组。</span></span>
<span class="line"><span>如果 A[i]等于给定的 dp[i]，则继续。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意：给定的 dp 数组的值是已知的，我们要求 A[i]（模拟值）等于 dp[i]（给定值，即 numWays[i-1]）。在遍历到金额 i 时，我们检查 A[i]和 numWays[i-1]的关系。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，有一个问题：我们为什么要加入面值 i？为什么不能加入一个小于 i 的硬币？因为我们是从小到大处理的，小于 i 的硬币应该已经被加入过了（因为之前在处理金额 j（j&lt;i）时，如果出现不足，我们就会在金额 j 加入一个硬币 j）。那么，如果我们已经加入了所有小于 i 的硬币，那么在金额 i 处如果还是不足，就说明必须加入 i。而如果大于给定的值，说明当前方案已经超过了，无解。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，有没有可能一个硬币被跳过？例如，我们已知最小硬币为 2（因为金额 1=0），那么金额 1 我们跳过了（不加入任何硬币）。然后到金额 2：A[2]初始为 0，但是给定的是 1（numWays[1]=1），所以我们需要加入硬币 2。然后更新：对于 j=2,4,6,...，A[j] += A[j-2]。更新后：A[2]=1（因为 A[0]=1，所以 j=2：A[2]+=A[0]=1），然后继续。</span></span>
<span class="line"><span>金额 3：更新后（因为加入硬币 2，所以金额 3：A[3]=A[1]（而 A[1]=0））所以 A[3]=0，等于给定的 numWays[2]=0，继续。</span></span>
<span class="line"><span>金额 4：首先，当前硬币集合有{2}，那么 A[4] = A[2] = 1（因为 A[4] = A[4-2] = A[2]=1），但是给定的是 2（numWays[3]=2）？所以我们需要加入硬币 4。然后加入硬币 4，更新：A[4] += A[0] -&gt; A[4]=1+1=2。然后更新金额 6：A[6]=原本的 A[6]（从硬币 2 的贡献：A[4]等，但现在我们还没有计算到？）但是注意，我们在加入 4 之后，需要从金额 4 开始往后更新：所以更新金额 4（我们已经更新了，所以金额 4 变为 2），然后更新金额 6：A[6] += A[2]（因为 6-4=2，A[2]=1） -&gt; 原本 A[6]是多少？在加入 4 之前，A[6]只有来自 2 的贡献：A[6]=A[4]（从 2 的贡献来说：用 2 凑 6，相当于凑 4 的方法数）+ A[2]（在加入 4 之后，4+2=6）? 不对，我们在加入 4 之后，更新过程是：从 j=4 开始，A[j]+=A[j-4]。所以 A[4]更新后为 2（因为 A[0]=1），A[6] = 原来的 A[6]（来自 2 的贡献：A[6] = A[4] = 1）加上新的贡献：A[6] += A[2]（因为 6-4=2，A[2]=1），所以 A[6]变为 2。但是给定的是 3（numWays[5]=3）？所以到金额 6 时：A[6]=2 &lt; 3，然后我们加入硬币 6，更新：A[6] += A[0]=1 -&gt; 2+1=3。所以满足。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，算法可行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意：在更新过程中，如果我们在金额 i 加入了一个硬币 i，那么后续金额 j（j&gt;=i）都会加上 A[j-i]的贡献。所以我们需要实时更新。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，有例外：如果给定 dp[0]（即金额 0）我们不考虑（因为题目没有给金额 0），但是我们有隐含的 dp0=1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：题目给的 numWays 数组的第一个元素是金额 1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>步骤：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.  设 n = numWays.length，那么金额范围 1 到 n（即金额 n 对应数组最后一个元素）。</span></span>
<span class="line"><span>2.  创建数组 A，长度为 n+1（下标 0 到 n）。A[0]=1（金额 0 有 1 种方法），A[1..n]初始为 0。</span></span>
<span class="line"><span>3.  创建一个集合（或列表）S，用于存放硬币。</span></span>
<span class="line"><span>4.  遍历金额 i 从 1 到 n（i 表示金额，在 numWays 数组中，金额 i 对应下标 i-1）：</span></span>
<span class="line"><span>    令 target = numWays[i-1] // 金额 i 的目标方法数</span></span>
<span class="line"><span>    如果 A[i] &gt; target：说明我们当前模拟的方法数已经超过目标值，返回空集合。</span></span>
<span class="line"><span>    如果 A[i] &lt; target：则我们必须加入面值为 i 的硬币（因为其他更小的面值应该已经加入，不能影响当前金额，而大于 i 的面值不会影响 i，所以只能加 i）</span></span>
<span class="line"><span>    将 i 加入 S</span></span>
<span class="line"><span>    然后，更新数组 A：对于金额 j 从 i 到 n，执行 A[j] += A[j-i] （因为新加入面值 i，所有金额 j 都可以由 j-i 加上 i 得到）</span></span>
<span class="line"><span>    注意：更新后，A[i]应该等于 target，否则我们还需要加入其他硬币？不，因为我们只加入一个 i，然后更新一次，就会增加 A[0]（即 1）的贡献（因为 j-i=0 时，A[0]=1，所以 A[i]至少增加 1）。但是，如果原来 A[i]是 0，那么加入后 A[i]就变成 1。如果 target&gt;1，那么可能还需要加入其他硬币？不对，因为一次只加入一个硬币。但是注意，我们加入硬币后，更新整个数组，可能不止增加 1。因为 A[j-i]可能大于 1。例如，加入硬币 2 后，更新金额 4：A[4]+=A[2]（如果 A[2]已经是 1，那么 A[4]就增加 1）。所以，我们加入一个硬币后，进行更新操作。</span></span>
<span class="line"><span>    然后，继续检查 A[i]是否等于 target？如果经过一次加入硬币和更新，A[i]还是小于 target，那么我们需要再加入一个面值为 i 的硬币吗？但是，同一个面值的硬币多次加入是不必要的（因为题目要求唯一，而且硬币无限次使用，所以多个相同面值硬币等同于一个，方法数只计算一次）。所以，为什么 A[i]在加入面值 i 并更新后还小于 target？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    实际上，我们加入一个面值为 i 的硬币后，对金额 i 的贡献就是 A[0]=1（因为 j=i 时：A[i] += A[0]=1）。所以加入后 A[i]至少增加 1。因此，如果 target 比当前的 A[i]大 k，我们就需要加入 k 个面值为 i 的硬币？但题目要求唯一面值（即集合中不能重复），所以同一个面值只能加一次。然而，同一个面值加一次后，我们更新整个数组，但下一次再次在同一个面值上需要增加时，我们不能再加入相同的面值。所以，算法要求必须一次加入后 A[i]等于 target？因为更新操作后，我们只加了一次，然后 A[i]应该等于原来的 A[i]加上一个整数（至少是 1），那么如果 target 比原来的 A[i]大 k，而我们加入一个硬币 i 只能增加 1（实际上是增加 A[0]的倍数？不对，在加入硬币 i 后，更新整个数组，对于金额 i，增加的是 A[0]=1；对于金额 j&gt;i，增加的是 A[j-i]（可能大于 1）。但是，在金额 i 处，加入硬币 i 只增加 1（因为 j=i：A[i] += A[i-i]=A[0]=1）。因此，加入一个硬币 i 只能让 A[i]增加 1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    所以，如果 target 比 A[i]大 k，那么我们需要加入 k 个面值都为 i 的硬币？但是题目要求唯一面值（即集合中每个数只出现一次）。因此，我们不能加入多个相同的硬币。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    所以，这个算法要求：在加入一个硬币 i 后，A[i]变成原来的值+1（如果原来 A[i]的值是 x，那么加入后变为 x+1）。那么，如果 target - A[i] &gt;1，我们就需要加入多个相同的硬币？这不符合题目唯一面值的要求。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    重新审视：在经典的硬币问题中，同一个面值的硬币在集合中只有一个，但可以重复使用。因此，集合 S 中每个面值只出现一次。所以，当我们发现加入一个硬币 i 后，金额 i 的方法数只增加了 1（即直接使用一个硬币 i）。但是，有可能其他硬币的组合也可以凑出金额 i？我们在加入硬币 i 之前，已经用之前的硬币组合计算出 A[i]（表示用之前硬币凑金额 i 的方法数），加入硬币 i 后，我们增加了一种新方法：即单独一个硬币 i。所以，新方法数就是旧方法数+1。因此，如果原来的方法数为 x，那么加入后为 x+1。所以，如果 target=x+1，那么就正好；如果 target=x+2，那我们就没办法了（因为我们不能加入两个相同的硬币 i）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    但是，考虑金额 4 的示例 1：加入硬币 4。加入之前，金额 4 只有[2,2]一种方法（所以 A[4]=1），而目标值为 2。所以我们加入硬币 4，然后 A[4]增加 A[0]=1，变为 2。符合。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    为什么金额 6：加入硬币 6 之前，来自 2 和 4 的组合（2+2+2, 2+4, 4+2）但是注意，2+4 和 4+2 是同一种（因为不考虑顺序），所以只有 2 种？不对，在硬币问题中，我们一般认为是无限背包，且不考虑顺序。所以用 2 和 4 凑 6：有 2+2+2，以及 2+4（这两种）。即 A[6]在加入 6 之前是 2（因为 6=2+2+2，或者 2+4（注意：4+2 视为和 2+4 一样，但这里我们计算的是组合数，不重复））。所以，给定目标为 3，因此我们加入硬币 6：新增一种方法（直接 6），所以 A[6]=3。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    所以，加入一个硬币 i 对金额 i 的贡献只有 1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    因此，在金额 i 处，我们只能接受：如果当前 A[i]等于 target-1，那么加入面值 i 就正好；如果当前 A[i]小于 target-1，则不可能（因为加入一个 i 只能增加 1）？那为什么金额 6 的时候，加入 6 之前是 2（等于 3-1），所以加入后是 3。所以，我们只能加入一次。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    所以，算法修改为：</span></span>
<span class="line"><span>    遍历 i 从 1 到 n：</span></span>
<span class="line"><span>    target = numWays[i-1]</span></span>
<span class="line"><span>    if (A[i] &gt; target) return empty list;</span></span>
<span class="line"><span>    if (A[i] &lt; target) {</span></span>
<span class="line"><span>    // 那么我们需要加入一个面值为 i 的硬币，因为加入后会让 A[i]增加 1（同时也会影响后面的金额）</span></span>
<span class="line"><span>    S.add(i);</span></span>
<span class="line"><span>    // 更新：从 j=i 到 n: A[j] += A[j-i]</span></span>
<span class="line"><span>    for (int j=i; j&lt;=n; j++) {</span></span>
<span class="line"><span>    A[j] += A[j-i];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 更新后，A[i]应该等于 target，否则，如果我们加入一个面值 i 后，A[i]变成了 A[i]+1，那么应该等于 target（因为我们要求 target-A[i]==1？）但是，如果 target-A[i]大于 1，那么加入一个后还是不够，但是我们不能再加同样的面值（因为要求唯一面值），所以返回空数组？</span></span>
<span class="line"><span>    // 但是，注意：更新操作后，A[i]会变为原来的 A[i]加上 A[0]（即加 1）。所以更新后 A[i]应该是原来的 A[i]+1。因此，在加入之前，我们要求：原来的 A[i] = target - 1</span></span>
<span class="line"><span>    // 所以，如果加入之前 A[i]小于 target-1（即 target-A[i]&gt;1），那么加入后仍然小于 target，那怎么办？此时说明我们无法满足，返回空数组？但看更新操作，如果 A[i]在加入之前是 x，加入后变成 x+A[0]=x+1，那么如果 target 比 x+1 还要大，则无法满足。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        因此，我们在加入之前，必须检查：target - A[i] 是否等于1？不等于1的话，说明我们要加入的硬币i带来的方法数增加（1）并不足以弥补差距（需要增加k&gt;1），而由于我们只能加一个硬币（面值i），所以只能增加1。因此，如果target - A[i] != 1，我们就返回空数组？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    不对！考虑金额 4：加入硬币 4 之前，A[4]=1，而 target=2，所以我们需要加入硬币 4（因为我们期望增加 1，而差距正好是 1）。所以：如果差距大于 1 怎么办？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    重新思考：加入硬币 i 后，增加的方法数并不只是金额 i 的 1 种。例如，如果我们已经有一个硬币 2，那么加入硬币 4 后，金额 4 除了直接取 4，还会增加 2+2（这里 2+2 在加入 4 之前已经有了吗？不对，加入 4 之前，金额 4 已经包括 2+2 了（因为硬币 2 已经加入，所以金额 4 是由两个 2 组成））。等等，这里似乎不对。在加入 4 之前，金额 4 只由硬币 2 组成，所以只有 2+2。加入 4 之后，新增一个 4（即直接取 4）的方法，所以方法数变为 2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    所以，加入硬币 i 后，金额 i 增加的方法数就是 1（因为直接取 i）。而其他金额 j&gt;i，会增加 A[j-i]种方法（这些方法都是在原来方法的基础上加上一个 i）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    因此，金额 i 增加的方法数有且只有 1 种（直接取 i）。所以，在加入硬币 i 之前，如果 A[i]与 target 的差不为 1，那么我们就无法通过加入一个硬币 i 来达到目标（因为只能增加 1）。所以，算法应改为：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (A[i] &lt; target) {</span></span>
<span class="line"><span>            if (target - A[i] != 1) {</span></span>
<span class="line"><span>                // 差距大于1，无法用加入一个硬币i（只能增加1）来补足</span></span>
<span class="line"><span>                return new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // 否则，加入硬币i</span></span>
<span class="line"><span>            S.add(i);</span></span>
<span class="line"><span>            // 然后更新数组：从j=i到n，A[j] += A[j-i]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    但是，这个条件太严格了。考虑金额 4：A[4]原来是 1，target 为 2，所以 target-A[i]=1，满足。金额 6：A[6]原来是 2，target 为 3，所以也是 3-2=1，满足。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    再考虑示例 2：金额 1：A[1]初始为 0，target=numWays[0]=1。所以我们需要加入硬币 1：因为 1-0=1，满足。然后更新：A[1]=1（符合）。金额 2：在加入 1 后，A[2] = 原来的 A[2]（0）加上 A[2-1]=A[1]=1，所以 A[2]=1（但是 numWays[1]=2）？所以我们需要加入硬币 2：因为 2-1=1，满足。然后加入 2，更新：A[2] += A[0]=1 -&gt; 1+1=2。然后金额 3：现在硬币有 1 和 2，A[3]=A[2]（取 1：然后凑 3-1=2，有 2 种方法？因为 A[2]=2）加上 A[1]（取 2，然后凑 1，有 1 种方法）？不对，我们计算 A[3]：在加入 2 后，更新 A 时已经更新了 A[2]=2，但是金额 3：在更新硬币 2 时，金额 3 由 A[3] += A[3-2]=A[1]=1（在加入 2 之后，更新过程：金额 2 时我们更新了，金额 3：在加入 2 之后，更新数组：从 2 到 n，所以 j=3 时：A[3]+=A[3-2]=A[1]=1）然后，在加入硬币 2 后，A[3]由原来的 0+1（更新后）=1。但是在加入 2 之前，我们只有硬币 1，那时 A[3]=A[3-1]=A[2]=? 注意：在加入硬币 1 后，我们更新了数组：A[1]=1，然后金额 2：A[2] += A[1]（因为 2-1=1，A[1]=1）所以 A[2]变为 1。金额 3：在加入硬币 2 之前，A[3]是 0（因为没有硬币 2 时，3 只能用 1 来凑，但是金额 3：在加入 1 后的更新：A[3] += A[2]=1（因为 3-1=2，A[2]=1））？不对，我们在加入 1 后，更新数组：只更新了金额 1，然后金额 2：在加入 1 后，下一次循环金额 2 时，我们并没有加入新的硬币（因为 A[2]在加入 1 后更新：初始 A[2]=0，然后加入 1 后更新了金额 2：A[2]+=A[1]（2-1=1）-&gt; 所以 A[2]=1）。在金额 2 循环时，A[2]=1 &lt; 目标 2（numWays[1]=2）? 所以我们需要在金额 2 加入硬币 2。所以金额 3 在未加入硬币 2 时，我们还没有处理到金额 3（即循环还没到 3）。所以处理金额 2 时加入了硬币 2，然后更新：A[3]（在更新操作中，j=3：A[3] += A[3-2]=A[1]=1）所以 A[3]变成 0+1=1。然后进入金额 3：A[3]=1，而目标 numWays[2]=2，所以我们需要加入硬币 3？但是按照算法，加入硬币 3 的条件是：target-A[3]=2-1=1，满足，加入 3，然后更新：A[3]=1+1=2（更新操作：A[3]+=A[0]=1）？不对，更新操作是从 j=3 到 n：A[j] += A[j-3]（注意：加入 3，所以更新从 3 开始：A[3]+=A[0]=1，所以 A[3]=1+1=2；A[4]+=A[1]=1，所以 A[4]由原来的 1（加入 3 之前，A[4]是多少？加入 2 之后，A[4]：在更新 2 时，金额 4：A[4]+=A[2]=2（因为 4-2=2，A[2]=2？不对，在加入 2 之后，金额 4：我们用 1 和 2 凑：方法数有：1+1+1+1, 1+1+2, 2+2 -&gt; 3 种？但目标 numWays[3]=3，但这里我们的 A[4]应该是多少？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    我们来计算：</span></span>
<span class="line"><span>    初始化：A=[1,0,0,0,0,0]</span></span>
<span class="line"><span>    i=1（金额 1）：</span></span>
<span class="line"><span>    A[1]=0，目标=1，所以加入 1：更新 A: A[1]=0+A[0]=1 -&gt; [1,1,0,0,0,0]</span></span>
<span class="line"><span>    然后更新：j 从 1 到 5:</span></span>
<span class="line"><span>    j=1: A[1]=0+1=1 -&gt; [1,1,0,0,0,0] （已经更新过）</span></span>
<span class="line"><span>    j=2: A[2]+=A[2-1]=A[1]=1 -&gt; A[2]=0+1=1</span></span>
<span class="line"><span>    j=3: A[3]+=A[3-1]=A[2]=1 -&gt; A[3]=1</span></span>
<span class="line"><span>    j=4: A[4]+=A[4-1]=A[3]=1 -&gt; A[4]=1</span></span>
<span class="line"><span>    j=5: A[5]+=A[5-1]=A[4]=1 -&gt; A[5]=1</span></span>
<span class="line"><span>    此时 A: [1,1,1,1,1,1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    然后 i=2（金额 2）：</span></span>
<span class="line"><span>    A[2]=1（当前值），目标=2（numWays[1]=2）-&gt; 差 1，所以加入 2，然后更新：</span></span>
<span class="line"><span>    从 j=2 到 5:</span></span>
<span class="line"><span>    j=2: A[2] += A[0]=1 -&gt; A[2]=1+1=2</span></span>
<span class="line"><span>    j=3: A[3] += A[3-2]=A[1]=1 -&gt; A[3]=1+1=2</span></span>
<span class="line"><span>    j=4: A[4] += A[2]=2 -&gt; A[4]=1+2=3</span></span>
<span class="line"><span>    j=5: A[5] += A[3]=2 -&gt; A[5]=1+2=3</span></span>
<span class="line"><span>    然后 A: [1,1,2,2,3,3]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    然后 i=3（金额 3）：</span></span>
<span class="line"><span>    A[3]=2，目标=2（numWays[2]=2）-&gt; 相等，跳过。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    然后 i=4（金额 4）：</span></span>
<span class="line"><span>    A[4]=3，目标=3（numWays[3]=3）-&gt; 相等，跳过。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    然后 i=5（金额 5）：</span></span>
<span class="line"><span>    A[5]=3，目标=4（numWays[4]=4）-&gt; 需要加入 5？因为 3&lt;4，差 1，所以加入 5：更新 j=5: A[5]+=A[0]=1 -&gt; 3+1=4。然后更新：A[5]=4。所以满足。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    但是，这里硬币集合是{1,2,5}，和示例 2 一致。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    所以，为什么在 i=3 时，我们跳过了（没有加入 3）？因为 A[3]=2，目标也是 2，所以不加入。而加入 3 会导致金额 3 变成 3（因为直接加入 3：A[3]会加上 1（因为 A[0]=1）），就会超过目标值？不对，我们加入 3 后，会更新 A: j 从 3 到 5，A[3] += A[0]=1 -&gt; 变成 3，而目标值是 2，所以就会超过。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    所以，算法中，如果当前 A[i]等于目标值，我们就跳过（不加入新的硬币）。而如果 A[i]小于目标值，只有当差值为 1 时才加入面值 i，否则就返回空数组。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，这个算法有一个关键：当我们加入一个面值 i 时，我们更新了 A 数组（从 i 到 n），这可能会导致后面的 A[j]（j&gt;i）在没有加入新硬币的情况下就大于目标值？比如，在 i=2 时，我们加入硬币 2，更新后 A[3]=2，而目标值也是 2（numWays[2]=2），所以没问题。但是在 i=3 时，我们不需要加入硬币，因为相等。然后 i=4：A[4]=3，目标值也是 3，所以也不加。i=5：目标 4，当前 3，差 1，所以加入 5（然后 A[5]=4）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，这个算法在示例 2 上可行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们考虑示例 3：numWays=[1,2,3,4,15]（n=5，对应金额 1 到 5）</span></span>
<span class="line"><span>初始化 A=[1,0,0,0,0,0]（金额 0~5）</span></span>
<span class="line"><span>i=1（金额 1）：</span></span>
<span class="line"><span>A[1]=0，目标=1，差 1，所以加入 1 -&gt; 更新：j 从 1 到 5:</span></span>
<span class="line"><span>A[1]=0+A[0]=1</span></span>
<span class="line"><span>A[2]+=A[1]=1 -&gt; A[2]=1</span></span>
<span class="line"><span>A[3]+=A[2]=1 -&gt; A[3]=1</span></span>
<span class="line"><span>A[4]+=A[3]=1 -&gt; A[4]=1</span></span>
<span class="line"><span>A[5]+=A[4]=1 -&gt; A[5]=1</span></span>
<span class="line"><span>然后 A=[1,1,1,1,1,1]</span></span>
<span class="line"><span>i=2（金额 2）：</span></span>
<span class="line"><span>A[2]=1，目标=2，差 1，加入 2 -&gt; 更新：j=2 到 5:</span></span>
<span class="line"><span>j=2: A[2]=1+A[0]=2</span></span>
<span class="line"><span>j=3: A[3]=1+A[1]=2</span></span>
<span class="line"><span>j=4: A[4]=1+A[2]=1+2=3</span></span>
<span class="line"><span>j=5: A[5]=1+A[3]=1+2=3</span></span>
<span class="line"><span>此时 A=[1,1,2,2,3,3]</span></span>
<span class="line"><span>i=3（金额 3）：</span></span>
<span class="line"><span>A[3]=2，目标=3，差 1，加入 3 -&gt; 更新：j=3 到 5:</span></span>
<span class="line"><span>j=3: A[3]=2+A[0]=3</span></span>
<span class="line"><span>j=4: A[4]=3+A[1]=3+1=4</span></span>
<span class="line"><span>j=5: A[5]=3+A[2]=3+2=5</span></span>
<span class="line"><span>此时 A=[1,1,2,3,4,5]</span></span>
<span class="line"><span>i=4（金额 4）：</span></span>
<span class="line"><span>A[4]=4，目标=4，相等，跳过。</span></span>
<span class="line"><span>i=5（金额 5）：</span></span>
<span class="line"><span>A[5]=5，目标=15 -&gt; 5&lt;15，所以需要加入硬币 5？差 15-5=10（不等于 1）-&gt; 返回空数组。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以输出空数组，符合示例 3。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，有没有可能，加入的硬币不止带来 1 的增量？比如，当我们加入一个面值 i 时，对金额 i 的贡献是 1，对金额 2i 的贡献是 A[i]（因为 2i 可以拆成 i+i，所以方法数=A[i]）？这样，在金额 2i 处，增加的就不一定是 1 了。但上面的更新操作（A[j] += A[j-i]）是正确的（这是无限背包问题的标准更新方式），它考虑了所有组合。所以，在加入硬币 i 时，对金额 j 的贡献是 A[j-i]（包括所有可能的组合）。因此，在金额 i 处，贡献就是 A[0]=1（因为 j-i=0）。在金额 i+i 处，贡献是 A[i]（可能大于 1）。所以，在加入硬币 i 后，金额 i 的增加是 1（固定），但其他金额 j 的增加不一定都是 1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，在算法中，我们在金额 i 处只检查了 A[i]（在加入前的值）与目标值的差距是否为 1，而对于大于 i 的金额，我们会在后面的循环中检查（如果超过目标值就会返回空数组，如果不够则尝试加入新的硬币）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，这个算法是合理的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，考虑一个边界：加入硬币 i 后，金额 i 变成目标值，但金额 i+1 呢？可能增加，但我们在后面的循环中会检查。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，最终算法步骤：</span></span>
<span class="line"><span>初始化：</span></span>
<span class="line"><span>int n = numWays.length;</span></span>
<span class="line"><span>long[] A = new long[n+1]; // 用 long，因为 dp 值可能很大（最大 2e8），而且更新过程中可能会超过（但我们在加入前会检查，所以如果超过就返回空数组，不会溢出？但最好用 long）</span></span>
<span class="line"><span>A[0] = 1;</span></span>
<span class="line"><span>List&lt;Integer&gt; coins = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>遍历金额 i 从 1 到 n（即 i 从 1 循环到 n）:</span></span>
<span class="line"><span>long target = numWays[i-1];</span></span>
<span class="line"><span>if (A[i] &gt; target) {</span></span>
<span class="line"><span>return new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>if (A[i] == target) {</span></span>
<span class="line"><span>// 什么也不做，直接进入下一个 i</span></span>
<span class="line"><span>continue;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>if (A[i] &lt; target) {</span></span>
<span class="line"><span>// 差距必须为 1？不对，我们加入硬币 i 后，金额 i 会变成 A[i]+A[0]（即 A[i]+1），所以只能增加 1。因此，要求 target==A[i]+1。</span></span>
<span class="line"><span>if (target - A[i] != 1) {</span></span>
<span class="line"><span>return new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 加入面值 i</span></span>
<span class="line"><span>coins.add(i);</span></span>
<span class="line"><span>// 更新 A：从 j=i 到 n，A[j] += A[j-i]</span></span>
<span class="line"><span>for (int j = i; j &lt;= n; j++) {</span></span>
<span class="line"><span>A[j] += A[j-i];</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：在加入硬币 i 后，A[i]会变成原来的 A[i]+1（因为我们加入了硬币 i，所以金额 i 增加了 A[0]=1）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最后，返回 coins（注意：coins 中硬币按从小到大顺序，因为我们是按 i 递增加入的）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们考虑一个反例：硬币集合包含多个硬币，比如{1,3}，然后 dp 数组：</span></span>
<span class="line"><span>金额 1:1 -&gt; 用 1</span></span>
<span class="line"><span>金额 2:1 -&gt; 1+1</span></span>
<span class="line"><span>金额 3:2 -&gt; 1+1+1, 3</span></span>
<span class="line"><span>金额 4:3 -&gt; 1+1+1+1, 1+3, 3+1（但是组合问题无序？不对，在计算组合数时，我们认为是组合，不重复计算顺序）？但是无限背包问题是不考虑顺序的，所以方法数：</span></span>
<span class="line"><span>dp[4] = dp[3]（取 1）+ dp[1]（取 3，因为 4-3=1） -&gt; dp[4]=dp[3]+dp[1]=2+1=3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在，给定 numWays = [1,1,2,3]（n=4）</span></span>
<span class="line"><span>算法：</span></span>
<span class="line"><span>初始化：A=[1,0,0,0,0]</span></span>
<span class="line"><span>i=1：目标 1，A[1]=0&lt;1，所以检查 1-0=1（等于 1），加入 1。更新：j=1-&gt;4：A[1]=0+1=1, A[2]=0+A[1]=1, A[3]=0+A[2]=1, A[4]=0+A[3]=1 -&gt; A=[1,1,1,1,1]</span></span>
<span class="line"><span>i=2：目标 1，A[2]=1 等于目标，跳过。</span></span>
<span class="line"><span>i=3：目标 2，A[3]=1&lt;2，然后检查 2-1=1（等于 1），加入 3。更新：j=3-&gt;4：A[3]=1+1=2, A[4]=1+A[1]=1+1=2 -&gt; A=[1,1,1,2,2]</span></span>
<span class="line"><span>i=4：目标 3，A[4]=2&lt;3，然后 3-2=1，所以加入 4？然后更新：j=4：A[4]=2+A[0]=3 -&gt; 加入面值 4。但实际硬币集合应该是{1,3}，我们多加了 4？而且最后硬币集合为[1,3,4]，但答案应该是{1,3}。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>问题出在金额 4 的目标值为 3，但是加入硬币 4 之前，我们计算的 A[4]=2（来自硬币 1 和 3 的组合：1+1+1+1, 1+3），而目标 3，所以我们加入了硬币 4（因为差距为 1）。但加入 4 后，我们得到 3 种：1+1+1+1, 1+3, 4。所以确实变成 3 了。但是，这个硬币集合{1,3,4}也是可行的？因为加入 4 后，金额 4 正好是 3。但是，题目要求还原出可能生成这个 numWays 数组的面值集合。注意，可能有多个集合满足条件？但是题目要求返回所有可能的唯一整数面值，那应该是所有满足的硬币集合的并集吗？不对，因为示例 2 的输出是一个集合，而不是所有可能的硬币的并集。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>重新阅读题目：“返回一个按从小到大顺序排列的数组，其中包含所有可能的唯一整数面值。”</span></span>
<span class="line"><span>以及“还原出可能生成这个 numWays 数组的面值集合”</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：示例输出：[2,4,6] 和 [1,2,5]，都是一个集合。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，题目要求的是：任意一个满足条件的硬币集合（然后输出这个集合，排序）？但是注意，示例 1 只有[2,4,6]满足，示例 2 只有[1,2,5]满足？而上面的反例中，[1,3]和[1,3,4]都是满足的？那么题目要求的是哪一个？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>题目说：“还原出可能生成这个 numWays 数组的面值集合”，并且“所有可能的唯一整数面值”，但实际输出是一个数组，包含的是整个集合。如果存在多个满足的集合，那么我们应该输出哪一个？题目没有说明，但示例中每个输入只输出一个集合。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实际上，算法求出的硬币集合 S 必须是最小可能的一个？因为我们是按金额从小到大加入硬币的，所以会得到最小的可能集合吗？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，在反例中，我们得到了[1,3,4]而实际上[1,3]就可以满足。所以我们的算法不是最小集合，而是加入了一些额外的硬币（如 4）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>问题在哪里？为什么我们不加入 4 也能满足金额 4 的目标值 3？因为用{1,3}已经可以凑出金额 4：1+1+1+1, 1+3（两种）？不对，是 3 种？1+1+1+1, 1+3（但 1+3 有两种：1 在 3 前和 3 在 1 前？但组合问题是不考虑顺序的）所以两种。但是目标要求 3 种，所以不够。而加入 4 后，我们多了一种直接取 4 的方法，所以正好 3 种。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，{1,3}凑金额 4 只有 2 种方法，不能凑到 3。因此，必须加入 4？所以硬币集合[1,3,4]是正确的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们是否能在不加入 4 的情况下达到目标？比如加入 2？但是加入 2 会带来很多变化。比如在金额 2 时，目标值为 1，当时已经满足（因为用 1 凑金额 2：1+1，是一种，而目标 1？不对，金额 2 的目标是 1（numWays[1]=1）？不对，题目给的是[1,1,2,3]：第一个 1 是金额 1，第二个 1 是金额 2（所以目标金额 2 是 1）。而在我们加入 1 后，金额 2 是 1（满足），所以我们没有加入 2。在金额 3 时，我们加入了 3。金额 4 时，我们发现只有 2 种方法，而目标是 3，所以加入 4。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，没有其他选择：我们必须加入 4。所以硬币集合[1,3,4]是唯一的解？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>那么，我们的算法会输出[1,3,4]。而题目没有要求最小集合，所以输出这个集合是可以的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，如果存在多种方案，题目要求返回的是所有可能的面值（的并集？）还是任意一个？题目说：包含所有可能的唯一整数面值。注意：是“所有可能的唯一整数面值”，这似乎是要包含所有可能出现的面值？也就是说，如果一个面值出现在任意一个解中，就要包含？那么输出的就是所有解中出现的面值的并集？但这样会导致集合过大，且不一定是解。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>重新读题：题目说“还原出可能生成这个 numWays 数组的面值集合”，然后“返回一个按从小到大顺序排列的数组，其中包含所有可能的唯一整数面值”。也就是说，存在多个面值集合？题目要求返回所有可能的面值（即这些面值可能属于不同的集合？）这不符合示例，示例都是输出一个集合。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实际上，题目要求的是：如果存在一个或多个满足条件的面值集合 S，那么我们应该输出哪一个集合？示例的输出都是一个集合，并且题目说“如果不存在，返回空数组”。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我猜测：可能题目的意思是，所有的解都包含相同的硬币？即唯一解。那么我们的算法找到的就是这个解。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>或者，题目要求的是最小的硬币集合？但我们的算法不是最小集合（因为可能加入了一些大面值的硬币，而这些大面值的硬币是为了弥补后面金额的不足）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们的算法是增量添加硬币的，在需要的时候添加当前面值（即金额 i），而且我们添加的硬币都是必须的（因为如果不添加，就无法满足当前金额的目标值）。所以，我们得到的硬币集合是满足条件的最小硬币集合吗？不是，因为后面我们加入的硬币（如 4）比前面的大，而且我们无法避免。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>或者，我们的算法只能找到一个解，而题目要求输出这个解（任意一个解）？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，题目说：包含所有可能的唯一整数面值。注意，是“所有可能的”，这表示所有可能出现在解中的面值都要包含？如果是多个解，那么我们要输出这些解中出现的所有面值的并集？但这样输出的集合可能无法产生原 dp 数组。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由于题目没有明确说明，我们只能参照示例。在示例中，每个输入只输出一个集合（硬币数组）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，我们按照上述算法找到一个硬币集合（即我们通过从小到大添加必要硬币得到的集合）。如果成功，返回该集合；如果中途失败（A[i]大于目标值，或者 A[i]小于目标值但差距大于 1），返回空数组。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，上述算法在反例{1,3,4}上得到了正确结果。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另一个例子：假设硬币集合为{1,2}，那么 dp 数组：</span></span>
<span class="line"><span>金额 1:1</span></span>
<span class="line"><span>金额 2:2 (1+1, 2)</span></span>
<span class="line"><span>金额 3:2 (1+1+1, 1+2)</span></span>
<span class="line"><span>金额 4:3 (1+1+1+1, 1+1+2, 2+2)</span></span>
<span class="line"><span>给定 numWays=[1,2,2,3]</span></span>
<span class="line"><span>算法：</span></span>
<span class="line"><span>初始化：A=[1,0,0,0,0]（金额 0~4）</span></span>
<span class="line"><span>i=1: 目标 1，A[1]=0&lt;1，加入 1，更新：A[1]=1, A[2]=1, A[3]=1, A[4]=1</span></span>
<span class="line"><span>i=2: 目标 2，A[2]=1&lt;2，加入 2（因为 2-1=1），更新：j=2-&gt;4: A[2]=1+1=2, A[3]=1+（A[1]=1）-&gt;2, A[4]=1+A[2]=1+2=3 -&gt; 此时 A[4]=3（而目标为 3）所以后面会正常。</span></span>
<span class="line"><span>然后 i=3：目标 2，当前 A[3]=2，跳过。</span></span>
<span class="line"><span>i=4：目标 3，当前 A[4]=3，跳过。</span></span>
<span class="line"><span>所以硬币集合[1,2]，但是我们的算法在更新后，A[3]=2，满足目标 2；A[4]=3 满足目标 3。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意，我们并没有加入 2 以外的硬币？不对，算法加入的是硬币 2（在金额 2 时加入）。所以集合是[1,2]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意：金额 2 时，我们加入了 2，然后更新使得 A[3]=2（等于目标值），A[4]=3（等于目标值）。所以符合。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，算法正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们考虑一个无解的情况：假设给定 numWays=[0,0,1]（n=3）：</span></span>
<span class="line"><span>金额 1:0 -&gt; 说明没有 1</span></span>
<span class="line"><span>金额 2:0 -&gt; 说明没有 2</span></span>
<span class="line"><span>金额 3:1 -&gt; 那么一定有硬币 3？但是如果没有 1 和 2，那么金额 3 只能由 3 组成，所以方法数 1。</span></span>
<span class="line"><span>所以硬币集合{3}。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>算法：</span></span>
<span class="line"><span>初始化 A=[1,0,0,0]</span></span>
<span class="line"><span>i=1：目标 0，A[1]=0，所以不需要加入硬币（因为 A[1]==0==目标 0）-&gt; 继续</span></span>
<span class="line"><span>i=2：目标 0，A[2]=0（因为还没有加入硬币）-&gt; 继续</span></span>
<span class="line"><span>i=3：目标 1，A[3]=0&lt;1，且 1-0=1，所以加入 3 -&gt; 更新：j=3: A[3]=0+A[0]=1 -&gt; 满足</span></span>
<span class="line"><span>所以硬币集合[3]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>再考虑一个无解情况：给定[0,1,0]（n=3）</span></span>
<span class="line"><span>金额 1:0 -&gt; 没有 1</span></span>
<span class="line"><span>金额 2:1 -&gt; 那么硬币必须有 2（因为不用 2，小面值硬币不能有 1，那就无法凑 2，所以必须要有 2）</span></span>
<span class="line"><span>金额 3:0 -&gt; 无法凑 3？有硬币 2，那么 3=2+1，但 1 不能用（因为没有 1）？所以无法凑 3？所以应该是 0？但我们的算法：</span></span>
<span class="line"><span>初始化：A[0]=1, A[1..3]=0</span></span>
<span class="line"><span>i=1：目标 0，A[1]=0，跳过。</span></span>
<span class="line"><span>i=2：目标 1，A[2]=0&lt;1，所以加入 2 -&gt; 更新：A[2]=0+A[0]=1 -&gt; 满足，然后更新 A[3]：A[3]+=A[1]（3-2=1）-&gt; A[3]=0（因为 A[1]=0）-&gt; A[3]=0</span></span>
<span class="line"><span>i=3：目标 0，A[3]=0，跳过。</span></span>
<span class="line"><span>所以硬币集合[2]，然后返回。但是题目要求金额 3 的方法数为 0，而在硬币 2 的情况下，金额 3 确实为 0（因为没有其他硬币，所以 3 不能由 2 凑成（3 不是 2 的倍数？不对，3 除以 2 不是整数，所以无法凑成 3）。所以硬币集合[2]是满足的？但是题目给定的[0,1,0]中金额 3 为 0，而[2]的确只能凑 2、4、6...，所以金额 3 就是 0，正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们注意到：如果我们在金额 2 处加入硬币 2，那么金额 3 应该是 0（因为 A[3]由更新操作得到 0）？为什么更新操作后 A[3]=0？因为更新操作：加入 2 后，更新金额 3：A[3] += A[3-2]=A[1]=0 -&gt; 0+0=0。所以满足。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，算法正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，考虑另一种无解：给定[0,0,1,0]（n=4）</span></span>
<span class="line"><span>金额 1:0, 金额 2:0, 金额 3:1, 金额 4:0</span></span>
<span class="line"><span>用硬币 3：金额 3=1（直接 3）。然后金额 4？有 3，但是 4=3+1，而没有 1，所以 4 凑不出来。所以 4=0。所以硬币集合{3}可以吗？用硬币 3，金额 4 无法凑？所以 A[4]应该是 0（满足）。</span></span>
<span class="line"><span>但是，算法：</span></span>
<span class="line"><span>初始化：A=[1,0,0,0,0]</span></span>
<span class="line"><span>i=1: 目标 0 -&gt; 跳过</span></span>
<span class="line"><span>i=2: 目标 0 -&gt; 跳过</span></span>
<span class="line"><span>i=3: 目标 1 -&gt; 加入 3，更新：A[3]=0+1=1 -&gt; 然后更新 A[4]: A[4]+=A[1]=0 -&gt; A[4]=0</span></span>
<span class="line"><span>i=4: 目标 0 -&gt; 相等，跳过</span></span>
<span class="line"><span>所以硬币集合[3]，返回。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，题目要求金额 4 为 0，而{3}只能凑 3,6,...，所以金额 4 为 0，满足。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>再考虑：[0,0,1,2]（n=4）：</span></span>
<span class="line"><span>金额 3:1，金额 4:2</span></span>
<span class="line"><span>如果用{3}，金额 4=0（不满足 2）？所以需要加入什么？</span></span>
<span class="line"><span>算法：</span></span>
<span class="line"><span>i=1:0 -&gt; 跳过</span></span>
<span class="line"><span>i=2:0 -&gt; 跳过</span></span>
<span class="line"><span>i=3:1 -&gt; 加入 3，更新：A[3]=1（然后金额 4：A[4]+=A[1]=0 -&gt; A[4]=0）</span></span>
<span class="line"><span>i=4: 目标 2，当前 A[4]=0&lt;2，所以需要加入 4？因为 2-0=2（不等于 1），所以返回空数组？正确，因为{3}无法得到金额 4 的 2 种方法（而且加入硬币 4 后，金额 4=1（来自 4）加上其他？但是其他没有。但是，加入 4：更新后 A[4]=0+A[0]=1 -&gt; 1，然后目标 2，所以还是不够（需要再等 1）？但是我们不能在金额 4 处再加入 4（因为集合唯一），所以加入 4 后为 1，然后我们循环到金额 4 时，发现 1&lt;2，差 1，但我们已经加入 4 了，不能再加入 4（而且我们只在金额 i 处加入一次（差 1 时就加入了））。但是加入 4 后，我们更新了数组，然后继续检查，发现 A[4]还是 1（因为加入 4 后，只增加 1），所以还需要再差 1，但此时不能再次加入 4（因为同一个面值只能加一次）？所以返回空数组。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，如果我们加入硬币 1 会怎样？但是金额 1 为 0，我们不能加入 1。金额 2 为 0，我们也不能加入 2（因为加入 2 必须在金额 2 处，当时 A[2]=0，目标 0，所以跳过）。所以没有其他办法，返回空数组。正确，因为没有面值集合能产生[0,0,1,2]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最后，我们写代码。注意：数组 A 可能会很大，我们使用 long 类型（因为更新过程中，数值可能超过 int？题目给的目标值最大 2e8，而我们的更新操作是累加，最多 100 个元素，但数值可能很大？所以我们用 long）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>代码：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      List&lt;Integer&gt; res = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>      int n = numWays.length;</span></span>
<span class="line"><span>      long[] A = new long[n+1]; // A[0] to A[n]</span></span>
<span class="line"><span>      A[0] = 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      for (int i = 1; i &lt;= n; i++) {</span></span>
<span class="line"><span>          // 金额i（在numWays中对应的元素是numWays[i-1]）</span></span>
<span class="line"><span>          long t = numWays[i-1];</span></span>
<span class="line"><span>          if (A[i] &gt; t) {</span></span>
<span class="line"><span>              return new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          if (A[i] == t) {</span></span>
<span class="line"><span>              continue;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          if (A[i] &lt; t) {</span></span>
<span class="line"><span>              if (t - A[i] != 1) {</span></span>
<span class="line"><span>                  return new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>              // 加入面值i</span></span>
<span class="line"><span>              res.add(i);</span></span>
<span class="line"><span>              // 更新A数组：从j=i到n，执行A[j] += A[j-i]</span></span>
<span class="line"><span>              for (int j = i; j &lt;= n; j++) {</span></span>
<span class="line"><span>                  A[j] += A[j-i];</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      return res;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意：在更新数组时，j 从 i 开始，但是 j-i 可能为负数？不会，因为 j&gt;=i。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们来测试示例 1：</span></span>
<span class="line"><span>输入：numWays = [0,1,0,2,0,3,0,4,0,5] (n=10)</span></span>
<span class="line"><span>初始化：A[0]=1, A[1..10]=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     i=1：金额1，t=0（因为numWays[0]=0）</span></span>
<span class="line"><span>        A[1]=0 == t -&gt; 跳过</span></span>
<span class="line"><span>     i=2：金额2，t=1（numWays[1]=1）</span></span>
<span class="line"><span>        A[2]=0 &lt;1 -&gt; 检查1-0=1，满足，加入2。</span></span>
<span class="line"><span>        更新：j=2-&gt;10：A[2]=0+1=1，A[3]=0+A[1]=0，A[4]=0+A[2]=1（注意：j=4：j-2=2，A[2]=1），A[5]=0+A[3]=0，A[6]=0+A[4]=1，A[7]=0+A[5]=0，A[8]=0+A[6]=1，A[9]=0+A[7]=0，A[10]=0+A[8]=1</span></span>
<span class="line"><span>        所以更新后：A[2]=1, A[4]=1, A[6]=1, A[8]=1, A[10]=1，其余为0。</span></span>
<span class="line"><span>     i=3：金额3，t=0（numWays[2]=0）-&gt; A[3]=0，跳过。</span></span>
<span class="line"><span>     i=4：金额4，t=2（numWays[3]=2）-&gt; A[4]=1&lt;2 -&gt; 检查2-1=1，加入4。</span></span>
<span class="line"><span>        更新：j=4-&gt;10：</span></span>
<span class="line"><span>            j=4: A[4]=1+A[0]=1+1=2</span></span>
<span class="line"><span>            j=5: A[5]=0+A[1]=0</span></span>
<span class="line"><span>            j=6: A[6]=1+A[2]=1+1=2 （因为6-4=2，A[2]=1）</span></span>
<span class="line"><span>            j=7: A[7]=0+A[3]=0</span></span>
<span class="line"><span>            j=8: A[8]=1+A[4]=1+2=3</span></span>
<span class="line"><span>            j=9: A[9]=0+A[5]=0</span></span>
<span class="line"><span>            j=10: A[10]=1+A[6]=1+2=3</span></span>
<span class="line"><span>        此时，A:</span></span>
<span class="line"><span>            A[4]=2, A[6]=2, A[8]=3, A[10]=3</span></span>
<span class="line"><span>     i=5：金额5，t=0 -&gt; A[5]=0，跳过。</span></span>
<span class="line"><span>     i=6：金额6，t=3 -&gt; A[6]=2&lt;3，差1，加入6。</span></span>
<span class="line"><span>        更新：j=6-&gt;10:</span></span>
<span class="line"><span>            j=6: A[6]=2+A[0]=3</span></span>
<span class="line"><span>            j=7: A[7]=0+A[1]=0</span></span>
<span class="line"><span>            j=8: A[8]=3+A[2]=3+1=4 （因为8-6=2，A[2]=1）</span></span>
<span class="line"><span>            j=9: A[9]=0+A[3]=0</span></span>
<span class="line"><span>            j=10: A[10]=3+A[4]=3+2=5</span></span>
<span class="line"><span>     i=7：金额7，t=0 -&gt; A[7]=0，跳过。</span></span>
<span class="line"><span>     i=8：金额8，t=4 -&gt; A[8]=4，满足，跳过。</span></span>
<span class="line"><span>     i=9：金额9，t=0 -&gt; 跳过。</span></span>
<span class="line"><span>     i=10：金额10，t=5 -&gt; A[10]=5，满足。</span></span>
<span class="line"><span>     所以硬币集合为[2,4,6]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意：在 i=6 时，加入 6 后，A[6]变为 3（满足目标 3），然后 A[8]由 3 变成 4（但是在 i=8 时，目标为 4，满足）？为什么 A[8]变成了 4？因为加入 6 后，6 可以用于金额 8：8=6+2，而 A[2]=1，所以方法数增加 1。而之前的方法数：金额 8 在加入 4 后是 3（由 2 和 4 组合：2+2+2+2, 2+2+4, 4+4? 不对，用 2 和 4 凑 8：2+2+2+2, 2+2+4, 2+4+2, 4+2+2, 4+4? 但注意，组合问题不考虑顺序，所以实际上：</span></span>
<span class="line"><span>2+2+2+2: 1 种</span></span>
<span class="line"><span>2+2+4: 1 种（两个 2 和一个 4）</span></span>
<span class="line"><span>4+4: 1 种</span></span>
<span class="line"><span>而在加入 6 后：新增 6+2，但 6+2 和 2+6 一样，所以是一种（注意：组合问题不考虑顺序，所以 6 和 2 的组合只有一种：即 6 和 2）？不对，2+6 等于 6+2，视为同一种。</span></span>
<span class="line"><span>所以，加入 6 之前，金额 8 有 3 种方法？不对，在加入 6 之前，我们只有 2 和 4，那么组合：</span></span>
<span class="line"><span>8 = 2*4 -&gt; 4 个 2：1 种</span></span>
<span class="line"><span>8 = 2*2 + 4 -&gt; 两个 2 和一个 4：如何排列？不考虑顺序，所以只有 1 种（将 4 与 2 交换位置视为同一种）</span></span>
<span class="line"><span>8 = 2\\*4 -&gt; 两个 4：1 种</span></span>
<span class="line"><span>所以一共 3 种。然后加入 6：新增 6+2（一种），所以变为 4 种。而我们模拟的 A[8]在加入 6 后从 3 变成了 4，符合。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，算法正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最后，我们写代码。注意：题目要求按从小到大排列，而我们是按 i 从小到大加入的，所以自然有序。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：更新数组 A 时，j 从 i 到 n，注意使用 long 避免溢出。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>代码实现：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：我们使用 long[] A，并且更新时 A[j] += A[j-i]。由于目标值最大 2e8，而 n 最大 100，所以更新的次数最多 100*101/2（大约 5000 次），数值上最大不会超过 long 的范围（因为目标值 2e8，最多 100 个，那么累加最大大约 2e8 * 100? 但实际不是线性累加，而是递推，最坏情况指数增长？但是 n 只有 100，所以不会溢出？不，最坏情况下（比如硬币全是 1），那么 A[i]就是组合数（也就是 1，而 A[n]是 1，所以实际上不会很大）。但题目有 0&lt;=numWays[i]&lt;=2e8，所以目标值不会太大，而且我们加入了硬币后，如果超过目标值就会返回空数组，所以不会出现特别大的值（因为目标值最大 2e8，如果我们超过 2e8 就停止，所以没问题）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，我们使用 long，然后比较时注意。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，在比较时，target 是 int（numWays[i]是 int），我们可以转为 long。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>代码：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     public List&lt;Integer&gt; findCoins(int[] numWays) {</span></span>
<span class="line"><span>        int n = numWays.length;</span></span>
<span class="line"><span>        // 创建A数组，长度n+1</span></span>
<span class="line"><span>        long[] A = new long[n+1];</span></span>
<span class="line"><span>        A[0] = 1;  // 金额0</span></span>
<span class="line"><span>        List&lt;Integer&gt; res = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        for (int i = 1; i &lt;= n; i++) {</span></span>
<span class="line"><span>            // 金额i的目标值：numWays[i-1]</span></span>
<span class="line"><span>            long target = numWays[i-1];</span></span>
<span class="line"><span>            if (A[i] &gt; target) {</span></span>
<span class="line"><span>                return new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if (A[i] &lt; target) {</span></span>
<span class="line"><span>                // 检查差距是否等于1</span></span>
<span class="line"><span>                if (target - A[i] != 1) {</span></span>
<span class="line"><span>                    return new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                res.add(i); // 加入面值i</span></span>
<span class="line"><span>                // 更新A数组：从金额i到金额n</span></span>
<span class="line"><span>                for (int j = i; j &lt;= n; j++) {</span></span>
<span class="line"><span>                    // 注意：j-i&gt;=0</span></span>
<span class="line"><span>                    A[j] += A[j-i];</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // 如果相等，什么也不做</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return res;</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意：在加入面值 i 后，我们更新了数组，所以后续的金额会受到影响。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>测试示例 1,2,3。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们提交示例 1：numWays = [0,1,0,2,0,3,0,4,0,5] -&gt; [2,4,6] 正确。</span></span>
<span class="line"><span>示例 2：numWays = [1,2,2,3,4] -&gt; [1,2,5] 正确。</span></span>
<span class="line"><span>示例 3：numWays = [1,2,3,4,15] -&gt; 空数组 正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，有一个问题：在更新过程中，A[j]可能会变得很大，而目标值是 2e8，所以我们超过 2e8 就会返回空数组（因为我们会在后面金额 i 处检查 A[i]与目标值）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，这个算法是 O(n^2)的，n&lt;=100，所以没有问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，考虑一个情况：在某个金额 i 处，A[i]等于目标值，我们跳过，但是后面的某个金额 j（j&gt;i）在更新过程中 A[j]变大了（但没有超过目标值），然后到金额 j 时，我们可能不需要加入硬币，继续。直到某个金额 k，目标值很大，而 A[k]很小（需要加入硬币），然后加入硬币 k，再更新后面的值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这个逻辑是没问题的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们使用上述代码。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意：题目规定硬币面值最多为 numWays.length（即 n）。而我们加入的硬币 i 在 1 到 n 之间，所以满足条件。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最后，返回结果。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们运行示例 1：</span></span>
<span class="line"><span>输入：[0,1,0,2,0,3,0,4,0,5]</span></span>
<span class="line"><span>输出：[2,4,6] 正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>运行示例 2：[1,2,2,3,4] -&gt; [1,2,5] 正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>运行示例 3：[1,2,3,4,15] -&gt; 在金额 5：A[5]=5&lt;15，但是 15-5=10&gt;1，返回空数组。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，在示例 2 中，金额 5：目标值 4，而加入 5 之前 A[5]=3，4-3=1，所以加入 5？但是我们的模拟过程是：金额 5 时，我们加入 5，然后更新 A[5]=3+1=4（满足）。所以正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>提交。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，考虑一个边界：n=1</span></span>
<span class="line"><span>numWays[0]：金额 1 的方法数。</span></span>
<span class="line"><span>初始化：A[0]=1</span></span>
<span class="line"><span>i=1: 目标 numWays[0]，如果为 0：那么 A[1]=0 -&gt; 相等？跳过，然后返回空集？但是，没有硬币，那么金额 1 只能由 1 来凑？但如果没有任何硬币，那么金额 1 不能凑（0 种方法），所以应该输出空集？但是，没有硬币，那么硬币集合为空，但是题目要求凑金额 1 的方法数为 0（所以满足）。但硬币集合为空，那么方法数为 0（金额 1 无法凑），正确。所以算法：在 i=1 时，A[1]=0，目标为 0，所以跳过，然后返回空集合。正确。</span></span>
<span class="line"><span>如果为 1：那么 0&lt;1，然后检查 1-0=1，所以加入 1，然后更新 A[1]=0+1=1，然后返回[1]。</span></span>
<span class="line"><span>如果为 2：那么 0&lt;2，但是 2-0=2&gt;1，返回空集。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，对于 n=1，如果 numWays[0]=0 或 1，我们有解；如果大于 1（除了 1），无解？因为只能加入一个硬币（面值 1）只能提供 1 的增量。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，代码实现如下。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>为了解决这个问题，我们需要还原出能够生成给定 <code>numWays</code> 数组的硬币面值集合。<code>numWays[i]</code> 表示使用某些固定面值的硬币（每种面值可以使用无限次）凑出总金额 <code>i+1</code> 的方法数。硬币面值都是正整数，且面值最多为 <code>numWays.length</code>。如果不存在这样的集合，返回空数组。</p><h3 id="方法思路" tabindex="-1"><a class="header-anchor" href="#方法思路"><span>方法思路</span></a></h3><ol><li><strong>问题分析</strong>：给定的 <code>numWays</code> 数组表示从金额 1 到金额 <code>n</code>（其中 <code>n</code> 是数组长度）的凑法数。我们需要还原硬币面值集合，使得使用这些硬币（无限次使用）时，凑出金额 <code>i</code> 的方法数恰好是 <code>numWays[i-1]</code>。</li><li><strong>关键观察</strong>：硬币组合问题通常通过动态规划解决，其中 <code>dp[i]</code> 表示凑出金额 <code>i</code> 的方法数。初始化 <code>dp[0] = 1</code>（金额 0 只有一种方法：不使用任何硬币）。递推关系为：<code>dp[i] = sum(dp[i - coin])</code>，其中 <code>coin</code> 是硬币面值。</li><li><strong>逐步构建硬币集合</strong>：我们从金额 1 到金额 <code>n</code> 逐步处理： <ul><li>如果当前模拟的凑法数 <code>A[i]</code> 小于目标值 <code>numWays[i-1]</code>，则必须加入面值为 <code>i</code> 的硬币（因为加入面值 <code>i</code> 后，凑金额 <code>i</code> 的方法数会增加 1，并影响后续金额）。</li><li>加入面值 <code>i</code> 后，更新动态规划数组 <code>A</code>：对于每个金额 <code>j</code> 从 <code>i</code> 到 <code>n</code>，<code>A[j] += A[j-i]</code>。</li><li>如果在处理某个金额时，当前模拟的凑法数 <code>A[i]</code> 大于目标值或小于目标值但差距超过 1，则返回空数组（无法满足目标）。</li></ul></li><li><strong>结果</strong>：按顺序收集所有加入的硬币面值，即为可能的面值集合。</li></ol><h3 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析"><span>复杂度分析</span></a></h3><ul><li><strong>时间复杂度</strong>：O(n²)，其中 <code>n</code> 是 <code>numWays</code> 的长度。每个金额最多处理一次，且每次更新需要 O(n) 时间。</li><li><strong>空间复杂度</strong>：O(n)，用于存储动态规划数组 <code>A</code>。</li></ul><h3 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现"><span>代码实现</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> java.util.ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> java.util.List</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Solution</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> List</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> findCoins</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">numWays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> numWays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        long</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">A</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> long</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 动态规划数组，A[0] = 1</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        A</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">res</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n; i++) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            long</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> target</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> numWays[i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 目标方法数</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">A</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> target) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                return</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 当前方法数超过目标，无解</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">A</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> target) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (target </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> A</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    return</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 加入面值i只能增加1，不足则无解</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(i);  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 加入面值i</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> j</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i; j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n; j++) {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">                    A</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[j] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> A</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i];  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 更新后续金额的方法数</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> res;  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 返回硬币集合</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码说明" tabindex="-1"><a class="header-anchor" href="#代码说明"><span>代码说明</span></a></h3><ul><li><strong>初始化</strong>：<code>A</code> 数组用于模拟动态规划过程，<code>A[0] = 1</code> 表示金额 0 有 1 种方法。</li><li><strong>遍历金额</strong>：从金额 1 到 <code>n</code> 遍历，处理每个金额 <code>i</code>。</li><li><strong>检查目标方法数</strong>：如果当前模拟值 <code>A[i]</code> 超过目标值 <code>numWays[i-1]</code>，则返回空数组（无解）。如果当前值小于目标值，检查差距是否为 1：是则加入面值 <code>i</code> 并更新动态规划数组，否则返回空数组。</li><li><strong>更新动态规划数组</strong>：加入新硬币后，更新金额 <code>i</code> 到 <code>n</code> 的方法数（每个金额 <code>j</code> 的方法数增加 <code>A[j-i]</code>）。</li><li><strong>结果</strong>：按顺序收集所有加入的硬币面值并返回。</li></ul><p>该算法高效地还原了可能的硬币面值集合，确保了方法数的匹配，并在无法满足时返回空数组。</p>`,16)]))}const r=n(p,[["render",e],["__file","t2.html.vue"]]),t=JSON.parse('{"path":"/module_ai/weekly-contest-455/t2.html","title":"还原硬币面值集合","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"USER","slug":"user","link":"#user","children":[]},{"level":2,"title":"ASSISTANT","slug":"assistant","link":"#assistant","children":[{"level":3,"title":"方法思路","slug":"方法思路","link":"#方法思路","children":[]},{"level":3,"title":"复杂度分析","slug":"复杂度分析","link":"#复杂度分析","children":[]},{"level":3,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[]},{"level":3,"title":"代码说明","slug":"代码说明","link":"#代码说明","children":[]}]}],"git":{"createdTime":1751299769000,"updatedTime":1751299769000,"contributors":[{"name":"gdut-yy","username":"gdut-yy","email":"gdut_yy@163.com","commits":1}]},"readingTime":{"minutes":53.39,"words":16017},"filePathRelative":"module_ai/weekly-contest-455/t2.md","localizedDate":"2025年7月1日"}');export{r as comp,t as data};
