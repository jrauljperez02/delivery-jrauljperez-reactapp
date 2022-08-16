import CartContext from "./cart-context"
import { useReducer } from "react";


const defaultCartState = {
    items: [],
    totalAmount : 0,
}


const cartReducer = (state, action) => {

    if(action.type === "ADD") {
        const updateItems = state.items.concat(action.item);
        const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            items : updateItems,
            totalAmount : newTotalAmount
        };
    }

    return defaultCartState
};


const CardProvider = props => {

    const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState);

    const addItemCartHandler = item => {
        dispatchCartAction({type : 'ADD', item : item});
    };
    
    const removeItemFromCartHandler = id => {
        dispatchCartAction({type : 'REMOVE', id : id});
    };

    const cardContext = {
        items: cartState.items,
        totalAmount : cartState.totalAmount,
        addItem: addItemCartHandler ,
        removeItem : removeItemFromCartHandler
    };

    return(
        <CartContext.Provider value = {cardContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CardProvider