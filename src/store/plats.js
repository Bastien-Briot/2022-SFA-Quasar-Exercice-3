// State : données du magasin
const state = {
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
  ]
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {

}
/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {

}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {
  plats: (state) => {
    return state.plats
  }

}

/*
Exporte les constantes, variables du fichier
On pourra ainsi les récupérer, les importer dans un autre fichier JS.

namespace: true, ajoute un namespace l'objet retourné.
 */
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
