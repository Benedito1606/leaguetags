//
// Copyright (c) 2019 by Storb & Break. All Rights Reserved.
//

var currentVersion = 0.4
var gameVersion

const electron = require('electron')
const {
  ipcRenderer
} = electron

var isActive

var selectedDivision = ""
var selectedLevel
var preto
 

function clubChange() {
  clubData = document.getElementById("clubData").value
  selectedDivision = clubData
}

function tierChange() {
  tier = document.getElementById("tier").value
  selectedTier = tier
}

function queueChanger() {
  queue = document.getElementById("queue").value
  selectedQueue = queue
}

function regionChanger(){

  region = document.getElementById("region").value;
  selectedRegion = region;

  
}



function localeChanger(){ // server

  locale = document.getElementById("locale").value;
  selectedRegion = locale;

  
}

function divisionChange() {
  division = document.getElementById("division").value
  selectedDivision = division
}

function submitTierDivison() {

  if (selectedTier == "GOTCHA") {
    selectedDivision = "";
  } else {
    division = document.getElementById("division").value;
    selectedDivision = division;
    queue = document.getElementById("queue").value;
    selectedQueue = queue;
  }

  ipcRenderer.send('submitTierDivison', selectedTier, selectedDivision, selectedQueue);
}


function submitRegion() {


    region = document.getElementById("region").value;
    locale = document.getElementById("locale").value;
    selectedLocale = locale;
    selectedRegion = region;

/*
  <option value="en_US">English</option>
  <option value="pt_BR">Portuguese</option>
  <option value="ja_JP">Japanese</option>
  <option value="es_MX">Spanish</option>
  <option value="ru_RU">Russian</option>s


    if(region == "pt_BR"){

    locale = "BR";

  }else if(region == "es_MX"){

    locale = "LA2";

  }else if(region == "ja_JP"){

    locale = "LA2";

  }else if(region == "es_MX"){

    locale = "LA2";

  }else if(region == "es_MX"){

    locale = "LA2";

  } */

  ipcRenderer.send('submitRegion', selectedRegion, locale);
}



function submitTagData() {

    division = document.getElementById("clubData").value;
    selectedDivision = clubData;
    ipcRenderer.send('submitTagData', selectedDivision);
}

function submitLeagueName() {
  leagueName = document.getElementById("leagueName").value;
  ipcRenderer.send('submitLeagueName', leagueName);
}

let submitedLevel;
function submitLevel() {
  level = document.getElementById("level").value;
  ipcRenderer.send('submitLevel', level);
  submitedLevel = level;
}

