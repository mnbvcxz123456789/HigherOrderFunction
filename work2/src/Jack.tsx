import * as React from 'react';
import Data from './Data';

@Data
export default class Jack extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }
    public render(){
        return (
            <div>
                hello Jack,我们{this.props.dateTime}在{this.props.place}见面！
            </div>
        )
    }
}
