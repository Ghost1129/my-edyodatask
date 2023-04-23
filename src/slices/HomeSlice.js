import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    activePage: 'home'
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setActivePage: (state, action) => {
            state.activePage = action.payload;
        }
    }
});

export const {setActivePage} = homeSlice.actions;

export const selectActivePage = state => state.home.activePage;



export default homeSlice.reducer;

