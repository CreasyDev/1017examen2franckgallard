import Header from "./../src/components/Header.vue";

describe('Header', () => {
  it('La fonction data devrait exister afin que le tableau des pages du menu soit utilisé propement', () => {
    expect(typeof Header.data).toBe('function')
  });
})