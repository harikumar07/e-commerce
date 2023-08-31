import { ImageList, ImageListItem } from '@mui/material';
import {Constants} from '../constants';
import {Grid, Stack, Button} from '@mui/material';
import Carouselcompo from '../Carosel/Carouselcompo';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './MiddleComponent.scss';
function MiddleComponent(){
    return(
      <>
        <Grid className="imageCol" sx={{ width: '100%', display: { xs: 'none', md: 'flex' }}}>
        <ImageList                 
              cols={1} ><FavoriteBorderOutlinedIcon className="favicon" />
          {Constants.map((item) => (
            <ImageListItem key={item.img}>
            <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
            />
            </ImageListItem>
        ))}
        </ImageList>
        </Grid>
        <Grid sx={{ width: '100%', display: { xs: 'flex', md: 'none' }}}>
          <Carouselcompo/>
        </Grid>            
        <Stack direction="row" spacing={2} className="diffDress">
          <Button variant="outlined" href="#outlined-buttons">Jonathan simkhai</Button>
          <Button variant="outlined" href="#outlined-buttons">Blazers</Button>
          <Button variant="outlined" href="#outlined-buttons">Viscose</Button>
        </Stack>   
      </>
    )
}

export default MiddleComponent;