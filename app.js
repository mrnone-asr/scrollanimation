const observer = new IntersectionObserver((e) => {
    e.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const secElements = document.querySelectorAll('.sec');
secElements.forEach((el)=> observer.observe(el));