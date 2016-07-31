import * as React from 'react'
import Radio from '../../src'

export default class Demo extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Radio size="large">大尺寸</Radio>
                <Radio size="small"
                    style={{ marginLeft: 20 }}>小尺寸</Radio>
            </div>
        )
    }
}