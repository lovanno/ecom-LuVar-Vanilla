/*Framework  -  What's needed initially will located here. Some elements will be above loops (for readability). 

                        Search sections by name, number (Section X), or modal (Modal X)  -       Erick Lozano       */



/***!                                               querySelector                                                                           !***/


        /**     sideBar (Section 3)         **/         
        const sidebarBtn = document.querySelectorAll(".sideHeaderBtn");
        var sidebarStyle = document.querySelector("div.sideBar").style;



        /*      modal class (Modal shared)               */    
        
        /*      (modal 1)       */
        var modalCheckoutCart = document.getElementById("modalCheckout");

        var cartOpener = document.getElementById("cartOpen");   /*opens modal 1 (checkout Cart)*/
        var cartCloseX = document.getElementsByClassName("close")[0];




        /*      (modal 2)      */
        var modal2 = document.getElementById("myModal2");

        var descBtn = document.querySelectorAll("button.descViewBtn");
        var prodDescCloseX = document.querySelector("#myModal2 > div > div.modal-header.\\32  > span");



        /*      Shared      */
        const allProdImg = document.querySelectorAll("div.product-image");

        const productTitle = document.querySelectorAll("h5.title");
        const productPrice = document.querySelectorAll("p.price");
        const productColor = document.querySelectorAll("p.color");






        /*      shoppingCart -  separate modules (Modal 1)               */  

        var count = 1;  /*keeps track of number of items added*/
        let boxAddCount = 0;

        let cartContainer = document.querySelector(".cartContainer");  
        let cartNumber = document.querySelector(".cartCount");

        let totalInventory = document.querySelectorAll(".container"); 
        let cartTotalPrice = document.querySelector(".prodPrice");

        let homeAddBtns = document.querySelectorAll("button.add");


        const totalHead = document.querySelector("p.prodHeader");
        const totalCartPrice = document.querySelector("p.prodPrice");
        const totalCount = document.querySelector("p.prodCount");
        const totalColor = document.querySelector("p.prodColor");


        /*Cart Total variables (top/1st Box) */
        const statueCartImage = document.querySelector("div.cartProd-image.-\\31");
        const clearCart = document.querySelector("button.deleteTest.-\\31");
        const statuecartDeleteBtn = document.querySelector("button.deleteProd.-\\31 "); /*used to make element invisible at all times*/
        const moveCartTotalText = document.querySelector("div.textBox.-\\31");





        /*      productDesc -  separate modules (Modal 2)               */

        /*Creates prodDesc Modal 2 Layout*/
        const descProdBox = document.querySelectorAll("div.smallBox");
        const descProdBtn = document.querySelectorAll("div.smBtn");
        const descAddBtn = document.getElementsByClassName("smallBox-image");
        const focusLgImg = document.querySelector("div.focusProd-Image");
        const bottomDescImg = document.querySelector("div.focusProd-Image.\\32");
                
                
        /*Price Text*/
        const moveDescHeader = document.querySelector("div.headerTextWrap");
        const pDescHeader = document.querySelector("h3.headerProdBox");
        const pDescBottomHeader = document.querySelector("h3.headerProdBox.\\31");

        const focusPrice = document.querySelector("p.priceProdView");

        /*Color Subheaders */
        const focusColor = document.querySelector("p.subHeaderView");
        const focusDescColor = document.querySelector("p.subHeaderView.\\32");
                
        /*Btn's*/       
        const pDescTabBtn = document.querySelectorAll(".dot");                
        const pDescAddBtn = document.querySelector("button.productViewBtn");

    
        /*variables*/
        var finalTotalPrice = 0;
        var prodItemCount = 0;
        let counterUpdate = -1;
        var errorNum = 0;



         /*          mediaQuery Breakpoints      */
         var mediaQ1 = window.matchMedia("(min-width: 871px)");  /*This is Q1 (1250px) because of "MIN-width" (it starts here, unlike max-width where instead, it ends) */
         var mediaQ2 = window.matchMedia("(max-width: 870px)");  /*unused*/
         var mediaQ3 = window.matchMedia("(max-width: 499px)");
        



/***!                                                     addEventListeners                                                            !***/



/**     navBar (Section 1)  +  sideBar (Section 3)    -  (Shared)            **/         


        /*    navBar (Section 1) - addEventListener        */

        let header = document.querySelector(".nav-items");

        window.addEventListener('scroll', function(){
            let windowScroll = window.scrollY > 0;
            header.classList.toggle('scrolling-active', windowScroll);
            cartNumber.classList.toggle('scrolling-active', windowScroll);
        });




        /*     sideBar (Section 3) - addEventListener          */
        window.addEventListener('scroll', function(){
            const sidebarStop = document.querySelector("div.container.\\37").getBoundingClientRect(); 

                if(sidebarStop.top <= 600){
                    sidebarStyle.position = "absolute";
                    sidebarStyle.top = "auto";

                    sidebarStyle.bottom = "0%";
                }

                if(sidebarStop.top >= 330){
                    sidebarStyle.position = "sticky";
                    sidebarStyle.top = "12%";

                    sidebarStyle.bottom = "auto";
                } 
        });




