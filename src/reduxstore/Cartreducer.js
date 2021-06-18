function Cartreducer(state={
        cart:[],
        totalQuantity:0,
        orderDetails:[],
        totalprice:0,
        totalorders:localStorage.orders ? localStorage.orders.length : 0,
        isLoading:true,
        orders:localStorage.orders ? localStorage.orders : [],
        status:false,
        ordersuccess:false
    },action){
    switch(action.type){
        case "ADDTOCART":
            state ={...state};
            state["cart"]=[];
            state["totalprice"]=0;
            state["totalQuantity"]=0
            state["cart"] =[...state.cart, ...action.payload.cakedata];
            // console.log("data before totalprice",state["cart"]);
            state["status"] =false;
            if( state["cart"].length>0){
                state["cart"].forEach(function(x, index, arry){
                    // state["totalprice"] += x.price * x.quantity;
                    state["totalprice"] += x.price;
                    state["totalQuantity"] += x.quantity
                });
            }
            else{
                state["totalprice"]=-1;
            }
            // console.log("total quantity>>>>",state["totalQuantity"],"data after total price",state["totalprice"],"sum is,",state["totalprice"]);
            state["isLoading"] =false;
            return state;
    
        case "EMPTYCART":
                state={...state};
                state["cart"]=[];
                state["totalQuantity"]=0;
                state["status"]=true;
                state["totalprice"] =0;
                return state;
    
        case "REMOVESPECIC":
            state={...state}
            state["totalQuantity"]=0
            state["totalprice"] =0;
            const filteredCart = state["cart"].filter((item) => item.cakeid !== action.payload.cakeid);
            state["cart"]=filteredCart;
            if( state["cart"].length>0){
                state["cart"].forEach(function(x, index, arry){
                    // state["totalprice"] += x.price * x.quantity;
                    state["totalprice"] += x.price;
                    state["totalQuantity"] += x.quantity
                });
            }
            state["status"]=action.payload.status;
            return state;
        
        case "REMOVECAKEQTY":
                state={...state}
                state["totalQantity"] = 0
                state["totalprice"]=0
                const objIndex = state["cart"].findIndex((obj => obj.cakeid == action.payload.cakeid));
                state["cart"][objIndex].quantity = state["cart"][objIndex].quantity -1;
                let totalqt = 0;
                state["cart"].forEach(function (item) {
                    state["totalprice"] += item.price;
                    totalqt += item.quantity;
                });
                state["totalQuantity"] = totalqt;
                // console.log("cake is>>>>>>",state["cart"]);
                // console.log("cake index is>>>>>>",objIndex,"total>>>>",totalqt);
                return state;

        case "ORDERDETAILS":
                state={...state}
                state["orderDetails"] = []
                // localStorage.orderDetails = action.payload.userdata
                state["orderDetails"] = action.payload.userdata
                return state

        case "ALLORDERS":
            state["orders"]=[];
            // console.log('orders', action.payload.orders)
            if(action.payload.orders.length>0){
                state["orders"] =[...state.orders, ...action.payload.orders];
                localStorage.orders = [...state.orders, ...action.payload.orders];
            }
            state["totalorders"] = state["orders"].length;
            localStorage.totalorders = state["orders"].length;
            state["isLoading"] =false;
            return state;

        case "PLACEORDER":
                state={...state}
                state["orderDetails"]=[];
                state["cart"]=[];
                state["totalQuantity"]=0;
                state["totalprice"] =0;
                state["ordersuccess"]=action.payload.status;
                return state;
    
        default:return state;
    }
}
export default Cartreducer