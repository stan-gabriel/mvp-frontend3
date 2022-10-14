import React, { createContext, FC, useContext, useEffect, useState } from 'react'
import handleError from '../api/handleError'
import { IGateway, IProject, IReport } from '../@types/report'
import { generateReport, getGateways, getProjects } from '../api/reports'

interface Props {
  children: React.ReactNode
}

export const ReportsContext = createContext<any>(null)

export const ReportsContextProvider: FC<Props> = ({ children }) => {
  const [showLoader, setShowLoader] = React.useState<boolean>(false)
  const [projects, setProjects] = useState<IProject[]>([])
  const [gateways, setGateways] = useState<IGateway[]>([])
  const [reportData, setReportData] = useState<IReport[]>([])
  const [totalTitle, setTotalTitle] = useState<string>('All Projects | All Gatewasys')

  const handleGenerateReports = async (
    projectId?: string,
    gatewayId?: string,
    from?: string,
    to?: string,
  ) => {
    setShowLoader(true)
    setReportData(await generateReport(projectId, gatewayId, from, to))
    setShowLoader(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      setShowLoader(true)
      setProjects(await getProjects())
      setGateways(await getGateways())
    }
    fetchData().catch(handleError)
    setShowLoader(false)
  }, [])

  return (
    <ReportsContext.Provider
      value={{
        showLoader,
        setShowLoader,
        projects,
        gateways,
        reportData,
        handleGenerateReports,
        totalTitle,
        setTotalTitle,
      }}
    >
      {children}
    </ReportsContext.Provider>
  )
}

export const useReportsContext = () => {
  return useContext(ReportsContext)
}
