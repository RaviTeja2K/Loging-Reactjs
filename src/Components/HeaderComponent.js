import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className="navbar navbar-expand-ms navbar-dark bg-dark">
              <div><a href="http://localhost:3000/employees" className="navbar-brand">Employee Management App</a></div>  
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent