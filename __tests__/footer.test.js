import { mount, shallowMount } from "@vue/test-utils";
import Footer from "./../src/components/Footer.vue";

describe('Footer', () => {
  it('La balise footer devrait exister', () => {
    const wrapper = mount(Footer)
    const div = wrapper.find('footer')
    expect(div.exists()).toBeTruthy()
  })

  it("La directive personnalisée 'footerDirective' doit se retrouver dans la balise footer", () => {
    const footerDirective = jest.fn()
    shallowMount(Footer, {
      directives: {
        footerDirective
      }
    })
    expect(footerDirective).toHaveBeenCalled()
  })
})