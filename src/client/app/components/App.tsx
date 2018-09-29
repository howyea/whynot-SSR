/*
 * @Author: Micheal.Ye 
 * @Date: 2018-03-09 14:10:51 
 * @Last Modified by: Micheal.Ye
 * @Last Modified time: 2018-09-29 17:33:12
 */
import * as React from 'react'
import { Route } from 'react-router-dom';
import Blogs from "./blogs";
import { Header, MyIcons, Content } from "./styled";

interface ListKey {
    title: string,
    description: string,
    content: string
}
class App extends React.Component {
    render() {
        return (
            <div>
                <Header>
                    <MyIcons width="1" url={require('../images/logo.png')}></MyIcons>
                </Header>
                {/* <Content> */}
                    <Route exact path="/app" component={Blogs} />
                {/* </Content> */}
            </div>
        )
    }
}

export default App;