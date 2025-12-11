const revealBtn = document.getElementById('revealBtn');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');


revealBtn.addEventListener('click', () => {
popup.style.display = 'flex';
});


closePopup.addEventListener('click', () => {
popup.style.display = 'none';
});


window.addEventListener('click', (e) => {
if (e.target === popup) {
popup.style.display = 'none';
}
});