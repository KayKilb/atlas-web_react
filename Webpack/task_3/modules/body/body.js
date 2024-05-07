import $ from 'jquery';
import _ from 'lodash';
import './body.css';

let count = 0;

const updateCounter = () => {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
};

const debounceCounter = _.debounce(updateCounter, 500);

$('body').append('<button id="startButton">Click here to get started</button>');
$('body').append('<p id="count"></p>');

$('#startButton').on('click', debounceCounter);