/***!                                                 functions                                                      !***/

        /*          General Functions       */

        /*allows to access created button elements*/
        function hasClass(elem, className) {
            return elem.classList.contains(className);
        }

        function htmlSlice(element, number){
            return element.innerHTML.slice(number);
        }

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        }


        function spaceTens(num){
            return num.toString().replace(/\B(?<!\.\d*)(?=(\d{1})+(?!\d))/g, " ")
           
        }


        function removeDup(arr) {
            let s = new Set(arr);
            let it = s.values();

                return Array.from(it);
        }


        


        /*          sideBar Functions       */

        function sidebarOpen() {    
            this.classList.toggle("is-open");  /*This triggers the button*/
            const content = this.nextElementSibling;

            if (content.style.maxHeight) content.style.maxHeight = null;
            else content.style.maxHeight = content.scrollHeight + "px";
        }

        sidebarBtn.forEach((el) => el.addEventListener("click", sidebarOpen));



        /*          shoppingCart (modal 1) Functions       */
        function emptyCartStyle(){
            prodItemCount = 0;

            statueCartImage.style.top = "-12%";
            moveCartTotalText.style.top = "-15%";

            totalHead.innerHTML = "Your Cart is Empty";
            cartTotalPrice.innerHTML = "Explore";
            totalCount.innerHTML = "Conquer";
            totalColor.innerHTML = "Achieve";

            cartNumber.style.visibility = "hidden";
            clearCart.style.visibility = "hidden";
        }


    
        function fullCartStyle(){
            statueCartImage .style.top = "5%";
            moveCartTotalText.style.top = "-22%";
        }


        function showCart(){
            clearCart.style.visibility = "visible";
            cartNumber.style.visibility = "visible";
            cartNumber.innerHTML = count++;


            prodItemCount++;

            totalHead.innerHTML = "Your Cart";
            totalCount.innerHTML = "Items: " + prodItemCount;
            totalColor.innerHTML = "";
    
            const newTotalInsert = "$" + numberWithCommas(finalTotalPrice);
            totalCartPrice.innerHTML = newTotalInsert;
        }



        /*          prodDesc (modal 2) Functions       */
        function descTabGray(){
            for (const btn of pDescTabBtn) {     
                btn.style.backgroundColor = "rgb(187, 187, 187)";
            }

        }

    
        function refreshProdBorder(){
            for (const box of descProdBox) {   
                box.style.border = 'none'; 
            }

        }
    


        /*      modal Functions       */
        cartOpener.onclick = function() {   /*opens cart if cart btn is clicked*/
            document.body.style.overflowY = "hidden";
            modalCheckoutCart.style.display = "block";
        }


        window.onclick = function(event) {        /*closes modal if click is outside of modal*/

            if (event.target == modalCheckoutCart) {
                modalCheckoutCart.style.display = "none";
                document.body.style.overflowY = "visible";

            }

            if((modal2.style.display == "block")){
                document.body.style.overflowY = "hidden";

            }

        }




        cartCloseX.onclick = function() {         /*closes shoppingCart (Modal 1)*/
            modalCheckoutCart.style.display = "none";
            document.body.style.overflowY = "visible";

        }


        prodDescCloseX.onclick = function() {        /*closes prodDesc (Modal 2)*/
            document.body.style.overflowY = "visible";
            modal2.style.display = "none";

        }


           




    /* shoppingCart   -    (Modal 1)*/

    function newBox(){      /* Creates Product Boxes*/
        fullCartStyle();
        let X = boxAddCount++;                          /*number of boxes created. This allows a new box to be created*/


        if(!mediaQ3.matches){
            document.body.style.overflowY = "hidden";
            modalCheckoutCart.style.display = "block"; 
        }     
        

        /*Div Wrapper "cartBox" */
        const newCartBox = document.createElement("div");
        newCartBox.classList.add("cartBox", + " " + X);
        cartContainer.appendChild(newCartBox);

        /*Div Image "cartProd-Image*/
        const newProdImg = document.createElement("div");
        newProdImg.classList.add("cartProd-image", + " " + X);
        newCartBox.appendChild(newProdImg);


        /*Nested Div Wrapper "textBox" */
        const newTextBox = document.createElement("div");
        newTextBox.classList.add("textBox", + " " + X);

        newCartBox.before(newTextBox);        /*appends to cartBox and only needs to be called once. The rest already loaded*/
        newCartBox.appendChild(newTextBox);





        /*Text for product Checkout Boxes */
        const newProdHeader = document.createElement("p");
        newProdHeader.innerHTML = "Product Integration";
        newProdHeader.classList.add("prodHeader", + " " + X); 

        newTextBox.appendChild(newProdHeader);


        const newProdPrice = document.createElement("p");
        newProdPrice.innerHTML = "Has not been developed, Refresh Site";
        newProdPrice.classList.add("prodPrice", + " " + X);

        newTextBox.appendChild(newProdPrice);


        const newProdCount = document.createElement("p");
        newProdCount.innerHTML = "Quantity: 1";
        newProdCount.classList.add("prodCount", + " " + X);

        newTextBox.appendChild(newProdCount);



        const newProdColor = document.createElement("p");
        newProdColor.innerHTML = "";
        newProdColor.classList.add("prodColor", + " " + X);

        newTextBox.appendChild(newProdColor);




        /*          Btns            */
        const newDeleteBtn = document.createElement("button");  /*Subtract Item by One*/
        newDeleteBtn.innerHTML = "-";
        newDeleteBtn.classList.add("deleteTest", + " " + X);

        newCartBox.appendChild(newDeleteBtn);


        const newAddBtn = document.createElement("button");   /*Add Item by One*/
        newAddBtn.innerHTML = "+";
        newAddBtn.classList.add("addTest", + " " + X);

        newCartBox.appendChild(newAddBtn);




                        /*Creates Trashcan SVG for Remove Product Button -  The SVG properties come from Iconify. I created the following to recreate that SVG */

                        var trashCanSvg = document.createElementNS("http://www.w3.org/2000/svg", 'svg'); /*  Creates a path for SVG  */

                        var gClass = document.createElementNS("http://www.w3.org/2000/svg", "g");   /* g class creates attributes */
                            gClass.setAttribute("class", "icon-tabler");
                            gClass.setAttribute("fill", "none");
                            gClass.setAttribute("stroke", "black");

                            gClass.setAttribute("stroke-width", "2");
                            gClass.setAttribute("stroke-linecap", "round");
                            gClass.setAttribute("stroke-linejoin", "round");

                            trashCanSvg.appendChild(gClass);

                        var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');     /*These paths create the lines needed to make a trash can */
                        var path2 = document.createElementNS("http://www.w3.org/2000/svg", 'path'); 
                        var path3 = document.createElementNS("http://www.w3.org/2000/svg", 'path'); 
                        var path4 = document.createElementNS("http://www.w3.org/2000/svg", 'path'); 
                        var path5 = document.createElementNS("http://www.w3.org/2000/svg", 'path'); 


                            path1.setAttribute('d', "M4 7h16");
                            path2.setAttribute('d', "M10 11v6");
                            path3.setAttribute('d', "M14 11v6");
                            path4.setAttribute('d', "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12");
                            path5.setAttribute('d', "M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3");


                            gClass.appendChild(path1);
                            gClass.appendChild(path2);
                            gClass.appendChild(path3);
                            gClass.appendChild(path4);
                            gClass.appendChild(path5);


        
                        trashCanSvg.setAttribute("role", "img");
                        trashCanSvg.setAttribute("width", "1em");
                        trashCanSvg.setAttribute("height", "1em");

                        trashCanSvg.setAttribute("preserveAspectRatio", "xMidYMid meet");
                        trashCanSvg.setAttribute("viewBox", "0 0 24 24");




        const newRemoveBtn = document.createElement("button");
        newRemoveBtn.classList.add("deleteProd", + " " + X);
        newCartBox.appendChild(newRemoveBtn);

        newRemoveBtn.appendChild(trashCanSvg);
    }



    


    /*  productCart CCS Resets  */
    cartNumber.style.visibility = "hidden";
    clearCart.style.visibility = "hidden";
    statuecartDeleteBtn.style.visibility = "hidden";
    pDescTabBtn[0].style.backgroundColor = "black";







