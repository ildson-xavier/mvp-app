// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  keycloakConfig: {
    clientId: 'e-consignado',
    realm: 'Dev',
    //url: 'https://sso.cetelem.com.br/auth/'
    //url: 'https://sso.teste.cetelem.com.br/auth/'
    url: 'https://ec-pse-front-dev.teste.cetelem.com.br/auth/'
    //url: 'https://sso-dev-rhsso.apps.alpha.pcloud.cetelem.com.br/auth/'
  }
};

export const baseUrl = `https://mvn-app.herokuapp.com/pse/posts`;
export const baseLocalUrl = `http://localhost:8765/api/v1/`
export const baseLocalUrlParameter = `http://localhost:8085/api/v1/`;
export const baseLocalUrlRequestDetails = `http://localhost:8084/api/v1/`; 
export const UrlCreditoImg = `src\Credito.png`;
 
 
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