function submitStatus() {
  status = document.getElementById("status").value;

  if (document.getElementById("italics").checked && document.getElementById("bold").checked) {

    // 𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧 𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍

    var bold_italics = {
      a: '\u{1d622}',
      b: '\u{1d623}',
      c: '\u{1d624}',
      d: '\u{1d625}',
      e: '\u{1d626}',
      f: '\u{1d627}',
      g: '\u{1d628}',
      h: '\u{1d629}',
      i: '\u{1d62a}',
      j: '\u{1d62b}',
      k: '\u{1d62c}',
      l: '\u{1d62d}',
      m: '\u{1d62e}',
      n: '\u{1d62f}',
      o: '\u{1d630}',
      p: '\u{1d631}',
      q: '\u{1d632}',
      r: '\u{1d633}',
      s: '\u{1d634}',
      t: '\u{1d635}',
      u: '\u{1d636}',
      v: '\u{1d637}',
      w: '\u{1d638}',
      x: '\u{1d639}',
      y: '\u{1d63a}',
      z: '\u{1d63b}',
      A: '\u{1d608}',
      B: '\u{1d609}',
      C: '\u{1d60a}',
      D: '\u{1d60b}',
      E: '\u{1d60c}',
      F: '\u{1d60d}',
      G: '\u{1d60e}',
      H: '\u{1d60f}',
      I: '\u{1d610}',
      J: '\u{1d611}',
      K: '\u{1d612}',
      L: '\u{1d613}',
      M: '\u{1d614}',
      N: '\u{1d615}',
      O: '\u{1d616}',
      P: '\u{1d617}',
      Q: '\u{1d618}',
      R: '\u{1d619}',
      S: '\u{1d61a}',
      T: '\u{1d61b}',
      U: '\u{1d61c}',
      V: '\u{1d61d}',
      W: '\u{1d61e}',
      X: '\u{1d61f}',
      Y: '\u{1d620}',
      Z: '\u{1d621}'
    }

    var length = status.length
    var result = new Array(length)

    for (var i = 0; i < length; i++) {
      var c = status.charAt(i)
      var r = bold_italics[c]

      result[i] = r != undefined ? r : c
    }

    var status_converted = result.join('')

  } else if (document.getElementById("italics").checked) {

    // 𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧 𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍

    var italics = {
      a: '\u{1d622}',
      b: '\u{1d623}',
      c: '\u{1d624}',
      d: '\u{1d625}',
      e: '\u{1d626}',
      f: '\u{1d627}',
      g: '\u{1d628}',
      h: '\u{1d629}',
      i: '\u{1d62a}',
      j: '\u{1d62b}',
      k: '\u{1d62c}',
      l: '\u{1d62d}',
      m: '\u{1d62e}',
      n: '\u{1d62f}',
      o: '\u{1d630}',
      p: '\u{1d631}',
      q: '\u{1d632}',
      r: '\u{1d633}',
      s: '\u{1d634}',
      t: '\u{1d635}',
      u: '\u{1d636}',
      v: '\u{1d637}',
      w: '\u{1d638}',
      x: '\u{1d639}',
      y: '\u{1d63a}',
      z: '\u{1d63b}',
      A: '\u{1d608}',
      B: '\u{1d609}',
      C: '\u{1d60a}',
      D: '\u{1d60b}',
      E: '\u{1d60c}',
      F: '\u{1d60d}',
      G: '\u{1d60e}',
      H: '\u{1d60f}',
      I: '\u{1d610}',
      J: '\u{1d611}',
      K: '\u{1d612}',
      L: '\u{1d613}',
      M: '\u{1d614}',
      N: '\u{1d615}',
      O: '\u{1d616}',
      P: '\u{1d617}',
      Q: '\u{1d618}',
      R: '\u{1d619}',
      S: '\u{1d61a}',
      T: '\u{1d61b}',
      U: '\u{1d61c}',
      V: '\u{1d61d}',
      W: '\u{1d61e}',
      X: '\u{1d61f}',
      Y: '\u{1d620}',
      Z: '\u{1d621}'
    }

    var length = status.length
    var result = new Array(length)

    for (var i = 0; i < length; i++) {
      var c = status.charAt(i)
      var r = italics[c]

      result[i] = r != undefined ? r : c
    }

    var status_converted = result.join('')

  } else if (document.getElementById("bold").checked) {

    // 𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇 𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭

    var bold = {
      a: '\u{1d5ee}',
      b: '\u{1d5ef}',
      c: '\u{1d5f0}',
      d: '\u{1d5f1}',
      e: '\u{1d5f2}',
      f: '\u{1d5f3}',
      g: '\u{1d5f4}',
      h: '\u{1d5f5}',
      i: '\u{1d5f6}',
      j: '\u{1d5f7}',
      k: '\u{1d5f8}',
      l: '\u{1d5f9}',
      m: '\u{1d5fa}',
      n: '\u{1d5fb}',
      o: '\u{1d5fc}',
      p: '\u{1d5fd}',
      q: '\u{1d5fe}',
      r: '\u{1d5ff}',
      s: '\u{1d600}',
      t: '\u{1d601}',
      u: '\u{1d602}',
      v: '\u{1d603}',
      w: '\u{1d604}',
      x: '\u{1d605}',
      y: '\u{1d606}',
      z: '\u{1d607}',
      A: '\u{1d5d4}',
      B: '\u{1d5d5}',
      C: '\u{1d5d6}',
      D: '\u{1d5d7}',
      E: '\u{1d5d8}',
      F: '\u{1d5d9}',
      G: '\u{1d5da}',
      H: '\u{1d5db}',
      I: '\u{1d5dc}',
      J: '\u{1d5dd}',
      K: '\u{1d5de}',
      L: '\u{1d5df}',
      M: '\u{1d5e0}',
      N: '\u{1d5e1}',
      O: '\u{1d5e2}',
      P: '\u{1d5e3}',
      Q: '\u{1d5e4}',
      R: '\u{1d5e5}',
      S: '\u{1d5e6}',
      T: '\u{1d5e7}',
      U: '\u{1d5e8}',
      V: '\u{1d5e9}',
      W: '\u{1d5ea}',
      X: '\u{1d5eb}',
      Y: '\u{1d5ec}',
      Z: '\u{1d5ed}'
    }

    var length = status.length
    var result = new Array(length)

    for (var i = 0; i < length; i++) {
      var c = status.charAt(i)
      var r = bold[c]

      result[i] = r != undefined ? r : c
    }

    var status_converted = result.join('')

  } else {

    var status_converted = status

  }


  ipcRenderer.send('submitStatus', status_converted)
}


