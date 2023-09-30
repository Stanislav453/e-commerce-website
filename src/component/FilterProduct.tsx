import React from 'react';
import { Button, Stack, Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export const FilterProduct = ({ categories, setSelectCategory }) => {
  return (
    <Stack direction='row' justifyContent='space-between' py={2}>
      <Typography
        variant='h4'
        sx={{ textTransform: 'uppercase', fontWeight: 600 }}
      >
        our product
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        {categories.map((item: string, key: number) => {
          return (
            <Button
              key={key}
              variant='outlined'
              color='inherit'
              onClick={() => setSelectCategory(item)}
            >
              {item}
            </Button>
          );
        })}
      </Box>
    </Stack>
  );
};
