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
               v-bind="component.props"></component>
         </v-form>
      </v-card-text>
   </v-card>
</template>
<style scoped>
</style>