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
     },
     methods: {
       insertComponent(event, originalEvent) {
         console.log('ops');
         console.log(event.dragged)
         console.log(event.related)
         console.log(originalEvent);
         console.log(event);
       },
       insertComponentA(event, originalEvent) {
         console.log('ops  ------ ');
         console.log(event.dragged)
         console.log(event.related)
         console.log(originalEvent);
         console.log(event);
       },
       endListener(event){
         console.log(event);
         console.log('end')
       },
       moveListener(event){
         console.log('move')
         console.log(event.moved.element)
         return true
       }
     }
   }
</script>
<template>
   <div>
     <h2>Component List</h2>
     <draggable :list="availableComponents" group="dynamicComponents"  @change="moveListener">
        <component-placeholder v-for="(component, index) in availableComponents" :key="index" :component="component"></component-placeholder>
     </draggable> 
   </div>
   
</template>