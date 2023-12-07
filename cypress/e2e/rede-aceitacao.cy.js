
import homePage from '../pages/homePage'
const home = new homePage

describe('Validar rede de aceitação', () => { 
  beforeEach(() => {
    //Entrar no site e verificar se consigo ver o banner da Home
    home.entrar()
    home.verificarSeEstouNaHome()
  });

  it('Validar mapa na seçao de rede de aceitação', () => {
    //Navegação até o mapa para verificar exibição do mesmo em tela.
    home.clicarOndeUsarMeuCartaoVr()
    home.paginaOndeAceita()
    home.verificarMapa()
  });

});