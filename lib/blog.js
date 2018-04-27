// Blog.config({
//   title: "Portfolio Website",

//   rss: {
//     title: 'My Portfolio Website',
//     description: 'This is an example of a portfolio website'
//   }
// });

Blog.config({
  title: "Portfolio Website",
  blogIndexTemplate: 'blog', // '/blog' route
  blogShowTemplate: 'slug' ,   // '/blog/:slug' route
  // authorRole: 'blogAuthor',
  // adminRole: 'blogAdmin',
  // postVisibilityAdmins: 'Me & Admins only',
  // postVisibilityAdmins: 'Admins only',
  // visibleTo: 'Admins',
  

  language: {
  	adminHeader: 'Blog Admin',
  	addPost: 'Add Blog Post',
  	// postVisibilityAdmins: 'Admins only',
  },
  rss: {
    title: 'My Portfolio Website',
    description: 'This is an example of a portfolio website'
  }
});