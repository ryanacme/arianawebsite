// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

// import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });

Meteor.subscribe("sounds");


Template.header.rendered = function() {
//   var elem = $("#languageSelector").text();
  Session.set("pageinEnglish",true);
  // if (elem == "فارسی") {
  //   $("#languageSelector").attr("href", "/")
  // } else {
  //   $("#languageSelector").attr("href", "/fr")
  // }// else
    
};



Template.homeFR.rendered = function() {
  $("#fullText1").hide();
  $("#fullText2").hide();
  $("#fullText3").hide();
  $(".js-scheduleAppForms").hide();
  $(".js-scheduleAppThx").hide();
  $(".js-freebiesThx").hide();
};
Template.homeEN.rendered = function() {
  $("#fullText1").hide();
  $("#fullText2").hide();
  $("#fullText3").hide();
  $(".js-scheduleAppForms").hide();
  $(".js-scheduleAppThx").hide();
  $(".js-freebiesThx").hide();
};

Template.home.events({
  "click .js-scheduleAppBtn":function(event){
    
    $(".js-scheduleAppForms").show(1500);
    // $(".js-scheduleAppForms").slideDown();
    $(".js-scheduleAppBtn").hide(1000);
  }, //event helper
  
  "click .js-cancelAppBtn":function(event){
    $(".js-scheduleAppBtn").show(1500);
    $(".js-scheduleAppForms").hide(1000);
  }, //event helper
  
  "submit .js-scheduleAppForms":function(event){
    
    event.preventDefault();
    var inputName, inputFamilyName, inputAddress, inputEmail, inputPhone, inputSkype, inputComment, inputHowFind;
    inputName = event.target.inputNameSchedule.value;
    inputFamilyName = event.target.inputFamilyName.value;
    inputEmail = event.target.inputEmailSchedule.value;
    inputPhone = event.target.inputPhone.value;
    inputSkype = event.target.inputSkype.value;
    inputAddress = event.target.inputAddress.value;
    inputComment = event.target.inputComment.value;
    inputHowFind = event.target.inputHowFind.value;
    var inputObj = {createdOn: new Date(), name:inputName, familyName:inputFamilyName, email:inputEmail, skypeID:inputSkype, usrAddress:inputAddress, comment:inputComment, howFindUs:inputHowFind};
    inputObj.requestedInEnglish = Session.get("pageinEnglish");
    $.ajax({
			url: "https://geoip-db.com/jsonp",
			jsonpCallback: "callback",
			dataType: "jsonp",
			error: function() {
        console.log("An error occurred,when getting the geoip!");
			},
			success: function( location ) {
				// console.log(location);
			},
			complete: function( data) {
			  var locationObj = data.responseJSON;
			  inputObj.geoip = locationObj;
			  var ipLocation = locationObj.country_name + "-" + locationObj.city;
			  var htmlContent = ['<head><style>table {width:100%; max-width: 500px;} table, th, td {border: 1px solid black; border-collapse: collapse;} th, td {padding: 5px;  text-align: left;} </style></head>',
                        '<h4>Hi Ariana. You have a new request for scheduling and appointment as below:</h4>',
                        '<body><table>',
                        '<tr><td>DateTime</td><td>' + new Date() + '</td></tr>',
                        '<tr><td>First name</td><td>' + inputName + '</td></tr>',
                        '<tr><td>Family name</td><td>' + inputFamilyName + '</td></tr>',
                        '<tr><td>Email</td><td>' + inputEmail + '</td></tr>',
                        '<tr><td>Phone</td><td>' + inputPhone + '</td></tr>',
                        '<tr><td>Skype</td><td>' + inputSkype + '</td></tr>',
                        '<tr><td>User Address</td><td>' + inputAddress + '</td></tr>',
                        '<tr><td>IP Location</td><td>' + ipLocation + '</td></tr>',
                        '<tr><td>Comment</td><td>' + inputComment + '</td></tr>',
                        '<tr><td>How find us</td><td>' + inputHowFind + '</td></tr>',
                        '<tr><td>Requested in English</td><td>' + Session.get("pageinEnglish") + '</td></tr>',
                        '</table></body>'].join('');
                      
        Meteor.call('sendEmail',{
            to: 'ryan.braving@gmail.com',
            from: 'no-reply@where-ever.com',
            subject: 'New Appointment Request!',
            text: 'Mailgun is totally awesome for sending emails!',
            // html: 'With meteor it&apos;s easy to set up <strong>HTML</strong> <span style="color:red">emails</span> too.'
            html: htmlContent,
        }); // meteor call sendEmail
        
        Meteor.call('addScheduleAppointment', inputObj);
            
			  
			}, //complete callback
			
		});	//jQuery ajax	
    
    $(".js-scheduleAppForms").hide(1000);
    // $(".js-areYouCurious").hide()
    if (Session.get("pageinEnglish")){
      var thankYouText = '<br><hr style="height:1px;border:none;color:#333;background-color:#333;" width="50%" />Thank&apos;s <strong>' + inputName + ' ' + inputFamilyName + '</strong>. Someone from Ariana&apos;s team will contact you to arrange an appointment.'
    } else {
      var thankYouText = '<br><hr style="height:1px;border:none;color:#333;background-color:#333;" width="50%" />تشکر <strong>' + inputName + ' ' + inputFamilyName + '</strong>. بزودی با شما تماس گرفته خواهد شد تا هماهنگیهای لازم برای قرار ملاقات اینترنتی یا تلفنی انجام پذیرد'
    }
    $(".js-scheduleAppThx").html(thankYouText);
    $(".js-scheduleAppThx").show(1000);
  }, //event helper
  
  
  
  "click #toggle1":function(event){
    var elem = $("#toggle1").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#excerptText1").removeClass("excerptText");
      $("#excerptText1").addClass("fullText");
      
      $("#toggle1").text("Read Less");
      $("#fullText1").slideDown(2000);
      
    } else {
      //Stuff to do when btn is in the read less state
      $("#excerptText1").removeClass("fullText");
      $("#excerptText1").addClass("excerptText");
      $("#toggle1").text("Read More");
      $("#fullText1").slideUp(2000);
    }
  }, //event helper
  
  "click #toggle2":function(event){
    var elem = $("#toggle2").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#excerptText2").removeClass("excerptText");
      $("#excerptText2").addClass("fullText");
      
      $("#toggle2").text("Read Less");
      $("#fullText2").slideDown(2000);
      
    } else {
      //Stuff to do when btn is in the read less state
      $("#excerptText2").removeClass("fullText");
      $("#excerptText2").addClass("excerptText");
      $("#toggle2").text("Read More");
      $("#fullText2").slideUp(2000);
    }
  }, //event helper
  
  "click #toggle3":function(event){
    var elem = $("#toggle3").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#excerptText3").removeClass("excerptText");
      $("#excerptText3").addClass("fullText");
      
      $("#toggle3").text("Read Less");
      $("#fullText3").slideDown(2000);
      
    } else {
      //Stuff to do when btn is in the read less state
      $("#excerptText3").removeClass("fullText");
      $("#excerptText3").addClass("excerptText");
      $("#toggle3").text("Read More");
      $("#fullText3").slideUp(2000);
    }
  }, //event helper
  
  "submit .js-freebiesForm":function(event){
    event.preventDefault();
    var inputNameFreebies, inputEmailFreebies;
    inputNameFreebies = event.target.inputNameFreebies.value;
    inputEmailFreebies = event.target.inputEmailFreebies.value;
    var inputObj = {createdOn: new Date(), name:inputNameFreebies, email:inputEmailFreebies, requestedInEnglish:Session.get("pageinEnglish")};
    $.ajax({
			url: "https://geoip-db.com/jsonp",
			jsonpCallback: "callback",
			dataType: "jsonp",
			error: function() {
        console.log("An error occurred,when getting the geoip!");
			},
			success: function( location ) {
				var locationObj = location;
			  inputObj.geoip = locationObj;
			  Meteor.call('addFreebies', inputObj);
			},
    });	//jQuery ajax	
    
    $(".js-freebiesForm").hide(1000);
    // $(".js-areYouCurious").hide()
    if (Session.get("pageinEnglish")){
      var thankYouText = '<br><hr style="height:1px;border:none;color:#333;background-color:#333;" width="50%" />Thank&apos;s <strong>' + inputNameFreebies + '</strong>.You have been successfully subscribed to the freebies.';
    } else {
      var thankYouText = '<br><hr style="height:1px;border:none;color:#333;background-color:#333;" width="50%" />تشکر<strong>' + inputNameFreebies + '</strong>.اشتراک شما با موفقیت انجام شد. از این پس شما از طریق ایمیل از پستهای جدید مطلع خواهید شد و برخی از مطالب ارزشمند دیگر نیز به صورت رایگان برای شما ارسال میگردد ';
    }
    $(".js-freebiesThx").html(thankYouText);
    $(".js-freebiesThx").show(1000);
  }, //event helper
  
}); //Template.home.events

