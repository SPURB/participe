const puppeteer = require('puppeteer')
const consulta = process.argv[2]
const ora = require('ora')

if (!consulta) { throw Error('Inclua a path da consulta.') }

(async () => {
	const browser = await puppeteer.launch({ headless: true })
	const page = await browser.newPage()

	const date = new Date()
	const now = {
		date: new Date(),
		day: date.getDay(),
		year: date.getFullYear(),
		month: date.getMonth(),
		hour: date.getHours(),
		minutes: date.getMinutes()
	}
	const path = `dist/${consulta.replace('/', '')}_${now.year}-${now.month}-${now.day}_${now.hour}h${now.minutes}.pdf`
	const spinner = ora('Criando pdf...').start()

	try {
		await page.goto(`https://participe.gestaourbana.prefeitura.sp.gov.br${consulta}`, {
			waituntill: 'domcontentloaded'
		})

		await autoScroll(page)
		await removeItens(page)
		await addPageBreaks(page)

		await page.emulateMediaType('screen')
		await page.pdf({
			path,
			format: 'A4',
			margin: {
				top: '1.5cm',
				right: '1.5cm',
				bottom: '1.5cm',
				left: '1.5cm'
			}
		})
	} catch (err) {
		spinner.fail('erro')
		console.error(err)
	}
	await browser.close()
	spinner.stop()
	console.log(`Sucesso. Arquivo disponível em: ${path}`)
})()

async function autoScroll (page) {
	await page.evaluate(async () => {
		await new Promise((resolve, reject) => {
			let totalHeight = 0
			const distance = 200
			let timer = setInterval(() => {
				var scrollHeight = document.body.scrollHeight
				window.scrollBy(0, distance)
				totalHeight += distance
				if (totalHeight >= scrollHeight) {
					clearInterval(timer)
					resolve()
				}
			}, 100)
		})
	})
}

async function removeItens (page) {
	await page.evaluate(async () => {
		['.Apoio', '.Indice', '.PageTop', '.cabecalho'].forEach(item => {
			const el = document.querySelector(item)
			el.setAttribute('style', 'display: none')
		})
	})
}

async function addPageBreaks (page) {
	await page.evaluate(async () => {
		[
			'.Imagem',
			'.Mapa',
			'.grafico',
			'.Tabela',
			'.tabela--custom',
			'.table-container'
		].forEach(item => {
			const els = document.querySelectorAll(item)
			els.forEach(el => el.setAttribute('style', 'clear: both; page-break-before: always; page-break-after: always'))
		})
	})
}
