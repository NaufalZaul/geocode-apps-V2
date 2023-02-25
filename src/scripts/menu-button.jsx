
export default function MenuButton() {
  const menuBar = document.getElementById('menu-bar');

  document.getElementById('menu').addEventListener('click', () => {
    menuBar.classList.toggle('hidden')
    menuBar.classList.toggle('absolute')
  })
}