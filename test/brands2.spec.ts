import pactum from 'pactum';
import { StatusCodes } from 'http-status-codes';
import { SimpleReporter } from '../simple-reporter';

describe('Toolshop API - Brands', () => {
  const baseUrl = 'https://api.practicesoftwaretesting.com';

  beforeAll(() => {
    pactum.request.setDefaultTimeout(30000);
    pactum.reporter.add(SimpleReporter);
  });

  afterAll(() => {
    pactum.reporter.end();
  });

  it('Deve listar todas as marcas', async () => {
    await pactum
      .spec()
      .get(`${baseUrl}/brands`)
      .expectStatus(StatusCodes.OK)
      .expectJsonLike([{ id: /\d+/, name: /\w+/ }]);
  });

  it('Deve retornar 404 para marca inexistente', async () => {
    await pactum
      .spec()
      .get(`${baseUrl}/brands/999999`)
      .expectStatus(StatusCodes.NOT_FOUND);
  });
});
