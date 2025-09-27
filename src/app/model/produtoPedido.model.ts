import { Pedido } from "./pedido.model";
import { Produto } from "./produto.model";


export class ProdutoPedido {
  id?: number;             // opcional, pois pode não existir ao criar
  Produto!: Produto;             // opcional, pois pode não existir ao criar
  Pedido!: Pedido;             // opcional, pois pode não existir ao criar

  constructor(init?: Partial<ProdutoPedido>) {
    Object.assign(this, init);
  }
}
