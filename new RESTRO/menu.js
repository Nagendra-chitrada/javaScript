import './Basic_URL.js';
import {ITEMS} from './Basic_URL.js';
import { addBill } from './addbill_module.js';

console.log(ITEMS);
 export default async function showRecipe(){
    const BlockRecipe=document.querySelector('.block-recipe');
   let  recipies= await fetch(ITEMS);
    let orderList= await recipies.json();
   
   console.log(orderList);
   for( let i in orderList){
       BlockRecipe.innerHTML+=`
           <button class="recipie" onclick="${addBill(orderList[i].id)}">
           <h4>${orderList[i].name}</h4>
           <p>${orderList[i].price}.00</p>
           </button>`
   
   }
   
   }