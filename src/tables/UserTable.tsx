import React from 'react';
import {User} from '../user';
import PropTypes from 'prop-types';

const UserTable: React.FC<{users: User[]}> = ({users}): JSX.Element => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.length > 0 ? (
        users.map((user): JSX.Element => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

UserTable.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserTable;
