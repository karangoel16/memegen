import {username,password} from "./secret"
export const RECEIVE_MEMES="RECEIVE_MEMES";
export const VALUE="VALUE";
export const NEW_MEME= "NEW_MEME";
function receivememes(json)
{
    const {memes}=json.data;
    return {
        type:RECEIVE_MEMES,
        memes
    }
}

export function add_val(dispatch){
    return {
        type:VALUE,
        value:dispatch
    }
}

function add_meme(meme){
    return {
        type:NEW_MEME,
        meme
    }
}

function fetchMemesJson(){
    return fetch('https://api.imgflip.com/get_memes')
        .then(response=>response.json())
}

function postMemesJson(params){
    params["username"]=username;
    params["password"]=password;
    const bodyParams = Object.keys(params).map(key=>{
        return encodeURIComponent(key)+'='+encodeURIComponent(params[key]);
    }).join('&');
    console.log('bodyparams',bodyParams);
    return fetch('https://cors-anywhere.herokuapp.com/api.imgflip.com/caption_image',{
        method:"POST",
        headers:{
            "Content-Type":'application/x-www-form-urlencoded'
        },
        body:bodyParams
    }).then(response=>response.json());
}

export function fetchMemes() {
    return function(dispatch)
    {
        return fetchMemesJson()
            .then(json=>dispatch(receivememes(json)))
    }
}

export function postMeme(new_meme_obj){
    return function(dispatch){
        return postMemesJson(new_meme_obj)
            .then(new_meme=>dispatch(add_meme(new_meme)));
    }
}