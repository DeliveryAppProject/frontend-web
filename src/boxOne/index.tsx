import React from 'react'
import Typography from '@material-ui/core/Typography';

const Boxx = require('../assets/box.svg')

// dps criar um componente para reaproveitar a box

let nPedidosDia = 100 // aqui vai receber os valores via api 

const boxOne: React.FC = () => {
    return(
        <div style={{display: "flex",}}>
            <img style={{width: "106px", height: "106px", margin: "10px 11px"}} src={Boxx} />
            <Typography  style={{marginLeft: "15px", color: "#EEF11F", marginTop: "32px"}} variant="h2" gutterBottom>
                {nPedidosDia}
            </Typography>
        </div>

    )
}

export default boxOne