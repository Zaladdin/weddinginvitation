document.getElementById('openEnvelope').addEventListener('click', () => {
    const screen = document.getElementById('screen');
    screen.classList.add('fade-out');

    setTimeout(() => {
        alert('Открывается приглашение');
        // window.location.href = 'invite.html';
    }, 800);
});
