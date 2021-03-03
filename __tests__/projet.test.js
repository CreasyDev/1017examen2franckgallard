import { mount } from "@vue/test-utils";
import Projet from "./../src/views/Projet.vue";

describe('Header', () => {
  it('La balise h2 contenant le titre de la page des projets devrait exister', () => {
    const wrapper = mount(Projet)
    const h2 = wrapper.find('.projet_title')
    expect(h2.exists()).toBeTruthy()
  })

  it('Le titre de la page des projets devrait exister', () => {
    const wrapper = mount(Projet)
    const h2 = wrapper.find('.projet_title')
    expect(h2.text()).toEqual('Mes projets')
  })
})