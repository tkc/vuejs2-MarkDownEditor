import Vue from 'vue'
import SampleComponent from '../src/components/SampleComponent.vue'

function getRenderedText(Component, propsData) {
    const Ctor = Vue.extend(Component);
    const vm = new Ctor({propsData}).$mount();
    return vm.$el.textContent
}

describe('SampleComponent', () => {

    it('renders correctly with different props', () => {

        expect(getRenderedText(SampleComponent, {
            msg: 'Hello'
        })).toBe('Hello');

        expect(getRenderedText(SampleComponent, {
            msg: 'Bye'
        })).toBe('Bye');

    })
});

it('updates the rendered message when vm.message updates', done => {

    const vm = new Vue(SampleComponent).$mount();
    vm.message = 'foo';

    // wait a "tick" after state change before asserting DOM updates
    Vue.nextTick(() => {
        expect(vm.$el.textContent).toBe('foo')
        done()
    })

});