import { IGateway, IProject, IReport } from '../@types/report'
import axios from './axios'

export const getProjects = async (): Promise<IProject[]> => {
  const res = await axios.get('/projects')
  return res.data.data
}

export const getGateways = async (): Promise<IGateway[]> => {
  const res = await axios.get('/gateways')
  return res.data.data
}

export const generateReport = async (
  projectId?: string,
  gatewayId?: string,
  from?: string,
  to?: string,
): Promise<IReport[]> => {
  console.log(projectId, 'projectId')
  console.log(gatewayId, 'gatewayId')
  console.log(from, 'from')
  console.log(to, 'to')
  const res = await axios.post('/report', {
    from: from ? from : '',
    to: to ? to : '',
    projectId: projectId ? projectId : '',
    gatewayId: gatewayId ? gatewayId : '',
  })
  return res.data.data
}
