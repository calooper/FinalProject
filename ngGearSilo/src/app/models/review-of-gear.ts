import { Reservation } from './reservation';

export class ReviewOfGear {

  id: number;
  rating: number;
  review: string;
  reservation: Reservation;

  constructor( id?: number, rating?: number, review?: string, reservation?: Reservation) {
    this.id = id;
    this.rating = rating;
    this.review = review;
    this.reservation = reservation;
  }
}
