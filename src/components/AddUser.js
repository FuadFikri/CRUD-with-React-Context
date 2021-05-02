import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { v4 as uuid } from 'uuid'
import { GlobalContext } from '../contexts/GlobalState'

export const AddUser = () => {
    const { addUser } = useContext(GlobalContext);
    const history = useHistory();
    const [name, setName] = useState('');

    const onChange = (e) => {
        setName(e.target.value);
    }

    const onSubmit = () => {
        const newUser = {
            id: uuid(),
            name: name
        }
        addUser(newUser);
        history.push('/')
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" placeholder="input your name" onChange={onChange}></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}
