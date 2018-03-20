module.exports = {
  // Get list of teams as array from JSON
  getTeams: function(data) {
    console.log("Function called");
    let teamsList = [];
    for (i = 0; i < data.teams.length; i++) {
      teamsList.push(data.teams[i].region);
    }
    return teamsList;
  }
};
