import * as React from 'react'
import { Radio, RadioGroup } from '../../src'

export default class Demo extends React.Component<any, any> {
    render() {
        return (
            <div>
                <RadioGroup type="button"
                    value="a">
                    <Radio value="a">A</Radio>
                    <Radio value="b">B</Radio>
                    <Radio value="c">C</Radio>
                </RadioGroup>

                <RadioGroup type="button"
                    vertical
                    value="b"
                    style={{ marginLeft: 10 }}>
                    <Radio disabled
                        value="a">AAAAAAAA</Radio>
                    <Radio value="b">BBBBBBBB</Radio>
                    <Radio value="c">CCCCCCCC</Radio>
                </RadioGroup>
            </div>
        )
    }
}