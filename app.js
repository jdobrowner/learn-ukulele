//---------------- create function variables to hold unicode characters ------------

var add = function(n) { return '' + n; };
var sus = function(n) { return '' + n; };
var maj7 = function() { return '' + '7'; };
var fdim = function() { return '' + '7'; };
var hdim = function() { return '' + '7'; };

//------------ Global variable with state and chord library ------------------------

var ukuApp = {
  state: {
    isInMajorKey: true, // false implies a minor key
    keyRoot: 0, // C
    onPage: 0, // 0 = landing page, 1 = chord diagrams, 2 = progression lab
  },
  chordLibrary: [
    { rootNum: 0, isMinor: false, extension: '', fingering: [0,0,0,3] }, // C
    { rootNum: 0, isMinor: false, extension: maj7(), fingering: [0,0,0,2] }, // Cmaj7
    { rootNum: 0, isMinor: false, extension: '6', fingering: [0,0,0,0] }, // C6
    { rootNum: 0, isMinor: false, extension: '', fingering: [0,4,3,3] }, // C
    { rootNum: 0, isMinor: false, extension: '6', fingering: [2,0,3,3] }, // C6
    { rootNum: 0, isMinor: false, extension: sus(4), fingering: [0,0,1,3] }, // Csus4
    { rootNum: 0, isMinor: false, extension: '7', fingering: [0,0,0,1] }, // C7
    { rootNum: 0, isMinor: false, extension: '7', fingering: [3,0,0,3] }, // C7
    { rootNum: 0, isMinor: false, extension: '7', fingering: [3,4,3,3] }, // C7
    { rootNum: 0, isMinor: true, extension: '', fingering: [0,3,3,3] }, // C-
    { rootNum: 0, isMinor: true, extension: '7', fingering: [3,3,3,3] }, // C-7

    { rootNum: 1, isMinor: true, extension: '7', fingering: [4,4,4,4] }, // C#-7
    { rootNum: 1, isMinor: true, extension: '7', fingering: [1,1,0,4] }, // C#-7
    { rootNum: 1, isMinor: false, extension: hdim(), fingering: [0,1,0,2] }, // C#dim7(half)
    { rootNum: 1, isMinor: false, extension: fdim(), fingering: [0,1,0,1] }, // C#dim7(full)
    { rootNum: 1, isMinor: false, extension: fdim(), fingering: [3,4,3,4] }, // C#dim7(full)

    { rootNum: 2, isMinor: false, extension: '', fingering: [2,2,2,0] }, // D
    { rootNum: 2, isMinor: false, extension: maj7(), fingering: [2,2,2,4] }, // Dmaj7
    { rootNum: 2, isMinor: false, extension: '6', fingering: [2,2,2,2] }, // D6
    { rootNum: 2, isMinor: false, extension: sus(2), fingering: [2,2,0,0] }, // Dsus2
    { rootNum: 2, isMinor: false, extension: sus(4), fingering: [0,2,4,0] }, // Dsus4
    { rootNum: 2, isMinor: false, extension: '7', fingering: [2,2,2,3] }, // D7
    { rootNum: 2, isMinor: false, extension: '7'+sus(4), fingering: [2,2,3,3] }, // D7sus4
    { rootNum: 2, isMinor: true, extension: '', fingering: [2,2,1,0] }, // D-
    { rootNum: 2, isMinor: true, extension: '7', fingering: [2,2,1,3] }, // D-7
    { rootNum: 2, isMinor: true, extension: '6', fingering: [2,2,1,2] }, // D-6
    { rootNum: 2, isMinor: false, extension: hdim(), fingering: [1,2,1,3] }, // Ddim7(half)

    { rootNum: 3, isMinor: false, extension: '', fingering: [0,3,3,1] }, // Eb
    { rootNum: 3, isMinor: false, extension: '', fingering: [3,3,3,1] }, // Eb
    { rootNum: 3, isMinor: false, extension: '6', fingering: [3,3,3,3] }, // Eb6
    { rootNum: 3, isMinor: false, extension: add(9), fingering: [0,3,3,1] }, // Ebadd9
    { rootNum: 3, isMinor: false, extension: sus(2), fingering: [3,3,4,4] }, // Ebsus2
    { rootNum: 3, isMinor: false, extension: add(11), fingering: [4,4,4,0] }, // Ebadd11

    { rootNum: 3, isMinor: false, extension: hdim(), fingering: [2,3,2,4] }, // D#dim7(half)
    { rootNum: 3, isMinor: false, extension: fdim(), fingering: [2,3,2,3] }, // D#dim7(full)

    { rootNum: 4, isMinor: false, extension: '', fingering: [4,4,4,2] }, // E
    { rootNum: 4, isMinor: false, extension: maj7(), fingering: [4,3,4,2] }, // Emaj7
    { rootNum: 4, isMinor: false, extension: '6', fingering: [4,4,4,4] }, // E6
    { rootNum: 4, isMinor: false, extension: '7', fingering: [1,2,0,2] }, // E7
    { rootNum: 4, isMinor: false, extension: '7', fingering: [4,2,4,2] }, // E7
    { rootNum: 4, isMinor: false, extension: '9', fingering: [1,2,2,2] }, // E9
    { rootNum: 4, isMinor: false, extension: '7'+sus(4), fingering: [1,1,2,2] }, // E7sus4
    { rootNum: 4, isMinor: true, extension: '', fingering: [0,4,3,2] }, // E-
    { rootNum: 4, isMinor: true, extension: '', fingering: [0,4,0,2] }, // E-
    { rootNum: 4, isMinor: true, extension: '7', fingering: [0,2,0,2] }, // E-7
    { rootNum: 4, isMinor: true, extension: '6', fingering: [0,1,0,2] }, // E-6
    { rootNum: 4, isMinor: false, extension: hdim(), fingering: [0,2,0,1] }, // Edim7(half)
    { rootNum: 4, isMinor: false, extension: '', fingering: [0,4,3,1] }, // Edim

    { rootNum: 5, isMinor: false, extension: '', fingering: [2,0,1,0] }, // F
    { rootNum: 5, isMinor: false, extension: '', fingering: [2,0,1,3] }, // F
    { rootNum: 5, isMinor: false, extension: sus(2), fingering: [0,0,1,3] }, // Fsus2
    { rootNum: 5, isMinor: false, extension: sus(4), fingering: [3,0,1,1] }, // Fsus4
    { rootNum: 5, isMinor: false, extension: add(9), fingering: [0,0,1,0] }, // Fadd9
    { rootNum: 5, isMinor: false, extension: '7', fingering: [2,3,1,3] }, // F7
    { rootNum: 5, isMinor: true, extension: '', fingering: [1,0,1,3] }, // F-
    { rootNum: 5, isMinor: true, extension: '7', fingering: [1,3,1,3] }, // F-7

    { rootNum: 6, isMinor: true, extension: '', fingering: [2,1,2,0] }, // F#-
    { rootNum: 6, isMinor: true, extension: '7', fingering: [2,4,2,4] }, //  F#-7
    { rootNum: 6, isMinor: false, extension: hdim(), fingering: [2,4,2,3] }, // F#dim7(half)
    { rootNum: 6, isMinor: false, extension: fdim(), fingering: [2,3,2,3] }, // F#dim7(full)

    { rootNum: 7, isMinor: false, extension: '', fingering: [0,2,3,2] }, // G
    { rootNum: 7, isMinor: false, extension: maj7(), fingering: [0,2,2,2] }, // Gmaj7
    { rootNum: 7, isMinor: false, extension: '6', fingering: [0,2,0,2] }, // G6
    { rootNum: 7, isMinor: false, extension: sus(2), fingering: [0,2,3,0] }, // Gsus2
    { rootNum: 7, isMinor: false, extension: sus(4), fingering: [0,2,3,3] }, // Gsus4
    { rootNum: 7, isMinor: false, extension: '7', fingering: [0,2,1,2] }, // G7
    { rootNum: 7, isMinor: false, extension: '7'+sus(2), fingering: [0,2,1,0] }, // G7sus2
    { rootNum: 7, isMinor: false, extension: '7'+sus(4), fingering: [0,2,1,3] }, // G7sus4
    { rootNum: 7, isMinor: true, extension: '', fingering: [0,2,3,1] }, // G-
    { rootNum: 7, isMinor: true, extension: '7', fingering: [0,2,1,1] }, // G-7

    { rootNum: 8, isMinor: true, extension: '', fingering: [4,3,4,2] }, // G#-
    { rootNum: 8, isMinor: true, extension: '7', fingering: [1,3,2,2] }, // G#-7
    { rootNum: 8, isMinor: false, extension: hdim(), fingering: [1,2,2,2] }, // G#dim7(half)
    { rootNum: 8, isMinor: false, extension: fdim(), fingering: [1,2,1,2] }, // G#dim7(full)

    { rootNum: 9, isMinor: false, extension: '', fingering: [2,3,0,0] }, // A
    { rootNum: 9, isMinor: false, extension: '', fingering: [2,3,0,4] }, // A
    { rootNum: 9, isMinor: false, extension: maj7(), fingering: [1,1,0,0] }, // Amaj7
    { rootNum: 9, isMinor: false, extension: sus(4), fingering: [2,2,0,0] }, // Asus4
    { rootNum: 9, isMinor: false, extension: add(9), fingering: [2,1,0,2] }, // Aadd9
    { rootNum: 9, isMinor: false, extension: '', fingering: [0,1,0,0] }, // A7
    { rootNum: 9, isMinor: false, extension: '7'+sus(4), fingering: [0,2,0,0] }, // A7sus4
    { rootNum: 9, isMinor: true, extension: '', fingering: [2,0,0,0] }, // A-
    { rootNum: 9, isMinor: true, extension: '', fingering: [2,0,0,3] }, // A-
    { rootNum: 9, isMinor: true, extension: '7', fingering: [2,0,3,3] }, // A-7
    { rootNum: 9, isMinor: true, extension: '7', fingering: [0,0,3,0] }, // A-7
    { rootNum: 9, isMinor: true, extension: '6', fingering: [0,0,0,0] }, // A-6
    { rootNum: 9, isMinor: true, extension: '6', fingering: [0,0,1,3] }, // A-6
    { rootNum: 9, isMinor: true, extension: add(9), fingering: [2,0,0,2] }, // A-add9
    { rootNum: 9, isMinor: false, extension: hdim(), fingering: [2,3,3,3] }, // Adim7(half)
    { rootNum: 9, isMinor: false, extension: hdim(), fingering: [2,3,3,0] }, // Adim7(half)
    { rootNum: 9, isMinor: false, extension: hdim(), fingering: [0,3,3,0] }, // Adim7(half)

    { rootNum: 10, isMinor: false, extension: '', fingering: [3,2,1,1] }, // Bb
    { rootNum: 10, isMinor: false, extension: maj7(), fingering: [3,2,1,0] }, // Bbmaj7
    { rootNum: 10, isMinor: false, extension: '6', fingering: [0,2,1,1] }, // Bb6
    { rootNum: 10, isMinor: false, extension: add(9), fingering: [3,2,1,3] }, // Bbadd9
    { rootNum: 10, isMinor: false, extension: sus(4), fingering: [3,3,1,1] }, // Bbsus4
    { rootNum: 10, isMinor: false, extension: sus(2), fingering: [3,0,1,1] }, // Bbsus2
    { rootNum: 10, isMinor: false, extension: '7', fingering: [1,2,1,1] }, // Bb7
    { rootNum: 10, isMinor: false, extension: '7', fingering: [3,2,4,1] }, // Bb7
    { rootNum: 10, isMinor: false, extension: '7'+sus(4), fingering: [1,3,1,1] }, // Bb7sus4
    { rootNum: 10, isMinor: false, extension: '9', fingering: [3,2,4,3] }, // Bb9

    { rootNum: 11, isMinor: false, extension: '', fingering: [4,3,2,2] }, // B
    { rootNum: 11, isMinor: false, extension: sus(4), fingering: [4,4,2,2] }, // Bsus4
    { rootNum: 11, isMinor: false, extension: add(9), fingering: [4,3,2,4] }, // Badd9
    { rootNum: 11, isMinor: false, extension: '7', fingering: [4,3,2,0] }, // B7
    { rootNum: 11, isMinor: false, extension: '7', fingering: [2,3,2,2] }, // B7
    { rootNum: 11, isMinor: false, extension: '7'+sus(4), fingering: [2,4,2,2] }, // B7sus4
    { rootNum: 11, isMinor: true, extension: '', fingering: [4,2,2,2] }, // B-
    { rootNum: 11, isMinor: true, extension: '7', fingering: [2,2,2,2] }, // B-7
    { rootNum: 11, isMinor: false, extension: hdim(), fingering: [2,2,1,2] }, // Bdim7(half)
    { rootNum: 11, isMinor: false, extension: hdim(), fingering: [4,2,1,0] }, // Bdim7(half)
    { rootNum: 11, isMinor: false, extension: fdim(), fingering: [1,2,1,2] }, // Bdim7(full)
  ]
};

