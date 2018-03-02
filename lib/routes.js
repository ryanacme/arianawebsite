Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function () {
  this.render('home');
});
Router.route('/couching', function () {
  this.render('couching');
});
Router.route('blog', function () {
  this.render('blog');
  // var language = $("#languageSelector").text();
   // pageLoadingLanguage(language);
   
});

Router.route('/subscribe', function () {
  this.render('subscribe');
});
Router.route('/podcasts', function () {
  this.render('podcasts');
});

// Router.route('/blog/:slug', function () {
//   this.render('slug', {
//   	data: function(){
//   		console.log(this.params.slug);
//   		// return Images.findOne({_id:this.params._id});
//   		var t = Blog.Post.find({slug:this.params.slug}).fetch()[0];
//   		console.log(t);
//   		return t;
//   	},
//   });
// });

// Router.route('/blog/:_id', function () {
//   this.render('myslug', {
//   	data: function(){
//   		console.log(this.params._id);
//   		// return Images.findOne({_id:this.params._id});
//   		var t = Blog.Post.find({_id:this.params._id}).fetch()[0];
//   		console.log(t);
//   		return t;
//   	}
//   });
// });

// Router.route('/blog/time-money', function () {
//   this.render('myslug');
// });