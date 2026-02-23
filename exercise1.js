// exercise1.js
const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', function(event) {
    // 1. Find the closest trigger
    const trigger = event.target.closest('.accordion-trigger');
    if (!trigger) return;

    // 2. Find the closest .accordion-item (Fixed spelling and casing)
    const currentItem = trigger.closest('.accordion-item'); 

    // 3. Check if it's already open BEFORE we close everything
    const isOpen = currentItem.classList.contains('open');

    // 4. Close ALL accordion items
    const allItems = accordion.querySelectorAll('.accordion-item');
    allItems.forEach(item => {
        item.classList.remove('open');
    });

    // 5. Toggle logic: If it wasn't open, open it now
    if (!isOpen) {
        currentItem.classList.add('open');
    }
});