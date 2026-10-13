
let add1 = "/";
let add2 = "/static/css_file.css";
let add3 = "/static/js_file.js";
let add4 = "/static/css_file2.css";
let add5 = "/scheme1";
let add6 = "/static/js_file2.js"
let local_cache_name1 = "LocalCache21";

self.addEventListener("install", e =>{
    e.waitUntil(
        caches.open(local_cache_name1).then(add_in_cache =>{
            console.log("it worked");
            return add_in_cache.addAll([add1, add2, add3, add4, add5, add6]);
        })
    );
});

self.addEventListener("fetch", e =>{
    e.respondWith(
        caches.match(e.request).then(respond1 =>{
            if (respond1){
                console.log("if this shows in the console than it works i think");
                return respond1;
            }
            return fetch(e.request);
        })
    );
});

