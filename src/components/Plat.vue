<template>
<q-card
  class="card">
  <q-img
    :src="plat.image ? plat.image : require('../assets/image-placeholder.jpg')"
    basic
    contain
  >
    <div class="absolute-bottom text-h6">
      {{ plat.nom }}
    </div>
  </q-img>

  <q-card-section>
    <q-rating
      readonly
      :model-value="plat.note"
      size="2em"
      color="orange"
      class="q-mt-sm"
    />
  </q-card-section>

  <q-card-section class="description">
    <div v-if="plat.description">{{ plat.description }}</div>
    <i v-else>Aucune descripion fournie.</i>
  </q-card-section>

  <q-card-actions
    class="absolute-bottom"
    align="right">
    <q-btn unelevated rounded
      @click="afficherFormPlat = true"
      icon="edit"
      color="blue"
      flat>Modifier</q-btn>
    <q-btn unelevated rounded @click.stop="ConfirmsupprimerPlat(plat.id)"
      icon="delete"
      color="red"
      flat>Supprimer</q-btn>
  </q-card-actions>

  <q-dialog
    v-model="afficherFormPlat">
    <form-plat
      action="modifier"
      :platAModifier="plat"
      @fermer="afficherFormPlat = false"/>
  </q-dialog>
</q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['plat'],
  data () {
    return {
      afficherFormPlat: false
    }
  },
  components: {
    'form-plat': require('components/FormPlat.vue').default
  },
  methods: {
    ...mapActions('plats', ['supprimerPlat']),
    ConfirmsupprimerPlat (id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Voulez-vous vraiment supprimer ce plat ?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.supprimerPlat(id)
      })
    }
  }
}
</script>

<style>
body {
  font-family: "Arial", sans-serif;
  background-color: #f2f2f2;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.card {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card img {
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.text-h6 {
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}

.description {
  font-size: 1rem;
  margin: 0 1rem 3rem 1rem;
  line-height: 1.5;
}

.card p:last-of-type {
  margin-bottom: 1rem;
}

.btn {
  margin: 1rem 2rem;
  align-content: center;
  width: 80%;
}

.card .q-rating__icon {
  opacity: 0.3;
}
.card .q-rating__icon--active {
  opacity: 1;
}
</style>
