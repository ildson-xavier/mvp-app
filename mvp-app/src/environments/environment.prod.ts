export const environment = {
  production: true,
  keycloakConfig: {
    clientId: 'e-consignado',
    realm: 'Dev',

    url: 'https://sso.teste.cetelem.com.br/auth/'
    //url: 'https://ec-pse-front-dev.teste.cetelem.com.br/auth/'
    //url: 'https://sso-dev-rhsso.apps.alpha.pcloud.cetelem.com.br/auth/'
  }
};

export const baseUrl = `https://poc-bpi.herokuapp.com/api/poc/`;
export const baseLocalUrl = `http://localhost:8765/api/v1/`
export const baseLocalUrlParameter = `https://ec-pse-parameters.cetelem.com.br/api/v1/`;
export const baseLocalUrlRequestDetails = `https://ec-pse-request-details.cetelem.com.br/api/v1/`; 
export const UrlCreditoImg = `src\Credito.png`;