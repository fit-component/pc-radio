import * as React from 'react'
import Radio from '../../src'

export default class Demo extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            checked: false
        }
    }

    handleCheck(checked: boolean) {
        this.setState({
            checked: checked
        })
    }

    render() {
        return (
            <div>
                <Radio onChange={this.handleCheck.bind(this) }
                    style={{ marginRight: 10 }}>回调函数</Radio>
                {this.state.checked ? '已选中' : '未选中'}
            </div>
        )
    }
}