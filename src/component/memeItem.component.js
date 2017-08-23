import React,{Component} from 'react';
import {connect} from 'react-redux';
import {postMeme} from '../action/index';
import {bindActionCreators} from 'redux';
class MemeItemComponent extends Component{
    constructor(){
        super();
        this.state={
            hovered:false
        }
    }
    PostMeme(){
        this.props.postMeme({
          template_id:this.props.meme.id,
          text0:this.props.top,
          text1:this.props.bottom
        })
    }
    render(){
        return (
            <div className="meme-item" >
                <img src={this.props.meme.url}
                     alt={this.props.meme.name}
                     className={this.state.hovered?"meme-img-hover":"meme-img"}
                     onMouseEnter={()=>{this.setState({hovered:true})}}
                     onMouseLeave={()=>{this.setState({hovered:false})}}
                     onClick={()=>this.PostMeme()}
                />
                <p className={this.state.hovered?"meme-txt":"no-txt"}>{this.props.meme.name}</p>
            </div>
        )
    }
}
function mapStatetoProps(state){
    return {
        top:state.val.top,
        bottom:state.val.bottom
    }
}

function mapDispatchtoProps(dispatch)
{
    return bindActionCreators({
        postMeme
    },dispatch);
}
export default connect(mapStatetoProps,mapDispatchtoProps)(MemeItemComponent);