import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-generate-rfq',
  standalone: true,
  imports: [DialogModule, ButtonModule, CommonModule, FormsModule],
  templateUrl: './generate-rfq.component.html',
  styleUrls: ['./generate-rfq.component.css']
})
export class GenerateRfqComponent implements OnInit {
  isModalVisible = false;
  showModal = false;
  vendors: any = [];
  irn: any = [];
  venderData: any = [];
  irnIndex: any;
  irnData: any = [];
  venderList: any = {
    newChecList: [],
    addedVendorList: [],
  };
  irnList: any = {
    newChecList: [],
    addedIrnList: []
  };
  vendorOnj: any = []
  search: any;
  modelType: any

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getVendors();
    this.getIrns();
  }

  getVendors() {
    this.apiService.getVendors().subscribe((data) => {
      this.vendors = data;
      this.venderData = data;
    });
  }

  getIrns() {
    this.apiService.getIrn().subscribe((data) => {
      this.irn.addedIrnList = data;
      this.irnData = data;
    });
  }

  addVendor(type, index?, ir?) {
    this.modelType = type
    this.irnIndex = index;
    this.vendorOnj.push(ir)
    this.isModalVisible = true;
    const modal = document.getElementById('vendorModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
      modal.removeAttribute('aria-hidden');
    }
  }



  addIrn(index: any) {
    this.isModalVisible = true;
    this.irnIndex = index;
    const modal = document.getElementById('irnModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
      modal.removeAttribute('aria-hidden');
    }
  }

  close(idType: string) {
    this.isModalVisible = false;
    this.venderList.search = [];
    this.irnList.search = [];
    this.search = '';
    const modal = document.getElementById(idType);
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    }
  }

  vendorslist() {
    this.venderList.search = this.venderData.filter((el) => {
      return el.company.toLowerCase().includes(this.search.toLowerCase());
    });
  }

  irnlist() {
    this.irnList.search = this.irnData.filter((el) => {
      return el.irn.toLowerCase().includes(this.search.toLowerCase());
    });
  }

  checkboxVendor(event: Event, vendor: any): void {
    const checked = (event.target as HTMLInputElement).checked;
    const index = this.venderList.newChecList.findIndex(
      (v) => v.company === vendor.company
    );
    if (checked && index === -1) {
      this.venderList.newChecList.push(vendor);
    } else if (!checked && index > -1) {
      this.venderList.newChecList.splice(index, 1);
    }
  }

  checkboxIrn(event: Event, irn: any): void {
    const checked = (event.target as HTMLInputElement).checked;
    const index = this.irnList.newChecList.findIndex(
      (i) => i.company === irn.irn
    );
    if (checked && index === -1) {
      this.irnList.newChecList.push(irn);
    } else if (!checked && index > -1) {
      this.irnList.newChecList.splice(index, 1);
    }
  }

  addVendorNewList(type) {
    console.log(type)
    if (type === 'vendor') {
      this.venderList.addedVendorList = [
        ...this.venderList.addedVendorList,
        ...this.venderList.newChecList
      ];
      this.venderList.newChecList = [];
      this.close('vendorModal');
    }
    else {

      // this.irnList.addedIrnList=[
      //   ...this.irnList.addedIrnList,
      //   ...this.venderList.newChecList
      // ]
      // console.log(this.irnList.addedIrnList)
      // this.venderList.newChecList = [];
      console.log(this.vendorOnj)

      const arr = [...this.venderList.newChecList];
      console.log(this.irn.addedIrnList)


      if (!this.irn.addedIrnList[this.irnIndex].arrList) {
        this.irn.addedIrnList[this.irnIndex].arrList = [];
      }

      this.irn.addedIrnList[this.irnIndex].arrList = [
        ...this.irn.addedIrnList[this.irnIndex].arrList,
        ...arr
      ];
      this.venderList.addedVendorList = [
        ...this.venderList.addedVendorList,
        ...this.venderList.newChecList
      ];
      this.venderList?.addedVendorList.forEach((el) => {
        this.venderList.newChecList.forEach((dl) => {
          if (el.company === dl.company) {
            el.arrList = this.vendorOnj
          }
        })
      })
      this.vendorOnj = []
      // console.log(this.vendorOnj)
      // const dt=[{id: '1', irn: 'IRN/2024-25/001'}]
      // this.venderList.addedVendorList[this.irnIndex].arrList = [
      //   ...dt
      // ];


      this.venderList.newChecList = [];
      this.close('vendorModal');
    }

  }

  addIrnNewList() {
    const arr = [...this.irnList.newChecList];

    if (!this.venderList.addedVendorList[this.irnIndex].arrList) {
      this.venderList.addedVendorList[this.irnIndex].arrList = [];
    }

    this.venderList.addedVendorList[this.irnIndex].arrList = [
      ...this.venderList.addedVendorList[this.irnIndex].arrList,
      ...arr
    ];
    this.irnList.newChecList = [];
    this.close('irnModal');
  }
}
