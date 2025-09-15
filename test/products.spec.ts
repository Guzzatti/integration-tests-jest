import pactum from 'pactum';
import { StatusCodes } from 'http-status-codes';
import { SimpleReporter } from '../simple-reporter';

describe('Toolshop API - Products', () => {
  const baseUrl = 'https://api.practicesoftwaretesting.com';

  beforeAll(() => {
    pactum.request.setDefaultTimeout(30000);
    pactum.reporter.add(SimpleReporter);
  });

  afterAll(() => {
    pactum.reporter.end();
  });

  it('Deve listar produtos', async () => {
    await pactum
      .spec()
      .get(`${baseUrl}/products`)
      .expectStatus(StatusCodes.OK)
  });
});
