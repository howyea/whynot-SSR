/*
 * @Author: Micheal.Ye 
 * @Date: 2018-09-06 09:41:39 
 * @Last Modified by: Micheal.Ye
 * @Last Modified time: 2018-09-06 11:57:23
 */
import * as React from 'react';
import { MyIcons } from "../styled";
import { AdStyled } from "./styled";
interface AdProps {
    history: any
}
class Ad extends React.Component<AdProps, {}> {
    state = {
        count: 3
    }
    count() {
        let _second = 3;
        const _count = () => {
            if (_second > 0) {
                setTimeout(() => {
                    this.setState({
                        count: --_second
                    });
                    _count();
                }, 1000);
            } else {
                this.props.history.push('/app');
            }
        }
        _count();
    }
    componentDidMount() {
        this.count();
    }
    render() {
        return <AdStyled>
            <div className="skip" onClick={() => {
                this.props.history.push('/app');
            }}><span>{ this.state.count }</span><span>跳过</span></div>
            <MyIcons className="logo" width="4" url={require('../../images/logo.png')} bgc="#1c388c"></MyIcons>
            <h5>do what you want</h5>
            <h3>why not ?</h3>
        </AdStyled>
    }
}

export default Ad