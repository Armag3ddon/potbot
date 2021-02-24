/* Get content from the forum's xml api
See http://enkore.github.io/mdexml/ for the xml api documentation */

const axios = require('axios').default;

const self = module.exports = {
	baseURL: 'https://forum.mods.de/bb/xml/',
	async getThread(tid, pid) {
		if (typeof tid === 'string') {
			tid = parseInt(tid);
			if (isNaN(tid)) {
				throw 'TID ist keine gültige Zahl!';
			}
		}
		if (typeof pid === 'string') {
			pid = parseInt(pid);
			if (isNaN(pid)) {
				throw 'PID ist keine gültige Zahl!';
			}
		}
		let url = this.baseURL + 'thread.php?';
		url += 'TID=' + tid;
		url += '&PID=' + pid;
		return self.get(url);
	},
	async get(url) {
		return (await axios.get(url, { timeout: 2000, responseType: 'text' }).catch(function(err) {
			console.log(err);
			throw 'Fehler beim Abruf des Forums. :(';
		})).data;
	},
};