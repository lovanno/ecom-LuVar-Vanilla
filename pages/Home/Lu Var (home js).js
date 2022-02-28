	
/*! 												DOM Selectors		 													!*/
        let arrow = document.getElementsByTagName('span');
        let productBox = document.querySelectorAll("div.product-box");

        let leftArrow = document.querySelector("span:nth-child(1)");
        let rightArrow = document.querySelector("span:nth-child(2)");



        /*Selectors for promo sections (Naturist and Tide) */
        const cineImg1 = document.querySelector("div.cinematic-image");
        const cineImg2 = document.querySelector("div.cinematic2-image");


        const cineBtn1 = document.querySelector("a.cineImg-btn");
        const cineBtn2 = document.querySelectorAll("a.cineImg-btn")[1];



        /*	Modal Selectors	*/
        var modal = document.getElementById('zoomPhotoModal');
        var modalImg = document.querySelector("#currentImg");




/**                          						Nav Bar                										            **/

        window.addEventListener('scroll', function(){
            let header = document.querySelector(".nav-items");
            let windowScroll = window.scrollY > 0;

            header.classList.toggle('scrolling-active', windowScroll);
        });






/***                          				bestSeller Scroll 	- (Section 2) 		   											   ***/ 

/*		Declaring Elements		*/
        let xCord = 0;
        let movePer = 29.67;
        let maxMove = 59.34;

        let product_page = Math.ceil(productBox.length/4);
        leftArrow.style.visibility ="hidden";



        /*		Functions		*/
        arrow[0].onclick = ()=>{left_mover();}
        arrow[1].onclick = ()=>{right_mover();}


        let right_mover = ()=>{	
            xCord += movePer;

            if(xCord>0){
                leftArrow.style.visibility = "visible";
            }

            for(const i of productBox){
                i.style.left = '-' + xCord + '%';

                if(xCord>31.6){
                    i.style.left = '-' + (xCord+1.1) + '%';
                }

                if (xCord > maxMove){
                    i.style.left = '-' + (xCord+2.2) + '%';
                    rightArrow.style.visibility = "hidden";
                }

            }
        }



        let left_mover = ()=>{
            xCord -= movePer;

            for(const i of productBox){

                if (product_page>1){
                    i.style.left = '-' + (xCord + 1.2) + '%';
                }

                if(xCord<59.34){
                    i.style.left = '-' + (xCord + 0.1) + '%';
                }

                if(xCord < 29.67){
                    i.style.left = (xCord + 0.9) + '%';
                    leftArrow.style.visibility = "hidden";

                    xCord=0;
                }

            }


            if (rightArrow.style.visibility == "hidden"){
                rightArrow.style.visibility = "visible";
            }      

        }



        /**     Product Section	(bestSeller Cont - Section 2)	**/

        var prodNumber = 0;
        const bestProdBtn = document.querySelectorAll("a.prod-btn-link");

        for(let i=0; i<bestProdBtn.length; i++){

            bestProdBtn[i].addEventListener("click", function(){
                var prodIDNum = bestProdBtn[i].id;				
                prodNumber = prodIDNum;
            })


        }



        function productRedirect() {    /*	Allows variable to be accessed in watchPage	*/
            setTimeout(
                function() {

                    if(mediaWatchlimit.matches) return localStorage.setItem("product", undefined)   /* prevents mobile from opening modal 2 (watchPage)*/
            
                    localStorage.setItem("product", prodNumber)

                }, 0.1);
        }






        /** 		Modal Section			**/

        var modalSwitch = 0;


        function imgRetrieve(image){
            var newImg = window.getComputedStyle(image).backgroundImage;     
            var prodImgUrl = "url(\"../../" + newImg.slice(140, -2) + "\")";

            return prodImgUrl;
        }		



        function modalSettings(leftPT, bgPosPT, widthPT){
            modalImg.style.left = leftPT;
            modalImg.style.backgroundPosition = bgPosPT;
            modalImg.style.width = widthPT;

            modal.style.display = "block";
            document.body.style.overflowY = "hidden";
            document.body.style.overflowX = "hidden";


            setTimeout(
                function() {	
                    modalSwitch = 1;

                }, 0.1)
        }



        /*Media Queries for Promo Photos (Modal Btn)*/

        var mediaQ1 = window.matchMedia("(max-width: 1050px)");
        var mediaQ2 = window.matchMedia("(max-width: 600px)");



        var mediaWatchlimit = window.matchMedia("(max-width: 499px)");     /*prevent modal 2 (prodDesc) from opening in watchPage*/


        if (mediaQ2.matches){ 
            cineBtn1.style.visibility = "hidden";
            cineBtn2.style.visibility = "hidden";

        }



        /*cinematic (naturistAqua - Promo2) - Section3*/
        cineBtn1.onclick = function(e) {
            var newImage = imgRetrieve(cineImg1);
            modalImg.style.backgroundImage = newImage;

            if (mediaQ1.matches) { 
                modalSettings("5%", "80%", "90%");    
              }
            else{
                modalSettings("71%", "80%", "116%");
            }
        

        }


        /*cinematic2 (tide - Promo2) - Section5*/
        cineBtn2.onclick = function(e) {
            var newImage = imgRetrieve(cineImg2);
            modalImg.style.backgroundImage = newImage;
            
            if (mediaQ1.matches) { 
                modalSettings("8%", "2%", "95%");    
              }
            else{
                modalSettings("-87%", "left", "140%");
            }

        }



        window.onclick = function(event) {       /*closes modal if click is outside of modal*/ 
            if (event.target !== modalImg && modalSwitch == 1) {
                modal.style.display = "none";
                document.body.style.overflowY = "visible";
                modalSwitch  = 0;
            }

        }