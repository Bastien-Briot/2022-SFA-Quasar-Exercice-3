<template>
<q-card class="form-card">
  <q-card-section>
    <div class="text-h6 heading">{{ action }} Plat</div>
  </q-card-section>

  <q-card-section>

    <div class="row q-mb-md">
      <q-input
        filled
        v-model="plat.nom"
        label="Nom (Burger)"
        class="col"
        ref="nom"
        :rules="[
          val => !!val || 'Le nom est obligatoire',
          val => val.length < 21 || 'Maximum 20 caractères',
        ]"
      />
    </div>

    <div class="row q-mb-md">
      <q-input
        filled
        v-model="plat.description"
        label="Description"
        type="textarea"
        class="col"
        ref="description"
        :rules="[val => val.length < 156 || 'Maximum 155 caractères']"/>
    </div>

    <div class="row q-mb-md">
      <q-input
        filled
        v-model="plat.image"
        label="URL de l'image"
        class="col" />
      <q-img
        :src="plat.image ? plat.image : require('../assets/image-placeholder.jpg')"
        class="q-ml-sm"
        contain />
    </div>

    <div class="q-mb-md">
      <div class="row">
        <p class="q-mb-none">Note:</p>
      </div>
      <div class="row">
        <q-rating
          v-model="plat.note"
          size="2em"
          color="orange" />
      </div>
    </div>

  </q-card-section>

  <q-card-actions align="right">
    <q-btn unelevated rounded
      label="Annuler"
      color="grey"
      v-close-popup />
    <q-btn unelevated rounded
      label="Sauver"
      color="primary"
      @click="envoyerForm"/>
  </q-card-actions>
</q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['action', 'platAModifier'],
  data () {
    return {
      plat: {
        name: '',
        description: '',
        note: 1,
        image: ''
      }
    }
  },
  methods: {
    ...mapActions('plats', ['ajouterPlat', 'modifierPlat']),
    envoyerForm () {
      const isValidNom = this.$refs.nom.validate()
      const isValidDescription = this.$refs.description.validate()

      if (isValidNom && isValidDescription) {
        this.actionPlat(this.plat)
        this.$emit('fermer')
      } else {
        this.$q.notify({
          color: 'negative',
          message: 'Il y a des erreurs dans le formulaire. Veuillez les corriger avant de sauvegarder.',
          icon: 'warning'
        })
      }
    },
    actionPlat (plat) {
      if (this.action === 'modifier') {
        this.modifierPlat(plat)
      } else {
        this.ajouterPlat(plat)
      }
    }
  },
  mounted () {
    if (this.action === 'modifier') {
      this.plat = Object.assign({}, this.platAModifier)
    }
  }
}
</script>

<style>
.form-card {
  min-width: 400px;
  border-radius: 20px;
}
.q-dialog__inner > div {
  border-radius: 15px;
}
.form-card .heading {
  text-transform: capitalize;
}
.form-card .q-card-section {
  width: 100%;
}
.thumbnail {
  max-width: 50px;
  max-height: 50px;
}
.form-card .q-img {
  height: 56px;
  width: 56px;
  border-radius: 15px;
}
.form-card .q-img__image {
  background-size: cover !important;
}
.form-card .q-rating__icon {
  opacity: 0.2;
}
.form-card .q-rating__icon--active {
  opacity: 1;
}

.card-clickable:hover {
  background: #bdbdbd!important;
}

</style>
