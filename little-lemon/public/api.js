 seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

 fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());
    let i
    for(i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    if(date.getMonth() != (new Date()).getMonth()) result.push(i+':00');
    return result;
};
 submitAPI = function(formData) {
    return true;
};

function aa(){
    return 'aa'
}