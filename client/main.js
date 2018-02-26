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

Template.home.rendered = function() {
  $("#fullText1").hide();
  $("#fullText2").hide();
  $("#fullText3").hide();
  $(".js-scheduleAppForms").hide();
  $(".js-scheduleAppThx").hide();
};

Template.home.events({
  "click .js-scheduleAppBtn":function(event){
    
    $(".js-scheduleAppForms").show(1500);
    // $(".js-scheduleAppForms").slideDown();
    $(".js-scheduleAppBtn").hide(1000);
  },
  
  "click .js-cancelAppBtn":function(event){
    $(".js-scheduleAppBtn").show(1500);
    $(".js-scheduleAppForms").hide(1000);
  },
  
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
    
    var htmlContent = ['<head><style>table {width:100%; max-width: 500px;} table, th, td {border: 1px solid black; border-collapse: collapse;} th, td {padding: 5px;  text-align: left;} </style></head>',
                        '<h4>Hi Ariana. You have a new request for scheduling and appointment as below:</h4>',
                        '<body><table>',
                        '<tr><td>First name</td><td>' + inputName + '</td></tr>',
                        '<tr><td>Family name</td><td>' + inputFamilyName + '</td></tr>',
                        '<tr><td>Email</td><td>' + inputEmail + '</td></tr>',
                        '<tr><td>Phone</td><td>' + inputPhone + '</td></tr>',
                        '<tr><td>Skype</td><td>' + inputSkype + '</td></tr>',
                        '<tr><td>Address</td><td>' + inputAddress + '</td></tr>',
                        '<tr><td>Comment</td><td>' + inputComment + '</td></tr>',
                        '<tr><td>How find us</td><td>' + inputHowFind + '</td></tr>',
                        '</table></body>'].join('');
                      
// Meteor.call('sendEmail',{
//     to: 'ryan.braving@gmail.com',
//     from: 'no-reply@where-ever.com',
//     subject: 'New Appointment Request!',
//     text: 'Mailgun is totally awesome for sending emails!',
//     // html: 'With meteor it&apos;s easy to set up <strong>HTML</strong> <span style="color:red">emails</span> too.'
//     html: htmlContent,
//     });

  $(".js-scheduleAppForms").hide(1000);
  // $(".js-areYouCurious").hide()
  var thankYouText = 'Thank&apos;s <span style="color:red">' + inputName + ' ' + inputFamilyName + '</span>. Someone from Ariana&apos;s team will contact you to arrange an appointment.'
  var thankYouText = '<br><br><div class="alert alert-info" role="alert">Thank&apos;s <strong>' + inputName + ' ' + inputFamilyName + '</strong>. Someone from Ariana&apos;s team will contact you to arrange an appointment.</div>'
  var thankYouText = '<br><hr style="height:1px;border:none;color:#333;background-color:#333;" width="50%" />Thank&apos;s <strong>' + inputName + ' ' + inputFamilyName + '</strong>. Someone from Ariana&apos;s team will contact you to arrange an appointment.'

  $(".js-scheduleAppThx").html(thankYouText);
  $(".js-scheduleAppThx").show(1000);
  },
  
  
  
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
  },
  
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
  },
  
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
  },
});