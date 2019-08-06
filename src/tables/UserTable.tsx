import React from 'react';
import {User} from '../user';
import PropTypes from 'prop-types';

const UserTable: React.FC<{
    users: User[];
    editRow: (user: User) => void;
    deleteUser: (id: number) => void;
}> = ({users, editRow, deleteUser}): JSX.Element => (
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
                            <button onClick={(): void => editRow(user)}
                                className="button muted-button">Edit</button>
                            <button onClick={(): void => deleteUser(user.id)}
                                className="button muted-button">Delete</button>
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
    users: PropTypes.array.isRequired,
    editRow: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
};

export default UserTable;
