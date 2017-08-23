import React , {Component} from 'react';
import {connect} from 'react-redux';

class MemeItemShowComponent extends Component{
    render(){
        return (
            <div>
                {

                    this.props.memes.map((meme,index)=>
                    {
                        return (<div key={index} className="meme-item">
                            <img
                                src={meme.data.url}
                                 alt="meme"
                                className="meme-img-show"
                            />
                        </div>)
                    })
                }
            </div>
        )
    }
}

function mapStoretoProps(state){
    return {
        memes:state.new_meme
    }
}
export default connect(mapStoretoProps,null)(MemeItemShowComponent);