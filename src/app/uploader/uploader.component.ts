import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {
 
  /*EventEmitter permite a criação de eventos
  customizados dentro do Angular */
  @Output()
  uploadCompleto: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  fazerUpload() {
    alert('Upload iniciado...')
    /*o método emit() inicia a emissão do evento personalizado */
    this.uploadCompleto.emit()
  }
}
