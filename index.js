#!/usr/bin/env node

var program = require('commander');
// Implementing command line arguments later
program
  .version('0.1')
  .parse(process.argv);

var http = require('http');
var sleep = require('sleep');

var options = {
  host: 'slickdeals.net',
  port: 80
};

var cheerio = require('cheerio');

http.get(options, function (res) {
  body = '';

  res.on('data', function (chunk) {
    body += chunk;
  });
  res.on('end', function () {
    var $ = cheerio.load(body);
    
    sleep.sleep(1);

    $('.itemImageLink').each(function (i, element) {
      console.log($(this).attr('title'));
    });
  });
});

