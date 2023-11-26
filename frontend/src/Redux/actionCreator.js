import * as types from "./actionTypes";
import axios from "axios";


// for get all data from blogs
export const getBlogs=(params)=>(dispatch)=>{
    dispatch({type:types.GET_DATA_BLOGS_REQUEST});
    return axios.get(`http://localhost:8001/blogs`,params)
    .then((res)=>{
        // console.log(res.data.results);
        dispatch({type:types.GET_DATA_BLOGS_SUCCESS,payload:res.data});
    })
    .catch((err)=>{
        dispatch({type:types.GET_DATA_BLOGS_FAILURE,payload:err});
    })

}

// for add data =>post data from blogs
export const addBlogs=(params)=>(dispatch)=>{
    dispatch({type:types.ADD_DATA_BLOGS_REQUEST});
    return axios.post(`http://localhost:8001/blogs`,params)
    .then((res)=>{
        console.log(res);
        dispatch({type:types.ADD_DATA_BLOGS_SUCCESS,payload:res.data});
    })
    .catch((err)=>{
        dispatch({type:types.ADD_DATA_BLOGS_FAILURE,payload:err});
    })

}

// for edit data blogs

export const editBlogs=(_id,payload)=>(dispatch)=>{
    dispatch({type:types.UPDATE_DATA_BLOGS_REQUEST});
    return axios.put(`http://localhost:8001/blogs/${_id}`,payload)
    .then((res)=>{
        dispatch({type:types.UPDATE_DATA_BLOGS_SUCCESS,payload:res.data});
    })
    .catch((err)=>{
        dispatch({type:types.UPDATE_DATA_BLOGS_FAILURE,payload:err});
    })

}


// for delete the from blogs
export const deleteBlogs=(_id)=>(dispatch)=>{
    dispatch({type:types.DELETE_DATA_BLOGS_REQUEST});
    return axios.delete(`http://localhost:8001/blogs/${_id}`)
    .then((res)=>{
        dispatch({type:types.DELETE_DATA_BLOGS_SUCCESS,payload:res.data});
    })
    .catch((err)=>{
        dispatch({type:types.DELETE_DATA_BLOGS_FAILURE,payload:err});
    })

}