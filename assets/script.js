var htmlLinks = ["https://www.youtube.com/watch?v=ieb6Svbc10E", "https://du.bootcampcontent.com/denver-coding-bootcamp/DU-DEN-FSF-FT-08-2019-U-C/blob/master/Resources/HTML/html5-sectioning-flowchart.pdf"]

// on click hide the page and show info for the ckicked button
// loop through an array and create anchor tags with links/text
// append the a tags to html
// 
$(document).ready(function start() {
    $("#show").hide()
})

$("#html").click(function () {

    $(".hide").hide();
    $("#show").show();
    for (var i = 0; i < htmlLinks.length; i++) {
        var p = $("<p>")
        var anchor = $("<a>");
        anchor.addClass("anchor");
        anchor.attr("href", htmlLinks[i]);
        anchor.text(htmlLinks[i]);
        p.append(anchor);
        $("#show").append(p);
    }

});
