
import { searchGiphy } from '../../src/api/giphySearch';


describe('Test on searchGiphy', () => {
  
  test('should return response', async () => {
    const q = 'One Punch';
    const res = await searchGiphy(q);
    expect(res.data).toBeDefined();
    expect(res.data.length).toBe(5);
  });

  
});