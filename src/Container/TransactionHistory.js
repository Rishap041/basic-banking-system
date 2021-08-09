import React, { useEffect, useState } from 'react'
import db from '../Firebase'
import moment from 'moment';
// import firebase from 'firebase';
function TransactionHistory() {
    const [userObjects, setUserObjects] = useState({})
    useEffect(() => {
        db.collection('Transactions').get().then(
            snapshot => {
                const userdata = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    userdata.push(data)
                })
                setUserObjects(userdata)
            }
        )
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <table className="striped highlight centered">
                <thead>
                    <tr>
                        <th>Sender Email</th>
                        <th>Receiver Email</th>
                        <th>Amount(₹)</th>
                        <th>Time</th>

                    </tr>
                </thead>

                <tbody>
                {
                            Object.keys(userObjects).map(id=>{
                                return<tr key={id}>
                                    <td>{userObjects[id].senderEmail}</td>
                                    <td>{userObjects[id].receiverEmail}</td>
                                    <td>{userObjects[id].amount}₹</td>
                                    <td>{moment(userObjects[id].time.toDate()).format('dddd, MMMM Do YYYY')}</td>
                                </tr>
                            })
                        }
                </tbody>
            </table>
        </div>
    )
}

export default TransactionHistory