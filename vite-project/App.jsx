import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './src/Components/Header';
import Employees from './src/Components/Employees';
import Footer from './src/Components/Footer';
import GroupedTeamMembers from './src/Components/GroupedTeamMembers';
import Nav from './src/Components/nav';
import NotFound from './src/Components/NotFound'
import data from './src/assets/data'

function App() {
  
  const [selectedTeams, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeams')) || "Team B");
  const [employees,setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || data);


      function handleTeamSelect(event){
        console.log(event.target.value);
        setTeam(event.target.value);
      }
      
      function handleEmployeeCardClick(employeeId) {
        const transformedEmployee = employees.map((employee) =>
          employee.id === parseInt(employeeId)
            ? employee.teamName === selectedTeams
              ? { ...employee, teamName: "" }
              : { ...employee, teamName: selectedTeams }
            : employee
        );
        setEmployees(transformedEmployee);
      }

      useEffect(() => {
        localStorage.setItem('employeeList',JSON.stringify(employees))
      },[employees])

      useEffect(() => {
        localStorage.setItem('selectedTeams',JSON.stringify(selectedTeams))
      },[selectedTeams])
      console.log(employees)
      console.log(selectedTeams)
      return (
        
        <Router>
          <Nav/>
      <Header 
        selectedTeams={selectedTeams}
        teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeams).length}
      />
      <Routes>
        
        <Route exact path = "/" element = { <Employees 
                                  employees={employees}
                                  selectedTeams={selectedTeams}
                                  handleEmployeeCardClick={handleEmployeeCardClick}
                                  handleTeamSelect={handleTeamSelect}
                                />}  />
        <Route exact path = "/grouped" element = {<GroupedTeamMembers employees = {employees}
                                                                      selectedTeams = {selectedTeams} setTeam = {setTeam} />} />
        <Route exact path='*' element={<NotFound />}></Route>
        
      </Routes>
      <Footer />
    </Router>
      );
}

export default App;
