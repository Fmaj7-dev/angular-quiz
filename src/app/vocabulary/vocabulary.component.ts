import { Component, OnInit } from '@angular/core';

import { Word } from '../word';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.css']
})
export class VocabularyComponent implements OnInit {

  word: Word;

  constructor() { }

  ngOnInit() {
    this.word = new Word;
    this.word.wordA ="wordA test";
  }

  show(){
    this.word.wordB ="wordB test";
  }

  correct(){

  }

  wrong(){

  }

}
