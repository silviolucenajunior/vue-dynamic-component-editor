<script>
import { VTextField } from 'vuetify/lib'

   export default {
      components: {
         VTextField
      },
      props: {
         components: {
            type: Array,
            required: true
         }
      },
      methods: {
         componentSelected(component){
            console.log("Inside component selected");
            console.log(component)
            this.$emit('componentSelected', component);
         }
      }
      
   }
</script>
<template>
   <v-card max-width="1024" width="1024">
      <v-card-text>
         <v-form>
            <component 
               v-for="(component, index) in components" 
               :key="index" 
               :is="component.component" 
               @click="componentSelected(component)"
               v-bind="component.props"></component>
         </v-form>
      </v-card-text>
   </v-card>
</template>
<style scoped>
</style>