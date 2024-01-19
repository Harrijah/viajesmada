
    // const selectButton = document.querySelector('.thema');
    // const buttonLeft = document.getElementById('buttonLeft')
    // const buttonRight = document.getElementById('buttonRight');
    // const buttonUp = document.getElementById('buttonUp');
    // const buttonDown = document.getElementById('buttonDown');

    
    // const tabs = document.querySelector(".wrapper");
    // const tabButton = document.querySelectorAll(".mybutton"); 
    // const contents = document.querySelectorAll(".content"); 
    // const categories02 = document.getElementsByClassName('categories02');
    // const categorycontainer = document.getElementsByClassName('.categorycontainer');
    // const listprod = document.getElementsByClassName('listprod');
    // const listprod04 = document.getElementsByClassName('listprod04');

             
    
    // let categoryWidth = categories02.clientWidth;

    // let containerWidth = categorycontainer.clientWidth;
    // let listprodHeight = listprod.clientHeight;
    // let listprod04Height = listprod04.clientHeight;
    // let distance01 = containerWidth - categoryWidth;
    // let distance02 = listprod04Height - listprodHeight;
    // let scrollAmount = 0;
    // let showselected = document.getElementById('showselected');
    // let thematique = 'selection';

    

    // buttonToggle(); // Toogle des boutons et contents : "active" ou non 


//     const firsttitle = document.getElementById('firsttitle');
//     const welcometitle = document.querySelector('.welcometitle');
//     const welcomelogo = document.querySelector('.welcomelogo');
//     const mytestaccount = document.querySelector('.mytestaccount');
//     const mytestbutton = document.querySelector('.mytestbutton');
//     const myshowimage = document.querySelector('.myshowimage');
//     const myshowimage2 = document.querySelector('.myshowimage2');
//     let wordIndex = 0;
//     let wordIndex02 = 0;
//     let imageIndex = 0;
//     let letterIndex = 0;
//     let compteur01 = 0;
//     let itemCounter = 0;
//     let loopCounter = 0; 
    
//     let myword = [welcometitle, welcomelogo];
//     let myword2 = [mytestaccount, mytestbutton];
//     let myimage = [myshowimage]; 

    
//     let itemDuration = 3000;
//     let itemTimeBeforeEntry = 1500;
//     let wordLength = myword.length;
//     let wordLength2 = myword2.length;
//     let wordDuration;
//     let wordTimeBeforeEntry;
//     let wordLoopTotalDuration;
//     let imageLength = myimage.length;
//     let imageDuration;
//     let imageTimeFadeOut;
//     let imageTimeBeforeEntry;
//     let imageLoopTotalDuration;
//     let itemLoopTotalDuration;  

    
    
// /* ***************  CREER UN AFFICHEUR POUR LES IMAGES AFIN DE LES METTRES DANS LE LOOP ********* */
//     const createView = (index, myarray, timeout)=>
//         {
//             myarray[index].classList.remove('content');
//             setTimeout(() => {
//                     myarray[index].classList.add('content');            
//                 }, timeout);
//         }
// /* ***************  CREER UN AFFICHEUR POUR LES TEXTES AFIN DE LES METTRES DANS LE LOOP ********* */
//     const itemForLoop = (index, length, myarray, itemTimeBeforeEntry) => {
//             if(index < length)
//                 {
//                     if(itemCounter == 0)
//                         {
//                             console.log(myarray[index].textContent +" || test ajout || Index = "+ index + " || Compteur = "+ itemCounter);
//                             myarray[index].classList.remove('content');
//                             index++;                            
//                             setTimeout(() => {
//                                 itemForLoop(index, length, myarray, itemTimeBeforeEntry);
//                             }, itemTimeBeforeEntry);                           
//                         }
//                     else if(itemCounter == 1)
//                         {
//                             setTimeout(() => {
//                                 console.log(myarray[index].textContent +" || test enlevement || Index = "+ index + " || Compteur = "+ itemCounter);
//                                 myarray[index].classList.add('content');  
//                                 index++;
//                                 itemForLoop(index, length, myarray, itemTimeBeforeEntry); 
//                             }, itemTimeBeforeEntry);
//                         }
//                     else 
//                         {
//                             index = 0;
//                             itemCounter = 0;
//                         }
//                 } 
//             else 
//                 {  
//                     index = 0;
//                     itemCounter++;
//                     itemForLoop(index, length, myarray, itemTimeBeforeEntry);
//                 }
//     }
    
