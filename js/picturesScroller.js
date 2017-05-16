$(function(){
  $('.tabDesc').hide();
  $('.tabDesc:first').show();
  
  timerInterval = 7000;
  
  campPicTitle = new Array("Camp Construction May 9th, 2017", "Camp Construction May 9th, 2017", "Camp Construction May 9th, 2017", "Camp Construction April 28th, 2017", "Camp Construction August 12th, 2016", "Camp Construction August 12th, 2016", "Camp Construction August 12th, 2016", "Camp Construction August 12th, 2016", "Camp Construction May 9th, 2017", "Camp Construction August 1st, 2016", "Camp Construction August 1st, 2016", "Camp Construction August 1st, 2016", "Camp Construction August 1st, 2016");
  campPicDesc = new Array("Finally completed the walls!", "Outside shot of the completed walls.", "Sunset shot from inside the camp.", "The start of the second layer of walls!", "Third combat test with some lower wall construction.", "Third combat test with some lower wall construction (pic 2).", "Third combat test with some lower wall construction (pic 3).", "Third combat test with some lower wall construction (pic 4).", "Night shot of the completed walls!", "Construction of the wall begins!", "Construction of the wall begins! (pic 2)", "Construction of the wall begins! (pic 3)", "Construction of the wall begins! (pic 4)");
  
  weapPicTitle = new Array("Collection", "Melee Weapons", "Melee Weapons", "Firearms", "Firearms", "Collection", "Melee Weapons", "Melee Weapons");
  weapPicDesc = new Array("An old image of our collection of Nerf&trade; guns under UV light.", "The sledgehammer. Its size category is Medium.", "A wrench. Its size category is Light.", "Examples of Military Grade firearms.", "The Sniper Rifle after it's been painted. Its size category is Super-Heavy.", "A new image of our collection of Nerf&trade; guns and melee weapons.", "Three small coreless knives. Their size category is Super-Light.", "A fireaxe. Its size category is Medium.");
  
  miscPicTitle = new Array("Body Parts", "Body Parts");
  miscPicDesc = new Array("It seems our zombies didn't finish their snacks...", "More scattered body parts... and a cat.");
  
  makeupPicTitle = new Array("Mask", "Mask", "Mask", "Makeup", "Makeup", "Makeup", "Mask");
  makeupPicDesc = new Array("Beware of zombies in the dark!", "Some say the top of his hair still lives on.", "Dead eyes.", "Beware mortal, or rather immortal, wounds.", "Zombie in the dark.", "A sign you should probably run.", "Always watching... Always waiting...");
  
  var currentPicTitle = campPicTitle;
  var currentPicDesc = campPicDesc;
  
  var highlightColor = '#300000';
  var lowlightColor = '#180000';
  
  var folderPath = "images/camp/"
  var imageCounter = 1;
  var imgDiv = document.getElementById("defaultTab");
  var timer;
  
  var numCampImages = 13;
  var numMakeupImages = 7;
  var numMiscImages = 2;
  var numWeaponsImages = 8;
  var li = document.getElementById('pictureNav').getElementsByTagName('li')[0];
  $(li).css('background-color', highlightColor);
  
  function changeImage(){
    incrementImageCounter();
    var fullPath = folderPath + "image" + imageCounter + ".jpg";
    var img = imgDiv.getElementsByTagName("img")[0];
    var title = imgDiv.getElementsByTagName("h3")[0];
    var desc = imgDiv.getElementsByTagName("p")[0];
    
    title.innerHTML = currentPicTitle[imageCounter - 1] + " (Image #" + imageCounter + ")";
    desc.innerHTML = currentPicDesc[imageCounter - 1];
    
    img.src = fullPath;
  }
  
  
  
  $('#pictureNav li').hover(function() {
    var theStuff = document.getElementById('pictureNav').getElementsByTagName('li');
    for(var i = 0; i < theStuff.length; i++){
      $(theStuff[i]).css('background-color', lowlightColor);
    }
    
    $(this).css('background-color', highlightColor);
    
    var currentlyActive = $(this).attr("id");
    
    if(currentlyActive == "campPics") {
      folderPath = "images/camp/";
      imageCounter = 0;
      currentPicTitle = campPicTitle;
      currentPicDesc = campPicDesc;
    } else if (currentlyActive == "weaponPics") {
      folderPath = "images/weapons/";
      imageCounter = 0;
      currentPicTitle = weapPicTitle;
      currentPicDesc = weapPicDesc;
    } else if (currentlyActive == "miscPics") {
      folderPath = "images/misc/";
      imageCounter = 0;
      currentPicTitle = miscPicTitle;
      currentPicDesc = miscPicDesc;
    } else if (currentlyActive == "makeupPics") {
      folderPath = "images/makeupAndMaskTrials/";
      imageCounter = 0;
      currentPicTitle = makeupPicTitle;
      currentPicDesc = makeupPicDesc;
    }
    changeImage();
    clearInterval(timer);
    timer =  setInterval(changeImage, timerInterval);
    
  }, function(){
    
  });
  
  function incrementImageCounter() {
    var maxNum = 0;
    if(folderPath == "images/camp/") {
      maxNum = numCampImages;
    } else if (folderPath == "images/makeupAndMaskTrials/") {
      maxNum = numMakeupImages;
    } else if (folderPath == "images/misc/") {
      maxNum = numMiscImages;
    } else if (folderPath == "images/weapons/") {
      maxNum = numWeaponsImages;
    }
    
    if(imageCounter < maxNum){
      imageCounter++;
    } else {
      imageCounter = 1;
    }
    
  }
  
  timer = setInterval(changeImage, timerInterval);
  
  $("#primaryContainer img").click(function(){
    changeImage();
    clearInterval(timer);
    timer =  setInterval(changeImage, timerInterval);
  });
  
});