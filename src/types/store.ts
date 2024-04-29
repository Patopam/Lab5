import { ShoppingItem } from './ShoppingItem';
import { Product } from './products';

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	products: Product[];
	ShoppingItems: ShoppingItem[];
};

// tipado de lo general (ESCRIBIR EN MAYUSCULA)

export enum productsActions {
	'GETPRODUCTS' = 'GETPRODUCTS',
}

export enum ShoppingItemsActions {
	'GETSHOPPINGITEMS' = 'GETSHOPPINGITEMS',
	'SAVESHOPPINGITEMS' = 'SAVESHOPPINGITEMS',
}

// aqui estan los parametros que va a recibir la action

export interface getProductsAction {
	action: productsActions.GETPRODUCTS;
	payload: Product[];
}

export interface getShoppingItemsAction {
	action: ShoppingItemsActions.GETSHOPPINGITEMS;
	payload: ShoppingItem[];
}

export interface saveShoppingItemsAction {
	action: ShoppingItemsActions.SAVESHOPPINGITEMS;
	payload: ShoppingItem[];
}

//Exportamos las actions creadas

export type Actions = getProductsAction | getShoppingItemsAction | saveShoppingItemsAction;
