import * as React from 'react'
import * as classNames from 'classnames'
import {ButtonGroup, Button} from '../../../button/src'
import './index.scss'
import * as _ from 'lodash'
import TransmitTransparently from '../../../../common/transmit-transparently/src'
import * as modules from './module'

export default class Group extends React.Component<modules.PropsDefine, modules.StateDefine> {
    static defaultProps = modules.defaultProps

    constructor(props: modules.PropsDefine) {
        super(props)
        this.state = {
            value: this.props.defaultValue || this.props.value
        }
    }

    componentWillReceiveProps(nextProps: modules.PropsDefine) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value
            })
        }
    }

    handleChange(value:any, checked:boolean) {
        if (checked) {
            this.setState({
                value: value
            }, () => {
                this.props.onChange(value)
            })
        }
    }

    getChildren() {
        let childs = React.Children.map(this.props.children, (child:any) => {
            return React.cloneElement(child, {
                style: this.props.vertical ? { marginTop: 10 } : { marginRight: 10 },
                onChange: this.handleChange.bind(this, child.props.value),
                checked: this.state.value === child.props.value
            })
        })

        let layoutClassname = classNames({
            'vertical': this.props.vertical
        })

        switch (this.props.type) {
            case 'button':
                let buttonChilds = React.Children.map(this.props.children, (child:any) => {
                    let props = {
                        onClick: this.handleChange.bind(this, child.props.value, true),
                        active: this.state.value === child.props.value,
                        disabled: child.props.disabled
                    }
                    return (
                        <Button {...props}>{child.props.children}</Button>
                    )
                })
                return (
                    <ButtonGroup vertical={this.props.vertical}
                        style={this.props.style}>
                        {buttonChilds}
                    </ButtonGroup>
                )
            default:
                return (
                    <div className={layoutClassname}
                        style={this.props.style}>
                        {childs}
                    </div>
                )
        }
    }

    render() {
        let childs = this.getChildren()

        let classes = classNames({
            '_namespace': true,
            'form-container': true
        })

        if (!_.isEmpty(this.props.label)) {
            childs = (
                <div className={classes}>
                    <label style={{ width: this.props.labelWidth || null }}
                        className="form-control-label">{this.props.label}</label>
                    {childs}
                </div>
            )
        }

        return childs
    }
}