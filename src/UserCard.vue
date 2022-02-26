<template>
 		<div v-if= "users != [] || undefined" class='grid pb-8 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-6 py-12'>
        <div v-for= 'user in users' :key= 'user.id' class=' p-4 grid rounded-2xl shadow-md md:pl-2 bg-white'>
          <!-- Image and user name -->
          <div>
            <img class='inline-grid w-14 h-14 rounded-full mx-3 opacity-60' src='../public/icons/userIcon.svg' alt='Image' />
            <h3 class=' inline-grid mt-5 mb-2 justify-center text-template-blue text-md text-center'>
              {{user.username}}
            </h3>      
          </div>   

            <hr class='border-b mt-3 border-template-white' />

            <!-- User Data -->
            <ul class="text-left mt-3 mx-3">
              <li class='mb-1 text-template-grey font-light text-sm'>
                <strong class='text-gray-600'>Name:</strong> {{user.name}}
              </li>
              <li class='mb-1 text-template-grey font-light text-sm'>
                <strong class='text-gray-600'>Company:</strong> {{user.company.name}}
              </li>
              <li class='mb-1 text-template-grey font-light text-sm'>
                <strong class='text-gray-600'>Email:</strong> {{user.email}}
              </li>
              <li class='mb-1 text-template-grey font-light text-sm'>
                <strong class='text-gray-600'> Phone: </strong> {{user.phone}}
              </li>
              <li class='mb-1 text-template-grey font-light text-sm'>
                <strong class='text-gray-600'>City:</strong>	 {{user.address.city}}
              </li>
            </ul>
        </div>
      </div >
</template>

<script>
	import { inject, useTransitionState } from "vue";
	const APIurl = 'https://jsonplaceholder.typicode.com/users'
	
	export default {
    name: 'UserCard',
		created() {
			const axios = inject("$axios");
				axios.get(APIurl)
				.then(data => {
					this.users = data.data;
					console.log(this.users)
					console.log(data.data)
				})
				.catch(err => console.error(err));
		},
		data() { 
			return {
				users: undefined,
			};
		},
		methods: {
      expand() {

      }
		}
	}
</script>