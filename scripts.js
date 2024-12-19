const menuToggle = document.querySelector(".menu-toggle");
        const sidebar = document.querySelector(".sidebar");
        const mainContent = document.querySelector(".main-content");
        const body = document.body;

        // Créer l'overlay
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        body.appendChild(overlay);

        // Gérer le menu mobile
        function toggleMenu() {
            sidebar.classList.toggle("open");
            overlay.classList.toggle("active");
            body.style.overflow = sidebar.classList.contains("open") ? "hidden" : "auto";
        }

        menuToggle.addEventListener("click", toggleMenu);
        overlay.addEventListener("click", toggleMenu);

        // Gérer le redimensionnement
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                sidebar.classList.remove("open");
                overlay.classList.remove("active");
                body.style.overflow = "auto";
            }
        });


        // Fonction pour afficher le formulaire de prélèvement lorsque le bouton "Ajouter un Prélèvement" est cliqué
        document.getElementById('add-prelevement-btn').addEventListener('click', function() {
            document.getElementById('prelevement-form-card').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
        });

        // Fonction pour fermer le formulaire
        document.getElementById('close-form-btn').addEventListener('click', function() {
            document.getElementById('prelevement-form-card').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
        });

        // Soumettre le formulaire
        document.getElementById('prelevement-form-content').addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Prélèvement ajouté avec succès !');
            // Vous pouvez ajouter ici la logique pour ajouter le prélèvement à la base de données ou tableau.
            document.getElementById('prelevement-form-card').reset();
            document.getElementById('prelevement-form-card').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
        });
//  calcul BMI

document.getElementById("prelevement-form-content").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire pour tester le calcul du BMI

    // Récupération des valeurs des champs
    const poids = parseFloat(document.getElementById("poids").value);
    const taille = parseFloat(document.getElementById("taille").value);

    // Vérification que le poids et la taille sont valides
    if (isNaN(poids) || isNaN(taille) || taille <= 0) {
        alert("Veuillez entrer des valeurs valides pour le poids et la taille.");
        return;
    }

    // Calcul du BMI (poids / taille^2)
    const bmi = poids / (taille * taille);

    // Affichage du BMI
    document.getElementById("bmi").value = bmi.toFixed(2); // Arrondi à 2 décimales
});


function filterPatients() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("patientsTableBody");
    tr = table.getElementsByTagName("tr");
  
    // Parcours chaque ligne du tableau (chaque patient)
    for (i = 0; i < tr.length; i++) {
      // Recherche dans toutes les cellules de la ligne (nom, prénom, etc.)
      td = tr[i].getElementsByTagName("td");
      if (td) {
        var found = false;
  
        // Vérifie chaque colonne pour un match avec le terme de recherche
        for (var j = 0; j < td.length; j++) {
          txtValue = td[j].textContent || td[j].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            found = true;
            break;
          }
        }
  
        // Affiche ou cache la ligne en fonction du match
        if (found) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  