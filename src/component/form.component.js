import React , {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {add_val} from "../action/index";
import {Button ,Form,FormGroup,FormControl } from 'react-bootstrap';
class FormComponent extends Component{
    constructor(){
        super();
        this.state={
            top:"",
            bottom:""
        }
    }
    render(){
        return (<div>
            <Form inline>
                <FormGroup>
                    Top:
                    <FormControl placeholder={this.props.top}
                    onChange={event=>this.setState({top:event.target.value})}/>
                </FormGroup>
                <FormGroup>
                    Bottom:
                    <FormControl placeholder={this.props.bottom}
                    onChange={event=>this.setState({bottom:event.target.value})}/>
                </FormGroup>
                <Button onClick={()=>this.props.add_val(this.state)}>Select Text For Image</Button>
            </Form>
        </div>);
    }
}
function mapStatetoProps(state)
{
    console.log(state);
    return {
        top:state.val.top,
        bottom:state.val.bottom
    }
}
function mapDispatchtoProps(dispatch){
    return bindActionCreators({
        add_val
    },dispatch)
}
export default connect(mapStatetoProps,mapDispatchtoProps)(FormComponent);