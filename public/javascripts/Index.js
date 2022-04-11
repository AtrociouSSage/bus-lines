        //Za animiranje naslova i podnaslova
        $(document).ready(() => { 
            $('.kofolTekst').addClass('animate'); 
        });
        
        $(document).ready(() => { 
            $('.Naslov').addClass('animate'); 
        }); 
        
        //Search filtriranje
        function filtriraj() {
          var input, radios, radio_filter, text_filter, td0, i, divList;
          input = document.getElementById("input");
          text_filter = input.value.toUpperCase();
          divList = $(".card");
            
        
          for (i = 0; i < divList.length; i++) {
            td0 = divList[i].getAttribute('data-content');
            if (td0) {
              if (td0.toUpperCase().indexOf(text_filter) > -1) {
                divList[i].style.display = "";
              } else {
                divList[i].style.display = "none";
              }
            } 
          }
        }
        
        //Za tab sistem
        document.getElementById("Otvoren").click();
        function PromijeniTab(evt, cityName) {
          var i, tabcontent, tablinks;
        
          tabcontent = document.getElementsByClassName("tabcontent");
          for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
          }
        
          tablinks = document.getElementsByClassName("tabdugme");
          for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
          }
          
          document.getElementById(cityName).style.display = "block";
          evt.currentTarget.className += " active";
        }
