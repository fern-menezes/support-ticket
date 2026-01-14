import { routes } from "../routes/index.js";

export async function routeHandler(request, response){
    const route = routes.find((route)=>{
        return route.method === request.method && route.path === request.url
    })

    if(route){
        return route.controller({request, response})
    } 
    return response.writeHeader(404).end("Not Found")
}
