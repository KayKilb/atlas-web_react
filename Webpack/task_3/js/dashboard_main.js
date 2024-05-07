import $ from 'jquery';
import debounce from 'lodash/debounce';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
const button = $('<button>Click here to get started</button>');
$('body').append(button);
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;
const updateCounter = () => {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
};

const debounceCounter = debounce(updateCounter, 500);
button.on('click', debounceCounter);