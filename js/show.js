var history = new Vue ({
  el: '#history',
  data: {
    states: [
      { text: 'Wessex England',
      subtitle: `The Kingdom of Wessex was founded by Alfred the Great
      by the accomplishment of hegemony over the other English Kingdoms.
      Wessex evolved into the kingdom ruled by Edward the Confessor and
      conquered by William I in 1066.`},

      { text: 'Norman England', subtitle: `(1066 - 1714) Founded by William
       the Conqueror after the Norman Conquest`},

      { text: 'Great Britain',  subtitle: `(1714 - 1800) Created by Act of
      Parliament by Unification of England and Scotland`},

      { text: 'United Kingdom', subtitle: `1800 - Present Created by Act
      of Parliament by Unification of Great Britain and Ireland`},

    ]
  }
});
