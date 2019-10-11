import controller from './hosting-cdn-order.controller';
import template from './hosting-cdn-order.html';

export default {
  controller,
  template,
  bindings: {
    goBack: '<',
    hosting: '<',
    isPerfOffer: '<',
  },
};
