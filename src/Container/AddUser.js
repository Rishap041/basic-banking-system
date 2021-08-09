import React, { useState } from 'react'
import db from '../Firebase'
import { NavLink } from 'react-router-dom';
function AddUser() {

    const initialFieldValues = {
        balance: '',
        email: '',
        firstname: '',
        lastname: '',
        mobileNumber: ''
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
        db.collection('Users').add(obj).then(() => {

            alert('Added Succesfully');
        })
            .catch((error) => {
                alert(error.messagge);
            });

        setValues(initialFieldValues)
    }

    const handleTransfer = e => {
        if (values.balance=='' || values.firstname=='' || values.lastname=='' || values.email=='' || values.mobileNumber=='') {
            alert('please give all details');
            return
        }
        e.preventDefault();
        addOrEditTransfer(values)

    }

    return (
        <div style={{ marginLeft: "30%", marginRight: "30%", marginTop: "60px" }}>
            <h2>Add New User</h2>
            <div className="input-field col s6">
                <input type="text" placeholder="First Name" className="validate"
                    name="firstname"
                    value={values.firstname} onChange={handleInputChange} />
            </div>
            <div className="input-field col s6">
                <input type="text" placeholder="Last Name" className="validate" name="lastname"
                    value={values.lastname} onChange={handleInputChange} />
            </div>
            <div className="input-field col s6">
                <input type="text" placeholder="Email" className="validate" name="email"
                    value={values.email} onChange={handleInputChange} />
            </div>

            <div className="input-field col s6">
                <input type="text" placeholder="Mobile No." className="validate" name="mobileNumber"
                    value={values.mobileNumber} onChange={handleInputChange} />
            </div>

            <div className="input-field col s6">
                <input type="text" placeholder="Balance" className="validate" name="balance"
                    value={values.balance} onChange={handleInputChange} />
            </div>


            <div class="row">

                <div class="col s6"><button class="waves-effect waves-light btn-small blue" type="submit" name="action" onClick={handleTransfer}>Add User
                </button></div>

                <div class="col s6"><NavLink className="waves-effect waves-light btn-small blue" exact to="/ViewConsumer">View    Accounts</NavLink></div>

            </div>
        </div>
    )
}

export default AddUser
