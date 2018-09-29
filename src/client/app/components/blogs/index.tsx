/*
 * @Author: Micheal.Ye 
 * @Date: 2018-09-11 17:45:34 
 * @Last Modified by: Micheal.Ye
 * @Last Modified time: 2018-09-14 11:44:42
 */
import * as React from 'react';
import { getList, word2voice } from "../../interface";
// import '../../static/highlight.css';
import ControlList from "./controlList";
import { Collapse } from 'react-md';
  const style = { 
      marginBottom: '0.2rem'
   };
   interface ListKey {
    title: string,
    description: string,
    content: string
}
interface Props {

}
// interface States {
//     contents: any[],
//     Collapsed: boolean
// }
const initialState = {
     contents: [],
    collapsed: true 
};
type State = Readonly<typeof initialState>;
class Blogs extends React.Component<Props> {
    readonly state: State = {
        contents: [],
        collapsed: true
    }
    async componentDidMount() {
        word2voice();
        const { contents } = await getList();
        console.log(contents)
        this.setState({
            contents
        });
    }
    loadList = ( value: ListKey, index: number ):object => {
        return <ControlList key={ index } value={ value }></ControlList>
    }
    render() {
        return <div>
        {
            this.state.contents.map(this.loadList)
        }
        </div>
    }
}

export default Blogs;