import React, {Component} from 'react'
import { Grid_item5, H1, Redes } from '../styles/styled'
export default class Component5 extends Component{
    render() {

        return(
            <Grid_item5>
                <H1>Habilidades</H1>
                <Redes>
                    <div>
                        <label for="Html">Html </label>
                        <progress id="Html" max="100" value="70"> 70% </progress>
                    </div>
                    <div>
                        <label for="Css">Css </label>
                        <progress id="Css" max="100" value="70"> 70% </progress>
                    </div>
                    <div>
                        <label for="JavaScript">JavaScript </label>
                        <progress id="JavaScript" max="100" value="70"> 70% </progress>
                    </div>
                    <div>
                        <label for="React_js">React Js </label>
                        <progress id="React_js" max="100" value="70"> 70% </progress>
                    </div>
                </Redes>
            </Grid_item5>
        )
    }
}
