const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../app');
const { Model } = require('sequelize');

const {
  allMessagesMock,
  inputMessagesMock,
  outputMessagesMock
} = require('./mock/chatMock');

chai.use(chaiHttp);
const { expect } = chai;

describe('1. Teste da rota /chat:', () => {
  afterEach(() => {
    sinon.restore();
  });

  it(`1.1. GET em "/chat/user/:id/all", deve retornar status 200 e body com os dados das 
  mensagens junto ao id da conversa e do usuário.`, async function () {
    const id = allMessagesMock[0].id;
    sinon.stub(Model, 'findAll').resolves(allMessagesMock);

    const response = await chai.request(app).get(`/chat/user/${id}/all`);

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(allMessagesMock);
  });

  it(`1.2. POST em "/chat/new/:id", contendo a chave messages com um array e a rota com um 
  id válido, deve salvar as mensagens e retornar status 200 e body com os dados das 
  mensagens salvas.`, async function () {
    const id = allMessagesMock[0].id;
    sinon.stub(Model, 'create').resolves(outputMessagesMock);

    const response = await chai.request(app).post(`/chat/new/${id}`).send(inputMessagesMock);

    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.equal(outputMessagesMock);
  });
});
