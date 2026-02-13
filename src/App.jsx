import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalAdminData, getLocalEmployeesData, employees, setLocalAdminData, setLocalEmployeesData } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'
export default function App() {
  const [loggedUser, setLoggedUser] = useState(null)
  const [user, setUser] = useState(null)
  const data = useContext(AuthContext)
  const [tasks, setTasks] = useState([])



  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedUser"))
    const storedRole = localStorage.getItem("userRole")
    const employees = getLocalEmployeesData();

    if (storedUser && storedRole) {
      setLoggedUser(storedUser)
      setUser(storedRole)
    }
    if (employees) {
      const userTasks = employees.find(emp => emp.email === storedUser.email)?.tasks || []
      setTasks(userTasks)
    }

  }, [])

  useEffect(() => {
    const seedData = () => {
      const savedEmployees = getLocalEmployeesData();
      const admin = getLocalAdminData();

      if (!savedEmployees || !savedEmployees.length) {
        setLocalEmployeesData(employees)
      }
      if (!admin) {
        setLocalAdminData(admin)
      }
    }
    seedData();
  }, [])

  const loginHandler = (email, password) => {
    const employee = data.employees.find(
      (emp) => emp.email.toLowerCase() === email.toLowerCase() && emp.password === password
    )
    const adminUser = data.admin.find(
      (adm) => adm.email.toLowerCase() === email.toLowerCase() && adm.password === password
    )

    if (employee) {
      setUser("employee")
      setLoggedUser(employee)
      localStorage.setItem("loggedUser", JSON.stringify(employee))
      localStorage.setItem("userRole", "employee")
    } else if (adminUser) {
      setUser("admin")
      setLoggedUser(adminUser)
      localStorage.setItem("loggedUser", JSON.stringify(adminUser))
      localStorage.setItem("userRole", "admin")
    } else {
      alert("Invalid email or password ❌")
    }



  };
  const logout = () => {
    setUser(null)
    setLoggedUser(null)
    localStorage.removeItem("loggedUser")
    localStorage.removeItem("userRole")
  }

  return (
    <div>
      {!user ? (
        <Login loginHandler={loginHandler} />
      ) : user === "employee" ? (
        <EmployeeDashboard logout={logout} user={{ ...loggedUser, tasks }} />
      ) : (
        <AdminDashboard data={data} logout={logout} user={loggedUser} />
      )}

    </div>

  )
}
