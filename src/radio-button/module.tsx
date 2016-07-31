export interface PropsDefine {
    /**
     * 是否选中
     */
    checked?: boolean
    /**
     * 默认是否选中
     */
    defaultChecked?: boolean
    /**
     * 样式
     */
    style?: any
    /**
     * 是否禁用
     */
    disabled?: boolean
    /**
     * 修改的回调
     */
    onChange?: (checked?: boolean) => void
    /**
     * 大小
     */
    size?: string
    /**
     * 透传组件
     */
    others?: any


    [x: string]: any
}

export const defaultProps: PropsDefine = {
    style: {},
    disabled: false,
    onChange: () => {
    },
    size: 'normal'
}

export interface StateDefine {
    /**
         * 是否选中
         */
    checked?: boolean
}

export const defaultState: StateDefine = {

}