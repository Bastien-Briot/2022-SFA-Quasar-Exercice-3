<template>
  <!--
  Exercice 3 - Vuex & Formulaires

  1) Créer un magasin, module, Vuex avec le namespace "plats" pour les plats
     dans src/store/ et y ajouter le tableau des plats.

  2) Créer un getter pour récupérer les plats
     et afficher ces derniers sur la page Exercice.vue à l'aide du getter

  3) Ajouter la possibilité de supprimer un élément (clic sur bouton supprimer)
     en utilisant des actions et des mutations.
     Afficher une dialog de confirmation avant de supprimer.

  4) Ajouter une validation au formulaire src/components/FormPlat.vue
       - nom: obligatoire avec un maximum de 20 caractères.
       - description: maximum de 155 caractères.
       - La validation doit être déclenchée lorsque l'on clique sur Sauvegarder

  5) Ajouter la possibilité d'ajouter un élément
     indice: utiliser l'attribut "action" pour différencier l'ajout de la modification

  6) Ajouter la possibilité de modifier un élément

  7) Si aucune description n'est fournie pour un plat,
     afficher le texte "Aucune description fournie" en italique

  8) Si aucune image n'est fournie, utiliser l'image statics/image-placeholder.png

  -->
  <q-page padding>

    <div class="cards">
      <bouton-ajouter
        @click="afficherFormPlat = true" />
      <plat
        v-for="plat in plats"
        :key="plat.id"
        :plat="plat" />
    </div>

    <q-dialog
      v-model="afficherFormPlat">
      <form-plat action="ajouter" />
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      plats: [
        {
          id: 1,
          image: 'https://st.depositphotos.com/1026029/1625/i/600/depositphotos_16253263-stock-photo-italian-pizza-with-mushrooms-and.jpg',
          nom: 'Pizza',
          description: 'La pizza est un plat savoureux d\'origine italienne, consistant en une base généralement ronde et aplatie depâte levée à base de blé.',
          note: 5
        },
        {
          id: 2,
          image: 'https://grindburgerbar.com/wp-content/uploads/2021/10/Webp.net-resizeimage-74.jpg',
          nom: 'Burger',
          description: 'Un hamburger est un sandwich composé d\'une ou plusieurs tranches de viande hachée, généralement du bœuf, placées dans un petit pain.',
          note: 4
        },
        {
          id: 3,
          image: 'https://cnz.to/vf/wp-content/uploads/2009/02/brussels_sprouts.jpg',
          nom: 'Petits choux',
          description: 'Le chou de Bruxelles est une variété de chou, plante herbacée de la famille des Brassicaceae. C’est vraiment pas bon...',
          note: 4
        },
        {
          id: 4,
          image: 'https://i.imgur.com/1cX2to7.jpeg',
          nom: 'Lasagne',
          description: 'Les lasagnes sont un plat italien composé de couches de pâtes, de sauce bolognaise, de béchamel et de fromage, cuites au four.',
          note: 5
        }
      ],
      afficherFormPlat: false
    }
  },
  components: {
    plat: require('components/Plat.vue').default,
    'bouton-ajouter': require('components/BoutonAjouter.vue').default,
    'form-plat': require('components/FormPlat.vue').default
  }
}
</script>

<style>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  max-width: 1500px;
  width: 100%;
  padding: 1rem;
}
</style>
