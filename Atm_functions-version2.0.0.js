
const Ac=[986644,961871,799750];
const Psd=[1919,2002,2306];
var bal=[10000,5000,1000000];
var balance;
var transaction=[];
console.log(transaction.length);

function userLogin(){
	var userAc=document.credentials.account.value;
	var userpsw=document.credentials.password.value;

	console.log(userAc+"\n"+userpsw);
	
	
		for(let k=0;k<Ac.length;k++){
			if(userAc==Ac[k]){
				if(userAc==Ac[k]&&userpsw==Psd[k] ){
					alert("Login successfull");
			balance=bal[k];
			console.log(balance);					
			options();
			break;
				}	
			
			else{
			  alert("incorrect password");
			  }
		}
		   else if(k==Ac.length-1){
			alert("incorrect AccountNumber");
			}
		
			}
			
			
			
}	
		


function options(){
		
		for(let i=0;true;i++){
		 var choice=prompt("enter options:\n1.Balance enquire \n2.Withdraws \n3.Deposites\n4.Transactions \n5.exit","");
				
			switch(choice){
			case "1":
				alert("Balance in your Account"+balance);
				transaction.push({type:"balanceCheck",funds:+balance});	
				console.log(transaction.length);				
				break;
			case "2":
			 	withdraw();
				console.log(transaction.length);
				
				 break;
			case "3":
				deposite()
				console.log(transaction.length);
				
				break;
			case "4":
				transactions();
				
			console.log(transaction.length);
				break;
			case "5":
				alert ("Thankyou... \n Visit Again..");
				break;
			default:
				alert("Invalid Option");
			}
			if(choice==5)
				break;
			}
	
}

function withdraw(){
	var amount =parseInt(prompt("enter amount",""));
			 	   if(amount<=balance){
			 		balance-=amount;
					transaction.push({type:"withdraw",funds:amount});
					
			 		alert("your Ac Balance"+balance);
					
					}
			 	   else{
			 		alert("Insufficient funds");
			 		}
}

function deposite(){
	let amount1= parseInt(prompt("enter Deposite",""));
				balance+=amount1;
				transaction.push({type:"deposite",funds:amount1});
				alert("your Ac balance"+balance);
}


function transactions(){
	var transactiondetails="";
	for(let i=0;i<transaction.length;i++){
	transactiondetails+=((i+1)+"."+transaction[i].type+"-"+transaction[i].funds +"\n");
	}
	console.log(transactiondetails);
	console.log(transaction);
	
	alert(`your transactions:\n ${transactiondetails}`);

}
