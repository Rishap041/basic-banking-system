import React, { useState } from 'react'
import db from '../Firebase'
import firebase from 'firebase';
import { NavLink } from 'react-router-dom';
function Transfer() {

    const initialFieldValues = {
        senderEmail: '',
        receiverEmail: '',
        amount: '',
        time: ''
    }

    const [values, setValues] = useState(initialFieldValues)

    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const addOrEditTransfer = obj => {
        values.time = firebase.firestore.FieldValue.serverTimestamp()
        db.collection('Transactions').add(obj).then(() => {

            alert('Transfered Succesfully');
        })
            .catch((error) => {
                alert(error.messagge);
            });

        setValues(initialFieldValues)
    }

    const handleTransfer = e => {
        if (values.amount == 0 || values.amount < 0) {
            alert('Invalid Amount');
            return
        }
        e.preventDefault();
        addOrEditTransfer(values)

    }

    return (
        <div style={{ marginLeft: "30%", marginRight: "30%", marginTop: "100px" }}>
            <h1>Transfer Money</h1>
            <div className="input-field col s6">
                <input type="text" placeholder="Sender Email" className="validate"
                    name="senderEmail"
                    value={values.senderEmail} onChange={handleInputChange} />
            </div>
            <div className="input-field col s6">
                <input type="text" placeholder="Receiver Email" className="validate" name="receiverEmail"
                    value={values.receiverEmail} onChange={handleInputChange} />
            </div>
            <div className="input-field col s6">
                <input type="text" placeholder="Amount" className="validate" name="amount"
                    value={values.amount} onChange={handleInputChange} />
            </div>


            <div class="row">

                <div class="col s6"><button class="waves-effect waves-light btn-small blue" type="submit" name="action" onClick={handleTransfer}>Transfer
                </button></div>

                <div class="col s6"><NavLink className="waves-effect waves-light btn-small blue" exact to="/TransactionHistory">View    Transactions</NavLink></div>

            </div>
        </div>
    )
}

export default Transfer
