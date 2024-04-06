import modelFotos from "../model/fotos.js";

class controllerFotos {
    static async listarFotos(){
        
        try {
            const baseFotos = await modelFotos.listarFotos();
            return baseFotos
            
       } catch (error) {
            return { message: `Erro no controller Fotos - Mensagem: ${error.message}`, cod: 404 }
       }
    }

}

export default controllerFotos;