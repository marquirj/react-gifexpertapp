import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";


describe('Pruebas en el componente <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories} />);

    /**
     * Reinializa las pruebas en cada test
     */
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories} />);
    })

    test('debe de mostrarse correctamente',() => {
        expect(wrapper).toMatchSnapshot();
    });
    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { 
            target: {
                value: value
            }
         });
    });
    test('No debe de postear la info con submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){ }});
        expect(setCategories).not.toHaveBeenCalled();
    });
    /**
     * 1. simular el inputChange
     * 2. simular el submit
     * 3. setCategories se debe de haber llamado
     * 4. el valor del input debe de estar ''
     */
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Tesorillo';
        //1. simular el inputChange
        wrapper.find('input').simulate('change', {target: {value}});
        //2. simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){ }});
        //3. setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();
        //Ejemplo para probar tipados
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        
        //4. el valor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('');
        

    });

})
    
