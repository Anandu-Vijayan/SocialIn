import * as AuthApi from '../api/AuthRequest.js'


export const logIn = (fromData) => async(dispatch) => {

    dispatch({type:"AUTH_START"})

    try {
        const {data} = await AuthApi.logIn(fromData)
        dispatch({type:"AUTH_SUCCESS",data:data})
    } catch (error) {
        console.log(error);
        dispatch({type:"AUTH_FAIL"})
        
    }
    
}

export const signUp = (fromData) => async(dispatch) => {

    dispatch({type:"AUTH_START"})

    try {
        const {data} = await AuthApi.signUp(fromData)
        dispatch({type:"AUTH_SUCCESS",data:data})
    } catch (error) {
        console.log(error);
        dispatch({type:"AUTH_FAIL"})
        
    }
    
}
export const logOut=()=>async(dispatch)=>{
    dispatch({type:"LOG_OUT"})
}
