function get ( src , path){
   let  current = src 
   let x = path.split('.')

    for (let i = 0 ; i < x.length ; i++ ) { 
        if (current === undefined){
        return undefined
    }
        
        current = current[x[i]]
    }
   
    return current

}
const src = ({ nested: { key: 'value' } })
const path = 'nx.nx'
console.log(get(src,path))