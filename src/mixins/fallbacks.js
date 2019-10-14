export const fallbacks = {
	computed: {
		isIE () {
			let nav = window.navigator.userAgent
			if (nav.match(/MSIE\s\d\S*;|Trident.*rv:\d*\.\d/)) {
				return true
			} else {
				return false
			}
		}
	}
}