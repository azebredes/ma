var DATA = [
     "A Cobra eltitkolja."
,    "Mélyre kell ásni. Nem csak magadban, a Földben is."
,    "A sötétből Fény lesz."
,    "Veszitek? Remélem célba ér az üzenet."
,    "Mire ezt megkapjátok a mi csillagunk már kialszik."
,	 "Cél: 2092 CA4"
,	 "Találkozási pont: Latitude: -52.92176, Longitude: -60.23553, Distortion: 2.75"
,	 "Gyere értem: Latitude: 41.05718, Longitude: 0.76132, Distortion: 1.76"
,	 "Érkezési állomás Latitude: -20.72300, Longitude: 25.09719, Distortion: 1.14"
,	 "Sikeres landolás: 01.22.2148 14:33 UTC"
, 	 "Chemtrail permetezéssel írtanak titeket!!"
,	 "Biztonságban vagy?"
,	 "Vigyázz!"
,	 "Megközelítés közben tapasztalt anomália: Az aszteroida felszínén mesterségesnek tűnő szerkezeti eltérések."
,	 "Helyszíni scan megerősítette; aktív bányászati tevékenység folyik az 2092 CA4-en. Részletes jelentés később."
,	 "A No. 143 SRMCP készenlétbe helyezte védelmi rendszereit, majd megkezdte a szokásos kitermelési procedúra előkészületeit."
,	 "Ellenséges fellépés nem tapasztalható."
,	 "Az emberiség jövője a magyarok kezében van."
,	 "Itt vagyunk. Jelentést kérek!"
,	 "A hivatalos űrjegyzék szerint a 2092 CA4 érintetlen. Q2-es besorolású fémlelőhely. Kizárólagos kiaknázási jog tulajdonosa: Supra Mars Corp."
];
var CACHE = [];

var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

function textToBin(text) {
  var length = text.length,
      output = [];
  for (var i = 0;i < length; i++) {
    var bin = text[i].charCodeAt().toString(2);
    output.push(Array(8-bin.length+1).join("0") + bin);
  } 
  return output.join(" ");
}

function getRandom(min, max) {
  return Math.floor((Math.random() * max) + min);
}

function getData() {
	var index = getRandom(0, DATA.length)
	
	if(CACHE.length == DATA.length) {
		CACHE = []
		return getData()
	} else if(CACHE.indexOf(index) == -1) {
		CACHE.push(index)

		var rand = getRandom(0, 15)
		if(rand < 2) {
			return Base64.encode(DATA[index])
		} else if (rand < 3) {
			return textToBin(DATA[index])
		}
		return DATA[index]
	} else {
		return getData()
	}
}