import { Categoria } from "./enum/categorias.enum";

export class Produto {
  id?: number;             // opcional, pois pode não existir ao criar
  nome!: string;           // obrigatório
  valor!: number;          // obrigatório
  stock: boolean = true;   // default true (igual ao prePersist)
  imagem?: string;         // opcional
  categoria!: Categoria;   // obrigatório
  produtosPedidos?: any[]; // se quiser tipar melhor, criar interface ProdutoPedido

  constructor(init?: Partial<Produto>) {
    Object.assign(this, init);
  }
}
