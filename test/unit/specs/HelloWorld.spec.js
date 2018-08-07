import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld';

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App');
  });
});

/*
import Vue from 'vue';
import ImageBank from '../src/components/ImageBank.vue';

describe('ImageBank', () => {
  it('has the default variable', () => {
    expect(ImageBank.data().message).not.toBe(null);
  });
});
*/