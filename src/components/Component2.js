import React, {Component} from 'react'
import { Grid_item2, H1, P, Subtitle } from '../styles/styled'
// import H1 from '../styles/styled'
// import styled from 'styled-components'

// Para aplicar estilos directo al componente
// const H1 = styled.h1`
// color: red`;
// const DivStyle = styled.div`
// border-radius:30px;
// background-color:green`;

export default class Component2 extends Component{
    render() {

        return(
            <Grid_item2>
                <H1>Mis Estudios</H1>
                <Subtitle>Universidad Cooperativa De Colombia</Subtitle>
                <P>Ingeniero De Sistemas</P>
            </Grid_item2>
        )
    }
}

