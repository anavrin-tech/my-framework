import { FlagsParser } from "./flags_parser.ts";
import { RouterResolver } from "./routes.ts";
import { Server, serve } from "https://deno.land/std/http/server.ts";
const { args } = Deno;

class WebServer {
    s : Server;
    urlResolver : RouterResolver;
    constructor(){

        var flagsParser = new FlagsParser(args);
        this.urlResolver = new RouterResolver();
        this.s = serve({ port: flagsParser.getPort() });
        console.log("Running on port: " + flagsParser.getPort());
    }

    async run(): Promise<void>{ 
        for await (const req of this.s){
            this.urlResolver.getUrlController(req);
        }   
    }

}

var server = new WebServer();
await server.run();