/**                                      watchSections (Section 4)  - Functionality                                                        **/         

        const shopBtnClicks = [];               /*Whenever a shop button is clicked, they're added*/
        const firstBtnClick = [];               /*Whenever a button is clicked for the first time*/



        for(let i=0; i< totalInventory.length; i++){  /*This makes all the "add" buttons place products in Cart*/
       
            homeAddBtns[i].addEventListener("click", function() {
                shopBtnClicks.push((homeAddBtns[i]).parentElement.firstElementChild);               /*Elements added into shopBtnClicks*/
                const lastBtnClicked = shopBtnClicks[shopBtnClicks.length-1];                          /*Gives last button clicked*/


try{

            if(shopBtnClicks.indexOf(lastBtnClicked) == shopBtnClicks.lastIndexOf(lastBtnClicked)){       /*If last element is unique, create box*/
                newBox();
                firstBtnClick.push((homeAddBtns[i]).parentElement.firstElementChild);
            }
            else {   
                const btnShopOrder =  document.querySelector("p.prodCount.\\3" +(firstBtnClick.indexOf(lastBtnClicked)));     /* Every product that is added to cart will be numbered. This retrieves it's checkout order. */

                        if(btnShopOrder == null) throw (err);
                            const quantityAdd = (+btnShopOrder.innerHTML.slice(10)+ 1);      /*+ plus sign changes from concate to addition. 10 starts at the quantity: #. Numbers are only included.*/
                            btnShopOrder.innerHTML = "Quantity: " + quantityAdd;        /*Updates checkout quantity of product*/
            }

    }
catch(err){
    console.log("You Can't Re-Add Deleted Items");
}




try{

            /*Update Product Labels (Header, Price, Color) */    
            var orderTest = firstBtnClick.indexOf(lastBtnClicked);

            if(firstBtnClick.indexOf(lastBtnClicked) >= 10){
                var orderTest = spaceTens(orderTest);
            }


            /*  updates prodPhoto   */
            const checkoutProdPhoto = document.querySelector("div.cartProd-image.\\3" + (orderTest));
            const homeProdPhotoGrab = homeAddBtns[i].parentElement.firstElementChild;
            const homeProdPhoto = window.getComputedStyle(homeProdPhotoGrab).backgroundImage;
            checkoutProdPhoto.style.backgroundImage = homeProdPhoto;

            /*  updates prodHeader   */
            const checkoutProdTitle = document.querySelector("p.prodHeader.\\3" + (orderTest));  /*has to be better way to choose selectors*/
            const specificProdTitle = productTitle[i].innerHTML;
            checkoutProdTitle.innerHTML = specificProdTitle;

            /*  updates prodColor   */
            const checkoutProdColor = document.querySelector("p.prodColor.\\3" + (orderTest)); 
            const specificProdColor = productColor[i].innerHTML;
            checkoutProdColor.innerHTML = "Color: " + specificProdColor;

            /*  updates prodPrice   */
            const checkoutProdPrice = document.querySelector("p.prodPrice.\\3" + (orderTest));
            const specificProdPrice = productPrice[i].innerHTML;
            checkoutProdPrice.innerHTML = specificProdPrice;


            
            /*  updates totalPrice   */
            const homeProdPrice = productPrice[i].innerHTML.slice(1);
            const homeNumFormat = parseInt(homeProdPrice.replace(',',''));

            finalTotalPrice += homeNumFormat;


            showCart();

            if(count == 0){
                cartNumber.innerHTML = "";
                cartNumber.style.visibility = "hidden";
                clearCart.style.visibility = "hidden";
                
                count = 1;
            };
          
            

    }   
catch(err){
}


            if(i <= 7){                                               
                descTabGray();
                pDescTabBtn[0].style.backgroundColor = "black";
            }
            else if(i <=14){
                descTabGray();
                pDescTabBtn[1].style.backgroundColor = "black";
            }
            else{
                descTabGray();
                pDescTabBtn[2].style.backgroundColor = "black";
            }

          })      
        }                                                                                                                                                   /*end of for loop*/
            
   


        const allPhotoAddClicks = [];
        const actualBtnOrder = [];


        function retrieveProdImage(increment){
            const prodImgRetrieve = window.getComputedStyle(allProdImg[increment]).backgroundImage; 
            const prodImgUrl = "url(" + prodImgRetrieve.slice(4, -2) + "\")";   
            return prodImgUrl
        }



