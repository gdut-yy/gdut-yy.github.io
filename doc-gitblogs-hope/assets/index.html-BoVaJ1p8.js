import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as t,c,b as e,d as s,e as n,w as d,a}from"./app-JrB3RlOW.js";const m="/doc-gitblogs-hope/assets/kafka-cluster-g5LoqMIk.png",p={},u=e("h1",{id:"kafka-环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kafka-环境","aria-hidden":"true"},"#"),s(" Kafka 环境")],-1),b=e("h2",{id:"_1-downloads",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-downloads","aria-hidden":"true"},"#"),s(" 1 Downloads")],-1),h=e("code",null,"kafka_2.13-3.1.0.tgz",-1),v={href:"https://kafka.apache.org/downloads",target:"_blank",rel:"noopener noreferrer"},k=e("h3",{id:"_1-1-文件校验",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-1-文件校验","aria-hidden":"true"},"#"),s(" 1.1 文件校验")],-1),g={href:"https://downloads.apache.org/kafka/3.1.0/kafka_2.13-3.1.0.tgz.sha512",target:"_blank",rel:"noopener noreferrer"},f=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ Get-FileHash kafka_2.13-3.1.0.tgz <span class="token parameter variable">-Algorithm</span> SHA512 <span class="token operator">|</span> Format-List

Algorithm <span class="token builtin class-name">:</span> SHA512
Hash      <span class="token builtin class-name">:</span> 5954C1CF38187134A6E0A21520CBEF5CD5320A3E9290E630C3895990E892219917D911FABBC64DA5DB17BCAA940B8277C23344B50F2FF4256EACA78116E9FDC9
Path      <span class="token builtin class-name">:</span> D:<span class="token punctuation">\\</span>下载2<span class="token punctuation">\\</span>linux-downloads<span class="token punctuation">\\</span>kafka_2.13-3.1.0.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-单机模式" tabindex="-1"><a class="header-anchor" href="#_2-单机模式" aria-hidden="true">#</a> 2 单机模式</h2>`,2),_=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 解压</span>
<span class="token function">tar</span> zxvf kafka_2.13-3.1.0.tgz
<span class="token builtin class-name">cd</span> kafka_2.13-3.1.0

<span class="token comment"># 启动</span>
./bin/kafka-server-start.sh <span class="token parameter variable">-daemon</span> config/server.properties

<span class="token comment"># 停止</span>
./bin/kafka-server-stop.sh

<span class="token comment"># 查看进程</span>
$ jps <span class="token parameter variable">-l</span>
<span class="token number">63425</span> kafka.Kafka
<span class="token number">63892</span> sun.tools.jps.Jps
<span class="token number">60308</span> org.apache.zookeeper.server.quorum.QuorumPeerMain
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-集群模式" tabindex="-1"><a class="header-anchor" href="#_3-集群模式" aria-hidden="true">#</a> 3 集群模式</h2><p><code>./config/server.properties</code></p>`,3),x=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{sh:"",class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"############################# Server Basics #############################"),s(`

`),e("span",{class:"token comment"},"# The id of the broker. This must be set to a unique integer for each broker."),s(`
`),e("span",{class:"token assign-left variable"},"broker.id"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"0"),s(`

`),e("span",{class:"token comment"},"############################# Socket Server Settings #############################"),s(`

`),e("span",{class:"token comment"},"# The address the socket server listens on. It will get the value returned from"),s(`
`),e("span",{class:"token comment"},"# java.net.InetAddress.getCanonicalHostName() if not configured."),s(`
`),e("span",{class:"token comment"},"#   FORMAT:"),s(`
`),e("span",{class:"token comment"},"#     listeners = listener_name://host_name:port"),s(`
`),e("span",{class:"token comment"},"#   EXAMPLE:"),s(`
`),e("span",{class:"token comment"},"#     listeners = PLAINTEXT://your.host.name:9092"),s(`
`),e("span",{class:"token comment"},"#listeners=PLAINTEXT://:9092"),s(`
`),e("span",{class:"token assign-left variable"},"listeners"),e("span",{class:"token operator"},"="),s(`PLAINTEXT://localhost.ubuntu0.com:9092

`),e("span",{class:"token comment"},"############################# Zookeeper #############################"),s(`

`),e("span",{class:"token comment"},"# Zookeeper connection string (see zookeeper docs for details)."),s(`
`),e("span",{class:"token comment"},"# This is a comma separated host:port pairs, each corresponding to a zk"),s(`
`),e("span",{class:"token comment"},'# server. e.g. "127.0.0.1:3000,127.0.0.1:3001,127.0.0.1:3002".'),s(`
`),e("span",{class:"token comment"},"# You can also append an optional chroot string to the urls to specify the"),s(`
`),e("span",{class:"token comment"},"# root directory for all kafka znodes."),s(`
`),e("span",{class:"token comment"},"# zookeeper.connect=localhost:2181"),s(`
`),e("span",{class:"token assign-left variable"},"zookeeper.connect"),e("span",{class:"token operator"},"="),s(`localhost.ubuntu0.com:2181,localhost.ubuntu1.com:2181,localhost.ubuntu2.com:2181
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," ")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),A=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动</span>
./bin/kafka-server-start.sh <span class="token parameter variable">-daemon</span> config/server.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>运行截图：</p><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（全文完）</p>',4);function z(E,C){const i=l("ExternalLinkIcon"),o=l("RouterLink");return t(),c("div",null,[u,b,e("p",null,[h,s(": "),e("a",v,[s("https://kafka.apache.org/downloads"),n(i)])]),k,e("p",null,[e("a",g,[s("https://downloads.apache.org/kafka/3.1.0/kafka_2.13-3.1.0.tgz.sha512"),n(i)])]),f,e("p",null,[s("kafka 环境依赖 zookeeper 环境，详见 "),n(o,{to:"/module_sre/sre_zookeeper/"},{default:d(()=>[s("zookeeper 环境")]),_:1})]),_,x,A])}const B=r(p,[["render",z],["__file","index.html.vue"]]);export{B as default};
