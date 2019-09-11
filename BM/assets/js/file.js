// BOOK Manager application
// Copyright 2019 Dream And Code All rights reserved
// This is created for training purpose to javascript

 let file_table = ["livre1.pdf", "livre2.pdf", "livre3.pdf", "livre4.pdf", "livre5.pdf"];
 let path = 'assets/doc/';
 let file_path = '';
 let all_book = document.getElementsByClassName("book");
 let show_book = document.querySelector('object')
 for (let index in all_book)
    {
      all_book[index].onclick = function()
      {
        file_path = path + file_table[index];
        show_book.setAttribute('data', file_path);
      }
    }
