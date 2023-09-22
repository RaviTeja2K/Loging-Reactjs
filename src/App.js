import React from 'react'
import ListEmpComponent from './Components/ListEmpComponent'
import CreateEmpComponent from './Components/CreateEmpComponent'
import UpdateEmpComponent from './Components/UpdateEmpComponent'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'


const App = () => {
  return (
    
    <div>   
        <Router> 
          <div className="container">
          <HeaderComponent/>
          <div className="container">
           
            <Routes> 
              <Route path="/"  element={<ListEmpComponent />}></Route>
              <Route path="/employees"  element={<ListEmpComponent />}></Route>
              <Route path="/add-employee"  element={<CreateEmpComponent />}></Route>
              <Route path="/update-employee" element={<UpdateEmpComponent/>}></Route>
            </Routes>
            </div>
            <FooterComponent />
          </div>
        </Router>
    </div>
  )
}

export default App