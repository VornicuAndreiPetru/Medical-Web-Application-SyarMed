import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  @Input() rating: number = 0;
  @Output() ratingChange = new EventEmitter<number>(); // 🔥 Required for two-way binding
  @Input() readOnly: boolean = false;

  maxRating: number = 5;

  get fullStars(): number {
    return Math.floor(this.rating);
  }

  get hasHalfStar(): boolean {
    return this.rating % 1 !== 0;
  }

  get emptyStars(): number {
    return this.maxRating - Math.ceil(this.rating);
  }

  // ⭐ Only allow rating changes if not "read-only"
  rate(value: number): void {
    if (!this.readOnly) {
      this.rating = value;
      this.ratingChange.emit(this.rating);  // 🔥 Emit event for two-way binding
    }
  }
}
