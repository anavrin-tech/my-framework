import { ServerRequest } from "https://deno.land/std/http/server.ts";

export class PermissionMiddleware{
    userIsAllowed(request: ServerRequest): boolean{

        var expression = '^/admin/$';

        var regexp = new RegExp(expression);
        
        return !regexp.test(request.url);
    }
    
}