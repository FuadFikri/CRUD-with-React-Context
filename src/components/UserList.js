
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'
import { GlobalContext } from '../contexts/GlobalState'

export const UserList = () => {
    const { users, removeUser } = useContext(GlobalContext);

    return (
        <div>
            <ListGroup className="mt-3">
                {users &&  users.map(user => 

                    <ListGroupItem className="d-flex">
                        <strong>{user.name}</strong>
                        <div className="ml-auto">
                            <Link className="btn btn-warning mr-1" to={`/edit/${user.id}`}>edit</Link>
                            <Button onClick={() => removeUser(user.id)} color="danger" >Delete</Button>
                        </div>
                    </ListGroupItem>

                )}
            </ListGroup>
        </div>
    )
}
