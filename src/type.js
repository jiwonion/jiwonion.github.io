'use strict';

new TypeIt('.home__title--strong', {
  loop: true,
  speed: 80,
  deleteSpeed: 100,
}) //space
  .pause(1500)
  .delete(12)
  .type('positive')
  .pause(1500)
  .delete(8)
  .type('creative')
  .pause(1500)
  .go();
