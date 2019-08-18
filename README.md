Teste
# Participe

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

> Observação: Para visualizar a home e gerar e gerar formulários é necessário realizar o setup do [backend](https://github.com/SPURB/consultas-publicas-backend) e criar um arquivo `.env.development.local` com as variáveis configuradas.

Explicações detalhadas deste template no [guia](http://vuejs-templates.github.io/webpack/) e [documentação do vue-loader](http://vuejs.github.io/vue-loader).

___

## Padrões de interface
Antes de desenvolver uma nova consulta veja a documentação dos [padrões de interface](https://github.com/SPURB/participe/wiki) disponibilizados no wiki deste repositório.

## Issues
Toda contribuição é bem vinda. Crie uma [issue](https://github.com/SPURB/participe/issues).

## Licença 
[GPL-v3](https://github.com/SPURB/participe/blob/master/LICENSE)


## Contato
Em caso de dúvida de implementação e desenvolvimento envie um email para <desenvolvimento@spurbanismo.sp.gov.br>.

