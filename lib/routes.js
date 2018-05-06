Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function () {
	this.render("header", {
		to:"nav1"
	});
	this.render('home', {
		to:"main"
	});
});
Router.route('/coaching', function () {
  this.render("header", {
		to:"nav1"
	});
  this.render('coaching', {
		to:"main"
	});
});
Router.route('blog', function () {
  this.render("header", {
		to:"nav1"
	});
  this.render('blog', {
		to:"main"
	});
  // var language = $("#languageSelector").text();
   // pageLoadingLanguage(language);
   
});

Router.route('/subscribe', function () {
  this.render("header", {
		to:"nav1"
	});
  this.render('subscribe', {
		to:"main"
	});
});
Router.route('/podcasts', function () {
  this.render("header", {
		to:"nav1"
	});
	this.render("sound_add_form_btn", {
		to:"nav2"
	});
  this.render('podcasts', {
		to:"main"
	});
});

// Router.route('/blog/:slug', function () {
//   this.render('myslug', {
//   	data: function(){
//   	 // return this.params.slug; 
//   		console.log(this.params.slug);
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
