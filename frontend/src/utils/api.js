import axios from 'axios';
let baseURL = {baseURL: window.location.origin.replace(/:[0-9]+$/,"") + ":8000"};



//ISLAND show on home page

export async function createIsland(formData, user_id) {
    const config = {
			headers: {
				Authorization: localStorage.getItem('token'),
			},
			...baseURL,
		};
    const {data} = await axios.post(`island/create/${user_id}`, formData, config);
    return data;
}

//HOME villager icon show

// Api data

	// APOD searcher function
	// function getImages() {
	// 	/* Build a URL from the searchOptions object *
	// 	const url =
	// 		'https://api.nasa.gov/planetary/apod?api_key=9lSTCZNq5GoBuU3lchGbDwvD6dGM7q1hwhF4tP5V&start_date=2022-12-01&end_date=2022-12-31';
	// 	fetch(url)
	// 		.then((response) => response.json())
	// 		.then((response) => {
	// 			setMonthImages(response);
	// 			setMedia_type(response);
	// 		})
	// 		.catch(console.error);
	// }


//USER CRUD
// sign up function
export async function signUp(formData) {
	const { data } = await axios.post('user/signup', formData, baseURL);
	return data;
}

//Log in to User Account
export async function loginToAccount(formData) {
	const { data } = await axios.post('user/login', formData, baseURL);
	return data;
}


// update user account
export async function updateUser(userId, formData) {
	const config = {
		headers: {
			Authorization: localStorage.getItem('token'),
		}, ...baseURL
	};
	const { data } = await axios.put(`user/${userId}`, formData, config);
	return data;
}

// delete user account
export async function deleteUser(userId) {
	const config = {
		headers: {
			Authorization: localStorage.getItem('token'),
		}, ...baseURL
	};
	await axios.delete(`user/${userId}`, config);
}

//getUser
export async function getUser(userid) {
	const { data } = await axios.get(`user/${userid}`, baseURL);
	return data;
}


//villager to index setup

