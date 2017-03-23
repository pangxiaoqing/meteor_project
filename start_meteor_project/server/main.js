import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });
}

});
/*连接集合: 发布与订阅
到此为止，我们仍然用着 autopublish 这个包，这个包并不是为正式产品化的应用程序准备的。正如它的名字陈述的那样，它简单地把整个集合分享给所有连接的客户端。这个可不是我们期望的样子，所以让我们去掉它。

打开一个终端窗口，输入：

meteor remove autopublish
这个操作有了立即的反应。当你打开浏览器，你会发现所有的帖子都不见了！这是因为我们一直依赖于 autopublish 来让我们的客户端可以镜像般地得到数据库中的所有帖子。

最终我们需要做得到我们仅仅把我们客户端需要看到的帖子传输过来（需要考虑分页的情况）。不过暂时我们可以先设置把 Posts 所有帖子都发布出来。
我们建立一个简单的 Publish() 函数，它仅仅返回一个反映所有帖子的游标。*/
Meteor.publish('posts', function() {
  return Posts.find();
});
// 在服务器端---排除做过标记的帖子
/*Meteor.publish('posts', function() {
  return Posts.find({flagged: false}); 
});*/


