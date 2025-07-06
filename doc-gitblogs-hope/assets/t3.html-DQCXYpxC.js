import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as l}from"./app-D75trwlE.js";const e={};function p(d,s){return l(),a("div",null,s[0]||(s[0]=[i(`<h1 id="统计质数间隔平衡子数组" tabindex="-1"><a class="header-anchor" href="#统计质数间隔平衡子数组"><span>统计质数间隔平衡子数组</span></a></h1><ul><li>会话记录：<a href="https://yuanbao.tencent.com/chat/naQivTmsDa/41843a44-198e-458b-b2f7-8bb366b51d1b" target="_blank" rel="noopener noreferrer">https://yuanbao.tencent.com/chat/naQivTmsDa/41843a44-198e-458b-b2f7-8bb366b51d1b</a></li><li>无修改 AC。</li></ul><h2 id="user" tabindex="-1"><a class="header-anchor" href="#user"><span>USER</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>给定一个整数数组 nums 和一个整数 k。</span></span>
<span class="line"><span>子数组 被称为 质数间隔平衡，如果：</span></span>
<span class="line"><span>其包含 至少两个质数，并且</span></span>
<span class="line"><span>该 子数组 中 最大 和 最小 质数的差小于或等于 k。</span></span>
<span class="line"><span>返回 nums 中质数间隔平衡子数组的数量。</span></span>
<span class="line"><span>注意：</span></span>
<span class="line"><span>子数组 是数组中连续的 非空 元素序列。</span></span>
<span class="line"><span>质数是大于 1 的自然数，它只有两个因数，即 1 和它本身。</span></span>
<span class="line"><span>示例 1：</span></span>
<span class="line"><span>输入：nums = [1,2,3], k = 1</span></span>
<span class="line"><span>输出：2</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>质数间隔平衡子数组有：</span></span>
<span class="line"><span>[2,3]：包含 2 个质数（2 和 3），最大值 - 最小值 = 3 - 2 = 1 &lt;= k。</span></span>
<span class="line"><span>[1,2,3]：包含 2 个质数（2 和 3）最大值 - 最小值 = 3 - 2 = 1 &lt;= k。</span></span>
<span class="line"><span>因此，答案为 2。</span></span>
<span class="line"><span>示例 2：</span></span>
<span class="line"><span>输入：nums = [2,3,5,7], k = 3</span></span>
<span class="line"><span>输出：4</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>质数间隔平衡子数组有：</span></span>
<span class="line"><span>[2,3]：包含 2 个质数（2 和 3），最大值 - 最小值 = 3 - 2 = 1 &lt;= k.</span></span>
<span class="line"><span>[2,3,5]：包含 3 个质数（2，3 和 5），最大值 - 最小值 = 5 - 2 = 3 &lt;= k.</span></span>
<span class="line"><span>[3,5]：包含 2 个质数（3 和 5），最大值 - 最小值 = 5 - 3 = 2 &lt;= k.</span></span>
<span class="line"><span>[5,7]：包含 2 个质数（5 和 7），最大值 - 最小值 = 7 - 5 = 2 &lt;= k.</span></span>
<span class="line"><span>因此，答案为 4。</span></span>
<span class="line"><span>提示：</span></span>
<span class="line"><span>1 &lt;= nums.length &lt;= 5 * 10^4</span></span>
<span class="line"><span>1 &lt;= nums[i] &lt;= 5 * 10^4</span></span>
<span class="line"><span>0 &lt;= k &lt;= 5 * 10^4</span></span>
<span class="line"><span>\`\`java</span></span>
<span class="line"><span>class Solution {</span></span>
<span class="line"><span>    public int primeSubarray(int[] nums, int k) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="assistant" tabindex="-1"><a class="header-anchor" href="#assistant"><span>ASSISTANT</span></a></h2><details class="hint-container details"><summary>已深度思考(用时 9 分 31 秒)</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>注意：子数组需要至少包含两个质数，并且子数组中所有质数的最大值与最小值的差&lt;=k。</span></span>
<span class="line"><span>但是，子数组中可能包含非质数，我们只关心质数部分。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>思路：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.  我们需要判断每个数是否为质数。由于 nums[i]最大为 50000，我们可以预先计算出 50000 以内的所有质数（使用筛法）。</span></span>
<span class="line"><span>2.  我们并不需要枚举所有子数组（那样会是 O(n^2)），因为 n 最大为 50000，我们需要更高效的方法。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>观察：</span></span>
<span class="line"><span>条件要求子数组中至少有两个质数，并且这些质数的最大值-最小值&lt;=k。</span></span>
<span class="line"><span>我们可以考虑只关注质数，并记录每个质数的位置（在数组中的索引）。但是，子数组是连续的，所以包含的质数也必须是连续的数组元素，但质数在数组中的位置不一定连续。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，题目要求的是连续子数组，所以我们需要考虑在连续子数组中满足条件的质数集合。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另一种思路：</span></span>
<span class="line"><span>我们可以考虑使用双指针（滑动窗口）？但是条件是关于质数的最大值和最小值，而且子数组中可能夹杂非质数，并且要求至少两个质数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：子数组中的非质数可以被忽略，但子数组中如果包含多个质数，我们需要知道这些质数的最大值和最小值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们可以这样：</span></span>
<span class="line"><span>遍历数组，用一个列表或数组记录每个质数的值以及它的索引（同时记录索引是为了知道哪些质数在同一个子数组中）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，连续子数组的质数可能不是连续的（在质数值上），但它们在数组中的位置是连续的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如何高效地统计？</span></span>
<span class="line"><span>我们可以考虑只考虑质数，然后寻找满足条件的质数集合，但要求这些质数在原数组中连续？不，要求它们在原数组中连续出现（即索引连续？不，子数组是连续的，所以这些质数在数组中的位置也必须是连续的（但不必连续相邻，只要在子数组的范围内连续出现即可））。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实际上，问题可以转化为：在数组中，有一些位置是质数（值为质数），我们考虑一个连续子数组，这个子数组至少包含两个质数，且这些质数（在子数组中出现的质数）的最大值减去最小值&lt;=k。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们可以这样：</span></span>
<span class="line"><span>遍历数组，使用双指针（滑动窗口）来维护一个区间，使得这个区间内的质数的最大值与最小值之差&lt;=k。但是，区间内的所有质数我们都要考虑，而且我们要求至少两个质数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，这里有个问题：我们移动左指针时，区间内的质数集合会动态变化，我们需要维护区间内质数的最小值和最大值。但是，区间内质数可能会很多，而且我们无法简单地用一个变量维护最小最大值（因为当左指针移动时，可能移除的是最小值或最大值，这时需要更新）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们可以用两个单调队列（或两个堆）来动态维护当前窗口内的质数的最小值和最大值？但是，我们移动窗口时，非质数我们不关心，只关心质数。而且，我们要求的是子数组中质数的最大值减最小值&lt;=k。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但注意：我们的双指针需要保证在区间[left, right]内所有质数的最大值-最小值&lt;=k，并且要统计所有满足条件的子数组。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，如果区间内有两个质数 p1 和 p2，p1&lt;p2，那么最大值减最小值就是 p2-p1。如果区间内有多个质数，那么最大值减最小值就是最大的质数减最小的质数。因此，我们需要维护当前窗口内所有质数的最小值和最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，我们移动右指针，加入一个质数 p，那么更新最小值：min = min(min, p)，最大值：max = max(max, p)。然后我们检查 max-min&lt;=k。如果满足，那么以 left 开头的，当前 right 结束的子数组满足条件吗？不一定，因为我们的窗口要求是连续区间，但这里我们要求的是窗口内任意两个质数的差都&lt;=k？实际上，我们只要求窗口内所有质数的最大值减最小值&lt;=k，那么任意两个质数的差肯定都&lt;=k（因为两个质数的差一定在[min, max]之间，而最大值减最小值&lt;=k，则任意两个质数的差一定&lt;=max-min&lt;=k）。所以条件是充分的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，当我们加入一个新的质数，如果它比原来最小值小，或者比最大值大，那么可能会使得 max-min&gt;k。此时我们需要移动左指针。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，这里有一个关键：当移动左指针时，我们可能移除一个质数，也可能移除非质数。移除非质数不会改变当前窗口的质数集合，所以我们需要记录窗口内质数的集合，但更关心最小和最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们可以这样设计：</span></span>
<span class="line"><span>我们使用双指针 left 和 right，并维护当前窗口内质数的有序集合（或者维护最小值和最大值，以及质数集合的变化）。</span></span>
<span class="line"><span>但是，由于需要动态更新最小最大值，我们可以用两个堆（最小堆和最大堆）？但是堆的删除操作是 O(logn)，而我们要删除任意元素（左指针移动时移除的元素）需要知道位置，所以可以用 TreeSet（或类似的有序集合）来维护当前窗口内的质数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>步骤：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.  预计算质数表（max_val = 50000）。</span></span>
<span class="line"><span>2.  初始化：left=0, right=0，一个 TreeSet（用于保存当前窗口内质数的值），一个变量 count 记录满足条件的子数组数量。</span></span>
<span class="line"><span>3.  遍历 right 从 0 到 n-1：</span></span>
<span class="line"><span>    - 如果 nums[right]是质数，则将其加入 TreeSet。</span></span>
<span class="line"><span>    - 当 TreeSet 的大小&gt;=2（即至少两个质数）时，检查当前 TreeSet 的最大值（last）和最小值（first）的差是否&lt;=k？</span></span>
<span class="line"><span>      如果大于 k，则我们需要移动左指针，直到这个差值&lt;=k（或者直到 TreeSet 的大小小于 2？）或者直到我们把导致差值过大的那个质数移除（但可能是多个质数的共同作用）？</span></span>
<span class="line"><span>    - 实际上，我们加入一个质数后，可能会使得最大值-最小值&gt;k，此时我们需要移动左指针，不断移除元素（直到移除某个质数，使得差值变小到满足条件，或者 TreeSet 中剩下的质数满足条件）？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，这里我们想统计以当前 right 结尾的满足条件的子数组有多少？我们并不需要移动 left 直到 TreeSet 为空，我们只需要保证当前窗口内的质数满足 max-min&lt;=k 即可。然而，即使当前窗口不满足，我们移动 left 直到满足或者窗口内质数少于两个，那么此时窗口内满足的区间是：left 到 right（调整后的窗口）内的所有质数满足条件。但是，注意：连续子数组，我们要计算的是以 right 结尾的，且满足条件的子数组数量？但是，满足条件的子数组并不一定以 right 结尾。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另一种统计方式：我们想要的是所有满足条件的连续子数组的个数。</span></span>
<span class="line"><span>我们可以这样：每次右指针移动，然后我们移动左指针直到窗口内的质数满足 max-min&lt;=k（或者窗口内质数少于 2 个）。那么，对于当前 right，满足条件的子数组数量就等于当前窗口内所有以 right 结尾的子数组（即 left 到 right, left+1 到 right, ... , 当前窗口的左边界到 right）中那些至少包含两个质数的子数组？但注意，我们调整左指针后，当前窗口内的质数满足 max-min&lt;=k，那么窗口内任意一个包含至少两个质数的连续子数组都满足条件吗？不一定，因为如果我们从 left 到 right 之间取一个更小的区间，可能这个区间只包含两个质数，这两个质数的差&lt;=k，但是可能我们窗口内还有其他的质数，但整个窗口内的质数的最大值减最小值&lt;=k，那么这个小区间内的质数的最大值减最小值一定&lt;=整个窗口的最大值减最小值，所以也&lt;=k。所以，在调整后的窗口中，任何包含至少两个质数的子数组都满足条件？不对，因为子数组是窗口的一部分，但是可能只包含了窗口中的部分质数。例如，窗口内有质数[2,5,3]，整个窗口最大值 5-最小值 2=3&lt;=k（假设 k=3），那么包含 2 和 5 的子数组（但中间没有 3）不一定在这个子数组中（因为子数组是连续的，所以必须包含中间的元素？注意，2 和 5 可能不连续？在窗口内，这些质数是连续的数组位置吗？是的，因为窗口是连续的，所以 2 和 5 之间一定有 3（但 3 也是质数），所以实际上，如果我们的窗口是[2,5,3]（在数组中的位置连续），那么任何包含 2 和 5 的子数组一定包含 3？不一定，如果子数组是[2,5]（跳过中间的 3？），但数组是连续的，所以 2 和 5 不能单独出现而不包含中间的元素（因为子数组要求连续）。所以，如果我们取一个子数组包含 2 和 5，那么它必须包含 2 和 5 之间的所有元素（包括 3）。因此，在这个窗口内，任意一个子数组包含的质数集合一定是窗口内质数集合的一个子集（连续的区间使得包含的质数一定是连续的？在数组位置上连续，但数值不一定连续）。所以，这些质数的最小值一定&gt;=窗口内质数的最小值，最大值一定&lt;=窗口内质数的最大值，所以最大值减最小值&lt;=窗口内质数的最大值减最小值&lt;=k。因此，整个窗口满足条件，则窗口内的任意一个包含至少两个质数的子数组都满足条件。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意：我们这里统计的是以 right 结尾的连续子数组，所以对于当前 right，满足条件的子数组就是从当前 left 到 right 之间，所有以 right 结尾的子数组，并且这些子数组包含至少两个质数？但是，我们移动左指针后，窗口内的质数满足条件，那么从 left 到 right 之间，以 right 结尾的子数组，我们并不需要每个都检查，因为整个窗口内的质数最小值是 min_val，最大值是 max_val，且 max_val-min_val&lt;=k，那么从 left 到 right 之间的任何位置开始，到 right 结束，只要包含至少两个质数，就满足条件。那么，以 right 结尾的满足条件的子数组数量就是：在[left, right]区间内，满足以下条件的起始位置 i 的个数：从 i 到 right 这个子数组包含至少两个质数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，如何快速计算这个数量？我们可以记录每个位置是否为质数，然后记录窗口内质数的总个数？然后，我们需要知道在[left, right]区间内，有多少个起始位置 i，使得从 i 到 right 这个子数组包含至少两个质数？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另一种思路：我们固定右端点 right，找到最小的 left，使得[left, right]内的质数满足 max-min&lt;=k，那么对于这个右端点，所有在[left, right]区间内的左端点 i（满足从 i 到 right 的质数个数&gt;=2）都是有效的？但这里有个问题：即使整个区间满足 max-min&lt;=k，但是如果我们去掉左边的一些质数，剩下的子数组可能不包含两个质数？所以，我们还需要确保每个子数组至少包含两个质数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们可以这样：</span></span>
<span class="line"><span>在双指针移动过程中，我们维护的窗口（left 到 right）内的质数满足 max-min&lt;=k（且至少有两个质数）。那么，对于当前的 right，我们需要统计窗口内所有起始位置 i，使得[i, right]包含至少两个质数。但是，由于窗口是从 left 到 right，所以我们要求 i 在[left, right]内，并且从 i 到 right 之间至少有 2 个质数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：我们移动左指针时，一旦窗口内的质数满足 max-min&lt;=k，那么我们就固定 left。但是，窗口内的质数个数可能大于 2，所以我们需要知道在[left, right]区间内，所有以 right 结尾的子数组（即起始位置 i 从 left 到 right）中，有多少个包含至少两个质数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，我们也可以这样：我们并不需要统计每个右端点对应多少起始点，而是每次找到一个有效的窗口（即[left, right]内质数满足条件），然后我们就知道以 right 结尾的，起始位置 i 从 left 到“某个位置”（这个位置需要保证从 i 到 right 至少有 2 个质数）都是有效的。但是，这个“某个位置”是哪里？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>其实，我们可以在窗口内记录质数的位置。假设当前窗口的质数集合为 S（有序的 TreeSet，按值排序，但我们还需要知道每个质数的索引吗？不，我们只需要知道质数个数？）实际上，我们还需要知道质数的位置，因为起始位置 i 不能小于窗口内最小的质数位置？不对。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>更好的思路是：我们固定右端点 right，然后我们想要的是起始位置 i（i&lt;=right）的个数，使得[i, right]包含至少两个质数，并且这些质数的 max-min&lt;=k。我们通过移动左指针，使得当前窗口[left, right]内的质数满足 max-min&lt;=k（且至少两个），那么对于这个 right，起始位置 i 可以是 left 到 right，但是前提是从 i 到 right 之间必须包含至少两个质数。那么，我们可以记录当前窗口内质数出现的位置，然后按位置排序，那么从 i 开始到 right，包含质数的个数，我们可以用质数的位置数组来快速判断吗？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这似乎很麻烦。我们需要重新考虑。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>改变思路：我们使用两个 TreeSet：</span></span>
<span class="line"><span>一个按质数的值排序（用于快速获取当前窗口内质数的最小值和最大值），另一个按质数的索引排序（用于移除质数时方便？）实际上，我们移除元素时是根据左指针移动，移除的是 nums[left]（可能是质数也可能是非质数），如果是质数，我们就从按值排序的 TreeSet 中移除。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>具体步骤：</span></span>
<span class="line"><span>我们用两个指针 left 和 right，并维护一个 TreeSet（按质数的值排序，用于快速获取最小最大值）和另一个变量（比如数组的标记）来标记质数，以及一个变量记录当前窗口内质数的位置（实际上，我们不需要按位置保存，只需要在移除的时候能移除那个值）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，移除的时候：当 left 右移时，我们检查 nums[left]是不是质数，如果是，则从 TreeSet 中移除这个值。然后更新当前窗口（重新计算 TreeSet 的 first 和 last？）或者 TreeSet 会自动更新。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后，在每次加入新的质数（right 指针）后，我们检查 TreeSet 是否至少有两个元素，并且最大值减最小值是否&lt;=k。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 如果不满足，则移动 left 指针（移除元素）直到满足或 TreeSet 中质数个数不足两个。</span></span>
<span class="line"><span>- 但注意：我们可能移除一个质数，它可能是最小值或最大值，所以移除后差值可能会变小。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后，如果当前 TreeSet 至少有 2 个质数（即满足至少两个质数且 max-min&lt;=k），那么以当前 right 结尾的，起始位置 i 可以在当前的 left 和 right 之间，但必须保证[i, right]这个区间内至少有两个质数。那么，i 的最大值不能超过什么？i 不能大于当前窗口内倒数第二个质数的位置？不对，因为可能区间内有很多质数，只要包含至少两个质数即可。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们可以这样：记录当前窗口内第一个质数的位置（最小的索引）和最后一个质数的位置（最大的索引）？不，我们记录质数的位置是为了限制 i：使得从 i 开始到 right，至少包含两个质数。实际上，我们只需要在[left, right]区间内找到第一个质数的位置（记为 first_index）和第二个质数的位置（但不需要）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>其实，如果当前窗口内质数个数为 cnt，那么从第一个质数所在位置（记为 p1）到最后一个质数之前的任意位置（包括 p1）开始，到 right 结束，都至少包含两个质数？不一定，因为如果从 p1+1 开始，那么可能跳过了 p1，而下一个质数还在，所以包含的质数个数至少是 cnt-1（可能&gt;=2，也可能变成 1，甚至 0）。因此，我们需要知道窗口内质数出现的位置。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们可以用列表按索引顺序记录当前窗口内的所有质数的索引。那么，要保证子数组[i, right]至少有两个质数，则 i 必须小于等于第(cnt-1)个质数的索引（即倒数第二个质数的索引）。因为从第 0 个质数到第 cnt-1 个质数，如果我们取 i 大于第 0 个质数（第一个质数）的索引，那么从 i 开始到 right，可能只包含最后一个质数（如果 i 大于倒数第二个质数，那么只能包含最后一个质数）。因此，为了让[i, right]至少包含两个质数，i 必须小于等于窗口内倒数第二个质数的索引。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，对于当前窗口，i 的取值范围是：从 left 到 min(窗口内倒数第二个质数的索引)（包含）。因为窗口内质数的位置是分散的，我们按位置排序后，倒数第二个质数的位置记为 lastSecondIndex（即第二大的索引？不对，按索引大小排序，最大索引是最后一个质数，那么倒数第二大的索引就是倒数第二个质数的位置）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：我们有一个窗口内质数的 TreeSet（按值排序）和一个按索引顺序的列表？或者我们同时按索引保存质数的值？为了得到窗口内质数按索引排序的列表，我们可以用一个 LinkedList（但要求按索引顺序）或 TreeSet 按索引排序。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但我们已经有按值排序的 TreeSet，我们需要按索引排序的质数位置来得到倒数第二个质数的索引？所以我们需要额外的数据结构。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>为了简化，我们可以在移动指针时维护：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 一个按值排序的 TreeSet（用于得到最小和最大质数，以检查条件）</span></span>
<span class="line"><span>- 一个按索引排序的质数位置列表（用 LinkedHashSet？或者用双端队列？）但我们需要快速得到倒数第二个质数的索引，所以我们可以用一个 List（动态更新）？但 List 的删除操作是 O(n)，我们可能不能接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另一种思路：我们维护当前窗口内所有质数的索引（按索引顺序）可以用一个 TreeSet（按索引排序）。这样，我们可以快速找到窗口内最大的质数索引（last）和最小的质数索引（first），但我们需要的是按索引排序的第二个质数（即按索引从小到大的顺序，第二个出现的质数）？不对，我们需要的是在窗口内按索引排序，倒数第二大的索引（即最大索引的上一个）？不对，我们要求的是：对于起始位置 i，它必须小于等于窗口内质数索引中第(cnt-1)大的？实际上，为了得到至少两个质数，我们必须包含至少两个质数，那么起始位置 i 必须小于等于窗口中第(cnt-1)个质数的索引（这里 cnt 是窗口内质数个数）。例如，窗口内有 3 个质数，索引分别为 i0, i1, i2（从小到大），那么 i 必须小于等于 i1（即第二个质数的索引），这样[i, right]至少包含两个质数（因为 i&lt;=i1，那么从 i1 到 right 一定有至少两个质数：包括 i1 和 i2）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们可以用一个 TreeSet（按索引排序）来保存当前窗口内所有质数的索引，那么第(cnt-1)个质数的索引就是取第 k 大的问题？我们可以用 treeSet.iterator()然后取，但效率低。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>或者我们用一个链表来记录窗口内质数的索引（按索引顺序），这样当添加一个质数（在 right 位置）时，我们就将 right 加入到链表尾部（保证按索引升序）。删除时（在 left 位置），如果 left 索引是质数，则从链表中删除 left（需要遍历链表找到删除？O(n)）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们可以用 TreeSet 按索引存储质数索引（这样自然就是按索引排序的），然后我们可以得到头（first）和尾（last）和 headSet 等。但是，要得到第 cnt-1 个元素，我们可以这样：在 TreeSet 中有方法 first(), last(), 以及 lower(E e)（小于 e 的最大元素）和 higher(E e)（大于 e 的最小元素）。那么，我们可以先 last()得到最后一个质数的索引，然后取它的前一个？即 treeSet.lower(last)？不对，我们是要取第 cnt-1 大的索引，也就是取所有质数索引中第 2 大的索引（从小到大排序，第 2 大的索引）？不对，我们要的是第（质数个数-1）大的索引，也就是从最小的索引算起第 cnt-1 个位置（也就是倒数第二个位置）。由于 TreeSet 按索引升序排列，那么我们可以用 treeSet.first()得到第一个质数的索引，然后得到第(cnt-1)个质数的索引？但 TreeSet 不支持随机访问。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们考虑额外维护：当前窗口内质数的个数 cnt，以及当前窗口内质数的索引的列表（用 ArrayList，但删除任意元素时需要 O(n)）。因为 n 最大 50000，而 left 移动时，最多移除 n 次，总共操作 O(n^2)？所以不能用 ArrayList。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们需要高效的数据结构：用 TreeSet 按索引存储质数索引，那么如何快速得到第 cnt-1 个质数的索引？我们可以维护一个堆（优先队列）？但需要中间删除。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>其实，我们并不需要知道确切是第几个，只需要知道：在窗口内，所有质数的索引中的倒数第二个索引（即第二大的索引）？不对，我们要求的是：起始位置 i 必须小于等于窗口内最小质数索引？不对，也不对。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>重新思考：在窗口[left, right]内，所有质数的索引记为 p0, p1, ..., p*{m-1}（按索引从小到大排序），那么起始位置 i（从 left 到 p*{m-2}）的每个 i，[i, right]都包含 p*{m-2}和 p*{m-1}（因为 i&lt;=p*{m-2}，所以包含 p*{m-2}和 p*{m-1}），因此一定至少包含两个质数。而 i 从 p*{m-2}+1 到 p*{m-1}，可能只包含 p*{m-1}（如果中间没有其他质数），所以不满足至少两个。i 大于 p*{m-1}的情况？那就不包含任何质数了。因此，有效的 i 是 left 到 p*{m-2}（包含）的整数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，对于当前窗口，满足条件的起始位置 i 的数量是：p\\_{m-2} - left + 1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们只需要知道窗口内质数的最大索引（p*{m-1}）和第二大的索引（p*{m-2}）？不对，是窗口内质数的按索引排序的倒数第二个元素（即所有质数索引中第二大的那个）？不对，应该是按索引从小到大排序的序列中的倒数第二个元素（即索引值第二大的？不对，是按索引值从小到大排列，然后正数第 m-1 个元素（从 0 开始））？实际上，我们按索引从小到大排序，则索引最小的质数位置是 p0，最大的质数位置是 p*{m-1}。那么，为了让[i, right]包含至少两个质数，i 必须小于等于 p*{m-2}（这里 p*{m-2}是第 m-1 个质数，即按索引排序的最后一个质数的前一个质数的索引）。注意：p*{m-2}是索引第二大的那个吗？不对，索引第二大的应该是 p*{m-2}（在排序数组中的下标为 m-2），它的值就是倒数第二小的索引值？不对，实际上，我们按索引从小到大排序：</span></span>
<span class="line"><span>索引：p0, p1, p2, ... , p*{m-1} (满足 p0&lt;p1&lt;...&lt;p*{m-1})</span></span>
<span class="line"><span>那么倒数第二个质数的索引就是 p*{m-2}。但是，注意：我们要求 i&lt;=p*{m-2}，这样[i, right]就包含了 p*{m-2}和 p*{m-1}（因为 p*{m-2}&gt;=i，p\\_{m-1}在 right 之前，自然在[i, right]中）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，我们需要得到当前窗口内质数索引集合中，按索引排序后，倒数第二个元素的索引值（即第二大索引？不对，是第二大的索引值？不对，是序列中倒数第二个元素的索引值，也就是 p*{m-2}）。注意，这个值并不一定是第二大的索引值（因为索引值从大到小排的话，第二大就是 p*{m-2}），所以我们按升序排列，取索引列表中的第 m-2 个元素（索引为 m-2）即可？但是，我们在 TreeSet（按索引升序）中，如何快速得到 p*{m-2}？我们可以用 treeSet.lower(last)？因为 last 是 p*{m-1}（最大索引），那么 treeSet.lower(p*{m-1})就是比 p*{m-1}小的最大索引，那就是 p*{m-2}（因为按升序排列，p*{m-1}的前一个就是 p*{m-2}）。所以，如果我们知道当前窗口内质数索引的最大值 last，那么 p*{m-2} = treeSet.lower(last)？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>那么，我们就需要维护一个 TreeSet（按索引升序）来存储质数的索引（记为 indexSet）。同时，我们还需要一个 TreeSet（按值升序）来存储质数的值（记为 valueSet），用于检查 max-min&lt;=k。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>步骤：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.  预计算质数表（max_n=50000）。</span></span>
<span class="line"><span>2.  初始化两个 TreeSet: valueSet（按质数值升序）和 indexSet（按质数的索引升序）。</span></span>
<span class="line"><span>3.  初始化 left=0, count=0。</span></span>
<span class="line"><span>4.  遍历 right 从 0 到 n-1：</span></span>
<span class="line"><span>    - 如果 nums[right]是质数，则将其值加入 valueSet，并将其索引加入 indexSet。</span></span>
<span class="line"><span>    - 然后，如果 valueSet 的大小&gt;=2（即至少两个质数），则循环判断：如果 valueSet.last() - valueSet.first() &gt; k，则移动 left：</span></span>
<span class="line"><span>      将 nums[left]从窗口移除（如果 nums[left]是质数，则从 valueSet 和 indexSet 中移除它），然后 left++。</span></span>
<span class="line"><span>      重复此过程直到 valueSet 的大小&lt;2 或者 valueSet.last()-valueSet.first()&lt;=k。</span></span>
<span class="line"><span>    - 如果 valueSet 的大小&gt;=2（说明此时满足条件），那么：</span></span>
<span class="line"><span>      得到 indexSet 的最后一个元素（最大索引）lastIndex = indexSet.last()（实际上就是当前加入的 right，因为 right 是最后加入的索引，但不一定，因为可能前面有更大的索引？不对，我们按顺序加入，索引是递增的，所以当前 right 一定是最大的索引，所以 lastIndex=right）。</span></span>
<span class="line"><span>      然后，我们求 indexSet.lower(lastIndex)得到第二大质数的索引（即最大的质数索引的上一个，也就是倒数第二个质数的索引）记为 secondLastIndex。</span></span>
<span class="line"><span>      （注意：indexSet 中存放的是当前窗口内的所有质数的索引，按索引升序排序。所以，lastIndex 就是当前窗口内最大质数索引，secondLastIndex 就是最大的质数索引的上一个，即第二大质数索引？不对，是索引值第二大的？不对，比如窗口内质数索引为{1,3,5}，lastIndex=5，那么 indexSet.lower(5)就是 3，这个 3 就是第二大质数索引？按索引值，3 是第二大，但是按位置排序，3 就是 5 的前一个元素。）</span></span>
<span class="line"><span>      那么，有效的起始位置 i 的数量就是：secondLastIndex - left + 1。</span></span>
<span class="line"><span>      然后 count += (secondLastIndex - left + 1)</span></span>
<span class="line"><span>    - 但是，注意：当前窗口满足条件，但可能有多个质数，那么有效的起始位置 i 从 left 到 secondLastIndex。然而，这里我们假设窗口内至少有两个质数（已经保证了），所以 secondLastIndex 存在。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，这里有一个问题：当我们加入一个质数后，可能使得窗口不满足条件（max-min&gt;k），然后我们移动 left（可能移除多个质数），直到满足条件（max-min&lt;=k）或者质数不足两个。如果满足条件后，质数个数大于等于 2，那么我们就按照上述方式计算。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，移动 left 的过程中，我们移除了非质数，那么 valueSet 和 indexSet 不变，但 left 增加了，所以有效起始位置的数量 secondLastIndex - left + 1 中的 left 增加了，所以数量会减少？是的，这是合理的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，还有一种情况：移动 left 时，可能移除了一个质数，从而使得 valueSet 的 max-min&lt;=k（因为移除的质数可能是最小值或最大值），此时循环停止，然后我们计算有效起始位置。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然而，这个计算是否覆盖了所有以 right 结尾的满足条件的子数组？我们只计算了当前窗口内（left 到 right）中起始位置在 left 到 secondLastIndex 之间的子数组。但是，有没有可能起始位置在 secondLastIndex 之后，并且[i, right]包含至少两个质数？根据前面的分析，没有。因为如果 i&gt;secondLastIndex，那么[i, right]中只可能包含 right（一个质数），或者不包含任何质数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，上述计算是正确的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意：当我们加入一个质数后，移动 left 可能导致窗口内质数个数小于 2，那么我们就跳过计算（不满足至少两个质数），然后继续下一个 right。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，还有一种情况：移动 left 时，我们移除了一个质数，然后当前窗口的质数变为不足两个，那么我们就停止移动 left（因为已经不足两个了，不满足条件），所以就不会计算。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，有可能我们移动 left 后，窗口内质数个数为 0 或 1，那么我们就跳出循环，并且不计算。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，整个步骤：</span></span>
<span class="line"><span>for (int right=0; right&lt;n; right++) {</span></span>
<span class="line"><span>if (isPrime(nums[right])) {</span></span>
<span class="line"><span>valueSet.add(nums[right]);</span></span>
<span class="line"><span>indexSet.add(right);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>while (!valueSet.isEmpty() \\u0026\\u0026 valueSet.size()&gt;=2 \\u0026\\u0026 valueSet.last()-valueSet.first()&gt;k) {</span></span>
<span class="line"><span>if (left&lt;n \\u0026\\u0026 isPrime(nums[left])) {</span></span>
<span class="line"><span>valueSet.remove(nums[left]);</span></span>
<span class="line"><span>indexSet.remove(left);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>left++;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 现在，当前窗口可能满足条件（max-min&lt;=k）或者不满足（比如不足两个质数）</span></span>
<span class="line"><span>if (valueSet.size()&gt;=2) {</span></span>
<span class="line"><span>// 一定有至少两个质数，并且 max-min&lt;=k</span></span>
<span class="line"><span>int lastIndex = indexSet.last();</span></span>
<span class="line"><span>// 找 lastIndex 的前一个（在 indexSet 中小于 lastIndex 的最大元素）</span></span>
<span class="line"><span>int secondLastIndex = indexSet.lower(lastIndex);</span></span>
<span class="line"><span>count += (secondLastIndex - left + 1);</span></span>
<span class="line"><span>} else {</span></span>
<span class="line"><span>// 不足两个质数，跳过</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，这里有没有重复计数？每个子数组只会被它的右端点统计一次。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，这里有一个问题：当我们移除 left 时，left 的位置可能不是质数，所以我们可能会移除多个非质数，导致 left 移动很多步。在移除非质数时，valueSet 和 indexSet 不变，所以条件（max-min&gt;k）可能一直不满足（如果非质数移除了，但质数集合没有变化，所以 max-min 不变），所以会一直移动 left 直到 left 超过 right？不会，因为当 left==right 时，valueSet 中最多只有当前一个质数（因为我们刚加入，然后 left 移除时我们移除了非质数？实际上，加入后如果值不超过 k，那么就不进入 while 循环，所以不会移除。只有当超过 k 时，我们才进入循环。所以，当加入一个质数后，如果导致 max-min&gt;k，我们就移动 left（直到 max-min&lt;=k 或不足两个质数）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，可能会死循环？比如，left 已经大于 right 了？不会，因为 left&lt;=right，当 left==right 时，我们可能移除 right 位置的质数（如果 left==right 且该位置是质数），那么 indexSet 和 valueSet 会移除这个质数，然后 left++变成 right+1，窗口为空。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，上面的算法是可行的吗？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们考虑一种情况：当加入一个质数后，我们移动 left，然后移除了一个非质数，而 valueSet 和 indexSet 没有变化，所以 max-min&gt;k 仍然成立，所以会继续移动 left，直到把窗口内某个质数移除（如果 left 移动到一个质数位置）或者 left 超过 right。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，循环条件中，我们需要在 left&lt;=right 的范围内移动 left。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，由于我们每次加入一个 right（索引为 right）后，left 可能移动到 right+1，那么窗口内就没有元素了，valueSet 为空，然后我们跳出 while 循环，并且 valueSet.size()&lt;2，所以不计数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另一个问题：我们移动 left 时，可能移除的质数不是导致 max-min 过大的那个？所以移除后，max-min 可能仍然大于 k，然后我们继续移除，直到移除某个关键质数（最小值或最大值）使得差值变小。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，这个算法是合理的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，需要注意的是：indexSet 按索引排序，而 indexSet.last()返回的是最大的索引（即按索引排序的最后一个元素），而 indexSet.lower(last)返回的是小于 last 的最大索引（也就是 last 的前一个质数的索引），这样是符合要求的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，考虑窗口内只有一个质数的情况：我们不会进入计算部分。所以没有风险。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，还有一个问题：我们每次计算以 right 结尾的子数组时，我们只计算了从 left 到 secondLastIndex 的起始位置。但是，当我们移动 left 后，窗口是[left, right]，而这个窗口满足条件，那么我们计算 secondLastIndex - left + 1。但是，有没有可能，我们移动 left 之前，窗口内的质数索引是[1,3,5]，移动 left 到 2，然后窗口为[2,5]（索引 2 和 3 和 4？不对，left 移动时是按顺序移除的，所以从 left=0 移动到 left=2，移除了索引 0 和 1，那么索引 1 上的质数被移除，所以窗口内质数索引为 3 和 5（假设索引 0 不是质数，索引 1 是质数，索引 2 非质数，索引 3 质数，索引 4 非质数，索引 5 质数）。那么，indexSet 中就是{3,5}。indexSet.last()=5，indexSet.lower(5)=3，所以 secondLastIndex=3，然后 count += (3-2+1)=2。那么，以 right=5 结尾的子数组，起始位置可以是 2 和 3？但是，我们要看子数组是否满足：</span></span>
<span class="line"><span>起始位置 2：[2,5]：包含索引 3（nums[3]）和索引 5（nums[5]）的质数，并且两个质数的差？valueSet={nums[3], nums[5]}，假设差&lt;=k，所以两个子数组：</span></span>
<span class="line"><span>[2,5]：包含 2,3,4,5，其中质数有 3 和 5。</span></span>
<span class="line"><span>[3,5]：包含 3,4,5，其中质数有 3 和 5。</span></span>
<span class="line"><span>所以确实有两个子数组。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，计数是合理的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们需要考虑：移除非质数时，indexSet 不变，而 left 增加。那么计算时，有效起始位置数量是 secondLastIndex - left + 1，其中 left 增加了，所以数量会减少。例如，left 移动前，secondLastIndex 为 10，left 为 5，那么有 10-5+1=6；移动 left 到 7（移除非质数），那么数量变为 10-7+1=4，减少了 2。这 2 个减少正好对应起始位置 5 和 6（因为移除非质数并不影响质数集合，所以这些子数组仍然是有效的？不对，我们移动了 left，起始位置就不能再包括 5 和 6 了？不对，注意：我们移动 left 后，窗口起点是 7，所以以 5 和 6 开头的子数组已经不包括在窗口[left,right]内了，而我们要求起始位置在 left 之后（包括 left），所以确实是减少的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，上述算法应该正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，边界：当窗口内质数个数为 2 时，secondLastIndex 是什么？比如质数索引为{1,3}，那么 lastIndex=3，indexSet.lower(3)=1，那么有效起始位置从 left 到 1，那么子数组个数是 1-left+1。注意，left 应该小于等于 1（因为窗口内最小索引就是 1）。例如，left=0，那么 1-0+1=2？不对，有效起始位置只能是 0 和 1？但是：</span></span>
<span class="line"><span>起始位置 0：子数组[0,3]包含质数 1 和 3（因为索引 0 和 1 和 2 和 3，其中索引 1 和 3 是质数）。</span></span>
<span class="line"><span>起始位置 1：子数组[1,3]包含质数 1 和 3。</span></span>
<span class="line"><span>起始位置 2：子数组[2,3]只包含索引 3 的质数（不足两个）。</span></span>
<span class="line"><span>起始位置 3：子数组[3,3]只包含一个质数。</span></span>
<span class="line"><span>所以，只有 0 和 1 两个起始位置。而 0&lt;=i&lt;=1（因为 secondLastIndex=1）所以数量=1-0+1=2，正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意：质数索引集合中，索引为 1 的质数，它的位置是 1，那么 i=0 和 i=1 是有效的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们写下代码：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，效率：TreeSet 的删除和插入是 O(logn)，而每个元素最多加入和删除一次，所以总的时间复杂度 O(n log n)。n 为 50000，可以接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另外，我们预先处理质数表（筛法）时间复杂度 O(n log log n)，可以接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>具体步骤：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 筛法求素数。</span></span>
<span class="line"><span>2. 使用两个 TreeSet：valueSet（存储质数值）和 indexSet（存储质数的索引）。注意：valueSet 可能会有重复值吗？数组元素可能重复，但是同一个位置的值是唯一的，所以值可能重复？但是 TreeSet 是不允许重复的。如果同一个质数值出现在两个位置，那么 valueSet 只能存一个？这是不对的。比如，两个质数都是 2，我们加入两个 2，但是 TreeSet 会去重，我们只能得到一个 2。这样，如果我们移除其中一个 2，就会把整个 2 都移除？错误。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，valueSet 不能只存值，因为不同的位置可能有相同的值。我们需要的是：当前窗口内所有质数的值（可能重复）以及索引？但是，条件要求的是最大质数和最小质数，如果有两个相同的质数，那么最小值和最大值都是 2，差 0&lt;=k。但是，TreeSet 中存一个 2，那么移除时怎么办？我们不能移除一个值导致所有相同的都移除。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们不能只用一个 TreeSet 来存储值。应该怎么存储？我们可以用 TreeSet&lt;Element&gt;，但元素包括值和索引？不行，因为我们需要比较值的大小，而且移除的时候我们通过索引来移除。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，我们考虑：我们实际上需要知道当前窗口内质数的最大值和最小值。那么，我们可以用两个堆（最小堆和最大堆）？堆中存储质数值，以及该值的位置。但是，堆的删除操作（指定元素）不容易。所以，我们可以用两个 TreeSet：一个用于存值，但是要区分不同位置的相同值？所以我们需要用一个对象（包含值和位置），然后按值排序？但是，如果我们只关心最大值和最小值，我们可以用两个 TreeSet（一个按值升序，一个按值降序），并且支持通过索引来删除元素？不行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另一种办法：我们不要单独存值，我们只需要当前窗口内质数的最大值和最小值。那么，我们可以用一个 TreeMap（key 是质数值，value 是这个值出现的次数）来维护当前窗口内的质数值。这样，我们可以得到最小值（firstKey），最大值（lastKey），也可以根据值来删除（但要删除指定值，而我们删除时需要知道移除哪个质数？当我们移动 left，如果 nums[left]是质数，我们就从 TreeMap 中移除这个值（计数减 1，计数为 0 就移除）。这样，我们就可以动态更新质数的最大值和最小值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们还需要一个 TreeSet 来存储质数的索引（indexSet），用于找到倒数第二个质数的索引。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，我们可以这样：</span></span>
<span class="line"><span>用 TreeMap&lt;Integer, Integer&gt; valueMap（key:质数值, value:出现次数）来维护当前窗口内的质数值。</span></span>
<span class="line"><span>用一个 TreeSet&lt;Integer&gt; indexSet 来维护当前窗口内的质数索引。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>那么，在移除 left 位置的元素时：</span></span>
<span class="line"><span>如果是质数，我们做：</span></span>
<span class="line"><span>valueMap.put(value, valueMap.get(value)-1);</span></span>
<span class="line"><span>if (valueMap.get(value)==0) valueMap.remove(value);</span></span>
<span class="line"><span>indexSet.remove(left); // 因为 indexSet 存储的是索引，所以直接移除索引 left。</span></span>
<span class="line"><span>然后，判断条件：valueMap 的 size()&gt;=2 并且 valueMap.lastKey()-valueMap.firstKey()&gt;k。但是，这里注意：即使 valueMap 中有多个值，但它们的个数不影响，我们只关心最小值和最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>步骤调整：</span></span>
<span class="line"><span>遍历 right:</span></span>
<span class="line"><span>如果 nums[right]是质数：</span></span>
<span class="line"><span>indexSet.add(right);</span></span>
<span class="line"><span>valueMap 中：valueMap.put(nums[right], valueMap.getOrDefault(nums[right],0)+1);</span></span>
<span class="line"><span>然后，如果 valueMap 中的 key 的个数&gt;=2（即不同值的质数至少有 2 种？注意：如果只有一个值出现了两次，则 size()=1，因为 key 是唯一的。所以这里不能按 size()&gt;=2，而应该按总的质数个数&gt;=2？）但是，题目要求至少两个质数，所以即使两个质数值相同，也是满足至少两个质数的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>那么，我们应该用 valueMap 中的总质数个数（即所有 value 之和）&gt;=2？不对，我们不需要知道总个数，因为条件一：至少两个质数，条件二：最大质数值-最小质数值&lt;=k。而 TreeMap 中的最大值和最小值就是当前窗口内质数的最大最小值（不管出现了几次）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，当 valueMap.size()==1 时（即只有一个质数值），那么最大值=最小值，如果出现次数&gt;=2，我们仍然需要满足条件一（至少两个质数），而且条件二：0&lt;=k，所以满足。但是，TreeMap 中 size()=1，但质数个数&gt;=2，所以我们不能用 size()&gt;=2 作为条件进入循环？而应该用质数的总个数？不行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，我们用一个额外的变量 countPrimes 记录当前窗口内质数的总个数。这样，当 countPrimes&gt;=2 时，我们才检查差值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们引入一个 countPrimes。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>步骤更新：</span></span>
<span class="line"><span>初始化：left=0, count=0, countPrimes=0, valueMap（TreeMap），indexSet（TreeSet）。</span></span>
<span class="line"><span>for right in [0, n-1]:</span></span>
<span class="line"><span>if isPrime(nums[right]):</span></span>
<span class="line"><span>countPrimes++;</span></span>
<span class="line"><span>indexSet.add(right);</span></span>
<span class="line"><span>valueMap.put(nums[right], valueMap.getOrDefault(nums[right],0)+1);</span></span>
<span class="line"><span>// 检查条件并移动 left: 当 countPrimes&gt;=2 且 当前质数的最大值-最小值&gt;k 时，移动 left</span></span>
<span class="line"><span>while (left&lt;=right \\u0026\\u0026 countPrimes&gt;=2 \\u0026\\u0026 valueMap.lastKey()-valueMap.firstKey()&gt;k) {</span></span>
<span class="line"><span>if (isPrime(nums[left])) {</span></span>
<span class="line"><span>countPrimes--;</span></span>
<span class="line"><span>indexSet.remove(left);</span></span>
<span class="line"><span>// 更新 valueMap</span></span>
<span class="line"><span>int v = nums[left];</span></span>
<span class="line"><span>valueMap.put(v, valueMap.get(v)-1);</span></span>
<span class="line"><span>if (valueMap.get(v)==0) {</span></span>
<span class="line"><span>valueMap.remove(v);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>left++;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>if (countPrimes&gt;=2) { // 此时一定满足差值&lt;=k，因为前面的循环保证了</span></span>
<span class="line"><span>int lastIndex = indexSet.last();</span></span>
<span class="line"><span>// 找 lastIndex 的前一个（窗口内质数索引中，小于 lastIndex 的最大索引）</span></span>
<span class="line"><span>int secondLastIndex = indexSet.lower(lastIndex);</span></span>
<span class="line"><span>count += (secondLastIndex - left + 1);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，上面的循环条件中，left&lt;=right 可能不需要？因为 left&lt;=right 在循环内判断。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：当 countPrimes&lt;2 时，跳出循环。所以循环内，我们保证 countPrimes&gt;=2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，考虑 valueMap.size()可能为 0（没有质数），或者 1（只有一个质数值，但可能有多个质数），那么 lastKey 和 firstKey 会抛异常。所以在循环条件中，我们还需要确保 valueMap 非空。但是 countPrimes&gt;=2 保证 valueMap 至少有一个元素？不对，countPrimes&gt;=2 说明至少有两个质数，所以 valueMap 至少有一个键（因为可能重复），所以不会有空。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，valueMap.lastKey()在 valueMap 为空时会抛异常，所以我们加上非空判断：while (left&lt;=right \\u0026\\u0026 countPrimes&gt;=2 \\u0026\\u0026 !valueMap.isEmpty() \\u0026\\u0026 valueMap.lastKey()-valueMap.firstKey()&gt;k)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，countPrimes&gt;=2 保证了 valueMap 非空（因为至少两个质数，至少有一个键）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们可以省略!valueMap.isEmpty()。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后，我们考虑另一种情况：窗口内有多个质数，但移动 left 后，countPrimes 变成 1（不足两个），那么循环就停止，我们就不计算。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，有可能移除 left 后，countPrimes&gt;=2 且差值&lt;=k？那么循环停止，我们会计算。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，循环后，如果 countPrimes&gt;=2，我们就计算。如果循环后 countPrimes&lt;2，我们就不计算。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们考虑这样一种情况：窗口内有质数值[2,5,3]（假设 k=2），那么最大值 5-最小值 2=3&gt;k。那么进入循环，移动 left：如果 left 位置的数是 2（质数），移除后，窗口内质数为[5,3]（假设两个质数的索引还在），那么最大 5-最小 3=2&lt;=k，循环停止。然后我们计算：质数个数=2&gt;=2，满足，然后计算。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，在计算 secondLastIndex 时，indexSet.last()返回什么？是当前窗口内最大索引（right，因为是最后加入的）。然后 indexSet.lower(lastIndex)返回当前窗口内索引第二大（即最后一个索引的上一个）的索引。注意：这个索引对应的质数值可能不是最小值或最大值，但不影响我们计算起始位置的范围。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，有一个问题：indexSet.last()一定等于 right 吗？不一定，因为 right 可能不是质数（所以 indexSet 中不会加入 right），但我们加入条件要求 nums[right]是质数才加入 indexSet。所以，如果 nums[right]是质数，那么 right 一定在 indexSet 中。而且，由于 right 是最大的索引（因为数组从左到右遍历，索引递增），所以 indexSet.last()就是 right（前提是当前加入的质数，且没有移除）。但是，在 while 循环中，我们可能已经移除了 right？不可能，因为 left 从 0 开始移动，而 right 是当前遍历的位置，left&lt;=right，如果 left 移动到 right+1，那么 indexSet 中会移除 right？在 while 循环中，如果 left 移动到 right，然后移除 right（如果 right 是质数），那么 indexSet 中就没有 right 了。但是，注意，我们是在加入 right 后才进入 while 循环。然后，在 while 循环内，如果 left 移动到 right，我们移除 right（然后 countPrimes 减少，然后 left++变成 right+1），然后跳出 while 循环。然后我们在 countPrimes&gt;=2 的条件判断时，countPrimes 可能已经变为 0（如果只移除了 right）？所以，不会进入计算部分。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，我们只有在加入 right 且 right 是质数时，indexSet 中才有 right。然后，在 while 循环中，如果移除 right，那么 indexSet 中就没有 right 了，所以 indexSet.last()就不会是 right（可能已经移除，那么 indexSet.last()是当前最大的，但不一定是 right）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们需要在计算的时候，indexSet.last()可能是之前加入的某个质数的索引（不一定是 right）。但是，没关系，因为我们要的是当前窗口内质数索引的最大值，用 lastIndex 来找到它的前一个。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，如何保证 lastIndex 一定大于 secondLastIndex？因为 indexSet 中按索引升序，lastIndex 是最大的，所以 secondLastIndex=indexSet.lower(lastIndex)一定小于 lastIndex。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，代码：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Solution {</span></span>
<span class="line"><span>public int primeSubarray(int[] nums, int k) {</span></span>
<span class="line"><span>int n = nums.length;</span></span>
<span class="line"><span>// 预计算质数表，max_val=50000</span></span>
<span class="line"><span>int max_val = 50000;</span></span>
<span class="line"><span>boolean[] isPrime = new boolean[max_val+1];</span></span>
<span class="line"><span>// 初始化所有数标记为质数</span></span>
<span class="line"><span>Arrays.fill(isPrime, true);</span></span>
<span class="line"><span>isPrime[0] = false;</span></span>
<span class="line"><span>isPrime[1] = false;</span></span>
<span class="line"><span>for (int i=2; i*i&lt;=max_val; i++) {</span></span>
<span class="line"><span>if (isPrime[i]) {</span></span>
<span class="line"><span>for (int j=i*i; j&lt;=max_val; j+=i) {</span></span>
<span class="line"><span>isPrime[j] = false;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          // 用于存储质数索引的TreeSet（按索引升序）</span></span>
<span class="line"><span>          TreeSet&lt;Integer&gt; indexSet = new TreeSet&lt;&gt;();</span></span>
<span class="line"><span>          // 用于存储质数值的TreeMap（值：出现次数）</span></span>
<span class="line"><span>          TreeMap&lt;Integer, Integer&gt; valueMap = new TreeMap&lt;&gt;();</span></span>
<span class="line"><span>          int left = 0;</span></span>
<span class="line"><span>          int countPrimes = 0;</span></span>
<span class="line"><span>          int count = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          for (int right=0; right&lt;n; right++) {</span></span>
<span class="line"><span>              // 如果当前数是质数</span></span>
<span class="line"><span>              if (nums[right] &lt;= max_val \\u0026\\u0026 isPrime[nums[right]]) {</span></span>
<span class="line"><span>                  countPrimes++;</span></span>
<span class="line"><span>                  indexSet.add(right);</span></span>
<span class="line"><span>                  valueMap.put(nums[right], valueMap.getOrDefault(nums[right], 0)+1);</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>              // 如果当前窗口的质数个数&gt;=2 且 最大值-最小值&gt;k，则移动left</span></span>
<span class="line"><span>              // 注意：可能当前质数个数不足2，所以不需要移动。</span></span>
<span class="line"><span>              while (left&lt;=right \\u0026\\u0026 countPrimes&gt;=2 \\u0026\\u0026 valueMap.lastKey()-valueMap.firstKey()&gt;k) {</span></span>
<span class="line"><span>                  if (nums[left] &lt;= max_val \\u0026\\u0026 isPrime[nums[left]]) {</span></span>
<span class="line"><span>                      countPrimes--;</span></span>
<span class="line"><span>                      indexSet.remove(left);</span></span>
<span class="line"><span>                      int v = nums[left];</span></span>
<span class="line"><span>                      valueMap.put(v, valueMap.get(v)-1);</span></span>
<span class="line"><span>                      if (valueMap.get(v)==0) {</span></span>
<span class="line"><span>                          valueMap.remove(v);</span></span>
<span class="line"><span>                      }</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span>                  left++;</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>              // 此时，如果窗口内质数个数&gt;=2，则一定满足max-min&lt;=k</span></span>
<span class="line"><span>              if (countPrimes&gt;=2) {</span></span>
<span class="line"><span>                  // 获取窗口内质数的最大索引</span></span>
<span class="line"><span>                  int lastIndex = indexSet.last();</span></span>
<span class="line"><span>                  // 获取lastIndex的前一个质数索引</span></span>
<span class="line"><span>                  int secondLastIndex = indexSet.lower(lastIndex);</span></span>
<span class="line"><span>                  // 有效的起始位置从left到secondLastIndex（包含）</span></span>
<span class="line"><span>                  count += (secondLastIndex - left + 1);</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          return count;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，测试一下示例 1：nums = [1,2,3], k=1</span></span>
<span class="line"><span>初始化：left=0, countPrimes=0, valueMap 和 indexSet 空。</span></span>
<span class="line"><span>right=0: 1-&gt; 不是质数，跳过。然后循环不进入（countPrimes=0），然后不计算，count=0。</span></span>
<span class="line"><span>right=1: 2 是质数，加入 indexSet={1}，valueMap={2:1}，countPrimes=1。循环不进入，countPrimes=1，不计算。</span></span>
<span class="line"><span>right=2: 3 是质数，加入 indexSet={1,2}，valueMap={2:1, 3:1}，countPrimes=2。</span></span>
<span class="line"><span>进入循环：检查 valueMap: lastKey=3, firstKey=2, 3-2=1&lt;=k，不进入循环。</span></span>
<span class="line"><span>计算：lastIndex=indexSet.last()=2, secondLastIndex=indexSet.lower(2)=1（因为 2 的前一个索引是 1）。</span></span>
<span class="line"><span>count += (1-0+1)=2 -&gt; count=2.</span></span>
<span class="line"><span>返回 2，正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例 2：nums = [2,3,5,7], k=3</span></span>
<span class="line"><span>right0: 2 -&gt; 加入 indexSet={0}，valueMap={2:1}，countPrimes=1 -&gt; 不计算。</span></span>
<span class="line"><span>right1: 3 -&gt; 加入 indexSet={0,1}，valueMap={2:1,3:1}，countPrimes=2。</span></span>
<span class="line"><span>检查: 3-2=1&lt;=3 -&gt; 不进入循环。</span></span>
<span class="line"><span>计算: lastIndex=1, secondLastIndex=0 -&gt; count=0-0+1=1。</span></span>
<span class="line"><span>right2: 5-&gt; 加入 indexSet={0,1,2}，valueMap={2:1,3:1,5:1}，countPrimes=3。</span></span>
<span class="line"><span>检查: 5-2=3&lt;=3 -&gt; 不进入循环。</span></span>
<span class="line"><span>计算: lastIndex=2, secondLastIndex=indexSet.lower(2)=1 -&gt; count += (1-0+1)=2 -&gt; count=1+2=3.</span></span>
<span class="line"><span>（注意：这里以 2 结尾的，起始位置可以是 0 和 1，共 2 个？那么两个子数组：[0,2]和[1,2]）</span></span>
<span class="line"><span>[0,2]: 2,3,5 -&gt; 质数 2,3,5 -&gt; 最大值 5-最小值 2=3&lt;=3 -&gt; 满足。</span></span>
<span class="line"><span>[1,2]: 3,5 -&gt; 质数 3,5 -&gt; 5-3=2&lt;=3 -&gt; 满足。</span></span>
<span class="line"><span>[0,2]包含 3 个质数，符合至少两个。</span></span>
<span class="line"><span>right3: 7-&gt; 加入 indexSet={0,1,2,3}，valueMap={2:1,3:1,5:1,7:1}，countPrimes=4。</span></span>
<span class="line"><span>检查: 7-2=5&gt;3 -&gt; 进入循环：</span></span>
<span class="line"><span>移除 left=0：2（质数）-&gt; countPrimes=3，indexSet={1,2,3}，valueMap={3:1,5:1,7:1}。</span></span>
<span class="line"><span>检查: 7-3=4&gt;3 -&gt; 继续移动 left。</span></span>
<span class="line"><span>left=1: 3（质数）-&gt; countPrimes=2, indexSet={2,3}，valueMap={5:1,7:1}。</span></span>
<span class="line"><span>检查: 7-5=2&lt;=3 -&gt; 跳出循环。</span></span>
<span class="line"><span>此时 left=2。</span></span>
<span class="line"><span>计算: lastIndex=3, secondLastIndex=indexSet.lower(3)=2 -&gt; count += (2-2+1)=1 -&gt; count=3+1=4.</span></span>
<span class="line"><span>所以总 count=4。</span></span>
<span class="line"><span>验证：以 right=3 结尾的，起始位置只能是 2：对应子数组[2,3] -&gt; 包含 5 和 7，差值 2&lt;=3 -&gt; 满足。</span></span>
<span class="line"><span>（实际上，根据示例，还有[2,3,5]等等，但是我们已经统计了四个：前一个 right=2 结束的 2 个，right=3 开始的前一个循环统计了 1 个（right=1 时 1 个），然后 right=3 统计 1 个，一共 4 个）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们再看：</span></span>
<span class="line"><span>在 right1 结束时，我们计数 1：这个 1 是指起始位置 0（[0,1]这个子数组？）</span></span>
<span class="line"><span>[0,1]: 2,3 -&gt; 差值 1&lt;=3 -&gt; 正确。</span></span>
<span class="line"><span>所以总计数=1（right1）+2（right2）+1（right3）=4。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们可能会多计数？比如，一个子数组可能被多个右端点统计？不会，每个子数组被它的结束位置统计。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，在示例 1 中，子数组[1,2,3]也被统计了（在 right=2 时，起始位置 0：子数组[0,2]就是[1,2,3]）。所以这个子数组被统计了。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，我们完成代码。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意：在处理非质数时，我们只考虑质数。所以，数组中的非质数不会加入，但是连续子数组中包含了非质数，我们在计算时通过记录质数的索引来确保。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，有一个问题：在加入质数时，如果质数超过 max_val（50000）？题目说明：1&lt;=nums[i]&lt;=50000，所以不会超过。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，代码实现：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，注意：isPrime 数组大小为 50001（0 到 50000）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另外，在移除 left 时，left 的索引一定是在 indexSet 中（如果它是质数）？因为我们只加入质数。所以在移除质数时，我们直接从 indexSet 中 remove(left)，不会出错。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，如果 left 位置的数不是质数，我们就不进行移除操作。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们提交后，可能会超时？因为双指针移动过程中，left 可能会移动很多步（每一步做 TreeSet 和 TreeMap 操作，O(log n)），总时间复杂度 O(n log n)。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，最坏情况：左指针移动 n 步，右指针移动 n 步，总共移动 2n 步，每一步 O(log n)，所以是 O(n log n)，n=50000，大约 50000*log2(50000)≈50000*16=800000，可以接受。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，在循环中，我们可能会在每一步 right 都移动 left 很多步？比如，数组是递增的质数，k 很小，那么每次加入一个大的质数，都需要将 left 移动到最后一个质数位置？这样时间复杂度可能是 O(n^2)？不对，因为每个元素最多被移除一次，所以移除操作的总次数是 O(n)，因此内层循环总次数是 O(n)。所以是整体 O(n)？不对，内层循环虽然每个元素被移除一次，但是每个 right 我们都要判断内层循环。但是，left 是单调增的，所以整个过程中 left 从 0 到 n，不会减少。所以，内层循环的总次数最多是 n（因为 left 移动的次数&lt;=n）。因此，总的时间复杂度 O(n)。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，在循环体内，我们有 TreeSet 和 TreeMap 的删除和添加，每次 O(log n)，所以总时间复杂度 O(n log n)。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们完成代码。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：在 while 循环中，我们检查 left&lt;=right 时，不能超出。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>让我们写完整的代码。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，有一个边界：如果窗口内质数个数&gt;=2，但 valueMap 为空？不可能，因为质数个数&gt;=2 保证了 valueMap 至少有一个元素（因为至少两个质数，即使两个质数值相同，valueMap 中也有一个键）。所以安全。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>代码：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：在加入当前数时，如果这个质数已经在 valueMap 中，则计数增加。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在移除时，如果 valueMap 中该质数的计数减到 0，则移除该键。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们使用：valueMap.getOrDefault(nums[right],0) 和 valueMap.get(v) 可能会有 null？所以，在移除时，我们确定 valueMap 中有 v 这个键（因为在加入时我们加入了）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，为了安全，我们在 valueMap 中取 v 时，我们可以先 get(v)，然后减 1，如果减到 0 就移除。不会有 null，因为我们在加入质数时已经加入了。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们写如下代码：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由于可能有很多细节，我们写完后用示例测试。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，示例 2 的计数我们手动模拟过，符合。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们再模拟一个：nums=[2,2], k=0</span></span>
<span class="line"><span>right0: 加入 2：indexSet={0}, valueMap={2:1}, countPrimes=1 -&gt; 不计算。</span></span>
<span class="line"><span>right1: 加入 2：indexSet={0,1}, valueMap={2:2}, countPrimes=2。</span></span>
<span class="line"><span>检查：最大值 2-最小值 2=0&lt;=0 -&gt; 进入计算：lastIndex=1, secondLastIndex=0 -&gt; count=0-0+1=1.</span></span>
<span class="line"><span>所以只有一个子数组：以 right=1 结尾，起始位置可以是 0？那么[0,1]：包含两个 2，差值 0&lt;=0，满足。</span></span>
<span class="line"><span>同时，以 1 结尾的起始位置 0，那么还有[1,1]？但[1,1]只有一个质数，不应该计数。为什么我们计算了？</span></span>
<span class="line"><span>注意：我们的有效起始位置范围：left=0 到 secondLastIndex=0（因为 indexSet.lower(1)=0），那么就是 0。所以只包括 0，所以一个子数组：起始位置 0，即子数组[0,1]。</span></span>
<span class="line"><span>所以正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另一个：nums=[2,3,2], k=1</span></span>
<span class="line"><span>right0: 2-&gt; indexSet={0}, valueMap={2:1}, count=0.</span></span>
<span class="line"><span>right1: 3-&gt; indexSet={0,1}, valueMap={2:1,3:1}, 差值 3-2=1&lt;=1 -&gt; 不进入循环。</span></span>
<span class="line"><span>计算：lastIndex=1, secondLastIndex=0 -&gt; count=0-0+1=1. (子数组[0,1]：2,3)</span></span>
<span class="line"><span>right2: 2-&gt; indexSet={0,1,2}, valueMap={2:2,3:1}，差值 3-2=1&lt;=1 -&gt; 不进入循环。</span></span>
<span class="line"><span>计算：lastIndex=2, secondLastIndex=indexSet.lower(2)=1 -&gt; count+= (1-0+1)=2; 总 count=1+2=3.</span></span>
<span class="line"><span>那么以 right=2 结尾的，起始位置 0 和 1？</span></span>
<span class="line"><span>起始位置 0: [0,2]: 2,3,2 -&gt; 质数 2,3,2 -&gt; 最大值 3-最小值 2=1&lt;=1 -&gt; 满足。</span></span>
<span class="line"><span>起始位置 1: [1,2]: 3,2 -&gt; 质数 3,2 -&gt; 差值 1&lt;=1 -&gt; 满足。</span></span>
<span class="line"><span>所以两个子数组。</span></span>
<span class="line"><span>那么总计数=1（right1 的）+2（right2 的）=3.</span></span>
<span class="line"><span>但是，还有没有其他的？</span></span>
<span class="line"><span>[0,0]：不是两个质数。</span></span>
<span class="line"><span>[1,1]：3，一个质数。</span></span>
<span class="line"><span>[2,2]：2，一个质数。</span></span>
<span class="line"><span>[0,1]：已经有了。</span></span>
<span class="line"><span>[1,2]：有了。</span></span>
<span class="line"><span>[0,2]：有了。</span></span>
<span class="line"><span>所以共 3 个？不对，题目要求至少两个质数，所以[0,2]包含三个质数（两个 2 和一个 3）也是满足条件的。</span></span>
<span class="line"><span>而[0,1]：两个质数（2 和 3）。</span></span>
<span class="line"><span>[1,2]：两个质数（3 和 2）。</span></span>
<span class="line"><span>所以三个。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们返回 3。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但题目要求子数组数量，确实三个： [0,1], [1,2], [0,2]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，算法正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在，我们写代码，注意边界条件。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，在计算 secondLastIndex 时，indexSet.lower(lastIndex)可能返回 null？例如，当前窗口只有一个质数？但是，我们在计算前确保了 countPrimes&gt;=2，所以 indexSet 中至少有两个元素，所以 indexSet.last()存在，indexSet.lower(lastIndex)至少存在一个（因为有两个元素，lastIndex 有一个，然后比 lastIndex 小的还有一个，因为元素个数&gt;=2）。所以不会返回 null。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，我们可以直接使用。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，为了安全，我们也可以这样写：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因为 countPrimes&gt;=2，所以 indexSet 中至少有 2 个元素，所以 lastIndex 和 secondLastIndex 一定存在。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>代码：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：我们需要导入 TreeSet 和 TreeMap。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后，我们提交。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，我们考虑一下特殊情况：k 很大，比如 k=50000，那么只要包含至少两个质数的子数组都满足条件？那么我们的内层循环永远不会进入（因为 max-min&lt;=50000 恒成立？题目中质数最大 50000，最小 2，所以 max-min 最大值为 50000-2=49998&lt;=50000，所以恒成立）。那么，我们只需要移动 left？不，我们直接计算。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>那么，在每次加入一个质数后，我们直接计算：lastIndex=当前窗口内质数的最大索引，secondLastIndex=indexSet.last()的前一个索引（即小于 lastIndex 的最大索引）。然后，count+=(secondLastIndex - left + 1)。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意，left 初始为 0，在 k 很大的时候，left 一直不变，那么每个质数位置加入后，secondLastIndex 就是 lastIndex 的前一个质数的索引，那么每次计数：例如，质数在数组中是均匀分布的，那么每个质数加入后，以该质数结尾的子数组包含前两个质数的个数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是，例如：质数在 0,1,2,...出现，那么：</span></span>
<span class="line"><span>第 0 个质数出现：不计数。</span></span>
<span class="line"><span>第 1 个质数出现：计算，lastIndex=1，secondLastIndex=0，count+=(0-0+1)=1。</span></span>
<span class="line"><span>第 2 个质数出现：lastIndex=2，secondLastIndex=1（因为 0 和 1 都是质数，但索引 1&lt;2，最大的索引是 2，小于 2 的最大索引是 1），count+=(1-0+1)=2。</span></span>
<span class="line"><span>第 3 个质数出现：count+=(2-0+1)=3（因为 secondLastIndex=2，lastIndex=3，然后小于 3 的最大索引是 2）。</span></span>
<span class="line"><span>然后总计数=1+2+3+...（最后一个质数出现时，计数等于它的前一个质数的索引+1）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，总计数为：如果所有位置都是质数，那么就是 1+2+3+...+(n-1) = n\\*(n-1)/2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>而实际上，总共有 C(n,2)个子数组（包含至少两个质数）？不对，包含至少两个质数的子数组个数，并不是任意两个质数之间的组合，因为子数组是连续的，所以只包括连续的区间。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例如，n 个质数位置连续的（数组的 0,1,...,n-1 都是质数），那么以第 0 个质数结尾：无。</span></span>
<span class="line"><span>以第 1 个质数结尾：1 个（[0,1]）</span></span>
<span class="line"><span>以第 2 个质数结尾：2 个（[1,2]和[0,2]）</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>以第 i 个质数结尾：i 个（因为 secondLastIndex 是第 i-1 个质数的位置，left=0，所以个数=(第 i-1 个质数的位置)-0+1？不对，应该是(i-1)-0+1=i）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>那么总计数=1+2+...+n-1 = n(n-1)/2。这正好是所有至少包含两个质数的连续子数组的个数（因为每个子数组由其结束位置和起始位置决定，且结束位置必须大于等于第二个质数的位置，起始位置从 0 到结束位置中倒数第二个质数的位置）。而实际上，在连续 n 个质数的数组中，包含至少两个质数的子数组个数就是 n\\*(n-1)/2。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以，我们的算法适用于 k 很大的情况。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最终代码：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：在质数筛法部分，我们只计算到 50000。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另外，如果数组中没有质数，那么 countPrimes 永远小于 2，所以不会计数，返回 0。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们写代码：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>优化：在循环中，我们判断质数时，使用预处理的 isPrime 数组。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>代码：</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>为了解决问题，我们需要统计数组中所有满足特定条件的子数组数量。具体条件是子数组必须包含至少两个质数，且子数组中所有质数的最大值和最小值之差小于或等于给定的整数 <code>k</code>。</p><h3 id="解决思路" tabindex="-1"><a class="header-anchor" href="#解决思路"><span>解决思路</span></a></h3><ol><li><strong>预计算质数表</strong>：使用埃拉托斯特尼筛法（Sieve of Eratosthenes）预先计算所有不超过 50000 的质数，以便快速判断数组中的元素是否为质数。</li><li><strong>双指针滑动窗口</strong>：使用两个指针 <code>left</code> 和 <code>right</code> 维护一个滑动窗口，确保窗口内所有质数的最大值和最小值之差不超过 <code>k</code>。</li><li><strong>数据结构维护窗口信息</strong>： <ul><li><strong><code>indexSet</code></strong>：一个按索引升序排列的树集，存储当前窗口内质数的索引。</li><li><strong><code>valueMap</code></strong>：一个树映射（键为质数值，值为该值在窗口中出现的次数），用于快速获取当前窗口质数的最小值和最大值。</li><li><strong><code>countPrimes</code></strong>：记录当前窗口中质数的总数。</li></ul></li><li><strong>动态调整窗口</strong>： <ul><li>遍历数组，右指针 <code>right</code> 依次将元素纳入窗口。</li><li>若当前元素是质数，更新 <code>indexSet</code>、<code>valueMap</code> 和 <code>countPrimes</code>。</li><li>如果窗口中质数数量至少为两个且最大值与最小值之差超过 <code>k</code>，则移动左指针 <code>left</code> 缩小窗口，直到满足条件或窗口中质数少于两个。</li></ul></li><li><strong>统计有效子数组</strong>：每当窗口满足条件时，计算以当前 <code>right</code> 结尾的有效子数组数量，并累加到结果中。</li></ol><h3 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现"><span>代码实现</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> java.util.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Solution</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> primeSubarray</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> k</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> max_val</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 50000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        boolean</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">isPrime</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> boolean</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[max_val </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        Arrays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">fill</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(isPrime, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        isPrime[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        isPrime[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> max_val; i++) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (isPrime[i]) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> j</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i; j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> max_val; j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    isPrime[j] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        TreeSet</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">indexSet</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> TreeSet</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        TreeMap</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">valueMap</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> TreeMap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> left</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> countPrimes</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> count</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> right</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; right </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n; right++) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (nums[right] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> max_val \\u0026\\u0026 isPrime[nums[right]]) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                countPrimes++;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                indexSet</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(right);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                valueMap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">put</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(nums[right], </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">valueMap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getOrDefault</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(nums[right], </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (left </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> right \\u0026\\u0026 countPrimes </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> \\u0026\\u0026 </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">valueMap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">lastKey</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> valueMap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firstKey</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> k) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (nums[left] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> max_val \\u0026\\u0026 isPrime[nums[left]]) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    countPrimes--;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                    indexSet</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">remove</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(left);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> val</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nums[left];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> countVal</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> valueMap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(val);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (countVal </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                        valueMap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">remove</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(val);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                        valueMap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">put</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(val, countVal </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                left++;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (countPrimes </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> lastIndex</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> indexSet</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">last</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> secondLastIndex</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> indexSet</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">lower</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(lastIndex);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                count </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (secondLastIndex </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> left </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> count;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码说明" tabindex="-1"><a class="header-anchor" href="#代码说明"><span>代码说明</span></a></h3><ol><li><strong>预计算质数表</strong>：使用埃拉托斯特尼筛法初始化一个布尔数组 <code>isPrime</code>，用于快速检查数组中每个元素是否为质数。</li><li><strong>滑动窗口初始化</strong>： <ul><li><code>left</code> 和 <code>right</code> 分别表示窗口的左右边界。</li><li><code>indexSet</code> 存储当前窗口内质数的索引（按升序排列）。</li><li><code>valueMap</code> 存储当前窗口内每个质数及其出现次数。</li><li><code>countPrimes</code> 记录窗口中质数的总数。</li></ul></li><li><strong>窗口动态调整</strong>： <ul><li>右指针 <code>right</code> 向右移动，将当前元素纳入窗口。如果是质数，则更新数据结构。</li><li>若窗口中质数数量至少为两个且最大值与最小值之差超过 <code>k</code>，则移动左指针 <code>left</code> 缩小窗口，并更新数据结构。</li></ul></li><li><strong>统计有效子数组</strong>：当窗口满足条件（至少两个质数且最大值与最小值之差不超过 <code>k</code>）时，计算以当前 <code>right</code> 结尾的所有有效子数组数量（即起始索引 <code>left</code> 到倒数第二个质数索引之间的子数组数量），并累加到结果 <code>count</code> 中。</li><li><strong>返回结果</strong>：最终 <code>count</code> 即为所有满足条件的子数组数量。</li></ol><p>此方法的时间复杂度为 \\(O(n \\log n)\\)，空间复杂度为 \\(O(n)\\)，能够高效地处理问题约束中较大的输入规模。</p>`,14)]))}const v=n(e,[["render",p],["__file","t3.html.vue"]]),r=JSON.parse('{"path":"/module_ai/biweekly-contest-159/t3.html","title":"统计质数间隔平衡子数组","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"USER","slug":"user","link":"#user","children":[]},{"level":2,"title":"ASSISTANT","slug":"assistant","link":"#assistant","children":[{"level":3,"title":"解决思路","slug":"解决思路","link":"#解决思路","children":[]},{"level":3,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[]},{"level":3,"title":"代码说明","slug":"代码说明","link":"#代码说明","children":[]}]}],"git":{"createdTime":1751299769000,"updatedTime":1751299769000,"contributors":[{"name":"gdut-yy","username":"gdut-yy","email":"gdut_yy@163.com","commits":1}]},"readingTime":{"minutes":56.48,"words":16945},"filePathRelative":"module_ai/biweekly-contest-159/t3.md","localizedDate":"2025年7月1日"}');export{v as comp,r as data};
