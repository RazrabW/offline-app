const STORAGE_NAME = 'save_list';
let storage = localStorage;


let app = new Vue({
	el: '#app',
	data: {
		list: [
			{
				id: 0,
				title: 'Title 1',
				content: 'Content 1'
			},
			{
				id: 1,
				title: 'Title 2',
				content: 'Content 2'
			},
			{
				id: 2,
				title: 'Title 3',
				content: 'Content 3'
			}
		]
	},
	methods: {
		save: (e) => {
			let id = Number(e.target.dataset['id']);
			let storage_data = JSON.parse(storage.getItem(STORAGE_NAME));
			storage_data.push(app.$data.list[id]);
			console.log(storage_data);
			storage.setItem(STORAGE_NAME, JSON.stringify(storage_data));
		}
	}
});