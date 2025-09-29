import { Pedido } from "./pedido.model";
import { Pagamento } from "./pagamento.model";


export class PagamentoPedido {
  id?: number;             // opcional, pois pode não existir ao criar
  pagamento!: Pagamento;             // opcional, pois pode não existir ao criar
  pedido!: Pedido;             // opcional, pois pode não existir ao criar

  constructor(init?: Partial<PagamentoPedido>) {
    Object.assign(this, init);
  }
}
