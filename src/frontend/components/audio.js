import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

const RecordVoice = () => {
  const recorderControls = useAudioRecorder();
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  return (
    <div>
      <AudioRecorder
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
      />
      <button
        className="border-2 border-black px-2 py-2 mb-4 text-white bg-black rounded-md"
        onClick={recorderControls.stopRecording}
      >
        Stop recording
      </button>
    </div>
  );
};
export default RecordVoice;
