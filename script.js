let sidebar = true
let ul = document.querySelector('.side-nav')
    
//expand collapse menu function
    const openCloseMenu = () => {
      if(sidebar === true){
      ul.classList.add('response');
      sidebar = false;
      }else{
        ul.classList.remove('response');
        sidebar = true;
      }
  }
// onclick expand collapse menu
  document.querySelector('.times').addEventListener('click', openCloseMenu)
  document.querySelector('.angle-right').addEventListener('click', openCloseMenu)

  //toggle search on last list item click
  $(document).ready(function() {
      $('.card').on('click', function() {
        $(".search").addClass("expand");
      });
    });
      $('ul li').on('click', function() {
        $('.search').removeClass('expand');
      });

//toggle active class on list click
  $('.list li').click(function () {
    $('.list .active').removeClass('active');
    $(this).addClass('active');
  })