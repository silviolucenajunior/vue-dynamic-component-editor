<script>
   import draggable from 'vuedraggable'
   import ComponentPlaceholder from './ComponentPlaceholder.vue'
   export default {
     components: {
       draggable,
       ComponentPlaceholder
     },
     props: {
       availableComponents: {
         type: Array,
         default: function() {
           return [];
         },
       }
     }
   }
</script>
<template>
   <div>
     <h2>Component List</h2>
     <draggable group="dynamicComponents">
        <component-placeholder v-for="(component, index) in availableComponents" :key="index" :component="component"></component-placeholder>
     </draggable> 
   </div>
   
</template>