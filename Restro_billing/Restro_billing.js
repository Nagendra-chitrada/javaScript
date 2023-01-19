const BASIC_URL=`http://localhost:3000/`;
const ITEMS=`${BASIC_URL}items`
const ORDER=`${BASIC_URL}Order`
const BlockRecipe=document.querySelector('.block-recipe');
const BillBody=document.querySelector('.recipe-bill');
const BillTotal=document.querySelector("#totalBill");

var orderItems=[];

var billAmount=0;
var count=0;


showRecipe();

async function showRecipe(){
 recipies= await fetch(ITEMS);
orderList= await recipies.json();

console.log(orderList);
for(i in orderList){
    BlockRecipe.innerHTML+=`
        <button class="recipie" onclick="addBill(${orderList[i].id})">
        <h4>${orderList[i].name}</h4>
        <p>${orderList[i].price}.00</p>
        </button>`
       
}

}

async function addBill(id){
   recipe = await fetch(`${ITEMS}/${id}`);
   recipeData= await recipe.json();
    console.log(recipeData);
    billAmount+=recipeData.price;
    console.log(billAmount);
    orderItems.push(recipeData,{quantity:1});
    console.log(orderItems)
 
    // order=await fetch(ORDER,{
    //     method:"POST",
    //     headers:{"Content-type":"application/json"},
    //     body:JSON.stringify({"name":recipeData.name,
    //                         "price":recipeData.price,
    //                     "quantity":1})
    // })
    // console.log();
    
   

    BillBody.innerHTML+= `
    <tr>
     <td> ${recipeData.name}  </td> 
     <td> 
     <input type="number" class="quantity a${id}" value="1" oninput="price(${id},${(recipeData.price)})"
     </td> 
     <td class="price-${id}" > ${(recipeData.price)}  </td> 

    </tr>`
    
    BillTotal.textContent=billAmount;
    
    // displayBill();

    }

function price(id,price){
    individualBill=0,indBill=0,billAmount=0;
     individualBill=document.querySelector(`.a${id}`).value;
     indBill+=(individualBill*price);
    recipiPrice=document.querySelector(`.price-${id}`);
    billAmount+=indBill;
    recipiPrice.textContent=indBill;
    BillTotal.textContent=billAmount+billAmount;
    
}

 

async function displayBill(){
   
     showBill=await fetch(ORDER);
    bill=await showBill.json();
    console.log(bill);
    BillBody.innerHTML='';
    for(i in bill)
    BillBody.innerHTML+= `
    <tr>
     <td> ${bill[i].name}  </td> 
     <td> 
     <input type="number" class="quantity" value="1" >
     </td> 
     <td> ${bill[i].price}  </td> 

    </tr>`
    
    
}
// displayBill();

function tax(){
   tax= (billAmount*0.4);
}
