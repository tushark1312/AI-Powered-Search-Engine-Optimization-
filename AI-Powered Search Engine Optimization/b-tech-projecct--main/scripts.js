// List of cities for AI suggestion
const cities = ['Pune', 'Nashik', 'Delhi', 'Nagpur', 'Mumbai'];

// Function to suggest cities based on user input
function aiSuggestLocations(query) {
    const suggestionBox = document.getElementById('location-suggestions');
    suggestionBox.innerHTML = '';

    if (query.length > 0) {
        const filteredCities = cities.filter(city => city.toLowerCase().startsWith(query.toLowerCase()));

        filteredCities.forEach(city => {
            const item = document.createElement('a');
            item.classList.add('list-group-item', 'list-group-item-action');
            item.textContent = city;
            item.onclick = () => selectLocation(city);
            suggestionBox.appendChild(item);
        });
    }
}


// Function to handle location selection from AI suggestions
function selectLocation(location) {
    document.getElementById('location').value = location;
    document.getElementById('location-suggestions').innerHTML = '';
}

// Function to perform search with AI/ML (dummy placeholder)
function performSearch() {
    const location = document.getElementById('location').value;
    const sector = document.getElementById('sector').value;
    const stage = document.getElementById('stage').value;
    const category = document.getElementById('category').value;

    alert(`Searching for ${sector} businesses in ${location} at the ${stage} stage with a focus on ${category}`);
}


let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}



//dropdown


const dropdownToggle = document.getElementById('offeringsDropdown');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownToggle.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default anchor behavior
  dropdownMenu.classList.toggle('show'); // Toggle the 'show' class
});







