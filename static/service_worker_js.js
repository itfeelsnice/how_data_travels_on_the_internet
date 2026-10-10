
let add1 = "/";
let add2 = "/static/css_file.css";
let add3 = "/static/js_file.js";
let add4 = "/";
let local_cache_name1 = "LocalCache12";

self.addEventListener("install", e =>{
    e.waitUntil(
        caches.open(local_cache_name1).then(add_in_cache =>{
            console.log("it worked");
            return add_in_cache.addAll([add1, add2, add3]);
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

caches.delete("/static/css1.css");
