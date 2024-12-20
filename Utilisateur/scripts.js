function showModal(type, time, title) {
    let modalId = type === "message" ? "message-modal" : "reminder-modal";
    let modal = document.getElementById(modalId);
    modal.style.display = "block";
  }

  function closeModal() {
    let modals = document.querySelectorAll(".notification-modal");
    modals.forEach((modal) => {
      modal.style.display = "none";
    });
  }

  function showDetailedInfo(type, value) {
    let additionalInfoContainer = document.getElementById('additional-info-container');
    let additionalCard = document.createElement('div');
    additionalCard.classList.add('additional-card');

    // Cas pour le rythme cardiaque
    if (type === 'heartRate') {
        additionalCard.innerHTML = `
            <h4>Rythme Cardiaque : ${value} BPM</h4>
            <p>Votre rythme cardiaque est de ${value} battements par minute (BPM).`;

        if (value >= 60 && value <= 100) {
            additionalCard.innerHTML += `
                <p>Cela signifie que votre cœur fonctionne efficacement et qu'il n'y a pas de signes évidents de problèmes cardiaques. Votre rythme cardiaque est dans la plage normale pour un adulte en bonne santé au repos.</p>
                <p><strong>Conseils :</strong></p>
                <ul>
                    <li>Maintenez une activité physique régulière pour garder votre cœur en bonne santé.</li>
                    <li>Évitez le stress excessif, car cela peut augmenter votre rythme cardiaque.</li>
                    <li>Assurez-vous d'avoir une alimentation saine et équilibrée.</li>
                    <li>Si vous ressentez des palpitations ou des douleurs thoraciques, consultez immédiatement un médecin.</li>
                </ul>
            `;
        } else {
            additionalCard.innerHTML += `
                <p>Cet écart par rapport à la plage normale peut indiquer un problème potentiel. Un rythme cardiaque trop élevé ou trop bas peut signaler des troubles de santé. Il est recommandé de consulter un médecin pour un examen plus approfondi.</p>
                <p><strong>Conseils :</strong></p>
                <ul>
                    <li>Si votre rythme cardiaque est trop élevé (plus de 100 BPM au repos), il peut être lié à des problèmes comme le stress, l'anxiété, ou une condition cardiaque. Consultez un médecin rapidement.</li>
                    <li>Si votre rythme cardiaque est trop bas (moins de 60 BPM), cela peut être un signe de bradycardie, ce qui peut nécessiter un suivi médical pour évaluer la fonction cardiaque.</li>
                    <li>Maintenez une activité physique modérée et évitez les stimulants comme la caféine si votre rythme cardiaque est trop élevé.</li>
                    <li>Suivez les recommandations médicales pour gérer tout problème sous-jacent.</li>
                </ul>
            `;
        }
    }

    // Cas pour la tension artérielle
    else if (type === 'bloodPressure') {
        additionalCard.innerHTML = `
            <h4>Tension Artérielle : ${value.systolic}/${value.diastolic} mmHg</h4>
            <p>Votre tension artérielle est de ${value.systolic}/${value.diastolic} mmHg.`;

        if (value.systolic < 120 && value.diastolic < 80) {
            additionalCard.innerHTML += `
                <p>Votre tension artérielle est dans la plage normale, ce qui signifie que votre cœur et vos vaisseaux sanguins fonctionnent bien.</p>
                <p><strong>Conseils :</strong></p>
                <ul>
                    <li>Maintenez une alimentation faible en sel pour favoriser une pression artérielle stable.</li>
                    <li>Faites de l'exercice régulièrement pour renforcer votre cœur et améliorer la circulation sanguine.</li>
                    <li>Limitez la consommation d'alcool et évitez de fumer, car cela peut augmenter la pression artérielle.</li>
                    <li>Surveillez régulièrement votre tension artérielle pour vous assurer qu'elle reste dans la plage normale.</li>
                </ul>
            `;
        } else if ((value.systolic >= 120 && value.systolic < 130) && value.diastolic < 80) {
            additionalCard.innerHTML += `
                <p>Votre tension artérielle est légèrement élevée. Bien que cela ne soit pas encore considéré comme de l'hypertension, il est conseillé de suivre un mode de vie plus sain pour éviter des problèmes futurs.</p>
                <p><strong>Conseils :</strong></p>
                <ul>
                    <li>Réduisez votre consommation de sel et faites attention à votre alimentation.</li>
                    <li>Pratiquez régulièrement des exercices physiques modérés.</li>
                    <li>Limitez la consommation de caféine et d'alcool.</li>
                    <li>Consultez votre médecin pour discuter de stratégies de prévention de l'hypertension.</li>
                </ul>
            `;
        } else if (value.systolic >= 130 || value.diastolic >= 80) {
            additionalCard.innerHTML += `
                <p>Votre tension artérielle est élevée, ce qui peut être un signe d'hypertension. L'hypertension non traitée peut entraîner des complications graves, comme des maladies cardiaques, des AVC, ou des problèmes rénaux.</p>
                <p><strong>Conseils :</strong></p>
                <ul>
                    <li>Consultez un médecin pour un diagnostic et un traitement approprié.</li>
                    <li>Adoptez une alimentation pauvre en sel et en graisses saturées.</li>
                    <li>Pratiquez une activité physique régulière pour abaisser la pression artérielle.</li>
                    <li>Surveillez régulièrement votre tension artérielle et suivez les recommandations médicales.</li>
                </ul>
            `;
        }
    }

    // Append the new card to the container
    additionalInfoContainer.innerHTML = ''; // Clear previous cards
    additionalInfoContainer.appendChild(additionalCard);
}

