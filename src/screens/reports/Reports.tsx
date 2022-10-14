import React from 'react'
import PageTitle from '../../components/PageTitle'
import { Flex } from '@chakra-ui/react'
import EmptyPage from '../../components/EmptyPage'
import Form from './components/Form'
import Report from './components/Report'
import { useReportsContext } from '../../context/ReportsContext'

const Reports = () => {
  const { reportData, showLoader } = useReportsContext()

  return (
    <Flex flexDirection='column' w='100%'>
      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent='space-between'
        w='100%'
        mb='1.75rem'
      >
        <PageTitle title='Reports' subtitle='Easily generate a report of your transactions' />
        <Form isLoading={false} />
      </Flex>

      {reportData.length == 0 && !showLoader && (
        <EmptyPage
          title='No reports'
          subtitle='Currently you have no data for the reports to be generated.
Once you start generating traffic through the Balance application
the reports will be shown.'
        />
      )}

      {reportData.length > 0 && <Report />}
    </Flex>
  )
}

export default Reports
