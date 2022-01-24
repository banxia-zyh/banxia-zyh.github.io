(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{513:function(s,e,a){"use strict";a.r(e);var r=a(4),n=Object(r.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"拉取镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取镜像"}},[s._v("#")]),s._v(" 拉取镜像")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker search rocketmq\n\ndocker pull foxiswho/rocketmq:4.8.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"启动nameserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动nameserver"}},[s._v("#")]),s._v(" 启动NameServer")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker run -d --name rmqnamesrver -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"JAVA_OPT_EXT=-Xms512M -Xmx512M -Xmn128m"')]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9876")]),s._v(":9876 foxiswho/rocketmq:4.8.0 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" mqnamesrv\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"启动broker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动broker"}},[s._v("#")]),s._v(" 启动Broker")]),s._v(" "),a("p",[s._v("创建挂在目录")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /data/docker/rocketmq/logs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /data/docker/rocketmq/store\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" -R "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" /data\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("启动broker")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker run -d  -v /data/docker/rocketmq/logs:/home/rocketmq/logs -v    /data/docker/rocketmq/store:/home/rocketmq/store \n      --name rmqbroker \n      -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NAMESRV_ADDR=[namserver ip地址]:9876"')]),s._v(" \n      -e ”JAVA_OPT_EXT"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v('-Xms512M -Xmx512M -Xmn128m" \n      -p '),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10911")]),s._v(":10911 \n      foxiswho/rocketmq:4.8.0 \n      "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" mqbroker -c /home/rocketmq/rocketmq-4.8.0/conf/broker.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("需要注意：sh mqbroker -c 后的路径是否正确，当启动后要进入容器在broker.conf中配置上NameServer的ip信息。将broker注册进Nameserver。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/banxia-zyh/img/img/20211119155844.png",alt:"image-20211119155844489"}})]),s._v(" "),a("h3",{attrs:{id:"启动rocketmq-console控制台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动rocketmq-console控制台"}},[s._v("#")]),s._v(" 启动Rocketmq-console控制台")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker search rocketmq-console-ng\ndocker pull rocketmq-console-ng\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker run --name rmqconsole\n-e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"JAVA_OPTS=-Drocketmq.namesrv.addr=[namserver ip]:9876 -Dcom.rocketmq.sendMessageWithVIPChannel=false"')]),s._v("\n-p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8180")]),s._v(":8080 -t styletang/rocketmq-console-ng\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("开放端口 fire-cmd --zone=public --add-port=8180/tcp --permanent")]),s._v(" "),a("p",[s._v("浏览器访问：ip地址:8180")])])}),[],!1,null,null,null);e.default=n.exports}}]);