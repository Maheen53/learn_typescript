export interface Employ {
    id:number
    firstname:string
    lastname:string
    isonsite:boolean
    email:string
    cellno:number
    salary:Salary
    
}

interface Salary {
    isbonus:boolean
    totalsalary:number
    isincreament:boolean
}