import React, { useState } from 'react'
import { Collapse } from '@chakra-ui/react'

import DataTable from './Table'
import Container from '../../../components/Container'

type DataGroupProps = {
  title: string
  id: string
}

const DataGroup: React.FC<DataGroupProps> = ({ title, id }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleExpandReport = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Container
        variant='secondary'
        onClick={handleExpandReport}
        _notFirst={{ marginTop: '5px' }}
        cursor='pointer'
      >
        {title}
      </Container>
      <Collapse in={isOpen} animateOpacity>
        <DataTable groupId={id} />
      </Collapse>
    </>
  )
}

export default DataGroup
