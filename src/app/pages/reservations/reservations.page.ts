import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { FilterPage } from '../filter/filter.page';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
})
export class ReservationsPage implements OnInit {
  calendar = '../assets/reservations/calendar.svg';
  message = '../assets/reservations/message.svg';
  location = '../assets/reservations/location.svg';
  star= 'assets/search/star.svg';
  save= 'assets/search/add-user.svg';
  filter= 'assets/icons/filter.svg';
  constructor( private data: DataService, private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async filterModal(){
    const modal = await this.modalCtrl.create({
     component: FilterPage,
     cssClass: 'my-custom-class'
   });
   return await modal.present();
 }
}
