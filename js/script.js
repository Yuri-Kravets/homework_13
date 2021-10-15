
function getDegree(num, degree = 1) {
    if (num === null || isNaN(num) || num < 1) {
      return alert ('some error'); 
    } else if (degree === null || isNaN(degree)) {
        return alert ('some error');
    }
      alert(Math.pow(num,degree));
    return
}
let num = +prompt('введите число');
let degree = +prompt('введите желаемую степень');
getDegree(num,degree);




