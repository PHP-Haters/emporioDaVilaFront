import { PagamentoPedido } from "./pagamentoPedido.model";

export class Pagamento {
  id?: number;                    // opcional, pois pode não existir ao criar
  tipo!: string;                     // obrigatório
  quantidade!: number;   // obrigatório
  stock: boolean = true;   // Default true
  pagamentoPedido?: PagamentoPedido[]; // se quiser tipar melhor, criar interface PedidoPedido


  constructor(init?: Partial<Pagamento>) {
    Object.assign(this, init);
  }
}