function submitRiksStatus() {
  status = "███████████████████████████████████████ █████████████▒▀▒█▀█▀█▀▀▒▀███████████████ ██████████─▒█─▀─█▒█──██▀▀██─▀███████████ █████████───█▀█▒█▒█▒▀▀█▀▒█▒──▀██████████ ████████─────█████████████────▀█████████ ███████──────▒███████████──────▒████████ ██████────────▀█████████▒───────▀███████ ██████─────────████████▀────────▀███████ █████████▀───────────────────▀██████████ ████████████──────────────▀█████████████ ████████████──────────────▀█████████████ ███████████▀──▒────────▒▒──█████████████ ██████─▒████──▀██▒───▀██──▀████─▀███████ ██████───████▀─▒▀▒───▀▀──████▀───███████ █████───────▀██────────▀██▀──────▀██████ █████▀███▀▒───▒▀──────▒▀────▀████▀██████ ██████████████▀█▒─────█▀▀███████████████ ██████████████▀▀▀────▒█▀████████████████ █████▀███▀▒─────█────█▀─────▀████▀██████ █████───────▀████▒───████▀▒───────██████ █████▀──▀█████████──▀█████████───███████ ██████▒▒███████████████████████─▀███████";
  if (document.getElementById("italics").checked && document.getElementById("bold").checked) {

    // 𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧 𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍

    var bold_italics = {
      a: '\u{1d622}',
      b: '\u{1d623}',
      c: '\u{1d624}',
      d: '\u{1d625}',
      e: '\u{1d626}',
      f: '\u{1d627}',
      g: '\u{1d628}',
      h: '\u{1d629}',
      i: '\u{1d62a}',
      j: '\u{1d62b}',
      k: '\u{1d62c}',
      l: '\u{1d62d}',
      m: '\u{1d62e}',
      n: '\u{1d62f}',
      o: '\u{1d630}',
      p: '\u{1d631}',
      q: '\u{1d632}',
      r: '\u{1d633}',
      s: '\u{1d634}',
      t: '\u{1d635}',
      u: '\u{1d636}',
      v: '\u{1d637}',
      w: '\u{1d638}',
      x: '\u{1d639}',
      y: '\u{1d63a}',
      z: '\u{1d63b}',
      A: '\u{1d608}',
      B: '\u{1d609}',
      C: '\u{1d60a}',
      D: '\u{1d60b}',
      E: '\u{1d60c}',
      F: '\u{1d60d}',
      G: '\u{1d60e}',
      H: '\u{1d60f}',
      I: '\u{1d610}',
      J: '\u{1d611}',
      K: '\u{1d612}',
      L: '\u{1d613}',
      M: '\u{1d614}',
      N: '\u{1d615}',
      O: '\u{1d616}',
      P: '\u{1d617}',
      Q: '\u{1d618}',
      R: '\u{1d619}',
      S: '\u{1d61a}',
      T: '\u{1d61b}',
      U: '\u{1d61c}',
      V: '\u{1d61d}',
      W: '\u{1d61e}',
      X: '\u{1d61f}',
      Y: '\u{1d620}',
      Z: '\u{1d621}'
    }

    var length = status.length
    var result = new Array(length)

    for (var i = 0; i < length; i++) {
      var c = status.charAt(i)
      var r = bold_italics[c]

      result[i] = r != undefined ? r : c
    }

    var status_converted = result.join('')

  } else if (document.getElementById("italics").checked) {

    // 𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧 𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍

    var italics = {
      a: '\u{1d622}',
      b: '\u{1d623}',
      c: '\u{1d624}',
      d: '\u{1d625}',
      e: '\u{1d626}',
      f: '\u{1d627}',
      g: '\u{1d628}',
      h: '\u{1d629}',
      i: '\u{1d62a}',
      j: '\u{1d62b}',
      k: '\u{1d62c}',
      l: '\u{1d62d}',
      m: '\u{1d62e}',
      n: '\u{1d62f}',
      o: '\u{1d630}',
      p: '\u{1d631}',
      q: '\u{1d632}',
      r: '\u{1d633}',
      s: '\u{1d634}',
      t: '\u{1d635}',
      u: '\u{1d636}',
      v: '\u{1d637}',
      w: '\u{1d638}',
      x: '\u{1d639}',
      y: '\u{1d63a}',
      z: '\u{1d63b}',
      A: '\u{1d608}',
      B: '\u{1d609}',
      C: '\u{1d60a}',
      D: '\u{1d60b}',
      E: '\u{1d60c}',
      F: '\u{1d60d}',
      G: '\u{1d60e}',
      H: '\u{1d60f}',
      I: '\u{1d610}',
      J: '\u{1d611}',
      K: '\u{1d612}',
      L: '\u{1d613}',
      M: '\u{1d614}',
      N: '\u{1d615}',
      O: '\u{1d616}',
      P: '\u{1d617}',
      Q: '\u{1d618}',
      R: '\u{1d619}',
      S: '\u{1d61a}',
      T: '\u{1d61b}',
      U: '\u{1d61c}',
      V: '\u{1d61d}',
      W: '\u{1d61e}',
      X: '\u{1d61f}',
      Y: '\u{1d620}',
      Z: '\u{1d621}'
    }

    var length = status.length
    var result = new Array(length)

    for (var i = 0; i < length; i++) {
      var c = status.charAt(i)
      var r = italics[c]

      result[i] = r != undefined ? r : c
    }

    var status_converted = result.join('')

  } else if (document.getElementById("bold").checked) {

    // 𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇 𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭

    var bold = {
      a: '\u{1d5ee}',
      b: '\u{1d5ef}',
      c: '\u{1d5f0}',
      d: '\u{1d5f1}',
      e: '\u{1d5f2}',
      f: '\u{1d5f3}',
      g: '\u{1d5f4}',
      h: '\u{1d5f5}',
      i: '\u{1d5f6}',
      j: '\u{1d5f7}',
      k: '\u{1d5f8}',
      l: '\u{1d5f9}',
      m: '\u{1d5fa}',
      n: '\u{1d5fb}',
      o: '\u{1d5fc}',
      p: '\u{1d5fd}',
      q: '\u{1d5fe}',
      r: '\u{1d5ff}',
      s: '\u{1d600}',
      t: '\u{1d601}',
      u: '\u{1d602}',
      v: '\u{1d603}',
      w: '\u{1d604}',
      x: '\u{1d605}',
      y: '\u{1d606}',
      z: '\u{1d607}',
      A: '\u{1d5d4}',
      B: '\u{1d5d5}',
      C: '\u{1d5d6}',
      D: '\u{1d5d7}',
      E: '\u{1d5d8}',
      F: '\u{1d5d9}',
      G: '\u{1d5da}',
      H: '\u{1d5db}',
      I: '\u{1d5dc}',
      J: '\u{1d5dd}',
      K: '\u{1d5de}',
      L: '\u{1d5df}',
      M: '\u{1d5e0}',
      N: '\u{1d5e1}',
      O: '\u{1d5e2}',
      P: '\u{1d5e3}',
      Q: '\u{1d5e4}',
      R: '\u{1d5e5}',
      S: '\u{1d5e6}',
      T: '\u{1d5e7}',
      U: '\u{1d5e8}',
      V: '\u{1d5e9}',
      W: '\u{1d5ea}',
      X: '\u{1d5eb}',
      Y: '\u{1d5ec}',
      Z: '\u{1d5ed}'
    }

    var length = status.length
    var result = new Array(length)

    for (var i = 0; i < length; i++) {
      var c = status.charAt(i)
      var r = bold[c]

      result[i] = r != undefined ? r : c
    }

    var status_converted = result.join('')

  } else {

    var status_converted = status

  }


  ipcRenderer.send('submitStatus', status_converted)
}



