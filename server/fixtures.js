if(Activities.find().count()===0) {
  Activities.insert({
    title: 'Eating Peking Duck',
    date: '25/02/2015',
    time: '19:30',
    signedUp: ['userId1', 'userId2', 'userId3'],
    maxAttendees: 6,
    description: 'We are going out to eat Peking Duck at the best restaurant in town.'
  });

  Activities.insert({
    title: 'Visit the Chinese Wall',
    date: '28/02/2015',
    time: '09:30',
    signedUp: ['userId1', 'userId2', 'userId3', 'userId4', 'userId5'],
    maxAttendees: 12,
    description: "We are visiting the Chinese wall at a place tourists don't usually visit."
  });

  Activities.insert({
    title: 'Visit the Forbidden City',
    date: '03/03/2015',
    time: '11:30',
    signedUp: ['userId1', 'userId2'],
    maxAttendees: 4,
    description: "We'd love to see the Forbidden City with a small group."
  });
}