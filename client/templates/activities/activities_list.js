Template.activitiesList.helpers({
  activities: function() {
    var session = Session.get('hostelId');
    return Activities.find({belongsToHostel: session.hostelId}, {sort: {submitted: -1 }}).fetch();
  }
});