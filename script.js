function displaynum(n1) {
     Calculator.text1.value = Calculator.text1.value + n1;
}
const chk = document.getElementById('chk')
chk.addEventListener('change', () => {
     document.body.classList.toggle('dark')
})