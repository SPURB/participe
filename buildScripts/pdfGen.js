const puppeteer = require('puppeteer')
const consulta = process.argv[2]
const baseUrl = process.argv[3] || `https://participe.gestaourbana.prefeitura.sp.gov.br${consulta}`
const ora = require('ora')

if (!consulta) { throw Error('Inclua a path da consulta.') }

(async () => {
	const browser = await puppeteer.launch({ headless: true })
	const page = await browser.newPage()

	const date = new Date()
	const now = {
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		day: date.getDate(),
		hour: date.getHours(),
		minutes: date.getMinutes()
	}
	const path = `dist/${consulta.replace('/', '')}_${now.year}-${now.month}-${now.day}_${now.hour}h${now.minutes}.pdf`
	const spinner = ora(`Criando pdf de ${baseUrl + consulta}...`).start()

	try {
		await page.goto(`${baseUrl + consulta}`, {
			waitUntil: 'domcontentloaded'
		})

		await autoScroll(page)
		await removeItens(page)
		await addRemoveMargins(page)
		await addAvoidPageBreak(page)
		await addPageBreakAfter(page)
		await addPageBreakBefore(page)
		await addMaxWidth(page)

		await page.emulateMediaType('screen')
		await page.pdf({
			path,
			format: 'A4',
			margin: {
				top: '1.5cm',
				right: '1.5',
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
		[
			'.Apoio',
			'.Indice',
			'.PageTop',
			'.cabecalho',
			'.rodape'
		].forEach(item => {
			const el = document.querySelector(item)

			if (el) {
				el.setAttribute('style', 'display: none')
			}
		})
	})
}

async function addPageBreakBefore (page) {
	await page.evaluate(async () => {
		[
			'.titulo'
		].forEach(item => {
			const els = document.querySelectorAll(item)
			els.forEach(el => el.setAttribute('style', 'page-break-before: always; margin-top: 0'))
		})
	})
}

async function addPageBreakAfter (page) {
	await page.evaluate(async () => {
		[
			'.tabela--custom',
			'.table-container',
			'.Mapa',
			'.Tabela',
			'.grafico',
			'.Imagem',
			'.imagem'
		].forEach(item => {
			const els = document.querySelectorAll(item)
			els.forEach(el => el.setAttribute('style', 'page-break-after: always; page-break-inside: avoid'))
		})
	})
}

async function addMaxWidth (page) {
	await page.evaluate(async () => {
		[
			'.Imagem',
			'.imagem'
		].forEach(item => {
			const els = document.querySelectorAll(item)
			els.forEach(el => el.setAttribute('style', 'max-width: 17cm; margin: auto; max-heigth: 20cm'))
		})
	})
}

async function addAvoidPageBreak (page) {
	await page.evaluate(async () => {
		[
			'.comment',
			'table tbody tr',
			'.grafico',
			'bloquote'
		].forEach(item => {
			const els = document.querySelectorAll(item)
			els.forEach(el => el.setAttribute('style', 'page-break-inside: avoid; box-shadow: unset; border: 0'))
		})
	})
}

async function addRemoveMargins (page) {
	await page.evaluate(async () => {
		[	
			'.grafico__subtitulo',
			'.tabela--custom',
			'grafico__grupos'
		].forEach(item => {
			const els = document.querySelectorAll(item)
			els.forEach(el => el.setAttribute('style', 'margin: 0'))
		})
	})
}
