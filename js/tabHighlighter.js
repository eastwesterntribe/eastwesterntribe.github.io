$(function(){
  
  normalColor = '#160000';
  highlightColor = '#901C1C';
  
  $('#nav li').hover(function() {
    if (this.id != "currentLink") {
      $(this).css('background-color', highlightColor);
      $(this.getElementsByTagName("a")[0]).css('color', normalColor);
    }
  }, function(){
    if (this.id != "currentLink") {
      $(this).css('background-color', normalColor);
      $(this.getElementsByTagName("a")[0]).css('color', highlightColor);
    }
  });
  
});