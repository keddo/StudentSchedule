<template>
       <div class="team">
            <h1 class="subheading grey--text">Team</h1>
            <v-container class="my-5">
               <v-layout row wrap>
                 <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
                   <v-card class="text-xs-center ma-3" flat>
                     <v-responsive class="pt-4">
                       <v-avatar size="100" class="grey lighten-2">
                         <img :src="person.avatar">
                       </v-avatar>
                     </v-responsive>
                     <v-card-text>
                       <div class="subheading">
                         {{person.name}}
                       </div>
                       <div class="grey--text">{{ person.role }}</div>
                     </v-card-text>
                     <v-card-actions>
                         <v-btn flat color="grey">
                           <v-icon small left>message</v-icon>
                         </v-btn>
                         <span>Message</span>
                     </v-card-actions>
                   </v-card>
                 </v-flex>
               </v-layout>
            </v-container>
       </div>
</template>

<script>
export default {
  data(){
      return{
          team: [
            {name:'The Net Ninja', role:'Web developer', avatar:'/img/avatar-1.png'},
            {name:'Ryu', role:'Graphic designer', avatar:'/img/avatar-2.png'},
            {name:'Chun Li', role:'Web developer', avatar:'/img/avatar-3.png'},
            {name:'Gouken', role:'Socail Media maverick', avatar:'/img/avatar-4.png'},
            {name:'Yoshi', role:'Sales guru', avatar:'/img/avatar-5.png'},
          ]
      }
  }
}
</script>

<style>

</style>
