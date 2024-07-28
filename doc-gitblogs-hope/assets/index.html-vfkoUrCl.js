import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as l,c as t,b as n,d as s,e,a as c}from"./app-NFBuANKH.js";const o={},d=n("h1",{id:"nginx-环境",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx-环境","aria-hidden":"true"},"#"),s(" Nginx 环境")],-1),p=n("h2",{id:"_1-downloads",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-downloads","aria-hidden":"true"},"#"),s(" 1 Downloads")],-1),v=n("code",null,"nginx-1.22.1.zip",-1),u={href:"https://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"_2-启动",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-启动","aria-hidden":"true"},"#"),s(" 2 启动")],-1),b={href:"https://nginx.org/en/docs/windows.html",target:"_blank",rel:"noopener noreferrer"},h=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> c:<span class="token punctuation">\\</span>
<span class="token function">unzip</span> nginx-1.23.3.zip
<span class="token builtin class-name">cd</span> nginx-1.23.3
start nginx

<span class="token comment"># fast shutdown</span>
nginx <span class="token parameter variable">-s</span> stop
<span class="token comment"># graceful shutdown</span>
nginx <span class="token parameter variable">-s</span> quit
<span class="token comment"># changing configuration, starting new worker processes with a new configuration, graceful shutdown of old worker processes</span>
nginx <span class="token parameter variable">-s</span> reload
<span class="token comment"># re-opening log files</span>
nginx <span class="token parameter variable">-s</span> reopen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-pki-证书安装" tabindex="-1"><a class="header-anchor" href="#_3-pki-证书安装" aria-hidden="true">#</a> 3 PKI 证书安装</h2><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> linux</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 解压</span>
<span class="token function">unzip</span> cert.zip
<span class="token comment"># 安装证书（需密码）</span>
openssl pkcs12 <span class="token parameter variable">-in</span> cert.pfx <span class="token parameter variable">-nodes</span> <span class="token parameter variable">-out</span> server.pem
<span class="token comment"># 私钥</span>
openssl rsa <span class="token parameter variable">-in</span> server.pem <span class="token parameter variable">-out</span> server.key
<span class="token comment"># 公钥</span>
openssl x509 <span class="token parameter variable">-in</span> server.pem <span class="token parameter variable">-out</span> server.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="windows-git-bash" tabindex="-1"><a class="header-anchor" href="#windows-git-bash" aria-hidden="true">#</a> windows (git bash)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 解压</span>
<span class="token function">unzip</span> cert.zip
<span class="token comment"># 安装证书（需密码）</span>
openssl pkcs12 <span class="token parameter variable">-in</span> cert.pfx <span class="token parameter variable">-nodes</span> <span class="token parameter variable">-out</span> server.pem <span class="token parameter variable">-password</span> pass:<span class="token string">&quot;证书密码&quot;</span>
<span class="token comment"># 私钥</span>
openssl rsa <span class="token parameter variable">-in</span> server.pem <span class="token parameter variable">-out</span> server.key
<span class="token comment"># 公钥</span>
openssl x509 <span class="token parameter variable">-in</span> server.pem <span class="token parameter variable">-out</span> server.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx-conf" tabindex="-1"><a class="header-anchor" href="#nginx-conf" aria-hidden="true">#</a> nginx.conf</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    server_name xxx<span class="token punctuation">.</span>com
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
    listen <span class="token number">443</span><span class="token punctuation">;</span>
    server_name xxx<span class="token punctuation">.</span>com<span class="token punctuation">;</span>
    ssl_certificate server<span class="token punctuation">.</span>crt<span class="token punctuation">;</span>
    ssl_certificate_key server<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（全文完）</p>`,9);function k(g,x){const a=r("ExternalLinkIcon");return l(),t("div",null,[d,p,n("p",null,[v,s(": "),n("a",u,[s("https://nginx.org/en/download.html"),e(a)])]),m,n("p",null,[n("a",b,[s("nginx for Windows"),e(a)])]),h])}const w=i(o,[["render",k],["__file","index.html.vue"]]);export{w as default};
