import { Categoria } from "./enum/categorias.enum";
import { ProdutoPedido } from "./produtoPedido.model";

export class Produto {
  id?: number;             // opcional, pois pode não existir ao criar
  nome!: string;           // obrigatório
  valor!: number;          // obrigatório
  stock: boolean = true;   // default true (igual ao prePersist)
  imagem?: string;         // opcional
  categoria!: Categoria;   // obrigatório
  produtosPedidos?: ProdutoPedido[]; // se quiser tipar melhor, criar interface ProdutoPedido

  constructor(init?: Partial<Produto>) {
    Object.assign(this, init);
  }
}
