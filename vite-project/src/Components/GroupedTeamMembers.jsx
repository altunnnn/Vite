import { useState } from "react";
import "../assets/Css/App.css";

function GroupedTeamMembers({employees, selectedTeams, setTeam}) {
  const [groupedEmployees, setGroupData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    var teams = [];
    var isarray = Array.isArray(employees);
    if(isarray) var teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
    var teamA = { team: 'TeamA', members: teamAMembers, collapsed: selectedTeams === 'TeamA' ? false : true };
    teams.push(teamA);

    if(isarray) var teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
    var TeamB = { team: 'TeamB', members: teamBMembers, collapsed: selectedTeams === 'TeamB' ? false : true };
    teams.push(TeamB);

    if(isarray) var teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
    var TeamC = { team: 'TeamC', members: teamCMembers, collapsed: selectedTeams === 'TeamC' ? false : true };
    teams.push(TeamC);

    if(isarray) var teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
    var TeamD = { team: 'TeamD', members: teamDMembers, collapsed: selectedTeams === 'TeamD' ? false : true };
    teams.push(TeamD);

    return teams;
  }

  function handleTeamClick(event) {
    var transformedGroupData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id
      ? { ...groupedData, collapsed: !groupedData.collapsed }
      : groupedData);
    setGroupData(transformedGroupData);
    setTeam(event.currentTarget.id);
  }

  return (
    <main className="container">
      {
        groupedEmployees.map((item) => {
          return (
            <div key={item.team} className='card mt-2' style={{ cursor: "pointer" }}>
              <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                Team Name: {item.team}
              </h4>
              <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" : ""}>
                <hr />
                {
                  item.members.map(member => {
                    return (
                      <div className="mt-2" key={member.id}> {}
                        <h5 className="card-title mt-2">
                          <span className="text-dark">Full Name: {member.fullName} </span>
                        </h5>
                        <p>Designation: {member.designation}</p>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          );
        })
      }
    </main>
  )
}

export default GroupedTeamMembers;