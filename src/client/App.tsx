import * as React from 'react';
import { AppContainer } from "./styled";
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
            
            <AppContainer>
                <div>沙发</div>
            </AppContainer>
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
