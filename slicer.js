function slice (data , from, to ){
    if (typeof data === "string"){
        let str =""
        if ( to === undefined || to > data.length-1){
            to = data.length
        }
        if ( from < 0){
            from = data.length + from

        }
        if ( to < 0){
            to = data.length + to
        }
        
        for (let i = from ; i < to ; i++){
             str+= data[i]
        }
        return str
    }

    if ( Array.isArray(data)){
        
        let newArr = []
        if ( to === undefined || to > data.length-1){
            to = data.length
        }
        if ( from < 0){
            from = data.length + from

        }

        if ( to < 0){
            to = data.length + to
        }



        for ( let i = from ; i < to ; i++){
             newArr.push(data[i])
        }
        return newArr
    }
}
