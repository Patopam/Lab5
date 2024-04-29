import { getData } from '../service/getProducts';
import { getProductsAction, productsActions, ShoppingItemsActions } from '../types/store';

export const getProductData = async (): Promise<getProductsAction> => {
	const data = await getData();
	console.log(data);

	return {
		action: productsActions.GETPRODUCTS,
		payload: data,
	};
};
