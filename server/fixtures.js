if(Activities.find().count()===0) {
  Activities.insert({
    title: 'Eating Peking Duck',
    time: '19:30',
    signedUp: ['userId1', 'userId2', 'userId3'],
    maxAttendees: 6,
    moreInfo: 'We are going out to eat Peking Duck at the best restaurant in town.'
  });

  Activities.insert({
    title: 'Visit the Chinese Wall',
    time: '09:30',
    signedUp: ['userId1', 'userId2', 'userId3', 'userId4', 'userId5'],
    maxAttendees: 12,
    moreInfo: "We are visiting the Chinese wall at a place tourists don't usually visit."
  });

  Activities.insert({
    title: 'Visit the Forbidden City',
    time: '11:30',
    signedUp: ['userId1', 'userId2'],
    maxAttendees: 4,
    moreInfo: "We'd love to see the Forbidden City with a small group."
  });
}