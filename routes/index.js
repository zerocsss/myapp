var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.headers["language"])
  var title = res.__('TITLE')
  var data_from_title = res.__('DATA_MADOL_TITLE')
  var data_from_dec = res.__('DATA_FROM_DEC')
  var confirmed = res.__('CONFIRMED')
  var deaths = res.__('DEATHS')
  var recovered = res.__('RECOVERED')
  var increased = res.__('INCREASED')
  var good_btn = res.__('GOOD_BTN')
  var un_well_btn = res.__('UN_WELL_BTN')
  var near_health = res.__('NEAR_HEALTH')
  var near_health_dec = res.__('NEAR_HEALTH_DEC')
  var near_dec = res.__('NEAR_DEC')
  var well = res.__('WELL')
  var un_well = res.__('UN_WELL')
  var status_text_good = res.__('STATUS_TEXT_GOOD')
  var status_text_bad = res.__('STATUS_TEXT_BAD')
  var share_dec = res.__('SHARE_DEC')
  var download_dec = res.__('DOWNLOAD_DEC')
  res.render('index', { 
    title, 
    data_from_dec, 
    data_from_title, 
    confirmed,
    deaths,
    recovered,
    increased,
    good_btn,
    un_well_btn,
    near_health,
    near_health_dec,
    near_dec,
    well,
    un_well,
    status_text_good,
    status_text_bad,
    share_dec,
    download_dec
  });
});

module.exports = router;
