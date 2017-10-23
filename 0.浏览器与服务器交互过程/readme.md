- tcp/ip（查询）
  - nagle算法：http://www.cnblogs.com/wanpengcoder/p/5366156.html
  - 三次握手ack
  - 保证报文发送顺序，保证不丢包
  - 建立连接：ip/对方三次ip
- 目标服务器/目标端口-建立服务器连接
- 浏览器发送请求报文（包括什么？）
  - 报文头
  - 首部
  - 主体：可能没有
- 服务器返回响应报文（包括什么？）
  - 报文头：状态码
  - 首部: Content-Length,接受完可以关掉
  - 主体
- tcp:慢启动。keep-alive
- 优化：dns-prefetch. cdn，多域名，一个域名下只能并发6个请求 http://www.cnblogs.com/x_wukong/p/3926059.html?utm_source=tuicool&utm_medium=referral
- 服务器-万兆网卡，路由器：mtu，dns：
- 浏览器解析报文：
  js,css如何处理？ defer async
  js放body下面，因为js延迟页面渲染
- 渲染引擎：
  扫html，预取
  服务端渲染