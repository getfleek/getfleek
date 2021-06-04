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
    image.src='6.png';
    image_tracker='6';
  }

  else if(image_tracker=='6')
  {
    image.src='7.png';
    image_tracker='7';
  }

  else if(image_tracker=='7')
  {
    image.src='8.png';
    image_tracker='8';
  }

  else if(image_tracker=='8')
  {
    image.src='9.png';
    image_tracker='9';
  }

  else if(image_tracker=='9')
  {
    image.src='10.png';
    image_tracker='10';
  }

  else if(image_tracker=='10')
  {
    image.src='11.png';
    image_tracker='11';
  }

  else if(image_tracker=='11')
  {
    image.src='12.png';
    image_tracker='12';
  }

  else if(image_tracker=='12')
  {
    image.src='13.png';
    image_tracker='13';
  }

  else if(image_tracker=='13')
  {
    image.src='14.png';
    image_tracker='14';
  }

  else if(image_tracker=='14')
  {
    image.src='15.png';
    image_tracker='15';
  }

  else if(image_tracker=='15')
  {
    image.src='16.png';
    image_tracker='16';
  }

  else if(image_tracker=='16')
  {
    image.src='17.png';
    image_tracker='17';
  }

  else if(image_tracker=='17')
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

