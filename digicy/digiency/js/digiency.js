 
const blockServices=document.querySelector('#div--services');
 const BASE_URL=`http://localhost:3000/`;
 const SERVICE=`${BASE_URL}services`;

async function displayService(){
    let serviceresponse=await fetch(SERVICE);
    let servicedata=await serviceresponse.json();
    console.log(servicedata);
    blockServices.innerHTML="";
    for(let i in servicedata){
        blockServices.innerHTML+=`
        <div class="services">
            <img src="${servicedata[i].img_url}" alt="design">
            <img class="img-number" src="${servicedata[i].num_img}" alt="one">
            <h3>${servicedata[i].title}</h3>
            <p class="sub-title">${servicedata[i].subtitle}</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
        </div>
        `
    }
}
displayService();