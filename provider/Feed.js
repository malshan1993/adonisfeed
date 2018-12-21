'use strict'

const { ServiceProvider } = require('@adonisjs/fold');
const Feed = require('./Src');

class FeedProvider extends ServiceProvider {

  register () {
    this.app.singleton('Adonis/Addons/AdonisFeed', function (app) {

        return new Feed();
    })
  }

}

module.exports = FeedProvider