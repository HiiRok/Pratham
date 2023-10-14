import React from 'react';
import { Box, Grid, styled, Typography, Button } from '@mui/material';
import Title from './Title';
import imgDetail from '../assets/firstcourse.jpg';
import backgrnd from '../assets/footer.jpg';

const CustomGridItem = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const CustomTypography = styled(Typography)({
  fontSize: '1.1rem',
  textAlign: 'start',
  lineHeight: '1.5',
  color: '#515151',
  marginTop: '1.5rem',
});

const GetStarted = () => {
  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 4, md: 0 }}
      sx={{
        py: 10,
        px: 2,
        backgroundImage: `url(${backgrnd})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <CustomGridItem item xs={12} sm={8} md={6} component="section">
        <Box component="article" sx={{ px: 4 }}>
          <Title text="Upcoming Discourse :"  textAlign="start" />
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Button variant="contained" color="primary" style={{ padding: '10px 10px', marginTop:"20px",marginLeft: '110px', marginRight: '300px' }}>
                Register Now
            </Button>
            <Button variant="contained" color="secondary" style={{ padding: '10px 10px', marginLeft: '110px', marginRight: '300px' }}>
                Attend Class
            </Button>
            </div>
        </Box>
      </CustomGridItem>

      <Grid item xs={12} sm={4} md={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <img src={imgDetail} alt="" style={{ width: '100%' , maxWidth: '100%', marginRight: '40px'  }} />
      </Grid>
    </Grid>
  );
};

export default GetStarted;
