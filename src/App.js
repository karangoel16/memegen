import React , {Component} from 'react';
import FormComponent from './component/form.component';
import MemesComponent from "./component/memes.component";

import MemesItemShowComponent from './component/memeItemShow.component';
import './style/style.css';
class App extends Component{
    render(){
        return(<div className="body">
                    <div>
                        <MemesComponent/>
                    </div>
                    <div>
                        <jumbotron>
                            <FormComponent/>
                        </jumbotron>
                    </div>
                    <div className="body">
                        <MemesItemShowComponent/>
                    </div>
        </div>)
    }
}
export default App;