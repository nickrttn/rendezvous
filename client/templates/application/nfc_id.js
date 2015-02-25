Template.nfcId.events({
  'submit form': function(e) {
    e.preventDefault();

    var hostelId = {
      hostelId: $(e.target).find('[name=nfc-id]').val()
    };

    Session.set('hostelId', hostelId);

  }
});