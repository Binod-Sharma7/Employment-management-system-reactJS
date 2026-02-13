import React, { useEffect, useState } from 'react'
import { getLocalAdminData, getLocalEmployeesData } from '../Utils/LocalStorage';
export const AuthContext = React.createContext();
export default function AuthProvider({ children }) {
  const [userdata, setUserData] = useState({
    employees: [],
    admin: []
  });
  useEffect(() => {
    const employees = getLocalEmployeesData();
    const admin = getLocalAdminData();
    setUserData({ employees, admin })

  }, [])
  return (
    <div>
      <AuthContext.Provider value={userdata}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}
