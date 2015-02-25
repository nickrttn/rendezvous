Activities = new Mongo.Collection('activities');

Activities.allow({
  update: function(userId, activity) {
    return ownsDocument(userId, activity);
  },
  remove: function(userId, activity) {
    return ownsDocument(userId, activity);
  }
});

Activities.deny({
  update: function(userId, activity, fieldNames) {
    return(_.without(fieldNames, 'title', 'date', 'time', 'maxAttendees', 'description').length > 0);
  }
});

validateActivity = function(activity) {
  var errors = {};

  if(!activity.title) {
    errors.title = "Please give your activity a name.";
  }

  if(!activity.date) {
    errors.date = "Please fill in a valid date.";
  }

  if(!activity.time) {
    errors.time = "Please fill in a valid time.";
  }

  if(!activity.maxAttendees) {
    errors.maxAttendees = "Please fill in a valid number of attendees.";
  }

  if(!activity.description) {
    errors.description = "Please give a description.";
  }

  return errors;
};

Meteor.methods({
  activityInsert: function(activityAttributes) {
    check(Meteor.userId(), String);
    check(activityAttributes, {
      title: String,
      date: String,
      time: String,
      signedUp: Array,
      maxAttendees: Number,
      description: String
    });

    var errors = validateActivity(activityAttributes);
    if (errors.title || errors.time || errors.date || errors.maxAttendees || errors.description) {
      throw new Meteor.Error('invalid-post', "You must fill out all fields correctly.");
    }

    var user = Meteor.user();
    var activity = _.extend(activityAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    var activityId = Activities.insert(activity);

    return {
      _id: activityId
    };
  }
});