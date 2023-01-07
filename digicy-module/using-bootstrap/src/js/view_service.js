
export function viewservice(service){
    let viewservice =service.map(services=>{
        return `
    <div class="col-3 border service m-4 clearfix">
    <div class="col-12  float-start">
        <img src="${services.img_url}" alt="uxinter face" class="float-start mt-3">
        <img src="${services.num_img}" alt="one" class="float-end mt-4 col-3 ">
    </div>
    <h4 class=" mt-1">${services.title}</h4>
    <p class="sub-title-2">${services.subtitle}</p>
    <p class="float-start mt-2 ">${services.content}</p>
</div>`
    });

    let view_caseStudy=service.map(cStudy=>{
        return` <li class="float-start btn  mx-4"> ${cStudy.title}</li>`
    })

    const viewCaseStudy=document.querySelector(".study-services");
    const tableservice=document.querySelector(".div-services");
    tableservice.innerHTML=viewservice.join(" ");
    viewCaseStudy.innerHTML=view_caseStudy.join(" ");
    


    
}


