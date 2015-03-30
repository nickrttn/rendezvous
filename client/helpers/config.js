AccountsTemplates.removeField('email');
AccountsTemplates.removeField('password');
AccountsTemplates.addFields([
{
  _id: 'username',
  type: 'text',
  displayName: 'username',
  required: true,
  minLength: 5,
},
{
  _id: 'email',
  type: 'email',
  required: true,
  displayName: 'email',
  re: /.+@(.+){2,}\.(.+){2,}/,
  errStr: 'Invalid email'
},
{
  _id: 'password',
  type: 'password',
  displayName: 'password',
  required: true,
  minLength: 8
},
{
  _id: 'userType',
  type: 'radio',
  displayName: 'Are you a backpacker or a hostel owner?',
  required: true,
  select: [
    {
      text: "Backpacker",
      value: "backpacker"
    }, {
      text: "Hostel Owner",
      value: "hostel"
    }]
}]);

var clearSession = function(){
  Session.set('hostelId', '');
};

AccountsTemplates.configure({
  onLogoutHook: clearSession,
  texts: {
    title: {
      signIn: 'Welcome'
    }
  }
});