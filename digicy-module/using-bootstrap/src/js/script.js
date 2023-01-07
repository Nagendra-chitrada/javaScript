

import { SERVICE_URL } from "./config";
import { viewservice } from "./view_service";


setTimeout(fetchdata(SERVICE_URL),100000);

async function fetchdata(url){
  let response=await fetch(url);
  let result=await response.json();
  console.log(result);
  viewservice(result);
  
}