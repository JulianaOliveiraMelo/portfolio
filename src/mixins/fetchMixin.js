export default {
    methods: {
        async fetchInfo(demande) {
			try {
				const response = await this.$http.get(`${demande}.json`);
				let data = response.data;
				this.[demande] = data
			} catch (error) {
				 throw new Error(error);
			}
		},
        async fetchContactInfo(demande) {
			try {
				const response = await this.$http.get(`${demande}.json`);
				let data = response.data;
				data.shift();
				this.[demande] = data
			} catch (error) {
				 throw new Error(error);
			}
		},
        async fetchInfoReversed(demande) {
			try {
				const response = await this.$http.get(`${demande}.json`);
				let data = response.data;
				this.[demande] = data.reverse()
			} catch (error) {
				 throw new Error(error);
			}
		},
        async fetchInfoFilter(searchVariable, search) {
			try {
				const response = await this.$http.get(`${searchVariable}.json`);
				let data = response.data;
				let filter =  this.filterTags(data, search);
				this.[searchVariable] = filter
			} catch (error) {
				 throw new Error(error);
			}
		},
		filterTags(value, demande){
			let newFilter = value;
			if (demande === 'voir tout') {
				return newFilter;
			} else if (demande === '+ ancien') {
				let array = newFilter;
				return array.sort((a, b) => a.id - b.id);
			} else if (demande === '+ recent') {
				let array = newFilter;
				return array.sort((a, b) => b.id - a.id);
			} else {
				return newFilter.filter(element => {
					for (let i in element.tag) {
						if (element.tag[i].name == demande) return true;
					}
				});
			}
			
		}
    }
}