import * as React from 'react'
import { Button } from '../../../button/src'
import * as classNames from 'classnames'
import TransmitTransparently from '../../../../common/transmit-transparently/src'
import * as modules from './module'

export default class RadioButton extends React.Component<modules.PropsDefine, modules.StateDefine> {
    static defaultProps = modules.defaultProps

    constructor(props: modules.PropsDefine) {
        super(props)
        this.state = {
            checked: this.props.defaultChecked || this.props.checked
        }
    }

    componentWillReceiveProps(nextProps: modules.PropsDefine) {
        if ('checked' in nextProps) {
            this.setState({
                checked: nextProps.checked
            })
        }
    }

    handleChange(event: any) {
        this.setState({
            checked: event.target.checked
        }, () => {
            this.props.onChange(this.state.checked)
        })
    }

    render() {
        let classname = classNames({
            'i-checks': true,
            'i-checks-lg': this.props.size === 'large',
            'i-checks-sm': this.props.size === 'small'
        })

        return (
            <label style={this.props.style}
                className={classname}>
                <input type="radio"
                    disabled={this.props.disabled}
                    checked={this.state.checked}
                    onChange={this.handleChange.bind(this) }/>
                <i></i>
                {this.props.children}
            </label>
        )
    }
}