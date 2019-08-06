import React, {ChangeEvent, useState, useEffect,} from 'react';
import PropTypes from 'prop-types';
import {EditUserFormProps,} from './edit-user-form-props';

const EditUserForm: React.FC<EditUserFormProps> = (props): JSX.Element => {
    const [user, setUser,] = useState(props.currentUser);
    const handleInputChange = (
        event: ChangeEvent<{name: string; value: string}>
    ): void => {
        const {name, value,} = event.target;
        setUser({...user, [name]: value,});
    };

    useEffect((): void => {
        setUser(props.currentUser);
    }, [props.currentUser,]);

    return (
        <form onSubmit={(event): void => {
            event.preventDefault();
            props.updateUser(user.id, user);
        }}>
            <label>Name</label>
            <input type="text" name="name"
                value={user.name}
                onChange={handleInputChange}/>
            <label>Username</label>
            <input type="text" name="username"
                value={user.username}
                onChange={handleInputChange}/>
            <button>Update user</button>
            <button onClick={(): void => props.setEditing(false)}
                className="button muted-button">
              Cancel
            </button>
        </form>
    );
};

EditUserForm.propTypes = {
    //TODO specify proptype
    currentUser: PropTypes.any.isRequired,
    updateUser: PropTypes.func.isRequired,
    setEditing: PropTypes.func.isRequired,
};

export default EditUserForm;
