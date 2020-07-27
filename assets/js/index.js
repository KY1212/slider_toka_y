$(function () {

    function cloneSlide(slideSetWidth) {
      $(".slide:last-child").clone(true).prependTo($(".slideset"));
      $(".slide:nth-child(2)").clone(true).appendTo($(".slideset"));
      $(".slider").css("width", slideSetWidth);
    }

    function addIndicator($slide,indicatorHTML,dotIndex,indicator) {

      
      //インジケーターの生成
      $slide.each(function (){
        indicatorHTML += `<div class="dot" id="${dotIndex}">` + '</div>';
        indicator.html(indicatorHTML);
        dotIndex++;
      });

      //インジケーター初期位置
      $(".dot:first-child").css({
          backgroundColor: "#fff"
      });
    }

    //インジケーター
    function clickIndicator(slideWidth){
      $(".dot").on("click", function(){
        //クリックされたドットの特定
        const idname = $(this).attr("id");
        const currentDot = $(`.dot#${idname}`);
        $(".dot").css({
            backgroundColor: "#999999"
        });
        currentDot.css({
            backgroundColor: "#fff"
        });
        //クリックされたドット位置とスライド位置を揃える
        const slideCount = idname;
        $(".slideset").stop(true).animate({
            left: slideCount * -slideWidth
        });
    });
  }

  function init() {
    const $slide = $(".slide");
    const slideWidth = $slide.outerWidth();
    const slideNum = $slide.length;
    const slideSetWidth = slideWidth * (slideNum+2);
    const slideCount = 1;
    const indicator = $(".indicator");
    let indicatorHTML = "";
    let dotIndex = 1;
    var clickFlag = true;
    cloneSlide(slideSetWidth);
    addIndicator($slide,indicatorHTML,dotIndex,indicator);
    clickIndicator(slideWidth,slideNum);
  }
  init();

});





// $(function () {

//   function cloneSlide(slideSetWidth) {
//     $(".slide:last-child").clone(true).prependTo($(".slideset"));
//     $(".slide:nth-child(2)").clone(true).appendTo($(".slideset"));
//     $(".slider").css("width", slideSetWidth);
//   }

//   function addIndicator($slide,indicatorHTML,dotIndex,indicator) {

    
//     //インジケーターの生成
//     $slide.each(function (){
//       indicatorHTML += `<div class="dot" id="${dotIndex}">` + '</div>';
//       indicator.html(indicatorHTML);
//       dotIndex++;
//     });

//     //インジケーター初期位置
//     $(".dot:first-child").css({
//         backgroundColor: "#fff"
//     });
//   }


//   //インジケーター
//   function clickIndicator(slideWidth){
//     $(".dot").on("click", function(){
//       //クリックされたドットの特定
//       const idname = $(this).attr("id");
//       const currentDot = $(`.dot#${idname}`);
//       $(".dot").css({
//           backgroundColor: "#999999"
//       });
//       currentDot.css({
//           backgroundColor: "#fff"
//       });
//       //クリックされたドット位置とスライド位置を揃える
//       const slideCount = idname;
//       $(".slideset").stop(true).animate({
//           left: slideCount * -slideWidth
//       });
//   });
// }

// function init() {
//   const $slide = $(".slide");
//   const slideWidth = $slide.outerWidth();
//   const slideNum = $slide.length;
//   const slideSetWidth = slideWidth * (slideNum+2);
//   const slideCount = 1;
//   const indicator = $(".indicator");
//   let indicatorHTML = "";
//   let dotIndex = 1;
//   var clickFlag = true;
//   cloneSlide(slideSetWidth);
//   addIndicator($slide,indicatorHTML,dotIndex,indicator);
//   clickIndicator(slideWidth,slideNum);
// }
// init();



// });