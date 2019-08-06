import {User} from '../user';

export interface UserTableProps {
    users: User[];
    editRow: (user: User) => void;
    deleteUser: (id: number) => void;
}
