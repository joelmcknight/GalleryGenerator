// Create a gallery that demonstrates 7 "grid style" examples.
// make sure there is a graphic illustration, a title, a code snippet, a button to hide/show the sample gallery, a button to copy the code snippet, and a sample gallery (containing 9 images).

// You will need a way to switch between the 7 examples. 

// note: the sample gallery does not transform automatically when switching between examples. The user will have to click the "transform" button within the example.

// create an array containing 7 objects

// each object contains the following properties:
	/* imageChange: function(){ replace image src url };
	titleChange: function(){ replace text of h3 with id:"example-title" };
	snippetChange: function(){ replace text inside of xmp with class:"xmp"};*/


// Click icon (either < > or circles or both, tbd) will loop through the objects in our array. 

// When goes through all objects in array, reset loop.

$(function() {
    console.log( "ready!" );

	$(".demonstrate").on("click", function(){
		$(".demonstration").toggleClass("show-gallery");
        $(this).text($(this).text() == 'Show Example' ? 'Hide Example' : 'Show Example');
        // We should probably also implement smooth-scroll to the example gallery...
	});


	new Clipboard('.copy-code');

	$(".copy-code").on("click", function(){
		alert("The code for " + gallery[galleryCounter].exampleTitle + " has been copied!");
	});

	// Example Objects & Their Properties. We will need to put them into an Array.
    var exampleOne = {
    	gridSample: "images/grid_example1.png",
    	exampleTitle: "Example 1",
    	xmp: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Example Gallery Grid Style 1</title>\n</head>\n<body>\n    <div id="gallery" class="gallery1 clearfix">\n        <div class="images image1"></div>\n        <div class="images image2"></div>\n        <div class="images image3"></div>\n        <div class="images image4"></div>\n        <div class="images image5"></div>\n        <div class="images image6"></div>\n        <div class="images image7"></div>\n        <div class="images image8"></div>\n        <div class="images image9"></div>\n    </div>\n</body>\n</html>\n\n/// PUT THIS IN YOUR CSS STYLE SHEET ///\n    .gallery1 {\n        width:100%;\n        height:auto;\n        background:$mainColor;\n        padding:25px;\n    }\n    .gallery1 img {\n        max-width: 100%;\n    }\n    .gallery1 .images {\n        background:url("http://unsplash.it/1000/1000/?random");\n        background-size: cover;\n        background-position: center;\n        border:1px solid white;\n        float: left;\n        width:calc(100% / 3);\n        height:250px;\n    }\n/// END CSS STYLING ///'
    };
    var exampleTwo = {
    	gridSample: "images/grid_example2.png",
    	exampleTitle: "Example 2",
    	xmp: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Example Gallery Grid Style 2</title>\n</head>\n<body>\n    <div id="gallery" class="gallery1 clearfix">\n        <div class="images image1"></div>\n        <div class="images image2"></div>\n        <div class="images image3"></div>\n        <div class="images image4"></div>\n        <div class="images image5"></div>\n        <div class="images image6"></div>\n        <div class="images image7"></div>\n        <div class="images image8"></div>\n        <div class="images image9"></div>\n    </div>\n</body>\n</html>\n\n/// PUT THIS IN YOUR CSS STYLE SHEET ///\n    .gallery2 {\n        width:100%;\n        height:auto;\n        background:$mainColor;\n        padding:25px;\n    }\n    .gallery2 img {\n        max-width: 100%;\n    }\n    .gallery2 .images {\n        background:url("http://unsplash.it/1000/1000/?random");\n        background-size: cover;\n        background-position: center;\n        border:1px solid white;\n        float: left;\n        width:calc(100% / 2);\n        height:250px;\n    }\n    .gallery2 .image1 {\n        width:100%;\n        height:400px;\n    }\n/// END CSS STYLING ///'
    };
    var exampleThree = {
    	gridSample: "images/grid_example3.png",
    	exampleTitle: "Example 3",
    	xmp: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Example Gallery Grid Style 3</title>\n</head>\n<body>\n    <div id="gallery" class="gallery1 clearfix">\n        <div class="images image1"></div>\n        <div class="images image2"></div>\n        <div class="images image3"></div>\n        <div class="images image4"></div>\n        <div class="images image5"></div>\n        <div class="images image6"></div>\n        <div class="images image7"></div>\n        <div class="images image8"></div>\n        <div class="images image9"></div>\n    </div>\n</body>\n</html>\n\n/// PUT THIS IN YOUR CSS STYLE SHEET ///\n    .gallery3 {\n        width:100%;\n        height:auto;\n        background:$mainColor;\n        padding:25px;\n    }\n    .gallery3 img {\n        max-width: 100%;\n    }\n    .gallery3 .images {\n        background:url("http://unsplash.it/1000/1000/?random");\n        background-size: cover;\n        background-position: center;\n        border:1px solid white;\n        float: left;\n        width:calc(100% / 4);\n        height:200px;\n    }\n    .gallery3 .image1 {\n        width:100%;\n        height:400px;\n    }\n/// END CSS STYLING ///'
    };
    var exampleFour = {
    	gridSample: "images/grid_example4.png",
    	exampleTitle: "Example 4",
    	xmp: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Example Gallery Grid Style 4</title>\n</head>\n<body>\n    <div id="gallery" class="gallery1 clearfix">\n        <div class="images image1"></div>\n        <div class="images image2"></div>\n        <div class="images image3"></div>\n        <div class="images image4"></div>\n        <div class="images image5"></div>\n        <div class="images image6"></div>\n        <div class="images image7"></div>\n        <div class="images image8"></div>\n        <div class="images image9"></div>\n    </div>\n</body>\n</html>\n\n/// PUT THIS IN YOUR CSS STYLE SHEET ///\n    .gallery4 {\n        width:100%;\n        height:auto;\n        background:$mainColor;\n        padding:25px;\n    }\n    .gallery4 img {\n        max-width: 100%;\n    }\n    .gallery4 .images {\n        background:url("http://unsplash.it/1000/1000/?random");\n        background-size: cover;\n        background-position: center;\n        border:1px solid white;\n        float: left;\n        width:calc(100% / 3);\n        height:250px;\n    }\n    .gallery4 .image1 {\n        width:100%;\n    }\n    .gallery4 .image2 {\n        width:(100% - (100% / 3));\n    }\n    .gallery4 .image4,\n    .gallery4 .image5 {\n        width:(100% / 2);\n    }\n    .gallery4 .image6,\n    .gallery4 .image7,\n    .gallery4 .image8,\n    .gallery4 .image9 {\n        width:calc(100% / 4);\n        height:200px;\n    }\n/// END CSS STYLING ///'
    };
    var exampleFive = {
    	gridSample: "images/grid_example5.png",
    	exampleTitle: "Example 5",
    	xmp: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Example Gallery Grid Style 5</title>\n</head>\n<body>\n    <div id="gallery" class="gallery1 clearfix">\n        <div class="images image1"></div>\n        <div class="images image2"></div>\n        <div class="images image3"></div>\n        <div class="images image4"></div>\n        <div class="images image5"></div>\n        <div class="images image6"></div>\n        <div class="images image7"></div>\n        <div class="images image8"></div>\n        <div class="images image9"></div>\n    </div>\n</body>\n</html>\n\n/// PUT THIS IN YOUR CSS STYLE SHEET ///\n    .gallery5 {\n        width:100%;\n        height:auto;\n        background:$mainColor;\n        padding:25px;\n    }\n    .gallery5 img {\n        max-width: 100%;\n    }\n    .gallery5 .images {\n        background:url("http://unsplash.it/1000/1000/?random");\n        background-size: cover;\n        background-position: center;\n        border:1px solid white;\n        float: left;\n        width:calc(100% / 3);\n        height:250px;\n    }\n    .gallery5 .image1 {\n        width:calc(100% - (100% / 3));\n        height: 500px;\n    }\n/// END CSS STYLING ///'
    };
    var exampleSix = {
    	gridSample: "images/grid_example6.png",
    	exampleTitle: "Example 6",
    	xmp: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Example Gallery Grid Style 6</title>\n</head>\n<body>\n    <div id="gallery" class="gallery1 clearfix">\n        <div class="images image1"></div>\n        <div class="images image2"></div>\n        <div class="images image3"></div>\n        <div class="images image4"></div>\n        <div class="images image5"></div>\n        <div class="images image6"></div>\n        <div class="images image7"></div>\n        <div class="images image8"></div>\n        <div class="images image9"></div>\n    </div>\n</body>\n</html>\n\n/// PUT THIS IN YOUR CSS STYLE SHEET ///\n    .gallery6 {\n        width:100%;\n        height:auto;\n        background:$mainColor;\n        padding:25px;\n    }\n    .gallery6 img {\n        max-width: 100%;\n    }\n    .gallery6 .images {\n        background:url("http://unsplash.it/1000/1000/?random");\n        background-size: cover;\n        background-position: center;\n        border:1px solid white;\n        float: left;\n        width:calc(100% / 3);\n        height:250px;\n    }\n    .gallery6 .image1,\n    .gallery6 .image6 {\n        width:calc(100% - (100% / 3));\n    }\n    .gallery6 .image3,\n    .gallery6 .image4 {\n        width:calc(100% / 2);\n    }\n/// END CSS STYLING ///'
    };
    var exampleSeven = {
    	gridSample: "images/grid_example7.png",
    	exampleTitle: "Example 7",
    	xmp: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Example Gallery Grid Style 7</title>\n</head>\n<body>\n    <div id="gallery" class="gallery1 clearfix">\n        <div class="images image1"></div>\n        <div class="images image2"></div>\n        <div class="images image3"></div>\n        <div class="images image4"></div>\n        <div class="images image5"></div>\n        <div class="images image6"></div>\n        <div class="images image7"></div>\n        <div class="images image8"></div>\n        <div class="images image9"></div>\n    </div>\n</body>\n</html>\n\n/// PUT THIS IN YOUR CSS STYLE SHEET ///\n    .gallery7 {\n        width:100%;\n        height:auto;\n        background:$mainColor;\n        padding:25px;\n    }\n    .gallery7 img {\n        max-width: 100%;\n    }\n    .gallery7 .images {\n        background:url("http://unsplash.it/1000/1000/?random");\n        background-size: cover;\n        background-position: center;\n        border:1px solid white;\n        float: left;\n        width:100%;\n        height:400px;\n    }\n/// END CSS STYLING ///'
    };
  
    // Array to store our example Objects.

    var gallery = [exampleOne, exampleTwo, exampleThree, exampleFour, exampleFive, exampleSix, exampleSeven];

    /* Create a function that will replace the following information:
    - gridSample (img URL)
    - exampleTitle
    - xmp */

    var information = function(){
    	$('#grid-sample').attr('src', gallery[galleryCounter].gridSample);
    	$('h3').html(gallery[galleryCounter].exampleTitle);
    	$('xmp').html(gallery[galleryCounter].xmp);
    	console.log("this is working");
    }



	var galleryCounter = 0;

	$('.next').on("click", function(){
		galleryCounter ++;
		if(galleryCounter === 7){
			galleryCounter = 0;
		};
		$("#gallery").removeClass("gallery" + galleryCounter).addClass("gallery" + (galleryCounter + 1) );
		console.log("test");
		if(galleryCounter === 0) {
			$("#gallery").removeClass("gallery7").addClass("gallery1");
		};
		console.log(galleryCounter);
		information();

	});

	$('.previous').on("click", function(){
		galleryCounter --;
		if(galleryCounter === -1){
			galleryCounter = 6;
		};

		$("#gallery").removeClass("gallery" + (galleryCounter + 2)).addClass("gallery" + (galleryCounter + 1));
		console.log("test");
		if(galleryCounter === 6) {
			$("#gallery").removeClass("gallery1").addClass("gallery7");
		};
		console.log(galleryCounter);
		information();

	});
});







