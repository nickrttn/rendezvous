Template.activityItem.helpers({
  attendees: function() {
    return this.signedUp.length ? this.signedUp.length : 0;
  },
  attending: function() {
    var user = Meteor.user();
    var activity = Activities.findOne(this._id);

    return userHasSignedUp(user, activity) ? true : false;
  },
  ownPost: function() {
    return this.userId === Meteor.userId();
  },
  date: function() {
    var date = Activities.findOne(this._id).dateTime.toDateString();
    return date;
  },
  time: function() {
    var time = Activities.findOne(this._id).dateTime.toTimeString().split(':');
    return time[0] + ':' + time[1];
  }
});

Template.activityItem.events({
  'click .more-info-link': function(e, template) {
    e.preventDefault();
    var moreInfo = template.$('.more-info');
    moreInfo.toggle(200);
  }
});

var userHasSignedUp = function(user, activity) {
  return activity.signedUp.indexOf(user._id) > -1;
};