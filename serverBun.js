import {listen, serve} from 'bun'
serve({
        fetch(request){
            const url = new URL(request.url);
            if(url.pathname === '/'){
                return new Response("HEllo, Dear",{status:200});
            }
            else if(url.pathname === '/thanku'){
                return new Response("Thanku, Dear",{status:201});
            }
            else{
                return new Response("good morning, Dear",{status:200});
            }
        },
        port : process.env.port || 3003,
        hostname: '127.0.0.1'
})