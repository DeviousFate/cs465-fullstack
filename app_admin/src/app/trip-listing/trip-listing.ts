import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCard } from '../trip-card/trip-card';
import { Trip } from '../models/trip';
import { TripData } from '../services/trip-data';

import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-listing',
  imports: [CommonModule, TripCard],
  providers: [TripData],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css',
})
export class TripListing implements OnInit {
  trips: Array<Trip> = [];
  message: string = '';

  constructor(
    private tripDataService: TripData,
    private router: Router,
  ) {}

  private getData(): void {
    this.tripDataService.getTrips().subscribe({
      next: (value: any) => {
        this.trips = value;
        if (value.length > 0) {
          this.message = 'There are ' + value.length + ' trips available.';
        } else {
          this.message = 'There were no trips retireved from the database';
        }
        console.log(this.message);
      },
      error: (error: any) => {
        console.log('Error: ' + error);
      },
    });
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  ngOnInit(): void {
    this.getData();
  }
}