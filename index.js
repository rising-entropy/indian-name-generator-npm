//Punjabi

var mainNamePunjabi = ["Gagan", "Har", "Bal", "Man", "Nav", "Sukh", "Kush", "Gur", "Karam", "Karan", "Dil", "Dharam", "Param", "Dal", "Jas", "Par", "Dul"];
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

var malemarathi = ["Aarav", "Kshitij", "Shantanu", "Onkar", "Aniket", "Atharva", "Prajwal", "Yash", "Abhijeet", "Ganesh", "Sachin", "Prathamesh", "Vaibhav", "Ninad", "Mihir", "Tejas", "Suyash", "Sanket", "Devang", "Darshan", "Soham", "Rohit", "Manish", "Aadesh", "Siddhesh",
"Aakash", "Anmol", "Chaitanya", "Dharmesh", "Gagan", "Gaurav", "Gopal", "Ishan", "Mehul", "Om", "Rahul", "Sandesh", "Tanmay", "Tushar", "Utkarsh",
"Vedang", "Varun", "Vinay", "Vivek", "Yogesh"];
var femalemarathi = ["Vaishnavi", "Maithili", "Pooja", "Smital", "Shivani", "Veerja", "Shruti", "Aditi", "Manali", "Anuja", "Pranali", "Saloni",
"Aabha", "Aakriti", "Aruni", "Akanksha", "Akshata", "Aboli", "Ankita", "Chaitrali", "Divya", "Dhriti", "Gargi", "Gayatri", "Gauravi", "Gautami", "Isha", "Ishika",
"Kajal", "Kalyani", "Neha", "Nishi", "Tanvi", "Yuti"];
var unionSuffixMarathi = [...malemarathi, ...femalemarathi];

exports.randomMarathi = function() {
    var randomIndex = Math.floor(Math.random()*unionSuffixMarathi.length);
    return unionSuffixMarathi[randomIndex];
}

exports.maleMarathi = function() {
    var randomIndex = Math.floor(Math.random()*malemarathi.length);
    return malemarathi[randomIndex];
}

exports.femaleMarathi = function() {
    var randomIndex = Math.floor(Math.random()*femalemarathi.length);
    return femalemarathi[randomIndex];
}



//bengali

var malebengali = ["Abhik", "Abhoy", "Achintya", "Arnab", "Benoy", "Bhaskor",
"Bipin", "Daiwik", "Debesh", "Hrishab", "Indroneel", "Palash", "Paritosh", "Shirshendu", "Shubhang",
"Sourav", "Subrata", "Tapan", "Gairik", "Ujjwal"];
var femalebengali = ["Ankolika", "Arundhati", "Bidisha", "Bibhuti", "Bipasha", "Chaitali", "Debjani", "Debolina", "Drishti", "Durba", "Joyeeta", "Kajol", "Kshamya", "Indrani", "Lotika", "Mishti",
"Naisha", "Pakhi", "Paromita", "Piyali", "Sagarika", "Shorbari", "Shoma", "Sushmita", "Tavishi", "Tvisha", "Yoshita"];
var unionSuffixBengali = [...malebengali, ...femalebengali];

exports.randomBengali = function() {
    var randomIndex = Math.floor(Math.random()*unionSuffixBengali.length);
    return unionSuffixBengali[randomIndex];
}

exports.maleBengali = function() {
    var randomIndex = Math.floor(Math.random()*malebengali.length);
    return malebengali[randomIndex];
}

exports.femaleBengali = function() {
    var randomIndex = Math.floor(Math.random()*femalebengali.length);
    return femalebengali[randomIndex];
}

//gujarati

var malegujarati = ["Dhaval", "Haanish", "Herik", "Jigar", "Jignesh", "Joshil", "Mukund", "Munjal", "Oresh", "Prakat", "Pratul",
"Praful", "Praveen", "Prerit", "Devang", "Pujesh", "Raghubeer", "Sanam", "Yaksh", "Ahem", "Yug", "Yuvan", "Ronak"];
var femalegujarati = ["Hinal", "Hiral", "Havya", "Jaimini", "Komal", "Jigna", "Raashi", "Kavya", "Nutan", "Pranauthi", "Puruvi",
"Tanishka", "Vaishnavi", "Vanshi", "Vrishti", "Vritika", "Kanchan"];
var unionSuffixGujarati = [...malegujarati, ...femalegujarati];

exports.randomGujarati = function() {
    var randomIndex = Math.floor(Math.random()*unionSuffixGujarati.length);
    return unionSuffixGujarati[randomIndex];
}

exports.maleGujarati = function() {
    var randomIndex = Math.floor(Math.random()*malegujarati.length);
    return malegujarati[randomIndex];
}

exports.femaleGujarati = function() {
    var randomIndex = Math.floor(Math.random()*femalegujarati.length);
    return femalegujarati[randomIndex];
}

