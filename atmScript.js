
var mainbalance=0,i=0;
var accountDetails=[{name:"Nagendra",accountNumber:7561010011,password:2002,balance:0},
		    {name:"SarathChandra",accountNumber:7561010012,password:1919,balance:1000}];
var transaction="",transdactions=[];
var btnLogin=document.querySelector(".signin");
var btnlogin=document.querySelector(".btnpage1");
var loginpage=document.querySelector(".login");
var optionsPage=document.querySelector("#mainpage2");
var Acholder=document.getElementById("acHolder");
var acBalance=document.getElementById("balance");
var btnWithdraw=document.querySelector(".withdrawBox");
var btnDeposite=document.querySelector(".depositeBox");
var btnTransaction=document.querySelector(".transactionBox");




function login(){
	document.querySelector(".mainpage").classList.add("domhide");
	loginpage.classList.remove("domhide"); 
}


btnlogin.addEventListener("click",login);
btnLogin.addEventListener("click",accountLogin);
function accountLogin(){
	var userAcnumber=document.getElementById("account").value;
	var userPassword=document.getElementById("password").value;
	console.log("ac"+userAcnumber,"\n "+"Password"+userPassword);
  for(i=0;true;i++){
	if(accountDetails[i].accountNumber==userAcnumber){
	  if(accountDetails[i].password==userPassword){
	  alert("login successfull..");
	  mainbalance=accountDetails[i].balance;
	  console.log("balance"+balance)
	  mainpage();
	 
	  break;
	  }
	
	}else if(i==accountDetails.length){
	alert("Invalid AccountNumber.");
	}
	}
}
btnLogin.addEventListener("click",mainpage);
function mainpage(){
	loginpage.classList.add("domhide");
	optionsPage.classList.remove("domhide");
	activity();
}

function activity(){
	acBalance.textContent=accountDetails[i].balance;
	Acholder.textContent=accountDetails[i].name;
}

document.querySelector(".withdraw").addEventListener("click",function(){
btnWithdraw.classList.remove("domhide");
});
document.querySelector(".withdrawfunds").addEventListener("click",withdraw);
function withdraw(){
	
	var withdrawAmount=parseInt(document.getElementById("withdraFund").value);
	if(withdrawAmount<=mainbalance){
	mainbalance-=withdrawAmount;
	acBalance.textContent=mainbalance;	transactions.push({transactiontype:Withdraw,amount:withdrawAmount,acBalance:mainbalance});

	}else{
	alert("insufficient balance.");
	}
}

document.querySelector(".depositefunds").addEventListener("click",deposit);
function deposit(){
	btnDeposite.classList.remove("domhide");
	var depositeAmount=parseInt(document.getElementById("depositFund").value);
	mainbalance+=depositeAmount;
	transactions.push({transactiontype:deposit,amount:depositeAmount,acBalance:mainbalance});
}

document.querySelector(".transaction").addEventListener("click",transactionDetails);
function transactionDetails(){
	btnTransaction.classList.remove("domhide");
	for(let j=0;j<transactions.length;j++){
	document.getElementById("transationtable").innerHTML=`
	<td>${j+1}</td> <td>${transactions[j].transactiontype}</td><td>${transactions[j].amount}</td><td>${transactions[j].balance}</td>`;
	}
}
