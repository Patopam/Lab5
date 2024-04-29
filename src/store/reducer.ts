import { AppState } from '../types/store';
import { Actions, productsActions, ShoppingItemsActions } from '../types/store';

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
	console.log(currentAction);
	const { action, payload } = currentAction;

	switch (action) {
		case productsActions.GETPRODUCTS:
			console.log('engetProducts');

			return {
				...currentState,
				products: payload,
			};
		case ShoppingItemsActions.GETSHOPPINGITEMS:
			return {
				...currentState,
				ShoppingItems: payload,
			};
		case ShoppingItemsActions.SAVESHOPPINGITEMS:
			return {
				...currentState,
				ShoppingItems: payload,
			};

		default:
			console.log('endefoult');
			return currentState;
	}
};
