const data = {
  categories: {
    "China120R": {
      colour: "blue"
    },
    "CS350": {
      colour: "green"
    },
    "CS341": {
      colour: "olive"
    },
    "Stat231": {
      colour: "orange"
    },
    "MSCI311": {
      colour: "red"
    }
  },
  sessions: [
    {
      categories: ["China120R", "CS350"],
      description: "fun",
      startTime: 1492834595,
      endTime: 1492902540
    },
    {
      categories: ["CS341"],
      description: "hard",
      startTime: 1492845395,
      endTime: 1492852595
    },
    {
      categories: ["MSCI311", "Stat231"],
      description: "boring",
      startTime: 1492874195,
      endTime: 1492876535
    }
  ]
}

export default data;
