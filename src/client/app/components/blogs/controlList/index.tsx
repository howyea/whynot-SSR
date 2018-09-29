/*
 * @Author: Micheal.Ye 
 * @Date: 2018-09-12 09:38:44 
 * @Last Modified by: Micheal.Ye
 * @Last Modified time: 2018-09-12 10:40:30
 */
import * as React from 'react';
import { 
    List,
    ListItem,
    GridList,
    Collapse,
    Button
} from "react-md";
import { ControlBox } from "./styled";
interface Props {
    value: {
        title: string,
        description: string,
        content: string
    }
}
 
interface State {
    collapsed: boolean
}
 
class ControlList extends React.Component<Props, State> {
    state = { 
        collapsed: true
    }

    toggle = ():void => {
        this.setState({ collapsed: !this.state.collapsed });
    }
    render() {
        const {
            title,
            description,
            content
        } = this.props.value;
        const {
            collapsed
        } = this.state;

        return ( 
            <List className="md-cell md-paper md-paper--1">
                <ListItem
                primaryText={ title }
                secondaryText={ collapsed && description }
                threeLines
                />
                <Collapse collapsed={collapsed}>
                    <GridList size={12}>
                    <div dangerouslySetInnerHTML={{ __html: content}}></div>
                    </GridList>
                </Collapse>
                <ControlBox>
                    <Button icon  onClick={this.toggle}>{`keyboard_arrow_${ collapsed ? 'down' : 'up' }`}</Button>
                </ControlBox>
        </List>
         );
    }
}
 
export default ControlList;