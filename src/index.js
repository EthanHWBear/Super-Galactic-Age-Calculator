import { Age } from './spaceAge.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

$(document).ready(function() {
  $('#age-checker-form').submit(function(event) {
    event.preventDefault();
    const length1 = $('#age').val();
    const triangle = new Age(calculatedUserInput)
    $('#response').append("On " + planet + ", you're " + age + " years old!");
  });
});
