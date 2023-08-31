import React from 'react';
import { Grid, Typography } from '@mui/material';
import './EditiorComponent.scss';
function EditiorComponent(){
    return(
        <Grid className="feedbackSec">
            <Typography className="titSec">A note from the editor</Typography>
            <Typography className="titDis">The forte lurex linen viscose jacket in mother of pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky.</Typography>
            <Typography>&mdash; &nbsp;By MINNA SHIM, Fashion Editor</Typography>
        </Grid>
    )
}
export default EditiorComponent;