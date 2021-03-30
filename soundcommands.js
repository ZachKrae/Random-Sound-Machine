soundManager.onready(function() {
    soundManager.createSound({
        id: 'drone1',
        url: './drones/tec-studios-drone.mp3',
        volume: 50,
        loops: 10,
    });
    soundManager.createSound({
        id: 'drone2',
        url: './drones/172662__trebblofang__drone0005.mp3',
        volume: 50,
        loops: 10
    });  
    soundManager.createSound({
        id: 'drone3',
        url: './drones/401986__msfx__passengers.mp3',
        volume: 75,
        loops: 10,
    });  
    soundManager.createSound({
        id: 'piano1',
        url: './pianos/216669__patricklieberkind__distant-sad-piano.mp3',
        loops: 2
    });
    soundManager.createSound({
        id: 'piano2',
        url: './pianos/414557__hakren__jazzy-ambient-piano-mansion.mp3',
    });
    soundManager.createSound({
        id: 'piano3',
        url: './pianos/108487__theworkingbamboo__pianoambient.mp3',
    });    
    soundManager.createSound({
        id: 'piano4',
        url: './pianos/418442__hakren__afternoon-ambient-piano-solo.mp3',
    });  
    soundManager.createSound({
        id: 'ambience1',
        url: './ambience/344430__babuababua__light-rain.mp3',
    });  
    soundManager.createSound({
        id: 'ambience2',
        url: './ambience/103684__chimerical__quiet-park.mp3',
    });
    soundManager.createSound({
        id: 'ambience3',
        url: './ambience/463903__burghrecords__birds-in-spring-scotland.wav',
    });
    soundManager.createSound({
        id: 'ambience4',
        url: './ambience/451559__kyles__crickets-night-parking-lot-by-highway-distant-traffic.flac',
        volume: 10,
    });
    soundManager.createSound({
        id: 'speech1',
        url: './speech/169760__unfa__biblia-tysiaclecia-dzieje-apostolskie-7.mp3',
    });  
    soundManager.createSound({
        id: 'speech2',
        url: './speech/163627__shrimppizza__reading-from-descartes-discourse-on-method.mp3',
    });
    soundManager.createSound({
        id: 'speech3',
        url: './speech/13623__incarnadine__david-c-scott-a-morning-walk.mp3'
    });
    soundManager.createSound({
        id: 'speech4',
        url: './speech/406044__jesusonoro__colombian-boy-poetry.wav'
    });
    soundManager.createSound({
        id: 'drumBeat1',
        url: './drums/252453__scydan__jazzy-beat-75bpm.wav',
        loops: 4
    });
    soundManager.createSound({
        id: 'drumBeat2',
        url: './drums/400572__adnova__nothing-of-value.wav',
        volume: 60,
        loops: 4
    });
    soundManager.createSound({
        id: 'drumBeat3',
        url: './drums/235844__jamesabdulrahman__bossa-rover.flac',
        loops: 4
    });
    soundManager.createSound ({
        id: 'drumBeat4',
        url: './drums/244337__insidebeat__palo-alto.wav',
        loops: 4
    });
});

var drones = ["drone1", "drone2", "drone3", "drone1"]
var pianos = ["piano1", "piano2", "piano3", "piano4"]
var ambience = ["ambience1", "ambience2", "ambience3", "ambience4"]
var speech = ["speech1", "speech2", "speech3", "speech4"]
var drums = ["drumBeat1", "drumBeat2", "drumBeat3", "drumBeat4"]
var all = [drones, pianos, ambience, speech, drums]

function playDrone() {
    var rndNum = Math.floor(Math.random() * 3);
    let randSound = soundManager.getSoundById(drones[rndNum])
    soundManager.play(drones[rndNum]);
    console.log(randSound.url);
}

function playPiano() {
    var rndNum = Math.floor(Math.random() * 4);
    let randSound = soundManager.getSoundById(pianos[rndNum])
    soundManager.play(pianos[rndNum]);
    console.log(randSound.url);
}

function playAmbience() {
    var rndNum = Math.floor(Math.random() * 4);
    soundManager.play(ambience[rndNum]);
}

function playSpeech() {
    var rndNum = Math.floor(Math.random() * 4);
    soundManager.play(speech[rndNum]);
}

function playDrums() {
    var rndNum = Math.floor(Math.random() * 4);
    soundManager.play(drums[rndNum]);
}

function stop() {
    soundManager.stopAll();
}

function playRandom() {
    var rndNum1 = Math.floor(Math.random() * 5);
    var rndNum2 = Math.floor(Math.random() * 4);
    soundManager.play(all[rndNum1][rndNum2]);
}