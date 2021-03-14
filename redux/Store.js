import { configureStore } from '@reduxjs/toolkit';
import ItemReducer from './ItemStore';

export default configureStore({

    reducer: {
        items: ItemReducer
    }
});