import './App.scss';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import LeftComponent from './LeftCoponent/LeftComponent';
import RightComponenet from './RightComponent/RightComponent';
import MiddleComponent from './MiddleComponent/MiddleComponent';
import UserHeader from './UserHeader/userHeader';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import Container from '@mui/material/Container';
import EditiorComponent from './EditorComponent/EditiorComponent';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {    
  return (
    <ThemeProvider theme={theme}>      
      <UserHeader/>        
      <Container maxWidth="xl" className="mainContainer">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <LeftComponent/>
          </Grid>
          <Grid item xs={12} md={6}>
            <MiddleComponent/>
          </Grid>
          <Grid item xs={12} md={3}>
            <RightComponenet/>
          </Grid>        
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>            
          </Grid>
          <Grid item xs={12} md={6}>
            <EditiorComponent/>
          </Grid>
          <Grid item xs={12} md={3}>           
          </Grid>        
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
