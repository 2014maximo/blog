import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagen-modal',
  templateUrl: './imagen-modal.component.html',
  styleUrls: ['./imagen-modal.component.css']
})
export class ImagenModalComponent implements OnInit {

  public zoom = 1;

  constructor() { }

  @Input() imageUrl: string = '';
  @Input() imageRef: string = '';

  ngOnInit(): void {
  }

  abrirModal() {
    let shand = document.getElementsByClassName(this.imageRef) as HTMLCollectionOf<HTMLElement>

    if (shand.length != 0) {
      shand[0].style.display = 'block';
    }
  }

  cerrarModal(){
    let shand = document.getElementsByClassName(this.imageRef) as HTMLCollectionOf<HTMLElement>

    if (shand.length != 0) {
      shand[0].style.display = 'none';
    }
  }

}
