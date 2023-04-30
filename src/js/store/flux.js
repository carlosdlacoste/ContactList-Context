const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [
				{
					name: "Carlos D'Lacoste",
					email: "cdlacostesalazar@gmail.com",
					phone: "+58 555555555",
					address: "El Marques"
				},
				{
					name: "Mariana Arrieche",
					email: "marianita@gmail.com",
					phone: "+58 444444444",
					address: "Los Naranjos"
				},
				{
					name: "Alexander De Matteo",
					email: "alexdematteo@gmail.com",
					phone: "+58 777777777",
					address: "Los Palos Grandes"
				}
			]
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			newContact: newItem => {
				// console.log(newItem);
				const auxStore = getStore();
				setStore({ contacts: [...auxStore.contacts, newItem] });
			}
		}
	};
};

export default getState;
