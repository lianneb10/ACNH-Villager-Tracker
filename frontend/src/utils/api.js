import axios from 'axios';
let baseURL = {baseURL: window.location.origin.replace(/:[0-9]+$/,"") + ":8000"};



//ISLAND CRUD

export async function createIsland(formData, user_id) {
    const {data} = await axios.post(`island/create/${user_id}`, formData, baseURL);
    return data;
}


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



///NAME SELECT FOR VILLAGERS
 export function NameTypes() { 
    return (
    <select id="villager-select">
        <optgroup label="Alligator">
            <option>Alfonso</option>
            <option>Alli</option>
            <option>Boots</option>
            <option>Del</option>
            <option>Drago</option>
            <option>Gayle</option>
            <option>Sly</option>
        </optgroup>
        <optgroup label="Anteater">
            <option>Anabelle</option>
            <option>Annalisa</option>
            <option>Antonio</option>
            <option>Cyrano</option>
            <option>Olaf</option>
            <option>Pango</option>
            <option>Snooty</option>
        </optgroup>
        <optgroup label="Bear">
            <option>Beardo</option>
            <option>Charlise</option>
            <option>Chow</option>
            <option>Curt</option>
            <option>Grizzly</option>
            <option>Groucho</option>
            <option>Ike</option>
            <option>Klaus</option>
            <option>Megan</option>
            <option>Nate</option>
            <option>Paula</option>
            <option>Pinky</option>
            <option>Teddy</option>
            <option>Tutu</option>
            <option>Ursala</option>
        </optgroup>
        <optgroup label="Bird">
            <option>Admiral</option>
            <option>Anchovy</option>
            <option>Jacob</option>
            <option>Jacques</option>
            <option>Jay</option>
            <option>Jitters</option>
            <option>Lucha</option>
            <option>Midge</option>
            <option>Peck</option>
            <option>Piper</option>
            <option>Robin</option>
            <option>Sparro</option>
            <option>Twiggy</option>
        </optgroup>
        <optgroup label="Bull">
            <option>Angus</option>
            <option>Coach</option>
            <option>Rodeo</option>
            <option>Stu</option>
            <option>T-Bone</option>
            <option>Vic</option>
        </optgroup>
        <optgroup label="Cat">
            <option>Ankha</option>
            <option>Bob</option>
            <option>Felicity</option>
            <option>Kabuki</option>
            <option>Katt</option>
            <option>Kid Cat</option>
            <option>Kiki</option>
            <option>Kitty</option>
            <option>Lolly</option>
            <option>Merry</option>
            <option>Mitzi</option>
            <option>Moe</option>
            <option>Monique</option>
            <option>Olivia</option>
            <option>Punchy</option>
            <option>Purrl</option>
            <option>Raymond</option>
            <option>Rosie</option>
            <option>Rudy</option>
            <option>Stinky</option>
            <option>Tabby</option>
            <option>Tangy</option>
            <option>Tom</option>
        </optgroup>
        <optgroup label="Chicken">
            <option>Ava</option>
            <option>Becky</option>
            <option>Benedict</option>
            <option>Broffina</option>
            <option>Egbert</option>
            <option>Goose</option>
            <option>Ken</option>
            <option>Knox</option>
            <option>Plucky</option>
        </optgroup>
        <optgroup label="Cow">
            <option>Naomi</option>
            <option>Norma</option>
            <option>Patty</option>
            <option>Tipper</option>
        </optgroup>
        <optgroup label="Cub">
            <option>Barold</option>
            <option>Bluebear</option>
            <option>Cheri</option>
            <option>Chester</option>
            <option>Judy</option>
            <option>June</option>
            <option>Kody</option>
            <option>Maple</option>
            <option>Murphy</option>
            <option>Olive</option>
            <option>Pekoe</option>
            <option>Poncho</option>
            <option>Pudge</option>
            <option>Stitches</option>
            <option>Tammy</option>
            <option>Vladimir</option>
        </optgroup>
        <optgroup label="Deer">
            <option>Bam</option>
            <option>Beau</option>
            <option>Bruce</option>
            <option>Deirdre</option>
            <option>Diana</option>
            <option>Erik</option>
            <option>Fauna</option>
            <option>Fuchsia</option>
            <option>Lopez</option>
            <option>Zell</option>
        </optgroup>
        <optgroup label="Dog">
            <option>Bea</option>
            <option>Benjamin</option>
            <option>Biskit</option>
            <option>Bones</option>
            <option>Butch</option>
            <option>Cherry</option>
            <option>Cookie</option>
            <option>Daisy</option>
            <option>Goldie</option>
            <option>Lucky</option>
            <option>Mac</option>
            <option>Maddie</option>
            <option>Marcel</option>
            <option>Portia</option>
            <option>Shep</option>
            <option>Walker</option>
        </optgroup>
        <optgroup label="Duck">
            <option>Bill</option>
            <option>Deena</option>
            <option>Derwin</option>
            <option>Drake</option>
            <option>Freckles</option>
            <option>Gloria</option>
            <option>Joey</option>
            <option>Ketchup</option>
            <option>Maelle</option>
            <option>Mallary</option>
            <option>Miranda</option>
            <option>Molly</option>
            <option>Pate</option>
            <option>Pompom</option>
            <option>Quillson</option>
            <option>Scoot</option>
            <option>Weber</option>
        </optgroup>
        <optgroup label="Eagle">
            <option>Amelia</option>
            <option>Apollo</option>
            <option>Avery</option>
            <option>Buzz</option>
            <option>Celia</option>
            <option>Frank</option>
            <option>Keaton</option>
            <option>Pierce</option>
            <option>Sterling</option>
        </optgroup>
        <optgroup label="Elephant">
            <option>Axel</option>
            <option>Big Top</option>
            <option>Cyd</option>
            <option>Dizzy</option>
            <option>Ellie</option>
            <option>Eloise</option>
            <option>Margie</option>
            <option>Opal</option>
            <option>Paolo</option>
            <option>Tia</option>
            <option>Tucker</option>
        </optgroup>
        <optgroup label="Frog">
            <option>Camofrog</option>
            <option>Cousteau</option>
            <option>Croque</option>
            <option>Diva</option>
            <option>Drift</option>
            <option>Frobert</option>
            <option>Gigi</option>
            <option>Henry</option>
            <option>Huck</option>
            <option>Jambette</option>
            <option>Jeremiah</option>
            <option>Lily</option>
            <option>Prince</option>
            <option>Puddles</option>
            <option>Raddle</option>
            <option>Ribbot</option>
            <option>Tad</option>
            <option>Wart Jr.</option>
        </optgroup>
        <optgroup label="Goat">
            <option>Billy</option>
            <option>Chevre</option>
            <option>Gruff</option>
            <option>Kidd</option>
            <option>Nan</option>
            <option>Pashmina</option>
            <option>Sherb</option>
            <option>Velma</option>
        </optgroup>
        <optgroup label="Gorilla">
            <option>Al</option>
            <option>Boone</option>
            <option>Boyd</option>
            <option>Cesar</option>
            <option>Hans</option>
            <option>Louie</option>
            <option>Peewee</option>
            <option>Rocket</option>
            <option>Violet</option>
        </optgroup>
        <optgroup label="Hamster">
            <option>Apple</option>
            <option>Clay</option>
            <option>Flurry</option>
            <option>Graham</option>
            <option>Hamlet</option>
            <option>Hamphrey</option>
            <option>Rodney</option>
            <option>Soleil</option>
        </optgroup>
        <optgroup label="Hippo">
            <option>Bertha</option>
            <option>Biff</option>
            <option>Bitty</option>
            <option>Bubbles</option>
            <option>Harry</option>
            <option>Hippeux</option>
            <option>Rocco</option>
        </optgroup>
        <optgroup label="Horse">
            <option>Annalise</option>
            <option>Buck</option>
            <option>Cleo</option>
            <option>Clyde</option>
            <option>Colton</option>
            <option>Ed</option>
            <option>Elmer</option>
            <option>Julian</option>
            <option>Papi</option>
            <option>Peaches</option>
            <option>Reneigh</option>
            <option>Roscoe</option>
            <option>Savannah</option>
            <option>Victoria</option>
            <option>Winnie</option>
        </optgroup>
        <optgroup label="Kangaroo">
            <option>Astrid</option>
            <option>Carrie</option>
            <option>Kitt</option>
            <option>Marcie</option>
            <option>Mathilda</option>
            <option>Rooney</option>
            <option>Sylvia</option>
            <option>Walt</option>
        </optgroup>
        <optgroup label="Koala">
            <option>Alice</option>
            <option>Canberra</option>
            <option>Eugene</option>
            <option>Gonzo</option>
            <option>Lyman</option>
            <option>Melba</option>
            <option>Ozzie</option>
            <option>Sydney</option>
            <option>Yuka</option>
        </optgroup>
        <optgroup label="Lion">
            <option>Bud</option>
            <option>Elvis</option>
            <option>Leopold</option>
            <option>Lionel</option>
            <option>Mott</option>
            <option>Rex</option>
            <option>Rory</option>
        </optgroup>
        <optgroup label="Monkey">
            <option>Deli</option>
            <option>Elise</option>
            <option>Flip</option>
            <option>Monty</option>
            <option>Nana</option>
            <option>Shari</option>
            <option>Simon</option>
            <option>Tammi</option>
        </optgroup>
        <optgroup label="Mouse">
            <option>Anicotti</option>
            <option>Bella</option>
            <option>Bettina</option>
            <option>Bree</option>
            <option>Broccolo</option>
            <option>Candi</option>
            <option>Chadder</option>
            <option>Dora</option>
            <option>Greta</option>
            <option>Limberg</option>
            <option>Moose</option>
            <option>Penelope</option>
            <option>Rizzo</option>
            <option>Rod</option>
            <option>Samson</option>
        </optgroup>
        <optgroup label="Octopus">
            <option>Marina</option>
            <option>Octavian</option>
            <option>Zucker</option>
        </optgroup>
        <optgroup label="Ostrich">
            <option>Blanche</option>
            <option>Cranston</option>
            <option>Flora</option>
            <option>Gladys</option>
            <option>Julia</option>
            <option>Phil</option>
            <option>Phoebe</option>
            <option>Queenie</option>
            <option>Sandy</option>
            <option>Sprocket</option>
        </optgroup>
        <optgroup label="Penguin">
            <option>Aurora</option>
            <option>Boomer</option>
            <option>Cube</option>
            <option>Flo</option>
            <option>Friga</option>
            <option>Gwen</option>
            <option>Hopper</option>
            <option>Iggly</option>
            <option>Puck</option>
            <option>Roald</option>
            <option>Sprinkle</option>
            <option>Tex</option>
            <option>Wade</option>
        </optgroup>
        <optgroup label="Pig">
            <option>Agnes</option>
            <option>Boris</option>
            <option>Chops</option>
            <option>Cobb</option>
            <option>Curly</option>
            <option>Gala</option>
            <option>Hugh</option>
            <option>Kevin</option>
            <option>Lucy</option>
            <option>Maggie</option>
            <option>Pancetti</option>
            <option>Peggy</option>
            <option>Rasher</option>
            <option>Spork</option>
            <option>Truffles</option>
        </optgroup>
        <optgroup label="Rabbit">
            <option>Bonbon</option>
            <option>Bunnie</option>
            <option>Carmen</option>
            <option>Chrissy</option>
            <option>Claude</option>
            <option>Coco</option>
            <option>Cole</option>
            <option>Doc</option>
            <option>Dotty</option>
            <option>Francine</option>
            <option>Gabi</option>
            <option>Gaston</option>
            <option>Genji</option>
            <option>Hopkins</option>
            <option>Mira</option>
            <option>O'Hare</option>
            <option>Pippy</option>
            <option>Ruby</option>
            <option>Snake</option>
            <option>Tiffany</option>
        </optgroup>
        <optgroup label="Rhino">
            <option>Hornsby</option>
            <option>Merengue</option>
            <option>Renée</option>
            <option>Rhonda</option>
            <option>Spike</option>
            <option>Tank</option>
        </optgroup>
        <optgroup label="Sheep">
            <option>Baabara</option>
            <option>Cashmere</option>
            <option>Curlos</option>
            <option>Dom</option>
            <option>Eunice</option>
            <option>Frita</option>
            <option>Muffy</option>
            <option>Pietro</option>
            <option>Stella</option>
            <option>Timbra</option>
            <option>Vesta</option>
            <option>Wendy</option>
            <option>Willow</option>
        </optgroup>
        <optgroup label="Squirrel">
            <option>Agent S</option>
            <option>Blaire</option>
            <option>Cally</option>
            <option>Caroline</option>
            <option>Filbert</option>
            <option>Hazel</option>
            <option>Marshal</option>
            <option>Mint</option>
            <option>Nibbles</option>
            <option>Peanut</option>
            <option>Pecan</option>
            <option>Poppy</option>
            <option>Ricky</option>
            <option>Sally</option>
            <option>Sheldon</option>
            <option>Static</option>
            <option>Sylvana</option>
            <option>Tasha</option>
        </optgroup>
        <optgroup label="Tiger">
            <option>Bangle</option>
            <option>Bianca</option>
            <option>Claudia</option>
            <option>Leonardo</option>
            <option>Rolf</option>
            <option>Rowan</option>
            <option>Tybalt</option>
        </optgroup>
        <optgroup label="Wolf">
            <option>Audie</option>
            <option>Chief</option>
            <option>Dobie</option>
            <option>Fang</option>
            <option>Freya</option>
            <option>Kyle</option>
            <option>Lobo</option>
            <option>Skye</option>
            <option>Vivian</option>
            <option>Whitney</option>
            <option>Wolfgang</option>
        </optgroup>
    </select> )
}
