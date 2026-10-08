
let inp1 = document.querySelector("#inp1");
let btn1 = document.querySelector("#btn1");

let service_worker_file_name = "/static/service_worker_js.js";

if ("serviceWorker" in navigator){
    window.addEventListener("load", () =>{
        navigator.serviceWorker.register(service_worker_file_name).catch(error1 =>{
            console.log("an error happend", error1);
        });  
    });
}
