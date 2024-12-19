const escapeStr="`\\/  \"'";

const arr =[4 ,'2']

const obj={
    str:"hello",
    num:25,
    bool:true,
    undef:undefined,

}
    
const nested = Object.freeze({
    arr : Object.freeze([4,undefined,'2']),
    obj: Object.freeze({
        str:"salam",
        num:1999,
        bool:true,

    })
    
}
)
