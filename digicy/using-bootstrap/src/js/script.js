

import { SERVICE_URL } from "./config";
import { viewservice } from "./view_service";

fetchdata(SERVICE_URL);
async function fetchdata(url){
  let response=await fetch(url);
  let result=await response.json();
  console.log(result);
  viewservice(result);
  
}