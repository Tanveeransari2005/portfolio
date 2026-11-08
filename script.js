document.getElementById('year').textContent = new Date().getFullYear();
const btn = document.querySelector('.menu-btn'), links = document.querySelector('.links');
btn.addEventListener('click', () => { const o = links.classList.toggle('open'); btn.setAttribute('aria-expanded', o); });
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); } }), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
