import{ITEMS} from './Basic_URL.js'
import{OrderdItems,BillBody} from './module_variables.js'
import {totalcharge} from './module_charges.js'

 export async function addBill(i){
   let items=await fetch(`${ITEMS}/${i}`);
   let itemsList=await items.json();
 console.log(itemsList);
 OrderdItems.push({Item:itemsList.name,quantity:1,price:(itemsList.price),id:itemsList.id,Orderprice:itemsList.price});
console.log(OrderdItems);
 await displayBill();
document.querySelector(`.btn-${i}`).disabled=true;

}
async function displayBill(){
    BillBody.innerHTML="";
 for(let j in OrderdItems){
    BillBody.innerHTML+=`
 <tr>
 <td>${OrderdItems[j].Item}</td>
 <td><input type="text" id="r${OrderdItems[j].id}" oninput="quantity(${OrderdItems[j].id})" value="${OrderdItems[j].quantity}"</td>
 <td class="td-price">${OrderdItems[j].Orderprice}</td>
 </tr>`
 }
 totalcharge();
 }