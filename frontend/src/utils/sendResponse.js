import getCurrentDate from './getCurrentDate';

function sendResponse(msg, status) {
  if (msg.toLowerCase().includes('goodbye')) {
    return {
      date: getCurrentDate(),
      user: 'boot',
      message: 'Goodbye!',
      newStatus: 2,
    };
  }

  if (status === 0) {
    if (msg.toLowerCase().includes('hello') || (
      msg.toLowerCase().includes('good')) || (
        msg.toLowerCase().includes('i want'))) {
      return {
        date: getCurrentDate(),
        user: 'boot',
        message: 'Hi! Could I help you with a loan?',
        newStatus: 1,
      };
    }
  }

  if (status !== 0) {
    if (msg.toLowerCase().includes('loan')) {
      const text1 = "Do you want to apply for a loan? - ";
      const text2 = "Loan conditions - ";
      const text3 = "Help";
      const text = text1 + text2 + text3;
      return {
        date: getCurrentDate(),
        user: 'boot',
        message: [text],
        newStatus: 1,
      };
    }
  }
}

export default sendResponse;
