"use strict";
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.medium;
    var currentAudio1 = AudioLevel.min;
    var currentAudio2 = AudioLevel.max;
    console.log(currentAudio + ' medium');
    console.log(currentAudio1 + ' min');
    console.log(currentAudio2 + ' max');
})();
