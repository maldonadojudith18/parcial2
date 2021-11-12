export class formula {
    a=0;
    calcular(lado:number){
        if (lado <= 0){
            return 0;
        }
        this.a = lado * lado;
        return this.a;
        
    }

}