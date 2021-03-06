Activities = new Mongo.Collection('activities');

Activities.allow({
  update: function() {
    return true;
  },
  remove: function(userId, activity) {
    return ownsDocument(userId, activity);
  }
});

validateActivity = function(activity) {
  var errors = {};

  if(!activity.title) {
    errors.title = "Please give your activity a name.";
  }

  if(!activity.dateTime) {
    errors.dateTime = "Please fill in a valid date.";
  }

  if(!activity.dateTime) {
    errors.dateTime = "Please fill in a valid time.";
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
      dateTime: Date,
      signedUp: Array,
      maxAttendees: Number,
      description: String,
      belongsToHostel: Number
    });

    var errors = validateActivity(activityAttributes);
    if (errors.title || errors.dateTime || errors.maxAttendees || errors.description) {
      throw new Meteor.Error('invalid-post', "You must fill out all fields correctly.");
    }

    var user = Meteor.user();

    var activity = _.extend(activityAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date(),
    });

    var activityId = Activities.insert(activity);

    return {
      _id: activityId
    };
  }
});