document.addEventListener('DOMContentLoaded', function () { 
    let bigImage = document.querySelector('#imgManipulated img');
    
    const images = document.querySelectorAll('#thumbBox img');
    for (let img of images) {
        img.addEventListener('click', function () {
            let filename = img.getAttribute('src');
            
            bigImage.setAttribute('src', filename.replace('small', 'medium'));
            document.querySelector('figcaption em').textContent = img.getAttribute('title');
            document.querySelector('figcaption span').textContent = img.getAttribute('alt');
        });
    }
    
    document.querySelector('#sliderBox').addEventListener('change', function (e) {
        if (e.target && e.target.nodeName == 'INPUT') {
            bigImage.style.filter = 'opacity(' + document.querySelector('#sliderOpacity').value + '%) ' + 
                                    'saturate(' + document.querySelector('#sliderSaturation').value + '%) ' + 
                                    'brightness(' + document.querySelector('#sliderBrightness').value + '%) ' + 
                                    'hue-rotate(' + document.querySelector('#sliderHue').value + 'deg) ' + 
                                    'grayscale(' + document.querySelector('#sliderGray').value + '%) ' + 
                                    'blur(' + document.querySelector('#sliderBlur').value + 'px)';
            refreshValueLabels();
        }
        
        function refreshValueLabels() {
            document.querySelector('#numOpacity').textContent = document.querySelector('#sliderOpacity').value;
            document.querySelector('#numSaturation').textContent = document.querySelector('#sliderSaturation').value;
            document.querySelector('#numBrightness').textContent = document.querySelector('#sliderBrightness').value;
            document.querySelector('#numHue').textContent = document.querySelector('#sliderHue').value;
            document.querySelector('#numGray').textContent = document.querySelector('#sliderGray').value;
            document.querySelector('#numBlur').textContent = document.querySelector('#sliderBlur').value;
        }
    });
    
    document.querySelector('#resetFilters').addEventListener('click', function () {
        bigImage.style.filter = 'none';
    });
});