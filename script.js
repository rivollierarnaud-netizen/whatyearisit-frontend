fetch('whatyearisit-backend-opal-eight.vercel.apphttps://whatyearisit-backend-opal-eight.vercel.app/year')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = data.year;
 });