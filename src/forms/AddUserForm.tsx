import React, {ChangeEvent, FormEvent, useState,} from 'react';
import PropTypes from 'prop-types';
import {User,} from '../user';


const AddUserForm: React.FC<{addUser: (user: User) => void}> = (
    {addUser,}): JSX.Element => {

    const initialFormState = {id: 0, name: '', username: '',};
    const [user, setUser,] = useState(initialFormState);

    const handleInputChange =
      (event: ChangeEvent<{name: string; value: string}>): void => {
          const {name, value,} = event.target;
          setUser({...user, [name]: value,});
      };

    return (
        <form onSubmit={(event: FormEvent): void => {
            event.preventDefault();
            if (!user.name || !user.username) return;
            addUser(user);
            setUser(initialFormState);
        }}>
            <label>Name</label>
            <input type="text" name="name" value={user.name}
                onChange={handleInputChange} />
            <label>Username</label>
            <input type="text" name="username" value={user.username}
                onChange={handleInputChange} />
            <button>Add new user</button>
        </form>
    );
};

AddUserForm.propTypes = {
    addUser: PropTypes.func.isRequired,
};

export default AddUserForm;
