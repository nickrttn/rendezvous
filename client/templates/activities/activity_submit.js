Template.activitySubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var activity = {
      title: $(e.target).find('[name=title]').val(),
      date: $(e.target).find('[name=date]').val(),
      time: $(e.target).find('[name=time]').val(),
      maxAttendees: parseInt($(e.target).find('[name=max-attendees]').val()),
      description: $(e.target).find('[name=description]').val(),
      signedUp: [Meteor.userId()],
      belongsToHostel: Session.get('hostelId').hostelId,
    };

    var errors = validateActivity(activity);
    if (errors.title || errors.date || errors.time || errors.maxAttendees || errors.description) {
      return Session.set('activitySubmitErrors', errors);
    }

    Meteor.call('activityInsert', activity, function(error, result) {
      if (error)
        return throwError(error.reason);

      Router.go('activitiesList');
    });
  }
});

Template.activitySubmit.created = function() {
  Session.set('activitySubmitErrors', {});
};

Template.activitySubmit.helpers({
  errorMessage: function(field) {
    return Session.get('activitySubmitErrors')[field];
  },
  errorClass: function(field) {
    return !!Session.get('activitySubmitErrors')[field] ? 'has-error' : '';
  }
});