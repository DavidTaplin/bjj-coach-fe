import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Move {
  id: number;
  name: string;
  position: string;
  grip: string;
}

@Component({
  selector: 'app-movelist',
  templateUrl: './movelist.component.html',
  styleUrls: ['./movelist.component.css']
})
export class MovelistComponent implements OnInit {

  moves: Move[] = [
    { id: 1, name: "Kimura", position: "closed guard", grip:'collar and elbow' },
    { id: 2, name: "Cross Collar Choke", position: "closed guard", grip: "collar" },
    { id: 3, name: "scissor sweep", position: "closed guard", grip: "collar and elbow"},
  ];

  moveForm: FormGroup | null = null; // Initialize with null

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.moveForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      position: ['', Validators.required],
      grip: ['', Validators.required]
    });
  }

  addMove(): void {
    if (this.moveForm && this.moveForm.valid) {
      const newMove: Move = {
        id: this.moveForm.controls['id'].value,
        name: this.moveForm.controls['name'].value,
        position: this.moveForm.controls['position'].value,
        grip: this.moveForm.controls['grip'].value
      };

      this.moves.push(newMove);
      this.moveForm.reset();
    }
  }
}
