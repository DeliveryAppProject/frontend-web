import React from 'react'

import Boxes from '../boxs'

import Typography from '@material-ui/core/Typography';

import './style.css'
import '../styles/display-grid.css'
import { width, borderRadius } from '@material-ui/system';

let semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado"]
let day = new Date()

const Data1: React.FC = () => {
    return(
        <div style={{margin: "60px 70px", fontWeight: "bolder"}} className="xd">
                {/* <h1> {semana[day.getDay()]} </h1> */}
            <Typography variant="h5" gutterBottom>
                {semana[day.getDay()]}
            </Typography>
            <hr id="hrDados"></hr>
            <Boxes />
        </div>
    )
    
}
export default Data1

// Dia da semana, consumir via data do PC / api