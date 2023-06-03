import { Component } from '@angular/core';

interface Move {
  id: number,
  name: string,
  position: string
}

@Component({
  selector: 'app-movelist',
  templateUrl: './movelist.component.html',
  styleUrls: ['./movelist.component.css']
})
export class MovelistComponent {

  moves: Move[] = [
    {id: 1, name: "Kimura", position: "closed guard"},
    {id: 2, name: "Cross Collar Choke", position: "closed guard"},
    {id: 3, name: "Arm Triangle", position: "closed guard"},



  ]

}
