import * as React from 'react'
import * as classNames from 'classnames'
import './index.scss'
import * as _ from 'lodash'
import TransmitTransparently from '../../../../common/transmit-transparently/src'
import * as modules from './module'

@TransmitTransparently()
export default class Radio extends React.Component<modules.PropsDefine, modules.StateDefine> {
    static defaultProps = modules.defaultProps

    constructor(props: modules.PropsDefine) {
        super(props)

        let checked: boolean

        if (this.props.defaultChecked !== undefined) {
            checked = this.props.defaultChecked
        }

        if (this.props.checked !== undefined) {
            checked = this.props.checked
        }

        this.state = {
            checked
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
        const {size, disabled, label, children, labelWidth, onChange} = this.props
        const classes = classNames({
            '_namespace': true,
            'i-checks': true,
            'i-checks-lg': size === 'large',
            'i-checks-sm': size === 'small',
            'disabled': disabled,
            'form-container': !_.isEmpty(label),
            [this.props['className']]: !!this.props['className']
        })

        let childs = (
            <label {...this.props.others} className={classes}>
                <input type="radio"
                    disabled={disabled}
                    checked={this.state.checked}
                    onChange={this.handleChange.bind(this) }/>
                <i></i>
                <span>{children}</span>
            </label>
        )

        if (!_.isEmpty(label)) {
            childs = (
                <div {...this.props.others} className={classes}>
                    <label style={{ width: labelWidth || null }}
                        className="form-control-label">{label}</label>
                    {childs}
                </div>
            )
        }

        return childs
    }
}