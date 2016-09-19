var colors = ["#FF0000", "#FF3300", "#FF7700", "#FFAA00", "#FFFF00", "#AAFF00", "#77FF00", "#33FF00", "#00FF00", "#00FF33", "#00FF77", "#00FFAA", "#00FFFF", "#00AAFF", "#0077FF", "#0033FF", "#0000FF", "#3300FF", "#7700FF", "#FF00FF", "#FF00AA", "#FF0077", "#FF0033"];
var number_of_colors = colors.length;

var text_strings = document.getElementsByClassName("rainbow");
if (text_strings.length > 0) {
  var current_counter = 0;
  for (var i = 0; i < text_strings.length; i++) {
    var ele = text_strings[i];
    var tmp_string = ele.textContent || ele.innerText;
    var new_inner_html = "";
    for (var j = 0; j < tmp_string.length; j++) {
      new_inner_html += "<span style='color:" + colors[current_counter%number_of_colors] + "'>" + tmp_string.charAt(j) + "</span>";
      current_counter++;
    }

    ele.innerHTML = new_inner_html;
  }
}
