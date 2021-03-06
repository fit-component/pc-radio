import * as React from 'react'
import { Radio, RadioGroup } from '../../src'

export default class Demo extends React.Component<any, any> {
    handleChange(value: any) {
    }

    render() {
        return (
            <div>
                <RadioGroup onChange={this.handleChange.bind(this) }
                    value="a">
                    <Radio value="a">A</Radio>
                    <Radio value="b">B</Radio>
                    <Radio value="c">C</Radio>
                </RadioGroup>

                <RadioGroup onChange={this.handleChange.bind(this) }
                    vertical
                    value="b"
                    style={{ marginTop: 10 }}>
                    <Radio disabled
                        value="a">AAAAAAAA</Radio>
                    <Radio value="b">BBBBBBBB</Radio>
                    <Radio value="c">CCCCCCCC</Radio>
                </RadioGroup>
            </div>
        )
    }
}