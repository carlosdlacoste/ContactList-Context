const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [
				{
					nombre: "Carlos",
					apellido: "D'Lacoste"
				},
				{
					nombre: "Mariana",
					apellido: "Arrieche"
				},
				{
					nombre: "Alexander",
					apellido: "De Matteo"
				}
			]
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			newContact: newItem => {
				console.log(newItem);
			}
		}
	};
};

export default getState;
