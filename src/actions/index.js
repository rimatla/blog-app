import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=tonki87';

/*********************** Action Creators ********************/
//fetch all
export function fetchPosts() {
    //get data
    const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

//fetch one
export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}/${API_KEY}`);
    return {
        type: FETCH_POST,
        payload: request
    }
}

export function createPost(values, callback) {
    //post data
    const request = axios.post(`${ROOT_URL}/posts/${API_KEY}`, values)
    .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    }
}

export function deletePost(id, callback) {
    //delete data
    const request = axios.delete(`${ROOT_URL}/posts/${id}/${API_KEY}`)
        .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    }
}