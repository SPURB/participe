/* eslint-disable no-console */
import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
	register(`${process.env.BASE_URL}service-worker.js`, {
		ready () {
			console.log(
				'O aplicativo está sendo servido pelo cache do service worker\n' + 'Para mais detalhes visite https://goo.gl/AFskqB'
			)
		},
		cached () {
			console.log('O conteúdo foi armazenado no cache para utilização offline')
		},
		updated () {
			console.log('Novo conteúdo está disponível; por favor atualize o navegador')
		},
		offline () {
			console.log('Não há conexão. O app está rodando em modo offline')
		},
		error (error) {
			console.error('Erro durante o serviço de registro do service worker', error)
		}
	})
}
