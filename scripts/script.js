// Smooth scroll para los enlaces de navegación
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Copiar email al hacer clic en el icono de email
document.getElementById('email-link').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Reemplaza esto con tu email real
    const email = 'eliaswassit18@gmail.com';
    
    // Crear un elemento temporal para copiar el texto
    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    
    // Mostrar un mensaje de confirmación
    const originalImg = this.querySelector('img');
    const originalAlt = originalImg.alt;
    
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.textContent = '¡Email copiado!';
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #3b82f6, #60a5fa);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(59, 130, 246, 0.5);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    // Eliminar notificación después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
});

// Efecto de resaltado en la navegación al hacer scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    const navHeight = document.querySelector('nav').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 50;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Añadir las animaciones CSS necesarias
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .nav-link.active {
        color: #60a5fa;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);