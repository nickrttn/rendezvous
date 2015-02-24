var activitiesData = [
  {
    title: 'Eating Peking Duck',
    time: '19:30',
    attendees: 0,
    maxAttendees: 6,
    moreInfo: 'We are going out to eat Peking Duck at the best restaurant in town.'
  },
  {
    title: 'Visit the Chinese Wall',
    time: '09:30',
    attendees: 3,
    maxAttendees: 12,
    moreInfo: "We are visiting the Chinese wall at a place tourists don't usually visit."
  },
  {
    title: 'Visit the Forbidden City',
    time: '11:30',
    attendees: 0,
    maxAttendees: 4,
    moreInfo: "We'd love to see the Forbidden City with a small group."
  }
];

Template.activitiesList.helpers({
  activities: activitiesData
});