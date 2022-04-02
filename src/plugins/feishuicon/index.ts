import { install } from '@icon-park/vue-next/es/all';
import { App } from 'vue';
import '@icon-park/vue-next/styles/index.css';

export default function setupFeishuIcon(app: App) {
	install(app);
}
