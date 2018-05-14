const parseDateISOString = (s) => {
  let ds = s.split(/\D/).map(s => parseInt(s));
  ds[1] = ds[1] - 1; // adjust month
  return new Date(...ds);
}
const parseISOLocal = (s) => {
  let b = s.split(/\D/);
  return new Date(b[0], b[1]-1, b[2], b[3], b[4], b[5]);
}

export const calculateLangs = (state) => {
	const final = Object.keys(state) ? state : {};
	return (data, param) => {
		data.forEach((obj) => {
			let pname = obj[param] || 'other'
			if(pname && final[pname]) { final[pname]++ }
			else { final[pname] = 1 }
		})
		return final
	}
}

export const sortByAlphabet = (a, b, param) => {
	return a[param] < b[param] ? 
				  -1 :
					a[param] > b[param] ? 
					 1 :
					 0;
}

export const sortByDate = (a, b, param) => {
	return new Date(a[param]) - new Date(b[param])
}

export const sortByDigits = (a, b, param) => {
	return a[param] - b[param]
}

export const compose = (...funcs) => (data, ...options) => funcs.reduce((data, fn) => fn(data, ...options), data)