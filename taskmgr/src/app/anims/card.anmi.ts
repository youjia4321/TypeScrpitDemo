import { transition, trigger, style, state, animate } from '@angular/animations';

export const cardAmin = trigger('card', [
    state('in', style({transform: 'scale(1)', 'box-shadow': 'none'})),
    state('out', style({transform: 'scale(1.1)', 'box-shadow': '3px 3px 5px 6px #ccc'})),
    transition('in => out', animate('100ms ease-in')),
    transition('out => in', animate('100ms ease-out'))
])