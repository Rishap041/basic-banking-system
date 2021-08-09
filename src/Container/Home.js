import React from 'react'
import bank from './image/bank.png'
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <div>
            <img style={{ width: "350px", height: "270px", marginTop: "25px"}} src="https://img.freepik.com/free-vector/people-using-mobile-bank-remittance-money_74855-6617.jpg?size=626&ext=jpg"></img>
            <h1 style={{ fontFamily: "inherit", fontSize: "25px" }}>
                Online Money Transfer Anywhere Anytime
            </h1>

            <div style={{marginTop:"50px",display:"flex",justifyContent:"space-evenly",marginRight:"22px"}} className="row">

                <div className="col s4"><NavLink className="waves-effect waves-light btn-small blue" exact to="/ViewConsumer">Accounts</NavLink></div>

                <div className="col s4"><NavLink className="waves-effect waves-light btn-small blue" exact to="/transfer">Transfer</NavLink></div>

                <div className="col s4"><NavLink className="waves-effect waves-light btn-small blue" exact to="/TransactionHistory">Transactions</NavLink></div>
            </div>


        </div>
    )
}

export default Home
