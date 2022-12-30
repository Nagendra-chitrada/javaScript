
import { charge,tax } from "./module_variables.js";
 export function totalcharge(){
    charge=0,tax=0;
    for(i in OrderdItems){
       charge+=parseInt(OrderdItems[i].Orderprice);
    
    }
    tax=(charge*0.04);
    
    charge+=tax;
    discountbill();
   
    charge-=discount;
    BillTotal.textContent=charge;
    TAX.textContent=tax;
 console.log(charge);
 
 
 }