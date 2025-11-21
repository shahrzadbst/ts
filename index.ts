function kgToLbs(weight:number|string){
    if (typeof weight === 'number')
        return weight*2.2;
    else
        return parseInt(weight)

}
