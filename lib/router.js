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

var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
};

Router.onBeforeAction(requireLogin, {only: 'activitySubmit'});