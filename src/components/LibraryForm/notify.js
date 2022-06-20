import { ToastContainer, toast } from 'react-toastify';

export const notifySuccess = values =>
  toast.success(`Книга ${values.title} добавлена!`, {
    position: 'bottom-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });

export const notifyError = (values, text) =>
  toast.error(`${values.title} вже є в вашій бібліотеці!`, {
    position: text,
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });

export const notifyTrainingSuccess = values =>
  toast.success(`Книга ${values.book.title} добавлена до тренування!`, {
    position: 'bottom-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
