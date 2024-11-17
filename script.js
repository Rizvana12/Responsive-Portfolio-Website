const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click', function(event){
        event.preventDefault();
        const checkbox = document.getElementById('check');
        checkbox.checked = !checkbox.checked;
        setTimeout(() => {
            window.location.href = event.target.href;
        },100);
    });
})