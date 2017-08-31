const data = {
  categories: [
    {
      name: "China120R",
      colour: "blue",
      UserId: 1
    },
    {
      name: "CS350",
      colour: "green",
      UserId: 1
    },
    {
      name: "CS341",
      colour: "olive",
      UserId: 1
    },
    {
      name: "Stat231",
      colour: "orange",
      UserId: 1
    },
    {
      name: "MSCI311",
      colour: "red",
      UserId: 1
    }
  ],
  sessions: [
    {
      categories: ["China120R", "CS350"],
      description: "fun",
      startTime: 1492834595000,
      endTime: 1492902540000,
      UserId: 1
    },
    {
      categories: ["CS341"],
      description: "hard",
      startTime: 1492845395000,
      endTime: 1492852595000,
      UserId: 1
    },
    {
      categories: ["MSCI311", "Stat231"],
      description: "boring",
      startTime: 1492874195000,
      endTime: 1492876535000,
      UserId: 1
    }
  ]
}

module.exports = data;
