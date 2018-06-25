import { Injectable } from '@angular/core';

@Injectable()
export class VoteStorageService {

  constructor() { }

  storeMaleCount(count: number){
    localStorage.setItem("maleVoteCount", count.toString());
  }

  getMaleCount(): number{
    return +localStorage.getItem("maleVoteCount");
  }

  storeFemaleCount(count: number){
    localStorage.setItem("femaleVoteCount", count.toString());
  }

  getFemaleCount(){
    return +localStorage.getItem("femaleVoteCount");
  }

  resetVoteCounts(){
    localStorage.setItem("maleVoteCount", "0");
    localStorage.setItem("femaleVoteCount", "0");
  }
}
