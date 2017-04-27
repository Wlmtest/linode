'use strict';
const fs = require('fs');
const path = require('path');

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1493136890949_6499';
  config.view = {
    defaultViewEngine:'nunjucks',
    mapping:{
      '.tpl':'nunjucks'
    }
  };
  config.news = {
    pageSize: 20,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  config.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(appInfo.baseDir, 'app/public/favicon.png')),
  };

  return config;
};
