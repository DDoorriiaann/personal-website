import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

export const slide = trigger('routeAnimations', [
  transition('home => portfolio', [
    query(':enter, :leave', style({ position: 'absolute' })),

    query(':enter', [
      style({ transform: 'translateY(100%)' }),
      animate('0.3s ease-in-out', style({ transform: 'translateY(0%)' })),
    ]),
    query(':leave', [
      style({ transform: 'translateY(0%)' }),
      animate('0.3s ease-in-out', style({ transform: 'translateY(-100%)' })),
    ]),
  ]),
  transition('portfolio => home', [
    query(':enter, :leave', style({ position: 'absolute' })),

    query(':enter', [
      style({ transform: 'translateY(-100vh)' }),
      animate('0.6s ease-in-out', style({ transform: 'translateY(0vh)' })),
    ]),
    query(':leave', [
      style({ transform: 'translateY(0vh)' }),
      animate('0.3s ease-in-out', style({ transform: 'translateY(100vh)' })),
    ]),
  ]),
]);
