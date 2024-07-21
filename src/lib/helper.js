export const formatCurrency = (amount) => {
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
};

export const changeColor = (value) =>{
    if(value == "long" || value > 0){
        return "[#0E9F6E]"
    }
    else{
        return "[#F05252]"
    }
}
