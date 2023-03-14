function Format(value){
    const result =  new Intl.NumberFormat(
        {currency: "CLP",
        value
}).format(value)

    return result
}
/* total1 */
let venta1 = document.getElementById("ventas1").textContent;
venta1 = venta1.replace("$", "")
venta1 = venta1.replace(".", "")
let gastos1 = document.getElementById("gastos1").textContent;
gastos1 = gastos1.replace("$", "")
gastos1 = gastos1.replace(".", "")
let total1 = parseInt(venta1) - parseInt(gastos1); 
 document.getElementById("total1").innerHTML = `$${Format(total1)}`; 

 /* total2 */
let venta2 = document.getElementById("ventas2").textContent;
venta2 = venta2.replace("$", "")
venta2 = venta2.replace(".", "")
let gastos2 = document.getElementById("gastos2").textContent;
gastos2 = gastos2.replace("$", "")
gastos2 = gastos2.replace(".", "")
let total2 = parseInt(venta2) - parseInt(gastos2); 
 document.getElementById("total2").innerHTML = `$${Format(total2)}`; 

 /* total3 */
let venta3 = document.getElementById("ventas3").textContent;
venta3 = venta3.replace("$", "")
venta3 = venta3.replace(".", "")
let gastos3 = document.getElementById("gastos3").textContent;
gastos3 = gastos3.replace("$", "")
gastos3 = gastos3.replace(".", "")
let total3 = parseInt(venta3) - parseInt(gastos3); 
document.getElementById("total3").innerHTML = `$${Format(total3)}`; 

/* total Ventas */
document.getElementById("totalVentas").innerHTML = `$${Format(parseInt(venta1)+parseInt(venta2)+parseInt(venta3))}`; 
/* total Gastos */
document.getElementById("totalGastos").innerHTML = `$${Format(parseInt(gastos1)+parseInt(gastos2)+parseInt(gastos3))}`; 
/* total Beneficios */
document.getElementById("totalBeneficios").innerHTML = `$${Format(total1+total2+total3)}`; 

123


