document.addEventListener('DOMContentLoaded', function () {
    const panels = document.querySelectorAll('.panel');
    
    for (let panel of panels) {
        panel.addEventListener('click', function () {
            console.log('Clicked!');
            this.classList.toggle('open');
        });
    }
});