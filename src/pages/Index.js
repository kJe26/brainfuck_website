import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import '../static/styles/page_styles/Index.css';

const Index = () => {
  const [clicks, setClicks] = useState([]);
  const pattern = [1, 3, 6];
  const navigate = useNavigate();
  
  const handleClick = () => {
    const now = Date.now();
    setClicks((prevClicks) => [...prevClicks, now]);

    if (clicks.length === pattern[pattern.length - 1] - 1) {
      checkPattern([...clicks, now]);
      setClicks([]);
    }
  };

  const checkPattern = (allClicks) => {
    let validPattern = true;

    for (let i = 0; i < pattern.length; i++) {
      const interval = allClicks[pattern[i] - 1] - allClicks[pattern[i] - i - 2];
      if (i === 0 && interval < 1000) {
        validPattern = false;
        break;
      }
      if (interval < (i + 1) * 1000) {
        validPattern = false;
        break;
      }
    }

    if (validPattern) {
      navigate('/colored');
    } else {
      navigate('/');
    }
  };

  return (
    <div className='Index'>
      <Button
        variant='outlined'
        color='primary'
        onClick={handleClick}
      >
        enter site
      </Button>
    </div>
  );
};

export default Index;