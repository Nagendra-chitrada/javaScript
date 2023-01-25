document.addEventListener("click",(e)=>{
    const {target}=e;
    if(!target.matches(" li a")){
        return;
    }
    e.preventDefault();
    routeUrls();
});

const PAGEROUTES={
    404:"/views/404.html",
    "/home":"/views/home.html",
    "/about":"/views/about.html",
    "/contacts":'/views/contacts.html'
}
const routeUrls=(event)=>{
    event=event||window.event;
    event.preventDefault();
    window.history.pushState({},"",event.target.href);
    urlhandler();
};

const urlhandler=async ()=>{
   var location=window.location.pathname;
 
   if(location.length==0){
       location='/home';
   }
   const route=PAGEROUTES[location]||PAGEROUTES["404"];

   const html=await fetch(route).then((response)=> response.text());

   document.querySelector('.content').innerHTML=html;

};

window.onpopstate=urlhandler;

window.route=routeUrls;
urlhandler();