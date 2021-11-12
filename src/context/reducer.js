export let data = {
    
    order : []
}

export function reducer(state, action) {
    switch (action.type) {

        case "ADD_CART": {
        console.log(state,"oder")
            return {
                ...state,
                order: action.payload
            }
        }
        // case "RES_USER": {
        //     return {
        //         ...state,
        //         ResUser: action.payload
        //     }
        // }
        // case "CUS_USER": {
        //     return {
        //         ...state,
        //         CusUser: action.payload
        //     }
        // }
        // case "PRODUCT_GET_ID": {
        //     return {
        //         ...state,
        //         ProductId : action.payload
        //     }
        // }
        // case "AUTH_USER_DETAILS": {
 
        //     return {
        //         ...state,
        //         authUser : action.payload
        //     }
        // }
        // case "ORDERS_PENDING": {
        //     let userClone = [];
        //     userClone.push(action.payload)
        //     return {
        //         ...state,
        //         ordersPending : userClone
        //     }
        // }
        // case "ORDERS_ACCEPTED": {
        //     let userClone = [];
        //     userClone.push(action.payload)
        //     return {
        //         ...state,
        //         ordersAccepted : userClone
        //     }
        // }
        // case "ORDERS_DELIVERED": {
        //     let userClone = [];
        //     userClone.push(action.payload)
        //     return {
        //         ...state,
        //         ordersDelivered : userClone
        //     }
        // }

        
        default:
            return state;

    }
}