var priceA = 50;
var priceB = 30;
var priceC = 20;
var priceD = 15;

/**
 * 3*A =130
 * 2*B =45
 */
let inventory = ['A','B','C','D']
let disCountedItem =['A','B']

function getItemCost(item,itemCount){
    if(disCountedItem.indexOf(item) != -1)
    {
        switch(item){
            case 'A' :  return Math.floor(itemCount/3) *130 + itemCount%3 * priceA;
                        break;
            case 'B' : return Math.floor(itemCount/2) *45 + itemCount%2 * priceB;
                         break;
            default : console.log(item);
        }
    }
    else if(inventory.indexOf(item) != -1){
        return itemCount * window['price'+`${item}`]
    }
    else{
        console.log(`the item ${item} is not avialable in Inventory`);
        return null
    }
}


 function checkOutTotal(itemsArray){
    let occranceCounter = new Object();
    let itemPrice = new Array();

    itemsArray.forEach(item=>{
        if(!occranceCounter[item]){
            occranceCounter[item] = 1;
        }
        else{
            occranceCounter[item] = occranceCounter[item] +1;
        }
    });

    Object.keys(occranceCounter).forEach(key =>{
       itemPrice.push(getItemCost(key,occranceCounter[key]));
    })

    return itemPrice.reduce((sum,itemCost)=>{
        return sum = sum +itemCost
    })
     
 }

 let totalSum = checkOutTotal(['C','A','A','D','B','B','B','B','X','A']);
 console.log(totalSum)