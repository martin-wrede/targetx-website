
<section className="bild">
 
<div className="bildgalerie">

<div  className="schalterdiv  schalter-1svg"><a  className="galerie-navi" id="btn1">
    <img src={PfeilLinks}    width="100%" height="100%" 
    className="a-icon-pfeil" /></a>
</div>

<div  className="bilderdiv">
        <div  className="bildtitel"></div>
        <div  id="bild1" className="bilderrahmen"  >
          {/*  <img alt="Bild" className="bildklasse3" style="position: absolute;" > */}
            <img alt="Bild"  style="width:100%; height:100%;"
             src={White} />
        </div>
        <div  className="bildzaehler"  style=" "></div>
</div>
<div  className="schalterdiv  schalter-2svg"><a  className="galerie-navi"   id="btn2">
    <img src={PfeilRechts} 
    width="100%" height="100%"  className="a-icon-pfeil" /></a>
</div>
</div>



</section>

<script>


$(document).ready(function(){
var indexNum = 0;
var Bilder= new Array();  /* Preload der Grafiken  */

            $.getScript('wp-content/themes/targetx-responsive/caroussel/daten.js', function(){
              /// erste Bild und Titel werden geladen
              $('.bildtitel').html('<span class="texttitel"><nobr>'+bilderName[0]+'</nobr></span>');
              $('.bildklasse3').attr('src','wp-content/themes/targetx-responsive/caroussel/' + bilderName[0] + '.jpg');
         //    $("#sidebar").html(textName[0]);

              for (i=1 ; i<= bilderName.length; i++) {
              /// Bildnummern werden dargestellt
               var inhalt = '<div id="nummer'+i+'" class="rundeecke"> ' + i +  '</div>';
               $('.bildzaehler').append(inhalt);

               /* Preload aller Bilder zu schnelleren Anzeige */
               Bilder[i-1] = new Image();
               Bilder[i-1].src = 'wp-content/themes/targetx-responsive/caroussel/' + bilderName[i-1] + '.jpg';

              }



            });
        //    var inhalt = '<div class="rundeecke"><a href="#" class="bild-navi" >1</a></div>';


/*
            <div class="rundeecke"><a href="#" class="bild-navi" >1</a></div>
*/


///////////////////////////////////////////////////// start timer funktion
              var  timerId;

              function timerFunction() {
                     timerId = setInterval(diaFunc, 6000);
              }

              function diaFunc() {
                   var result =  f_navi (1, indexNum);
                   indexNum = result;
              }

              timerFunction();  /* start Timer */

///////////////////////////////////////////////////// ende timer funktion

////////////////////////////////////////////////////// ANFANG AUSLAGERUNG DER FUNKTION 2

                function f_navi (richtung,lokalVar) {

                  if(richtung==1){
                   if (lokalVar == bilderName.length -1 ) {  lokalVar = 0 ; }
                   else  {lokalVar = lokalVar + 1 ; }
                   }
                 if(richtung==-1){
                      if (lokalVar > 0) { lokalVar -= 1 ;}
                      else {lokalVar = bilderName.length - 1;}
                   }

                   $('.bildklasse3').hide();
                   $('.bildklasse3').attr('src','wp-content/themes/targetx-responsive/caroussel/' + bilderName[lokalVar] + '.jpg');
                   $('.bildklasse3').fadeIn( 'slow' );

                var lokal =  lokalVar + 1;




                $('.rundeecke').css({'color':'black','border':'0px'});

               $('.bildtitel').html('<span class="texttitel"><nobr>'+bilderName[lokalVar]+'</nobr</span>');
               $('.texttitel').css('width','0px');
           //    $(".texttitel").fadeIn( "slow" );
                $('.texttitel').animate({width:95 + '%'});


               $('#nummer'+lokal).css({'color':'black','border':'1px solid #040404'});

             //  $("#sidebar").html(textName[lokalVar]);

                 return (lokalVar);

                  }


/////////////////////// start click funtion button 1 und 2 ///////////////////

                $('#btn1').click(function(){
                    clearInterval(timerId);
                    indexNum = f_navi (-1, indexNum);
                });

                $('#btn2').click(function(){
                    clearInterval(timerId);
                    indexNum = f_navi (1, indexNum);
                });


});


</script>