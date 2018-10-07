import * as React from 'react';
import './App.css';

interface Iparam {
    /** 是否显示 */
    visible: boolean;
    /** 宽 */
    width?: number;
    /** 高 */
    height?: number;
    /** 标题 */
    title?: string;
    /** 确认操作 */
    onOk?: any;
    /** 取消操作 */
    onCancel?: any;
}
export default (param: Iparam) => (WrappedComponent: any) => {
    return class Modal extends React.Component<any, any> {
        constructor(props: any) {
            super(props)
        }
        public render() {
            const style = {
                height: param.height ? param.height : 180,
                width: param.width ? param.width : 350,
            };
            return (
                <div>
                    {
                        param.visible &&
                        <div className="modal">
                            <div className="mask"/>
                            <div
                                className="message"
                                style={{ ...style }}
                            >
                                <header className="title">
                                    <h4>{param.title ? param.title : '提示'}</h4>
                                </header>
                                <div className="content">
                                    <WrappedComponent />
                                </div>
                                <footer className="footer">
                                    <button type="button" onClick={param.onCancel}>取消</button>
                                    <button type="button" onClick={param.onOk} style={{ margin: '0px 10px', backgroundColor: '#1890ff',color: '#ffffff'}}>确认</button>
                                </footer>
                            </div>
                        </div>
                    }
                </div>
            );
        }
    }
}