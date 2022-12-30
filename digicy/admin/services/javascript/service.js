
const BASE_URL=`http://localhost:3000`;
const SERVICE=`${BASE_URL}/services`;
const ServiceInfo=document.querySelector('.services-info');
const btnService=document.querySelector('.service');
const tabledata=document.querySelector(".services-info");
btnService.addEventListener("click",()=>
tabledata.classList.toggle('show'));

displayservice();

async function displayservice(){
    let data=await fetch(SERVICE);
    let info_Service=await data.json();
    console.log(info_Service);
    ServiceInfo.innerHTML="";
    for(let i in info_Service){
        if(info_Service[i].status=="Active"){
        ServiceInfo.innerHTML+=`
        <tr>
                    <td>${parseInt(i)+1}</td>
                     <td><img src="../${info_Service[i].img_url}"></td>
                   <td>${info_Service[i].title}</td>
                    <td>${info_Service[i].subtitle}</td>
                    <td>${info_Service[i].content}</td>
                    <td><button class="btn-edit" onclick="edit(${info_Service[i].id})">edit</button>
                </tr>`
                console.log(info_Service[i].status);
    }
}
}

async function edit(id){
    let data =await fetch(`${SERVICE}/${id}`,
    {
        method:'DELETE'
    }
    );
    displayservice();
}

async function addservice(){
    let data=await fetch(SERVICE,{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({"title":document.querySelector("#title").value ,
        "subtitle":document.querySelector("#subtitle").value,
        "img_url": document.querySelector("#imgurl").value,
        "status": document.querySelector("#opt-status").value,
        "content":document.querySelector("#content").value })
    });
    console.log(data.json());

}