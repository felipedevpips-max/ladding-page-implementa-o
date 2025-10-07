const botao = document.getElementById('toggle-theme');
const icone = document.getElementById('theme-icon');
const logo = document.getElementById('logo');
const favcon = document.getElementById('favicon');


botao.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Troca o ícone
  if (document.body.classList.contains('dark')) {
    icone.src = '../img/light_mode.svg';
    icone.alt = 'modo claro';
    logo.src = '../img/Logodark.svg';
    logo.alt = 'logo dark';
    favcon.href = '../favicon_dark.svg';
    alt = 'favicon dark';
    

  } else {
    icone.src = '../img/dark_mode.svg';
    icone.alt = 'modo escuro';
    logo.src = '../img/Logo.svg';
    logo.alt = 'logo';
    favcon.href = '../favicon_light.svg';
    alt = 'favicon light';

  }

  // Salvar o tema 
  const temaAtual = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('tema', temaAtual);
});

window.addEventListener('load', () => {
  const temaSalvo = localStorage.getItem('tema');
  const logo = document.getElementById('logo');
  const icone = document.getElementById('theme-icon');
  const favcon = document.getElementById('favicon');

  if (temaSalvo === 'dark') {
    document.body.classList.add('dark');
    icone.src = '../img/light_mode.svg';
    icone.alt = 'modo claro';
    logo.src = '../img/Logodark.svg';
    logo.alt = 'logo dark';
    favcon.href = '../favicon_dark.svg';
    alt = 'favicon dark';
  } else {
    // Garantir que os ícones fiquem corretos mesmo se tema for light
    icone.src = '../img/dark_mode.svg';
    icone.alt = 'modo escuro';
    logo.src = '../img/Logo.svg';
    logo.alt = 'logo';
    favcon.href = '../favicon_light.svg';
    alt = 'favicon light';
  }
});
