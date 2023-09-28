import React from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export const Banner= () => {
  return (
    <Stack direction={{ md: 'row', sm: 'column' }} gap={1}>
      <Box flex={1}>
        <Box height={'650px'} sx={{ backgroundColor: '#000' }}></Box>
      </Box>
      <Grid flex={1} container spacing={1}>
        <Grid item md={6} xs={12}>
          <Box sx={{ height: '100%', backgroundColor: '#333232' }}>1</Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box sx={{ height: '100%', backgroundColor: '#333232' }}>1</Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box sx={{ height: '100%', backgroundColor: '#333232' }}>1</Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box sx={{ height: '100%', backgroundColor: '#333232' }}>1</Box>
        </Grid>
      </Grid>
    </Stack>
  );
};
