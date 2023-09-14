import React from 'react';
import { Button } from '@mui/material';

import '../static/styles/page_styles/Index.css';

const Index = () => {
  return (
    <div className='Index'>
      <Button
        variant='outlined'
        color='primary'
      >
        Guess the Number
      </Button>
    </div>
  );
};

export default Index;