<script>
   export default {
      props: {
         value: {
            type: Object,
            required: true
         }
      }
   }
</script>
<template>
   <v-card>
      <v-card-title>
         Component Properties
      </v-card-title>
      <v-card-text>
         <v-row v-for="(property, index) in this.value.props" :key="index">
            <v-col>
               <v-text-field v-model="property.value" :label="property.label" value=""></v-text-field>
            </v-col>
         </v-row>
      </v-card-text>
      <v-card-actions>
         <v-btn tile @click="$emit('updateComponentProperties')">
            <v-icon left>
               mdi-content-save
            </v-icon>
            Update
         </v-btn>
      </v-card-actions>
   </v-card>
</template>