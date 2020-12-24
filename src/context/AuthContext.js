import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};



export const { Provider, Context } = createDataContext(
    authReducer,
    {}
);