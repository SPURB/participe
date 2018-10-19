# Participe

Frontend do [https://participe.gestaourbana.prefeitura.sp.gov.br](https://participe.gestaourbana.prefeitura.sp.gov.br). Ferramenta de participação social da Secretaria Municipal de Urbanismo e Licenciamento – SMUL - e São Paulo Urbanismo.

## Configure as url's e chaves das API's
``` json
// apiconfig.json
{
	"local":{
		"base": "http://localhost/consultas-publicas-backend/",
		"login": "http://localhost/consultas-publicas-login-backend/"
	},
	"homologacao":{
		"base": "http://seu.host.de.homolocao/consultas-publicas-backend/",
		"login": "http://seu.host.de.homologacao/consultas-publicas-login-backend/"
	},
	"prod":{
		"base": "http://api.seuhost.de.producao/consultas-publicas-backend/",
		"login": "http://api.seuhost.de.producao/consultas-publicas-login-backend/"
	},
	"chavesExternas":{
		"bingMaps": "chave-api-bing-maps" 
	}
}
```

## Setup
```
npm install
```

### Serve com 'hot reload' em localhost:8080
```
npm run serve
```

### Constrói para produção com minificação dos recursos
```
npm run build
```

### Executa eslint
```
npm run lint
npm run lint --fix
```

### Inicia testes unitários
```
npm run test:unit
```

### Inicia testes end-to-end
```
npm run test:e2e
```

Para ver explicações detalhadas de como as coisas funcionam ver [guia](http://vuejs-templates.github.io/webpack/) e [documentação do vue-loader](http://vuejs.github.io/vue-loader).