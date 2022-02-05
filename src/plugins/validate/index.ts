import * as veeValidate from 'vee-validate'
import rules from '@vee-validate/rules'
import { loadLocaleFromURL, localize } from '@vee-validate/i18n'
import yup from './yup'
// import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json');

veeValidate.configure({
	// validateOnInput: true,
	generateMessage: localize('zh_CN')
})

Object.keys(rules).forEach(key => {
	veeValidate.defineRule(key, rules[key])
})

const modules = { yup, ...veeValidate }


export default modules;