Template.activityItem.helpers({
  attendees: function() {
    return this.signedUp.length ? this.signedUp.length : 0;
  },
  ownPost: function() {
    return this.userId === Meteor.userId();
  }
});

Template.activityItem.events({
  'click .more-info-link': function(e, template) {
    e.preventDefault();
    var moreInfo = $(template.find('.more-info'));
    moreInfo.toggle(200);
  }
});