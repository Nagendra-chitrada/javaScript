
const Ac=[986644,961871,799750];
const Psd=[1919,2002,2306];
var bal=[10000,5000,1000000];
var balance;

function userLogin(){
	var userAc=document.credentials.account.value;
	var userpsw=document.credentials.password.value;

	console.log(userAc+"\n"+userpsw);
	for(let i=0;i<Ac.length;i++){
	   if(userAc==Ac[i])
		{
        	if(userAc==Ac[i]&&userpsw==Psd[i])
		{
		alert("Login successfull");
		balance=bal[i];
		console.log(balance);					
		options();
		break;
		}else{
		  alert("incorrect password");
		  }
	   }else if(i==Ac.length-1){
		alert("incorrect AccountNumber");
		}
}	
}		


function options(){
	for(let k=0;true;k++){	
		var choice=prompt("enter options:\n1.Balance enquire \n2.Withdraws \n3.Deposites \n4.exit","");
		
			switch(choice){
			case "1":
				alert("Balance in your Account"+balance);
				options();
				break;
			case "2":
			 	withdraw();
				options();
				 break;
			case "3":
				deposite()
				options();
				break;
			case "4":
				alert ("Thankyou... \n Visit Again..");
				break;
			default:
				alert("Invalid Option");
			}
	if(choice==4)
	{
	break;
	}
	}
}

function withdraw(){
	var amount =parseInt(prompt("enter amount",""));
			 	   if(amount<=balance){
			 		balance-=amount;
			 		alert("your Ac Balance"+balance);
					}
			 	   else{
			 		alert("Insufficient funds");
			 		}
}

function deposite(){
	let amount1= parseInt(prompt("enter Deposite",""));
				balance+=amount1;
				alert("your Ac balance"+balance);
}
	