/**                                            productDesc -  (Modal 2)                                                                 **/   


        for(let k=0; k<descProdBtn.length; k++){      

            function updateDescProd(productNum){
                var prodImgUrl = retrieveProdImage(k+productNum);
                descAddBtn[k].style.backgroundImage = prodImgUrl;  


                var prodImgUrl2 = retrieveProdImage(productNum);
                focusLgImg.style.backgroundImage =  prodImgUrl2;
                bottomDescImg.style.backgroundImage =  prodImgUrl2;


                /*couldn't reduce this to a function due to the different varibles on right side*/
                focusColor.innerHTML = productColor[productNum].innerHTML;
                focusDescColor.innerHTML = productColor[productNum].innerHTML;
                focusPrice.innerHTML = productPrice[productNum].innerHTML;        
                pDescHeader.innerHTML = productTitle[productNum].innerHTML
                pDescBottomHeader.innerHTML = productTitle[productNum].innerHTML


                refreshProdBorder();
                descProdBox[0].style.border = '2px solid black'; 


                descProdBtn[k].addEventListener("click", function() {
                    refreshProdBorder();
                    descProdBox[k].style.border = '2px solid black'; 

                });
            }



            updateDescProd(0);

            for(let j=0; j<pDescTabBtn.length; j++){
                pDescTabBtn[j].addEventListener("click", function() {
                    descTabGray();
                    pDescTabBtn[j].style.backgroundColor = "black";


                    if(pDescTabBtn[0].style.backgroundColor == "black"){
                        updateDescProd(0);
                       
                        if(mediaQ1.matches){                                                            /*Used to make Q1 (1250px) look good*/   
                            moveDescHeader.style.right = "16.85%";
                        }
                        else {
                            moveDescHeader.style.right = "30vw";
                        }

                    }



                    else if(pDescTabBtn[1].style.backgroundColor == "black"){
                        updateDescProd(8);

                        if(mediaQ1.matches){        
                            moveDescHeader.style.right = "19.50%";            
                        }
                        else{
                            moveDescHeader.style.right = "33.5vw";
                        }
                    }
       

                    else if(pDescTabBtn[2].style.backgroundColor == "black"){
                        updateDescProd(16);

                        if(mediaQ1.matches){    
                            moveDescHeader.style.right = "18.75%";                
                        }
                        else{
                            moveDescHeader.style.right = "32.75vw";
                        }
                    
                    }



                })
            }



    
            for(let i=0; i< totalInventory.length; i++){

                homeAddBtns[i].addEventListener("click", function() {

                    if(pDescTabBtn[0].style.backgroundColor == "black"){
                        updateDescProd(0);
                    }
                    else if(pDescTabBtn[1].style.backgroundColor == "black"){
                        updateDescProd(8);
                    }
                    else if(pDescTabBtn[2].style.backgroundColor == "black"){
                        updateDescProd(16);
                    }
                }
            )}


        };

    

    

