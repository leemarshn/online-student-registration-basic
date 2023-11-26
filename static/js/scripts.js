// Using JavaScript to dynamically load footer.html content
fetch('./includes/footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to load footer. Status: ${response.status}`);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));

// Using JavaScript to dynamically load menu.html content and replace iframe
fetch('./includes/menu.html')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to load menu. Status: ${response.status}`);
        }
        return response.text();
    })
    .then(data => {
        // Replace the content of the container with the loaded menu content
        document.getElementById('menu-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading menu:', error));

// Script to add header
fetch('./includes/header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to load menu. Status: ${response.status}`);
        }
        return response.text();
    })
    .then(data => {
        // Replace the content of the container with the loaded menu content
        document.getElementById('header-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading menu:', error));

