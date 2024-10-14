function changeBackground(element) {
    let imageUrl = '';

    switch (element) {
        case 'agua':
            imageUrl = 'images/agua.jpg'; 
            break;
        case 'tierra':
            imageUrl = 'images/tierra.jpg'; 
            break;
        case 'fuego':
            imageUrl = 'images/fuego.jpg'; 
            break;
        case 'aire':
            imageUrl = 'images/aire.jpg'; 
            break;
    }

    document.querySelector('.container').style.backgroundImage = `url(${imageUrl})`;
}
