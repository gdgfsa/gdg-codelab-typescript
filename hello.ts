interface Thing{
    a: number;
    b: string;
    c?: boolean;
    foo:{
        (s: string): string;
        (n: number): number;
        data: any;
    };
    [index:number]: Date;
    (): Document;
}

function doSomething(x: Thing){
    
    x.foo.data;
    return x.a;
}

//var n=doSomething({a:10,b:"hello"});