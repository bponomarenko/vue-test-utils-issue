import { shallowMount, enableAutoDestroy } from '@vue/test-utils';
import TestComponent from './test-component.vue';

enableAutoDestroy(afterEach);

const SlotComponent = { template: '<div></div>' };

describe('Test component', () => {
  it('should has component instances for slot content', async () => {
    const wrapper = shallowMount(TestComponent, {
      slots: { default: SlotComponent }
    });

    expect(wrapper.exists()).toBe(true);

    // Wait for component to be mounted
    await wrapper.vm.$nextTick();

    expect(wrapper.get('label').text()).toBe('true');

    // Trigger component update (by setting non-registered property)
    await wrapper.setProps({ randome: true });

    // Slot setup is not expected to change
    expect(wrapper.get('label').text()).toBe('true');
  });
});
