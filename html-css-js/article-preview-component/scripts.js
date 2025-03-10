const buttonProfile = document.querySelector('.share-button-profile');
const buttonShare = document.querySelector('.share-button-share');

const profile = document.querySelector('.profile');
const shareDiv = document.querySelector('.share-div');

function toggleDivs() {
    if (window.innerWidth < 1000) {
        if (shareDiv.style.display !== 'flex') {
            profile.style.display = 'none';
            shareDiv.style.display = 'flex';
        } else {
            profile.style.display = 'flex';
            shareDiv.style.display = 'none';
        }
    } else {
        if (shareDiv.classList.contains('balloon')) {
            shareDiv.classList.remove('balloon');
        } else {
            shareDiv.classList.add('balloon');
        }
    }
}

buttonProfile.onclick = toggleDivs;
buttonShare.onclick = toggleDivs;
