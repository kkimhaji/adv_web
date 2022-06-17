import random from './random.js';
import avg from './average.js';

document.getElementById('average').innerHTML = avg([1, 10, 9, 5]);
document.getElementById('random').innerHTML = random(100, 20);