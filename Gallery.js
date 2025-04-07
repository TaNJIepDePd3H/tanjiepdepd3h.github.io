window.onload = function() {
    initializeGallery();
    console.log('Gallery initialized - tabindex attributes added');
};

function updateDisplay(previewPic) {
    const display = document.getElementById('display');
    display.style.backgroundImage = `url('${previewPic.src}')`;
    display.textContent = previewPic.alt;
    display.style.color = 'white';
    display.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.7)';
    display.style.fontSize = '1.5em';
    display.style.fontWeight = 'bold';
    display.style.padding = '20px';
    display.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
}

function resetDisplay() {
    const display = document.getElementById('display');
    display.style.backgroundImage = 'none';
    display.textContent = 'Hover over or focus on an image below to display here';
    display.style.color = '#333';
    display.style.textShadow = 'none';
    display.style.fontSize = '1em';
    display.style.fontWeight = 'normal';
    display.style.backgroundColor = '#f9f9f9';
}

function initializeGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    let tabIndexCounter = 1;
    
    thumbnails.forEach(thumbnail => {
        thumbnail.setAttribute('tabindex', '0');
        const figure = thumbnail.closest('figure');
        if (figure) {
            figure.setAttribute('tabindex', '0');
        }
        console.log(`Added tabindex to: ${thumbnail.alt}`);
    });
    
    document.getElementById('display').setAttribute('tabindex', '0');
}
