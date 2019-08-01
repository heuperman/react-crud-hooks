import React, {ChangeEvent, useState} from 'react';
import {User} from '../user';
import PropTypes from 'prop-types';

const EditUserForm: React.FC<{
  currentUser: User;
  updateUser: (id: number, updatedUser: User) => void;
  setEditing: (state: boolean) => void;
}> = ({currentUser, updateUser, setEditing}): JSX.Element => {
  const [user, setUser] = useState(currentUser);
  const handleInputChange = (
    event: ChangeEvent<{name: string; value: string}>
  ): void => {
    const {name, value} = event.target;
    setUser({...user, [name]: value});
  };

  return (
    <form
      onSubmit={(event): void => {
        event.preventDefault();
        updateUser(user.id, user);
      }}
    >
      <label>Name</label>
      <input type="text" name="name"
        value={user.name}
        onChange={handleInputChange}/>
      <label>Username</label>
      <input type="text" name="username"
        value={user.username}
        onChange={handleInputChange}/>
      <button>Update user</button>
      <button onClick={(): void => setEditing(false)}
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
  setEditing: PropTypes.func.isRequired
};

export default EditUserForm;
