
    document.addEventListener('DOMContentLoaded', () => {
      const buttons = document.querySelectorAll('.product-card .btn');

      buttons.forEach(button => {
        button.addEventListener('click', () => {
          const card = button.closest('.product-card');
          const name = card.querySelector('h3')?.innerText.trim();
          const price = card.querySelector('.price')?.innerText.trim();
          const image = card.querySelector('img')?.getAttribute('src');

          let cart = JSON.parse(localStorage.getItem('cart')) || [];

          const existingProduct = cart.find(item => item.name === name);

          if (existingProduct) {
            existingProduct.quantity += 1;
          } else {
            cart.push({
              name,
              price,
              image,
              quantity: 1
            });
          }

          localStorage.setItem('cart', JSON.stringify(cart));
          alert(`${name} додано до кошика!`);
        });
      });
    });
