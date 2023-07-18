const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../app');
const { Model } = require('sequelize');
const jwt = require('jsonwebtoken');

const {
  inputNewUserMock,
  outputNewUserMock,
  inputLoginMock,
  outputLoginMock,
} = require('./mock/userMock');

chai.use(chaiHttp);
const { expect } = chai;

describe('1. Teste da rota /user:', () => {
  afterEach(() => {
    sinon.restore();
  });

  it(`1.1. POST em "/user/new", contendo id, email, username e password, deve retornar 
  status 201 e body com os dados do usuário criado (id, email, username).`,
  async function () {
    sinon.stub(Model, 'create').resolves(outputNewUserMock);

    const response = await chai.request(app).post('/user/new').send(inputNewUserMock);

    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.equal(outputNewUserMock);
  });

  it(`1.2. POST em "/user/login", contendo usuário e senha válidos, deve retornar status 
  200 e body com os dados do usuário (id, email, username) e token.`, async function () {
    sinon.stub(Model, 'findOne').resolves(outputLoginMock);
    sinon.stub(jwt, 'sign').resolves();

    const response = await chai.request(app).post('/user/login').send(inputLoginMock);

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.includes({ user: outputLoginMock });
    expect(response.body).to.have.property('token');
  });

  it(`1.3. POST em "/user/login", contendo usuário e/ou senha inválidos, deve retornar
  status 401 e body com a mensagem de usuário ou senha não encontrados.`,
  async function () {
    sinon.stub(Model, 'findOne').resolves(null);

    const response = await chai.request(app).post('/user/login').send(inputLoginMock);

    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal({ message: 'Incorrect username or password.' });
  });

  it('1.4. GET em "/user/verify", contendo um token válido, deve retornar status 200.', 
  async function () {
    sinon.stub(jwt, 'verify').resolves();

    const response = await chai.request(app).get('/user/verify');

    expect(response.status).to.be.equal(200);
  });

  it('1.5. GET em "/user/verify", contendo um token inválido, deve retornar status 401.', 
  async function () {
    sinon.stub(jwt, 'verify').rejects;

    const response = await chai.request(app).get('/user/verify');

    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal({ message: 'Token failure.' });
  });
});
