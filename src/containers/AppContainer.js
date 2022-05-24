import React from 'react';
import Component1 from '../components/Component1';
import Component2 from '../components/Component2';
import Component3 from '../components/Component3';
import Component4 from '../components/Component4';
import Component5 from '../components/Component5';
import { Grid } from '../styles/styled';


const AppContainer = () =>{
    return(
        <Grid>
        <Component1/>
        <Component2/>
        <Component3/>
        <Component4/>
        <Component5/>
        </Grid>
    )
}

export default AppContainer;