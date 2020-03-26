var ccErrorNo = 0;
var ccErrors = new Array;
ccErrors[0] = "Tipo de tarjeta desconocido";
ccErrors[1] = "No se a indicado un número de tarjeta";
ccErrors[2] = "Número de tarjeta  formato inválido";
ccErrors[3] = "Número de tarjeta inválida";
ccErrors[4] = "Número de tarjeta tiene números correctos";
ccErrors[5] = "Número de tarjeta es falsa";
var visaPrefixList = new Array("4539", "4556", "4916", "4532", "4929", "40240071", "4485", "4716", "4");
var mastercardPrefixList = new Array("51", "52", "53", "54", "55");
var amexPrefixList = new Array("34", "37");
var discoverPrefixList = new Array("6011");
var dinersPrefixList = new Array("300", "301", "302", "303", "36", "38");
var enRoutePrefixList = new Array("2014", "2149");
var jcbPrefixList = new Array("3088", "3096", "3112", "3158", "3337", "3528");
var voyagerPrefixList = new Array("8699");
var dinersNorthAmericaPrefixList = new Array("54", "55");
var dinersCarteBlanchePrefixList = new Array("300", "301", "302", "303", "304", "305");
var dinersInternationalPrefixList = new Array("36");
var laserPrefixList = new Array("6304", "6706", "6771", "6709");
var visaElectronPrefixList = new Array("4026", "417500", "4508", "4844", "4913", "4917");
var maestroPrefixList = new Array("5018", "5020", "5038", "5893", "6304", "6759", "6761", "6762", "6763", "0604");
var instaPaymentPrefixList = new Array("637", "638", "639");

function validCard(tarjeta) {
    var type = new Array("amex", "dinersclub", "maestro", "mastercard", "visa", "visa electron", "cabal");
    var result = null;
    for (let i = 0; i < type.length; i++) {
        element = type[i];
        if (checkCreditCard(tarjeta, element)) {
            return element;
        }
    }
    return 0;
}

function checkCreditCard(r, e) {
    var t = new Array;
    t[0] = {
        name: "Visa",
        length: "13,16",
        prefixes: "4",
        checkdigit: !0
    }, t[1] = {
        name: "MasterCard",
        length: "16",
        prefixes: "51,52,53,54,55",
        checkdigit: !0
    }, t[2] = {
        name: "DinersClub",
        length: "14,16",
        prefixes: "36,38",
        checkdigit: !0
    }, t[3] = {
        name: "CarteBlanche",
        length: "14",
        prefixes: "300,301,302,303,304,305",
        checkdigit: !0
    }, t[4] = {
        name: "AmEx",
        length: "15",
        prefixes: "34,37",
        checkdigit: !0
    }, t[5] = {
        name: "Discover",
        length: "16",
        prefixes: "6011,622,64,65",
        checkdigit: !0
    }, t[6] = {
        name: "JCB",
        length: "16",
        prefixes: "35",
        checkdigit: !0
    }, t[7] = {
        name: "enRoute",
        length: "15",
        prefixes: "2014,2149",
        checkdigit: !0
    }, t[8] = {
        name: "Solo",
        length: "16,18,19",
        prefixes: "6334,6767",
        checkdigit: !0
    }, t[9] = {
        name: "Switch",
        length: "16,18,19",
        prefixes: "4903,4905,4911,4936,564182,633110,6333,6759",
        checkdigit: !0
    }, t[10] = {
        name: "Maestro",
        length: "12,13,14,15,16,18,19",
        prefixes: "5018,5020,5038,6304,6759,6761,6762,6763",
        checkdigit: !0
    }, t[11] = {
        name: "VisaElectron",
        length: "16",
        prefixes: "4058,4061,4062,4063,4066,4069,4071,4081,4085,4100,4101,4108,4118,4129,4280,4297,4304,4310,4322,4463,4468,4491,4504,4508,4509,4513,4517,4521,4553,4166,4168,4173,4178,4190,4200,4215,4231,4232,4234,4236,4249,4026,417500,4844,4917",
        checkdigit: !0
    }, t[12] = {
        name: "LaserCard",
        length: "16,17,18,19",
        prefixes: "6304,6706,6771,6709",
        checkdigit: !0
    }, t[13] = {
        name: "cabal",
        length: "16",
        prefixes: "5896,6042",
        checkdigit: !0
    };
    for (var i = -1, c = 0; c < t.length; c++)
        if (e.toLowerCase() == t[c].name.toLowerCase()) {
            i = c
            break
        }
    if (-1 == i) return ccErrorNo = 0, !1;
    if (0 == r.length) return !(ccErrorNo = 1);
    var a = r = r.replace(/\s/g, "");
    if (!/^[0-9]{13,19}$/.exec(a)) return !(ccErrorNo = 2);
    if (t[i].checkdigit) {
        var n, s = 0,
            d = 1;
        for (c = a.length - 1; 0 <= c; c--) 9 < (n = Number(a.charAt(c)) * d) && (s += 1, n -= 10), s += n, d = 1 == d ? 2 : 1;
        if (s % 10 != 0) return !(ccErrorNo = 3)
    }
    if ("5490997771092064" == a) return !(ccErrorNo = 5);
    var o = !1,
        x = !1,
        m = new Array,
        f = new Array;
    for (m = t[i].prefixes.split(","), c = 0; c < m.length; c++) {
        new RegExp("^" + m[c]).test(a) && (x = !0)
    }
    if (!x) return !(ccErrorNo = 3);
    for (f = t[i].length.split(","), d = 0; d < f.length; d++) a.length == f[d] && (o = !0);
    return !!o || !(ccErrorNo = 4)
}

function urlsitio() {
    return window.location.protocol + '//' + window.location.hostname;
}

function validarinputs(input) {
    let invalidtext = $(input).siblings('div');
    if (input.checkValidity()) {
        $(input).removeClass("is-invalid").addClass("is-valid");
        invalidtext.css("display", "none");
    } else {
        $(input).removeClass("is-valid").addClass("is-invalid");
        invalidtext.css("display", "block");
    }
}

function formatCard(cardtype, number) {
    var format;
    if (cardtype == 'amex') {
        format = number.substr(0, 4) + " " + number.substr(4, 6) + " " + number.substr(10, 5);
    } else {
        format = number.substr(0, 4) + " " + number.substr(4, 4) + " " + number.substr(8, 4) + " " + number.substr(12, 4);
    }
    return format;
}

function luhn(num) {
    num = (num + '').replace(/\D+/g, '').split('').reverse();
    if (!num.length) {
        return false;
    }
    var total = 0,
        i;
    for (i = 0; i < num.length; i++) {
        num[i] = parseInt(num[i]);
        total += i % 2 ? 2 * num[i] - (num[i] > 4 ? 9 : 0) : num[i];
    }
    return (total % 10) == 0;
}

module.exports = {
    luhn: luhn,
    formatCard: formatCard,
    urlsitio:urlsitio,
    validCard:validCard
};