//-------------------------------- on page load -----------------------------------
$(function() {
  landingPage(1.5);
  makeSounds();
});


//------------------------------ use tone.js to play sounds -----------------------
function makeSounds() {
  var tones = loadWavesIntoArray();
  var multiPlayer = new Tone.MultiPlayer(tones).toMaster();


    $('main').on('click', '.chord-container', function(e) {
      var chordIndex = Number($(this).attr('id'));
      console.log(chordIndex);
      var harmony = getTonesFromFingering(ukuApp.chordLibrary[chordIndex].fingering);
      var now = Tone.now();
      multiPlayer.start(harmony[0], now);
      multiPlayer.start(harmony[1], now + 0.025);
      multiPlayer.start(harmony[2], now + 0.05);
      multiPlayer.start(harmony[3], now + 0.075);
    });
};

//--------------------- store all sound files in a single array --------------------
function loadWavesIntoArray() {
  var toneArray = ["ukeTones/C.wav", "ukeTones/Cs.wav", "ukeTones/D.wav", "ukeTones/Ds.wav", "ukeTones/E.wav", "ukeTones/F.wav", "ukeTones/Fs.wav", "ukeTones/G.wav", "ukeTones/Gs.wav", "ukeTones/A.wav", "ukeTones/Bb.wav", "ukeTones/B.wav", "ukeTones/C4.wav", "ukeTones/Cs4.wav"];
  return toneArray;
}

