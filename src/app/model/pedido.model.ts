import { PagamentoPedido } from "./pagamentoPedido.model";
import { ProdutoPedido } from "./produtoPedido.model";
import { Usuario } from "./usuario.model";

export class Pedido {
  id?: number;             // opcional, pois pode não existir ao criar
  usuario!: Usuario;           // obrigatório
  estado?: boolean;          // obrigatório
  produtosPedido?: ProdutoPedido[]; // se quiser tipar melhor, criar interface PedidoPedido|
  pagamentosPedido?: PagamentoPedido[]; // se quiser tipar melhor, criar interface PedidoPedido|

  constructor(init?: Partial<Pedido>) {
    Object.assign(this, init);
  }
}
