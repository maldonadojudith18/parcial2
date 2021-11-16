import { formula } from "./formula";
describe ('calcular',() => {
    let form: formula;
    let area: number;
    beforeEach(()=>{
        form= new formula();
    });
    
    it('Si el dato ingresado es igual a 0 , retornara un valor de 0',() =>{  
        area=form.calcular(0);
        expect(area).toBe(0);
    });
    it('Si el dato ingresado es menor  a 0 , retornara un valor de 0',() =>{  
        area=form.calcular(-1);
        expect(area).toBe(0);
    });
    it('Si se ingresa un lado del tamaño 5, tendra que regresar el valor de 25',() =>{  
        area=form.calcular(5);
        expect(area).toBe(25);
    });
   
});