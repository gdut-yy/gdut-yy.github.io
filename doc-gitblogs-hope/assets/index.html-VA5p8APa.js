import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o,c as r,b as s,d as n,e,a as t}from"./app-8t5Tw8wD.js";const p={},c=s("h1",{id:"mysql-环境",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mysql-环境","aria-hidden":"true"},"#"),n(" MySQL 环境")],-1),d=s("h2",{id:"_1-downloads",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-downloads","aria-hidden":"true"},"#"),n(" 1 Downloads")],-1),u={href:"https://downloads.mysql.com/archives/community/",target:"_blank",rel:"noopener noreferrer"},m=t(`<table><thead><tr><th>Compressed TAR Archive</th><th>MD5</th></tr></thead><tbody><tr><td><code>mysql-8.0.28-linux-glibc2.12-x86_64.tar.xz</code></td><td>5be32f68d6859aace1eb61cea1d00bff</td></tr><tr><td><code>mysql-test-8.0.28-linux-glibc2.12-x86_64.tar.xz</code></td><td>1aa16282acb18eb7cc74ea024989058b</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># powershell</span>
$ Get-FileHash .<span class="token punctuation">\\</span>mysql-8.0.28-linux-glibc2.12-x86_64.tar.xz <span class="token parameter variable">-Algorithm</span> MD5

Algorithm       Hash                                                                   Path
---------       ----                                                                   ----
MD5             5BE32F68D6859AACE1EB61CEA1D00BFF                                       D:<span class="token punctuation">\\</span>下载2<span class="token punctuation">\\</span>linux-downloads<span class="token punctuation">\\</span>mysql-8.0.28-linux-glibc2.12-x86_64.tar.xz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装" aria-hidden="true">#</a> 2 安装</h2>`,3),v={href:"https://dev.mysql.com/doc/refman/8.0/en/binary-installation.html",target:"_blank",rel:"noopener noreferrer"},b=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">groupadd</span> mysql
$ <span class="token function">useradd</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-g</span> mysql <span class="token parameter variable">-s</span> /bin/false mysql
$ <span class="token builtin class-name">cd</span> /usr/local
$ <span class="token function">tar</span> xvf /path/to/mysql-VERSION-OS.tar.xz
$ <span class="token function">ln</span> <span class="token parameter variable">-s</span> full-path-to-mysql-VERSION-OS mysql
$ <span class="token builtin class-name">cd</span> mysql
$ <span class="token function">mkdir</span> mysql-files
$ <span class="token function">chown</span> mysql:mysql mysql-files
$ <span class="token function">chmod</span> <span class="token number">750</span> mysql-files
$ bin/mysqld <span class="token parameter variable">--initialize</span> <span class="token parameter variable">--user</span><span class="token operator">=</span>mysql
$ bin/mysql_ssl_rsa_setup
$ bin/mysqld_safe <span class="token parameter variable">--user</span><span class="token operator">=</span>mysql <span class="token operator">&amp;</span>
<span class="token comment"># Next command is optional</span>
$ <span class="token function">cp</span> support-files/mysql.server /etc/init.d/mysql.server

qR1e8UUr<span class="token operator">&amp;</span>d7n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 缺少依赖</span>
$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> libaio-dev
$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> libtinfo5
$ <span class="token function">passwd</span> root

<span class="token comment"># Host &#39;x.x.x.x&#39; is not allowed to connect to this MySQL server 问题</span>
mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-h</span> <span class="token number">192.168</span>.183.216 <span class="token parameter variable">-p</span> --get-server-public-key

alter user <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> identified by <span class="token string">&#39;mysql123&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token function">host</span> from user where user <span class="token operator">=</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>
update user <span class="token builtin class-name">set</span> <span class="token function">host</span> <span class="token operator">=</span> <span class="token string">&#39;%&#39;</span> where user <span class="token operator">=</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>
flush privileges<span class="token punctuation">;</span>

<span class="token comment"># 主备环境 https://dev.mysql.com/doc/refman/8.0/en/change-master-to.html</span>
mysql<span class="token operator">&gt;</span> show master status <span class="token punctuation">\\</span>G
*************************** <span class="token number">1</span>. row ***************************
             File: binlog.000003
         Position: <span class="token number">7681</span>
     Binlog_Do_DB:
 Binlog_Ignore_DB:
Executed_Gtid_Set:
<span class="token number">1</span> row <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>


CHANGE MASTER TO MASTER_HOST <span class="token operator">=</span> <span class="token string">&#39;192.168.183.216&#39;</span>, MASTER_USER <span class="token operator">=</span> <span class="token string">&#39;root&#39;</span>, MASTER_PASSWORD <span class="token operator">=</span> <span class="token string">&#39;mysql123&#39;</span>, MASTER_PORT <span class="token operator">=</span> <span class="token number">3306</span>, MASTER_LOG_FILE <span class="token operator">=</span> <span class="token string">&#39;binlog.000003&#39;</span>, MASTER_LOG_POS <span class="token operator">=</span> <span class="token number">11448</span><span class="token punctuation">;</span>

start slave<span class="token punctuation">;</span>

show slave status<span class="token punctuation">;</span>

Authentication plugin <span class="token string">&#39;caching_sha2_password&#39;</span> reported error: Authentication requires secure connection.

ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;mysql123&#39;</span><span class="token punctuation">;</span>

error connecting to master <span class="token string">&#39;root@192.168.183.216:3306&#39;</span> - retry-time: <span class="token number">60</span> retries: <span class="token number">1</span> message: Access denied <span class="token keyword">for</span> user <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;192.168.183.171&#39;</span> <span class="token punctuation">(</span>using password: YES<span class="token punctuation">)</span>

The slave I/O thread stops because master and slave have equal MySQL server ids<span class="token punctuation">;</span> these ids must be different <span class="token keyword">for</span> replication to work <span class="token punctuation">(</span>or the --replicate-same-server-id option must be used on slave but this does not always <span class="token function">make</span> sense<span class="token punctuation">;</span> please check the manual before using it<span class="token punctuation">)</span>.


<span class="token function">service</span> mysqld restart

Initialization of the server<span class="token string">&#39;s UUID failed because it could not be read from the auto.cnf file. If this is a new server, the initialization failed because it was not possible to generate a new UUID.

The designated data directory /usr/local/mysql-8.0.28-linux-glibc2.12-x86_64/data/ is unusable. You can remove all files that the server added to it.


Fatal error: The slave I/O thread stops because master and slave have equal MySQL server ids; these ids must be different for replication to work (or the --replicate-same-server-id option must be used on slave but this does not always make sense; please check the manual before using it).

show variables like &#39;</span>%server_uuid%<span class="token string">&#39;;
show variables like &#39;</span>%server_id%&#39;<span class="token punctuation">;</span>

SET GLOBAL <span class="token assign-left variable">server_id</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Windows：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化</span>
PS D:<span class="token punctuation">\\</span>programs<span class="token punctuation">\\</span>mysql-5.7.39-winx64<span class="token punctuation">\\</span>bin<span class="token operator">&gt;</span> .<span class="token punctuation">\\</span>mysqld.exe <span class="token parameter variable">--initialize</span>

<span class="token comment"># 启动服务</span>
PS D:<span class="token punctuation">\\</span>programs<span class="token punctuation">\\</span>mysql-5.7.39-winx64<span class="token punctuation">\\</span>bin<span class="token operator">&gt;</span> .<span class="token punctuation">\\</span>mysqld.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-mtr-mysql-test-run" tabindex="-1"><a class="header-anchor" href="#_3-mtr-mysql-test-run" aria-hidden="true">#</a> 3 MTR (mysql-test-run)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 解压</span>
$ <span class="token function">tar</span> xvf mysql-8.0.28-linux-glibc2.12-x86_64.tar.xz
$ <span class="token function">tar</span> xvf mysql-test-8.0.28-linux-glibc2.12-x86_64.tar.xz

$ <span class="token builtin class-name">cd</span> mysql-8.0.28-linux-glibc2.12-x86_64/mysql-test/t/
$ <span class="token function">vi</span> mytest.test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
$ ./mtr <span class="token parameter variable">--record</span> mytest.test
Logging: ./mtr  <span class="token parameter variable">--record</span> mytest.test
MySQL Version <span class="token number">8.0</span>.28
Checking supported features
Using <span class="token string">&#39;all&#39;</span> suites
Collecting tests
Removing old var directory
Creating var directory <span class="token string">&#39;/home/admin0/Downloads/mysql-8.0.28-linux-glibc2.12-x86_64/mysql-test/var&#39;</span>
Installing system database
Using parallel: <span class="token number">1</span>

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
                  TEST NAME                       RESULT  TIME <span class="token punctuation">(</span>ms<span class="token punctuation">)</span> COMMENT
------------------------------------------------------------------------------
<span class="token punctuation">[</span> <span class="token number">50</span>%<span class="token punctuation">]</span> main.mytest                               <span class="token punctuation">[</span> pass <span class="token punctuation">]</span>     <span class="token number">22</span>
<span class="token punctuation">[</span><span class="token number">100</span>%<span class="token punctuation">]</span> shutdown_report                           <span class="token punctuation">[</span> pass <span class="token punctuation">]</span>
------------------------------------------------------------------------------
The servers were restarted <span class="token number">0</span> <span class="token builtin class-name">times</span>
The servers were reinitialized <span class="token number">0</span> <span class="token builtin class-name">times</span>
Spent <span class="token number">0.022</span> of <span class="token number">8</span> seconds executing testcases

Completed: All <span class="token number">2</span> tests were successful.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（全文完）</p>`,8);function k(h,g){const a=l("ExternalLinkIcon");return o(),r("div",null,[c,d,s("p",null,[s("a",u,[n("https://downloads.mysql.com/archives/community/"),e(a)])]),m,s("p",null,[n("官方文档: "),s("a",v,[n("https://dev.mysql.com/doc/refman/8.0/en/binary-installation.html"),e(a)])]),b])}const _=i(p,[["render",k],["__file","index.html.vue"]]);export{_ as default};
