import { FC } from 'react';
import AudioRecorder from './AudioRecorder';
// import AudioRecorder from './Audiorecorder';

interface PopupProps {
  show: boolean;
  onClose: () => void;
}

const Popup: FC<PopupProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative top-[80px] bg-transparent border border-blue-700 p-6 rounded shadow-lg w-[800px] h-[600px]">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-700">
          &times;
        </button>
        {/* <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Record
        </button> */}
            <AudioRecorder />
            
      </div>
    </div>
  );
};

export default Popup;
