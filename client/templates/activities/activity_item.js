Template.activityItem.helpers({
  attendees: function() {
    return this.signedUp.length;
  }
})

Template.activityItem.events({
  'click .more-info-link': function(e, template) {
    e.preventDefault();
    var moreInfo = $(template.find('.more-info'));
    moreInfo.toggle(200);
  }
});