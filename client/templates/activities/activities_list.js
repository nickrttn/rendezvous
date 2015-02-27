Template.activitiesList.helpers({
  activities: function() {
    var session = Session.get('hostelId');
    var date = new Date();

    return Activities.find({belongsToHostel: session.hostelId, dateTime: { $not: { $lt: date }}}, {sort: {dateTime: -1}}).fetch();
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

    if (!userHasSignedUp(user._id, activity)) {
      if (activity.maxAttendees > activity.signedUp.length) {
        Activities.update({_id: this._id}, {$push: {signedUp: user._id}});
        } else {
          throwError('The maximum number of attendees has been reached.');
        }
    } else if (userHasSignedUp(user._id, activity)) {
      var signedUp = activity.signedUp.filter(function(id) {
        return id != user._id;
      });
      Activities.update({_id: this._id}, {$set: {signedUp: signedUp}});
    }
  }
});

var userHasSignedUp = function(userId, activity) {
  return activity.signedUp.indexOf(userId) > -1;
};