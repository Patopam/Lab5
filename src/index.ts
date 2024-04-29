import './components/export';
import './screen/dashboard';
import { Dashboard } from './screen/dashboard';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		const something = this.ownerDocument.createElement('app-dashboard') as Dashboard;
		this.shadowRoot?.appendChild(something);
	}
}

customElements.define('app-container', AppContainer);
