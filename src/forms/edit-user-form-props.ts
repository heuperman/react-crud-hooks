import {User} from '../user';

export interface EditUserFormProps {
    currentUser: User;
    updateUser: (id: number, updatedUser: User) => void;
    setEditing: (state: boolean) => void;
}
