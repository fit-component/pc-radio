import * as React from 'react'
import Radio from '../../src'

export default class Demo extends React.Component <any, any> {
    render() {
        return (
            <div>
                <Radio disabled>被禁用</Radio>
            </div>
        )
    }
}