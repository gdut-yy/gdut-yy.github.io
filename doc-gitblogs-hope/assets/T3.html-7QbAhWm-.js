import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as p}from"./app-D75trwlE.js";const l={};function e(d,s){return p(),a("div",null,s[0]||(s[0]=[i(`<h1 id="数组分-k-子数组最小最大异或" tabindex="-1"><a class="header-anchor" href="#数组分-k-子数组最小最大异或"><span>数组分 k 子数组最小最大异或</span></a></h1><ul><li>会话记录：<a href="https://yuanbao.tencent.com/chat/naQivTmsDa/0df57df8-afbd-4a5e-bd64-1c22e0d0b539" target="_blank" rel="noopener noreferrer">https://yuanbao.tencent.com/chat/naQivTmsDa/0df57df8-afbd-4a5e-bd64-1c22e0d0b539</a></li><li>无修改 AC。</li></ul><h2 id="user" tabindex="-1"><a class="header-anchor" href="#user"><span>USER</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>给你一个整数数组 nums 和一个整数 k。</span></span>
<span class="line"><span>你的任务是将 nums 分成 k 个非空的 子数组 。对每个子数组，计算其所有元素的按位 XOR 值。</span></span>
<span class="line"><span>返回这 k 个子数组中 最大 XOR 的 最小值 。</span></span>
<span class="line"><span>子数组 是数组中连续的 非空 元素序列。</span></span>
<span class="line"><span>示例 1：</span></span>
<span class="line"><span>输入： nums = [1,2,3], k = 2</span></span>
<span class="line"><span>输出： 1</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>最优划分是 [1] 和 [2, 3]。</span></span>
<span class="line"><span>第一个子数组的 XOR 是 1。</span></span>
<span class="line"><span>第二个子数组的 XOR 是 2 XOR 3 = 1。</span></span>
<span class="line"><span>子数组中最大的 XOR 是 1，是最小可能值。</span></span>
<span class="line"><span>示例 2：</span></span>
<span class="line"><span>输入： nums = [2,3,3,2], k = 3</span></span>
<span class="line"><span>输出： 2</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>最优划分是 [2]、[3, 3] 和 [2]。</span></span>
<span class="line"><span>第一个子数组的 XOR 是 2。</span></span>
<span class="line"><span>第二个子数组的 XOR 是 3 XOR 3 = 0。</span></span>
<span class="line"><span>第三个子数组的 XOR 是 2。</span></span>
<span class="line"><span>子数组中最大的 XOR 是 2，是最小可能值。</span></span>
<span class="line"><span>示例 3：</span></span>
<span class="line"><span>输入： nums = [1,1,2,3,1], k = 2</span></span>
<span class="line"><span>输出： 0</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>最优划分是 [1, 1] 和 [2, 3, 1]。</span></span>
<span class="line"><span>第一个子数组的 XOR 是 1 XOR 1 = 0。</span></span>
<span class="line"><span>第二个子数组的 XOR 是 2 XOR 3 XOR 1 = 0。</span></span>
<span class="line"><span>子数组中最大的 XOR 是 0，是最小可能值。</span></span>
<span class="line"><span>提示：</span></span>
<span class="line"><span>1 &lt;= nums.length &lt;= 250</span></span>
<span class="line"><span>1 &lt;= nums[i] &lt;= 10^9</span></span>
<span class="line"><span>1 &lt;= k &lt;= n</span></span>
<span class="line"><span>\`\`java</span></span>
<span class="line"><span>class Solution {</span></span>
<span class="line"><span>    public int minXor(int[] nums, int k) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="assistant" tabindex="-1"><a class="header-anchor" href="#assistant"><span>ASSISTANT</span></a></h2><details class="hint-container details"><summary>已深度思考(用时5分8秒)</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>我们要求将数组分成 k 个非空的连续子数组，使得所有子数组的 XOR 值中的最大值尽可能小，并返回这个最小值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>思路：</span></span>
<span class="line"><span>我们可以使用二分查找。二分查找的对象是“最大 XOR 的最小可能值”。设这个值为 X，我们希望找到一个最小的 X，使得数组可以被分成 k 个连续子数组，且每个子数组的 XOR 值都不超过 X。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>二分查找的步骤：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.  确定二分边界。XOR 的最大值最小可能是 0（当子数组内所有数异或为 0），最大可能是整个数组的异或（如果 k=1）或者数组中的最大值（因为非空子数组的最小异或和可能是 0，但最大值至少是整个数组的最大元素？但是注意，数组元素为正整数，所以最大值至少是数组中的最大值？）但是，由于我们要求最大值的最小值，我们可以将上界设为整个数组的异或值（因为整个数组异或值可能是最大值）？然而，实际上当 k&gt;=2 时，最大值不会超过整个数组的最大值吗？不一定，比如[1,2,3]整个数组异或为 0，但最大值的下限是 1。但是，我们注意到，由于子数组是连续的，所以每个子数组的异或值可能是任意值，但最大值的最小值一定在[0, total_xor]之间吗？注意：total_xor 是数组所有元素的异或，但当我们分成多个子数组时，每个子数组的异或值的范围可能是[0, M]，其中 M 是数组中元素的最大值？但实际可能更大，因为两个数异或可能更大。所以，我们需要一个上界。一个安全的上界是取所有数的异或和所有数的最大值中的较大值？但实际上，数组中元素最大为 10^9，那么异或最大值不会超过 2^30（因为 10^9&lt;2^30），所以我们可以设上界为 2^31-1。但为了精确，我们可以计算整个数组的异或最大值，但注意，当我们分成多个子数组时，一个子数组的异或值可能超过整个数组的异或值。例如，[1, 2, 4]整个数组异或是 7，但子数组[4]的异或就是 4，而[1,2]的异或为 3。然而，如果数组中有两个很大的数，那么一个子数组的异或可能很大。因此，我们可以将上界设为所有元素的最大值？不对，因为两个数异或可能会大于最大值（例如：3 和 5 异或是 6&gt;5）。因此，上界可以设为数组中所有元素按位或的结果再乘以 2？或者直接设为 (1&lt;&lt;31)-1（即整型最大值的一半，因为异或不会超过这个范围？）。由于 nums[i]&lt;=10^9，最大也就是约 2^30，所以异或最大值不会超过 2^31-1，所以我们可以设上界为 1&lt;&lt;31（即 2^31），然后二分查找。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2.  我们设定下界 low=0，上界 high = (1&lt;&lt;31) （或者可以遍历数组，取最大值 max，然后上界为 max*(max 的二进制位数)？但更简单的是直接取一个安全的上界，比如 1&lt;&lt;31，因为 2^31&gt;10^9*2，所以安全）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.  然后我们检查 mid = (low+high)/2 是否可行。可行意味着：我们能否将数组分成 k 个连续子数组，使得每个子数组的异或值都不超过 mid。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4.  如何检查一个 X 是否可行？</span></span>
<span class="line"><span>    我们可以使用动态规划或贪心（这里用贪心计数）：</span></span>
<span class="line"><span>    我们遍历数组，维护当前子数组的异或值，同时计数当前已经分出的子数组个数。</span></span>
<span class="line"><span>    我们尝试将数组尽可能多地分成异或值&lt;=X 的子数组。具体做法： - 初始化 count=0（表示已经分了多少个子数组），cur=0（当前子数组的异或值）。 - 遍历数组元素 num：</span></span>
<span class="line"><span>    cur = cur ^ num</span></span>
<span class="line"><span>    // 如果当前 cur&lt;=X，那么我们可以以当前位置为子数组的结尾吗？注意：我们要求子数组非空且连续。</span></span>
<span class="line"><span>    // 但是，如果当前 cur&lt;=X，我们不一定马上切断，因为后面的元素可能使得 cur 更小？但注意：我们要求每个子数组的异或值不超过 X，而且我们希望尽可能少地分子数组（因为要求至少 k 个，所以我们希望用尽可能多的子数组来满足条件，但这里我们要检查的是在 X 的条件下，最多能分成多少个子数组？不对，实际上我们要保证每个子数组的异或值&lt;=X，并且至少能分成 k 个？不对，我们需要将数组分成恰好 k 个非空连续子数组，同时每个子数组的异或值&lt;=X。但是我们可以检查在 X 的限制下，最少需要分成多少个子数组？不对，我们可以用贪心：如果当前子数组的异或值超过 X，我们就要在之前的位置切断，但这样很难，因为异或具有后效性。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    更好的方法是：我们想要验证 X 是否可行，即是否存在一种分法，分成 k 段，每段异或值都&lt;=X。</span></span>
<span class="line"><span>    我们可以用动态规划：</span></span>
<span class="line"><span>    dp[i]表示前 i 个元素（i 从 0 到 n）最少能分成多少段，使得每段异或值&lt;=X。</span></span>
<span class="line"><span>    转移：dp[0]=0</span></span>
<span class="line"><span>    for i from 1 to n:</span></span>
<span class="line"><span>    dp[i] = min{ dp[j] + 1 } for j in [0,i) and (xor[j+1...i] &lt;= X)</span></span>
<span class="line"><span>    然后如果 dp[n] &lt;= k，说明可行（注意，我们分成 k 段，但 dp[n]表示最少段数，如果 dp[n]&lt;=k，那么我们可以将其中一些段再拆开（因为拆开一段不会使异或值增大，因为异或值可能变小或不变，但我们的条件是&lt;=X，所以拆开后仍然满足）？不对，拆开可能导致更多的段数，但我们要的是恰好 k 段。然而，如果我们能证明：在满足每段异或&lt;=X 的条件下，最小段数为 m，且 m&lt;=k，那么我们可以将其中一段拆成多段（但拆分一段后，该段的异或值会变成两个新的异或值，这两个新的异或值不一定都&lt;=X，所以不能随意拆分）。因此，我们需要的是 dp[n]&lt;=k，但需要保证在段数允许的情况下，我们能否刚好分成 k 段？实际上，如果最小段数 m&lt;=k，那么我们可以将一段拆成两段：在任意位置切断，但是切断后的两段的异或值 a 和 b，不一定同时满足&lt;=X（因为切断后，a 和 b 是未知的）。因此，我们需要换一种思路。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    另一种方法是：用贪心从左到右扫描，计算在 X 的限制下，最多可以分成多少段（但要求每段异或值&lt;=X）？注意，我们想分成至少 k 段，但实际上我们要刚好 k 段。所以如果我们能够将数组分成 m 段（每段异或值&lt;=X），且 m&gt;=k，那么我们就可以通过合并一些段来达到 k 段？但是合并后的段的异或值可能会超过 X（因为合并后的异或值等于两个段的异或值异或？不对，注意：合并两个连续的段，新段的异或值等于这两个段的异或值的异或。但这是正确的吗？例如，第一段是 a1...ai，第二段是 ai+1...aj，那么合并后异或值为( a1^...^ai ) ^ ( ai+1^...^aj ) = (a1^...^aj)。但是，我们要求新段的异或值不能超过 X。但可能 (a1^...^aj) &gt; X，所以合并后可能超过 X。因此，我们不能随意合并。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    所以，我们实际上需要的是：在 X 的条件下，至少需要多少段才能保证每段异或值都不超过 X？设这个最小段数为 m。那么如果 m&lt;=k，说明我们可以在某些地方少切几刀，从而合并一些段（但不能超过 X 的条件），但是合并操作可能导致某个段的异或值超过 X，因此不可行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    重新思考：我们想要判断是否存在一种分法，将数组分成恰好 k 段，且每段异或值&lt;=X。我们可以用动态规划：</span></span>
<span class="line"><span>    dp[i][j]表示前 i 个元素分成 j 段是否可行（j 从 1 到 k）。</span></span>
<span class="line"><span>    转移：dp[i][j] = OR\\_{p from 0 to i-1} { dp[p][j-1] and (xor[p+1...i] &lt;= X) }</span></span>
<span class="line"><span>    但这样时间复杂度为 O(n^2*k)，而 n 最大为 250，k 最大也为 250，所以最坏情况大约为 250*250\\*250=15,625,000，在 Java 中可能勉强通过？但是我们可以优化一下，使用一维 DP，因为 j 只依赖于 j-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        具体：</span></span>
<span class="line"><span>          dp[j]表示分成j段时，最远能处理到的位置？或者我们定义为布尔数组：dp[i]表示前i个元素是否可以被分成若干段（每段异或值&lt;=X）？但我们需要控制段数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        我们改为：</span></span>
<span class="line"><span>          dp[k][i] = 前i个元素是否能够被分成k段（每段异或值&lt;=X）？这样k最多250，i最多250，所以空间和时间都是O(n*k)，可以接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        但是，我们也可以反过来：我们想知道在X的限制下，是否能够将数组分成k段。我们可以这样：</span></span>
<span class="line"><span>          dp[i] = 在考虑前i个元素的情况下，能够分的最少段数（每段异或值&lt;=X），那么如果dp[n]&lt;=k，说明可以分成不多于k段（然后我们要恰好k段，但注意：如果我们分成了m段（m&lt;k），那么我们可以将一段拆成两段：只要在一个位置切一刀，并且被切开的两个子数组的异或值都&lt;=X，我们就可以拆。但问题是，我们无法保证切开后两个异或值都&lt;=X。所以，我们要求的是dp[n]必须等于k？不对，因为如果我们能够分成k段，那么最小段数m一定&lt;=k？但最小段数m&lt;=k并不意味着我们一定能安排成k段。例如，最小段数m=3，而k=5，那么我们可能需要将一些段拆分，但拆分可能会超过X，所以不可行。因此，最小段数m必须恰好等于k？也不对。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    重新考虑：我们实际要求的是是否存在一种分法，能够将数组分成恰好 k 段，且每段异或值都不超过 X。因此，我们可以用 dp[i][j]表示前 i 个元素分成 j 段是否可行（布尔值）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        dp[0][0] = true （前0个元素分成0段是可行的）</span></span>
<span class="line"><span>        for i from 1 to n:</span></span>
<span class="line"><span>            for j from 1 to min(i, k):</span></span>
<span class="line"><span>                dp[i][j] = false</span></span>
<span class="line"><span>                for p from 0 to i-1:  // 最后一段从p+1到i</span></span>
<span class="line"><span>                    if dp[p][j-1] is true and (xor[p+1]^...^xor[i])&lt;=X:</span></span>
<span class="line"><span>                        dp[i][j]=true; break</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        然后检查dp[n][k]是否为true。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    但是，我们需要计算区间异或值。我们可以预处理前缀异或数组 prexor，其中 prexor[i]=nums[0]^nums[1]^...^nums[i-1]（前 i 个元素的异或），则区间[l, r]的异或值 = prexor[r+1]^prexor[l]（因为 prexor[r+1]是前 r+1 个元素，prexor[l]是前 l 个元素）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        prexor[0]=0</span></span>
<span class="line"><span>        for i from 1 to n:</span></span>
<span class="line"><span>            prexor[i] = prexor[i-1]^nums[i-1]</span></span>
<span class="line"><span>        则从p+1到i的异或值 = prexor[i]^prexor[p]   （注意：数组下标从0开始，nums[0]到nums[n-1]）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        p在区间[0, i-1]：那么最后一段是p+1到i（在nums中对应索引p到i-1），异或值为prexor[i]^prexor[p]（因为prexor[i]是前i个元素的异或，prexor[p]是前p个元素的异或，两者异或就是p到i-1的异或）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    这样，动态规划的时间复杂度为 O(n^2 * k)，而 n 最大为 250，k 最大为 250，所以 n*k=250*250=62500，然后内层循环 n，所以总操作数大约 62500*250=15,625,000，在 Java 中可能刚好能过（因为 15e6 次操作）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5.  二分边界：low=0, high=上界（例如 1&lt;&lt;31），然后进行二分查找：</span></span>
<span class="line"><span>    while (low &lt; high) {</span></span>
<span class="line"><span>    mid = low + (high-low)/2;</span></span>
<span class="line"><span>    if (check(mid, nums, k)) { // 检查 mid 是否可行，即能否将数组分成 k 段，每段异或&lt;=mid</span></span>
<span class="line"><span>    high = mid;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>    low = mid+1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return low;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>6.  注意：我们二分的是“最大 XOR 的最小可能值”，因此如果 mid 可行，那么答案&lt;=mid，否则答案&gt;=mid+1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们也可以考虑另一种动态规划：用一维 DP 优化，因为当我们固定 j（段数）时，dp[i]（前 i 个元素分成 j 段可行）依赖于之前的状态。但这里我们需要两层循环：外层为段数，内层为 i。所以空间可以是 O(n)，时间 O(n^2\\*k)。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，我们注意到，k 最大为 250，n 最大为 250，所以 O(n^2\\*k)的最大操作数约为 15e6，这在 Java 中是可以接受的（一般 1e8 以内都可以）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们这样实现： 1. 预处理 prexor 数组。 2. 二分查找：low=0, high=(1&lt;&lt;31) 3. check(mid)函数：</span></span>
<span class="line"><span>// 初始化 dp 数组：dp[i]表示前 i 个元素分成 j 段是否可行（这里 j 从 0 开始递增，但是我们用二维数组 dp[j][i]更清晰，因为要分 k 段）</span></span>
<span class="line"><span>// 我们只需要 dp[j]依赖于 dp[j-1]，因此可以优化空间：用两个一维数组，或者一个二维数组，但 k 不超过 250，所以用二维数组 dp[k+1][n+1]。</span></span>
<span class="line"><span>// dp[j][i]：前 i 个元素分成 j 段是否可行（i 从 0 到 n）</span></span>
<span class="line"><span>// 初始化：dp[0][0]=true，其余为 false。</span></span>
<span class="line"><span>// 然后 j 从 1 到 k：</span></span>
<span class="line"><span>// i 从 j 到 n（因为至少 j 个元素才能分成 j 段）</span></span>
<span class="line"><span>// 遍历 p 从 j-1 到 i-1：表示最后一段的起点是 p（前 p 个元素已经分成 j-1 段，最后一段从 p 到 i-1，注意数组从 0 开始）</span></span>
<span class="line"><span>// 如果 dp[j-1][p]为 true，并且区间异或值=prexor[i]^prexor[p] &lt;= mid，那么 dp[j][i]=true，然后跳出内层循环（或者继续检查其他 p？但是我们可以用一个内层循环）</span></span>
<span class="line"><span>// 最后返回 dp[k][n]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    但是，这样三重循环（j, i, p）的复杂度是O(k * n^2)，即250*250*250=15,625,000，大约15e6，在Java中应该可以接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>7.  优化点：在第二层循环 i 中，p 的范围是[j-1, i-1]。另外，在判断 p 时，我们可以提前计算区间异或值（通过预处理的 prexor）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>8.  注意：如果整个数组的最小分段的段数（每段&lt;=mid）的最小段数小于 k？实际上我们检查的是能否分成 k 段，所以只要存在一种分法满足 k 段且每段&lt;=mid，就返回 true。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>9.  另一种思路：在 check(mid)时，我们可以贪心：用最少的段数来分，然后判断最少段数是否&lt;=k？但是，这里不能用贪心，因为异或没有单调性。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们采用动态规划。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>10. 代码实现：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int n = nums.length;</span></span>
<span class="line"><span>    int[] prexor = new int[n+1];</span></span>
<span class="line"><span>    for (int i=1; i&lt;=n; i++) {</span></span>
<span class="line"><span>    prexor[i] = prexor[i-1] ^ nums[i-1];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 二分查找</span></span>
<span class="line"><span>    int low = 0, high = 1&lt;&lt;30; // 因为 10^9&lt;2^30，所以 2^30 足够（题目中最大值 10^9，异或后最大不会超过 2^31-1，但这里我们取 2^30 已经足够，因为两个 2^30 以下的数异或不会超过 2^31-1，但为了安全可以取 2^31，不过 2^30 已经比 10^9 大了，所以没问题）</span></span>
<span class="line"><span>    while (low &lt; high) {</span></span>
<span class="line"><span>    int mid = low + (high-low)/2;</span></span>
<span class="line"><span>    if (check(mid, prexor, n, k)) {</span></span>
<span class="line"><span>    high = mid;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>    low = mid+1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return low;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    check 函数：</span></span>
<span class="line"><span>    private boolean check(int mid, int[] prexor, int n, int k) {</span></span>
<span class="line"><span>    // dp[i][j]：前 i 个元素分成 j 段是否可行</span></span>
<span class="line"><span>    boolean[][] dp = new boolean[n+1][k+1];</span></span>
<span class="line"><span>    dp[0][0] = true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           // 枚举段数j从1到k</span></span>
<span class="line"><span>           for (int j=1; j&lt;=k; j++) {</span></span>
<span class="line"><span>               // 当前段数j，那么至少需要j个元素</span></span>
<span class="line"><span>               for (int i=j; i&lt;=n; i++) {</span></span>
<span class="line"><span>                   // 枚举最后一段的起始位置的前一个位置p（即前p个元素被分成了j-1段，最后一段是[p, i-1]）</span></span>
<span class="line"><span>                   // p的范围：p至少要有j-1个元素（即p&gt;=j-1），且p最大为i-1（因为最后一段至少一个元素）</span></span>
<span class="line"><span>                   for (int p = j-1; p &lt; i; p++) {</span></span>
<span class="line"><span>                       // 最后一段的异或：prexor[i]^prexor[p]</span></span>
<span class="line"><span>                       int xor_val = prexor[i] ^ prexor[p];</span></span>
<span class="line"><span>                       // 如果dp[p][j-1]为true，且xor_val&lt;=mid，那么就可以</span></span>
<span class="line"><span>                       if (dp[p][j-1] \\u0026\\u0026 xor_val &lt;= mid) {</span></span>
<span class="line"><span>                           dp[i][j] = true;</span></span>
<span class="line"><span>                           break; // 跳出内层循环（p循环），因为已经找到一个可行的p了</span></span>
<span class="line"><span>                       }</span></span>
<span class="line"><span>                   }</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span>           return dp[n][k];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>11. 但是，这里有一个问题：当 j=1 时，我们要求 p=0（因为 p 从 0 到 i-1）？注意：p=0 表示前 0 个元素分成 0 段（dp[0][0]=true），然后最后一段是从 0 到 i-1（即整个数组），异或值=prexor[i]^prexor[0]=prexor[i]（因为 prexor[0]=0），然后判断是否&lt;=mid。这是正确的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>12. 但是，三重循环可能会导致超时吗？我们需要计算：最坏情况，j 从 1 到 k（k 次循环），i 从 j 到 n（大约 n 次循环），p 从 j-1 到 i-1（平均 n/2 次循环）。总操作数：k _ (n^2)/2。当 n=250，k=250 时，250 _ (250*250)/2 = 250*31250 = 7,812,500，这是可以接受的（因为 7e6 在 Java 中很快）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>13. 但是，我们可以优化内层循环：对于固定的 i 和 j，我们遍历 p 从 j-1 到 i-1，如果 dp[p][j-1]为 true，然后计算异或值，然后判断。我们可以提前记录所有 dp[p][j-1]=true 的 p，但这样并不能减少循环次数（我们仍然需要遍历 p）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>14. 另一种优化：改变循环顺序，先循环 j，再循环 p（只遍历 dp[p][j-1]为 true 的 p），然后对于每个 p，我们计算 p 到后面的 i（i 从 p+1 到 n）的异或值=prexor[i]^prexor[p]，然后判断这个值是否&lt;=mid，如果是，那么我们就将 dp[i][j]设为 true。但是注意，这样我们需要一个列表记录所有 dp[p][j-1]为 true 的 p。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    具体：</span></span>
<span class="line"><span>    dp[0][0]=true</span></span>
<span class="line"><span>    初始化一个 list（表示上一层的状态）: 一开始 list.add(0) 表示 p=0 是 true（即 dp[0][0]为 true）</span></span>
<span class="line"><span>    然后 j 从 1 到 k:</span></span>
<span class="line"><span>    新建一个布尔数组 cur，长度 n+1，表示当前层（第 j 段）的状态</span></span>
<span class="line"><span>    遍历上一层的 list 中的每个 p：</span></span>
<span class="line"><span>    // 然后从 p+1 开始到 n 作为 i，计算异或值</span></span>
<span class="line"><span>    for (int i=p+1; i&lt;=n; i++) {</span></span>
<span class="line"><span>    int xor_val = prexor[i]^prexor[p];</span></span>
<span class="line"><span>    if (xor_val&lt;=mid) {</span></span>
<span class="line"><span>    cur[i] = true; // 表示前 i 个元素分成 j 段是可行的</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 然后更新 list：当前层 cur 中为 true 的位置</span></span>
<span class="line"><span>    // 但注意：内层循环可能会重复标记同一个 i，我们需要记录这一层所有的 true，用于下一层。</span></span>
<span class="line"><span>    // 同时，我们也要将 cur 赋值给 dp[j]？这里我们直接使用 cur 数组。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>               // 然后下一层使用这一层的true位置（即cur中为true的位置）作为p</span></span>
<span class="line"><span>               // 记录这一层所有的true位置到一个新的list，用于下一层。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           最后检查cur[n]（即j=k时，cur[n]是否为true）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    这样，时间复杂度为：j 从 1 到 k，每一层，我们遍历上一层的 list，假设上一层的 list 大小为 s，然后每个 p 对应遍历 n-p 次，总共大约是 s*n。而 s 最多为 n，所以总时间为 k * (n^2) = 250*250*250=15e6，和之前一样。但好处是内层循环没有额外的 dp 查找，而是直接遍历 i。而且，我们可以用布尔数组标记上一层的 p，然后遍历所有 i？但实际上，我们内层循环的次数和之前一样。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    因此，我们可以尝试这样写，但也可以不优化。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>15. 我们选择最初的动态规划三重循环。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>16. 但是，注意：在第三重循环中，我们一旦找到使得 dp[i][j]为 true 的一个 p，就 break，这样可以减少一些循环次数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>17. 测试示例：</span></span>
<span class="line"><span>    示例 1：nums=[1,2,3], k=2</span></span>
<span class="line"><span>    前缀异或：prexor[0]=0, prexor[1]=1, prexor[2]=1^2=3, prexor[3]=1^2^3=0</span></span>
<span class="line"><span>    mid=1（我们期望在 mid=1 时返回 true）</span></span>
<span class="line"><span>    动态规划：</span></span>
<span class="line"><span>    dp[0][0]=true</span></span>
<span class="line"><span>    j=1:</span></span>
<span class="line"><span>    i=1: p 从 0 开始：p=0, xor_val = prexor[1]^prexor[0]=1，满足&lt;=1，所以 dp[1][1]=true</span></span>
<span class="line"><span>    i=2: p=0: xor_val=prexor[2]^prexor[0]=3 -&gt; 3&gt;1 -&gt; 不行；p=1: xor_val=prexor[2]^prexor[1]=3^1=2 -&gt; 2&gt;1 -&gt; 不行 -&gt; dp[2][1]=false</span></span>
<span class="line"><span>    i=3: p=0: xor_val=prexor[3]^prexor[0]=0，满足&lt;=1 -&gt; dp[3][1]=true</span></span>
<span class="line"><span>    j=2:</span></span>
<span class="line"><span>    i=2: p=1（因为 j-1=1，所以 p 从 1 开始）: 要求 dp[1][1]为 true，然后计算：prexor[2]^prexor[1]=3^1=2&gt;1? 不行；然后 p=2? 不行（p 必须&gt;=j-1=1 且&lt;=1？不对，p 可以到 1，然后下一个 p=2 是不允许的（因为 p 要小于 i=2））？实际上 p 只能取 1。所以 dp[2][2]没有成立。</span></span>
<span class="line"><span>    另外，p=0? 不行，因为 p 必须&gt;=j-1=1。所以 dp[2][2]=false</span></span>
<span class="line"><span>    i=3: p=1: 看 dp[1][1]为 true，计算：prexor[3]^prexor[1]=0^1=1&lt;=1，所以 dp[3][2]=true -&gt; 返回 true。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    因此，在 mid=1 时，dp[3][2]=true，返回 true。但问题在于，我们要求的是分成 k=2 段，那么应该是前 3 个元素分成 2 段，所以我们的 dp[3][2]=true 符合要求。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    但是，我们要求的是最大 XOR 的最小值，所以二分查找会得到 1，正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    示例 2：nums=[2,3,3,2], k=3，输出 2</span></span>
<span class="line"><span>    前缀异或：prexor[0]=0</span></span>
<span class="line"><span>    prexor[1]=2</span></span>
<span class="line"><span>    prexor[2]=2^3=1</span></span>
<span class="line"><span>    prexor[3]=1^3=2</span></span>
<span class="line"><span>    prexor[4]=2^2=0</span></span>
<span class="line"><span>    mid=1 时，我们检查：</span></span>
<span class="line"><span>    j=1:</span></span>
<span class="line"><span>    i=1: p0: xor=2&gt;1 -&gt; 不行 -&gt; dp[1][1]=false? 但 2&gt;1，所以 false，但是注意，当整个数组只有一个元素时，我们只有这一个分法。所以 dp[1][1]应该为 false 吗？因为 2&gt;1，所以不满足条件。因此，我们无法在 mid=1 的条件下分成一段？不对，分成一段就是整个数组，但整个数组的异或值（当 i=4）是 0，所以 dp[4][1]=true（因为 p=0，xor_val=0&lt;=1） -&gt; 所以 dp[4][1]=true。</span></span>
<span class="line"><span>    i=4: 正确，但是我们需要分成 3 段。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          j=2: 我们要求i&gt;=2，然后p&gt;=1。</span></span>
<span class="line"><span>               i=2: p=1: dp[1][1]为false（因为dp[1][1]在mid=1时是false），所以不行。</span></span>
<span class="line"><span>               i=3: p=1: dp[1][1]=false -&gt; 不行；p=2: dp[2][1]: 我们还没有计算dp[2][1]？</span></span>
<span class="line"><span>                   首先，计算j=1时的dp[2][1]: p可以从0到1（因为j=1，所以p&gt;=0），p=0: xor_val=prexor[2]^prexor[0]=1&gt;1? 1&lt;=1，所以dp[2][1]=true。</span></span>
<span class="line"><span>                   所以，i=3时，p=2: 要求dp[2][1]为true，然后xor_val=prexor[3]^prexor[2]=2^1=3&gt;1 -&gt; 不行。</span></span>
<span class="line"><span>               i=4: p=1: dp[1][1]=false；p=2: dp[2][1]=true，然后xor_val=prexor[4]^prexor[2]=0^1=1&lt;=1，所以dp[4][2]=true。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          j=3: i&gt;=3</span></span>
<span class="line"><span>               i=3: p=2: dp[2][2] ? 我们需要看j=2时，dp[2][2]是否设置。</span></span>
<span class="line"><span>                        在j=2时，i=2: p=1（dp[1][1]为false），所以dp[2][2]=false。</span></span>
<span class="line"><span>                        i=3: 在j=2时，i=3需要p&gt;=1，p=1时dp[1][1]=false，p=2时dp[2][1]=true（但是要求j-1=1，所以p=2）然后xor_val=3&gt;1，所以dp[3][2]=false。</span></span>
<span class="line"><span>                        所以j=2时，i=3为false。</span></span>
<span class="line"><span>               i=3: 没有找到p使得dp[3][2]为true？所以dp[3][3]为false。</span></span>
<span class="line"><span>               i=4: p在[2,3]中：p=2: dp[2][2]为false；p=3: dp[3][2]为false -&gt; dp[4][3]在mid=1时为false。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         所以mid=1时，返回false。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    然后我们检查 mid=2：</span></span>
<span class="line"><span>    j=1:</span></span>
<span class="line"><span>    i=1: p0: xor=2&lt;=2 -&gt; dp[1][1]=true</span></span>
<span class="line"><span>    i=2: p0: xor=1&lt;=2 -&gt; dp[2][1]=true （因为 1&lt;=2）</span></span>
<span class="line"><span>    i=3: p0: xor=2&lt;=2 -&gt; dp[3][1]=true</span></span>
<span class="line"><span>    i=4: p0: xor=0&lt;=2 -&gt; dp[4][1]=true</span></span>
<span class="line"><span>    j=2:</span></span>
<span class="line"><span>    i=2: p=1: dp[1][1]=true, xor=prexor[2]^prexor[1]=1^2=3&gt;2 -&gt; 不行 -&gt; 所以继续 p=0? 不行，因为 p&gt;=1（j-1=1）所以只能 p=1 -&gt; dp[2][2]=false</span></span>
<span class="line"><span>    i=3: p=1: dp[1][1]=true, xor=prexor[3]^prexor[1]=2^2=0&lt;=2 -&gt; 所以 dp[3][2]=true</span></span>
<span class="line"><span>    i=4: p=1: dp[1][1]=true, xor=prexor[4]^prexor[1]=0^2=2&lt;=2 -&gt; dp[4][2]=true</span></span>
<span class="line"><span>    或者 p=2: dp[2][1]=true, xor=prexor[4]^prexor[2]=0^1=1&lt;=2 -&gt; 所以 dp[4][2]=true</span></span>
<span class="line"><span>    j=3:</span></span>
<span class="line"><span>    i=3: p=2: dp[2][2]=false -&gt; 不行</span></span>
<span class="line"><span>    或者 p=1: dp[1][2]不存在？我们 j=2 还没有计算 dp[1][2]（因为 i&gt;=j，所以 i=1 时 j 最大为 1，所以 dp[1][2]不会被计算，为 false） -&gt; 不行，所以 dp[3][3]=false</span></span>
<span class="line"><span>    i=4: p=2: dp[2][2]为 false；p=3: dp[3][2]=true -&gt;</span></span>
<span class="line"><span>    xor_val=prexor[4]^prexor[3]=0^2=2&lt;=2 -&gt; 所以 dp[4][3]=true</span></span>
<span class="line"><span>    所以返回 true。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    因此，在 mid=2 时返回 true，所以二分查找会返回 2（因为 mid=1 不可行，mid=2 可行，所以答案 2）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    示例 3：nums=[1,1,2,3,1], k=2，输出 0</span></span>
<span class="line"><span>    前缀异或：0,1,0,2,1,0</span></span>
<span class="line"><span>    mid=0: 我们检查</span></span>
<span class="line"><span>    j=1: 整个数组：0&lt;=0 -&gt; dp[5][1]=true</span></span>
<span class="line"><span>    j=2: 需要找到 p 使得 dp[p][1]为 true 且 prexor[5]^prexor[p]==0。</span></span>
<span class="line"><span>    dp[p][1]为 true 的条件：前 p 个元素的异或值（整个数组）为 0？不，应该是前 p 个元素的异或值（即 prexor[p]）在 mid=0 的情况下，只有当前 p 个元素的异或值为 0 时，dp[p][1]=true（因为整个数组的异或值=prexor[p]，所以必须等于 0 才满足&lt;=0）。</span></span>
<span class="line"><span>    prexor[0]=0 -&gt; dp[0][0]=true（基础条件），但 j=1：p=0: 前 0 个元素分成 1 段？不行。实际上，我们要求分成 1 段，那么 p 表示前 p 个元素（分成 1 段）只能取 p&gt;=1? 实际上在 j=1 时，我们枚举 p 只有 p=0（但要求 p&gt;=0）?</span></span>
<span class="line"><span>    重新看 dp[0][0]=true，那么当 i=5 时，p 从 1 到 4（j=2，所以 p&gt;=1）：</span></span>
<span class="line"><span>    p=1: dp[1][1]: 需要前 1 个元素分成 1 段是否可行？即 prexor[1]^prexor[0]=1&gt;0 -&gt; dp[1][1]=false</span></span>
<span class="line"><span>    p=2: dp[2][1]: prexor[2]^prexor[0]=0&lt;=0 -&gt; true（所以 dp[2][1]=true）</span></span>
<span class="line"><span>    然后最后一段：prexor[5]^prexor[2]=0^0=0&lt;=0 -&gt; 所以 dp[5][2]=true。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                  或者p=3: dp[3][1]: prexor[3]^prexor[0]=2&gt;0 -&gt; false</span></span>
<span class="line"><span>                  p=4: dp[4][1]: prexor[4]^prexor[0]=1&gt;0 -&gt; false</span></span>
<span class="line"><span>                  所以dp[5][2]=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    所以 mid=0 可行，因此二分查找会返回 0。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>18. 注意：我们检查的 p 的范围是：j-1 &lt;= p &lt; i，所以 p 从 j-1 开始，但是 j-1&gt;=0，所以当 j=2 时，p 至少为 1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>19. 代码实现：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：我们动态规划中，dp[i][j]表示前 i 个元素（索引 0 到 i-1）分成 j 段是否可行。</span></span>
<span class="line"><span>另外，我们注意 dp 数组的初始化：dp[0][0]=true。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，当 n=0 时？题目保证 n&gt;=1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>20. 优化：我们可以在 dp[i][j]设置为 true 后立即跳出 p 的循环（使用 break），这样可以减少一些计算。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>21. 提交注意：最大 n=250，k=250，三重循环最坏情况 7e6~15e6 次操作（在 Java 中，15e6 次操作大约 150ms？但实际可能更快）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>22. 如果超时，我们可以尝试优化：使用一个数组 last（记录上一层的所有 dp 为 true 的索引），然后下一层时，对于每个 i，我们遍历 last 中的 p，计算 prexor[i]^prexor[p]&lt;=mid，然后设置 dp[i]=true。但这样的复杂度一样。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>23. 我们按上述思路实现。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>24. 但是，我们注意到：当 mid=0 时，我们要求异或值必须为 0，所以只有 prexor[i]^prexor[p]==0 才满足，即 prexor[i]==prexor[p]。我们可以用哈希表记录上一层的 prexor[p]对应的 p，然后对于当前的 i，如果存在 p（在上一层的索引）满足 prexor[i]==prexor[p]，那么 dp[i][j]=true。但是，这样只适用于 mid=0。而 mid&gt;0 时，我们不能这么做。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>25. 所以，我们仍然采用三重循环。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>26. 实现代码：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：我们只需要知道 dp[n][k]是否为 true，并且我们使用三层循环。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最后，返回二分查找的结果 low。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>27. 边缘情况：k=1，那么就是整个数组的异或值，所以答案就是整个数组的异或。我们的方法：二分查找会不断向上逼近，直到 mid&gt;=整个数组的异或值，所以会返回整个数组的异或值。正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>28. 测试：k=250（最大 k），n=250，那么每个 i 和 p 的循环次数约为 250*250*250=15e6，在 Java 中运行时间应该在可接受范围。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>29. 代码：</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>为了解决这个问题，我们需要将数组分成 <code>k</code> 个非空的连续子数组，使得所有子数组的异或值中的最大值尽可能小。我们采用二分查找的方法来确定这个最小的最大值，并通过动态规划验证每个候选值是否可行。</p><h3 id="方法思路" tabindex="-1"><a class="header-anchor" href="#方法思路"><span>方法思路</span></a></h3><ol><li><strong>二分查找框架</strong>：我们确定候选值 <code>mid</code> 的范围为 <code>[0, 2^30]</code>。二分查找的目标是找到最小的 <code>mid</code>，使得数组可以分成 <code>k</code> 个子数组，且每个子数组的异或值都不超过 <code>mid</code>。</li><li><strong>前缀异或数组</strong>：预处理前缀异或数组 <code>prexor</code>，其中 <code>prexor[i]</code> 表示数组前 <code>i</code> 个元素的异或值。这有助于快速计算任意子数组的异或值。</li><li><strong>动态规划验证</strong>：对于每个候选值 <code>mid</code>，使用动态规划验证是否可以将数组分成 <code>k</code> 个子数组，每个子数组的异或值都不超过 <code>mid</code>。动态规划的状态 <code>dp[i][j]</code> 表示前 <code>i</code> 个元素是否能分成 <code>j</code> 个子数组，且每个子数组的异或值都不超过 <code>mid</code>。</li><li><strong>状态转移</strong>：在动态规划中，对于每个状态 <code>dp[i][j]</code>，我们枚举最后一个子数组的起始位置 <code>p</code>，如果前 <code>p</code> 个元素可以分成 <code>j-1</code> 个子数组，且子数组 <code>[p, i-1]</code> 的异或值不超过 <code>mid</code>，则 <code>dp[i][j]</code> 为 <code>true</code>。</li></ol><h3 id="解决代码" tabindex="-1"><a class="header-anchor" href="#解决代码"><span>解决代码</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Solution</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> minXor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> k</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">prexor</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n; i++) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            prexor[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> prexor[i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">^</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nums[i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> low</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> high</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;&lt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 30</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 设置足够大的上界</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (low </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> high) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> mid</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> low </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (high </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> low) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">check</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(mid, prexor, n, k)) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                high </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mid;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                low </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mid </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> low;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> boolean</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> check</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> mid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">prexor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> k</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        boolean</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[][] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dp</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> boolean</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">][k </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        dp[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> j</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> k; j++) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> j; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n; i++) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> p</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; p </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i; p++) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (dp[p][j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> xor_val</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> prexor[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">^</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> prexor[p];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (xor_val </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mid) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                            dp[i][j] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                            break</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 找到一种分割方式即可，跳出内层循环</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> dp[n][k];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解释" tabindex="-1"><a class="header-anchor" href="#解释"><span>解释</span></a></h3><ol><li><strong>二分查找</strong>：通过二分查找确定可能的最小最大值 <code>mid</code>。初始范围设置为 <code>[0, 2^30]</code>，因为数组中元素的最大值为 <code>10^9</code>，而两个元素的异或结果不会超过 <code>2^30</code>。</li><li><strong>前缀异或数组</strong>：预处理 <code>prexor</code> 数组，其中 <code>prexor[i]</code> 表示数组前 <code>i</code> 个元素的异或值。这样，任意子数组 <code>[i, j]</code> 的异或值可以通过 <code>prexor[j] ^ prexor[i]</code> 快速计算。</li><li><strong>动态规划验证</strong>： <ul><li>初始化 <code>dp[0][0] = true</code>，表示前 0 个元素分成 0 个子数组是可行的。</li><li>对于每个子数组数量 <code>j</code>（从 1 到<code>k</code>），遍历所有可能的结束位置 <code>i</code>（从<code>j</code>到<code>n</code>）。</li><li>对于每个结束位置 <code>i</code>，枚举最后一个子数组的起始位置 <code>p</code>（从 <code>j-1</code> 到 <code>i-1</code>）。如果前 <code>p</code> 个元素可以分成 <code>j-1</code> 个子数组（即 <code>dp[p][j-1]</code> 为 <code>true</code>），并且子数组 <code>[p, i]</code> 的异或值不超过 <code>mid</code>，则 <code>dp[i][j]</code> 设为 <code>true</code>。</li></ul></li><li><strong>返回结果</strong>：如果 <code>dp[n][k]</code> 为 <code>true</code>，说明数组可以分成 <code>k</code> 个子数组，且每个子数组的异或值不超过 <code>mid</code>。二分查找最终返回的最小 <code>mid</code> 即为答案。</li></ol><p>这种方法通过二分查找和动态规划高效地确定了所有子数组中最大异或值的最小值，时间复杂度为 <code>O(n^2 * k * log(max_xor))</code>，其中 <code>max_xor</code> 是可能的异或最大值。</p>`,14)]))}const t=n(l,[["render",e],["__file","T3.html.vue"]]),v=JSON.parse('{"path":"/module_ai/weekly-contest-456/t3.html","title":"数组分 k 子数组最小最大异或","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"USER","slug":"user","link":"#user","children":[]},{"level":2,"title":"ASSISTANT","slug":"assistant","link":"#assistant","children":[{"level":3,"title":"方法思路","slug":"方法思路","link":"#方法思路","children":[]},{"level":3,"title":"解决代码","slug":"解决代码","link":"#解决代码","children":[]},{"level":3,"title":"解释","slug":"解释","link":"#解释","children":[]}]}],"git":{"createdTime":1751299769000,"updatedTime":1751299769000,"contributors":[{"name":"gdut-yy","username":"gdut-yy","email":"gdut_yy@163.com","commits":1}]},"readingTime":{"minutes":28.6,"words":8581},"filePathRelative":"module_ai/weekly-contest-456/t3.md","localizedDate":"2025年7月1日"}');export{t as comp,v as data};
