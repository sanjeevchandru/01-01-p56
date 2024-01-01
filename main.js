document.write("19. to check whether a given integer is within 20 of 100 or 400. "+"<br>");
function test19(n){
    if((100-n)<=20 ||(400-n)<=20){
        return true;
    }
    return false;
}
document.write("The number is : 90 ,ans : "+test19(90)+"<br>");
document.write("The number is : 390 ,ans : "+test19(390)+"<br>");
document.write("The number is : 10 ,ans : "+test19(10)+"<br>");
document.write("The number is : 60 ,ans : "+test19(60)+"<br><br>");