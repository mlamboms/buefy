import Vue from 'vue'
import Modal from './Modal'

import { registerComponentAsPlugin, registerComponentProgrammaticAsPlugin } from '../../utils/plugins'

const ModalProgrammatic = {
    open(params) {
        let content
        let parent
        if (typeof params === 'string') content = params

        const defaultParam = {
            programmatic: true,
            content
        }
        if (params.parent) {
            parent = params.parent
            delete params.parent
        }
        const propsData = Object.assign(defaultParam, params)

        const vm = typeof window !== 'undefined' && window.Vue ? window.Vue : Vue
        const ModalComponent = vm.extend(Modal)
        return new ModalComponent({
            parent,
            el: document.createElement('div'),
            propsData
        })
    }
}

registerComponentAsPlugin(Modal)
registerComponentProgrammaticAsPlugin('$modal', ModalProgrammatic)

export { Modal }
export default ModalProgrammatic
