let calculation = "";

      displayCalculation();

      function updateCalculation(choice) {
          calculation += choice;
          displayCalculation();

          //localStorage.setItem('calculation', calculation);
      }

      function displayCalculation() {
        document.querySelector('.js-console')
            .innerHTML = calculation;
      }