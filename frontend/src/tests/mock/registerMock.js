const id = 777;
const email = 'ricochete@gmail.com';
const username = 'coelho-ricochete';
const token = 'Valid token!';

const outputNewUserMock = { id, email, username };

const outputLoginMock = {
  data: { user: outputNewUserMock, token },
};

module.exports = { outputNewUserMock, outputLoginMock };
