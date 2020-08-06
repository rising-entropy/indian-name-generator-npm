//Punjabi

var mainNamePunjabi = ["Gagan", "Har", "Bal", "Man", "Nav", "Sukh", "Kush", "Gur", "Karam", "Karan", "Dil", "Dharam", "Param", "Dal", "Jas", "Par", "Dul", ""];
var maleSuffixPunjabi = ["jeet", "jyot", "vinder", "preet", "meet"];
var femaleSuffixPunjabi = ["preet", "jeet", "bir"];
let unionSuffixPunjabi = [...maleSuffixPunjabi, ...femaleSuffixPunjabi];

exports.randomPunjabi = function () {
    var indexMain = Math.floor(Math.random() * mainNamePunjabi.length);
    var s1 = mainNamePunjabi[indexMain];
    var s2 = unionSuffixPunjabi[Math.floor(Math.random() * unionSuffixPunjabi.length)];
    return s1 + s2;
}

exports.malePunjabi = function () {
    var indexMain = Math.floor(Math.random() * mainNamePunjabi.length);
    var s1 = mainNamePunjabi[indexMain];
    var s2 = maleSuffixPunjabi[Math.floor(Math.random() * maleSuffixPunjabi.length)];
    return s1 + s2;
}

exports.femalePunjabi = function () {
    var indexMain = Math.floor(Math.random() * mainNamePunjabi.length);
    var s1 = mainNamePunjabi[indexMain];
    var s2 = femaleSuffixPunjabi[Math.floor(Math.random() * femaleSuffixPunjabi.length)];
    return s1 + s2;
}


//Marathi

var maleMarathi = ["Aarav", "Kshitij", "Shantanu", "Onkar", "Aniket", "Atharva", "Prajwal", "Yash", "Abhijeet", "Ganesh", "Sachin", "Prathamesh", "Vaibhav", "Ninad", "Mihir", "Tejas", "Suyash", "Sanket", "Devang", "Darshan", "Soham", "Rohit"];
var femaleMarathi = ["Vaishnavi", "Maithili", "Pooja", "Smital", "Shivani", "Veerja", "Shruti", "Aditi", "Manali"];
var unionSuffixMarathi = [...maleMarathi, ...femaleMarathi];

exports.randomMarathi = function() {
    var randomIndex = Math.floor(Math.random()*unionSuffixMarathi.length);
    return unionSuffixMarathi[randomIndex];
}

exports.maleMarathi = function() {
    var randomIndex = Math.floor(Math.random()*maleMarathi.length);
    return maleMarathi[randomIndex];
}

exports.femaleMarathi = function() {
    var randomIndex = Math.floor(Math.random()*femaleMarathi.length);
    return femaleMarathi[randomIndex];
}



//