import { Component } from '@angular/core';

@Component({
  selector: 'app-task-need-attention',
  templateUrl: './task-need-attention.component.html',
  styleUrls: ['./task-need-attention.component.css']
})
export class TaskNeedAttentionComponent {
public taskNeedAttention = [
  {
    "name":"The Order from Delta Food was not delivered in full Quantity",
    "duration":"1 hr",
    "img":"assets/Group.jpg"
    },{
      "name":"The Order from Quick Food was Short by 03 units",
      "duration":"1hr 20 min",
      "img":"assets/Group.jpg",
      
    },{
      "name":"The Order from Quick Food was Short by 03 units",
      "duration":"1hr 20 min",
      "img":"assets/Vector.jpg",
      
    },{
      "name":"The Order from PQR Distributer had incorrect pricing and caused descripencies in invoice",
      "duration":"1hr 20 min",
      "img":"assets/Vector.jpg",
    
    },{
      "name":"The Order from Quick Food was Short by 03 units",
      "duration":"1hr 20 min",
      "img":"assets/Group.jpg",
      
    }
]
}
