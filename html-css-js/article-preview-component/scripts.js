const buttonProfile = document.querySelector('.share-button-profile');
const buttonShare = document.querySelector('.share-button-share');

const profile = document.querySelector('.profile');
const shareDiv = document.querySelector('.share-div');

function toggleDivs() {
    if (shareDiv.style.display !== 'flex') {
        profile.style.display = 'none';
        shareDiv.style.display = 'flex';
    } else {
        profile.style.display = 'flex';
        shareDiv.style.display = 'none';
    }
}

buttonProfile.onclick = toggleDivs;
buttonShare.onclick = toggleDivs;
