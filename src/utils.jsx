export const getTotal=(cart)=>{
    //console.log(cart);
    let totalCost=0;
    let totalAmount=0;
    for(let {amount,price} of cart.values()){
        totalAmount+=amount
        totalCost+=amount*price
    }
    return {totalAmount,totalCost}
}