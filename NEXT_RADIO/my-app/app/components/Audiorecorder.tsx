// components/AudioRecorder.tsx

import React, { useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';

const AudioRecorder = () => {
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ audio: true, onStop: (blobUrl, blob) => setAudioBlob(blob) });

  const handleUpload = async () => {
    if (!audioBlob) return;

    const formData = new FormData();
    formData.append('audio', audioBlob, 'recording.wav');

    await fetch('/api/upload-audio', {
      method: 'POST',
      body: formData,
    });
  };

  return (
    <div>
      <p>Status: {status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      {mediaBlobUrl && <audio src={mediaBlobUrl} controls />}
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default AudioRecorder;
