;(function () {
	
	'use strict';
        var consultancyimageGallery = document.getElementById('consultancyImageGallery'),
            gardenImageGallery = document.getElementById('gardenImageGallery'),
            pasteImageGallery = document.getElementById('pasteImageGallery'),
            suppliesImageGallery = document.getElementById('suppliesImageGallery'),
            organicImageGallery = document.getElementById('organicImageGallery'),
            vermicultureImageGallery = document.getElementById('vermicultureImageGallery'),
            noOfImg = 18,
            noOfGardenImg = 21,
            imgStatus = true;

            createImg(18, 'consultancy', consultancyimageGallery);
            createImg(29,'garden_Devlopment',gardenImageGallery);
            createImg(3,'organic_Supplies',organicImageGallery);
            createImg(6,'supplies',suppliesImageGallery);
            createImg(14,'vermiculture',vermicultureImageGallery);
            createImg(4,'paste_Control',pasteImageGallery);


            function createImg(noOfImg, folder, divId) {

                        for (var i = 0; i < noOfImg; i++) {
                    // var galleryImg = document.createElement("img");
                    var galleryImg = new Image();
                    
                    if(i<=9){
                        var imgName = "images/work/" + folder + "/_img0" + i + ".jpg";
                    }else{
                        var imgName = "images/work/" + folder + "/_img" + i + ".jpg";
                    }
                        galleryImg.src = imgName;
                        divId.appendChild(galleryImg);
                        galleryImg.className = "img-responsive col-lg-4 col-md-4 fh5co-blog animate-box";
                        
                        galleryImg.onerror = function(){
                            this.style.display = "none";
                        }
                }
                // body...
            }


        

        // for (var i = 0; i < noOfGardenImg; i++) {
        //     var galleryImg1 = document.createElement("img");
            
        //     if(i<=9){
        //         var imgName = "images/work/garden_Devlopment/garden_img0" + i + ".jpg";
        //     }else{
        //         var imgName = "images/work/garden_Devlopment/garden_img" + i + ".jpg";
        //     }
        //         galleryImg1.src = imgName;
        //         galleryImg1.className = "img-responsive col-lg-4 col-md-4 fh5co-blog animate-box";
        //         gardenImageGallery.appendChild(galleryImg1);

        //         galleryImg1.onerror = function(){
        //             this.style.display = "none";
        //         }
        // } 

	

}());