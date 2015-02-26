var userHasSignedUp = function(user, activity) {
  return activity.signedUp.indexOf(user) > -1;
};