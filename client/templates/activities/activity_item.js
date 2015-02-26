Template.activityItem.helpers({
  attendees: function() {
    return this.signedUp.length ? this.signedUp.length : 0;
  },
  attending: function() {
    var user = Meteor.user();
    var activity = Activities.findOne(this._id);
    if (userHasSignedUp(user, activity)) {
      return true;
    } else {
      return false;
    }
  },
  ownPost: function() {
    return this.userId === Meteor.userId();
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
  return activity.signedUp.indexOf(user) > -1;
};