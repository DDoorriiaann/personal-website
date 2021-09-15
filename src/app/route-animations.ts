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

export const fader = trigger('routeAnimations', [
  transition('*<=>*', [
    query(':enter,:leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
      }),
    ]),
    query(':enter', [animate('300ms ease', style({ opacity: 1 }))]),
  ]),
]);
