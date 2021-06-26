import copyImg from '../assets/images/copy.svg';
import '../styles/room-code.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);

    toast('🦄 Código da sala copiado!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div>
      <button className="room-code" onClick={copyRoomCodeToClipboard}>
        <div>
          <img src={copyImg} alt="Copy room code" />
        </div>
        <span>Sala #{props.code}</span>
      </button>
      <ToastContainer pauseOnFocusLoss={false} />
    </div>
  );
}