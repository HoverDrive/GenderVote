import { Component, OnInit } from '@angular/core';
import { VoteStorageService } from './services/vote-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Vote your Gender';
  malePercent: string = "0";
  maleVoteCount: number = 0;
  malePercentColor: string = "";
  femalePercent: string = "0";
  femaleVoteCount: number = 0;
  femalePercentColor: string = "";
    
 constructor(private _voteStorage: VoteStorageService){
 }

  ngOnInit() {    
    this.maleVoteCount = this._voteStorage.getMaleCount();
    this.femaleVoteCount = this._voteStorage.getFemaleCount();
    this.setPercentages();
  } 

  maleUpvote(){    
    this.maleVoteCount++;
    this._voteStorage.storeMaleCount(this.maleVoteCount);
    this.setPercentages();
  }

  femaleUpvote(){
    this.femaleVoteCount++;
    this._voteStorage.storeFemaleCount(this.femaleVoteCount);
    this.setPercentages();
  }

  private setPercentages(){

    if(this.maleVoteCount == 0 && this.femaleVoteCount == 0){
      this.malePercent = "0";
      this.femalePercent = "0";
      return;
    }

    this.malePercent = (this.maleVoteCount / (this.maleVoteCount + this.femaleVoteCount) * 100).toFixed(0);
    this.femalePercent = (this.femaleVoteCount / (this.maleVoteCount + this.femaleVoteCount) * 100).toFixed(0);
    this.setPercentageColors(Number(this.malePercent), Number(this.femalePercent));
  }

  private setPercentageColors(male: number, female: number){

    if(male > female){
      this.malePercentColor = "lightgreen";
      this.femalePercentColor = "red";
      return;
    }

    if(male < female){
      this.malePercentColor = "red";
      this.femalePercentColor = "lightgreen";
      return;
    }

    this.malePercentColor = "";
    this.femalePercentColor = "";
  }
}
