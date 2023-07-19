const allMessagesMock = [
  {
    id: 1,
    userId: 1,
    messages: [
      { date: '17/07/2023 07:52',user: 'username1', message: 'Goodbye!' },
    ],
  },
  {
    id: 2,
    userId: 1,
    messages: [
      { date: '17/07/2023 07:53', user: 'username1', message: 'Goodbye!' },
    ],
  },
];

const inputMessagesMock = {
  messages: [
    { date: '17/07/2023 08:51', user: 'username1', message: 'Hi!' },
    { date: '17/07/2023 08:52', user: 'username1', message: 'Goodbye!' },
  ],
};

const outputMessagesMock = {
  id: 11,
  userId: 1,
  messages: [
    { date: '17/07/2023 08:51', user: 'username1', message: 'Hi!' },
    { date: '17/07/2023 08:52', user: 'username1', message: 'Goodbye!' },
  ],
};

module.exports = { allMessagesMock, inputMessagesMock, outputMessagesMock };
