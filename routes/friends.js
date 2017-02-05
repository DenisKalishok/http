/**
 * Created by denis on 30.01.2017.
 */
const express = require('express');
const vksdk = require('vksdk');
const router = express.Router();
const config = require('../config');

const vkapi= new vksdk({
  'appId'     : config.vk.appId,
  'appSecret' : config.vk.appSecret,
  'language'  : 'ru'
});

vkapi.setToken(config.vk.accessToken);



router.get('/', function(req, res) {

  vkapi.request('friends.get', {'user_id' : config.vk.userId, 'order' : 'name'}, function(_o) {
    res.setHeader('Content-Type', 'application/json');
    res.json(_o.response);
  });

});

module.exports = router;
