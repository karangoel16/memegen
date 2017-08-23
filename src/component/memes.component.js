import React,{Component} from 'react';
import {connect} from 'react-redux';
import MemeItemComponent from './memeItem.component';
class MemesComponent extends Component{
    constructor(){
        super();
        this.state={
            memeLimit:10
        }
    }
    render(){
        return(<div>
            {
                this.props.memes.slice(0,this.state.memeLimit).map((meme,index)=>{
                    return (<MemeItemComponent key={index} meme={meme}/>)
                })
            }
            <div onClick={()=>{
                this.setState({memeLimit:this.state.memeLimit+10})
            }}>
                Load 10 more...
            </div>
        </div>)
    }
}

function mapStatetoProps(state)
{
    return {
        memes:state.memes
    }
}
export default connect(mapStatetoProps,null)(MemesComponent);