Template.activitiesList.helpers({
  activities: function() {
    return Activities.find({}, {sort: {submitted: -1 }});
  }
});