/*  update images for products  (modal 2) */
        for(let p=0; p<descProdBtn.length; p++){     
        
            function updateDescProd(productNum){                            
                focusPrice.innerHTML = productPrice[p+productNum].innerHTML;
            }


            descProdBtn[p].addEventListener("click", function() {
  
                if(pDescTabBtn[0].style.backgroundColor == "black"){
                    updateDescProd(0);

                    if(mediaQ1.matches){                                                                 /*Used to make Q1 (1250px) look good*/            
                        moveDescHeader.style.right = "16.85%";
                    }
                    else {
                        moveDescHeader.style.right = "30vw";
                    }

                }


                else if(pDescTabBtn[1].style.backgroundColor == "black"){
                    updateDescProd(8);

                    if(mediaQ1.matches){        
                        moveDescHeader.style.right = "19.50%";            
                    }
                    else{
                        moveDescHeader.style.right = "33.5vw";
                    }
                }

       
                else if(pDescTabBtn[2].style.backgroundColor == "black"){
                    updateDescProd(16);

                    if(mediaQ1.matches){    
                        moveDescHeader.style.right = "18.75%";                
                    }
                    else{
                        moveDescHeader.style.right = "32.75vw";
                    }

                }


            })
        }







        /*more functions for Modal 2    - adding to total*/
        function calcerTest(){
            const pricedTest = focusPrice.innerHTML.slice(1);
            const numPriceTest = parseInt(pricedTest.replace(',',''));

                return numPriceTest;
        }



        function updateCart(order, image){
                let photoTest2 = document.querySelector("div.cartProd-image.\\3" + order);
                photoTest2.style.backgroundImage = image; 

                const checkoutProdTitle = document.querySelector("p.prodHeader.\\3" + order);  /* works because it creates unique values. Doesn't increment if the same element is chosen. */
                checkoutProdTitle.innerHTML =  pDescHeader.innerHTML;
                           
                const checkProd2 = document.querySelector("p.prodColor.\\3" + order); 
                checkProd2.innerHTML = "Color: " + focusColor.innerHTML;
               
                const checkoutProdPrice = document.querySelector("p.prodPrice.\\3" + order);
                checkoutProdPrice.innerHTML = focusPrice.innerHTML;
        }





        pDescAddBtn.addEventListener("click", function() {          /*adds pDesc price to total value (Modal 2 - Desc Side)*/
      
            for (const box of descProdBox) {  

                const newProdPhoto = window.getComputedStyle(box.firstElementChild).backgroundImage;

                if(box.style.border == '2px solid black'){
                    allPhotoAddClicks.push(newProdPhoto);

                    uniqueAddedPhotos = removeDup(allPhotoAddClicks);  
                    actualBtnOrder.push(uniqueAddedPhotos.indexOf(newProdPhoto));
                    const spacedBtnOrder = spaceTens(actualBtnOrder[actualBtnOrder.length-1]);  /*Once a number > 9, they must be spaced to be read by DOM. (ex 12= 1 2 and 31 = 3 1)*/



try{
            
                    if (counterUpdate < totalInventory.length && (allPhotoAddClicks.indexOf(newProdPhoto) == allPhotoAddClicks.lastIndexOf(newProdPhoto))){
                        newBox();
                        counterUpdate++;
                        firstBtnClick.push(box.firstElementChild);
                    }

                    else{   

                        if(actualBtnOrder[actualBtnOrder.length-1] < 10){
                            const orderTest =  document.querySelector("p.prodCount.\\3" + actualBtnOrder[actualBtnOrder.length-1]); 

                            if(orderTest == null) throw (err);
                            const totalCountTest = (+orderTest.innerHTML.slice(10)+ 1);  
                            orderTest.innerHTML = "Quantity: " + totalCountTest;  


                        }
                        else{
                            const orderTest =  document.querySelector("p.prodCount.\\3" + spacedBtnOrder);
                            const totalCountTest = (+orderTest.innerHTML.slice(10)+ 1);     
                            orderTest.innerHTML = "Quantity: " + totalCountTest;  
                        }


                    }

}   
catch(err){
    console.log("Don't re-add Deleted Items");
}




try{


                if(counterUpdate < 10){
                    updateCart((actualBtnOrder[actualBtnOrder.length-1]), newProdPhoto)
                   
                }
                else if(counterUpdate >= 10){
                    updateCart(spacedBtnOrder, newProdPhoto);
                }


    }
catch(err){
    errorNum++;
}
  
                }
            }



            if(errorNum == 0){
                const countPriceTest = calcerTest();
                finalTotalPrice += countPriceTest;

                showCart();
            }
            errorNum = 0;

        });
        