export function villagerIcons(name) {
    const names = 
    ["Cyrano", "Antonio", "Pango", "Anabelle", "Snooty", "Annalisa", "Olaf", "Teddy", "Pinky", "Curt", "Chow", "Nate", "Groucho", "Tutu", "Ursala", "Grizzly", "Paula", "Ike", "Charlise", "Beardo", "Klaus", "Megan", "Jay", "Robin", "Anchovy", "Twiggy", "Jitters", "Piper", "Admiral", "Midge", "Jacob", "Lucha", "Jacques", "Peck", "Sparro", "Angus", "Rodeo", "Stu", "T-Bone", "Coach", "Vic", "Bob", "Mitzi", "Rosie", "Olivia", "Kiki", "Tangy", "Punchy", "Purrl", "Moe", "Kabuki", "Kid Cat", "Monique", "Tabby", "Stinky", "Kitty", "Tom", "Merry", "Felicity", "Lolly", "Ankha", "Rudy", "Katt", "Raymond", "Bluebear", "Maple", "Poncho", "Pudge", "Kody", "Stitches", "Vladimir", "Murphy", "Olive", "Cheri", "June", "Pekoe", "Chester", "Barold", "Tammy", "Judy", "Goose", "Benedict", "Egbert", "Ava", "Becky", "Plucky", "Knox", "Broffina", "Ken", "Patty", "Tipper", "Norma", "Naomi", "Alfonso", "Alli", "Boots", "Del", "Sly", "Gayle", "Drago", "Fauna", "Bam", "Zell", "Bruce", "Deirdre", "Lopez", "Fuchsia", "Beau", "Diana", "Erik", "Goldie", "Butch", "Lucky", "Biskit", "Bones", "Portia", "Walker", "Daisy", "Cookie", "Maddie", "Bea", "Mac", "Marcel", "Benjamin", "Cherry", "Shep", "Bill", "Joey", "Pate", "Maelle", "Deena", "Pompom", "Mallary", "Freckles", "Derwin", "Drake", "Scoot", "Weber", "Miranda", "Ketchup", "Gloria", "Molly", "Quillson", "Opal", "Dizzy", "Big Top", "Eloise", "Margie", "Paolo", "Axel", "Ellie", "Tucker", "Tia", "Cyd", "Lily", "Ribbot", "Frobert", "Camofrog", "Drift", "Wart Jr.", "Puddles", "Jeremiah", "Tad", "Cousteau", "Huck", "Prince", "Jambette", "Raddle", "Gigi", "Croque", "Diva", "Henry", "Chevre", "Nan", "Billy", "Gruff", "Velma", "Kidd", "Pashmina", "Sherb", "Cesar", "Peewee", "Boone", "Louie", "Boyd", "Violet", "Al", "Rocket", "Hans", "Hamlet", "Apple", "Graham", "Rodney", "Soleil", "Clay", "Flurry", "Hamphrey", "Rocco", "Bubbles", "Bertha", "Biff", "Bitty", "Harry", "Hippeux", "Buck", "Victoria", "Savannah", "Elmer", "Roscoe", "Winnie", "Ed", "Cleo", "Peaches", "Annalise", "Clyde", "Colton", "Papi", "Julian", "Reneigh", "Yuka", "Alice", "Melba", "Sydney", "Gonzo", "Ozzie", "Canberra", "Lyman", "Eugene", "Kitt", "Mathilda", "Carrie", "Astrid", "Sylvia", "Walt", "Rooney", "Marcie", "Bud", "Elvis", "Rex", "Leopold", "Mott", "Rory", "Lionel", "Nana", "Simon", "Tammi", "Monty", "Elise", "Flip", "Shari", "Deli", "Dora", "Limberg", "Bella", "Bree", "Samson", "Rod", "Candi", "Rizzo", "Anicotti", "Broccolo", "Moose", "Bettina", "Greta", "Penelope", "Chadder", "Octavian", "Marina", "Zucker", "Queenie", "Gladys", "Sandy", "Sprocket", "Julia", "Cranston", "Phil", "Blanche", "Flora", "Phoebe", "Apollo", "Amelia", "Pierce", "Buzz", "Avery", "Frank", "Sterling", "Keaton", "Celia", "Aurora", "Roald", "Cube", "Hopper", "Friga", "Gwen", "Puck", "Wade", "Boomer", "Iggly", "Tex", "Flo", "Sprinkle", "Curly", "Truffles", "Rasher", "Hugh", "Lucy", "Spork", "Cobb", "Boris", "Maggie", "Peggy", "Gala", "Chops", "Kevin", "Pancetti", "Agnes", "Bunnie", "Dotty", "Coco", "Snake", "Gaston", "Gabi", "Pippy", "Tiffany", "Genji", "Ruby", "Doc", "Claude", "Francine", "Chrissy", "Hopkins", "O'Hare", "Carmen", "Bonbon", "Cole", "Mira", "Tank", "Rhonda", "Spike", "Hornsby", "Merengue", "Renée", "Vesta", "Baabara", "Eunice", "Stella", "Cashmere", "Willow", "Curlos", "Wendy", "Timbra", "Frita", "Muffy", "Pietro", "Dom", "Peanut", "Blaire", "Filbert", "Pecan", "Nibbles", "Agent S", "Caroline", "Sally", "Static", "Mint", "Ricky", "Cally", "Tasha", "Sylvana", "Poppy", "Sheldon", "Marshal", "Hazel", "Rolf", "Rowan", "Tybalt", "Bangle", "Leonardo", "Claudia", "Bianca", "Chief", "Lobo", "Wolfgang", "Whitney", "Dobie", "Freya", "Fang", "Vivian", "Skye", "Kyle", "Audie"]
    return (
        "https://acnhapi.com/v1a/icons/villagers/"+(names.indexOf(name)+1)
    )
}