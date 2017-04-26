'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    index({request,response}) {
      response.body = 'hi, egg';
    }
  }
  return HomeController;
};
