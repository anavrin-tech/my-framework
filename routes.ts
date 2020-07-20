import { ServerRequest } from "https://deno.land/std/http/server.ts";
import { urls } from './myapp/urls.ts';

export class RouterResolver {

    urlMatches(pattern: string, url : string) : boolean {
        var regexp = new RegExp(pattern);
        return regexp.test(url);
        
    }

    getUrlController(request: ServerRequest){
        var urlNotFound = false;
        for (let set of urls){
            if(this.urlMatches(set.reg, request.url)){
                urlNotFound = true;
                set.controller.returnResponse(request);
            }
        }
        if(!urlNotFound)
            request.respond({
                body: '404'
            });       
    }
    
}