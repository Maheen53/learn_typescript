import employ1 from  "./data.js"

export const getemploymentdata = ()=>{
    return employ1
}

export const getonsiteemploy =()=>{
    const found = employ1.filter((employ1)=> employ1.isonsite)
    return found
}

export const get1d = (id:number)=>{
    const founduser = employ1.find((employ1)=>employ1.id ===  id)
    return founduser
}

export const getidofemploy =(id:number)=>{
    const foundemploy = employ1.find((employ1)=>employ1.id === id && employ1.isonsite)
if(foundemploy){
    return true
}else{
    return false
}

}