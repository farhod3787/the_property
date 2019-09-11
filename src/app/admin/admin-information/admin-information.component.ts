import { Component, OnInit } from '@angular/core';
import { RegionService } from 'src/app/shared/service/regionService';

import Swal from 'sweetalert2'
import { HouseTypeService } from 'src/app/shared/service/house_typeService';
import { CurrencyService } from 'src/app/shared/service/currencyService';
import { ConvenienceService } from 'src/app/shared/service/convenienceService';


@Component({
  selector: 'app-admin-information',
  templateUrl: './admin-information.component.html',
  styleUrls: ['./admin-information.component.css']
})
export class AdminInformationComponent implements OnInit {
 
    regions = []
    house_types = []
    currencys = []
    conveniences = []
 
  constructor( 
    private regionService: RegionService,
    private house_type: HouseTypeService,
    private currency : CurrencyService,
    private convenience : ConvenienceService
    ) {
    this.getRegions()
    this.getHouseType()
    this.getCurrency()
    this.getConvenience()
   }

   getRegions() {
     this.regionService.getRegions().subscribe( res =>{
        this.regions = res.json()
    })
   }

   getHouseType() {
     this.house_type.getHouseTypes().subscribe( res =>{
      this.house_types = res.json()  
    })
   }
   getCurrency() {
     this.currency.getCurrency().subscribe(res =>{
      this.currencys = res.json()  
    })
   }
   getConvenience() {
     this.convenience.getConvenience().subscribe( res =>{
       this.conveniences = res.json()
     })
   }


  ngOnInit() {
  }

  addRegion(value){
      this.regionService.post({name: value}).subscribe( result =>{
        if(result) {
          Swal.fire({
            type: 'success',
            title: 'Done',
            text: 'New Region Add',
           })
            this.getRegions()
        } 
        else {
          Swal.fire({
            type: 'error',
            title: 'Error',
            text: 'Error in Add new Region',
           })

        } 
      })
  }

  addHousetype(value) {
    this.house_type.post({name: value}).subscribe( result =>{
      if(result) {
        Swal.fire({
          type: 'success',
          title: 'Done',
          text: 'New House Type Add',
         })
          this.getHouseType()
      } 
      else {
        Swal.fire({
          type: 'error',
          title: 'Error',
          text: 'Error in Add new House Type',
         })

      } 
    })
  }

  addCurrency(value) {
    this.currency.post({name: value}).subscribe( result =>{
      if(result) {
        Swal.fire({
          type: 'success',
          title: 'Done',
          text: 'New Currency Add',
         })
          this.getCurrency()
      } 
      else {
        Swal.fire({
          type: 'error',
          title: 'Error',
          text: 'Error in Add new Currency',
         })

      } 
    })
  }

  addConvenience(value) {
    this.convenience.post({name: value}).subscribe( result =>{
      if(result) {
        Swal.fire({
          type: 'success',
          title: 'Done',
          text: 'New Convenience Add',
         })
          this.getConvenience()
      } 
      else {
        Swal.fire({
          type: 'error',
          title: 'Error',
          text: 'Error in Add new COnvenience',
         })

      } 
    })
  }

  deleteRegion(id) {
    this.regionService.delete(id).subscribe( res =>{
      if(res) {
        Swal.fire({
          type: 'success',
          title: 'Done',
          text: 'Region Deleted',
         })
          this.getRegions()
      } 
      else {
        Swal.fire({
          type: 'error',
          title: 'Error',
          text: 'Error in Delete Region',
         })

      } 
    })  
  }

  deleteType(id) {
    this.house_type.delete(id).subscribe( res =>{
      if(res) {
        Swal.fire({
          type: 'success',
          title: 'Done',
          text: 'Type deleted',
         })
          this.getHouseType()
      } 
      else {
        Swal.fire({
          type: 'error',
          title: 'Error',
          text: 'Error in Delete Type',
         })

      } 
    })  
  }

  
  deleteConvenience(id) {
    this.convenience.delete(id).subscribe( res =>{
      if(res) {
        Swal.fire({
          type: 'success',
          title: 'Done',
          text: 'Convenience deleted',
         })
          this.getConvenience()
      } 
      else {
        Swal.fire({
          type: 'error',
          title: 'Error',
          text: 'Error in Delete Convenience',
         })

      } 
    })  
  }

  deleteCurrency(id) {
    this.currency.delete(id).subscribe( res =>{
      if(res) {
        Swal.fire({
          type: 'success',
          title: 'Done',
          text: 'Currency deleted',
         })
          this.getCurrency()
      } 
      else {
        Swal.fire({
          type: 'error',
          title: 'Error',
          text: 'Error in Delete Currency',
         })

      } 
    })  
  }

}

 

 