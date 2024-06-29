// import { useState, useRef } from 'react';

// const AudioRecorder = () => {
//   const [isRecording, setIsRecording] = useState(false);
//   const [audioURL, setAudioURL] = useState<string | null>(null);
//   const mediaRecorderRef = useRef<MediaRecorder | null>(null);
//   const audioChunksRef = useRef<Blob[]>([]);

//   const startRecording = async () => {
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     const mediaRecorder = new MediaRecorder(stream);

//     mediaRecorderRef.current = mediaRecorder;

//     mediaRecorder.ondataavailable = (event) => {
//       audioChunksRef.current.push(event.data);
//     };

//     mediaRecorder.onstop = async () => {
//       const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
//       const audioURL = URL.createObjectURL(audioBlob);
//       setAudioURL(audioURL);
//       audioChunksRef.current = [];
      
//       // Convert to WAV format and send to backend
//       const wavAudioBlob = await convertToWav(audioBlob);
//       sendAudioToBackend(wavAudioBlob);
//     };

//     mediaRecorder.start();
//     setIsRecording(true);
//   };

//   const stopRecording = () => {
//     mediaRecorderRef.current?.stop();
//     setIsRecording(false);
//   };

//   const convertToWav = async (webmBlob: Blob): Promise<Blob> => {
//     const formData = new FormData();
//     formData.append('audio', webmBlob);

//     try {
//       const response = await fetch('/api/convert-to-wav', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         return await response.blob();
//       } else {
//         throw new Error('Failed to convert to WAV format');
//       }
//     } catch (error) {
//       console.error('Error converting to WAV:', error);
//       throw error;
//     }
//   };

//   const sendAudioToBackend = async (audioBlob: Blob) => {
//     const formData = new FormData();
//     formData.append('file', audioBlob, 'recording.wav');

//     try {
//       const response = await fetch('http://localhost:8000/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         console.log('Audio uploaded successfully');
//       } else {
//         console.error('Audio upload failed');
//       }
//     } catch (error) {
//       console.error('Error uploading audio:', error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <button
//         onClick={isRecording ? stopRecording : startRecording}
//         className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
//       >
//         {isRecording ? 'Stop Recording' : 'Start Recording'}
//       </button>
//       {audioURL && (
//         <audio controls className="mt-4">
//           <source src={audioURL} type="audio/wav" />
//         </audio>
//       )}
//     </div>
//   );
// };

// export default AudioRecorder;





"use client"
// components/AudioRecorder.tsx
import React, { useState, useRef } from 'react';

const AudioRecorder: React.FC = () => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = (event: BlobEvent) => {
      audioChunksRef.current.push(event.data);
    };
    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioUrl(audioUrl);

        const audioBuffer = await audioBlob.arrayBuffer();
        console.log(audioBlob);

        // Send the buffer to the backend
        const response = await fetch('/api/upload-audio', {
          method: 'POST',
          headers: { 'Content-Type': 'application/octet-stream' },
          body: audioBuffer,
        });
        if (response.ok) {
          console.log('Audio uploaded successfully');
        }
        setIsRecording(false);
        audioChunksRef.current = [];
      };
    }
  };

  return (
    <div>
      <button onClick={isRecording ? stopRecording : startRecording}
 className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      {audioUrl && (
        <div>
          <h3>Recorded Audio:</h3>
          <audio controls src={audioUrl}></audio>
        </div>
      )}
    </div>
  );
};

export default AudioRecorder;

