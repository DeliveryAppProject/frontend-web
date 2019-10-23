import React from 'react'
import { Link } from 'react-router-dom'
import BtnNotify from '../buttonNotfify'
import './styles.css'

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
                <img style={{marginTop: "52px",  width: "48px", marginLeft: "52px", height: "48px", backgroundColor: "fff"}} src={Dashboard} />
            <Link to="/">
                <h1 id="ok" style={{marginLeft: "30px", marginTop: "62px", color: "#fff", cursor: "pointer"}}>
                    {Dash}
                </h1>
            </Link>
        </div>
        <div style={{display: "flex"}} className="options">
            <img style={{marginTop: "32px",  width: "60px", marginLeft: "52px", height: "60px", backgroundColor: "fff"}} src={Pedidos} />
            <Link to="/pedidos">
                <h1 id="ok" style={{ marginLeft: "20px", marginTop: "56px", color: "#fff", cursor: "pointer" }}>
                    {Pedir}
                </h1>
            </Link>
        </div>

        <div style={{display: "flex"}} className="options">
            <img style={{marginTop: "32px",  width: "60px", marginLeft: "52px", height: "60px", backgroundColor: "fff"}} src={Acompanhamento} />
            <Link to="/acompanharPedido">
                <h1 id="ok" style={{ marginLeft: "20px", marginTop: "56px", color: "#fff", cursor: "pointer" }}>
                    {AcompanharP}
                </h1>
            </Link>
        </div>
        <div className="btn" style={{ marginLeft: "22px", marginTop: "52px", color: "#000", fontWeight: "bolder"}}>
            <BtnNotify />
        </div>
      </div>
    );
  }

export default Comp