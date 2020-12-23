import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({ phone, password }) => {
        try{
            const response = await trackerApi.post('/signup', { phone, password });
            console.log(response.data);
        }catch(err){
            console.log(err.message);
        }
    };
};
const signin = (dispatch) => {
    return ({ phone, password }) => {
        //try to signin
        //handle success
        //handle failure by showing error message
    }

};

const signout = (dispatch) => {
    return () => {
        //sigout somehow
    };
};


export const { Provider, Context } = createDataContext(
    authReducer,
    {},
    { isSignedIn: false }
);