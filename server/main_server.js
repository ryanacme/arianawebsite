import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.Mailgun.config({
      username: 'postmaster@sandbox16ca40978c4c4a7a94484fe7380f645b.mailgun.org',
      password: '6e87457e3b97d1d6336922c638dcdbd6'
    });
});

// ******************** METHODS ****************************
Meteor.methods({
    sendEmail: function (mailFields) {
        console.log("about to send email...");
        check([mailFields.to, mailFields.from, mailFields.subject, mailFields.text, mailFields.html], [String]);

        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();

        Meteor.Mailgun.send({
            to: mailFields.to,
            from: mailFields.from,
            subject: mailFields.subject,
            text: mailFields.text,
            html: mailFields.html
        });
        console.log("email sent!");
    }, //sendEmail
    
    addScheduleAppointment: function(inputObj){
        var id = ScheduleAppointment.insert(inputObj);
        // console.log("1- addScheduleAppointment method got an id: "+id);
    }, //addScheduleAppointment
    
    addFreebies: function(inputObj){
            // Freebies.insert(inputObj);
            Freebies.upsert({$and: [{email:inputObj.email}, {requestedInEnglish:inputObj.requestedInEnglish}]}, inputObj);
    }, //addFreebies
  });

//******************** adding RateLimiter *********************
const addFreebiesRule = {
  type: 'method',
  name: 'addFreebies',
  connectionId: function() {return true;},
};
DDPRateLimiter.addRule(addFreebiesRule, 1, 20000);


const sendEmailRule = {
  type: 'method',
  name: 'sendEmail',
  connectionId: function() {return true;},
};
DDPRateLimiter.addRule(sendEmailRule, 1, 20000);


const addScheduleAppointmentRule = {
  type: 'method',
  name: 'addScheduleAppointment',
  connectionId:function() {return true;},
};
DDPRateLimiter.addRule(addScheduleAppointmentRule, 1, 20000);


//******************** PUBLISH *********************
Meteor.publish("sounds", function(){
    return Sounds.find();
});