/*      shoppingCart Functions (add/delete/remove btns) -  (Modal 1) */

        var operatorSignMath = {
            "+" : function (number1, number2) {
                return number1 + number2;
            },
            "-" : function (number1, number2) {
                return number1 - number2;
            }
        };


        
        function operatorSign(list, operator) {
            return list.reduce(operatorSignMath[operator]);
        }
        
       


        function cartOperator(countTarget, priceTarget, operator){

            const prodCartCount = countTarget;
            const cartCountNum = htmlSlice(prodCartCount, 10);

            prodCartCount.innerHTML = "Quantity: " + operatorSign([(parseInt(cartCountNum)), 1], operator);

        

            const prodCartPrice = priceTarget;

            const cartPriceNum = htmlSlice(prodCartPrice, 1);
            const priceOperator = parseInt(cartPriceNum.replace(',',''));




            const cartTotal =  htmlSlice(cartTotalPrice, 1);
            const cartTotalNum = parseInt(cartTotal.replace(',',''));

            const updatedTotal = "$" + numberWithCommas(operatorSign([cartTotalNum, priceOperator], operator));
            cartTotalPrice.innerHTML = updatedTotal;
            finalTotalPrice = operatorSign([finalTotalPrice , priceOperator], operator);
        


            const totalQuantity = htmlSlice(totalCount, 7);
            const totalCountNum = operatorSign([(parseInt(totalQuantity)), 1], operator);
            totalCount.innerHTML = "Items: " + totalCountNum;



            cartNumber.innerHTML = totalCountNum;
            var productQuantity = cartCountNum;


                return productQuantity;
        }





