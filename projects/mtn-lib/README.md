# MtnLib

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.13.

## Code scaffolding

Run `ng generate component component-name --project mtn-lib` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project mtn-lib`.

> Note: Don't forget to add `--project mtn-lib` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build mtn-lib` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build mtn-lib`, go to the dist folder `cd dist/mtn-lib` and run `npm publish`.

## Running unit tests

Run `ng test mtn-lib` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## How to use this library to any other Angular Project

## Step 1

ng add mtn-lib

## Step 2

import { MtnLibModule } from 'mtn-lib' in your AppModule;

## Step 3

Add with in NgModule imports array like below
imports: [BrowserModule, MtnLibModule],

## How to use carousel component

## Step 1

<mtn-carousel [cards]="cards" [bigCardIndex]="bigCardIndex" (carouselEvent)="carouselEventHandler($event)"></mtn-carousel>

Data from Parent to Child

cards is array of cards

cards = [
{
imgPath: 'assets/images/test.png',
title: 'Mobile internet',
btnText: 'Start Here',
altText:
'Please add Path with prefix to root folder relative to root folder',
}
]

imagePath is path of the image of card
title is title of card
btnText used to the label of the button in big card
altText is used in case of image don't load.

bigCardIndex is the property for showing big card.

Events from carousel component

carouselEvent is callBack when prev btn click , previous animation complete,
next button click and next animation complete
