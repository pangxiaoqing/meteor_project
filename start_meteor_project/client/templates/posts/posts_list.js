//构建第一个helper
//假数据
/*var postsData = [
	{
		title: 'Introducing Telescope',
		url: 'http://sachagreif.com/Introducing-telescope/'
	},
	{
		title:  'Meteor',
		url: 'http://meteor.com'
	},
	{
		title: 'The Meteor Book',
		url: 'http://themeteorbook.com'
	}
];
Template.postsList.helpers({
	posts: postsData
})*/
Template.postsList.helpers({
  posts: function() {
    return Posts.find();
  }
});
