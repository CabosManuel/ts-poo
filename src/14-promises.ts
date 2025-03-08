import axios from 'axios';

// Función que se llama así misma para poder usar async/await
(async ()=> {

  // Función que retorna una promesa después de un tiempo
  function delay(time: number) {
    // Para tipar la promesa Promise<boolean>
    const promise: Promise<boolean> = new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return promise;
  }

  async function getProducts() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data; // Axios guarada la respuesta en la propiedad data
  }

  console.log('Start');
  const rta = await delay(2000); // rta: boolean
  console.log(rta); // true

  const products = await getProducts();
  console.log("🚀 ~ products:", products);
})();
