import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as l}from"./app-D75trwlE.js";const p={};function e(d,s){return l(),a("div",null,s[0]||(s[0]=[i(`<h1 id="求数组子序列首尾积最大值" tabindex="-1"><a class="header-anchor" href="#求数组子序列首尾积最大值"><span>求数组子序列首尾积最大值</span></a></h1><ul><li>会话记录：<a href="https://yuanbao.tencent.com/chat/naQivTmsDa/5bd9711d-9d4e-4bac-9c36-ea69c7422ba2" target="_blank" rel="noopener noreferrer">https://yuanbao.tencent.com/chat/naQivTmsDa/5bd9711d-9d4e-4bac-9c36-ea69c7422ba2</a></li><li>无修改 AC。</li></ul><h2 id="user" tabindex="-1"><a class="header-anchor" href="#user"><span>USER</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>给你一个整数数组 nums 和一个整数 m。</span></span>
<span class="line"><span>返回任意大小为 m 的 子序列 中首尾元素乘积的最大值。</span></span>
<span class="line"><span>子序列 是可以通过删除原数组中的一些元素（或不删除任何元素），且不改变剩余元素顺序而得到的数组。</span></span>
<span class="line"><span>示例 1：</span></span>
<span class="line"><span>输入： nums = [-1,-9,2,3,-2,-3,1], m = 1</span></span>
<span class="line"><span>输出： 81</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>子序列 [-9] 的首尾元素乘积最大：-9 * -9 = 81。因此，答案是 81。</span></span>
<span class="line"><span>示例 2：</span></span>
<span class="line"><span>输入： nums = [1,3,-5,5,6,-4], m = 3</span></span>
<span class="line"><span>输出： 20</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>子序列 [-5, 6, -4] 的首尾元素乘积最大。</span></span>
<span class="line"><span>示例 3：</span></span>
<span class="line"><span>输入： nums = [2,-1,2,-6,5,2,-5,7], m = 2</span></span>
<span class="line"><span>输出： 35</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>子序列 [5, 7] 的首尾元素乘积最大。</span></span>
<span class="line"><span>提示:</span></span>
<span class="line"><span>1 &lt;= nums.length &lt;= 10^5</span></span>
<span class="line"><span>-10^5 &lt;= nums[i] &lt;= 10^5</span></span>
<span class="line"><span>1 &lt;= m &lt;= nums.length</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="assistant" tabindex="-1"><a class="header-anchor" href="#assistant"><span>ASSISTANT</span></a></h2><details class="hint-container details"><summary>已深度思考(用时 9 分 24 秒)</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>首先，问题是给定一个整数数组 nums 和一个整数 m，我需要找到大小为 m 的子序列，使得这个子序列的首元素和尾元素的乘积最大，并返回这个最大乘积。子序列是通过删除一些元素但不改变剩余元素顺序得到的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>从示例看：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 示例 1：m=1，子序列只有一个元素，所以首尾都是它自己，乘积是它的平方。最大值是 81，来自-9 的平方。</span></span>
<span class="line"><span>- 示例 2：m=3，子序列[-5,6,-4]，首是-5，尾是-4，乘积是 20。</span></span>
<span class="line"><span>- 示例 3：m=2，子序列[5,7]，乘积 35。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>数组长度可达 10^5，所以需要一个高效的算法，不能是 O(n^2)或更差的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>关键点是：子序列的大小是 m，首元素和尾元素的乘积最大。子序列中元素顺序不能改变，所以我必须考虑数组的顺序。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因为子序列保持原顺序，我需要选择一些位置 i 和 j，使得 i 是子序列的第一个索引，j 是最后一个索引，并且子序列有 m 个元素，所以 j - i + 1 &gt;= m？不对。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>子序列的大小是 m，所以如果我从索引 i 开始，到索引 j 结束，那么中间的元素必须存在，使得子序列有 m 个元素。也就是说，索引 i 和 j 之间必须有足够的元素来形成 m-2 个中间元素（如果 m&gt;1），所以距离至少 m-1，但不一定连续，所以 j - i &gt;= m - 1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>更精确地说：如果子序列从索引 start 开始，到索引 end 结束，那么在 start 和 end 之间（包括），有恰好 m 个元素在子序列中。但由于子序列可以不连续，所以 start 和 end 不一定相邻。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实际上，对于固定的大小 m，我需要选择两个位置 start 和 end，使得 end &gt;= start + (m - 1)，因为至少有 m-1 个元素在中间，但既然是不连续的，距离可以更大。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但更重要的是，子序列从 start 开始，到 end 结束，并且有 m 个元素，所以索引 end 必须至少是 start + (m - 1) 在 0-based 索引中。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>设 start 是子序列第一个元素的索引，end 是最后一个元素的索引。那么，从 start 到 end，我必须选择子序列，包括 start 和 end，并且总共有 m 个元素。所以，位置 end - start + 1 是元素总数从 start 到 end（包括），但子序列只选取这些中的 m 个，包括 start 和 end。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于固定 start 和 end，子序列从 start 开始，到 end 结束，中间的元素可以是任意的，只要顺序保持。但由于我只关心首尾元素，对于固定 start 和 end，乘积是固定的，是 nums[start] \\* nums[end]，但前提是 start 和 end 都在子序列中，并且 start 是第一个，end 是最后一个，这意味着 start 到 end 之间的元素在子序列中的数量是 m-2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>更仔细地想：如果子序列从 start 开始，以 end 结束，并且大小为 m，则 start 和 end 之间的元素（不包括 start 和 end）中必须有恰好 m-2 个元素包含在子序列中。由于这些元素是任意选择的（只要顺序不变），只要从 start 到 end 有至少 m-1 个索引点（包括 start 和 end），就可以构造出这样的子序列。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>索引从 start 到 end（包括）的元素个数是：k = end - start + 1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后，为了包含 start 和 end，以及 m-2 个其他元素，我们需要 k &gt;= m。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实际上，只要 start 和 end 之间（包括）至少有 m 个元素，就可以选择一个大小为 m 的子序列，以 start 开始，以 end 结束。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这总是可行的：例如，选择 start，然后选择从 start+1 到 end 之间的任意 m-2 个元素，然后选择 end，或者如果不选中间的元素，但为了以 end 结束，我们必须选它，但我们可以选择靠近 start 的元素，也可以跳过一些。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>只要 end &gt;= start + (m - 1)，因为索引：start, start+1, ..., start+(m-1) 但 start+(m-1)可能不是 end。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最小的 end 是 start + (m-1)，此时所有元素都被包含。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果 end 更大，比如 end = start + d，其中 d &gt;= m-1，那么就有 d+1 个元素，我可以选择包括 start 和 end，以及 d-1 个元素中的任意 m-2 个，只要 d-1 &gt;= 0，但因为 d &gt;= m-1，所以当 m&gt;=2 时 d-1 &gt;= m-2 成立。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当 d = m-1，就有 m 个元素，全部被包含。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当 d &gt; m-1，有超过 m 个元素，所以我可以选择包含 start 和 end，以及中间任意 m-2 个元素。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>只要 end &gt;= start + (m-1)，对于固定的 start 和 end，我总是可以构造一个以 start 开头、end 结尾、大小为 m 的子序列，因为从 start 到 end（包含）的元素数量至少为 m。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>只有当 end &lt; start + (m-1) 时，元素数量少于 m，无法构造。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，对于任何两个索引 start 和 end，如果 end &gt;= start + (m-1)，那么 nums[start] \\* nums[end] 是一个可能的乘积。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>反过来，对于任意大小为 m 的子序列，设第一个索引为 start，最后一个为 end，必然有 end &gt;= start + (m-1)，并且乘积是 nums[start] \\* nums[end]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，问题简化为：在 start 和 end 满足 end &gt;= start + (m-1) 的索引对中，找到 nums[start] \\* nums[end] 的最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这样对吗？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在子序列中，首元素是子序列中索引最小的元素，末元素是索引最大的元素。由于子序列保持顺序，所以是的，start 是子序列中的最小索引，end 是最大索引。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于固定的大小为 m 的子序列，start 和 end 在满足 end - start &gt;= m-1 的前提下，分别是最小和最大索引。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，最大乘积是 nums[i] \\* nums[j] 的最大值，其中 i 和 j 是满足 j &gt;= i + (m-1) 的索引。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但在这种情况下，对于每个可能的 i 和 j，其中 j &gt;= i + m - 1，乘积 nums[i] \\* nums[j] 是可能的，我们需要在所有这样的配对中取最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但数组很长，n=10^5，所以 O(n^2) 的解法会超时，因此我需要一个更高效的方法。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在，问题是在满足 j - i &gt;= m - 1 的约束下，求 nums[i] \\* nums[j] 的最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>其中 i 和 j 是索引，j &gt;= i + k，k = m - 1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>设 k = m - 1，因此 j &gt;= i + k。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在，nums[i] \\* nums[j] 的最大值，其中 j &gt;= i + k。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由于乘积可能为正或负，我需要考虑符号。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>nums[i] 和 nums[j] 都是整数，范围在 ±10^5，所以乘积在 -10^10 到 10^10 之间，用 int 是没问题的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>为了高效地找到最大值，我不能遍历所有 (i,j) 组合。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于固定的 i，我希望在满足 j &gt;= i + k 的 j 中，找到能使 nums[i] \\* nums[j] 最大的 nums[j]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但 nums[i] \\* nums[j] 依赖于 nums[i] 的值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果 nums[i] 是正数，我希望 nums[j] 尽可能大以最大化乘积；如果 nums[i] 是负数，我希望 nums[j] 尽可能小（即更负）以使乘积变大。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因为负负得正。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，对于每个 i，为了最大化 nums[i] \\* nums[j]，我需要选择 nums[j] 的值：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 如果 nums[i] &gt;= 0，那么需要使 nums[j] 尽可能大</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 如果 nums[i] &lt; 0，那么需要使 nums[j] 尽可能小（最负）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>并且 j &gt;= i + k。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>类似地，对于 j，但为了整体最大值，我可以遍历每个 i，在满足 j &gt;= i + k 的范围内找到最优的 j。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由于约束是 j &gt;= i + k，这就像是在一个滑动窗口中。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我需要一个在索引 j 上的数据结构，满足 j &gt;= 当前 i 的最小值 + k。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于每个 i，查询的 j 范围是从 i+k 到 n-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，i 的右侧部分。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我可以用一个在递减索引上工作的滑动窗口方法，或者类似的方式。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但首先，我们来定义 k = m - 1，所以我们需要满足 j &gt;= i + k。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在，对于每个 i，我需要考虑 j 在 [i+k, n-1] 区间内的情况。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于每个这样的 i，如果 nums[i] &gt;=0，我需要 max\\_{j &gt;= i+k} nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果 nums[i] &lt;0，我需要 min\\_{j &gt;= i+k} nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是 min nums[j] 对于负数：当 nums[i] 为负数时，为了让乘积最大，nums[j] 应该为负，这样负负得正，所以如果可能，我希望 nums[j] 是尽可能小的值（即负数且数值大），但如果所有 nums[j] 都是正数，那乘积就是负数，可能并不大，等等。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实际上，对于固定 nums[i] &lt; 0，最大化 nums[i] \\* nums[j]：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由于 nums[i] 是负数，设 a = -nums[i] &gt; 0，那么乘积为 -a \\* nums[j]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最大化这个值：如果 nums[j] 是负数，设 b = -nums[j] &gt; 0，那么 -a * (-b) = a*b，所以 b 越大越好，也就是 nums[j] 越负（即更小的值）越好。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果 nums[j] 是正数，那么 -a \\* nums[j] 是负数，而如果 nums[j] 为负，我们得到正数乘积。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，对于固定的 nums[i] &lt; 0，在 j 中最好的选择是使 nums[j] 尽可能小（即最小的值），因为如果有一个负的 nums[j]，它会给出正数乘积，而更小的 nums[j]（更负）会给出更大的正数乘积。如果没有负值，所有 nums[j] 都是正数，那么最小值的 nums[j] 会使乘积的绝对值更小，但仍然是负数，所以对于固定 i，最大值可能来自最负的 j，或者最正的 j？我们来澄清一下。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>设 P = nums[i] \\* nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>固定 nums[i] &lt; 0。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>那么 P = (负数) \\* nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果 nums[j] 是负数，P 是正数，且随着 |nums[j]| 增大而增大，所以需要更小的 nums[j]（更负）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果 nums[j] 是正数，P 是负数，所以 P 的值更小（更负），但由于我们是在寻找最大值，负值比正值小，所以我们只在没有负的 nums[j] 时才考虑它们？但实际上，对于最大 P，如果存在负的 nums[j]，我们会得到正数 P，大于任何负数的 P。所以，对于固定的 i 且 nums[i] &lt; 0，在 j 中的最佳选择是使 nums[j] 尽可能小（最小的值），无论这个值是否为正数，但这取决于情况。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 如果存在 nums[j] &lt; 0，那么最小值的 nums[j]（最负）会得到最大的 P，因为 P 是正数且很大。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 如果所有 nums[j] &gt;= 0，那么最小的 nums[j] 可能会使 |P| 更小，但 P 是负数，所以越小（更负）的 nums[j] 会得到更小的 P（更负），但因为所有 P 都是负的，所以最小的 |P| 会得到最小的负值，但最大值是负值中最小的（也就是最接近零的）。我把自己搞糊涂了。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最大 P：如果存在任何 j 使得 nums[j] &lt; 0，那么选择一个使得 nums[j] 很小的 j，P 是大的正数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果所有 j 满足 nums[j] &gt;= 0，那么 P &lt;= 0，并且为了最大化 P，由于 nums[i] &lt; 0，我们希望 nums[j] 尽可能小（最接近零的）以使 P 的负值最小（即更接近零）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>类似地，如果 nums[i] &gt;= 0，那么：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果 nums[j] 是正数，P 是正数，较大的 nums[j] 得到较大的 P。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果 nums[j] 是负数，P 是负数，更小（更负）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以当 nums[j] 很大时得到最大 P。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此总结，对于固定的 i，为了最大化 nums[i] \\* nums[j]：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 如果 nums[i] &gt;= 0：</span></span>
<span class="line"><span>  - 如果存在 nums[j] &gt;= 0，选择最大的 nums[j]</span></span>
<span class="line"><span>  - 如果所有 nums[j] 都是负数，则选择最小的 nums[j]（最负）以得到更小的负值？等等不对。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>P = nums[i] \\* nums[j]，其中 nums[i] &gt;= 0。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果 nums[j] 很大且为正，P 是很大的正数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果 nums[j] 是很大的负数，P 是很大的负数（数值很大但为负）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但最大值：我们想要最大的 P，所以如果存在正数 nums[j]，选择最大的正数 nums[j]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果所有 nums[j] &lt;= 0，那么对于 nums[j] &lt;= 0，P = nums[i] \\* nums[j] &lt;= 0，并且由于 nums[i] 固定且为正，更大的 |nums[j]| 会使得 P 更负（更小），因此为了最大化 P（使其最小负值），我们应选择最小的 |nums[j]|，也就是最接近零的 nums[j]？不对。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>nums[j] 是负数或零。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>P = 正数 \\* 非正数 &lt;= 0。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最大化 P：由于所有 P &lt;= 0，最大值是最大的负数，即数值上最小，也就是离零最近的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但 nums[j] 的 |nums[j]| 越小，|P| 越小，因此对于固定正数 nums[i]，P 的数值越小，所以最大值是当 |nums[j]| 最小时，即 nums[j] 最接近零。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>同样地，在另一种情况下也是如此。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但在这问题中，由于我们有选择权，并且数组可能同时包含正数和负数，所以需要处理这些情况。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但在计算所有 j 在 [i+k, n-1] 范围内，对于固定的 i，最佳 nums[j] 是：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 如果 nums[i] &gt;= 0，那么最佳值 j 是：在 j &gt;= i+k 的范围内，如果存在正数，则选择 nums[j] 最大的 j；否则选择 nums[j] 最大的值（可能是负数，但 P 是负的，我们需要最大值）等等，不对。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>定义在索引集合上的函数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于索引集合 S，最大化 nums[i] \\* nums[j]，其中 j 属于 S，i 是固定的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这等价于：如果 nums[i] &gt;= 0，则选择 max_S nums[j]，但如果所有值都是负的，取最大值可能会得到数值上最大的负数，使得 P 更负（更小），但我们需要 max P，所以当所有 nums[j] 为负时，我们应选择最小的 |nums[j]|，即最接近零的 nums[j]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例如，nums[i] = 3，S 中的 nums[j]：-5 或 -1，那么 P = -15 或 -3，-3 更大（更大），所以选择 nums[j] = -1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果 nums[j] = 0，P = 0。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以对于 nums[i] &gt;=0，最佳 nums[j] 是 j 在 S 中使得 nums[j] 最大的值，如果所有 nums[j] 为负；或者 nums[j] 的最小值，如果所有 nums[j] 为正？不对。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于 nums[i] &gt;=0：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 如果 S 中存在非负值，那么最大值 nums[j]（包含非负数）可能更好，但我们来看：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实际的值：P = nums[i] \\* nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于固定的 nums[i] &gt;=0，当 nums[j] 尽可能大时 P 最大，但：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 如果最大的 nums[j] 是正数，那么选择它。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 如果所有 nums[j] &lt;=0，那么最大的 nums[j] 就是最接近零的那个（或者为零，或者是负值中数值最小的那个），这样当 nums[j] 为最接近零的负值时，|P| 最小。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 nums[j] 为负的情况下，较大的 nums[j]（更接近零）给出较小的 |P|，因此 P 更大（少负）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>类似地，如果最大的 nums[j] 是零，P=0。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以对于 nums[i] &gt;=0，对于 S 中所有 j，最佳的是取 max_S nums[j]，其中 max 是数值上的最大值，但 max_S nums[j] 会给出最大的数字，在全部为负时是数值最大的负数，但此时对于 P 来说，当全部为负时，我们需要的是最小 |nums[j]| 以最小化 |P|，但 max_S nums[j] 是数值最大的负数，也就是最负且数值最小？定义。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>设 S 是 j 的集合。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>计算 M*max = max*{j in S} nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>M*min = min*{j in S} nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>那么对于固定的 nums[i]：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 如果 nums[i] &gt;= 0：</span></span>
<span class="line"><span>  - 为了最大化 P，如果 M_max &gt;= 0，那么选择 j 使得 nums[j] = M_max，P = nums[i] \\* M_max</span></span>
<span class="line"><span>  - 如果 M_max &lt; 0（所有为负），那么选择 j 使得 nums[j] = M_min？不对，M_min 是数值上最小的，但全部为负，因此 M_min 是最负的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但如果所有为负，nums[j] 为负，P = nums[i] \\* (负) = 负，而最大值 P 是在 nums[j] 最接近零时，也就是在 S 中取最大值 nums[j]（因为全部为负，最大值是最小的 |值|，也就是最接近零的）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例子：nums[i] = 3，S 中 nums[j]: -10, -1，那么最大 nums[j] 是 -1？最大值是 -1，最小是 -10。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果选择 nums[j] = -1，P = -3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果选择 nums[j] = -10，P = -30</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-3 &gt; -30，所以当所有为负时，最大值 nums[j]（最接近零）给出更高的 P。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>类似地，如果 S 中 nums[j]: -5, -2，最大值 nums[j] = -2，P = 3 \\* -2 = -6；最小值 -5，P = -15；-6 更大。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以对于 nums[i] &gt;= 0：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 如果 M_max &gt;= 0，那么选择 M_max 作为最佳，P = nums[i] \\* M_max</span></span>
<span class="line"><span>- 如果 M_max &lt; 0，那么所有为负，选择 M_max（最接近零的），P = nums[i] \\* M_max</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在两种情况下，当 nums[i] &gt;=0 时，最佳 P 都是 nums[i] \\* max_S nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因为如果存在非负数，max_S nums[j] 非负，P 为非负或零。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果所有为负，max_S nums[j] 为最接近零的负数，P 为较小的负数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但在这两种情况下，nums[i] \\* max_S nums[j] 就是该集合 S 下的最大 P。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>其他情况呢？如果 M_max &gt;=0，选择它 P 最好。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果所有为负，选择 max 得到最高 P。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>是的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>类似地，如果 nums[i] &lt; 0：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>那么 P = nums[i] \\* nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由于 nums[i] &lt; 0，当 nums[j] &lt;= 0 时，P &gt;= 0，并且在更小的 nums[j]（更负）时达到最大。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当 nums[j] &gt; 0 时，P 为负数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，为了最大化 P：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 如果 min_S nums[j] &lt;= 0（存在非正数），那么选择 min_S nums[j]（最小的，即更负），P 为正。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 如果所有 nums[j] &gt; 0，那么 min_S nums[j] 为正，但 P = nums[i] \\* min_S nums[j] &lt; 0，并且当 min_S 越小，|P| 越小，因此 P 更大（负值更小）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例子：nums[i] = -3，S 中 nums[j]: 2 或 5，则 P = -6 或 -15；-6 更大（更小 |值|），因此当所有为正时选择最小 nums[j]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果 S 中 nums[j]: -4, -1，则选择 min = -4，P = (-3)\\*(-4) = 12，或选择 max = -1，P=3，所以 12 更大。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以对于 nums[i] &lt; 0：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 如果 min_S nums[j] &lt;= 0，那么最佳是 min_S nums[j]，P = nums[i] \\* min_S nums[j] &gt;=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 如果 min_S nums[j] &gt; 0（所有为正），那么选择 min_S nums[j]，P = nums[i] \\* min_S nums[j] &lt; 0，但这是可能的最大值，因为较小的 min 得到 |P| 较小。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在所有情况下，当 nums[i] &lt; 0 时，对于 S 中所有 j，最佳 P 是 nums[i] \\* min_S nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>总结：对于固定的 i 和集合 S，最大化 nums[i] \\* nums[j]（其中 j ∈ S）的结果是：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 如果 nums[i] &gt;= 0，则选择 max_S nums[j]，最佳 P = nums[i] \\* max_S nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 如果 nums[i] &lt; 0，则选择 min_S nums[j]，最佳 P = nums[i] \\* min_S nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因为 min 或 max 是针对集合 S 的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在我们的情况中，对于每个 i，S 是 j ≥ i+k 的索引集合。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>那么对于每个 i，我们有：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果 nums[i] &gt;= 0，候选 = nums[i] \\* max\\_{j &gt;= i+k} nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果 nums[i] &lt; 0，候选 = nums[i] \\* min\\_{j &gt;= i+k} nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后我们需要在所有 i 中取该候选值的最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但 min*{j &gt;= i+k} 和 max*{j &gt;= i+k} 需要高效计算。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由于约束条件是 j &gt;= i+k，并且 k 是固定的，我们可以从右向左遍历数组，维护一个包含右侧所有元素的数据结构。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>具体来说，当我们在 i 上迭代时，j 的范围是从 i+k 到 n-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>随着 i 的减小，这个范围在增加，因此我们可以从右向左处理，并为每个 i 查询该后缀的最大值或最小值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>首先，对于每个 i，我们需要在 j &gt;= i+k 的范围内计算 max 或 min。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但取决于 nums[i]，我们使用 max 或 min。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>为了找到全局最大值，我们可以为每个 i 计算 candidate_i，然后取所有 candidate_i 中的最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>candidate_i 是：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果 nums[i] &gt;= 0，candidate_i = nums[i] \\* max_suffix[i+k] // 其中 max_suffix 是后缀最大值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>定义：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>令 max_arr[i] 表示子数组 nums[i..n-1] 的最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>类似地，min_arr[i] 表示子数组 nums[i..n-1] 的最小值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这些可以通过从右向左的简单 O(n) 遍历预先计算。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例如：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>max_arr[n-1] = nums[n-1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于每个 i，从 n-2 到 0：max_arr[i] = max( nums[i], max_arr[i+1] )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>类似地，对于 min_arr：min_arr[i] = min( nums[i], min_arr[i+1] )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是我们的 j 范围是从 i+k 到 n-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们需要的是从索引 i+k 开始的后缀中的最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>设 max_suffix_from 的索引。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于索引 s，定义 suffix_max[s] = 从 s 到 n-1 的最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>suffix_min[s] = 从 s 到 n-1 的最小值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以 suffix_max[s] = max{ nums[j] 对于 j 从 s 到 n-1 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>suffix_min[s] 类似。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这些可以在 O(n) 时间内预先计算。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>suffix_max[s] = max( nums[s], suffix_max[s+1] )，适用于 s 从 n-2 到 0，但需要处理边界。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>更好地做法是从右向左计算：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>令 suffix_max[i] 表示对于索引 i 的最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>suffix_max[n-1] = nums[n-1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于 i 从 n-2 下降到 0：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>suffix_max[i] = max( nums[i], suffix_max[i+1] )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但 suffix_max[i] 包含了从 i 开始的值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于我们的需求，对于给定的 i，我们需要从索引 i+k 开始的后缀的最大值，也就是 suffix_max[i+k]，如果 i+k &lt; n，等等。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>suffix_max 定义：令 R_max[s] 表示后缀 s 到末尾的最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>类似地，R_min[s] 表示从 s 开始的后缀最小值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在对于给定的 i，在 j &gt;= i+k 的索引中，最大值就是 R_max[i+k]，如果 i+k &lt;= n-1；如果 i+k &gt; n-1，则为无效，但 i+k &lt;= n-1 必须成立，j 才存在。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>索引范围：i 从 0 到 n-1，j 从 i+k 到 n-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以对于固定的 i，如果 i+k &lt;= n-1，则 j 存在。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>否则，如果 i+k &gt; n-1，则没有 j 满足 j &gt;= i+k 且 j &lt; n，因此没有配对，忽略该 i。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>类似地，对于 min。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在回到候选值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于每个 i，其中 0 &lt;= i &lt;= n-1-k，因为 i+k &lt;= n-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>设 k = m-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在对于每个 i 在 0 到 n-1-k（包含）之间，所以有 n - k 个这样的 i。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于每个这样的 i：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果 nums[i] &gt;= 0，那么 candidate_i = nums[i] \\* R_max[i+k]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>否则，如果 nums[i] &lt; 0，那么 candidate_i = nums[i] \\* R_min[i+k]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后，全局的最大乘积是对所有 i 中 candidate_i 取最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但等等，这样对吗？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在子序列中，对于配对 (i,j)，其中 j = i + d，d &gt;= k，我们计算了乘积 nums[i] \\* nums[j]，而通过上面的方法，对于每个 i，我们选择了最佳 j，使得在约束条件下，该 i 的乘积最大化。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后取全部的最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但问题是要找出所有可能 (i,j) 中 nums[i]\\*nums[j] 的最大值，其中 j &gt;= i + k，而这正是我们在做的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在问题中，子序列是由第一个和最后一个元素定义的，但通过上述方法，我们覆盖了所有在距离约束下可能的配对。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>此外，在大小为 m 的子序列中，i 和 j 是索引，并且 j &gt;= i + m -1，因此是成立的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在，但我们需要确保存在一个大小为 m 的子序列，但正如我们之前讨论的，只要 j &gt;= i + k 且 k = m-1，就存在。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在，在代码中，我们需要处理所有 i。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于每个 i，candidate_i 如上所述计算。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后 max_product = 所有 i 中 candidate_i 的最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们需要在所有 i 上取最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在示例中检查。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例 1：nums = [-1,-9,2,3,-2,-3,1], m=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>m=1，k=0，所以 j &gt;= i + 0，所以每个 i 和 j=i，但 m=1，子序列大小为 1，所以只包含一个元素，因此 start=end，乘积是 nums[i]^2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在公式中，k=0，对于每个 i，j 在 i+0 到 n-1 之间，但主要是 j=i，所以 R_max[i+k] 当 k=0 时就是 R_max[i]，对于后缀最大值，但 R_max[i] 包括 i，所以当 j=i 时，nums[i] \\* R_max[i] 但 R_max[i] 至少是 nums[i]，但如果值更大，可能是 nums[i] 乘以更大值？不对。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当 k=0，对于索引 i，我们有 j &gt;= i，但 j 可能是 &gt;i，但此时对于大小为 1 的子序列，我们需要 j 恰好为 i。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在定义中，当 m=1 时，k=m-1=0，且 j &gt;= i，但 j 可以等于 i 或更大。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但对于大小为 1 的子序列，第一个和最后一个索引相同，所以只有 i=j。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以当 j &gt; i 时，配对 (i,j) 对于大小为 1 的子序列是无效的，因为大小为 1 时，索引为 i 的元素的子序列，start=end=i。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 j &gt;= i 的配对 (i,j) 中，但当 j&gt;i 时，对于大小为 1，我们只使用 j=i。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在公式中，当 k=0，对于每个 i，在 j &gt;= i 的索引中，我们计算 nums[i] _ max 或 min，但如果所有 j&gt;i 的值都更大，对于 nums[i] &gt;=0，candidate_i 可能是 nums[i] _ 最大值，但该值可能来自 j&gt;i，此时对于大小为 1 的子序列，该配对无效。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但在这个例子中，当 m=1，我们只需要 i=j 的配对。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以需要调整。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于索引为 i 的大小为 m 的子序列，但 m=1 是特殊情况。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>k = m-1，如果 m=1，k=0。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在，对于大小为 m 的子序列，当大小为 m，第一个索引 i，最后一个索引 j，满足 j &gt;= i + (m-1) = i + k。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于固定的第一个索引 i，可能的最后一个索引 j 至少为 i + k。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在大小为 m 的子序列中，第一个索引为 i，最后一个索引 j 满足 j &gt;= i + k。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但当我们选择 start 和 end 时，我们需要一个子序列来连接它们。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但正如我们所说的，只要 j &gt;= i + k，我们就可以有一个子序列。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而在乘积中，对于每个 i，我们计算以 i 开始、以 j 结束的子序列的可能乘积，但 j 是选择出来的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但在大小为 m 的子序列中，对于每个可能的 i，存在多个 j，j &gt;= i + k。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 candidate_i 中，我们得到了固定 i 下的最大可能值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于全局最大值，我们在所有 i 中取最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当 m=1 时，k=0，i 的范围是 0 到 n-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于每个 i，S 是满足 j &gt;= i 的索引集合，即 {i, i+1, ..., n-1}。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果 nums[i] &gt;=0，candidate_i = nums[i] \\* max{ nums[j] 对于 j &gt;= i }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但 max\\_{j&gt;=i} nums[j] 至少为 nums[i]，因此如果存在更大的 nums[j]，j&gt;i，candidate_i 可能大于 nums[i]^2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但对于大小为 1 的子序列，我们只能有该元素本身，所以乘积是 nums[i]^2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，对于 i，当 j&gt;i 时，配对 (i,j) 在大小为 1 的情况下是无效的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们需要的是，在大小为 m 的子序列中，当 m=1 时，只有 i=j 是有效的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当 k=0 时，约束 j &gt;= i + 0 包括 j = i 和 j &gt; i。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但 j &gt; i 时，对于大小为 m 的子序列，若第一个索引为 i，最后一个索引为 j，需要至少大小为 2，等等。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于大小为 m 的子序列，当第一个索引为 i，最后一个索引为 j 时，大小为 m 的子序列需要 j - i + 1 &gt;= m，但可能更大，但通过中间删除，我们可以得到大小为 m。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但大小为 m 的子序列，第一个索引为 i，最后一个索引为 j，要求 |{i..j}| &gt;= m，但大小是索引的数量。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例如，大小为 m，第一个为 i，最后一个为 j，那么元素数量是 j-i+1，但子序列只取 m 个元素，包括 i 和 j，所以只要 j-i+1 &gt;= m 就是可能的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但乘积是 nums[i] \\* nums[j]，并且 i 和 j 都在序列中。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在表达式 j &gt;= i + (m-1) = i + k 中，因为 k=m-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当 m=1 时，k=0，j &gt;= i，但 j 必须等于 i 才能有大小为 1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以当 k=0 时，只应包含 j=i 的对。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在我们的方法中，当 k=0，对于每个 i，candidate_i 在 j &gt;= i 的范围内，但只有在 j=i 时对于大小为 1 才有效。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>为了解决大小为一的情况，在计算每个 i 的 candidate_i 时，对于大小为 m 的情况，由于我们选择 j &gt;= i + k，并且当 j=i+k 时，如果我们选取所有中间元素，但在乘积中，我们只关心 nums[i] 和 nums[j]，中间的元素不参与乘积。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于大小为 m 的子序列，只要 j &gt;= i + k，就是有效的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但当 m=1 时，k=0，j 必须为 i，所以我们需要强制在大小为 1 时，j 恰好为 i。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>一般情况下，当 k=0，j &gt;= i 的集合 S 包含 j=i，但也包含 j&gt;i，对于 j&gt;i 的对 (i,j)，它对应于更大的子序列，但对于大小为 m=1，它不被允许。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此在定义中，对于大小为 m 的子序列，首尾的索引必须满足 j - i + 1 &gt;= m，但在乘积中，对任意满足 j &gt;= i + k 的 (i,j)，都对应一个以 i 开头、以 j 结尾的大小为 m 的子序列。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当 m=1 时，k=0，j &gt;= i 表示 j 可以是 i 或更大，但对于以 i 开头、以 j 结尾大小为 1 的子序列，只有当 j=i 时才可能。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果 j&gt;i，要拥有以 i 开头、以 j 结尾的子序列，序列大小至少为 2，因此对于 m=1 是不可能的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以对于大小为 m 的情况，当索引 i 和 j 满足 j = i + m -1 时，大小可以更大，但我们可以有大小为 m 的子序列。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但在约束 j &gt;= i + k 下，当 j = i + k，我们恰好有 m 个元素；当 j &gt; i + k，序列更大，但我们选择只包含 m 个元素的子序列。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但首尾元素是固定的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于乘积来说，是没问题的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但当 m=1 时，只有当 i=j 时才应被考虑。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在我们的方法中，当 k=0，对于每个 i，S 是 j &gt;= i 的集合，但当我们选择 j，我们只关心 nums[i] \\* nums[j]，对于大小为 m 的子序列，只要我们有首尾索引，j 应该至少是 i，但例如大小为 1，只取 j=i。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，在计算中，当大小为 m，并且 k=m-1，对于每个 i，可能的 j 是从 i+k 到 n-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于这些 j，乘积 nums[i]\\*nums[j] 是有效的，因为存在一个以 i 开头、以 j 结尾、大小为 m 的子序列。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当 m=1，k=0，对于每个 i，j 必须为 i，因此 S 应只包含 i。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但在公式中，当 k=0，对于 i，suffix 中的最大值可能包含 j=i 或其他值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但当我们定义 R*max[i+k] 时，当 k=0，R_max[i] 是从 i 开始的后缀的最大值，也就是 max*{j&gt;=i} nums[j]，而当我们写 candidate_i 时，对于 nums[i] &gt;=0，是 nums[i] \\* R_max[i]，这至少是 nums[i]^2，但可能更大，如果 R_max[i] 来自 j&gt;i。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但 j&gt;i 时，对于大小为 m=1 是不允许的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以我们需要修改。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于大小为 m 的子序列，有效对 (i,j) 是满足 j &gt;= i + (m-1) 的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当 m=1 时，j 必须 = i。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当 m=2 时，k=1，j &gt;= i+1，等等。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在计算中，对于每个 i，candidate_i 应仅针对从 i+k 开始的 j 计算。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于每个这样的 j，但我们是隐式地选择最好的 j。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在表达式 j &gt;= i+k 中，对于 j 在 [i+k, n-1] 中的每个，但我们在计算中固定 i 并选择最佳的 j。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但当 m=1，k=0，j 从 i 到 i，所以 j 必须为 i。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，在代码中，当 k=0 时，我们需要单独处理。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由于当 k=0 时，对于每个 i，只有 j=i 是可能的，candidate_i 是 nums[i]^2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后全局最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果 k&gt;0，那么对于每个 i，j 在 [i+k, n-1] 区间，并且我们使用 max 或 min。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在示例 1 中，m=1，k=0，nums = [-1,-9,2,3,-2,-3,1]，平方值：1,81,4,9,4,9,1，最大是 81，正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例 2：nums = [1,3,-5,5,6,-4]，m=3，k=2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以对于每个 i，j &gt;= i+2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>数组：索引：0:1, 1:3, 2:-5, 3:5, 4:6, 5:-4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i 的范围是 0 到 3，因为 i+2 &lt;=5，即 i&lt;=3。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i=0：nums[0]=1 &gt;=0，所以 candidate*0 = nums[0] \\* max*{j&gt;=2} nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>j&gt;=2：nums[2]=-5,3=5,4=6,5=-4，最大值是 6</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以 1 \\* 6 =6</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i=1：nums[1]=3&gt;=0，candidate*1 = 3 \\* max*{j&gt;=3} nums[j] = 3 * max(5,6,-4)=3*6=18</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i=2：nums[2]=-5&lt;0，所以 candidate*2 = (-5) \\* min*{j&gt;=4} nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>j&gt;=4：nums[4]=6,5=-4，min 是 -4？min 是 -4，但全部是 min？索引 4 和 5：nums[4]=6，nums[5]=-4，最小值是 -4。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>R_min[i+k] 当 i=2，i+k=4，suffix min 从索引 4 开始：min(6,-4) = -4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以候选值：(-5) \\* (-4) = 20</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i=3：nums[3]=5 &gt;=0，候选值 = 5 _ max\\_{j&gt;=5} nums[j] = 5 _ (-4) = -20？j=5，最大值是 -4。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在大小为 3 的子序列中，以 i=3 开始，那么可能的结束索引 j 为：当开始为 i，k=2，j&gt;=5？索引：开始于 i=3，然后 j &gt;= 3+2=5，所以 j=5。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>大小为 3：如果开始于索引 3，结束于索引 j，其中 j &gt;= 5。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>j=5，但只有索引 5，所以子序列必须包括索引 3,4,5？索引 3,4,5 是三个元素。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但结束索引为 j=5。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但开始是 i=3。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于 i=3，j&gt;=5，只有 j=5。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但大小为 m=3，从索引 3 开始到索引 5 结束，所以序列包括索引 3,4,5，但元素：索引 3:5, 4:6, 5:-4，首是 5，尾是 -4，乘积是 5 \\* (-4) = -20。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但在例子中，最大是 20，来自 [-5,6,-4]，开始于索引 2，结束于索引 4？索引 2 是 -5，索引 4 是 6，但大小为 3，所以需要中间元素。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在子序列中：例如，从索引 2 开始：num[2]=-5，结束于索引 4：num[4]=6，但索引 2 到 4，元素是索引 2,3,4：-5,5,6？或 -5,6,4？但必须保持顺序。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>可能的子序列：[-5,5,6] 开始和结束是 -5 和 6，乘积 (-5)\\*6= -30</span></span>
<span class="line"><span></span></span>
<span class="line"><span>或 [-5,5,-4] 开始和结束是 -5 和 -4，但结尾 -4 索引 5？索引 2,3,5：但索引 5 是 -4，但索引 3 是 5，所以序列为 -5,5,-4，首尾是 -5 和 -4，乘积是 20。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但索引：索引 2,3,5：开始索引 2，结束索引 5。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>j &gt;= i+k = 2+2=4，所以对于 i=2，j 可以为 4 或 5。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在计算中，对于 i=2，nums[2]=-5&lt;0，候选值 = (-5) \\* min\\_{j&gt;=4} nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>j&gt;=4：索引 4 和 5，nums[4]=6，nums[5]=-4，min 是 min(6,-4) = -4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以 (-5) \\* (-4) = 20，正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>类似地，如果 j=4，i=2，结束索引为 4，但 k=2，j&gt;=4，所以是可能的，乘积为 nums[2]*nums[4] = (-5)*6 = -30，更差。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但通过选择 min 为 j=5，我们得到更好的结果。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以对于 i=3，candidate=5 _ max\\_{j&gt;=5} nums[j] =5 _ (-4) = -20</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在所有候选值：i=0:6，i=1:18，i=2:20，i=3:-20，最大值是 20，正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例 3：nums = [2,-1,2,-6,5,2,-5,7], m=2, k=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以对于每个 i，j &gt;= i+1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>索引：0:2, 1:-1, 2:2, 3:-6, 4:5, 5:2, 6:-5, 7:7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i 的范围是 0 到 6，因为 i&lt;=6，j&gt;=i+1&lt;=7。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i=0：nums[0]=2 &gt;=0，candidate*0 = 2 \\* max*{j&gt;=1} nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>j&gt;=1：索引 1 到 7：-1,2,-6,5,2,-5,7，max 是 7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以 2\\*7=14</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i=1：nums[1]=-1&lt;0，candidate*1 = (-1) \\* min*{j&gt;=2} nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>suffix min 从索引 2 开始：min 的索引是 2 到 7：2,-6,5,2,-5,7，最小值是 -6（索引 3）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以 (-1)\\*(-6) =6</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i=2：nums[2]=2 &gt;=0，candidate*2 = 2 \\* max*{j&gt;=3} nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>j&gt;=3：3 到 7：-6,5,2,-5,7，最大值是 7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2\\*7=14</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i=3：nums[3]=-6&lt;0，candidate*3 = (-6) \\* min*{j&gt;=4} nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>j&gt;=4：索引 4 到 7：5,2,-5,7，最小值是 -5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以 (-6)\\*(-5)=30</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i=4：nums[4]=5&gt;=0，candidate*4 = 5 \\* max*{j&gt;=5} nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>j&gt;=5：索引 5,6,7：2,-5,7，最大值是 7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5\\*7=35</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i=5：nums[5]=2&gt;=0，candidate*5 = 2 \\* max*{j&gt;=6} nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>j&gt;=6：6,7：-5,7，最大值是 7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2\\*7=14</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i=6：nums[6]=-5&lt;0，candidate*6 = (-5) \\* min*{j&gt;=7} nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>j&gt;=7：索引 7，只有 7，所以最小值=7，但等等</span></span>
<span class="line"><span></span></span>
<span class="line"><span>R_min[7] = nums[7] =7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以 (-5)\\*7 = -35</span></span>
<span class="line"><span></span></span>
<span class="line"><span>候选值: 14,6,14,30,35,14,-35，最大是 35，来自 i=4，j&gt;=5，max 是 7，所以子序列为[5,7]，大小为 2，正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以方法有效。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在代码中，我们需要后缀最大值和最小值数组。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但我们在每个 i 中使用 R_max[i+k]和 R_min[i+k]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在，对于后缀最大值和最小值，我们可以预先计算。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>定义两个数组：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>设 max_suffix = [0]\\*n # 或者大小是 n</span></span>
<span class="line"><span></span></span>
<span class="line"><span>min_suffix = [0]\\*n</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 从右往左计算</span></span>
<span class="line"><span></span></span>
<span class="line"><span>max_suffix[n-1] = nums[n-1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>min_suffix[n-1] = nums[n-1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for i in range(n-2, -1, -1):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    max_suffix[i] = max(nums[i], max_suffix[i+1])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    min_suffix[i] = min(nums[i], min_suffix[i+1])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但 max_suffix[i] 是从 i 开始的后缀最大值，包括 i。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于索引 s，从 s 到结尾的最大值在 max_suffix[s]中。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>min 也是一样。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在，对于每个索引，i 从 0 到 n-1-k</span></span>
<span class="line"><span></span></span>
<span class="line"><span>k = m - 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于每个 i：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if nums[i] &gt;= 0:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        candidate = nums[i] * max_suffix[i+k]   # 因为j从i+k开始</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    else:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        candidate = nums[i] * min_suffix[i+k]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后取所有 i 的 candidate 的最大值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但需要处理当 i+k 可能无效的情况，但 i 从 0 到 n-1-k，所以 i+k &lt;= n-1，因此索引有效。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在代码中，i 从 0 到 n-k？索引：如果 n 个元素，索引从 0 到 n-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>令 last_i = n - 1 - k</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以 i 从 0 到 last_i 包含。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 Python 中，range(last_i+1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后 max_product = 所有候选中的最大值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是当没有元素时呢？m 至少为 1，n 至少为 1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在乘法中，当 m=1 且 k=0 时，如上所述，对于每个 i，我们使用 max_suffix[i+0] = max_suffix[i]，其中包括 nums[i]，但由于 m=1 时 j 必须为 i，但在 max_suffix[i] 中，当 j=i 时是没问题的，但 max_suffix[i] 可能大于 nums[i]，但由于我们乘以 nums[i]，如果 max_suffix[i] &gt; nums[i]，对于某些 j&gt;i，则当 i 固定时，候选值 nums[i]_max_suffix[i] 可能大于 nums[i]^2，但此时 m=1 时，j&gt;i 的子序列是无效的，但在我们的计算中，当 m=1 时，k=0，i+k=i，并且 max_suffix[i] 来自后缀，但当我们计算 nums[i] _ max_suffix[i]，如果 max_suffix[i] 来自 j&gt;i，那么对于该 j，当 j 为终点时，但起始 i 可能小于 j，因此序列更大。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但在大小为 m=1 的情况下，只有 (i,i) 是有效的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，在公式中，当 k=0，对于每个 i，suffix 中的最大值包括 j 从 i 到 n-1，因此当所有 j&gt;=i 中计算最大值时，最大可能出现在 j=i，或者 j&gt;i。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但在 candidate_i 中，对于 nums[i] &gt;=0，是 nums[i] _ 最大值，但由于最大值是在所有 j&gt;=i 中取，如果最大值在 j=i，那么就是 nums[i]^2，但如果最大值在 j&gt;i，那么对于该对 (i,j) 的乘积是 nums[i] _ max，但 j&gt;i 时，序列包含从 i 到 j 的元素，但大小为 m=1，仅包含一个元素，所以当 j&gt;i，起点 i 和终点 j 不可能同时在一个大小为 1 的序列中。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>矛盾。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当大小为 m=1 时，只有单个元素，因此索引 i 处，起点和终点都是 i。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当 k=0，约束 j &gt;= i + 0，但有效的只有 j=i。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以在计算时，当 k=0，对于每个 i，我们应设置 j=i，并且候选值 nums[i]^2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>类似地，在代码中，我们可以在 k=0 时特殊处理。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由于 m=1 时很简单，我们可以单独处理 m=1 的情况。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在代码中，对于 m=1，直接对所有 i 计算 nums[i]^2，然后取最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于 m&gt;1，使用上述方法。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在方法中，当 k=0，在公式中，对于 i，当我们使用 min_suffix[i+k] 或 max_suffix[i+k]，当 k=0，也就是 min_suffix[i] 或 max_suffix[i]，但对于 nums[i] &gt;=0，是 nums[i] \\* max_suffix[i]，这至少是 nums[i]^2，但也可能更大，但更大值对应的对在 m=1 时无效。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例如，nums = [1,2]，m=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>那么 i=0，candidate= nums[0] _ max_suffix[0] =1 _ max(1,2)=1\\*2=2，但 max_suffix[0]=2 来自索引 1，但有效的只有索引 0 处的元素，乘积 1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>错误。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以对于 m=1，我们需要强制 j=i。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，在代码中，最好将 m=1 作为特殊情况处理。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>同样地，在计算中，当 k = m - 1，并且对于每个 i，当我们计算 candidate_i 时，我们使用索引 i+k 开始的后缀，但当 j = i+k 时，没问题，而当后缀最大值来自 j &gt; i+k 时，在子序列中，我们仍然可以选择以 j 结尾且起始为 i 的大小为 m 的子序列，只要 j &gt;= i+k 即可。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 m=1 的情况下，k=0，但后缀最大值中包含 j=i 和 j&gt;i，但我们需要仅使用 j=i。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以对于 m=1，k=0，但 i+k = i，而 max_suffix[i] 可能来自索引 i，也可能来自更后，但当我们定义 R_max[i] 时，它可能并不在索引 i 处。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在计算中，对于固定起始索引 i，大小为 m 的子序列，可能的结尾索引 j &gt;= i + k，并且对于每个 j，乘积是固定的，但我们需要在 j 上进行选择以得到最大乘积。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于每个 i，candidate_i 是考虑所有可能的 j 时，该 i 下的最大可能乘积。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当 m=1 时，j 只能为 i，因此 candidate_i = nums[i]^2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当 m&gt;1 时，对于每个 i，candidate_i 是当 nums[i] &gt;=0 时为 nums[i] _ max_suffix[i+k]，否则为 nums[i] _ min_suffix[i+k]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，在算法中：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>设置 k = m - 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果 k &lt; 0：但 m 至少为 1，k=0 当 m=1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>处理 m=1 的情况。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果 m == 1：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    max_product = max( x*x for x in nums )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>否则：当 m &gt; 1，所以 k = m-1 &gt;= 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后，n 个元素，如果 n - k &lt; 0？k &gt;=1，n 至少为 m，所以 n &gt;= m，k &lt;= n-1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>令 last_i = n - 1 - k # 所以 i &lt;= last_i</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果 last_i &lt; 0，但 n &gt;= m，所以 last_i &gt;= 0？例如 n=1，m=1，已经处理过。当 m&gt;1 时，n 至少为 2，所以没问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>为 max_suffix 和 min_suffix 进行预计算。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 Python 中：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>max_suffix = [0]\\*n</span></span>
<span class="line"><span></span></span>
<span class="line"><span>min_suffix = [0]\\*n</span></span>
<span class="line"><span></span></span>
<span class="line"><span>max_suffix[-1] = nums[-1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>min_suffix[-1] = nums[-1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for i in range(n-2, -1, -1):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    max_suffix[i] = max(nums[i], max_suffix[i+1])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    min_suffix[i] = min(nums[i], min_suffix[i+1])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后初始化 max_product = -10\\*\\*18 或非常小</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后对于每个 i 在范围(0, n - k)：索引 i 从 0 到 n-1-k</span></span>
<span class="line"><span></span></span>
<span class="line"><span>last_i = n-1-k</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以 i 从 0 到 last_i（包括）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 Python 中：for i in range(0, last_i +1):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    s = i + k  # 起始索引为后缀</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在，如果 nums[i] &gt;= 0:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        candidate = nums[i] * max_suffix[s]   # max_suffix[s] 是从索引 s 开始的最大值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    else:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        candidate = nums[i] * min_suffix[s]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后 max_product = max(max_product, candidate)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最后返回 max_product</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 m&gt;1 的情况下，这样处理是没问题的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 m=1 的情况下，我们单独处理。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在示例 1 中，当 m=1 时，我们使用特殊处理。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在示例 2 和 3 中，也验证通过。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在，时间复杂度：O(n)，用于计算后缀数组和遍历。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>空间复杂度：O(n)，用于存储后缀数组。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但在后缀数组中，我们可以在每次迭代时直接计算，不过预计算也可以。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们可以不使用数组，而是从右向左迭代，维护右侧的最大值和最小值，但由于 k 是固定步长，当我们计算时，对于每个 i，我们需要从索引 i+k 开始的后缀最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在循环中，我们可以通过动态更新一个数据结构来实现，但预计算数组更简单。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在代码中，我们不需要完整存储所有值，但这样也可以。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另一种方式：由于我们只对每个 i 使用索引 s = i+k 的值，在循环中，我们可以先计算 max_suffix 和 min_suffix。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但为了节省空间，我们可以为后缀最大值和最小值使用两个数组，或者使用单个数据结构，但没必要。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在实现中，我假设数组可以修改等等。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但输入是给定的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在，边界情况：当 n = m 时。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例如，n=2，m=2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后 k=1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i 从 0 开始，s = i+k =1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于 i=0，如果 nums[0] &gt;=0，candidate = nums[0] \\* max_suffix[1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但 max_suffix[1] 是从索引 1 开始的值，也就是 nums[1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>同样地，乘积为 nums[0]\\*nums[1]，这是大小为 2 的唯一子序列。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>好。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另一个情况：所有值都是负数之类的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例如，nums = [-2, -1, -3, -4]，m=2，k=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>那么 i 从 0 到 2？n=4，k=1，last_i=4-1-1=2？索引：0,1,2,3；last_i = n-1-k = 3-1=2？k=1, n=4, 所以 i 从 0 到 2（因为 i&lt;=2 时 i+1&lt;=3）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i=0：nums[0]=-2&lt;0，candidate0 = (-2) \\* min\\_{j&gt;=1} nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>j&gt;=1：索引 1,2,3：-1,-3,-4，最小值是 -4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此 (-2)\\*(-4)=8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i=1：nums[1]=-1&lt;0，candidate1 = (-1) \\* min\\_{j&gt;=2} nums[j]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>j&gt;=2：索引 2,3：-3,-4，最小值是 -4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(-1)\\*(-4)=4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i=2：nums[2]=-3&lt;0，candidate2 = (-3) * min\\_{j&gt;=3} nums[j] = (-3)*min(-4) = (-3)\\*(-4)=12</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但大小为 2 的子序列，起始为 2，结束为 3，但索引 2 和 3，元素为 -3 和 -4，乘积为 12，正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但更大的子序列？但我们需要大小为 2 的序列。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但所有候选值：8,4,12，最大是 12。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但起始为 0，结束为 3 的序列：但大小为 4，而不是大小为 2。大小为 2，我们只取两个元素。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但乘积仅针对首尾元素。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在这个例子中，起始为 0 结束为 3，但大小是 4，但我们有大小为 2 的子序列，首尾不同。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以我们的方法在固定大小下是有效的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另一个例子：全部为正数，m=3。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>应该没问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以我认为是正确的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在代码中实现。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：在计算 min_suffix 和 max_suffix 时，我们包括起始索引。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在定义中，对于索引 s，suffix_max[s] 是从 s 开始的最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在乘积中，我们使用它。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在，编写伪代码或实际代码。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由于这是一个算法题，我需要提供解决方案。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但在上下文中，我需要输出代码。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>题目是中文的，但我应该写 Python。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>函数签名：给定 nums 和 m。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def maxProduct(nums, m):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    n = len(nums)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 处理m=1的情况</span></span>
<span class="line"><span>    if m == 1:</span></span>
<span class="line"><span>        max_sq = max(x*x for x in nums)</span></span>
<span class="line"><span>        return max_sq</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    k = m - 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 如果n &lt;= k？但m &lt;= n，所以当n == m时，k = m - 1 = n - 1，则last_i = n - 1 - k = n - 1 - (n - 1) = 0，所以只有一个i=0。</span></span>
<span class="line"><span>    # 例如，n=3，m=3，k=2，i从0到？last_i = n-1-k = 3-1-2？索引：0,1,2；n=3，k=2，last_i = n-1-k = 2-2？n-1-k = 2-2=0，所以i=0，s = i+k = 0+2=2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 预计算后缀最大值和最小值</span></span>
<span class="line"><span>    max_suffix = [0] * n</span></span>
<span class="line"><span>    min_suffix = [0] * n</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 最后一个元素</span></span>
<span class="line"><span>    max_suffix[-1] = nums[-1]</span></span>
<span class="line"><span>    min_suffix[-1] = nums[-1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 从右向左遍历</span></span>
<span class="line"><span>    for i in range(n-2, -1, -1):</span></span>
<span class="line"><span>        max_suffix[i] = max(nums[i], max_suffix[i+1])</span></span>
<span class="line"><span>        min_suffix[i] = min(nums[i], min_suffix[i+1])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 找到最后一个有效索引i</span></span>
<span class="line"><span>    last_i = n - 1 - k  # i从0到last_i（包含）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    max_prod = -10**18  # 一个非常小的数字</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for i in range(0, last_i + 1):</span></span>
<span class="line"><span>        s = i + k  # j的起始索引</span></span>
<span class="line"><span>        # s在0到n-1之间，且s &lt;= n-1</span></span>
<span class="line"><span>        if nums[i] &gt;= 0:</span></span>
<span class="line"><span>            candidate = nums[i] * max_suffix[s]</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            candidate = nums[i] * min_suffix[s]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if candidate &gt; max_prod:</span></span>
<span class="line"><span>            max_prod = candidate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return max_prod</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在计算 min_suffix 和 max_suffix 的循环中，索引正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 for 循环中，对 i 从 0 到 last_i。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>last_i 是 n-1-k，因此当 i=last_i 时，s=last_i + k = (n-1-k) + k = n-1，所以 min_suffix[s] 就是 min_suffix[n-1] = nums[n-1]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>很好。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>测试小例子。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例如，n=2, m=2：k=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>nums = [2,3]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>则 max_suffix: [max(2,3)=3, 3]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>min_suffix: [min(2,3)=2, 3] 等等，在 min_suffix 中：索引 1：min_suffix[1]=3，索引 0：min_suffix[0] = min(nums[0], min_suffix[1]) = min(2,3)=2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i 从 0 到 last_i：n=2,k=1, last_i= n-1-k=1-1=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i=0，s=0+1=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>nums[0]=2&gt;=0，candidate = 2 * max_suffix[1] =2 *3=6</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最大乘积 =6，正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果 nums[0]=-2, nums[1]=-3，则 min_suffix: [min(-2,-3)=-3? 索引 1:min_suffix[1]=-3, 索引 0: min_suffix[0]=min(-2, min_suffix[1])=min(-2,-3)=-3？但实际：从索引 0 开始：nums[0] 和 min_suffix[1]，所以 min_suffix[0]=min(-2,-3)=-3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于 i=0，nums[i]=-2&lt;0，candidate= (-2) * min_suffix[s] =(-2)*min_suffix[1] =(-2)\\*(-3)=6</span></span>
<span class="line"><span></span></span>
<span class="line"><span>很好。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以我认为是正确的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 m=1 的情况下，我们已经单独处理。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在示例 1 中，如果没有处理 m=1，但我们已经处理了。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在代码中，对于 m=1，我们直接返回最大平方。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>否则，执行上述操作。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但在处理 m=1 时，我们可以避免完整计算，但这样也没问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在时间上，O(n)。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在，数组中有 10^5 个元素，应该没问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在乘法时，数值最大为 10^5，所以乘积最大为 10^10，在 Python 中用 int 没问题，在 C++/Java 中可能用 long。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但在题目中，是用 Python，所以没关系。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在，我认为这是解决方案。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但题目中，子序列可能不包含某些元素，但我们的方法覆盖了所有可能的首和尾。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另一个点：在子序列中，对于固定的首和尾，可能有多个大小为 m 的子序列，但乘积是相同的，所以没问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，最终算法如上所述。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在，编写完整代码。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但在响应中，我应该输出代码。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>既然用户用中文提问，但代码是一样的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以：</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>要解决这个问题，我们需要在给定整数数组 <code>nums</code> 和整数 <code>m</code> 的情况下，找到任意大小为 <code>m</code> 的子序列中首元素和尾元素乘积的最大值。子序列是通过删除原数组中的一些元素（或不删除）但不改变剩余元素顺序而得到的数组。</p><h3 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h3><ol><li><strong>问题分析</strong>：对于大小为 <code>m</code> 的子序列，首元素和尾元素的索引记为 <code>i</code> 和 <code>j</code>，满足 <code>j &gt;= i + (m - 1)</code>（因为子序列需要包含 <code>m</code> 个元素，且保持原顺序）。因此，问题转化为在满足 <code>j &gt;= i + k</code>（其中 <code>k = m - 1</code>) 的索引对 <code>(i, j)</code> 中，找到 <code>nums[i] * nums[j]</code> 的最大值。</li><li><strong>关键观察</strong>：对于每个固定的起始索引 <code>i</code>，为了最大化 <code>nums[i] * nums[j]</code>: <ul><li>如果 <code>nums[i]</code> 非负，则 <code>nums[j]</code> 应取在 <code>j &gt;= i + k</code> 范围内的最大值。</li><li>如果 <code>nums[i]</code> 负，则 <code>nums[j]</code> 应取在 <code>j &gt;= i + k</code> 范围内的最小值（因为负负得正，且最小值的负数绝对值最大）。</li></ul></li><li><strong>高效计算</strong>： <ul><li>预处理数组的后缀最大值和后缀最小值数组 <code>max_suffix</code> 和 <code>min_suffix</code>，以便在 O(1) 时间内查询任意后缀的最大值和最小值。</li><li>遍历每个可能的起始索引 <code>i</code>（从 <code>0</code> 到 <code>n - 1 - k</code>），利用预处理数组计算当前 <code>i</code> 对应的候选最大值。</li></ul></li><li><strong>特殊情况处理</strong>：当 <code>m == 1</code> 时，子序列只有一个元素，首尾元素相同，因此只需返回所有元素平方的最大值。</li><li><strong>复杂度</strong>：预处理后缀数组需要 O(n) 时间，遍历索引需要 O(n) 时间，总时间复杂度 O(n)。空间复杂度 O(n) 用于存储后缀数组。</li></ol><h3 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现"><span>代码实现</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> maxProduct</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> m</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> len</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(nums)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 处理 m = 1 的特殊情况</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> m </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> max</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> x </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> x </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nums)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    k </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> m </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 距离约束</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 如果 k 使得没有有效索引对，但 m &lt;= n，所以通常不会发生</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> k </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">**</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">18</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 无解，但 m &lt;= n，所以这里不会执行</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 预计算后缀最大值和最小值数组</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    max_suffix </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    min_suffix </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 初始化最后一个元素</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    max_suffix[</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nums[</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    min_suffix[</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nums[</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 从右向左填充后缀数组</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        max_suffix[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> max</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(nums[i], max_suffix[i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">])</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        min_suffix[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> min</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(nums[i], min_suffix[i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    last_i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> k  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 最后一个有效起始索引</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    max_prod </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">**</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">18</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 初始化为非常小的值</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 遍历每个可能的起始索引 i</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(last_i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        start </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> k  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># j 的起始索引</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nums[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            candidate </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nums[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> max_suffix[start]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            candidate </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nums[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> min_suffix[start]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> candidate </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> max_prod:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            max_prod </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> candidate</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> max_prod</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码解释" tabindex="-1"><a class="header-anchor" href="#代码解释"><span>代码解释</span></a></h3><ol><li><strong>特殊情况处理</strong>（<code>m == 1</code>）：直接返回所有元素平方的最大值，因为子序列只有一个元素。</li><li><strong>预处理后缀数组</strong>： <ul><li><code>max_suffix[i]</code> 存储从索引 <code>i</code> 到数组末尾的最大值。</li><li><code>min_suffix[i]</code> 存储从索引 <code>i</code> 到数组末尾的最小值。</li><li>通过从右向左遍历数组，每个位置的值基于当前元素和下一个位置的后缀值更新。</li></ul></li><li><strong>遍历起始索引</strong> <code>i</code>： <ul><li><code>last_i = n - 1 - k</code> 确保 <code>j = i + k</code> 不超过数组边界。</li><li>对于每个 <code>i</code>，根据 <code>nums[i]</code> 的符号，选择使用 <code>max_suffix</code> 或 <code>min_suffix</code> 在 <code>start = i + k</code> 处取值，计算候选乘积。</li><li>更新全局最大乘积 <code>max_prod</code>。</li></ul></li><li><strong>返回值</strong>：最大乘积 <code>max_prod</code>。</li></ol><h3 id="示例测试" tabindex="-1"><a class="header-anchor" href="#示例测试"><span>示例测试</span></a></h3><ul><li><strong>示例 1</strong>：<code>nums = [-1,-9,2,3,-2,-3,1], m = 1</code>，输出 <code>81</code>，因为 <code>(-9)*(-9) = 81</code>。</li><li><strong>示例 2</strong>：<code>nums = [1,3,-5,5,6,-4], m = 3</code>，输出 <code>20</code>，因为子序列 <code>[-5, 6, -4]</code> 的首尾乘积 <code>(-5)*(-4) = 20</code>。</li><li><strong>示例 3</strong>：<code>nums = [2,-1,2,-6,5,2,-5,7], m = 2</code>，输出 <code>35</code>，因为子序列 <code>[5, 7]</code> 的首尾乘积 <code>5 * 7 = 35</code>。</li></ul><p>此解法高效且能处理数组长度达 10^5 的情况。</p>`,16)]))}const m=n(p,[["render",e],["__file","t3.html.vue"]]),u=JSON.parse('{"path":"/module_ai/weekly-contest-454/t3.html","title":"求数组子序列首尾积最大值","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"USER","slug":"user","link":"#user","children":[]},{"level":2,"title":"ASSISTANT","slug":"assistant","link":"#assistant","children":[{"level":3,"title":"解题思路","slug":"解题思路","link":"#解题思路","children":[]},{"level":3,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[]},{"level":3,"title":"代码解释","slug":"代码解释","link":"#代码解释","children":[]},{"level":3,"title":"示例测试","slug":"示例测试","link":"#示例测试","children":[]}]}],"git":{"createdTime":1751299769000,"updatedTime":1751299769000,"contributors":[{"name":"gdut-yy","username":"gdut-yy","email":"gdut_yy@163.com","commits":1}]},"readingTime":{"minutes":45.83,"words":13749},"filePathRelative":"module_ai/weekly-contest-454/t3.md","localizedDate":"2025年7月1日"}');export{m as comp,u as data};
