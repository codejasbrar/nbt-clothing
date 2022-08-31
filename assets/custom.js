// Custom Code 
// $(document).ready(function(){$("img.lazyload").lazyload();});
$('document').ready(function() {
//   Collection Page Mobile Filter
  const pageCheck = $('body').hasClass('template-collection');
  if(pageCheck && window.innerWidth < 500) {
    var runMobileFilter = setInterval(mobileFilter, 500);
    function mobileFilter() {
       $('.collection__filters .collection__filters__close').text('APPLY FILTERS');
       $('.collection__filters .collection__filters__clear a, .collection__filters .collection__filter-tags li').click(function() {
        setTimeout(mobileCollFilter, 600);
//         setTimeout(reRunFilter, 1800); 
        function mobileCollFilter() {
            $('.collection__filters').addClass('collection__filters--visible');
          	mobileFilter();
        }
         
//          function reRunFilter() {
//           	mobileFilter();
//         }
      });
    }
    mobileFilter();
  }
  
//   New PDP JS
  const newPDPCheck = $('body').hasClass('new-pdp-template');
  if(newPDPCheck) {
    $('.swatch-wrapper[data-option-name="Size"] > .flex').append('<div class="cstm_size_wrapper"><div class="cstm_size_guide">Size Guide</div></div>');
    
    $('.PwzrGrid-item:nth-child(3) .rio-width-fit-content:nth-child(1) > div:nth-child(1)').append('<div class="cstm_size_wrapper"><div class="cstm_size_guide">Size Guide</div></div>');
    
    
    
    // Get the element with id="defaultOpen" and click on it
		document.getElementById("defaultOpen").click();
    
    
    
        $('.cstm_size_guide').on('click', function(){
          $('.cstm_popup_content_wrapper').addClass('open');
        });
    
    	$('.cstm_prd_permotion_text_flex_item a').on('click', function(e){
          e.preventDefault();
          $('.cstm_promotion_popup_wrapper').addClass('open');
        });
    
//     	$('.cstm_find_size').on('click', function(){
//           document.querySelector('.wair-launch-btn').click();
//         });

        $('.cstm_popup_close').on('click', function(){
          
          $('.cstm_popup_content_wrapper.open').removeClass('open');
          
        });
    
    	$('.cstm_promotion_popup_close').on('click', function(){
          $('.cstm_promotion_popup_wrapper').removeClass('open');
        });
    
    	$('.cstm_popup_footer span').on('click', function(){
          
          $('.cstm_popup_content_wrapper.open').removeClass('open');
          
          document.querySelector('.wair-launch-btn').click();
          
        });
    setTimeout(variantImageJS, 1000);
    //this function is for desktop only
    function variantImageJS() {
      if (window.innerWidth > 500) {
        
          $('.rio-options .rio-width-fit-content[data-option=Color]>div>div>div>div>div[aria-disabled=false]').click(function() {
  
  
              const selectedVariant =$(this).attr('data-option-value');
$(".rio-options .rio-width-fit-content[data-option=Color]>div>div>div>div>div[aria-disabled=false]").removeClass("active");
            $(this).addClass('active');
            
             $('.cstm_prd_des_images_gallery_flex_item').hide();
              $(`.cstm_prd_des_images_gallery_flex_item[data-option-value="${selectedVariant}"]`).show();
  
  
          });
      } else {
           $('.rio-options .rio-width-fit-content[data-option=Color]>div>div>div>div>div[aria-disabled=false]').click(function() {
  
  
              const selectedVariant = $(this).attr('data-option-value');
      //alert(selectedVariant);
              $('.cstm_mob .cstm_prd_des_images_gallery_flex_item').hide();
              //const selectedVariantImages = $(`.cstm_mob .cstm_prd_des_images_gallery_flex_item[data-option-value="${selectedVariant}"]`);
              console.log(selectedVariantImages);
              selectedVariantImages[0].style.display = 'block';
              selectedVariantImages[1].style.display = 'block';
              selectedVariantImages[2].style.display = 'block';
              selectedVariantImages[3].style.display = 'block';
  
          });
      }
      if (window.innerWidth > 500) {
        var swatch__input = $("input[type=radio][name=Color]:checked").val();
console.log("swatch__input swatch-element",swatch__input);
        // const firstVariant = document.querySelectorAll('.rio-options .rio-width-fit-content[data-option=Color]>div>div>div>div>div[aria-disabled=false]')[0];
        // $('.cstm_prd_des_images_gallery_flex_item').hide();
        $(`.cstm_prd_des_images_gallery_flex_item[data-option-value="${swatch__input}"]`).show();
        // firstVariant.click();

        
      }
      
    }

//         Sticky Button JS
        var v_val = $(".product-single__variants").find(":selected").text().split("/")[0];
        // var v_size = $(".product-single__variants").find(":selected").text().split("/")[1].split("-")[0];
      // console.log("cl_atacl_ata=>",v_size);
        var cl_ata = $(".PwzrGrid-item [data-option-value="+$.trim(v_val)+"]").trigger('click');
        setTimeout(function(){$(".PwzrGrid-item [data-option-value='34']").trigger('click');},1000);
        // var cl_ata = $(".PwzrGrid-item data-option-value["+$.trim(v_val)+"] .PwzrButton-label-251").trigger('click');
        // $(".rio-product-option-title .rio-product-option-title-option-value").text($.trim(v_val));
      console.log("v_valv_valv_val=>",v_val);
    
    const checkScreenWidth = window.innerWidth;
    
    if(checkScreenWidth < 500) {
      
      
      setTimeout(stickyJS, 4000);
    
      $('.cstm_scroll_wrapper_link').click(function(e) {

        e.preventDefault();
        window.scrollTo(0, 0);

      });

      function stickyJS() {


             //   var firstVariant = document.querySelectorAll('.rio-options .rio-width-fit-content[data-option=Color]>div>div>div>div>div[aria-disabled=false]')[2];
            $('.cstm_prd_des_images_gallery_flex_item').hide();
            //   firstVariant.click();
           // console.log(firstVariant);
  
            const scrollWrapper = document.querySelector(".product-single__details");
            const stickyBtn = document.querySelector(".cstm_scroll_wrapper");
            const cstmCartBtn = document.querySelector(".template-product .product__form.product-form .buttons-grid");

            var offset = cstmCartBtn.getBoundingClientRect();

            var topPos = offset.top;
            console.log(offset);
            console.log(cstmCartBtn.scrollTop);

            window.addEventListener('scroll', () => {

                    if (window.scrollY > topPos) {

                      stickyBtn.classList.add("cstm_sticky");

                    }

                    else if (window.scrollY < topPos) {

                      stickyBtn.classList.remove("cstm_sticky");

                    }

                    });


          }
      
      
      
    } else {
      
      
      // setTimeout(stickyJS, 2500);
      // setTimeout(stickyMainJS, 4000);
    
      // $('.cstm_scroll_wrapper_link').click(function(e) {

      //   e.preventDefault();
      //   document.querySelector(".product-single__details").scrollTo(0, 0);
      //   window.scrollTo(0, 0);

      // });

      // function stickyJS() {


      //       // var firstVariant = document.querySelectorAll('.rio-options .rio-width-fit-content[data-option=Color]>div>div>div>div>div[aria-disabled=false]')[0];
      //       // $('.cstm_prd_des_images_gallery_flex_item').hide();
      //       // firstVariant.click();
        

      //       var scrollWrapper = document.querySelector(".product-single__details");
      //       var stickyBtn = document.querySelector(".cstm_scroll_wrapper");
      //       var cstmCartBtn = document.querySelector(".template-product .product__form.product-form .buttons-grid");
      //       console.log(cstmCartBtn);
        
      //       var offset = cstmCartBtn.getBoundingClientRect();

      //       var topPos = offset.top;
      //       console.log(offset);

      //       scrollWrapper.addEventListener('scroll', () => {

      //               if (scrollWrapper.scrollTop > topPos) {

      //                 stickyBtn.classList.add("cstm_sticky");

      //               }

      //               else if (scrollWrapper.scrollTop < topPos) {

      //                 stickyBtn.classList.remove("cstm_sticky");

      //               }

      //               });


      //     }



      // function stickyMainJS() {


      //       var stickyBtn = document.querySelector(".cstm_scroll_wrapper");
      //       var cstmMainScroll = document.querySelector(".template-product .cstm_prd_des_images_gallery");

      //       var offset2 = cstmMainScroll.getBoundingClientRect();

      //       var topPos2 = offset2.bottom;
      //       console.log(offset2);
      //       console.log(window.scrollY);

      //       var scrollWrapper = document.querySelector(".product-single__details");
      //       var cstmCartBtn = document.querySelector(".template-product .product__form.product-form .buttons-grid");

      //       var offset3 = cstmCartBtn.getBoundingClientRect();

      //       var topPos3 = offset3.top;
        
            

      //       window.addEventListener('scroll', () => {
      //         console.log(window.scrollY);
      //               if (window.scrollY > topPos2) {

      //                 stickyBtn.classList.add("cstm_sticky");

      //               }

      //               else if (window.scrollY < topPos2) {

      //                 stickyBtn.classList.remove("cstm_sticky");

      //               }


      //             if (window.scrollY < topPos2 && scrollWrapper.scrollTop > topPos3) {

      //                 stickyBtn.classList.add("cstm_sticky");

      //               }
              

      //               });
        


      //     }
    }
  }
  
});
function closeCartDrawer() {
 document.querySelector('.drawer__close-button').click();   
}
//     Popup Size Guide
    
    function openSizeTab(evt, tabName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(tabName).style.display = "block";
      evt.currentTarget.className += " active";
    }