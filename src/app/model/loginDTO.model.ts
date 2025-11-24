import { Usuario } from "./usuario.model";

export class LoginDTO {
    usuario!: Usuario;
    token!: string;
}