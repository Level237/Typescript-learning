/**
 * *****Objects

let employee:{
    readonly id:number,
    name?:string,
    retire:(date:Date)=>void
}={
    id:1,
    name:'level',
    retire:(date:Date)=>{
    console.log(date)
}};
employee.name="martin";
 */


/****
 * 
 * Section 2: Advanced Learn to typescript
 * Type aliases
 * Union and Intersections
 * Type narrowing
 * nullable type
 * the never type
 * 
 */

/*********
 * Type aliases
 * DRY: Don't repeat Yourself
 

type Employee={
    readonly id:number,
    name:string,
    retire:(date:Date) =>void
}

 let employee:Employee={
    id:1,
    name:'level',
    retire:(date:Date)=>{
    console.log(date)
}};
*/


/**********
 * Union Types
 */

function kgToLbs(weight:number | string){
    // Narrowing
    if(typeof weight==='number')
        return weight * 2.2;
    else{
        return parseInt(weight) * 2.2;
    }
}

kgToLbs(10);
kgToLbs("10kg")
console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));