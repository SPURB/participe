# Participe

> [http://participe.gestaourbana.prefeitura.sp.gov.br](http://participe.gestaourbana.prefeitura.sp.gov.br)

## Configure as url's das API's
``` json
// apiconfig.json
{
	"local":{
		"base": "http://localhost/consultas-publicas-backend/",
		"login": "http://localhost/consultas-publicas-login-backend/"
	},
	"homologacao":{
		"base": "http://seu.host.de.homolocao/consultas-publicas-backend",
		"login": "http://seu.host.de.homologacao/consultas-publicas-login-backend/"
	},
	"prod":{
		"base": "http://api.seuhost.de.producao/consultas-publicas-backend",
		"login": "http://api.seuhost.de.producao/consultas-publicas-login-backend/"
	}
	"chavesExternas": {
		"bingMaps": "chave-api-bing-maps"
	}
}
```
Este repositório utiliza os serviços de backend:
* [https://github.com/SPURB/consultas-publicas-backend](https://github.com/SPURB/consultas-publicas-backend)
* [https://github.com/SPURB/consultas-publicas-login-backend](https://github.com/SPURB/consultas-publicas-login-backend)

## Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
