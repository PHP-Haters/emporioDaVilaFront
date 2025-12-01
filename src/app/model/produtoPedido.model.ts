import { Pedido } from "./pedido.model";
import { Produto } from "./produto.model";


export class ProdutoPedido {
  id?: number;             
  produto!: Produto;             
  pedido!: Pedido;             
  quantidadeProduto!: number;

  constructor(init?: Partial<ProdutoPedido>) {
    Object.assign(this, init);
  }
}
