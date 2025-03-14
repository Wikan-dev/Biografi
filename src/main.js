const button = document.getElementById('enter');
const linkContainer = document.getElementById('contaner');

button.addEventListener('click', () => {
  // Toggle the visibility of the link
  if (linkContainer.style.display === 'none') {
    linkContainer.style.display = 'block';
    button.textContent = 'Hide Link'; // Change button text to 'Hide Link'
  } else {
    linkContainer.style.display = 'none';
    button.textContent = 'Show Link'; // Change button text to 'Show Link'
  }
});