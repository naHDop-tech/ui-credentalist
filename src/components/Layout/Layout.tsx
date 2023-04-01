import React, { PropsWithChildren } from 'react'
import { Box } from '@mui/material'

import { AppBar } from '@components/AppBar'

function Layout(props: PropsWithChildren<Record<string, never>>) {
  const { children } = props

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <AppBar />
      {children}
    </Box>
  )
}

export default Layout