function submitAvailability() {
  availability = document.getElementById("availability").value
  ipcRenderer.send('submitAvailability', availability)
}

function submitSummoner() {
  summoner = document.getElementById("summoner").value
  ipcRenderer.send('submitSummoner', summoner)
}

function submitLobby() {
  queueId = document.getElementById("queueId").value
  lobbyMembers = document.getElementById("lobbyMembers").value.split(" ")

  if (lobbyMembers) {
    processedMembers = lobbyMembers
  } else {
    processedMembers = []
  }

  ipcRenderer.send('submitLobby', queueId, processedMembers)
}

function submitIcon() {
  icon = document.getElementById("icon").value
  ipcRenderer.send('submitIcon', icon)
}

function submitBack() {
  back = document.getElementById("back").value
  ipcRenderer.send('submitBack', back)
}

function submitCrash() {
  userId = document.getElementById("userId").value
  ipcRenderer.send('submitCrash', userId)
}

function submitCrashNew() {
  nome = document.getElementById("nome").value
  ipcRenderer.send('submitCrashNew', nome)
}


function submitDescrash() {
  nome = document.getElementById("nome").value
  ipcRenderer.send('submitDescrash', nome)
}


function submitInstantMsg() {
  nome = document.getElementById("nome").value
  ipcRenderer.send('submitInstantMsg', nome)
}

