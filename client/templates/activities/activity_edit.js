Template.activityEdit.created = function() {
  Session.set('activityEditErrors', {});
};

Template.activityEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentActivityId = this._id;
    var date = $(e.target).find('[name=date]').val().split('-');
    var time = $(e.target).find('[name=time]').val().split(':');
    var dateTime = new Date(date[0], date[1] - 1, date[2], time[0], time[1]);

    var activityProperties = {
      title: $(e.target).find('[name=title]').val(),
      dateTime: dateTime,
      maxAttendees: parseInt($(e.target).find('[name=max-attendees]').val()),
      description: $(e.target).find('[name=description]').val()
    };

    Activities.update(currentActivityId, {$set: activityProperties}, function(error) {
      if (error) {
        throwError(error.reason);
      } else {
        Router.go('activitiesList');
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this activity?")) {
      var currentActivityId = this._id;
      Activities.remove(currentActivityId);
      Router.go('activitiesList');
    }
  }
});