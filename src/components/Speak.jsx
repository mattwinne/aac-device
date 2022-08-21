const speak = (item) => {
  const synth = window.speechSynthesis;
  if (synth.speaking) {
    // return; prevents button mashing
  }
  if (item !== "") {
    const speakText = new SpeechSynthesisUtterance(item);
    speakText.onend = () => {};
    synth.speak(speakText);
  }
};

export default speak;
