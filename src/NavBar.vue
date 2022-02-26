<template>
  <div class="flex h-22 bg-blue-500 justify-center shadow-lg">
    <div class="flex-grow flex gap-4 my-6">
      <input 
        v-model= "searchQuery"
        class= 'mx-auto md:max-w-[50%] max-w-[80%] focus:outline-none justify-center text-center text-field flex-1 px-2 py-3 rounded-md text-black' 
        type='textfield'
        placeholder="Search"
      />
    </div>
  </div>
 		
</template>

<script>	
	export default {
    name: 'Navbar',
}
</script>

