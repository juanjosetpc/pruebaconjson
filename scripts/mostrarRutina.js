const idRutina = params.get('idRutina');

function mostrarRutina() {
  fetch('https://raw.githubusercontent.com/juanjosetpc/pruebaconjson/main/ficheros%20json/rutinas.json')
  .then(response => response.json())
      .then(data => {
        const rutinaAccordion = document.getElementById('rutinaAccordion');
  
        data.rutinas[idRutina].dias.forEach((dia, index) => {
          const card = document.createElement('div');
          card.setAttribute('class', 'accordion-item row')
  
          const h1 = document.createElement('h1');
          h1.setAttribute('class' ,'accordion-header dia');

          btn = document.createElement('button');
          btn.setAttribute('class' , 'accordion-button')
          btn.setAttribute('type', 'button')
          btn.setAttribute('data-bs-toggle', 'collapse');
          btn.setAttribute('data-bs-target', `#dia-${index}`);
          btn.setAttribute('aria-expanded', 'true');
          btn.setAttribute('aria-controls', `#dia-${index}`);
          btn.textContent = dia.nombre;
          
          h1.appendChild(btn);
          card.appendChild(h1)

          const collapse = document.createElement('div');
          if(index === 0){
            collapse.setAttribute('class', 'accordion-collapse collapse show');

          }else{
            collapse.setAttribute('class', 'accordion-collapse collapse')
          }
          collapse.setAttribute('id', `dia-${index}`);

          const divEjerciciosAccordion = document.createElement('div');
          divEjerciciosAccordion.setAttribute('class', 'accordion-body');
  
  
          dia.ejercicios.forEach(ejercicio => {
            const ejercicioCard = document.createElement('div');
            ejercicioCard.setAttribute('class' ,'row justify-content-start col-md-6 mt-2 mb-2')
            ejercicioCard.classList.add('card');
  
            const ejercicioCardHeader = document.createElement('div');
            ejercicioCardHeader.classList.add('card-header');
            ejercicioCardHeader.textContent = ejercicio.nombre;
  
            const ejercicioCardBody = document.createElement('div');
            ejercicioCardBody.classList.add('card-body');
  
            const imagen = document.createElement('img');
            imagen.classList.add('img-fluid', 'rounded');
            imagen.setAttribute('src', ejercicio.imagen);
  
            const series = document.createElement('p');
            series.textContent = `Series: ${ejercicio.series}`;
  
            const repeticiones = document.createElement('p');
            repeticiones.textContent = `Repeticiones: ${ejercicio.repeticiones}`;
  
            ejercicioCardBody.appendChild(imagen);
            ejercicioCardBody.appendChild(series);
            ejercicioCardBody.appendChild(repeticiones);
  
            ejercicioCard.appendChild(ejercicioCardHeader);
            ejercicioCard.appendChild(ejercicioCardBody);
  
            divEjerciciosAccordion.appendChild(ejercicioCard);
          });
  
          collapse.appendChild(divEjerciciosAccordion);
          card.appendChild(collapse);
  
          rutinaAccordion.appendChild(card);
        });

      });
}