Template.home.helpers({
  pageIsEnglish: function(){
    return Session.get("pageinEnglish");
  },
});


Template.header.events({
  "click .js-language-selector":function(event){
    var elem = $("#languageSelector").text();
    if (elem == "فارسی") {
      $("#languageSelector").text("English");
      $("#coaching").text("کوچینگ");
      $("#podcasts").text("پادکست");
      $("#blog").text("وبلاگ");
      Session.set("pageinEnglish",false);
    } else {
      $("#languageSelector").text("فارسی");
      $("#coaching").text("Coaching");
      $("#podcasts").text("Podcasts");
      $("#blog").text("Blog");
      Session.set("pageinEnglish",true);

    }// else
    
    
  }//event helper

}); //Template.header.events

// ++++++++++++++++++++++++  Helpers   ++++++++++++++++++++++++++++
Template.blog.helpers({
	posts_after_language_filter: function(){
		return Blog.Post.find({isEnglish : Session.get("pageinEnglish")});
		// return Blog.Post.find({});
	},
	inEnglish: function(){
    return Session.get("pageinEnglish");
  },
});

Template.slug.helpers({
	inEnglish: function(id){
	  return Blog.Post.find({_id:id}).fetch()[0].isEnglish;
  },
});



Template.podcasts.helpers({
  
	isAdminUser: function() {
		// return false;
		if(Meteor.user() && Meteor.user().roles != undefined){
			if(Meteor.user().roles[0] == "blogAdmin"){
				console.log("It is Admin");
				return true;
			} //if
			console.log("It is Not Admin");
			return false;
		}// if		
  }, // isAdminUser helper
  sounds: function(){
		return Sounds.find({});
		// if (Session.get("userFilter")){ //they set a filter
			// return Images.find({createdBy:Session.get("userFilter")},{sort:{createdOn:-1, rating:-1}});
		// }//if
		// else{
		// 	return Images.find({},{sort:{createdOn:-1, rating:-1}, limit:Session.get("imageLimit")});
		// }//else
		
	
		
	}, //helper
}); //helper


Template.sound_add_form_btn.events({
	"click .js-show-fileinput":function(event){
    bootbox.dialog({ message: '<div class="text-center"><i class="fa fa-spin fa-spinner"></i> Loading...</div>' });
  },
}); // helper








// this function is to create delay e.g sleep(1000)
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
