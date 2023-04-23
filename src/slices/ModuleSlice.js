import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    activeModule: 'topic'
};

const moduleSlice = createSlice({
    name: 'module',
    initialState,
    reducers: {
        setActiveModule: (state, action) => {
            state.activeModule = action.payload;
        }
    }
});

export const {setActiveModule} = moduleSlice.actions;

export const selectActiveModule = state => state.module.activeModule;



export default moduleSlice.reducer;