const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			openSingleView: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
			}
		}
	};
};

export default getState;
