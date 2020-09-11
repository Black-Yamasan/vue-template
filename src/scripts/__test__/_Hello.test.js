/**
 * @file _Hello.test
 */
import { shallowMount } from '@vue/test-utils';
import Hello from '@/vue/Components/Hello';

const wrapper = shallowMount(Hello);

describe('Hello Component', () => {
  
  it('set default data', () => {
    expect(typeof Hello.data).toBe('function');
    const defaultData = Hello.data();
    expect(defaultData.msg).toBe('Hello');
  });

  it('snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
