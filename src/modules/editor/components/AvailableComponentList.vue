<script>
   import ComponentPlaceholder from './ComponentPlaceholder.vue'
   import ComponentService from '../services/ComponentService';

   export default {
     components: {
       ComponentPlaceholder
     },
     data(){
       return {
         availableComponents: []
       }
     },
     mounted(){
       this.availableComponents = ComponentService.getAvailableComponentList().components;
     },
     methods: {
       insertComponent(component) {
         this.$emit('componentInserted', component)
       }
     }
   }
</script>
<template>
   <v-list>
     <v-list-item v-for="(component, index) in availableComponents" :key="index">
       <v-list-item-content>
          <component-placeholder :component="component"></component-placeholder>
       </v-list-item-content>
       <v-list-item-action>
         <v-btn rounded @click="insertComponent(component)">
            <v-icon left>mdi-plus-circle</v-icon>
            Insert
         </v-btn>
       </v-list-item-action>
     </v-list-item>
   </v-list>
</template>