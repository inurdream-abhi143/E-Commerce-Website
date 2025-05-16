export const ShippingReducer=(state, action)=>{
    switch(action.type){
        case "name":
            return{
                ...state,
                name: action.payload

            };
             case "mobile":
            return{
                ...state,
                mobile_no: action.payload

            };
             case "email":
            return{
                ...state,
                email: action.payload
            };
             case "address":
            return{
                ...state,
                address : action.payload

            };
             case "city":
            return{
                ...state,
                city : action.payload
            };
             case "state":
            return{
                ...state,
                state : action.payload

            };
             case "country":
            return{
                ...state,
                country : action.payload
            };
             case "pincode":
            return{
                ...state,
                pincode : action.payload
            };
           case "shipping-method":
            return{
                ...state,
                 shipping_method: action.payload
            };
            case "Reset":
                return{
                    name: "",
                    mobile_no : 0,
                    email:"",
                    address: "",
                    city : "",
                    state: "",
                    country: "",
                    pincode : 0,
                    shipping_method: "Standard"

                }
            default:
                return state;
    }
}