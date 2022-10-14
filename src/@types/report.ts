export interface IProject {
  description: string
  gatewayIds: string[]
  image: string
  industry: string
  name: string
  projectId: string
  rule: string
  structure: string
  userIds: string[]
  website: string
}

export interface IGateway {
  apiKey: string
  description: string
  gatewayId: string
  name: string
  secondaryApiKey: string
  type: string
  userIds: string[]
}

export interface IReport {
  amount: number
  created: string
  gatewayId: string
  modified: string
  paymentId: string
  projectId: string
  userIds: string[]
}
