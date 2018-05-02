import { shallow } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallow(App);
    expect(wrapper.vm.stringified).toEqual('');
    expect(wrapper.vm.data).toEqual('');

    wrapper.setProps({ collection: [1, 2, 3] });
    expect(wrapper.vm.stringified).toEqual('1,2,3');
    expect(wrapper.vm.data).toEqual('1,2,3');

    wrapper.vm.collection.push(4, 5);
    expect(wrapper.vm.stringified).toEqual('1,2,3,4,5');
    expect(wrapper.vm.data).toEqual('1,2,3,4,5');
  })
})
