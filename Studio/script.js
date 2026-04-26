document.getElementById('addImageBtn').addEventListener('click', function() {
    const input = document.getElementById('imageInput');
    const files = input.files;
    const imageGrid = document.getElementById('imageGrid');

    if (files.length === 0) {
        alert('Please select at least one image file.');
        return;
    }

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = file.name;
                img.title = file.name;
                imageGrid.appendChild(img);
            };
            reader.readAsDataURL(file);
        } else {
            alert(`${file.name} is not a valid image file.`);
        }
    }

    // Clear the input
    input.value = '';
});