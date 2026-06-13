var posts=["2026/06/06/hello-world/","2026/06/06/测试这是一篇新的博客/","2026/06/11/2026-06-11-多博客搭配文档仓库的搭建/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };