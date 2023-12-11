import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    isAuthenticated: false,
    email: '',
    password: ''
}

const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        handleAuthLogin: (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.isAuthenticated = action.payload.email && action.payload.password ? true : false;
            localStorage.setItem("user", action.payload.email);
            localStorage.setItem("password", action.payload.password);
        },
        logout: (state) => {
            localStorage.removeItem('username')
            localStorage.removeItem('password')
            state.isAuthenticated = false
        }
    }
})
export default authSlice.reducer
export const { logout, handleAuthLogin } = authSlice.actions;