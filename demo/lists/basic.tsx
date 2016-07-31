import * as React from 'react'
import Radio from '../../src'

export default class Demo extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Radio/>
                <Radio checked/>
                <Radio>点击选中</Radio>
            </div>
        )
    }
}