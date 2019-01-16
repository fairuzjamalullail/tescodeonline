import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ApiService} from '../api.service';

@Component({
  selector: 'app-form-data-buku-tabungan',
  templateUrl: './form-data-buku-tabungan.component.html',
  styleUrls: ['./form-data-buku-tabungan.component.css']
})
export class FormDataBukuTabunganComponent implements OnInit {

  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit() {
  }

  public createTabungan(){
  const tabungan={
  	no_rekening: document.getElementById('no_rekening').value,
  	nama: document.getElementByid('nama').value,
  	alamat: document.getElementById('alamat').value,
  	no_hp: document.getElementById('no_hp').value
  };

  this.apiService.createTabungan(tabungan.subscribe(resonse) => {
  	console.log(response);
  	this.router.navigate(['']);
  });
 }

}
