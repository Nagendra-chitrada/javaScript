const BASIC_URL=`http://localhost:3000/`;
const ITEMS=`${BASIC_URL}items`
const ORDER=`${BASIC_URL}ORDERS`

const BlockRecipe=document.querySelector('.block-recipe');
const BillBody=document.querySelector('.recipe-bill');
const BillTotal=document.querySelector("#charge");
const TAX=document.querySelector('#tax');
const Order=document.querySelector("#OrderPlaced");
const btnClear=document.querySelector('.clear-bill');
const BTNcurrent=document.querySelector('.btn-current');
const BTNorder=document.querySelector('.btn-order');
const currentDIV=document.querySelector('.current');
const orderDIV=document.querySelector('.div-order');
const ORDERdetails=document.querySelector('.details-order');
const OrderView=document.querySelector('.order-bill-details');
const CustomerDetails=document.querySelector('.customer-details');
var Customers=[],orderdetails;
var OrderdItems=[];
var charge=0,tax,discount=0;
let itemsList;
//--------------------------------------------------------------------------------------
main();
async function main(){
   await displayItems();
console.log(itemsList);
}

btnClear.addEventListener("click",clear);
BTNcurrent.addEventListener("click",()=>{currentDIV.classList.remove("model");
orderDIV.classList.add("model")});
BTNorder.addEventListener("click",()=>{orderDIV.classList.remove("model");
currentDIV.classList.add('model');displayOrders()})

//--------------------------------------------------------------------------------------
async function displayItems(){
    items=await fetch(ITEMS);
    itemsList=await items.json();
    for(i in itemsList){
    BlockRecipe.innerHTML+=`
    <button class="recipie btn-${itemsList[i].id}" onclick="addBill(${itemsList[i].id})">
    <h4>${itemsList[i].name}</h4>
    <p>${itemsList[i].price}.00</p>
    </button>`
}
}
 async function addBill(i){
    items=await fetch(`${ITEMS}/${i}`);
    itemsList=await items.json();
 console.log(itemsList);
 OrderdItems.push({Item:itemsList.name,quantity:1,price:(itemsList.price),id:itemsList.id,Orderprice:itemsList.price});
console.log(OrderdItems);
 await displayBill();
document.querySelector(`.btn-${i}`).disabled=true;


}
/*  async function quantity(id){
    recipe = await fetch(`${ITEMS}/${id}`);
   recipeData= await recipe.json();
    console.log(recipeData);
    billAmount+=recipeData.price;
    console.log(billAmount);
    
    console.log(orderItems);

   
} */
 async function displayBill(){
   BillBody.innerHTML="";
for(j in OrderdItems){
   BillBody.innerHTML+=`
<tr>
<td>${OrderdItems[j].Item}</td>
<td><input type="text" id="r${OrderdItems[j].id}" oninput="quantity(${OrderdItems[j].id})" value="${OrderdItems[j].quantity}"</td>
<td class="td-price">${OrderdItems[j].Orderprice}</td>
</tr>`
}
totalcharge();
}
function totalcharge(){
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
function discountbill(){
   let discountvalue=document.querySelector(".discount").value;
   discount=(charge/100)*discountvalue;
   console.log(discount);
}


function quantity(id){
   
   console.log(id);
   var q=document.querySelector(`#r${id}`).value;
   console.log(q);
   for(i in OrderdItems){

   if(OrderdItems[i].id==id){
      
      OrderdItems[i].quantity=q;
      OrderdItems[i].Orderprice= (OrderdItems[i].quantity* OrderdItems[i].price);
   }

   }
   totalcharge();
   displayBill();
   
}
Order.addEventListener('click',OrderPlaced);

async  function OrderPlaced(){
  
    orderPlacment=await fetch(ORDER,{
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
         "CustomerName":document.querySelector(".name").value,
         "PhoneNumber":document.querySelector(".phone").value,
         "Orderdetails":OrderdItems,
         "OrderPrice":charge
    })
   });
   clear();
}

function clear(){
   // console.log("its working");
  
   BillBody.innerHTML="";
   for(i in OrderdItems){
      document.querySelector(`.btn-${OrderdItems[i].id}`).disabled=false;
   }
   OrderdItems=[];
   BillBody.innerHTML="";
   charge=0,tax=0;
   document.querySelector(".name").value="";
   document.querySelector(".phone").value="";
   displayBill();
}

async function displayOrders(){
   Customers=[];
let ordersdata=await fetch(ORDER);
let orderdetails=await ordersdata.json();
console.log(orderdetails);
ORDERdetails.innerHTML='';
for(let k in orderdetails){
   Customers.push(orderdetails[k].Orderdetails);
ORDERdetails.innerHTML+=`
<tr>
<td>${parseInt(k)+1}</td>
<td>${orderdetails[k].CustomerName}</td>
<td>${orderdetails[k].OrderPrice}</td>
<td><button onclick="viewDetails(${k})">VIEW</button></td>
</tr>`
}



}
async function viewDetails(orderid){
   console.log( Customers);
  console.log( Customers[orderid][0]);
   console.log("its working "+orderid);
   CustomerDetails.innerHTML=``;
   for(i of Customers[orderid]){
CustomerDetails.innerHTML+=`
<tr>
<td> ${Customers[i].item}</td>

</tr>
<tr>
<td></td>
</tr>`

   }
}