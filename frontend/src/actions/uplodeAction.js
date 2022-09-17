import * as UploadApi from '../api/UploadRequest'


export const uplodeImage =(data)=>async(dispatch)=>{
    try {
        await UploadApi.uplodeImage(data)
        
    } catch (error) {
        console.log(error);
        
    }
}
export const uploadPost = (data)=> async(dispatch)=>{
    dispatch({type:"UPLOAD_START"})
    try {
        const newPost = await UploadApi.uploadPost(data)
        dispatch({type:"UPLOAD_SUCCESS",data:newPost.data})
    } catch (error) {
        console.log(error);
        dispatch({type:"UPLOAD_FAILED"})
        
    }
}

