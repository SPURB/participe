# Participe

Frontend do [https://participe.gestaourbana.prefeitura.sp.gov.br](https://participe.gestaourbana.prefeitura.sp.gov.br). Ferramenta de participação social da Secretaria Municipal de Urbanismo e Licenciamento – SMUL - e São Paulo Urbanismo.

## Setup do backend
Clone e faça o setup dos repositórios:
* [Consultas-publicas-backend](https://github.com/SPURB/consultas-publicas-backend)
* [Consultas-publicas-login-backend](https://github.com/SPURB/consultas-publicas-login-backend)

## Altere o arquivo `.env`
```
VUE_APP_API_URL=http://localhost/consultas-publicas-backend
VUE_APP_API_LOGIN_URL=http://localhost/consultas-publicas-backend-login
VUE_APP_ASSETS_BASE_URL=http://localhost/consultas-external-assets
VUE_APP_BING_MAPS_KEY=your_bing_maps_key
```
> Caso utilize um componente com mapa (exemplo: `src/components/Mapa.vue`) será necessário [criar uma chave no bing maps](https://docs.microsoft.com/en-us/bingmaps/getting-started/bing-maps-dev-center-help/getting-a-bing-maps-key) e definir o valor de `VUE_APP_BING_MAPS_KEY`.

## Setup deste repositório
1. Instale as dependências
```
npm install
```

2. Inicia servidor para desenvolvimento em localhost:808*
```
npm run serve
```

3. Cria arquivos para produção com minificação
```
npm run build
```
Explicações detalhadas deste template no [guia](http://vuejs-templates.github.io/webpack/) e [documentação do vue-loader](http://vuejs.github.io/vue-loader).
___

## Outras opções
Verificar erros com eslint `npm run lint`

Corrigir automaticamente os erros `npm run lint --fix`

Iniciar testes unitários: `npm run test:unit`

Iniciar testes end-to-end: `npm run test:e2e`

## Padrões de interface
Antes de desenvolver uma nova consulta veja a documentação dos [padrões de interface](https://github.com/SPURB/participe/wiki) disponibilizados no wiki deste repositório.


## Issues
Toda contribuição é bem vinda. Crie uma [issue](https://github.com/SPURB/participe/issues).

## Licença 
[GPL-v3](https://github.com/SPURB/participe/blob/master/LICENSE)