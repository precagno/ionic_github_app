import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubProvider } from '../../providers/github/github';

import {User} from '../../models/user.interface';

/**
 * Generated class for the ProfileSearchResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {

  user: User;

  constructor(private navCtrl: NavController, private navParams: NavParams,private github: GithubProvider) {
  }

  ionViewDidLoad() {
    let name=this.navParams.get('user');
    this.github.getUserMockData(name).subscribe(data=>{
      this.user=data;
    });

    console.log(this.user);
  }

}
