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
        id: 'drone4',
        url: './drones/60cyclehum.wav',
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
        url: './ambience/chimerical__quiet-park-clip-1.wav',
        loops: 10
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
        id: 'ambience5',
        url: './ambience/chimerical__quiet-park-clip-2.wav',
        loops: 10
    });
});

var drones = ["drone1", "drone2", "drone3", "drone4"]
var pianos = ["piano1", "piano2", "piano3", "piano4"]
var ambience = ["ambience1", "ambience2", "ambience3", "ambience4", "ambience5"]
var all = [drones, pianos, ambience, speech, drums]

function playDrone() {
    var rndNum = Math.floor(Math.random() * 4);
    let randSound = soundManager.getSoundById(drones[rndNum])
    soundManager.play(drones[rndNum]);
    console.log("I am playing " + randSound.url + " right now.");
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

function stop() {
    soundManager.stopAll();
}

function playRandom() {
    var rndNum1 = Math.floor(Math.random() * 5);
    var rndNum2 = Math.floor(Math.random() * 4);
    soundManager.play(all[rndNum1][rndNum2]);
}