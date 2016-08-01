export interface PropsDefine {
    /**
     * 值
     */
    value?: any
    /**
     * 默认值
     */
    defaultValue?: any
    /**
     * 样式
     */
    style?: any
    /**
     * 是否垂直显示
     */
    vertical?: boolean
    /**
     * 有修改的回调
     */
    onChange?: (value: any) => void
    /**
     * 类型
     */
        type?: string
    /**
     * 文字提示
     */
    label?: string
    /**
     * 文字宽度
     */
    labelWidth?: number
    /**
     * 透传组件
     */
    others?: any

    [x: string]: any
}

export const defaultProps: PropsDefine = {
    value: null,
    style: {},
    vertical: false,
    onChange: () => {
    }
}

export interface StateDefine {
    /**
     * 值
     */
    value?: any
}

export const defaultState: StateDefine = {}