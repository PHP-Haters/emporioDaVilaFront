import { Endereco } from "./endereco.model";

export class Usuario {
  id?: number;         // opcional, pois pode não existir ao criar
  nome!: string;           // obrigatório
  senha!: string;           // obrigatório  
  telefone!: number;   // default true (igual ao prePersist)
  email!: string;         // obrigatório
  enderecos?: Endereco[];
  role!: string;

  constructor(init?: Partial<Usuario>) {
    Object.assign(this, init);
  }
}
