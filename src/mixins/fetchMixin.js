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
		checkForBrowser(){
			//const isBrave = window.navigator.brave != undefined; 
			const inBrowser = typeof window !== 'undefined';
		const UA = inBrowser && window.navigator.userAgent.toLowerCase();
		//const isIE =
			UA && /; msie|trident/i.test(UA) && !/ucbrowser/i.test(UA).test(UA);
		//const isEdge = UA && /edg/i.test(UA);
		//const isAndroid = UA && UA.indexOf('android') > 0;
		//const isIOS = UA && /iphone|ipad|ipod|ios/i.test(UA);
		//const isChrome =
		//UA &&
		///chrome|crios/i.test(UA) &&
		//!/opr|opera|chromium|edg|ucbrowser|googlebot/i.test(UA);
		//const isGoogleBot = UA && /googlebot/i.test(UA);
		//const isChromium = UA && /chromium/i.test(UA);
		//const isUcBrowser = UA && /ucbrowser/i.test(UA);
		//const isSafari =
		//UA &&
		///safari/i.test(UA) &&
		//!/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i.test(UA);
		const isFirefox = UA && /firefox|fxios/i.test(UA) && !/seamonkey/i.test(UA);
		//const isOpera = UA && /opr|opera/i.test(UA);
		//const isMobile =
		///\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
		///\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
		//const isSamsung = UA && /samsungbrowser/i.test(UA);
		//const isIPad = UA && /ipad/.test(UA);
		//const isIPhone = UA && /iphone/.test(UA);
		//const isIPod = UA && /ipod/.test(UA);
		
		if (isFirefox === true) {
			this.$store.commit('changeContainerStyle', true);
		}else {
			this.$store.commit('changeContainerStyle', false);
		}
		},
			
        
		
    }
}