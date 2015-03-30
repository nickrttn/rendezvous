// function onAuthSuccess(){
//   estimote.beacons.startRangingBeaconsInRegion({identifier: 'DEEB241A-4F25-46DA-96CD-FF01781D8A4B'}, onRangingSuccess, onFailure);
// }

var region = {'uuid': 'DEEB241A-4F25-46DA-96CD-FF01781D8A4B'};

function onRangingSuccess(result){
  var major = result.beacons[0].major;
  Session.set('hostelId', major);
  estimote.beacons.stopRangingBeaconsInRegion(region);
}

function onFailure(err){
  console.log(err);
}

Template.nfcId.events({
  'submit form': function(e) {
    e.preventDefault();

    if (Meteor.isCordova) {
      estimote.beacons.startRangingBeaconsInRegion(region, onRangingSuccess, onFailure);
    }
  }
});