import 'bootstrap';
import './bootstrap.min.css';
import './styles.css';
import $ from "jquery";

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
  });
});