//------------------- calculate tones of chord based on finger position ------------
function getTonesFromFingering(fingering) {
  var tones = [];
  tones.push(fingering[0] + 7);
  tones.push(fingering[1]);
  tones.push(fingering[2] + 4);
  tones.push(fingering[3] + 9);
  return tones;
}


//---------------------- from Monika's index.js -----------------------------

function drawChord(size, array, chordIndex) {

    //grid width and height
    var gridWidth = 150 * size;
    var gridHeight = 200 * size;
    //line segment size
    var w = gridWidth / 3;
    var h = gridHeight / 4;
    //padding around grid
    var padding = h / 3;
    var paddingFromTop = gridHeight / 4;
    //size of canvas
    var canvasWidth = gridWidth + (padding * 2) + 1;
    var canvasHeight = gridHeight + paddingFromTop + 1;

    var chordContainer = "<div class=chord-container id=" + chordIndex + "></div>";
    $('main').append(chordContainer);
    var canvas = $('<canvas/>').attr({width: canvasWidth, height: canvasHeight}).appendTo('.chord-container');
    var context = canvas.get(0).getContext("2d");


    //draw vertical lines
    for (var i = 0; i <= gridWidth; i += h) {
        context.moveTo(i + padding + 0.5, paddingFromTop)
        context.lineTo(i + padding + 0.5, gridHeight + paddingFromTop)
    }

    //draw horizontal lines
    for (var i = 0; i <= gridHeight; i += w) {
        context.moveTo(padding, i + paddingFromTop + 0.5)
        context.lineTo(gridWidth + padding, i + paddingFromTop + 0.5)
    }

    context.strokeStyle = "white";
    context.lineWidth = 1;
    context.stroke();

    //draw notes
    for (var i = 0; i < array.length; i += 1) {
        context.beginPath();
        if (array[i] === 0) {
            var position = (h / 2);
            context.arc(padding + (i * w), position, padding-2, 0, Math.PI*2, true);
            context.lineWidth = 2;
            context.stroke();
        }
        else {
            var position = (h / 2) + (array[i] * h);
            context.arc(padding + (i * w), position, padding-1, 0, Math.PI*2, true);
            context.fillStyle = "white";
            context.fill();
        }
    }

    var chordName = "<h1>C–<sup>&#8743</sup></h1>"
    $('.chord-container').append(chordName);
}


