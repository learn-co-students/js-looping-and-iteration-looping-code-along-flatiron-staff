// Code your solutions in this file
// function writeCards(names, event) {
// 	thankYous = []
// 	for (let i=0; i<names.length; i++) {
// 		thankYous << `Thank you, ${names[i]}, for the wonderful ${event} gift!`
// 	}
// 	return thankYous
// }

function printBadges(names) {
	for (let i = 0; i < names.length; i++) {
		console.log(`Welcome ${names[i]}! You are employee #${i+1}.`)
	}
	return names
}

function tailsNeverFails() {
	let flip = Math.random()
	let i = 0
	while (flip >= 0.5) {
		i ++
		flip = Math.round(Math.random())
	}
	return `You got ${i} tails in a row!`

}