import {Component} from '@angular/core';

@Component({
    selector:'Header',
    templateUrl:'./Header.html',
    styleUrls:['./header.css']
})

export class Header{
    title = 'Todo note'
    openSide = (e)=>{
        console.log(e)
    }
}
