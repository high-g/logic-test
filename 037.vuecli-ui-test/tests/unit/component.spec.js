import { shallowMount, mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import YesNoComponent from '@/components/YesNoComponent.vue';

describe('HelloWorld.vue testしていくよ', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });

  // test('equal', () => {
  //   expect(0.1 + 0.2).toBeCloseTo(0.35, 0)
  //   expect(0.1 + 0.2).toBeCloseTo(0.35, 1)
  //   expect(0.1 + 0.2).not.toBeCloseTo(0.35, 2)
  //   expect(0.1 + 0.2).toBeCloseTo(0.3, 1)
  // })

  // test('string length', () => {
  //   expect('abcdef').toHaveLength(6)
  // })

  // test('型チェック length', () => {
  //   expect(() => {}).toBeInstanceOf(Function)
  // })
});

describe('YesNoComponent.vue test', () => {
  
})

