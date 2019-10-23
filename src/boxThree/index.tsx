import React from 'react'
import Typography from '@material-ui/core/Typography';

const Boxx = require('../assets/stopwatch.svg')

// dps criar um componente para reaproveitar a box

let pedidosPendente = 200 // aqui vai receber os valores via api 

const boxOne: React.FC = () => {
    return(
        <div style={{display: "flex",}}>
            <img style={{width: "90px", height: "90px", margin: "10px 11px"}} src={Boxx} />
            <Typography  style={{marginLeft: "15px", color: "#EEF11F", marginTop: "32px"}} variant="h2" gutterBottom>
                {pedidosPendente}
            </Typography>
        </div>

    )
}

export default boxOne