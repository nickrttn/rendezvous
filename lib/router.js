Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('activities'); }
});

Router.route('/', { name: 'activitiesList' } );

Router.route('/activities/:_id/edit', {
  name: 'activityEdit',
  data: function() { return Activities.findOne(this.params._id); }
});

Router.route('/submit', { name: 'activitySubmit' } );

var checkUserType = function() {
  var userType = Meteor.user().profile.userType;

  if(userType === 'backpacker') {
    return true;
  } else if (userType === 'hostel') {
    return false;
  }
};

var requireLogin = function() {
  if (!Meteor.user()) {
    this.render('login');
  } else if (checkUserType) {
    if (!Session.get('hostelId')) {
    this.render('nfcId');
    } else {
      this.next();
    }
  } else if (!checkUserType) {
      Session.set('hostelId', Meteor.user()._id);
      this.next();
  }
};

Router.onBeforeAction(requireLogin);
