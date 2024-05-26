import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c as l,b as n,d as s,e,a as r}from"./app-JrB3RlOW.js";const c={},d=n("h1",{id:"git-配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git-配置","aria-hidden":"true"},"#"),s(" Git 配置")],-1),p=n("h2",{id:"_1-downloads",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-downloads","aria-hidden":"true"},"#"),s(" 1 Downloads")],-1),m={href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"},u={href:"https://tortoisegit.org/download/",target:"_blank",rel:"noopener noreferrer"},v=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看版本</span>
$ <span class="token function">git</span> <span class="token parameter variable">--version</span>
<span class="token function">git</span> version <span class="token number">2.34</span>.1.windows.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-git-bash-配置" tabindex="-1"><a class="header-anchor" href="#_2-git-bash-配置" aria-hidden="true">#</a> 2 git bash 配置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置 Git 用户名 &amp; 邮箱</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;your_name&quot;</span> <span class="token comment"># e.g. git config --global user.name &quot;gdut-yy&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;your_email@example.com&quot;</span> <span class="token comment"># e.g. git config --global user.email &quot;gdut_yy@163.com&quot;</span>

<span class="token comment"># 生成新 ssh 密钥（公钥 ~/.ssh/id_rsa.pub 私钥 ~/.ssh/id_rsa）</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-b</span> <span class="token number">4096</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;your_email@example.com&quot;</span> <span class="token comment"># e.g. ssh-keygen -t rsa -b 4096 -C &quot;gdut_yy@163.com&quot;</span>

<span class="token comment"># 配置公钥 &amp; 验证（Github/Gitee/其他 Git 平台）</span>
<span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com
<span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@gitee.com

<span class="token comment"># 设置大小写敏感（Git 默认对文件名大小写不敏感）</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> core.ignorecase <span class="token boolean">false</span>

<span class="token comment"># 忽略 ssl 证书错误</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.sslVerify <span class="token boolean">false</span>

<span class="token comment"># 配置 git 代理（常见于公司内网）</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.proxy http://username:password@proxy.huawei.com:8080

<span class="token comment"># 注：如果密码中含有 @ 等特殊字符，会出错。建议直接修改 ~/.gitconfig 文件</span>
<span class="token punctuation">[</span>http<span class="token punctuation">]</span>
	proxy <span class="token operator">=</span> http://username:password@proxy.huawei.com:8080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-同步操作" tabindex="-1"><a class="header-anchor" href="#_3-同步操作" aria-hidden="true">#</a> 3 同步操作</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 远端删除分支，本地同步</span>
<span class="token function">git</span> remote prune origin

<span class="token comment"># git 仓迁移</span>
<span class="token function">git</span> clone <span class="token parameter variable">--bare</span> oldRepo.git
<span class="token builtin class-name">cd</span> oldRepo.git/
<span class="token function">git</span> push <span class="token parameter variable">--mirror</span> newRepo.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（全文完）</p>`,6);function b(g,h){const a=t("ExternalLinkIcon");return o(),l("div",null,[d,p,n("ol",null,[n("li",null,[s("Git: "),n("a",m,[s("https://git-scm.com/downloads"),e(a)])]),n("li",null,[s("TortoiseGit: "),n("a",u,[s("https://tortoisegit.org/download/"),e(a)])])]),v])}const _=i(c,[["render",b],["__file","index.html.vue"]]);export{_ as default};
