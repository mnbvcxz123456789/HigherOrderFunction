import * as React from 'react';

export default (WrappedComponent: any) => {
    return class Data extends React.Component<any, any> {
        constructor(props: any) {
            super(props);
            this.state = {
                dateTime: '2018-10-01 12:00:00',
                place: '图书馆',
            };
        }
        public render() {
            return (
                <WrappedComponent dateTime={this.state.dateTime} place={this.state.place} />
            );
        }
    }

}