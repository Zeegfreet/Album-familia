import controllerFotos from "../resources/controller/fotos.js";


class carregarFotos {
    static async carregarFotosNaTela(container){
        const teste = await controllerFotos.listarFotos();
        this.preencherTela(container, teste)
    }

    static async preencherTela(container, dados){
        dados.forEach( e => {
            container.innerHTML += this.criarElemento(e.id, e.titulo, e.local)
        });
    }

    static criarElemento(id, titulo, local){
        const elemento = `<div class="conteudo__fotos__foto" id="foto_${id}">
                            <h1 class="conteudo__fotos__foto__titulo">${titulo}</h1>
                            <div class="imagem">
                                <img src="${local}" alt="">
                            </div>
                        </div>`
        return elemento
    }
}

export default carregarFotos;