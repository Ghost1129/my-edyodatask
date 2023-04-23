import {configureStore} from '@reduxjs/toolkit';

import homeReducer from '../slices/HomeSlice';
import moduleReducer from '../slices/ModuleSlice';

export const store= configureStore({
    reducer: {
        home: homeReducer,
        module: moduleReducer
    }
});

