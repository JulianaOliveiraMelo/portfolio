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
        
		
    }
}