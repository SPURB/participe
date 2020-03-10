# Participe
[![Netlify Status](https://api.netlify.com/api/v1/badges/fb06bdad-d959-414d-b42d-1891b7862c9f/deploy-status)](https://app.netlify.com/sites/participe-gestaourbana/deploys)
[![Build Status](https://travis-ci.org/SPURB/participe.svg?branch=master)](https://travis-ci.org/SPURB/participe)

Frontend do [https://participe.gestaourbana.prefeitura.sp.gov.br](https://participe.gestaourbana.prefeitura.sp.gov.br), site de participação social da Secretaria Municipal de Urbanismo e Licenciamento – SMUL - e São Paulo Urbanismo.

## Setup
1. Clone este repositório
```bash
git clone https://github.com/SPURB/participe.git
```

2. Instale as dependências
```bash
cd participe
npm install
```

3. Inicie servidor para desenvolvimento local na porta 8080
```bash
npm run serve
```

4. Visualize as rotas especificadas em `src/router.js`. Exemplos abaixo:
* [http://localhost:8080/piu-arco-pinheiros-2](http://localhost:8080/arco-pinheiros-2)
* [http://localhost:8080/anhembi2](http://localhost:8080/anhembi2)
* [http://localhost:8080/vida-segura](http://localhost:8080/vida-segura)

> Observação: Para visualizar a home e utilizar os formulários é necessário realizar o setup do [backend](https://github.com/SPURB/consultas-publicas-backend) e criar um arquivo `.env.development.local` com as variáveis configuradas.

Explicações detalhadas deste template no [guia](http://vuejs-templates.github.io/webpack/) e [documentação do vue-loader](http://vuejs.github.io/vue-loader).


## Testes
Inicie testes unitários
```
npm run test:unit
```

Inicie testes e2e
```
npm run test:e2e
```

Inicie ambiente TDD com testes e2e
```
npm run serve:e2e
```

## Publicar
Crie os arquivos no diretório dist.
```
npm run build
```

___

## Padrões de interface
Antes de desenvolver uma nova consulta veja a documentação dos [padrões de interface](https://github.com/SPURB/participe/wiki) disponibilizados no wiki deste repositório.

## Issues
Toda contribuição é bem vinda. Crie uma [issue](https://github.com/SPURB/participe/issues).


## Colaboradores
<table>
  <tr>
    <td align="center"><a href="https://github.com/alexboccia"><img src="https://avatars3.githubusercontent.com/u/32138082?s=460&v=4" width="100px;" alt="Alex Boscia"/><br /><sub><b>Alex Boscia</b></sub></a><br /><a href="https://github.com/spurb/participe/commits?author=alexboccia" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/davimh"><img src="https://avatars1.githubusercontent.com/u/32531840?s=460&v=4" width="100px;" alt="Thomas Yuba"/><br /><sub><b>Davi Masayuki</b></sub></a><br /><a href="https://github.com/spurb/participe/commits?author=davimh" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/educkf"><img src="https://avatars2.githubusercontent.com/u/2439707?s=460&v=4" width="100px;" alt="Eduardo Camillo"/><br /><sub><b>Eduardo Camillo</b></sub></a><br /><a href="https://github.com/spurb/participe/commits?author=educkf" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/flavinhalopes"><img src="https://avatars1.githubusercontent.com/u/39636035?s=460&v=4" width="100px;" alt="Flávia Lopes"/><br /><sub><b>Flávia Lopes</b></sub></a><br /><a href="https://github.com/spurb/participe/commits?author=flavinhalopes" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/m-dantas"><img src="https://avatars1.githubusercontent.com/u/45770805?s=460&v=4" width="100px;" alt="Maurício Dantas"/><br /><sub><b>Maurício Dantas</b></sub></a><br /><a href="https://github.com/spurb/participe/commits?author=m-dantas" title="Code">💻</a></td>
 </tr>
 <tr>
    <td align="center"><a href="https://github.com/lordscorp"><img src="https://avatars1.githubusercontent.com/u/40305353?s=460&v=4" width="100px;" alt="Renan Moreira Gomes"/><br /><sub><b>Renan Gomes</b></sub></a><br /><a href="https://github.com/spurb/participe/commits?author=lordscorp" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ricardoivanov"><img src="https://avatars1.githubusercontent.com/u/56939042?s=460&v=4" width="100px;" alt="Ricardo Henrique Ivanov"/><br /><sub><b>Ricardo Ivanov</b></sub></a><br /><a href="https://github.com/spurb/participe/commits?author=X478816@rede.sp" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/rogerioloboBR"><img src="https://avatars0.githubusercontent.com/u/10540741?s=460&v=4" width="100px;" alt="Rogério Lobo"/><br /><sub><b>Rogério Lobo</b></sub></a><br /><a href="https://github.com/spurb/participe/commits?author=rogerioloboBR" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/yubathom"><img src="https://avatars3.githubusercontent.com/u/4117768?v=4" width="100px;" alt="Thomas Yuba"/><br /><sub><b>Thomas Yuba</b></sub></a><br /><a href="https://github.com/spurb/participe/commits?author=yubathom" title="Code">💻</a></td>
 </tr>
</table>

## Licença 
[GPL-v3](https://github.com/SPURB/participe/blob/master/LICENSE)

## Contato
Em caso de dúvida de implementação e desenvolvimento envie um email para <desenvolvimento@spurbanismo.sp.gov.br>.

