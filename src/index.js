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
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
var customer = getCustomer(0);
if (customer !== null)
    console.log(customer.birthday);
