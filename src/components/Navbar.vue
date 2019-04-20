<template>
    <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" color="green" top>
        <span>Awesome you added a new project!</span>
        <v-btn flat color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-toolbar flat app color="blue darken-4">
    <!-- <v-toolbar-side-icon @click="drawer=!drawer" color="white"></v-toolbar-side-icon> -->
      <v-toolbar-title class="text-uppercase white--text">
          <span class="font-weight-light pr-2">Class</span>
          <span>Schedule</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <!-- drop down menu -->
        <v-menu offset-y>
            <v-btn flat slot="activator" color="white">
                <v-icon>expand_more</v-icon>
                <span>Department</span>
            </v-btn>
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route"> 
                 <v-list-tile-title>
                     {{link.text}}
                 </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
      <v-btn flat color="white">
          <span>Sign Out</span>
          <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer 
    app 
    v-model="drawer" 
    :mini-variant.sync="mini"
    hide-overlay
    stateless
    >
    <v-toolbar 
    flat
    class="transparent"
    >
    <v-list class="pa-0">
       <v-list-tile avatar> 
          <v-list-tile-avatar>
              <img src="/img/avatar-1.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
              <v-list-tile-tile>
                  Mr. Kedir A
              </v-list-tile-tile>
          </v-list-tile-content>
          <v-list-tile-action>
              <v-btn icon @click.stop="mini=!mini">
                  <v-icon>chevron_left</v-icon>
              </v-btn>
          </v-list-tile-action>
       </v-list-tile>
    </v-list>
    </v-toolbar>
    <v-list class="pt-0" dense>
        <v-divider></v-divider>
        
            <Popup @projectAdded="snackbar = true"/>
        <v-list-tile v-for="side in side_bar" :key="side.text" router :to="side.route">
                <v-list-tile-action>
          <v-icon>{{ side.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ side.text }}</v-list-tile-title>
        </v-list-tile-content>
        </v-list-tile>
    </v-list>
     <!-- <v-layout column align-center>
        <v-flex class="mt-5">
         <v-avatar size="100">
             <img src="/img/avatar-1.png">
         </v-avatar>
         <div class="white--text subheading mt-1 text-md-center">
            Mr. Kedir A.
            <h2 class="">Head of Department</h2>
         </div>
         
        </v-flex>
        <v-flex class="mt-4 mb-3">
            <Popup @projectAdded="snackbar = true"/>
        </v-flex>
     </v-layout> -->
     <v-list>
         <v-list-tile v-for="side in side_bar" :key="side.text" router :to="side.route">
             <v-list-tile-action>
                 <v-icon class="white--text">{{side.icon}}</v-icon>
             </v-list-tile-action>
           <v-list-tile-content>
               <v-list-tile-title class="white--text">{{side.text}}</v-list-tile-title>
           </v-list-tile-content>
         </v-list-tile>
     </v-list>
    </v-navigation-drawer>
 </nav>
</template>

<script>
import Popup from './Popup';
export default {
    components:{
       Popup
    },
      data(){
          return {
              drawer: true,
      links:[
          {icon:'dashboard', text:'Computer Science', route:'/'},
          {icon:'folder', text:'Software Engineering', route:'/projects'},
          {icon:'person', text:'Informatin Technology', route:'/team'}
      ],
      side_bar:[
          {icon:'dashboard', text:'Dashboard', route:'/'},
          {icon:'folder', text:'Courses', route:'/projects'},
          {icon:'person', text:'Team', route:'/team'}
      ],
      snackbar: false,
      mini: true,
      right: null
          }
      },
      
}
</script>

<style>

</style>
