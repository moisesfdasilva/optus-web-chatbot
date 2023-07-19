const inputNewUserMock = {
  email: 'ricochete@gmail.com',
  username: 'coelho-ricochete',
  password: 'Bing-bing-bing!',
};

const outputNewUserMock = {
  id: 777,
  email: 'ricochete@gmail.com',
  username: 'coelho-ricochete',
};

const inputLoginMock = {
  username: 'coelho-ricochete',
  password: 'bing-bing-bing!',
};

const outputLoginMock = {
  dataValues: outputNewUserMock,
};

module.exports = {
  inputNewUserMock,
  outputNewUserMock,
  inputLoginMock,
  outputLoginMock,
};
