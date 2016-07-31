import * as React from 'react'
import Radio from '../../src'
import Checkbox from 'fit-checkbox'

export default class Demo extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            checked: false,
            disable: false
        }
    }

    handleCheck(checked: boolean) {
        this.setState({
            checked: checked
        })
    }

    handleDisable(checked: boolean) {
        this.setState({
            disabled: checked
        })
    }

    render() {
        return (
            <div>
                <Radio checked={this.state.checked}
                    disabled={this.state.disabled}
                    style={{ marginBottom: 10 }}>可受外部控制</Radio>
                <br/><br/>
                <Checkbox onChange={this.handleCheck.bind(this) }>选中</Checkbox>
                <Checkbox style={{ marginLeft: 10 }}
                    onChange={this.handleDisable.bind(this) }>禁用</Checkbox>
            </div>
        )
    }
}