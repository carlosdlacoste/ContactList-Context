const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [
				{
					id: 0,
					name: "Carlos D'Lacoste",
					email: "cdlacostesalazar@gmail.com",
					phone: "+58 555555555",
					address: "El Marques"
				},
				{
					id: 1,
					name: "Mariana Arrieche",
					email: "marianita@gmail.com",
					phone: "+58 444444444",
					address: "Los Naranjos"
				},
				{
					id: 2,
					name: "Alexander De Matteo",
					email: "alexdematteo@gmail.com",
					phone: "+58 777777777",
					address: "Los Palos Grandes"
				}
			],

			contId: 2
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			newContact: newItem => {
				// console.log(newItem)
				const auxStore = getStore();
				setStore({ contId: auxStore.contId + 1 });
				newItem.id = auxStore.contId;
				setStore({ contacts: [...auxStore.contacts, newItem] });
			},

			removeContact: targetContact => {
				const store = getStore();
				setStore({ contacts: store.contacts.filter(contact => contact.id != targetContact.id) });
			}
		}
	};
};

export default getState;