// called on initial load and when "learn:ukulele" is clicked
function landingPage(size) {

    // display random chord
    var possibleIndex = ukuApp.chordLibrary.length-1;
    var randomChordIndex = Math.floor(Math.random() * possibleIndex);
    var randomChord = ukuApp.chordLibrary[randomChordIndex].fingering;
    drawChord(size, randomChord, randomChordIndex);

}





//----------------------------------------------------------- final successful version of getData

function getChordSuggestions( chordProgression ) {
  var apikey = "2fd30e2ad4916c25122f3bb604b26d11";
  var API_URL = "https://api.hooktheory.com/v1/";
  var chordSuggestions = [];

  var params = {
    url: API_URL + 'trends/nodes?cp=' + chordProgression,
    type: 'GET',
    contentType: 'application/json',
    dataType: 'json',
    beforeSend: function (xhr){
      xhr.setRequestHeader('Authorization', "Bearer " + apikey);
    },
    success: function(result) {
      displayChordSuggestions(result);
    }
  }
$.ajax(params);
}

function displayChordSuggestions(result) {
  var array = result.slice(0,12);
  console.log(array);
}


//------------------ get major and minor scale array for any root note ---------------------------
function majorScale(root) { return [0,2,4,5,7,9,11].map( num => num + root ); }
function minorScale(root) { return [0,2,3,5,7,8,10].map( num => num + root ); }

