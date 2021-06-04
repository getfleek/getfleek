window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("mynav").style.backgroundColor = "#282828";
  } else {
    document.getElementById("mynav").style.backgroundColor = "#161414";
  }
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("bttns").style.visibility = "visible";
    document.getElementById("bttns").style.opacity = 1;
  } else {
    document.getElementById("bttns").style.opacity = 0;
  }
}

var image_tracker = '1';

function change(){
  var image = document.getElementById('circle');
  if(image_tracker=='1')
  {
    image.src='2.png';
    image_tracker='2';
  }

  else if(image_tracker=='2')
  {
    image.src='3.png';
    image_tracker='3';
  }

  else if(image_tracker=='3')
  {
    image.src='4.png';
    image_tracker='4';
  }

  else if(image_tracker=='4')
  {
    image.src='5.png';
    image_tracker='5';
  }

  else if(image_tracker=='5')
  {
    image.src='1.png';
    image_tracker='1';
  }
  
}

var timer = setInterval('change();', 1000);

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

