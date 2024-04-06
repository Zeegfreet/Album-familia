import conectaDB from "../db/conectaDB.js"

class modelFotos {
    static async listarFotos(){
        try {
            const baseFotos = await conectaDB.leitorJSONLocal();
            return baseFotos
            
        } catch (error) {
            return { message: `Erro no model FOTOS - Mensagem: ${error.message}`, cod: 404 }
        }
    }
}

export default modelFotos;