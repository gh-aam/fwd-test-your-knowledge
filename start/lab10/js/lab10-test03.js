document.addEventListener("DOMContentLoaded", function () {
    const countryAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/countries.php';
    const photoAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php';
    const imageURL = 'https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/';
    const loader1 = document.querySelector('#loader1');
    const loader2 = document.querySelector('#loader2');
    const main = document.querySelector('main');
    const results = document.querySelector('#results');
    const select = document.querySelector('#countries');
    const button = document.querySelector('#fetchButton');

    // first hide loaders and main element
    main.style.display = 'none';
    loader1.style.display = 'none';
    loader2.style.display = 'none';

    // then handle button click
    button.addEventListener('click', loadFilters);

    // when button is clicked, fetch data and populate select element
    function loadFilters() {
        // display loader
        main.style.display = 'none';
        loader1.style.display = 'block';
        
        fetch(countryAPI)
        .then(response => response.json())
        .then(countries => {
            // got data! so, hide loader and show main area
            main.style.display = 'block';
            loader1.style.display = 'none';
            
            // in case the user clicks button repeatedly, empty select first
            select.innerHTML = '';
            
            // add an instructional option
            select.appendChild(createOption('Select a country', ''));
            
            // add received countries to select as option
            countries.forEach(country => {
                select.appendChild(createOption(country.name, country.iso));
            });
            
            // add an event listener to the select element
            select.addEventListener('input', loadPhotos);
        });
        
        function createOption(label, value) {
            const option = document.createElement('option');
            
            // set label and attribute
            option.textContent = label;
            option.setAttribute('value', value);
            
            return option;
        }
    }

    // when user selects, fetch data and display images
    function loadPhotos() {
        // if no country is selected, do nothing
        if (select.value == '') {
            results.innerHTML = '';
            
            return;
        }
        
        // show second loader
        loader2.style.display = 'block';
        
        // photos api with country iso
        const url = photoAPI + '?iso=' + select.value;
        
        fetch(url)
        .then(response => response.json())
        .then(photos => {
            // hide loader
            loader2.style.display = 'none';
            
            // remove old photos
            results.innerHTML = '';
            
            // display the photos
            photos.forEach(photo => {
                const img = document.createElement('img');
                
                img.src = imageURL + photo.filename;
                img.title = photo.title;
                img.alt = photo.title;
                results.appendChild(img);
            });
        });
    }
});