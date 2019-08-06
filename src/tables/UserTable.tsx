import React from 'react';
import PropTypes from 'prop-types';
import {UserTableProps} from './user-table-props';

const UserTable: React.FC<UserTableProps> = (props): JSX.Element => (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length > 0 ? (
                props.users.map((user): JSX.Element => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <button onClick={(): void => props.editRow(user)}
                                className="button muted-button">Edit</button>
                            <button onClick={(): void => props.deleteUser(user.id)}
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
