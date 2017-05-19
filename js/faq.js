$(function(){
  
  normalBgColor = "#460303";
  highlightBgColor = "#848484";
  selectedBgColor = "#808080";
  
  normalFgColor = "#848484";
  highlightFgColor = "#460303";
  selectedFgColor = "#400000";
  
  currentLink = "";
  questionCats = document.getElementsByClassName("questionBlock");
  
  desc = new Array("Still Alive is a zombie-themed LARP (Live Action Role-Playing Game. We host one event per month from May - October each year, ending around Halloween with our big end-of-the-year event. You can find a list of our currently planned events <a href=\"events.html\">here</a>.",
  "If you'd like to join, you only need to contact one of the primary game-runners (Rydge Craker, Kevin Novy, or Ethan Novy) and we'll set you up with everything you need. Information to contact us can be found <a href=\"contact.html\">here</a>, and make sure you join our <a href=\"https://www.facebook.com/groups/1694035254163754/\">Facebook Page</a>!",
  "Events are held once per month during the months of May - October. Most events will take place from around 5pm - 1am and check-in will begin at 4pm. For more information about a specifc event, check out our <a href=\"events.html\">events page</a>.",
  "Events take place on a patch of forested land just outside of Wisconsin Dells. The address is:<br><br> E11971 County HWY U baraboo, WI 53913<br><br>Google Maps isn't able to find the address, though, so expect directions shortly.",
  "Still Alive is a mature LARP full of foul language, low-lit conditions, and horror scenarios. Expect to be scared every once in a while and to be on alert for the entire event.<br>We're a medium contact LARP so don't be afraid to tell someone that they're hitting too hard, although melee weapons aren't the primary form of attacking... bullets are.<br><br>You should also expect to be challenged. Still Alive is an unforgiving game that will punish your charcter for doing something stupid (like running into the woods alone). We're all just trying to survive out here!",
  "Under ordinary circumstances, players of Still Alive MUST be 18 or older. However, with special permissions, players may be as young as 17 years old.",
  "Of course you can! We love it when people bring their own gear.",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "You can read all of the rules and guidlines of Still Alive in the Still Alive Handbook, which can be found on the <a href=\"downloads.html\">Downloads page</a>. You can also find lots of other downloadable-content there (like the skill tree)."
  );
  
  
  
  
  function clearSelected(){
    for(var i = 0; i < questionCats.length; i++) {
      var qs = questionCats[i].getElementsByTagName("p");
      for(var j = 0; j < qs.length; j++) {
        if (currentLink == qs[j].id){
          $(qs[j]).css('background-color', selectedBgColor);
          $(qs[j]).css('color', selectedFgColor);
        } else {
          $(qs[j]).css('background-color', normalBgColor);
          $(qs[j]).css('color', normalFgColor);
        }
      }
    }
  }
  
  
  $('div.questionBlock p').hover(function() {
    this.style.cursor = "pointer";
    $(this).css('background-color', highlightBgColor);
    $(this).css('color', highlightFgColor);
  }, function(){
    this.style.cursor = "default";
    if (currentLink == this.id){
      $(this).css('background-color', selectedBgColor);
      $(this).css('color', selectedFgColor);
    } else {
      $(this).css('background-color', normalBgColor);
      $(this).css('color', normalFgColor);
    }
  });
  
  $('div.questionBlock p').click(function() {
    currentLink = this.id;
    $("#questionTitle").html(this.innerHTML);
    clearSelected();
    var idNum = parseInt(currentLink.substr(3));
    $("#questionDesc").html(desc[idNum - 1]);
    window.scrollTo(0, 100);
  });
  
});