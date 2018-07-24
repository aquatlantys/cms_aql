$(document).ready(function () {
  // MagnificPopup
  var magnifPopup = function () {
    $('.image-popup').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-fade',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function (openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };

  var magnifYoutube = function () {
    $('.pop-video').magnificPopup({
      type: 'iframe',
      iframe: {
        patterns: {
          youtube: {
            index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

            id: 'v=', // String that splits URL in a two parts, second part should be %id%
            // Or null - full URL will be returned
            // Or a function that should return %id%, for example:
            // id: function(url) { return 'parsed id'; }

            src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
          }
        }
      }


    });
  };

  var magnifSwim = function () {
    $('.pop-swim').magnificPopup({
      type: 'inline',
      mainClass: 'mfp-fade',
      alignTop: true,
      midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
  };

  var magnifBebe = function () {
    $('.pop-bebe').magnificPopup({
      type: 'inline',
      mainClass: 'mfp-fade',
      alignTop: true,
      midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
  };

  var magnifTime = function () {
    $('.pop-time').magnificPopup({
      type: 'inline',
      mainClass: 'mfp-fade',
      alignTop: true,
      midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
  };

  var magnifPlans = function () {
    $('.pop-plans').magnificPopup({
      type: 'inline',
      mainClass: 'mfp-fade',
      alignTop: true,
      midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
  };

  var magnifResa = function () {
    $('.pop-resa').magnificPopup({
      type: 'inline',
      mainClass: 'mfp-fade',
      alignTop: true,
      midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
  };

  var magnifAbo = function () {
    $('.pop-abo').magnificPopup({
      type: 'inline',
      mainClass: 'mfp-fade',
      alignTop: true,
      midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
  };

  var magnifPlanning = function () {
    $('.pop-planning').magnificPopup({
      type: 'inline',
      mainClass: 'mfp-fade',
      alignTop: true,
      midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
  };

  var magnifContact = function () {
    $('.pop-contact').magnificPopup({
      type: 'inline',
      mainClass: 'mfp-fade',
      alignTop: true,
      midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
  };




  // Call the functions
  magnifSwim();
  magnifBebe();
  magnifPlans();
  magnifTime();
  magnifPopup();
  magnifYoutube();
  magnifResa();
  magnifAbo();
  magnifPlanning();
  magnifContact();
});
