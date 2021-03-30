export default {
    methods: {
        async fetchInfo(demande) {
			try {
				const response = await this.$http.get(`${demande}.json`);
				let data = response.data;
				this.[demande] = data
			} catch (error) {
				console.error(error);
			}
		},
    }
}