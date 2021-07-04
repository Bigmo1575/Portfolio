
$(function() {
    $(window ).resize( function() {
        if($(window).width() >= 1025){

        $susPic = $('#susPics img');

        $susPic.hover(function() {
            $(this).css("cursor", "pointer");
            $(this).stop().animate({
                width: "50%",
                height: "50%"
            }, 'slow');
            
        }, function(){
            $(this).stop().animate({
                width: "25%"
            }, 'slow')
        });
        }
}).resize(); 

var allFolders = $(".list li > ul");
allFolders.each(function() {

  // add the folder class to the parent <li>
  var folderAndName = $(this).parent();
  folderAndName.addClass("folder");

  // backup this inner <ul>
  var backupOfThisFolder = $(this);
  // then delete it
  $(this).remove();
  // add an <a> tag to whats left ie. the folder name
  folderAndName.wrapInner("<a href='#' />");
  // then put the inner <ul> back
  folderAndName.append(backupOfThisFolder);

  // now add a slideToggle to the <a> we just added
  folderAndName.find("a").click(function(e) {
      // making sure to stop to not create back log of clicks
    $(this).siblings("ul").stop().slideToggle("slow");
    e.preventDefault();
  });

});

});

