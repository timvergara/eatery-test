/**
 * This function triggers all the elements with a class ".coupon-opt-in" and it will add a necesarry html with loading
 * @param event
 * @constructor
 *
 */
function LoadingOptIn(event) {
    // Prevent default anchor click behavior if needed
    event.preventDefault();

    // Get the clicked element
    const element = event.target;

    // Save the original text
    const originalText = element.textContent;

    // Add the 'active' class
    element.classList.add('active');

    // Replace the text with a loading spinner and "loading.."
    element.innerHTML = '<span class="loading-spinner"></span>loading..';

    /**
     * After 2 seconds, restore the original text and remove the 'active' class
     * TODO: In theory this should be an AJAX request where it will add the necesarry element while loading and after AJAX is finished it should add back the original text
     */

    setTimeout(() => {
        element.textContent = originalText;
        element.classList.remove('active');
    }, 2000);
}

// Attach event listener to all elements with the class 'coupon-opt-in'
document.querySelectorAll('.coupon-opt-in').forEach(anchor => {
    anchor.addEventListener('click', LoadingOptIn);
});