import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
@Component({
  selector: 'mtn-carousel',
  templateUrl: './mtn-carousel.component.html',
  styleUrls: ['./mtn-carousel.component.css'],
  animations: [
    // animation triggers go here
  ],
})
export class MtnCarouselComponent implements OnInit {
  @Input() cards: Card[] = [
    {
      imgPath: 'assets/images/test.png',
      title: 'Mobile internet',
      btnText: 'Start Here',
      altText: 'Please add Path with prefix to root folder',
    },
    {
      imgPath: 'assets/images/test.png',
      title: 'Home internet',
      btnText: 'Start Here',
      altText: 'Please add Path with prefix to root folder ',
    },
    {
      imgPath: 'assets/images/test.png',
      title: 'Get a device',
      btnText: 'Start Here',
      altText: 'Please add Path with prefix to root folder',
    },
    {
      imgPath: 'assets/images/test.png',
      title: 'Add a phone line',
      btnText: 'Start Here',
      altText: 'Please add Path with prefix to root folder',
    },
    {
      imgPath: 'assets/images/test.png',
      title: 'Upgrade',
      btnText: 'Start Here',
      altText: 'Please add Path with prefix to root folder',
    },
    {
      imgPath: 'assets/images/test.png',
      title: 'Fixed the issue',
      btnText: 'Start Here',
      altText: 'Please add Path with prefix to root folder',
    },
    {
      imgPath: 'assets/images/test.png',
      title: 'Customer Care',
      btnText: 'Start Here',
      altText: 'Please add Path with prefix to root folder',
    },
  ];

  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  isMouseDown = false;
  startX = 0;
  movedX = 0;
  cardWidth = 240;
  cardOpacity = 1;
  navDisabled = false;
  innerWidth = 1200;
  @Input() bigCardIndex = 3;
  @Output() carouselEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth - 40;
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe((evt) => {
      this.innerWidth = window.innerWidth - 40;
    });
    this.bigCardIndex = Math.floor(this.cards.length / 2);
  }

  prevClick() {
    this.carouselEvent.emit({ event: 'prev' });
    this.navDisabled = true;
    let timeInterVal = setInterval(() => {
      this.movedX -= 5;
      if (this.movedX < -this.cardWidth) {
        clearInterval(timeInterVal);
        this.cardOpacity = 0;
        this.movedX = 0;
        timeInterVal = setInterval(() => {
          this.cardOpacity += 0.1;
          if (this.cardOpacity > 1) {
            this.cardOpacity = 1;
            this.navDisabled = false;
            clearInterval(timeInterVal);
          }
        }, 10);
        this.leftCyclicCard();
        this.carouselEvent.emit({ event: 'previousAnimationComplete' });
      }
    }, 10);
  }
  nextClick() {
    this.carouselEvent.emit({ event: 'next' });
    this.navDisabled = true;
    let timeInterVal = setInterval(() => {
      this.movedX += 5;
      if (this.movedX > this.cardWidth) {
        clearInterval(timeInterVal);
        this.cardOpacity = 0;
        this.movedX = 0;
        timeInterVal = setInterval(() => {
          this.cardOpacity += 0.1;
          if (this.cardOpacity > 1) {
            this.cardOpacity = 1;
            this.navDisabled = false;
            clearInterval(timeInterVal);
          }
        }, 10);
        this.rightCyclicCard();
        this.carouselEvent.emit({ event: 'previousAnimationComplete' });
      }
    }, 10);
  }

  leftCyclicCard(howMany = 1) {
    for (let i = 1; i <= howMany; i++) {
      const lastItem: Card[] = this.cards.splice(0, 1);
      this.cards.splice(this.cards.length, 0, ...lastItem);
    }
  }
  rightCyclicCard(howMany = 1) {
    for (let i = 1; i <= howMany; i++) {
      const lastItem: Card[] = this.cards.splice(this.cards.length - 1, 1);
      this.cards.splice(0, 0, ...lastItem);
    }
  }

  mouseDown(event) {
    this.isMouseDown = true;
    this.startX = event.screenX;
  }
  mouseMove(event) {
    if (this.isMouseDown) {
      this.movedX = event.screenX - this.startX;
    }
  }
  mouseUp(event) {
    this.isMouseDown = false;
    if (this.movedX < -Math.floor(this.cardWidth / 2)) {
      const x = Math.abs(this.movedX);
      const howMany = Math.round(x / this.cardWidth);
      this.leftCyclicCard(howMany);
    } else if (this.movedX > Math.ceil(this.cardWidth / 2)) {
      const x = Math.abs(this.movedX);
      const howMany = Math.round(x / this.cardWidth);
      this.rightCyclicCard(howMany);
    }
    this.cardOpacity = 0.3;
    this.startX = 0;
    this.movedX = 0;
    setTimeout(() => {
      this.cardOpacity = 1;
    }, 10);
  }
}

class Card {
  imgPath: string;
  title: string;
  btnText: string;
  altText: string;
}
