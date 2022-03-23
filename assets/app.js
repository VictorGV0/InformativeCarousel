$(document).ready(function(){
    $mousein = 0;
    $currentPosition = 0;
    $myCarousel = $('#customCarousel');
    
    
    
    tname = ["Titulo del Articulo numero 1",
                "Titulo del Articulo numero 2",
                "Titulo del Articulo numero 3",
                "Titulo del Articulo numero 4",
                "Titulo del Articulo numero 5",
                "Titulo del Articulo numero 6",
                "Titulo del Articulo numero 7"]

    links = ["http://esteEsElLink1.com",
                "http://esteEsOtroLink.com",
                "http://AquelFueunLink.com",
                "http://AquiVaOtroLink.com",
                "http://AsiSeFueronLosLinks.com",
                "http://PenultimoLink.com",
                "http://EsteEsElUltimoLink.com"]

    content = ["Referencias del Articulo 1",
                "Referencias del Articulo 2",
                "Referencias del Articulo 3",
                "Referencias del Articulo 4",
                "Referencias del Articulo 5",
                "Referencias del Articulo 6",
                "Referencias del Articulo 7"]
    

        function getAria (){
      if ($("#B1").attr('aria-current')){
        $currentPosition = 1;
      }
      else if ($("#B2").attr('aria-current')){
        $currentPosition = 2;
      }
      else if ($("#B3").attr('aria-current')){
        $currentPosition = 3;
      }
      else if ($("#B4").attr('aria-current')){
        $currentPosition = 4;
      }
      else if ($("#B5").attr('aria-current')){
        $currentPosition = 5;
      }
      else if ($("#B6").attr('aria-current')){
        $currentPosition = 6;
      }
      else if ($("#B7").attr('aria-current')){
        $currentPosition = 7;
      }
    
    }
      
    
        
$('.carousel').mouseenter(function() {
    $mousein = 1;
    $('.infoPanel').addClass("hover")
})

$('.carousel').mouseleave(function() {
    $mousein = 0;
    $('.infoPanel').removeClass("hover")
    })
    
    text = document.querySelectorAll('.textPanel');
    titlLink = document.getElementById('TitleInfoPanel')
    imgLink = document.getElementById('linkImg');
    tcontent = document.getElementById('TextContent');
    titleName = document.getElementById('titlelInk');

       add =(i)=> {
        $('.textPanel').removeClass("active")
            for (let i = 0; i < text.length; i++) { 
                text[i]
            }
            for (let i = 0; i < links.length; i++) {
                links[i]
              }
            for (let i = 0; i < content.length; i++) {
                content[i]
              }
            for (let i = 0; i < tname.length; i++) {
                tname[i]
              }
            titleName.innerHTML = tname[i]  
            tcontent.innerHTML = content[i]
            titlLink.setAttribute("href", links[i])
            imgLink.setAttribute("href", links[i])
            text[i].classList.add('active');}
            add(0);     



function $slideMe () {
    getAria();

    if ($currentPosition == 1){        
        add(0)}

    else if ($currentPosition == 2){
        add(1)}

    else if ($currentPosition == 3){
        add(2)}

    else if ($currentPosition == 4){
        add(3)}

    else if ($currentPosition == 5){
        add(4)}

    else if ($currentPosition == 6){
        add(5)}

    else if ($currentPosition == 7){
        add(6)}
}



$myCarousel.on('slide.bs.carousel', function () {
    setTimeout($slideMe,300)
    });

            
});