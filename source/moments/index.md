---
title: 说说
date: 2022-10-25 19:15:14
---
<!-- 引用 HexoPlusPlus_Talk组件 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@latest/talk.css" /> 
<script src="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@latest/talk.js"></script>
<!-- 创建HexoPlusPlus_Talk容器 -->
<div id="hpp_talk"></div>
<!-- 激活HexoPlusPlus_Talk -->
<script>
new hpp_talk({
  id:"hpp_talk",//容器id
  domain: "bfaner.github.io",//您的HexoPlusPlus域名，如admin.cyfan.top
  limit: 10,//单次获取的最多条数
  start: 0,//从第几条开始
  //themecss: "" //自定义说说主题，可选【仅1.1.0版本及以上使用】
});
</script>