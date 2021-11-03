
function getDegree(num, degree = 1) {
    if (isNaN(num)) {
      return alert ('some error'); 
    }
     if (isNaN(degree)) {
        return alert ('some error');
    }
    return alert(Math.pow(num,degree));
    
}
let num = +prompt('введите число');
let degree = +prompt('введите желаемую степень');
getDegree(num,degree);