//-------------get all chords in the library that matches a key numeral --------------------------
function getNthChords(scale) {
  return function(numeral) {
    var n = numeral - 1;
    var nChords = chordLibrary.filter( function(chord) {
      if ( chord.rootNum !== scale[n]) return false;
      for (var i = 0; i < 4; i++) {
        if ( !scale.includes(chord.tones[i]%12)) return false;
      }
      return true;
    });
    return nChords;
  }
}

//---------------- get all dominat chords of any key root --------------------------
function get5thChords(keyRoot) {
  var fifth = (keyRoot + 7) % 12;
  var fiveChords = chordLibrary.filter( function(chord) {
    if ( chord.rootNum !== fifth) return false;
    for (var i = 0; i < 4; i++) {
      if ( ![0,2,4,5,7,9,10].includes(chord.tones[i]%12)) return false;
    }
  });
  return fiveChords;
}

//-------------- make a collection of all chords within a given key ------------------
function getAllChordsInKey(root) {

  var thisKey, thisScale;
  if ( ukuleleApp.isInMajorKey ) {
    thisScale = majorScale(root)
    thisKey = getNthChords(thisScale);
  }
  else {
    thisScale = minorScale(root)
    thisKey = getNthChords(thisScale);
  }

  var i = thisKey(1);
  var ii = thisKey(2);
  var iii = thisKey(3);
  var iv = thisKey(4);
  var v = get5thChords(root);
  var vi = thisKey(6);
  var vii = thisKey(7);
  var d2 = get5thChords(thisScale[1]);
  var d3 = get5thChords(thisScale[2]);
  var d4 = get5thChords(thisScale[3]);
  var d5 = get5thChords(thisScale[4]);
  var d6 = get5thChords(thisScale[5]);

  return [i, ii, iii, iv, v, vi, vii, d2, d3, d4, d5, d6];
}


//-------------- display chords of certain numeral in key -------------------------
function displayChords(keyRoot) {
  var chords = getAllChordsInKey(keyRoot);

  console.log('I chords: ' + chords[0]);
  console.log('ii chords: ' + chords[1]);
  console.log('iii chords: ' + chords[2]);
  console.log('IV chords: ' + chords[3]);
  console.log('V chords: ' + chords[4]);
  console.log('vi chords: ' + chords[5]);
  console.log('vii chords: ' + chords[6]);
  console.log('D2 chords: ' + chords[7]);
  console.log('D3 chords: ' + chords[8]);
  console.log('D4 chords: ' + chords[9]);
  console.log('D5 chords: ' + chords[10]);
  console.log('D6 chords: ' + chords[11]);

}

//------------- map tone number to tone letter -----------------------------------
function toneLetter(n) {
  var sharp = '&#9839';
  var flat = '&#9837';
  switch (n) {
    case 0: return 'C';
    case 1: return 'C' + sharp;
    case 2: return 'D';
    case 3:
            var letter = ukuApp.state.keyRoot === 4 ? 'D' + sharp : 'E' + flat;
            return letter;
    case 4: return 'E';
    case 5: return 'F';
    case 6: return 'F' + sharp;
    case 7: return 'G';
    case 8: return 'G' + sharp;
    case 9: return 'A';
    case 10: return 'B' + flat;
    case 11: return 'B';
    default: return '';
  }
}



//-------------------- get chord name with extension -------------------------
function getChordName(chord) {
  var name = toneLetter(chord.rootNum);
  if (chord.isMinor === false) name += '-';
  name += '<sup>' + chord.extension + '</sup>';
  return name;
}
