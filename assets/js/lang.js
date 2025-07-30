document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const langContents = document.querySelectorAll('.language-content');
    const footerTexts = document.querySelectorAll('.footer-text');
            
    langButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
                    
            langButtons.forEach(btn => btn.classList.remove('active'));
            langContents.forEach(content => content.classList.remove('active'));
                    
            this.classList.add('active');
            document.getElementById(`${lang}-content`).classList.add('active');
                    
            footerTexts.forEach(text => {
                text.textContent = text.getAttribute(`data-${lang}`);
            });
        });
    });
});