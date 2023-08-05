import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../model/User';
import produce from 'immer';

interface UserState extends User {
}

const initialState: UserState = {
    firstName: "",
    lastName: "",
    email: "",
    oAuthToken: ""
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            return produce(state, draftState => {
                Object.assign(draftState, action.payload);
            });
        },
        resetUser(state) {
            state = initialState;
        }
    }
});

export const {setUser, resetUser} = userSlice.actions;
export default userSlice.reducer;

