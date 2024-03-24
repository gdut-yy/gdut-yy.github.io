import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as c,c as o,b as n,d as s,e as i,a as e}from"./app-fS89Te2C.js";const r="/doc-gitblogs-hope/assets/redis-sentinel-rYPopkZB.png",d="/doc-gitblogs-hope/assets/redis-cluster-xyBk23fV.png",p={},m=n("h1",{id:"redis-环境",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#redis-环境","aria-hidden":"true"},"#"),s(" Redis 环境")],-1),u=n("h2",{id:"_1-downloads",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-downloads","aria-hidden":"true"},"#"),s(" 1 Downloads")],-1),b=n("code",null,"redis-6.2.6.tar.gz",-1),v={href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"},k=e(`<h2 id="_2-编译安装" tabindex="-1"><a class="header-anchor" href="#_2-编译安装" aria-hidden="true">#</a> 2 编译安装</h2><p>官网下载的为源码，并非二进制文件，需要进行编译安装。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 解压</span>
$ <span class="token function">tar</span> zxvf redis-6.2.6.tar.gz
$ <span class="token builtin class-name">cd</span> redis-6.2.6

<span class="token comment"># 编译 &amp; 安装</span>
$ <span class="token function">make</span>
$ <span class="token function">make</span> <span class="token function">install</span>

<span class="token comment"># redis 默认安装到 /usr/local/bin/ 下</span>
$ <span class="token function">ls</span> /usr/local/bin/
redis-benchmark  redis-check-aof  redis-check-rdb  redis-cli  redis-sentinel  redis-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-配置文件" tabindex="-1"><a class="header-anchor" href="#_3-配置文件" aria-hidden="true">#</a> 3 配置文件</h2><p><code>./redis.conf</code></p>`,5),h=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{sh:"",class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"################################## NETWORK #####################################"),s(`

`),n("span",{class:"token comment"},'# By default, if no "bind" configuration directive is specified, Redis listens'),s(`
`),n("span",{class:"token comment"},"# for connections from all available network interfaces on the host machine."),s(`
`),n("span",{class:"token comment"},"# It is possible to listen to just one or multiple selected interfaces using"),s(`
`),n("span",{class:"token comment"},'# the "bind" configuration directive, followed by one or more IP addresses.'),s(`
`),n("span",{class:"token comment"},'# Each address can be prefixed by "-", which means that redis will not fail to'),s(`
`),n("span",{class:"token comment"},"# start if the address is not available. Being not available only refers to"),s(`
`),n("span",{class:"token comment"},"# addresses that does not correspond to any network interfece. Addresses that"),s(`
`),n("span",{class:"token comment"},"# are already in use will always fail, and unsupported protocols will always BE"),s(`
`),n("span",{class:"token comment"},"# silently skipped."),s(`
`),n("span",{class:"token comment"},"#"),s(`
`),n("span",{class:"token comment"},"# Examples:"),s(`
`),n("span",{class:"token comment"},"#"),s(`
`),n("span",{class:"token comment"},"# bind 192.168.1.100 10.0.0.1     # listens on two specific IPv4 addresses"),s(`
`),n("span",{class:"token comment"},"# bind 127.0.0.1 ::1              # listens on loopback IPv4 and IPv6"),s(`
`),n("span",{class:"token comment"},"# bind * -::*                     # like the default, all available interfaces"),s(`
`),n("span",{class:"token comment"},"#"),s(`
`),n("span",{class:"token comment"},"# ~~~ WARNING ~~~ If the computer running Redis is directly exposed to the"),s(`
`),n("span",{class:"token comment"},"# internet, binding to all the interfaces is dangerous and will expose the"),s(`
`),n("span",{class:"token comment"},"# instance to everybody on the internet. So by default we uncomment the"),s(`
`),n("span",{class:"token comment"},"# following bind directive, that will force Redis to listen only on the"),s(`
`),n("span",{class:"token comment"},"# IPv4 and IPv6 (if available) loopback interface addresses (this means Redis"),s(`
`),n("span",{class:"token comment"},"# will only be able to accept client connections from the same host that it is"),s(`
`),n("span",{class:"token comment"},"# running on)."),s(`
`),n("span",{class:"token comment"},"#"),s(`
`),n("span",{class:"token comment"},"# IF YOU ARE SURE YOU WANT YOUR INSTANCE TO LISTEN TO ALL THE INTERFACES"),s(`
`),n("span",{class:"token comment"},"# JUST COMMENT OUT THE FOLLOWING LINE."),s(`
`),n("span",{class:"token comment"},"# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"),s(`
`),n("span",{class:"token comment"},"#bind 127.0.0.1 -::1"),s(`

`),n("span",{class:"token comment"},"# Protected mode is a layer of security protection, in order to avoid that"),s(`
`),n("span",{class:"token comment"},"# Redis instances left open on the internet are accessed and exploited."),s(`
`),n("span",{class:"token comment"},"#"),s(`
`),n("span",{class:"token comment"},"# When protected mode is on and if:"),s(`
`),n("span",{class:"token comment"},"#"),s(`
`),n("span",{class:"token comment"},"# 1) The server is not binding explicitly to a set of addresses using the"),s(`
`),n("span",{class:"token comment"},'#    "bind" directive.'),s(`
`),n("span",{class:"token comment"},"# 2) No password is configured."),s(`
`),n("span",{class:"token comment"},"#"),s(`
`),n("span",{class:"token comment"},"# The server only accepts connections from clients connecting from the"),s(`
`),n("span",{class:"token comment"},"# IPv4 and IPv6 loopback addresses 127.0.0.1 and ::1, and from Unix domain"),s(`
`),n("span",{class:"token comment"},"# sockets."),s(`
`),n("span",{class:"token comment"},"#"),s(`
`),n("span",{class:"token comment"},"# By default protected mode is enabled. You should disable it only if"),s(`
`),n("span",{class:"token comment"},"# you are sure you want clients from other hosts to connect to Redis"),s(`
`),n("span",{class:"token comment"},"# even if no authentication is configured, nor a specific set of interfaces"),s(`
`),n("span",{class:"token comment"},'# are explicitly listed using the "bind" directive.'),s(`
protected-mode no


`),n("span",{class:"token comment"},"################################# GENERAL #####################################"),s(`

`),n("span",{class:"token comment"},"# By default Redis does not run as a daemon. Use 'yes' if you need it."),s(`
`),n("span",{class:"token comment"},"# Note that Redis will write a pid file in /var/run/redis.pid when daemonized."),s(`
`),n("span",{class:"token comment"},"# When Redis is supervised by upstart or systemd, this parameter has no impact."),s(`
daemonize `),n("span",{class:"token function"},"yes"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," ")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("p",null,"配置密码：",-1),g=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{sh:"",class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},'# IMPORTANT NOTE: starting with Redis 6 "requirepass" is just a compatibility'),s(`
`),n("span",{class:"token comment"},"# layer on top of the new ACL system. The option effect will be just setting"),s(`
`),n("span",{class:"token comment"},"# the password for the default user. Clients will still authenticate using"),s(`
`),n("span",{class:"token comment"},"# AUTH <password> as usually, or more explicitly with AUTH default <password>"),s(`
`),n("span",{class:"token comment"},"# if they follow the new protocol: both will work."),s(`
`),n("span",{class:"token comment"},"#"),s(`
`),n("span",{class:"token comment"},"# The requirepass is not compatable with aclfile option and the ACL LOAD"),s(`
`),n("span",{class:"token comment"},"# command, these will cause requirepass to be ignored."),s(`
`),n("span",{class:"token comment"},"#"),s(`
`),n("span",{class:"token comment"},"# requirepass foobared"),s(`

`),n("span",{class:"token comment"},"################################# REPLICATION #################################"),s(`

`),n("span",{class:"token comment"},"# Master-Replica replication. Use replicaof to make a Redis instance a copy of"),s(`
`),n("span",{class:"token comment"},"# another Redis server. A few things to understand ASAP about Redis replication."),s(`
`),n("span",{class:"token comment"},"#"),s(`
`),n("span",{class:"token comment"},"#   +------------------+      +---------------+"),s(`
`),n("span",{class:"token comment"},"#   |      Master      | ---> |    Replica    |"),s(`
`),n("span",{class:"token comment"},"#   | (receive writes) |      |  (exact copy) |"),s(`
`),n("span",{class:"token comment"},"#   +------------------+      +---------------+"),s(`
`),n("span",{class:"token comment"},"#"),s(`
`),n("span",{class:"token comment"},"# 1) Redis replication is asynchronous, but you can configure a master to"),s(`
`),n("span",{class:"token comment"},"#    stop accepting writes if it appears to be not connected with at least"),s(`
`),n("span",{class:"token comment"},"#    a given number of replicas."),s(`
`),n("span",{class:"token comment"},"# 2) Redis replicas are able to perform a partial resynchronization with the"),s(`
`),n("span",{class:"token comment"},"#    master if the replication link is lost for a relatively small amount of"),s(`
`),n("span",{class:"token comment"},"#    time. You may want to configure the replication backlog size (see the next"),s(`
`),n("span",{class:"token comment"},"#    sections of this file) with a sensible value depending on your needs."),s(`
`),n("span",{class:"token comment"},"# 3) Replication is automatic and does not need user intervention. After a"),s(`
`),n("span",{class:"token comment"},"#    network partition replicas automatically try to reconnect to masters"),s(`
`),n("span",{class:"token comment"},"#    and resynchronize with them."),s(`
`),n("span",{class:"token comment"},"#"),s(`
`),n("span",{class:"token comment"},"# replicaof <masterip> <masterport>"),s(`

`),n("span",{class:"token comment"},'# If the master is password protected (using the "requirepass" configuration'),s(`
`),n("span",{class:"token comment"},"# directive below) it is possible to tell the replica to authenticate before"),s(`
`),n("span",{class:"token comment"},"# starting the replication synchronization process, otherwise the master will"),s(`
`),n("span",{class:"token comment"},"# refuse the replica request."),s(`
`),n("span",{class:"token comment"},"#"),s(`
`),n("span",{class:"token comment"},"# masterauth <master-password>"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," ")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=e(`<h2 id="_4-standalone-模式" tabindex="-1"><a class="header-anchor" href="#_4-standalone-模式" aria-hidden="true">#</a> 4 Standalone 模式</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动</span>
$ redis-server redis.conf

<span class="token comment"># 查看是否启动成功</span>
$ <span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-sentinel-哨兵模式" tabindex="-1"><a class="header-anchor" href="#_5-sentinel-哨兵模式" aria-hidden="true">#</a> 5 Sentinel 哨兵模式</h2><p><code>./sentinel.conf</code></p>`,4),_=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{sh:"",class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# By default Redis Sentinel does not run as a daemon. Use 'yes' if you need it."),s(`
`),n("span",{class:"token comment"},"# Note that Redis will write a pid file in /var/run/redis-sentinel.pid when"),s(`
`),n("span",{class:"token comment"},"# daemonized."),s(`
daemonize `),n("span",{class:"token function"},"yes"),s(`

`),n("span",{class:"token comment"},"# sentinel monitor <master-name> <ip> <redis-port> <quorum>"),s(`
`),n("span",{class:"token comment"},"#"),s(`
`),n("span",{class:"token comment"},"# Tells Sentinel to monitor this master, and to consider it in O_DOWN"),s(`
`),n("span",{class:"token comment"},"# (Objectively Down) state only if at least <quorum> sentinels agree."),s(`
`),n("span",{class:"token comment"},"#"),s(`
`),n("span",{class:"token comment"},"# Note that whatever is the ODOWN quorum, a Sentinel will require to"),s(`
`),n("span",{class:"token comment"},"# be elected by the majority of the known Sentinels in order to"),s(`
`),n("span",{class:"token comment"},"# start a failover, so no failover can be performed in minority."),s(`
`),n("span",{class:"token comment"},"#"),s(`
`),n("span",{class:"token comment"},"# Replicas are auto-discovered, so you don't need to specify replicas in"),s(`
`),n("span",{class:"token comment"},"# any way. Sentinel itself will rewrite this configuration file adding"),s(`
`),n("span",{class:"token comment"},"# the replicas using additional configuration options."),s(`
`),n("span",{class:"token comment"},"# Also note that the configuration file is rewritten when a"),s(`
`),n("span",{class:"token comment"},"# replica is promoted to master."),s(`
`),n("span",{class:"token comment"},"#"),s(`
`),n("span",{class:"token comment"},"# Note: master name should not include special characters or spaces."),s(`
`),n("span",{class:"token comment"},'# The valid charset is A-z 0-9 and the three characters ".-_".'),s(`
sentinel monitor mymaster `),n("span",{class:"token number"},"127.0"),s(".0.1 "),n("span",{class:"token number"},"6379"),s(),n("span",{class:"token number"},"2"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," ")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动 sentinel</span>
redis-sentinel sentinel.conf

<span class="token comment"># 查看 sentinel 状态 redis-cli -p 26379</span>
info sentinel

<span class="token comment"># 查看 node 状态 redis-cli -p 6379</span>
info replication
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行截图：</p><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_6-cluster-集群模式" tabindex="-1"><a class="header-anchor" href="#_6-cluster-集群模式" aria-hidden="true">#</a> 6 Cluster 集群模式</h2><p><code>./redis.conf</code></p>',5),R=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{sh:"",class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"################################ REDIS CLUSTER  ###############################"),s(`

`),n("span",{class:"token comment"},"# Normal Redis instances can't be part of a Redis Cluster; only nodes that are"),s(`
`),n("span",{class:"token comment"},"# started as cluster nodes can. In order to start a Redis instance as a"),s(`
`),n("span",{class:"token comment"},"# cluster node enable the cluster support uncommenting the following:"),s(`
`),n("span",{class:"token comment"},"#"),s(`
`),n("span",{class:"token comment"},"# cluster-enabled yes"),s(`

`),n("span",{class:"token comment"},"# Every cluster node has a cluster configuration file. This file is not"),s(`
`),n("span",{class:"token comment"},"# intended to be edited by hand. It is created and updated by Redis nodes."),s(`
`),n("span",{class:"token comment"},"# Every Redis Cluster node requires a different cluster configuration file."),s(`
`),n("span",{class:"token comment"},"# Make sure that instances running in the same system do not have"),s(`
`),n("span",{class:"token comment"},"# overlapping cluster configuration file names."),s(`
`),n("span",{class:"token comment"},"#"),s(`
`),n("span",{class:"token comment"},"# cluster-config-file nodes-6379.conf"),s(`

`),n("span",{class:"token comment"},"# Cluster node timeout is the amount of milliseconds a node must be unreachable"),s(`
`),n("span",{class:"token comment"},"# for it to be considered in failure state."),s(`
`),n("span",{class:"token comment"},"# Most other internal time limits are a multiple of the node timeout."),s(`
`),n("span",{class:"token comment"},"#"),s(`
`),n("span",{class:"token comment"},"# cluster-node-timeout 15000"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," ")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">vim</span> redis6380.conf

include redis.conf
port <span class="token number">6380</span>
dbfilename <span class="token string">&quot;dump6380.rdb&quot;</span>
pidfile <span class="token string">&quot;/var/run/redis_6380.pid&quot;</span>
cluster-config-file nodes-6380.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 每台主机启动 2 个实例</span>
$ redis-server redis.conf
$ redis-server redis6380.conf

<span class="token comment"># 创建集群</span>
$ redis-cli <span class="token parameter variable">--cluster</span> create <span class="token number">192.168</span>.3.19:6379 <span class="token number">192.168</span>.3.19:6380 <span class="token number">192.168</span>.3.20:6379 <span class="token number">192.168</span>.3.20:6380 <span class="token number">192.168</span>.3.21:6379 <span class="token number">192.168</span>.3.21:6380 --cluster-replicas <span class="token number">1</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Performing <span class="token builtin class-name">hash</span> slots allocation on <span class="token number">6</span> nodes<span class="token punctuation">..</span>.
Master<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> -<span class="token operator">&gt;</span> Slots <span class="token number">0</span> - <span class="token number">5460</span>
Master<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> -<span class="token operator">&gt;</span> Slots <span class="token number">5461</span> - <span class="token number">10922</span>
Master<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> -<span class="token operator">&gt;</span> Slots <span class="token number">10923</span> - <span class="token number">16383</span>
Adding replica <span class="token number">192.168</span>.3.20:6380 to <span class="token number">192.168</span>.3.19:6379
Adding replica <span class="token number">192.168</span>.3.21:6380 to <span class="token number">192.168</span>.3.20:6379
Adding replica <span class="token number">192.168</span>.3.19:6380 to <span class="token number">192.168</span>.3.21:6379
M: 5629c9bd2ed534ab08d32304a50cec1c2df77e06 <span class="token number">192.168</span>.3.19:6379
   slots:<span class="token punctuation">[</span><span class="token number">0</span>-5460<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">5461</span> slots<span class="token punctuation">)</span> master
S: f5a2fb2dc2a8a36db9fce2c66158fc4b706dfbe0 <span class="token number">192.168</span>.3.19:6380
   replicates 3e636f6283839a6cdf64c3f2536b71f9afd10183
M: 2b46af737c5c9352a19c88839d7e316110f5f83a <span class="token number">192.168</span>.3.20:6379
   slots:<span class="token punctuation">[</span><span class="token number">5461</span>-10922<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">5462</span> slots<span class="token punctuation">)</span> master
S: 629da6385cbbab3ace1240cfcbfc2b2f8bad06af <span class="token number">192.168</span>.3.20:6380
   replicates 5629c9bd2ed534ab08d32304a50cec1c2df77e06
M: 3e636f6283839a6cdf64c3f2536b71f9afd10183 <span class="token number">192.168</span>.3.21:6379
   slots:<span class="token punctuation">[</span><span class="token number">10923</span>-16383<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">5461</span> slots<span class="token punctuation">)</span> master
S: d4c4410da556d9f11cd99e57f879e64e7c9024ba <span class="token number">192.168</span>.3.21:6380
   replicates 2b46af737c5c9352a19c88839d7e316110f5f83a
Can I <span class="token builtin class-name">set</span> the above configuration? <span class="token punctuation">(</span>type <span class="token string">&#39;yes&#39;</span> to accept<span class="token punctuation">)</span>: <span class="token function">yes</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Nodes configuration updated
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Assign a different config epoch to each <span class="token function">node</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Sending CLUSTER MEET messages to <span class="token function">join</span> the cluster
Waiting <span class="token keyword">for</span> the cluster to <span class="token function">join</span>
<span class="token builtin class-name">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Performing Cluster Check <span class="token punctuation">(</span>using <span class="token function">node</span> <span class="token number">192.168</span>.3.19:6379<span class="token punctuation">)</span>
M: 5629c9bd2ed534ab08d32304a50cec1c2df77e06 <span class="token number">192.168</span>.3.19:6379
   slots:<span class="token punctuation">[</span><span class="token number">0</span>-5460<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">5461</span> slots<span class="token punctuation">)</span> master
   <span class="token number">1</span> additional replica<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
S: d4c4410da556d9f11cd99e57f879e64e7c9024ba <span class="token number">192.168</span>.3.21:6380
   slots: <span class="token punctuation">(</span><span class="token number">0</span> slots<span class="token punctuation">)</span> slave
   replicates 2b46af737c5c9352a19c88839d7e316110f5f83a
M: 2b46af737c5c9352a19c88839d7e316110f5f83a <span class="token number">192.168</span>.3.20:6379
   slots:<span class="token punctuation">[</span><span class="token number">5461</span>-10922<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">5462</span> slots<span class="token punctuation">)</span> master
   <span class="token number">1</span> additional replica<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
M: 3e636f6283839a6cdf64c3f2536b71f9afd10183 <span class="token number">192.168</span>.3.21:6379
   slots:<span class="token punctuation">[</span><span class="token number">10923</span>-16383<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">5461</span> slots<span class="token punctuation">)</span> master
   <span class="token number">1</span> additional replica<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
S: f5a2fb2dc2a8a36db9fce2c66158fc4b706dfbe0 <span class="token number">192.168</span>.3.19:6380
   slots: <span class="token punctuation">(</span><span class="token number">0</span> slots<span class="token punctuation">)</span> slave
   replicates 3e636f6283839a6cdf64c3f2536b71f9afd10183
S: 629da6385cbbab3ace1240cfcbfc2b2f8bad06af <span class="token number">192.168</span>.3.20:6380
   slots: <span class="token punctuation">(</span><span class="token number">0</span> slots<span class="token punctuation">)</span> slave
   replicates 5629c9bd2ed534ab08d32304a50cec1c2df77e06
<span class="token punctuation">[</span>OK<span class="token punctuation">]</span> All nodes agree about slots configuration.
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Check <span class="token keyword">for</span> <span class="token function">open</span> slots<span class="token punctuation">..</span>.
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Check slots coverage<span class="token punctuation">..</span>.
<span class="token punctuation">[</span>OK<span class="token punctuation">]</span> All <span class="token number">16384</span> slots covered.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行截图：</p><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_7-rdb-与-aof" tabindex="-1"><a class="header-anchor" href="#_7-rdb-与-aof" aria-hidden="true">#</a> 7 RDB 与 AOF</h2><ul><li>RDB (Redis DataBase)</li><li>AOF (Append Only File)</li></ul>',6),A={href:"https://redis.io/topics/persistence",target:"_blank",rel:"noopener noreferrer"},T=n("p",null,"（全文完）",-1);function E(N,S){const a=l("ExternalLinkIcon");return c(),o("div",null,[m,u,n("p",null,[b,s(": "),n("a",v,[s("https://redis.io/"),i(a)])]),k,h,f,g,y,_,w,R,x,n("p",null,[s("官方文档: "),n("a",A,[s("https://redis.io/topics/persistence"),i(a)])]),T])}const C=t(p,[["render",E],["__file","index.html.vue"]]);export{C as default};
