import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from './app/components/App';
import Ad from "./app/components/ad";
// import { AppContainer } from "./styled";
export interface AppProps {
    
}
 
export interface AppState {
    
}
 
class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        // this.state = { :  };
    }
    render() { 
        return ( 
                <Switch>
                    <Route path="/app" component={Main} />
                    <Route exact path="/" component={Ad}/>
                </Switch>
         );
    }
}
 
/* export default App;
const App = (any):any => {
    return <AppContainer>
    asfsafasg
    </AppContainer>
}; */

export default App;
