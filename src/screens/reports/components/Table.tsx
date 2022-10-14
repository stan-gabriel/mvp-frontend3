import React from 'react'
import { Table, Tbody, Tr, Td } from '@chakra-ui/react'

import { IGateway, IReport } from '../../../@types/report'
import { useReportsContext } from '../../../context/ReportsContext'
import { formatCurrency } from '../../../utils/reports'

type TableProps = {
  groupId?: string | undefined
}

const shortId = (id: string) => id.slice(-4)

const DataTable: React.FC<TableProps> = ({ groupId }) => {
  const showGateway = true
  const { reportData, gateways } = useReportsContext()

  return (
    <Table>
      <Tbody>
        <Tr>
          <Td>Date</Td>
          {showGateway && <Td>Gateway ID</Td>}
          <Td>Transaction ID</Td>
          <Td isNumeric>Amount</Td>
        </Tr>
        {reportData.map(({ created, paymentId, amount, gatewayId }: IReport) => (
          <Tr key={paymentId}>
            <Td>{created}</Td>
            {showGateway && (
              <Td>{gateways.find((ele: IGateway) => ele.gatewayId == gatewayId)?.name}</Td>
            )}
            <Td>{shortId(paymentId)}</Td>
            <Td>{formatCurrency(amount)}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

DataTable.defaultProps = {
  groupId: undefined,
}

export default DataTable
