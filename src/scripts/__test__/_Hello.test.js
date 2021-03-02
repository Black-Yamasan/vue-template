/**
 * @file _Hello.test
 */
import { shallowMount } from '@vue/test-utils';
import axios from 'axios';
import flushPromises from 'flush-promises';
import Hello from '@/vue/Components/Hello';
jest.mock('axios')

const testListData = [1, 2, 3, 4, 5];
const API_URL = '/assets/data/dammy.json';

describe('Hello Component', () => {
  
  it('set default data', () => {
    expect(typeof Hello.data).toBe('function');
    const defaultData = Hello.data();
    expect(defaultData.msg).toBe('Hello');
  });

  test('get data', () => {
    axios.get.mockImplementation((url) => {
      if ( url === API_URL ) {
        return Promise.resolve({ data: { list: testListData }})
      }
    })
  })

  test('snapshot', async () => {
    const wrapper = shallowMount(Hello, {
      sync: false
    });
  
    await flushPromises();
    expect(wrapper.element).toMatchSnapshot();
  });
});
