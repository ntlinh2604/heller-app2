import { Component ,OnInit } from '@angular/core';
import machinesData from '../../machines.json';


interface Machine {  
  tool_id: string;
  count : number;
  time: number;
  cposmin :number;
  cposmax : number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  machines : Machine[] = machinesData.M54276;
  tool_id : any;
  p: number = 1;
  
  ngOnInit(): void{
    
  }

  toHour(totalSeconds:any) {
    const totalMinutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if( hours <= 0) return minutes+ 'm' +seconds +'s';

    return hours + "h"+ minutes+ 'm' +seconds +'s';
  }

}
