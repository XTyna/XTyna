      Vue.component('product', {
          data() {
              return {
                  eng: '',
                  ukr: '',
                  words: [],
                  InputEmpty: true
              }
          },
          template: `
            <div id="product">
              <div class="addNewWord" >
                <input type="text" placeholder="English word" name="fname" v-model="eng" /><br>
                <input type="text" placeholder="Ukrainen word" name="" v-model="ukr" />
                <div style="color: blue" v-if="ukr.match(/[а-яієїґ\']+/g )">Please use ukrainian letters</div>
                <input id="addBut" v-on:click="addWord()"
                                   type="button" 
                                   value="Add Word"
                                   :disabled="isInputEmpty()"/>


                <div class="wordsInWocabulery">
                  <table>
                      <tr>
                          <th>English Word</th>
                          <th>Translate</th>
                          <th></th>
                      </tr>
                      <tr v-for="word in words">
                        <p v-if="!words.length">There are no words yet.</p>
                          <td>{{ word.eng.charAt(0).toUpperCase() 
                          + word.eng.slice(1) }}</td>
                          <td>{{ word.ukr.charAt(0).toUpperCase() + word.ukr.slice(1) }}</td>
                          <td><button v-on:click="deleteWord()">x</button></td>
                      </tr>
                  </table>
                </div>
                <div class="mother-word" 
                v-if="motherWordEntered()"
                >"You enter mother vord"</div>
              </div>
              </div>
            `,

          methods: {
              addWord: function newWord() {
                  this.words.push({
                      eng: this.eng,
                      ukr: this.ukr
                  });
                  this.eng = ' ';
                  this.ukr = ' ';
                  this.$emit('add-to-wocabulery')
              },
              deleteWord: function(index) {
                  this.words.splice(index, 1);
              },
              isInputEmpty: function() {
                  return this.eng.length === 0 || this.ukr.length === 0;
              },

              motherWordEntered: function() {
                return this.eng === 'mother' || this.ukr === 'mother';
              }
          }
      });



      var app = new Vue({
          el: '#app'
      })