/* ***************  CREER UNE LOOP POUR TOUS LES ITEMS ********* */
    // const loop = ()=>
    //     {
    //         let duration01 = (itemTimeBeforeEntry * 2) * wordLength + itemTimeBeforeEntry;
    //         let duration02 = (itemTimeBeforeEntry * 2) * wordLength2 + itemTimeBeforeEntry;
    //         let duration03 = (itemDuration);
    //         let totalLoopTime = duration01 + duration02 + duration03;                                                                                                                                   
    //         setTimeout(() => {
    //             itemForLoop(wordIndex, wordLength, myword, itemTimeBeforeEntry);
    //             }, 0);
    //         setTimeout(() => {
    //             itemForLoop(wordIndex02, wordLength2, myword2, itemTimeBeforeEntry);
    //             }, duration01);
    //         setTimeout(() => {
    //             createView(imageIndex, myimage, itemDuration);
    //             }, duration01 + duration02);
    //         setTimeout(() => 
    //             {
    //                 loop();
    //             }, totalLoopTime);

            
    //     }


   


    // loop();
    
    // scrollMyList(buttonUp, 'up', listprod, 50, distance02, 375);
    // scrollMyList(buttonDown, 'down', listprod, 50, distance02, 375);
    // scrollMyList(buttonLeft, 'left', categories02, 125, distance01, 800); // Homepage : scroller de gauche à droite la liste des catégories
    // scrollMyList(buttonRight, 'right', categories02, 125, distance01, 800); // Homepage : scroller de droite à gauche la liste des catégories
    


    
    // Page d'accueil / Slider prncipal / Choisir les thématiques : produit de la semaine, nouveauté, ou promo
    // $(selectButton).on('click', (e)=>{
    //     thematique = $(e.target).attr('val'); // Obtenir la thématique
    //     var urlx2 = mybaseurl+'/filtre/getResultat/getSelectedProduct/0/6000/carouselproducts/'+thematique;
    //     var urlx1 = mybaseurl+'/filtre/getResultat/getSelectedProduct/0/6000/selectedproducts/'+thematique; 
    //     var urlx3 = mybaseurl+'/filtre/changeMyRayon'; 
    //     lancerAjax(urlx2, '#changeCarousel'); // Montrer la séclection de produits sur le carousel du slider
    //     lancerAjax(urlx1, '#homeselectedproduct'); // Montrer la sélection de produits sur la liste de produits sur le slider principal
    //     lancerAjax(urlx3, '#changeMyRayon'); // Réinitialiser la liste des rayons dans la balise "SELECT"
    //     newmodal02(newContainer01); // Montrer le modal pour les produits filtrés
    //     // Page d'accueil/ Slider principal / Sélectionner les produits par rayon en fonction de la thématique ci-dessus
       
    // });

    // Page d'accueil/ Slider principal / Sélectionner les produits par rayon en fonction de la thématique ci-dessus
    // $('.selectrayon2').on('input', (e)=>{
    //     // var optionselect = this.options[this.selectedIndex];
    //     let optionselect = e.target.options.selectedIndex;
    //     var urlx1 = e.target.attributes[2].value+'/getSelectedProduct/'+optionselect+'/6/selectedproducts/'+thematique;
    //     var urlx2 = e.target.attributes[2].value+'/getSelectedProduct/'+optionselect+'/6/carouselproducts/'+thematique;
    //     lancerAjax(urlx1, '#homeselectedproduct');
    //     lancerAjax(urlx2, '#changeCarousel');
    //     newmodal02(newContainer01);
    //     addactive();
    // });


    /*  ************************     SCROLLER LA LISTE DES RESULTATS    ************************** */
    // function scrollMyList(button, direction, container, step, distance, speed){
    //     $(button).on('click', ()=>{
    //         let deplacement = setInterval(()=>{
    //             if(direction == 'up'){
    //                 container.scrollTop -= step; 
    //             } else if (direction == 'down'){
    //                 container.scrollTop += step;
    //             } else if (direction == 'left'){
    //                 container.scrollLeft -= step;
    //             } else if (direction == 'right'){
    //                 container.scrollLeft += step;
    //             }
    //             scrollAmount += step;
    //             if(scrollAmount >= distance){
    //                 clearInterval(deplacement);
    //             }
    //         }, speed);            
    //     });
    // }


    
    /*  **************************     TOGGLE MENU / BOUTONS    ******************************* */
  
    // let tabs02 = document.querySelector('.brefwrapper');
    // let myButton02 = document.querySelectorAll('.myButton02');
    // $(tabs02).on('click', (e)=>{
    //     let id03 = e.target.dataset.id;
    //    if (id03) {
    //     myButton02.forEach(btn => 
    //         {
    //             btn.classList.remove("active");
    //         }
    //         );
    //         e.target.classList.add("active");
    //         e.target.classList.add("myButton02");
    //    }
    // });


    // toggleCreaBoutique(); // Page création nouvelle boutique : toggle des formulaires
     /*  **************************     TOGGLE MENU / BOUTONS    ******************************* */
    // function buttonToggle(){         
    //     $(tabs).on('click', (e)=>{
    //         let id = e.target.dataset.id;
    //         let element00 = document.getElementById(id);
    //         if (id) {
    //             tabButton.forEach(btn => 
    //                 {
    //                     btn.classList.remove("active");
    //                 }
    //                 );
    //             e.target.classList.add("active");
    //             e.target.classList.add("mybutton");

    //             contents.forEach(content => {content.classList.remove("active");}); 
    //             element00.classList.add("active");

    //         } 
    //     });
    // } 
    // let tabs02 = document.querySelector('.brefwrapper');
    // let myButton02 = document.querySelectorAll('.myButton02');
    // $(tabs02).on('click', (e)=>{
    //     let id03 = e.target.dataset.id;
    //    if (id03) {
    //     myButton02.forEach(btn => 
    //         {
    //             btn.classList.remove("active");
    //         }
    //         );
    //         e.target.classList.add("active");
    //         e.target.classList.add("myButton02");
    //    }
    // });
    


       /*  **************************     USE CAROUSEL     ******************************* */
    // function addactive(){ //Activer la première image dans le carousel de la page d'accueil
    //     var imagecarousel = document.querySelector('.montre-moi-00');
    //     imagecarousel.classList.add('active');
    // }

    
    // addactive();

    

    /*  **************************     TOGGLE CREATION MAGASIN     ******************************* */
    // function toggleCreaBoutique(){   
    //     var coeff=1;
    //     const previous = document.getElementById('buttonprevious');
    //     const next = document.getElementById('buttonnext');
    //     const tabs2 = document.querySelector(".wrapper2");
    
    //     $(previous).on('click', ()=>{if(coeff > 1){coeff--;}});
    //     $(next).on('click', ()=>{if(coeff < 3){coeff++;}}); 
    //     $(tabs2).on('click', ()=>{
    //         if (coeff) {
    //             const toactivate = 'menu'+coeff;
    //             const mybuttonactive = document.getElementById(toactivate);
    //             const element = document.getElementById(coeff);
    //             // hide
    //             tabButton.forEach(btn => {btn.classList.remove("active");});        
    //             contents.forEach(content => {content.classList.remove("active");});
    //             // show
    //             mybuttonactive.classList.add("active");
    //             element.classList.add("active");
    //         } 
    //     });
    // }




        /*  **************************     TOGGLE CONNEXION MEMBRE    ******************************* */
    // $(document.body).on('click', '.connexbutton', (e)=>{
    //     e.preventDefault();
    //     var myurl = $(this).attr('value');
    //     var connexmodal = document.getElementById('connexmodal');
    //     connexmodal.style.display = 'block';
    //     window.onclick = (event)=>{
    //             if(event.target == connexmodal)
    //                 {
    //                     connexmodal.style.display = 'none';
    //                 }
    //         }
    //     lancerAjax(myurl, '#modalcontent');        
    //     var span = document.getElementsByClassName("close")[0];
    //     span.onclick = () => {
    //         connexmodal.style.display = "none";
    //         };
    // });

    /*  **************************     MODAL CREATION PRODUITS   ******************************* */
    // if (typeof productmodal !== undefined){
    //     console.log("bref");
    // }else{
    // }



    
    /*  **************************     TOGGLE CREATION COMPTE     ******************************* */
    // $(document.body).on('click', '.createbutton', (e)=>{
    //     e.preventDefault();
    //     var myurl =$(this).attr('value');
    //     var connexmodal = document.getElementById('connexmodal');
    //     connexmodal.style.display = 'block';
    //     window.onclick = (event)=>{
    //         if(event.target == connexmodal){
    //             connexmodal.style.display = "none";
    //         }
    //     }
    //     lancerAjax(myurl, '#modalcontent');        
    //     var span = document.getElementsByClassName("close")[0];
    //     span.onclick = ()=> {
    //         connexmodal.style.display = "none";
    //         };
    // });
    
    // /*  **************************     TOGGLE CREATION COMPTE     ******************************* */
    // $(document.body).on('click', '.createbutton', (e)=>{
    //     e.preventDefault();
    //     var myurl =$(this).attr('value');
    //     var connexmodal = document.getElementById('connexmodal');
    //     connexmodal.style.display = 'block';
    //     window.onclick = (event)=>{
    //         if(event.target == connexmodal){
    //             connexmodal.style.display = "none";
    //         }
    //     }
    //     lancerAjax(myurl, '#modalcontent');        
    //     var span = document.getElementsByClassName("close")[0];
    //     span.onclick = ()=> {
    //         connexmodal.style.display = "none";
    //         };
    // });




      /*  **************************     TOGGLE CONNEXION MEMBRE    ******************************* */
    //   $(document.body).on('click', '.connexbutton', (e)=>{
    //     e.preventDefault();
    //     var myurl = $(this).attr('value');
    //     var connexmodal = document.getElementById('connexmodal');
    //     connexmodal.style.display = 'block';
    //     window.onclick = (event)=>{
    //             if(event.target == connexmodal)
    //                 {
    //                     connexmodal.style.display = 'none';
    //                 }
    //         }
    //     lancerAjax(myurl, '#modalcontent');        
    //     var span = document.getElementsByClassName("close")[0];
    //     span.onclick = () => {
    //         connexmodal.style.display = "none";
    //         };
    // });


