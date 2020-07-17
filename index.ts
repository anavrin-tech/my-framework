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

    async run(){ 
        for await (const req of this.s){
            var reqUrl = req.url;

            var match = this.urlResolver.urlMatches('^/customer/\\d+/', reqUrl );

            if (match)
                req.respond({ body : "Bem vindo Pagina do cursos"});
            else
                req.respond({ body: "404 - page not found!!" });

        }   
    }

}

var server = new WebServer();
await server.run();