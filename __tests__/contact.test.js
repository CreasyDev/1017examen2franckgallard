import { mount } from "@vue/test-utils";
import Contact from "./../src/views/Contact.vue";

describe('Contact', () => {
  it('La balise h2 contenant le titre de la page Contact devrait exister', () => {
    const wrapper = mount(Contact)
    const h2 = wrapper.find('.contact_title')
    expect(h2.exists()).toBeTruthy()
  })

  it('Le titre de la page Contact devrait exister', () => {
    const wrapper = mount(Contact)
    const h2 = wrapper.find('.contact_title')
    expect(h2.text()).toEqual('Contact')
  })
})