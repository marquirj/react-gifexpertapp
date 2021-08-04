import { renderHook } from "@testing-library/react-hooks";
import { useFechGifs } from "../../hooks/useFechGifs"

describe('Pruebas con el hook useFechGifs', () => {

    test('debe devolver el estado inicial', async() =>{
        const {result, waitForNextUpdate } = renderHook( ()=> useFechGifs('Dragon Ball'));
        const {data, loading} = result.current;
        
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
        

    });

    test('debe devolver un array de imagenes y el loading a false', async() =>{
        const {result, waitForNextUpdate} = renderHook( ()=> useFechGifs('Dragon Ball'));
        await waitForNextUpdate();
        const {data,loading} = result.current;
        
        
        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
       

    });

    
})
