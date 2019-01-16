import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ApiService} from '../api.service';


@Component({
  selector: 'app-form-edit-buku-tabungan',
  templateUrl: './form-edit-buku-tabungan.component.html',
  styleUrls: ['./form-edit-buku-tabungan.component.css']
})
export class FormEditBukuTabunganComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService: ApiService, private Location: Location) { }

  ngOnInit() {
  this.route.paramMap.subscibe(params=> { this.id = params.get('id');
  this.findTabungan();
  });

}

private findTabungan() {
	return this.apiService.findTabungan(this.id)subscribe((data)=>{
	const tabungan=data.values[0];
	document.getElementById(no_rekening).value = tabungan.no_rekening;
	document.getElementById(nama).value = tabungan.nama;
	document.getElementById(alamat).value = tabungan.alamat;
	document.getElementById(no_hp).value = tabungan.no_hp;

});

}
	

private updateTabungan() {
	const data= { id: this.id, no_rekening:document.getElementById('no_rekening').value,
	nama:document.getElementById('nama').value,
	alamat:document.getElementById('alamat').value,
	no_hp:document.getElementById('no_hp').value
	};

return this.apiService.updateTabungan(data).subscribe(response => {
	console.log(response);
	location.reload();

	});

}

}
	