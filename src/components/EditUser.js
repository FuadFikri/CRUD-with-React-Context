import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

import { GlobalContext } from '../contexts/GlobalState'

export const EditUser = (props) => {
    const { users, editUser } = useContext(GlobalContext);
    const history = useHistory();
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: ''
    });
    const currentUserId = props.match.params.id;


    const onChange = (e) => {
        setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = users.find(user => user.id === Number(userId));
        setSelectedUser(selectedUser)
    }, [currentUserId, users])

    const onSubmit = () => {
        editUser(selectedUser);

        history.push('/')
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup >
                <Label>Name</Label>
                <Input type="text" name="name" value={selectedUser.name} placeholder="input your name" onChange={onChange}></Input>
            </FormGroup>
            <Button type="submit">Save</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}