module.exports = function solveEquation(equation) {
    var arr_rez = [];
    var arr = equation.split(' ');
    var a = parseInt(arr[0]);
    var b = parseInt(arr[4]);
    if(arr[3] == '-') b*=-1;
    var c = parseInt(arr[8]);
    if(arr[7] == '-') c*=-1;
    var d = Math.pow(b, 2) - 4*a*c;

    if (d>=0){
        arr_rez.push(Math.round((b*-1 + Math.sqrt(d))/(2*a)));
        if (d>0){
            arr_rez.push(Math.round((b*-1 - Math.sqrt(d))/(2*a)));
        };
    };

    return arr_rez.sort(function sor_arr(a, b) { return a - b; });
};
