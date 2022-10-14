/* eslint-disable react/no-children-prop */
import React, { useState, FC, useEffect } from 'react'
import { Box, Input, InputGroup, InputRightElement, Button, Stack, Select } from '@chakra-ui/react'
import { FaCalendar, FaCaretDown } from 'react-icons/fa'
import { useReportsContext } from '../../../context/ReportsContext'
import { IGateway, IProject } from '../../../@types/report'

type SearchFormProps = {
  isLoading: boolean
}

const Form: FC<SearchFormProps> = ({ isLoading }) => {
  const [selectedProject, setSelectedProject] = useState<string>('')
  const [selectedGateway, setSelectedGateway] = useState<string>('')
  const [from, setFrom] = useState<string>('')
  const [to, setTo] = useState<string>('')
  const { projects, gateways, handleGenerateReports, setTotalTitle, reportData } =
    useReportsContext()

  const loadReport = () => {
    handleGenerateReports(selectedProject, selectedGateway, from, to)
  }

  useEffect(() => {
    const projectName = selectedProject
      ? projects.find((proj: IProject) => proj.projectId === selectedProject)?.name
      : 'All projects'
    const gatewayName = selectedGateway
      ? gateways.find((gate: IGateway) => gate.gatewayId === selectedGateway)?.name
      : 'All gateways'
    setTotalTitle(`${projectName} | ${gatewayName}`)
  }, [reportData])

  return (
    <Stack direction={{ base: 'column', lg: 'row' }}>
      <Box w='145px'>
        <Select
          placeholder='All projects'
          size='sm'
          onChange={(e) => setSelectedProject(e.target.value)}
          icon={<FaCaretDown />}
        >
          {projects?.map(({ projectId, name }: IProject) => (
            <option key={projectId} value={projectId}>
              {name}
            </option>
          ))}
        </Select>
      </Box>

      <Box w='145px'>
        <Select
          placeholder='All gateways'
          size='sm'
          onChange={(e) => setSelectedGateway(e.target.value)}
          icon={<FaCaretDown />}
        >
          {gateways?.map(({ gatewayId, name }: IGateway) => (
            <option key={gatewayId} value={gatewayId}>
              {name}
            </option>
          ))}
        </Select>
      </Box>

      <Box w='120px'>
        <InputGroup>
          <Input
            placeholder='From date'
            disabled={isLoading}
            onChange={(e) => setFrom(e.target.value)}
          />
          <InputRightElement children={<FaCalendar color='white' />} />
        </InputGroup>
      </Box>

      <Box w='120px'>
        <InputGroup>
          <Input
            placeholder='From date'
            variant='primary'
            disabled={isLoading}
            onChange={(e) => setTo(e.target.value)}
          />
          <InputRightElement children={<FaCalendar color='white' />} />
        </InputGroup>
      </Box>

      <Button variant='primary' size='sm' disabled={isLoading} onClick={loadReport}>
        Generate report
      </Button>
    </Stack>
  )
}

export default Form
