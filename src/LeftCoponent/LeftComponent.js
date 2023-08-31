import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import './LeftComponent.scss';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="tab-body">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function LeftComponent() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid  className="sticCl"  sx={{ width: '100%', display: { xs: 'none', md: 'flex' }}}> 
      <Box sx={{ width: '100%'}}>
        <Box >
          <Tabs value={value} onChange={handleChange} aria-label="tab" className='tab-head'>
            <Tab label="Details" {...a11yProps(0)} />
            <Tab label="Delivery" {...a11yProps(1)} />
            <Tab label="Fit" {...a11yProps(2)} />
            <Tab label="Share" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0} className="tab-body">
          The Forte Lurex Linen Viscose Jacket inMother of Peatl features lunar 
          lavishness by night and by day: a blazer in alinen blend shot with lurex for a 
          shimmering surface that shines like a star in the sky it has a stright fit with defined shoulders and shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1} className="tab-body">
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2} className="tab-body">
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3} className="tab-body">
          Item Four
        </CustomTabPanel>
        <p>See the <a>EDITOR'S NOTE</a></p>
        <p>Learn about the <a>DESIGNERS</a></p>
      </Box> 
    </Grid>
  );
}
