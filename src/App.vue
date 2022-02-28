<template>
  <main class="bg-gray-200 min-h-screen">
		<NavBar class="sticky top-0 z-30 w-full"/>
		<Loading v-if= 'users == undefined' />
		<UserCard />
  </main>
</template>

<script>
	import { inject, useTransitionState } from "vue";
	import UserCard from './UserCard.vue'
	import NavBar from './NavBar.vue';
	import Loading from './Loading.vue'

// dotenv
	const APIurl = 'https://jsonplaceholder.typicode.com/users'
	
	export default {
		setup() { 
			return {
				users: [],
				selected:[],
				
			};
		},
			created(){
			const axios = inject("$axios");
				axios.get(APIurl)
				.then(data => {
					this.users = data.data;
					// console.log(this.users)
					// console.log(data.data)
				})
				.catch(err => console.error(err));
		},
		components: {
			UserCard,
			NavBar,
			Loading
		}
	}
</script>