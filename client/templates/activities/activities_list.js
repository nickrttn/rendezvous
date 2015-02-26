Template.activitiesList.helpers({
  activities: function() {
    var session = Session.get('hostelId');
    return Activities.find({belongsToHostel: session.hostelId}, {sort: {submitted: -1 }}).fetch();
  },
  userType: function() {
    var userType = Meteor.user().profile.userType;
    return userType;
  }
});

Template.activitiesList.events({
  'click .join': function(e) {
    e.preventDefault();
    var user = Meteor.user();
    var activity = Activities.findOne(this._id);

    console.log(userHasSignedUp(user, activity));

    if (!userHasSignedUp(user._id, activity)) {
      console.log('test');
      Activities.update({_id: this._id}, {$push: {signedUp: user._id}});
    } else {
      throwError("You already signed up.");
    }

  }
});

var userHasSignedUp = function(userId, activity) {
  return activity.signedUp.indexOf(userId) > -1;
};