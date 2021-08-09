import React, { useEffect, useState } from 'react'
import db from '../Firebase'

function ViewConsumer() {
    const [userObjects, setUserObjects] = useState({})
    useEffect(() => {
        db.collection('Users').get().then(
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
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Balance(₹)</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        Object.keys(userObjects).map(id => {
                            return <tr key={id}>
                                <td>{userObjects[id].firstname}</td>
                                <td>{userObjects[id].lastname}</td>
                                <td>{userObjects[id].email}</td>
                                <td>{userObjects[id].mobileNumber}</td>
                                <td>₹{userObjects[id].balance}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ViewConsumer
