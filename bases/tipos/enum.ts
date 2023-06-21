( () => {

    enum AudioLevel {
        min,
        medium,
        max
    }

    let currentAudio:AudioLevel = AudioLevel.medium;
    let currentAudio1:AudioLevel = AudioLevel.min;
    let currentAudio2:AudioLevel = AudioLevel.max;

    console.log(currentAudio + ' medium');
    console.log(currentAudio1 + ' min');
    console.log(currentAudio2 + ' max');
})()