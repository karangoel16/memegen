import {combineReducers} from 'redux';
import {RECEIVE_MEMES,VALUE,NEW_MEME} from "../action/index";


function memes(state=[],action)
{
    switch(action.type){
        case RECEIVE_MEMES:
            return action.memes;
        default:
            return state;
    }
}
function val(state={top:"",bottom:""},action)
{
    switch(action.type)
    {
        case VALUE:
            return action.value;
        default:
            return state;
    }
}

function new_meme(state=[],action)
{
    switch(action.type)
    {
        case NEW_MEME:
            if(action.meme.success){
                state=[...state,action.meme]
            }
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({memes,val,new_meme});

export default rootReducer;