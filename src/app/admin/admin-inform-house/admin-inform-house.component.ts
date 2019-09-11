import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2'
import { HouseTypeService } from 'src/app/shared/service/house_typeService';
import { CurrencyService } from 'src/app/shared/service/currencyService';
import { ConvenienceService } from 'src/app/shared/service/convenienceService';
import { RegionService } from 'src/app/shared/service/regionService';
import { BuildingMatService } from 'src/app/shared/service/building_matService';
import { AppearancetService } from 'src/app/shared/service/appearanceService';
import { AnnouncementService } from 'src/app/shared/service/annType';

@Component({
  selector: 'app-admin-inform-house',
  templateUrl: './admin-inform-house.component.html',
  styleUrls: ['./admin-inform-house.component.css']
})
export class AdminInformHouseComponent implements OnInit {

  buil_mats = []
  appearances = []
  annoucTypes = []
  currencys = []
  conveniences = []

  constructor(
    private buildingMat: BuildingMatService,
    private appearance: AppearancetService,
    private annoucType : AnnouncementService,
    private convenience : ConvenienceService
  ) { 
    this.getBuildingMat()
    this.getAppearance()
    this.getAnntype()
    this.getConvenience()
  }

  ngOnInit() {
  }

  getBuildingMat() {
    this.buildingMat.getBuildingMat().subscribe( res =>{
       this.buil_mats = res.json()
   })
  }

  getAppearance() {
    this.appearance.getAppearance().subscribe( res =>{
     this.appearances = res.json()  
   })
  }
  getAnntype() {
    this.annoucType.getAnnType().subscribe(res =>{
     this.annoucTypes = res.json()  
   })
  }

  getConvenience() {
    this.convenience.getConvenience().subscribe( res =>{
      this.conveniences = res.json()
    })
  }



  addBuildMat(value){
    this.buildingMat.post({name: value}).subscribe( result =>{
      if(result) {
        Swal.fire({
          type: 'success',
          title: 'Done',
          text: 'New Material Add',
         })
          this.getBuildingMat()
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

addAppearance(value) {
  this.appearance.post({name: value}).subscribe( result =>{
    if(result) {
      Swal.fire({
        type: 'success',
        title: 'Done',
        text: 'New Appaerance Add',
       })
        this.getAppearance()
    } 
    else {
      Swal.fire({
        type: 'error',
        title: 'Error',
        text: 'Error in Add new Appaerance',
       })

    } 
  })
}

addAnnType(value) {
  this.annoucType.post({name: value}).subscribe( result =>{
    if(result) {
      Swal.fire({
        type: 'success',
        title: 'Done',
        text: 'New Annoucement Add',
       })
        this.getAnntype()
    } 
    else {
      Swal.fire({
        type: 'error',
        title: 'Error',
        text: 'Error in Add new Announcement',
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

deleteMaterial(id) {
  this.buildingMat.delete(id).subscribe( res =>{
    if(res) {
      Swal.fire({
        type: 'success',
        title: 'Done',
        text: 'Material Deleted',
       })
        this.getBuildingMat()
    } 
    else {
      Swal.fire({
        type: 'error',
        title: 'Error',
        text: 'Error in Delete Material',
       })

    } 
  })  
}

deleteAppearance(id) {
  this.appearance.delete(id).subscribe( res =>{
    if(res) {
      Swal.fire({
        type: 'success',
        title: 'Done',
        text: 'Appaerance deleted',
       })
        this.getAppearance()
    } 
    else {
      Swal.fire({
        type: 'error',
        title: 'Error',
        text: 'Error in Delete Appaerance',
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

deleteAnnType(id) {
  this.annoucType.delete(id).subscribe( res =>{
    if(res) {
      Swal.fire({
        type: 'success',
        title: 'Done',
        text: 'Type deleted',
       })
        this.getAnntype()
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


}
