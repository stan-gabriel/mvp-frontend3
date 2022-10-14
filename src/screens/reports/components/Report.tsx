import React from 'react'
import { Heading, Stack } from '@chakra-ui/react'

import DataGroup from './DataGroup'
import { useReportsContext } from '../../../context/ReportsContext'
import { IProject, IReport } from '../../../@types/report'
import Container from '../../../components/Container'

const Report: React.FC = () => {
  const { projects, totalTitle, reportData } = useReportsContext()
  const showChart = false

  const projectToShow = projects.filter((proj: IProject) =>
    reportData.some((rep: IReport) => rep.projectId == proj.projectId),
  )

  // const projectToShow = {}

  return (
    <Stack direction={showChart ? 'row' : 'column'} w='100%'>
      <Container w='100%'>
        <Heading size='sm' mb='2rem'>
          {totalTitle}
        </Heading>
        {projectToShow.map(({ projectId, name }: IProject) => (
          <DataGroup key={projectId} title={name} id={projectId} />
        ))}
      </Container>
      {/* <Box w='100%'>*/}
      {/*  {showChart && <Chart />}*/}
      {/*  <Container>*/}
      {/*    <Heading size='sm'>{totalTitle}</Heading>*/}
      {/*  </Container>*/}
      {/* </Box>*/}
    </Stack>
  )
}

Report.defaultProps = {
  data: [],
}

export default Report
