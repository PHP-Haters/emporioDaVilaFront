import { Usuario } from "./usuario.model";

export class Endereco {
  id?: number;             // opcional, pois pode não existir ao criar
  usuario!: Usuario;           // obrigatório
  numero!: number;          // obrigatório
  rua!: string;          // obrigatório
  cep!: number;         // obrigatório
  bairro!: string;          // obrigatório
  complemento!: string;          // obrigatório

  constructor(init?: Partial<Endereco>) {
    Object.assign(this, init);
  }
}