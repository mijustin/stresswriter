$(document).ready(function() {

  $(".shred.button").on('click', () => {
    $('.editable').addClass('content').wrap("<div class='shredded-paper'></div>")
    $('<div class="shredder-holder" style="display: none;"><div class="shredder"></div></div>').appendTo('#container')
    $('.shredder-holder').fadeIn(200)


    for (var i = 0; i < 10; i++) {
      const clone = $('.content').clone().removeClass().addClass('part-' + (i+1))
      clone.appendTo('.shredded-paper')
    }
    $('.shredded-paper').addClass('animate-shredded-paper');
    $('.shredded-paper > .content').addClass('animate-content');
    $('.shredder-holder').addClass('shredded-holder-animate');
    $('.shredded-paper .part-1, .shredded-paper .part-2, .shredded-paper .part-4, .shredded-paper .part-6, .shredded-paper .part-8, .shredded-paper .part-10').addClass('shredded-paper-p-animate');
    $('.shredded-paper .part-3, .shredded-paper .part-5, .shredded-paper .part-7, .shredded-paper .part-9').addClass('shredded-paper-q-animate');
    setTimeout(function() {
      $('.shredded-paper').css({'top' : '-300px'});
      $('.shredded-paper').removeClass('animate-shredded-paper');
      $('.shredded-paper > .content').removeClass('animate-content');
      $('.shredder-holder').removeClass('shredded-holder-animate');
      $('.shredded-paper .part-1, .shredded-paper .part-2, .shredded-paper .part-4, .shredded-paper .part-6, .shredded-paper .part-8, .shredded-paper .part-10').removeClass('shredded-paper-p-animate');
      $('.shredded-paper .part-3, .shredded-paper .part-5, .shredded-paper .part-7, .shredded-paper .part-9').removeClass('shredded-paper-q-animate');

      $('.shredded-paper').remove()
      $('.shredder-holder').fadeOut(200, () => $(this).remove() )

      $("<div class='editable' style='display: none;'></div>").insertAfter('h2')
      $('.editable').stop(true, true).fadeIn({ duration: 400, queue: false }).css('display', 'none').slideDown(400, () => {
        new MediumEditor('.editable')
      });


    }, 4000);
  });

});
