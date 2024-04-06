const diretorio = 'base.json'

class conectaDB {
    static async leitorJSONLocal() {
        try {
            const consulta = await fetch(diretorio);
            const resposta = consulta.json()

            return resposta
        } catch (error) {
            return { message: `Erro ao consultar JSON - Mensagem: ${error.message}`, cod: 404 }
        }
    }
}

export default conectaDB;