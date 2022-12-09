  function bill(){
        var a=[],sum=0;
       	for(var i=0;i>=a.length;i++){
      		 a.push(prompt("Enter item price"));
         	 console.log(a);
          if(a[i]=="end"){
           	 for(let j=0;j<=a.length-2;j++){
           	sum+=parseInt(a[j]);
           	console.log("bill:"+sum);
           }
           
                if(sum>=2000&&a.length+1>=5){
               
                console.log(`total bill with 20%-discount:${sum-(sum*0.2)}`);
                document.write(`total bill with 20%-discount:${sum-(sum*0.2)}`);
            return console.log(sum-(sum*0.2));
           	break;
           } 
             
                else if(sum>=2000){
                console.log("10%");
              return console.log(sum-(sum*0.1));
              	break;
            }
            
                else{
                console.log("no discount");
            return console.log(sum);
            	break;
            }
            }
        }
}

