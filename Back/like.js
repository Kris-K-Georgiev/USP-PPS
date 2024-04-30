// Изберете всички икони за харесване и контейнери
const likeIcons = document.querySelectorAll('.like-icon');
const shopContainers = document.querySelectorAll('.shop-container');

// Функция за обработка на кликване върху икона за харесване
function handleLikeIconClick(event) {
    // Спрете разпространението на събитието към контейнера
    event.stopPropagation();
    
    // Вземете иконата, върху която е кликнато
    const icon = event.currentTarget;
    
    // Превключете класа за промяна на цвета
    icon.classList.toggle('liked');
}

// Добавете слушател на събития за кликване към всяка икона за харесване
likeIcons.forEach(icon => {
    icon.addEventListener('click', handleLikeIconClick);
});

// Функция за обработка на кликване върху контейнер
function handleContainerClick(event) {
    // Вземете контейнера, върху който е кликнато
    const container = event.currentTarget;
    
    // Вземете URL от атрибута на контейнера
    const url = container.getAttribute('data-url');
    
    // Отворете URL в нов прозорец или таб
    window.open(url, '_blank');
}

// Добавете слушател на събития за кликване към всеки контейнер
shopContainers.forEach(container => {
    container.addEventListener('click', handleContainerClick);
});




