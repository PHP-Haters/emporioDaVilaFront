import { Component, Input } from '@angular/core';
import { NgClass } from "../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() type: 'home' | 'produtos' | 'contato' = 'home';
  @Input() imagem: string = '';
  @Input() alt: string = 'descrição da imagem';
  @Input() titulo: string = 'Seu título vai aqui';
  @Input() subtitulo: string = '';
}
