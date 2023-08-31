import { Box, Typography, Stack, Button, Grid } from '@mui/material';
import './RightComponent.scss';
import dresstype1 from '../Assets/dress_type_1.png';
import dresstype2 from '../Assets/dress_type_2.png';

function RightComponenet(){
    return(
        <Grid  className="col-right">
        <Typography  className="dressname">JONATHAN SIMKHAI </Typography> 
        <Typography className="dressDis">Lurex Linen Viscose Jacket in Conchiglia</Typography>
        <Typography  className="price">$225 </Typography>
        <Typography className="dressColor"><span>COLOR</span> CONCHIGLIA</Typography>
        <Box className="dresstypeArea">
            <Button variant="outlined"><img src={dresstype1}/></Button>
            <Button variant="outlined"><img src={dresstype2}/></Button>
        </Box>
        <Grid className="sizeDetails">
            <Typography  className="selectedSize"><span>SIZE</span> L</Typography>
            <Typography className="txtGuide">SIZE GUIDE</Typography>
        </Grid>
        <Stack direction="row" spacing={2} className="dressSize">
            <Button variant="outlined">XS</Button>
            <Button variant="outlined">S</Button>
            <Button variant="outlined" disabled>M</Button>
            <Button variant="outlined selected">L</Button>
            <Button variant="outlined ">XXL</Button>
        </Stack>
        <Stack direction="row" spacing={2}>
            <Button variant="contained" className="addBagBtn">ADD TO BAG &nbsp; &rarr;</Button>
        </Stack>
        <Typography className="dressDis">Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</Typography>
        <Typography className="chatnowdis">Speak to a Personal Stylist CHAT NOW</Typography>     
        </Grid>
    );
}

export default RightComponenet