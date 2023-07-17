function sendResponse(msg, status) {
  console.log(msg);
  console.log(status);
  if (status === 0) {
    if (msg.toLowerCase().includes('hello') || (
      msg.toLowerCase().includes('good')) || (
        msg.toLowerCase().includes('i want'))) {
      return {
        date: Date.now(),
        user: 'boot',
        message: 'Hi! How could I help you?',
        newStatus: 1,
      };
    }
  }

  if (msg.toLowerCase().includes('loan')) {
    const text1 = "Do you want to apply for a loan? - ";
    const text2 = "Loan conditions - ";
    const text3 = "Help";
    return {
      date: Date.now(),
      user: 'boot',
      message: [text1, text2, text3],
      newStatus: 1,
    };
  }

  if (msg.toLowerCase().includes('goodbye')) {
    return {
      date: Date.now(),
      user: 'boot',
      message: 'Goodbye!',
      newStatus: 2,
    };
  }
}

export default sendResponse;
