import { getGifs } from "../../helpers/getGifs";

describe('Pruebas con getGifs Fetch',() => {
    test('debe devolver 10 elementos', async() => {
        const gifs = await getGifs('Tom & Jerry');
        expect(gifs.length).toBe(10);
    });
    test('debe devolver 10 elementos', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
})