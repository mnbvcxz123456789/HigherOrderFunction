import * as React from 'react';
import Modal from './Modal';

@Modal(
    {
        visible: true, 
    }
)
export default class Alert extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }
    public render() {
        return (
            <div>
                呀！走错地方了啊！
            </div>
        );
    }
}