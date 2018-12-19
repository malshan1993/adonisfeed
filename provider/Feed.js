'use strict'

const { ServiceProvider } = require('@adonisjs/fold');
const AdonisFeed;

class FeedProvider extends ServiceProvider {

  register () {
    this.app.singleton('Adonis/Addons/AdonisFeed', function (app) {

        return AdonisFeed = 1;
    })
  }

}

module.exports = FeedProvider