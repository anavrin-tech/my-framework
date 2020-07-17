

export class RouterResolver {

    urlMatches(pattern: string, url : string) : boolean {
        var regexp = new RegExp(pattern);
        return regexp.test(url);
        
    }
    
}