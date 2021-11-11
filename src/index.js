import Triangle from './triangle.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

$(document).ready(function() {
  $('#age-checker-form').submit(function(event) {
    event.preventDefault();
    const length1 = $('#age').val();
    const triangle = new Age(calculatedUserInput)
    const response = triangle.checkType();
    $('#response').append("<p>" + response + "</p>");
  });
});