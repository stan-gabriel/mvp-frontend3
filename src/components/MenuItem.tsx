import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

import { IMenuItem } from '../config/navigation'
import Icon from '../assets/icons/Icon'

export const MenuItem: React.FC<IMenuItem> = ({ to, icon }) => {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  return (
    <Link to={to}>
      <Box paddingX={4} paddingY={3}>
        <Icon variant={icon} isActive={!!match} />
      </Box>
    </Link>
  )
}

export default MenuItem