function submitWinsLosses() {
  wins = document.getElementById("wins").value
  losses = document.getElementById("losses").value
  ipcRenderer.send('submitWinsLosses', wins, losses)
}

function eventReset() {
  ipcRenderer.send('reset')
}

function exit_app() {
  ipcRenderer.send('exit_app')
}

function minimize_app() {
  ipcRenderer.send('minimize_app')
}

function open_link() {
  ipcRenderer.send('open_link')
}

function ytb() {
  ipcRenderer.send('ytb')
}


async function profileUpdate() {
  let data

  try { 
    data = ipcRenderer.sendSync("profileUpdate")

    if (!data) return
    let rankedTier = data.rankedTier || document.getElementById("profileRankedTier").innerHTML || "Not logged in."
    let leagueName = data.leagueName || document.getElementById("profileLeagueName").innerHTML || ""
    let profileLevel = (data.level) || document.getElementById("profileWL").innerHTML || ""
    let rankedTier1 = data.rankedTier || document.getElementById("profileRankedTier1").innerHTML || "Not logged in."
    let leagueName1 = data.leagueName || document.getElementById("profileLeagueName1").innerHTML || ""
    let profileLevel1 = (data.level) || document.getElementById("profileWL1").innerHTML || ""

    document.getElementById("profileName").innerHTML = data.name
    document.getElementById("profileRankedTier").innerHTML = rankedTier
    document.getElementById("profileLeagueName").innerHTML = leagueName
    document.getElementById("profileLevel").innerHTML = profileLevel
    document.getElementById("profileSummonerIcon").src = "https://ddragon.leagueoflegends.com/cdn/9.17.1" + "/img/profileicon/" + (data.iconID || "1") + ".png"
    document.getElementById("profileName1").innerHTML = data.name
    document.getElementById("profileRankedTier1").innerHTML = rankedTier
    document.getElementById("profileLeagueName1").innerHTML = leagueName
    document.getElementById("profileLevel1").innerHTML = profileLevel
    document.getElementById("profileSummonerIcon1").src = "https://ddragon.leagueoflegends.com/cdn/9.17.1" + "/img/profileicon/" + (data.iconID || "1") + ".png"

  } catch (e) {
    console.log("And error occured updating the profile information: " + e)
  }
}

/*
    SECTIONS
*/

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks

  if (tabName == "Home") {
    document.getElementById("selected").style.marginLeft = "0px"
  }

  if (tabName == "Profile") {
    document.getElementById("selected").style.marginLeft = "115px"
  }

  if (tabName == "Outros") {
    document.getElementById("selected").style.marginLeft = "242.1px"
  }

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent")
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none"
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks")
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "")
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block"
  evt.currentTarget.className += " active"
}


// Event listeners

function autoUpdate() {
  isActive = true
  setTimeout(function() {
    setInterval(function() {
      if (!isActive) return
      profileUpdate()
    }, 5000)
    profileUpdate();
  }, 5000)
}

window.addEventListener("load", autoUpdate, false)


window.onfocus = function() {
  isActive = true
}

window.onblur = function() {
  isActive = false
}

function toggleAutoAccept(element) {
  if (element.checked) {
    ipcRenderer.send('autoAccept', true)
  } else {
    ipcRenderer.send('autoAccept', false)
  }
}

function toggleInvDecline(element) {
  if (element.checked) {
    ipcRenderer.send('invDecline', true)
  } else {
    ipcRenderer.send('invDecline', false)
  }
}



ipcRenderer.on('versions', (event, appVersion, leagueGameVersion) => {
  gameVersion = leagueGameVersion

  if (appVersion == currentVersion) {
    document.getElementById("version-tag").innerHTML = "V" + currentVersion + " (latest)"
  } else if (appVersion > currentVersion) {
    document.getElementById("version-tag").innerHTML = "V" + currentVersion + " (update available)"
  } else if (appVersion < currentVersion) {
    document.getElementById("version-tag").innerHTML = "V" + currentVersion + " (beta)"
  }
})

function saveIgnored() {
  let ignored = document.getElementById("ignored").value
  let names = ignored.split(", ")
  ipcRenderer.send('saveIgnored', names)
}

setInterval(function() {
  if (submitedLevel) {
    ipcRenderer.send('submitLevel', level);
  }
}, 20000)
