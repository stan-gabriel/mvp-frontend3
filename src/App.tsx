import React from 'react'
import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './screens/Dashboard'
import Monitor from './screens/Monitor'
import Reports from './screens/reports/Reports'
import Apps from './screens/Apps'
import SignOut from './screens/SignOut'
import { ReportsContextProvider } from './context/ReportsContext'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/monitor' element={<Monitor />} />
        <Route
          path='/reports'
          element={
            <ReportsContextProvider>
              <Reports />
            </ReportsContextProvider>
          }
        />
        <Route path='/apps' element={<Apps />} />
        <Route path='/sign-out' element={<SignOut />} />
      </Route>
    </Routes>
  )
}

export default App
