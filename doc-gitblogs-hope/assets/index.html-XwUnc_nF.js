import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as t,c,b as e,d as n,e as a,a as i}from"./app-JrB3RlOW.js";const d="/doc-gitblogs-hope/assets/zookeeper-cluster-72wh_xl2.png",r={},p=e("h1",{id:"zookeeper-环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#zookeeper-环境","aria-hidden":"true"},"#"),n(" ZooKeeper 环境")],-1),m=e("h2",{id:"_1-downloads",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-downloads","aria-hidden":"true"},"#"),n(" 1 Downloads")],-1),u=e("p",null,"kafka 环境依赖 zookeeper 环境，本文简单记录一下 zookeeper 环境搭建。",-1),v=e("code",null,"apache-zookeeper-3.7.0-bin.tar.gz",-1),b={href:"https://zookeeper.apache.org/releases.html",target:"_blank",rel:"noopener noreferrer"},h=e("h3",{id:"_1-1-文件校验",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-1-文件校验","aria-hidden":"true"},"#"),n(" 1.1 文件校验")],-1),k={href:"https://downloads.apache.org/zookeeper/zookeeper-3.7.0/apache-zookeeper-3.7.0-bin.tar.gz.sha512",target:"_blank",rel:"noopener noreferrer"},g=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ Get-FileHash apache-zookeeper-3.7.0-bin.tar.gz <span class="token parameter variable">-Algorithm</span> SHA512 <span class="token operator">|</span> Format-List

Algorithm <span class="token builtin class-name">:</span> SHA512
Hash      <span class="token builtin class-name">:</span> 64E2701C019ED46F45F4D53B2C5EAEAF7CF48C342BBAFA032A0819D527FC77CAEBFADA6BDAD34E5171E6D838F40B16C95B62CE378B53DFC827AF2D60CEC0B17C
Path      <span class="token builtin class-name">:</span> D:<span class="token punctuation">\\</span>下载2<span class="token punctuation">\\</span>linux-downloads<span class="token punctuation">\\</span>apache-zookeeper-3.7.0-bin.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-配置文件" tabindex="-1"><a class="header-anchor" href="#_2-配置文件" aria-hidden="true">#</a> 2 配置文件</h2><p><code>./conf/zoo.cfg</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># The number of milliseconds of each tick 服务器心跳时间，单位为 ms</span>
<span class="token assign-left variable">tickTime</span><span class="token operator">=</span><span class="token number">2000</span>
<span class="token comment"># The number of ticks that the initial</span>
<span class="token comment"># synchronization phase can take 投票选举新 leader 的初始化时间</span>
<span class="token assign-left variable">initLimit</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token comment"># The number of ticks that can pass between</span>
<span class="token comment"># sending a request and getting an acknowledgement leader 与 fellower 心跳检测最大容忍时间，响应超过 syncLimit * tickTime，leader 认为 fellower “死掉”，剔除 fellower</span>
<span class="token assign-left variable">syncLimit</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token comment"># the directory where the snapshot is stored.</span>
<span class="token comment"># do not use /tmp for storage, /tmp here is just</span>
<span class="token comment"># example sakes. 数据目录</span>
<span class="token assign-left variable">dataDir</span><span class="token operator">=</span>/tmp/zookeeper
<span class="token comment"># the port at which the clients will connect</span>
<span class="token assign-left variable">clientPort</span><span class="token operator">=</span><span class="token number">2181</span>
<span class="token comment"># the maximum number of client connections.</span>
<span class="token comment"># increase this if you need to handle more clients</span>
<span class="token comment">#maxClientCnxns=60</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-standalone-mode-单机模式" tabindex="-1"><a class="header-anchor" href="#_3-standalone-mode-单机模式" aria-hidden="true">#</a> 3 standalone mode（单机模式）</h2><p>环境依赖 <code>JAVA_HOME</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 解压</span>
<span class="token function">tar</span> zxvf apache-zookeeper-3.7.0-bin.tar.gz
<span class="token builtin class-name">cd</span> apache-zookeeper-3.7.0-bin

<span class="token comment"># 复制配置文件</span>
$ <span class="token function">cp</span> conf/zoo_sample.cfg conf/zoo.cfg

<span class="token comment"># 启动服务</span>
$ ./bin/zkServer.sh start
ZooKeeper JMX enabled by default
Using config: /home/admin0/Downloads/apache-zookeeper-3.7.0-bin/bin/<span class="token punctuation">..</span>/conf/zoo.cfg
Starting zookeeper <span class="token punctuation">..</span>. STARTED

<span class="token comment"># 停止服务</span>
$ ./bin/zkServer.sh stop
ZooKeeper JMX enabled by default
Using config: /home/admin0/Downloads/apache-zookeeper-3.7.0-bin/bin/<span class="token punctuation">..</span>/conf/zoo.cfg
Stopping zookeeper <span class="token punctuation">..</span>. STOPPED

<span class="token comment"># 查看状态</span>
$ ./bin/zkServer.sh status
ZooKeeper JMX enabled by default
Using config: /home/admin0/Downloads/apache-zookeeper-3.7.0-bin/bin/<span class="token punctuation">..</span>/conf/zoo.cfg
Client port found: <span class="token number">2181</span>. Client address: localhost. Client SSL: false.
Mode: standalone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-replicated-mode-集群模式" tabindex="-1"><a class="header-anchor" href="#_4-replicated-mode-集群模式" aria-hidden="true">#</a> 4 replicated mode（集群模式）</h2>`,8),f={href:"https://zookeeper.apache.org/doc/current/zookeeperStarted.html#sc_InstallingSingleMode",target:"_blank",rel:"noopener noreferrer"},z=i(`<p><code>/etc/hosts</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>192.168.3.19 localhost.ubuntu0.com
192.168.3.20 localhost.ubuntu1.com
192.168.3.21 localhost.ubuntu2.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>./conf/zoo.cfg</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">server.0</span><span class="token operator">=</span>localhost.ubuntu0.com:2888:3888
<span class="token assign-left variable">server.1</span><span class="token operator">=</span>localhost.ubuntu1.com:2888:3888
<span class="token assign-left variable">server.2</span><span class="token operator">=</span>localhost.ubuntu2.com:2888:3888
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>/tmp/zookeeper/myid</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># localhost.ubuntu0.com</span>
<span class="token number">0</span>
<span class="token comment"># localhost.ubuntu1.com</span>
<span class="token number">1</span>
<span class="token comment"># localhost.ubuntu2.com</span>
<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># localhost.ubuntu0.com</span>
$ ./bin/zkServer.sh status
ZooKeeper JMX enabled by default
Using config: /home/admin0/Downloads/apache-zookeeper-3.7.0-bin/bin/<span class="token punctuation">..</span>/conf/zoo.cfg
Client port found: <span class="token number">2181</span>. Client address: localhost. Client SSL: false.
Mode: follower

<span class="token comment"># localhost.ubuntu1.com</span>
$ ./bin/zkServer.sh status
ZooKeeper JMX enabled by default
Using config: /home/admin0/Downloads/apache-zookeeper-3.7.0-bin/bin/<span class="token punctuation">..</span>/conf/zoo.cfg
Client port found: <span class="token number">2181</span>. Client address: localhost. Client SSL: false.
Mode: leader

<span class="token comment"># localhost.ubuntu2.com</span>
$ ./bin/zkServer.sh status
ZooKeeper JMX enabled by default
Using config: /home/admin0/Downloads/apache-zookeeper-3.7.0-bin/bin/<span class="token punctuation">..</span>/conf/zoo.cfg
Client port found: <span class="token number">2181</span>. Client address: localhost. Client SSL: false.
Mode: follower
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行截图：</p><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（全文完）</p>',10);function _(x,C){const s=l("ExternalLinkIcon");return t(),c("div",null,[p,m,u,e("p",null,[v,n(": "),e("a",b,[n("https://zookeeper.apache.org/releases.html"),a(s)])]),h,e("p",null,[e("a",k,[n("https://downloads.apache.org/zookeeper/zookeeper-3.7.0/apache-zookeeper-3.7.0-bin.tar.gz.sha512"),a(s)])]),g,e("p",null,[n("官方文档: "),e("a",f,[n("https://zookeeper.apache.org/doc/current/zookeeperStarted.html#sc_InstallingSingleMode"),a(s)])]),z])}const D=o(r,[["render",_],["__file","index.html.vue"]]);export{D as default};
