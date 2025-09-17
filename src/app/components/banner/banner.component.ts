import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() imagem: string = '';
  @Input() alt: string = 'descrição da imagem';
  @Input() titulo: string = 'Seu título vai aqui';
  @Input() subtitulo: string = '';
}
