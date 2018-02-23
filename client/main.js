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
  $("#scheduleAppForms").hide();
};

Template.home.events({
  "click #scheduleAppBtn":function(event){
    
    $("#scheduleAppForms").show(1500);
    // $("#scheduleAppForms").slideDown();
    $("#scheduleAppBtn").hide(1000);
  },
  
  "click #cancelAppBtn":function(event){
    $("#scheduleAppBtn").show(1500);
    $("#scheduleAppForms").hide(1000);
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