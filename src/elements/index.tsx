import React from 'react'
import BtnNotify from '../buttonNotfify'


const logo = require('../assets/logo.svg')
const Dashboard = require('../assets/dashboard.svg')
const Pedidos = require('../assets/pedidos.svg')
const Acompanhamento = require('../assets/Acompanhar.svg')

const sLogo = {
    height: "100px;",
    width: "100px",
    marginTop: "48px"
}
const name = 'Name Delivery'
const Dash = 'Dashboard'
const Pedir = 'Pedidos'
const AcompanharP = 'Acompanhar Pedidos'

// console.log(aPedidos)

const Comp: React.FC = () => {
    return (
      <div className="Main" style={{textAlign: "center"}} >
        <div className="up" >
            <img style={sLogo} src={logo} />
            <h1 style={{fontWeight: "bold", marginTop: "8px", color: "#fff"}}>
                {name}
            </h1>
            <hr style={{
                borderColor : '#707070',
                marginTop: "35px"
            }}  
            />
        </div>
        <div style={{display: "flex"}} className="options">
            <img style={{marginTop: "52px",  width: "38px", marginLeft: "72px", height: "38px", backgroundColor: "fff"}} src={Dashboard} />
            <h1 style={{ marginLeft: "40px", marginTop: "62px", color: "#fff" }}>
                {Dash}
            </h1>
        </div>
        <div style={{display: "flex"}} className="options">
            <img style={{marginTop: "32px",  width: "60px", marginLeft: "72px", height: "60px", backgroundColor: "fff"}} src={Pedidos} />
            <h1 style={{ marginLeft: "20px", marginTop: "56px", color: "#fff" }}>
                {Pedir}
            </h1>
        </div>

        <div style={{display: "flex"}} className="options">
            <img style={{marginTop: "32px",  width: "60px", marginLeft: "72px", height: "60px", backgroundColor: "fff"}} src={Acompanhamento} />
            <h1 style={{ fontSize:"13px", marginLeft: "20px", marginTop: "56px", color: "#fff" }}>
                {AcompanharP}
            </h1>
        </div>
        <div className="btn" style={{ marginLeft: "22px", marginTop: "52px", color: "#000"}}>
            <BtnNotify />
        </div>
      </div>
    );
  }

export default Comp