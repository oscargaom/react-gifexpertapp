import '@testing-library/jest-dom'
import { getGifs } from '../../helpers/GetGifs'

describe('Pruebas integrales del componente <GetGifs/>', () => {
    test('Debe retornar 10 elementos', async ()  => {
        
        const resp =  await getGifs('Homero');

        expect(resp.length).toBe(10);
        
    })

    test('Debe retornar 0 elementos', async () => {
        
        const resp = await getGifs('');

        expect(resp.length).toBe(0);
    })
    
    
})
