import productStyles from './product.css';

export enum Attribute {
	'uid' = 'uid',
	'image' = 'image',
	'tittle' = 'tittle',
	'price' = 'price',
	'description' = 'description',
	'category' = 'category',
}

class Product extends HTMLElement {
	uid?: string;
	image?: string;
	tittle?: string;
	price?: string;
	description?: string;
	category?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			uid: null,
			image: null,
			tittle: null,
			price: null,
			description: null,
			category: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}

		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';

			const css = this.ownerDocument.createElement('style');
			css.innerHTML = productStyles;
			this.shadowRoot?.appendChild(css);

			this.shadowRoot.innerHTML = `
			<style> ${productStyles}</style>

			<section class="card">
				<img class= "image" src=${this.image}>
				<div class="info">
					<h1>${this.title}</h1>
					<p>${this.price}$</p>
					<p>${this.description}</p>
					<p>${this.category}</p>
				</div>
			</section>

			`;
		}
	}
}

customElements.define('product-container', Product);
export default Product;
