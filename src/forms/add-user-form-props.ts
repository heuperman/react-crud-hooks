import {User,} from '../user';

export interface AddUserFormProps {
    addUser: (user: User) => void;
}
