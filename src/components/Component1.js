import React, {Component} from 'react'
import { Grid_item, Img_avatar, H2, Title_nombre, P, A, Redes } from '../styles/styled'
export default class Component1 extends Component{
    render() {

        return(
            <Grid_item>
                <div>
                    <Img_avatar src='https://i.ibb.co/932TXZk/Whats-App-Image-2022-05-23-at-9-40-06-PM.jpg'/>
                </div>
                <H2>Camilo Orozco Hernandez</H2>
                <Title_nombre>Ingeniero De Sistemas</Title_nombre>
                <P>Frontend Developer</P>
                <P>Monteria - Colombia</P>
                <Redes>
                    <A href='#'><img src='https://i.ibb.co/nrXzBSq/facebook.png' width="30" height="30"/></A>
                    <A href='#'><img src='https://i.ibb.co/0DQsTK4/gorjeo.png' width="30" height="30"/></A>
                    <A href='#'><img src='https://i.ibb.co/DtmNJsh/linkedin-2.png' width="30" height="30"/></A>
                    <A href='#'><img src='https://i.ibb.co/YP6RZFQ/github.png' width="30" height="30"/></A>
                </Redes>
            </Grid_item>
        )
    }
}

