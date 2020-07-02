import { renderHook } from "@testing-library/react-hooks";
import { useFecthGifs } from "../../hooks/useFetchGifs";

describe('Pruebas al componente useFetchGifs', () => {

    test('Validar el hook al cargar ', async () => {
        const category = "Homero";
        const { result, waitForNextUpdate } = renderHook(() => useFecthGifs(category));
        
        const {data, loading} = result.current;
    
        await waitForNextUpdate();

        // console.log(data);
        // console.log(loading);

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('Validar cuando el hook carga información', async () => {
        const category = "Homero";
        const { result, waitForNextUpdate } = renderHook(() => useFecthGifs(category));

        await waitForNextUpdate();

        const {data, loading} = result.current;

        // console.log(data);
        // console.log(loading);

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
    
    
})
