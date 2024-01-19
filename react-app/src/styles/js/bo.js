$(document).ready(function() { 

    // const ajouterproduit = document.getElementsByClassName('ajouterproduit');
    const productmodal = document.getElementById('productmodal');
    const mybaseurl = $(document.querySelector('#myurl')).attr('value'); // base URL pour le filtre (dans le header)
        
    let myProductModal = document.getElementById('thisismymodal'); // Sélectionner le modal sur la page d'accueil 
    // let newContainer01 = document.getElementById('homeselectedproduct'); // Sélectionner le container pour le modal
    let newContainer02 = document.getElementById('allproductshome'); // Sélectionner le container pour le modal
    let newContainer03 = document.getElementById('backofficestoreproductlist'); // Sélectionner le container pour le modal
    

    
    /*  **************************     FONCTION AJAX     ******************************* */
    function lancerAjax(ajaxUrl, ajaxDestination){ // Factoriser ici, toutes les fonctions ajax
        $.ajax({
            url: ajaxUrl,
            type: 'post',
            data: {}
        })
        .done((data)=>{
            if(ajaxDestination == '#changeCarousel'){
                $(ajaxDestination).html(data);
                addactive();
            } else {
                $(ajaxDestination).html(data);
            }
        })
        .fail((errorMessage)=>{
            alert(errorMessage);
        });
    }
    

    /*  **************************     MODAL AJOUTER PRODUITS   ******************************* */

    $(document.body).on('click', '.ajouterproduit', (e)=>{
        e.preventDefault();
        let myurl = "http://localhost:8080/storebackoffice/modifyproduct/0";
        lancerAjax(myurl, '#insidetest');

        productmodal.style.display = 'block';
        window.onclick = (event)=>{
                if(event.target == productmodal)
                    {
                        productmodal.style.display = 'none';
                    }
            }
        var span = document.getElementsByClassName('close')[0];
        span.onclick = ()=>{
            productmodal.style.display = 'none';
        };
    });
    
    let editproducts = document.getElementsByClassName('editproducts');
    
    $(editproducts).on('click', (e)=>{
        let monlien = e.target;
        // console.log(monlien);
        if(monlien.classList.contains('modifyproduct') == true){
            var myurl = $(monlien).attr('value');
            var name = $(monlien).attr('name');
            lancerAjax(myurl, '#insidetest');
            // alert(myurl);
            productmodal.style.display = 'block';
            
            // Stuff the popup ----------------------------------------------
            // popupmodal.style.display = "block"; 
            // $('.productname').text(name);
            
            // window.onclick = (event)=>{
            //     if(event.target == popupmodal){
            //         popupmodal.style.display = "none";
            //     }
            // }
            var span = document.getElementsByClassName('close')[0];
            span.onclick = ()=>{
                productmodal.style.display = 'none';
            };
        }
        // Close up .....................................................
        // $('.ajouterproduit').on('click', ()=>{
        //     popupmodal.style.display = "none";

            
        //     productmodal.style.display = 'block';
        //     // lancerAjax(myurl, productmodal);
        // });
        
    });
    
     // Une fois que les produits sont affichés, on va sortir un modal pour chacun des produits listés par le filtre
     function newmodal02(container){
        $(container).on('click', (e)=>{ // lorsqu'on clique sur les éléments du container
            let monlien = e.target; // créer un variable pour l'élément cliqué
            if(monlien.classList.contains("showmyproduct02") == true){ // Condition montrant si l'élément cliqué est bien un produit
                myproductvalue = $(monlien).attr('value'); // Créer une variable pour l'ID du produit
                url = mybaseurl+'/filtre/modalproduct/'+myproductvalue; // Créer un lien pour le Controller qui va gérer la requête
                
                lancerAjax(url, showselected); // lancer la requête à l'aide d'Ajax

                /* ----------- Montrer le modal ------------ */
                myProductModal.style.display = "block"; //montrer le modal avec les résultats obtenus par l'Ajax
                
                
                
                
                
                window.onclick = (event)=>{ // fermer le modal
                    let myClick = event.target;
                    if(myClick == myProductModal){
                        myProductModal.style.display = "none";
                    }else if(myClick.classList.contains('sortir') == true){
                            myProductModal.style.display = "none";
                    }else if (myClick.classList.contains('idproduit') == true){
                        let monidproduit = $(myClick).attr('value');
                        alert(monidproduit);
                    }
                }
            }
        });
    }

   

    /*  **************************     MODAL MODIFICATION PRODUITS   ******************************* */
    /*
    $(document.body).on('click', '.modifyproduct', (e)=>{
        e.preventDefault();
        var myurl = $(this).attr('value');
        var name = $(this).attr('name');
        var popupmodal = document.getElementById('popupmodal');

        // alert(myurl);
        
        
        // Close up .....................................................
        var span = document.getElementsByClassName('close')[0];
        span.onclick = ()=>{
            popupmodal.style.display = "none";
        }
        
        // Close up .....................................................
        $('.ajouterproduit').on('click', ()=>{
            popupmodal.style.display = "none";
        });
        
        // lancerAjax(myurl, '#testmodal');
    });
    */
    
    // newmodal02(newContainer01); // Activer le modal des produits || Slider principal
    // newmodal02(newContainer02); // Activer le modal des produits || Page d'accueil
    
    newmodal02(newContainer03); // Activer le modal des produits || BackOffice


    changecategory(); // Changer la catégorie dans le menu déroulant
    changesouscategorie(); // Changer la sous-catégorie dans le menu déroulant

    /*  ****************     UTILISER LE FILTRE PAR RAYON/CATEGORIE/SOUSCATEGORIE    ************ */    
    // Page d'accueil
    // filtre('.selectrayon', 'url2', 'getSelectedProduct', '100', 'allproductshome', '#allproductshome', 'allprod');   
    // filtre('.selectcategory', 'url2', 'getProductByCategory', '100', 'allproductshome', '#allproductshome', 'allprod');
    // filtre('.selectsouscategorie', 'url', 'getProductBySousCategory', '100', 'allproductshome', '#allproductshome', 'allprod');
    
    // Backoffice
    filtre('.selectrayon', 'url2', 'getSelectedProduct', '100', 'storebackofficeallproducts', '#backofficestoreproductlist', 'allprod');
    filtre('.selectcategory', 'url2', 'getProductByCategory', '100', 'storebackofficeallproducts', '#backofficestoreproductlist', 'allprod');
    filtre('.selectsouscategorie', 'url', 'getProductBySousCategory', '100', 'storebackofficeallproducts', '#backofficestoreproductlist', 'allprod');
    


 
    /*  ****************     Utiliser le filtre de produits  ************ */ 
    function filtre(bouton, url, fonction, limit, destination, contenu, themaValue)
    {
        $(bouton).on('change', function(){
            var optionselect = this.options[this.selectedIndex];
            if(optionselect.classList == 'retourrayon') 
            {
                var urlx = $(this).attr(url)+'/getSelectedProduct/'+optionselect.value+'/'+limit+'/'+destination+'/'+themaValue;
            }
            else if(optionselect.classList == 'retourcategorie')
            {
                var urlx = $(this).attr(url)+'/getProductByCategory/'+optionselect.value+'/'+limit+'/'+destination+'/'+themaValue;
            }
            else
            {
                var urlx = $(this).attr(url)+'/'+fonction+'/'+optionselect.value+'/'+limit+'/'+destination+'/'+themaValue;
            }
            lancerAjax(urlx, contenu);
            newmodal02(newContainer02); // Activer le modal des produits pour la page d'accueil
            // takefunction();
        });
    }
      
   
    /*  ****************     Activer le filtre de produits   ************ */
    function changecategory()
    {
        $('.selectrayon').on('change', (e)=>{
            var optionselect = e.target.options.selectedIndex;
            var myurl03 = e.target.attributes[2].value+'/'+optionselect;
            lancerAjax(myurl03, '.selectcategory');
            $('.selectsouscategorie').html("<option></option>"); 
        });
    }
    function changesouscategorie()
    {
        $('.selectcategory').on('change', (e)=>{
            var optionselect = e.target.options[e.target.options.selectedIndex];

            if(optionselect.classList == 'retourrayon')
            {
                var myurl02 = mybaseurl+'/filtre/changecategorie/0';
            }
            else
            {
                var myurl02 = mybaseurl+'/filtre/changecategorie/'+optionselect.value;
            }
            lancerAjax(myurl02, '.selectsouscategorie');
        });
    }
    

// });



    /*  **************************     MODAL CREATION PRODUITS   ******************************* */
    var testmodal = document.getElementById('testmodal');

    $(document.body).on('click', '.showmodal', ()=>{
        testmodal.style.display = "block";
        
        window.onclick = (event)=>{
            if(event.target == testmodal){
                testmodal.style.display = "none";
            }
        }
    })


    // let buttontest = document.getElementById('buttontest');

    // $('#buttontest').on('click', ()=>{
    //     alert('bref');
    // });

    
    
    /*  **************************     PAGINATION DES RESULTATS     ******************************* */
    pagination(newContainer01, '#homeselectedproduct', 'selectedproducts');
    pagination(newContainer02, '#allproductshome', 'allproductshome');
    function pagination(container, destination, content){
        container.addEventListener('click', function(e){
            let paginationButton = e.target;
            if(paginationButton.classList.contains('mylist') == true){
                paginationUrl = $(paginationButton).attr('uri');
                let buttonSplit = paginationUrl.split('/');
                if(buttonSplit.length>=5){
                    lancerAjax(paginationUrl, destination);
                }
                else{
                    if(destination == '#allproductshome'){
                        lancerAjax(mybaseurl+'/filtre/getResultat/getSelectedProduct/0/6000/'+content+'/allprod/'+buttonSplit[4], container);
                    } else {
                        lancerAjax(mybaseurl+'/filtre/getResultat/getSelectedProduct/0/6000/'+content+'/'+thematique+'/'+buttonSplit[4], container);
                    }
                }
            }
        });
    }

   
    

});


