use bucketList;
db.dropDatabase();

db.dreams.insertMany([
  {
    name: "Skydiving",
    description: "Over Sydney Opera House, live Metallica gig in background",
    achievedBy: "2019-08-22"
  },

  {
    name: "Bungee Jumping",
    description: "Off Dam from Goldeneye, followed by saving the world from Sean Bean",
    achievedBy: "2019-04-19"
  },
  {
    name: "Get coding job",
    description: "Just get a coding job.",
    achievedBy: "2019-04-01"
  }
]);
