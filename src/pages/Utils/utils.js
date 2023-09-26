import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showMessageSuccess = (mensagem, options = { containerId: '*' }) => {
    toast.success(mensagem, {
        position: toast.POSITION.BOTTOM_RIGHT,
        ...options, 
      });
}
export const showMessageError = (mensagem, options = { containerId: '*' }) => {
    toast.error(mensagem, {
      position: toast.POSITION.BOTTOM_RIGHT,
      ...options, 
    });
  }
export const showMessageWarn = (mensagem, options = { containerId: '*' }) => {
    toast.warn(mensagem, {
        position: toast.POSITION.BOTTOM_RIGHT,
        ...options, 
      });
}
export const showMessageInfo = (mensagem, options = { containerId: '*' }) => {
    toast.info(mensagem, {
        position: toast.POSITION.BOTTOM_RIGHT,
        ...options, 
      });
}
export const showMessagedefault = (mensagem, options = { containerId: '*' }) => {
    toast(mensagem, {
        position: toast.POSITION.BOTTOM_RIGHT,
        ...options, 
      });
}

