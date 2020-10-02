var {Punjabi, Marathi, Bengali, Gujarati, Marwari} = require('./names')

//Punjabi

var mainNamePunjabi = Punjabi.mainNamePunjabi;
var maleSuffixPunjabi = Punjabi.maleSuffixPunjabi;
var femaleSuffixPunjabi = Punjabi.femaleSuffixPunjabi;
let unionSuffixPunjabi = Punjabi.unionSuffixPunjabi;

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

var malemarathi = Marathi.malemarathi;
var femalemarathi = Marathi.femalemarathi;
var unionSuffixMarathi = Marathi.unionSuffixMarathi;

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

//Bengali

var malebengali = Bengali.malebengali;
var femalebengali = Bengali.femalebengali;
var unionSuffixBengali = Bengali.unionSuffixBengali;

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

//Gujarati

var malegujarati = Gujarati.malegujarati;
var femalegujarati = Gujarati.femalegujarati;
var unionSuffixGujarati = Gujarati.unionSuffixGujarati;

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

// Marwari

var malemarwari = Marwari.malemarwari;
var femalemarwari = Marwari.femalemarwari;
var unionSuffixMarwari = Marwari.unionSuffixMarwari;

exports.randomMarwari = function() {
    var randomIndex = Math.floor(Math.random()*unionSuffixMarwari.length);
    return unionSuffixMarwari[randomIndex];
}

exports.maleMarwari = function() {
    var randomIndex = Math.floor(Math.random()*malemarwari.length);
    return malemarwari[randomIndex];
}

exports.femaleMarwari = function() {
    var randomIndex = Math.floor(Math.random()*femalemarwari.length);
    return femalemarwari[randomIndex];
}