/**                                 shoppingCart -  (Modal 1)   -      add delete erase btn (functionality)                                 **/         

        document.addEventListener('click', function(e) {

            if (hasClass(e.target, 'deleteTest')) {  /*Since operators can't directly be placed inside, I can't keep minimizing*/

                let productCount = cartOperator(e.target.previousElementSibling.lastElementChild.previousElementSibling, 
                                                e.target.previousElementSibling.firstElementChild.nextElementSibling,
                                                "-");
                prodItemCount--;
                count--;



                if(productCount == 1){       /*doesn't register 0 because it decreases after this function checks. 1 is used instead*/
                    const vis = e.target.parentElement;
                    vis.remove();

                    alert("Don't Re-Add Deleted Items. It isn't Developed");
                }

                if(finalTotalPrice == 0){
                    emptyCartStyle();
                }
            }





            if (hasClass(e.target, 'addTest')) {
                prodItemCount++;
                count++;

                cartOperator(e.target.previousElementSibling.previousElementSibling.lastElementChild.previousElementSibling, 
                            e.target.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling,
                            "+");
            }




            if (hasClass(e.target, 'deleteProd')) {
                const prodCartCount = e.target.parentElement.firstElementChild.nextElementSibling.lastElementChild.previousElementSibling;
                const cartCountNum = htmlSlice(prodCartCount, 10);

                count -= cartCountNum;
                prodItemCount -= cartCountNum;


                const prodCartPrice = e.target.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling;
                const cartPriceNum = htmlSlice(prodCartPrice, 1);
                const priceOperator = parseInt(cartPriceNum.replace(',',''));


        
                /*total Count */
                const totalQuantity = htmlSlice(totalCount, 7);
                const totalCountNum = parseInt(totalQuantity);

                const newtotalQuantity = totalCountNum - cartCountNum; 
                totalCount.innerHTML = "Items: " + newtotalQuantity;
                cartNumber.innerHTML = newtotalQuantity;


                /*total update */
                const cartTotal =  htmlSlice(cartTotalPrice, 1);
                const cartTotalNum = parseInt(cartTotal.replace(',',''));

                const totalSubtract = cartTotalNum - ((cartCountNum * priceOperator));
                const updatedTotal = "$" + numberWithCommas(totalSubtract);

                cartTotalPrice.innerHTML = updatedTotal;


            
                /*Product Removal*/
                const vis = e.target.parentElement;
                vis.remove();


                alert("Don't Re-Add Deleted Items. It isn't Developed");

                finalTotalPrice -= ((cartCountNum * priceOperator));


                if(count == 1){
                    emptyCartStyle();
                }
            }

            
        }, false);




   
        function prodDescStyle(tabNum, incrementNum, percent){
            pDescTabBtn[tabNum].style.backgroundColor = "black";
            descProdBox[incrementNum].style.border = '2px solid black'; 
            moveDescHeader.style.right = percent;
        }



        /*shopCart Modal 1*/
        for(let m=0; m<descBtn.length; m++){

            function correctLayer(increment, num){
                const prodclickTitle = descBtn[increment+num].parentElement.nextElementSibling.firstElementChild;
                const prodclickColor = descBtn[increment+num].parentElement.nextElementSibling.firstElementChild.nextElementSibling;
                const prodclickPrice = descBtn[increment+num].parentElement.nextElementSibling.lastElementChild;


                focusColor.innerHTML = prodclickColor.innerHTML;
                focusDescColor.innerHTML = prodclickColor.innerHTML;
                focusPrice.innerHTML = prodclickPrice.innerHTML;
                pDescHeader.innerHTML = prodclickTitle.innerHTML;
                pDescBottomHeader.innerHTML = prodclickTitle.innerHTML;
            }

    
        
            descBtn[m].addEventListener("click", function(){  
                modal2.style.display = "block";
                document.body.style.overflowY = "hidden";
                
                refreshProdBorder();
                descTabGray();
                correctLayer(m, 0);

               
                var productImageUrl = retrieveProdImage(m);

                focusLgImg.style.backgroundImage = productImageUrl;
                bottomDescImg.style.backgroundImage = productImageUrl;

                
                if(m < 8){

                    if(mediaQ1.matches){                                                                /*Used to make Q1 (1250px) look good*/            
                        prodDescStyle(0, m, "16.85%");
                    }
                    else {
                        prodDescStyle(0, m, "30vw");
                    }


                    for(let f = 0; f < 8; f++){
                        var updateImageUrl = retrieveProdImage(f);
                        descAddBtn[f].style.backgroundImage = updateImageUrl;
                        
                    }
                }


                else if (m < 16){

                    if(mediaQ1.matches){                                                                /*Used to make Q1 (1250px) look good*/            
                        prodDescStyle(1, (m-8), "19.50%");
                    }
                    else {
                        prodDescStyle(1, (m-8), "33.5vw");
                    }

            
                    for(let f = 8; f < 16; f++){
                        var updateImageUrl2 = retrieveProdImage(f);
                        descAddBtn[f-8].style.backgroundImage = updateImageUrl2;
                    }
                }


                else if (m < 24){

                    if(mediaQ1.matches){                                                                /*Used to make Q1 (1250px) look good*/            
                        prodDescStyle(2,(m-16), "18.75%");
                    }
                    else {
                        prodDescStyle(2, (m-16), "32.75vw");
                    }


                    for(let f = 16; f < 24; f++){
                        var updateImageUrl3 = retrieveProdImage(f);
                        descAddBtn[f-16].style.backgroundImage = updateImageUrl3;
                    }
                }
               
            })   

        
try {
            descProdBtn[m].addEventListener("click", function(){

                const clickedPDesc = descProdBtn[m].parentElement.firstChild.nextElementSibling;
                const newImg = window.getComputedStyle(clickedPDesc).backgroundImage;     
                /*const prodImgUrl3 = "url(\'../../" + newImg.slice(109, -2) + "\')";   Production img retriever*/
                const prodImgUrl3 = newImg.slice(0, -2);    /*Netlify live retriever*/


                            
                focusLgImg.style.backgroundImage = prodImgUrl3;
                bottomDescImg.style.backgroundImage = prodImgUrl3;

                
                if(pDescTabBtn[0].style.backgroundColor == "black"){
                    correctLayer(m, 0);

                    if(mediaQ1.matches){                                                                /*Used to make Q1 (1250px) look good*/            
                        moveDescHeader.style.right = "16.85%";
                    }
                    else {
                        moveDescHeader.style.right = "30vw";
                    }


                    for(let f = 0; f < 8; f++){
                        var updateImageUrl = retrieveProdImage(f);
                        descAddBtn[f].style.backgroundImage = updateImageUrl;
                    }

                }
                else if(pDescTabBtn[1].style.backgroundColor == "black"){
                    correctLayer(m, 8);

                    if(mediaQ1.matches){        
                        moveDescHeader.style.right = "19.50%";            
                    }
                    else{
                        moveDescHeader.style.right = "33.5vw";
                    }


                    for(let f = 8; f < 16; f++){
                        var updateImageUrl2 = retrieveProdImage(f);
                        descAddBtn[f-8].style.backgroundImage = updateImageUrl2;
                    }
                }
   
                else if(pDescTabBtn[2].style.backgroundColor == "black"){
                    correctLayer(m, 16);

                    if(mediaQ1.matches){    
                        moveDescHeader.style.right = "18.75%";                
                    }
                    else{
                        moveDescHeader.style.right = "32.75vw";
                    }


                    for(let f = 16; f < 24; f++){
                        var updateImageUrl3 = retrieveProdImage(f);
                        descAddBtn[f-16].style.backgroundImage = updateImageUrl3;
                    }

                }
            })



            
    }
catch(err) {
}
               
            
        }




        clearCart.addEventListener("click", function() {
            emptyCartStyle();
            count = 1;
            finalTotalPrice = 0;
      
            event.cancelBubble = true;        /*Stops once it gets to children. */

                for (var i = 0; i < firstBtnClick.length; i++) {

                    if(i<10){
                        var allBoxTest = document.querySelector("div.cartBox.\\3" + i);     

                        if(allBoxTest != null){
                            allBoxTest.remove();
                        }
                    }

                    else if (i >=10){
                        var newer = spaceTens(i); 
                        var allBox2 = document.querySelector("div.cartBox.\\3" + newer);

                        if(allBox2 != null){
                            allBox2.remove();
                        }
                    }


                }

            alert("Don't Re-Add Deleted Items. It isn't Developed");
        })



        
        var productID = localStorage.getItem("product");

        if(productID != "undefined" && productID != null){        

            descTabGray();
            refreshProdBorder();

            modal2.style.display = "block";
            document.body.style.overflowY = "hidden";


            /*Update Large Prod Image*/
            var productImageUrl = retrieveProdImage(productID);

            focusLgImg.style.backgroundImage = productImageUrl;
            bottomDescImg.style.backgroundImage = productImageUrl;


            /*Update Prod Text*/
            pDescHeader.innerHTML = (allProdImg[productID].nextElementSibling.firstElementChild).innerHTML;
            pDescBottomHeader.innerHTML = (allProdImg[productID].nextElementSibling.firstElementChild).innerHTML;

            focusColor.innerHTML  = (allProdImg[productID].nextElementSibling.firstElementChild.nextElementSibling).innerHTML;
            focusDescColor.innerHTML = (allProdImg[productID].nextElementSibling.firstElementChild.nextElementSibling).innerHTML;

            focusPrice.innerHTML = (allProdImg[productID].nextElementSibling.lastElementChild).innerHTML;

           
            /*Update Modal 2 (prodDesc) - header and product images*/
            if(productID < 8){

                if(mediaQ1.matches){                          /*Used to make Q1 (1250px) look good*/  
                    prodDescStyle(0, productID, "16.85%");                           
                }
                else {
                    prodDescStyle(0, productID, "30vw");                           
                }
                
            }

            else if (productID < 16){

                if(mediaQ1.matches){    
                    prodDescStyle(1, (productID-8), "19.50%");
                }
                else{
                    prodDescStyle(1, (productID-8), "33.5vw");
                }

                
                for(let f = 8; f < 16; f++){
                    var updateImageUrl = retrieveProdImage(f);
                    descAddBtn[f-8].style.backgroundImage = updateImageUrl;
                }
            }

            else{

                if(mediaQ1.matches){                    
                    prodDescStyle(2, (productID-16), "18.75%");
                }
                else{
                    prodDescStyle(2, (productID-16), "32.75vw");
                }


                for(let f = 16; f < 24; f++){
                    var updateImageUrl = retrieveProdImage(f);
                    descAddBtn[f-16].style.backgroundImage = updateImageUrl;
                }
            }

            localStorage.setItem("product", "undefined");
        }

