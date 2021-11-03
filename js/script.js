
function getDegree(num, degree = 1) {
    //if (num.trim() === '' || isNaN(num) || num === null ) return ('some error');
    //if (degree.trim() === '' || isNaN(degree) || degree === null ) return ('some error');
    if (typeof num !== 'number' && isNaN(num)) return ('some error');
    if (typeof degree !== 'number' && isNaN(degree)) return ('some error');
    return alert(Math.pow(num,degree));
    
}
let num = +prompt('введите число');
let degree = +prompt('введите желаемую степень');
getDegree(num,degree);




