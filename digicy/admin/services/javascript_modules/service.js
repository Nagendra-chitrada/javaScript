
import { SERVICE } from "./configure.js";
const ServiceInfo=document.querySelector('.services-info');

displayservice();
async function displayservice(){
    let data=await fetch(SERVICE);
    let info_Service=await data.json();
    console.log(info_Service);
    for(let i in info_Service){
        ServiceInfo.innerHTML+=`
        <tr>
                    <td>${parseInt(i)+1}</td>
                     <td><img src="../../../icons/ux-interface.png" alt="design"></td>
                   <td>${info_Service[i].title}</td>
                    <td>${info_Service[i].subtitle}</td>
                    <td>${info_Service[i].content}</td>
                </tr>`
                console.log(info_Service[i].img_url);
    }
}