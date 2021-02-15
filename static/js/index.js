function main() {
  const form = document.querySelector('.form');

  form.addEventListener('submit', (event)=>{
    const inputs = form.querySelectorAll('.input');
    const item = {};
    Object.keys(inputs).forEach((index) => {
      item[inputs[index].name] = inputs[index].value;
    });
    console.log(item);
    event.preventDefault();
  })
}
main();
