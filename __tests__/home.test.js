import { shallowMount } from "@vue/test-utils";
import Home from "./../src/views/Home.vue";

describe("Testons si l'utilisateur est connecté ou déconnecté correctement.", () => {
  it("L'utilisateur devrait être deconnecté initialement", async() => {
    const wrapper = shallowMount(Home)
    expect(wrapper.find('.userConnectionStatus').text()).toEqual("Vous n'êtes pas connectés." || "You are not connected.")
  });
  it("L'utilisateur devrait être connecté après avoir cliquer sur le boutton d'authentification", async() => {
    const wrapper = shallowMount(Home)
    await wrapper.vm.toggleLogin()
    expect(wrapper.find('.userConnectionStatus').text()).toEqual('Vous êtes connectés.' || 'You are connected.')
  });
});