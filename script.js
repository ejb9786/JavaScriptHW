var imageGallery = (function() {

            var sliderInd = 0;

            homepageBanner = function() {

                var i;

                var banners = document.getElementsByClassName("banner");

                for (i = 0; i < banners.length; i++) {

                    banners[i].style.display = "none";

                }

                sliderInd++;

                if (sliderInd > banners.length) { sliderInd = 1 }

                if (banners[sliderInd - 1] != undefined) {

                    banners[sliderInd - 1].style.display = "block";

                    setTimeout(this.homepageBanner, 1000);

                },

                addListeners = function() {

                        var items = document.getElementsByClassName("image");

                        for (let index = 0; index < items.length; index++) {

                            const element = items[index];

                            element.addEventListener("mouseover", this.loadFullImage, false);

                        }



                    },

                    loadFullImage = function(event)

                {
                    console.log(event.target.src);

                    document.getElementById("fullImage").innerHTML = '<img src="' + event.target.src + '"/>';

                },

                retObject = {

                    init: function() {

                        homepageBanner();

                        addListeners();

                    }

                };

                return retObject;

            })();

        imageGallery.init();