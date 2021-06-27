<script>
   export default {
     props: {
       label: {
         type: String,
         required: true
       }
     }
   }
</script>
<template>
   <v-text-field type="number" :label="label"></v-text-field>
</template>