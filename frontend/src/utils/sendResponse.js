function sendResponse(msg) {
  let response = '';
  if (msg.toLowerCase().includes('loan,')) {
    response = '------> MAIN';
  } else if (msg.toLowerCase().includes('hello,') || 
  msg.toLowerCase().includes('good,') || msg.toLowerCase().includes('i want')) {
    response = '------> INITIAL';
  } else if (msg.toLowerCase().includes('goodbye,')) {
    response = '------> FINISH';
  } else {
    response = '------> Another thing';
  }

  return { date: Date.now(), user: 'boot', message: response };
}

export default sendResponse;