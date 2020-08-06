var mainName = ["Gagan", "Har", "Bal", "Man", "Nav", "Sukh", "Kush", "Gur", "Karam", "Karan", "Dil", "Dharam", "Param", "Dal", "Jas"];
var maleSuffix = ["jeet", "jyot", "vinder", "preet", "meet"];
var femaleSuffix = ["preet", "jeet", "bir"];
let unionSuffix = [...maleSuffix, ...femaleSuffix];

exports.randomName = function (){
    var indexMain = Math.floor(Math.random()*mainName.length);
    var s1 = mainName[indexMain];
    var s2 = unionSuffix[Math.floor(Math.random()*unionSuffix.length)];
    return s1+s2;
}

exports.maleName = function (){
    var indexMain = Math.floor(Math.random()*mainName.length);
    var s1 = mainName[indexMain];
    var s2 = maleSuffix[Math.floor(Math.random()*maleSuffix.length)];
    return s1+s2;
}

exports.femaleName = function (){
    var indexMain = Math.floor(Math.random()*mainName.length);
    var s1 = mainName[indexMain];
    var s2 = femaleSuffix[Math.floor(Math.random()*femaleSuffix.length)];
    return s1+s2;
}

