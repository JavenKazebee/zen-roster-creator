const proto = require('./prototypes.js');
module.exports = {
  // Get list of teams as array from JSON
  getTeams: function(data) {
    console.log("Function called");
    let teamsList = [];
    for (i = 0; i < data.teams.length; i++) {
      td = data.teams[i];
      teamsList.push(new proto.Team(td.tid, td.region, td.country, td.abbrev));
    }
    return teamsList;
  }
};
