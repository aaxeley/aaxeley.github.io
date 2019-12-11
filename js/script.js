//HAMILTON
var ham = document.getElementById("hamInfo");
var btn = document.getElementById("btnHam");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    ham.style.display = "block";
};
span.onclick = function() {
    ham.style.display = "none";
};

window.onclick = function(event) {
    ham.style.display = "none";
};

//BOTTAS
var bot = document.getElementById("botInfo");
var btn = document.getElementById("btnBot");
var span = document.getElementsByClassName("close")[1];

btn.onclick = function() {
    bot.style.display = "block";
};
span.onclick = function() {
    bot.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == bot) {
        bot.style.display = "none";
    }
};

//VETTEL
var vet = document.getElementById("vetInfo");
var btn = document.getElementById("btnVet");
var span = document.getElementsByClassName("close")[2];

btn.onclick = function() {
    vet.style.display = "block";
};
span.onclick = function() {
    vet.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == vet) {
        vet.style.display = "none";
    }
};

//LECLERC
var lec = document.getElementById("lecInfo");
var btn = document.getElementById("btnLec");
var span = document.getElementsByClassName("close")[3];

btn.onclick = function() {
    lec.style.display = "block";
};
span.onclick = function() {
    lec.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == lec) {
        lec.style.display = "none";
    }
};

//VERSTAPPEN
var ver = document.getElementById("verInfo");
var btn = document.getElementById("btnVer");
var span = document.getElementsByClassName("close")[4];

btn.onclick = function() {
    ver.style.display = "block";
};
span.onclick = function() {
    ver.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == ver) {
        ver.style.display = "none";
    }
};

//ALBON
var alb = document.getElementById("albInfo");
var btn = document.getElementById("btnAlb");
var span = document.getElementsByClassName("close")[5];

btn.onclick = function() {
    alb.style.display = "block";
};
span.onclick = function() {
    alb.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == alb) {
        alb.style.display = "none";
    }
};

//RICCARDO
var ric = document.getElementById("ricInfo");
var btn = document.getElementById("btnRic");
var span = document.getElementsByClassName("close")[6];

btn.onclick = function() {
    ric.style.display = "block";
};
span.onclick = function() {
    ric.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == ric) {
        ric.style.display = "none";
    }
};

//HULKINBERG
var hulk = document.getElementById("hulInfo");
var btn = document.getElementById("btnHul");
var span = document.getElementsByClassName("close")[7];

btn.onclick = function() {
    hulk.style.display = "block";
};
span.onclick = function() {
    hulk.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == hulk) {
        ulk.style.display = "none";
    }
};

//SAINZ
var sai = document.getElementById("saiInfo");
var btn = document.getElementById("btnSai");
var span = document.getElementsByClassName("close")[8];

btn.onclick = function() {
    sai.style.display = "block";
};
span.onclick = function() {
    sai.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == sai) {
        sai.style.display = "none";
    }
};

//NORRIS
var nor = document.getElementById("norInfo");
var btn = document.getElementById("btnNor");
var span = document.getElementsByClassName("close")[9];

btn.onclick = function() {
    nor.style.display = "block";
};
span.onclick = function() {
    nor.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == nor) {
        nor.style.display = "none";
    }
};

//PEREZ
var per = document.getElementById("perInfo");
var btn = document.getElementById("btnPer");
var span = document.getElementsByClassName("close")[10];

btn.onclick = function() {
    per.style.display = "block";
};
span.onclick = function() {
    per.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == per) {
        per.style.display = "none";
    }
};

//STROLL
var str = document.getElementById("strInfo");
var btn = document.getElementById("btnStr");
var span = document.getElementsByClassName("close")[11];

btn.onclick = function() {
    str.style.display = "block";
};
span.onclick = function() {
    str.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == str) {
        str.style.display = "none";
    }
};

//KVYAT
var kvy = document.getElementById("kvyInfo");
var btn = document.getElementById("btnKvy");
var span = document.getElementsByClassName("close")[12];

btn.onclick = function() {
    kvy.style.display = "block";
};
span.onclick = function() {
    kvy.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == kvy) {
        kvy.style.display = "none";
    }
};

//GASLY
var gas = document.getElementById("gasInfo");
var btn = document.getElementById("btnGas");
var span = document.getElementsByClassName("close")[13];

btn.onclick = function() {
    gas.style.display = "block";
};
span.onclick = function() {
    gas.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == gas) {
        gas.style.display = "none";
    }
};

//RAIKKONEN
var rai = document.getElementById("raiInfo");
var btn = document.getElementById("btnRai");
var span = document.getElementsByClassName("close")[14];

btn.onclick = function() {
    rai.style.display = "block";
};
span.onclick = function() {
    rai.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == rai) {
        rai.style.display = "none";
    }
};

//GIOVINACCI
var gio = document.getElementById("gioInfo");
var btn = document.getElementById("btnGio");
var span = document.getElementsByClassName("close")[15];

btn.onclick = function() {
    gio.style.display = "block";
};
span.onclick = function() {
    gio.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == gio) {
        gio.style.display = "none";
    }
};

//GROJEAN
var gro = document.getElementById("groInfo");
var btn = document.getElementById("btnGro");
var span = document.getElementsByClassName("close")[16];

btn.onclick = function() {
    gro.style.display = "block";
};
span.onclick = function() {
    gro.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == gro) {
        gro.style.display = "none";
    }
};

//MAGNUSSEN
var mag = document.getElementById("magInfo");
var btn = document.getElementById("btnMag");
var span = document.getElementsByClassName("close")[17];

btn.onclick = function() {
    mag.style.display = "block";
};
span.onclick = function() {
    mag.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == mag) {
        mag.style.display = "none";
    }
};

//RUSSEL
var rus = document.getElementById("rusInfo");
var btn = document.getElementById("btnRus");
var span = document.getElementsByClassName("close")[18];

btn.onclick = function() {
    rus.style.display = "block";
};
span.onclick = function() {
    rus.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == rus) {
        rus.style.display = "none";
    }
};

//KUBICA
var kub = document.getElementById("kubInfo");
var btn = document.getElementById("btnKub");
var span = document.getElementsByClassName("close")[19];

btn.onclick = function() {
    kub.style.display = "block";
};
span.onclick = function() {
    kub.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == kub) {
        kub.style.display = "none";
    }
};



function anichange (objName) {
    if ( $(objName).css('display') == 'none' ) {
    $(objName).animate({height: 'show'}, 3500);
    } else {
    $(objName).animate({height: 'hide'}, 400);
    }
}