// packages
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createVillager, deleteVillager, deleteIsland, updateIsland } from '../../utils/api';
import { Photos } from '../../components/Photo';
import { Info } from '../../components/Info';

export default function IslandShow(props) {
	const navigate = useNavigate();
    let {id} = useParams();
	const [showForm, setShowForm] = useState(false);
	const [formState, setFormState] = useState({ name: '' , type: '' });
    

	const handleChange = (event) => {
		setFormState({
			...formState,
			name: event.target.value,
			type: document
				.querySelector(`[value=${event.target.value}]`)
				.closest('optgroup').label,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		await createVillager(formState, id);
		setShowForm(false);
		navigate(`/island/${id}`);
        props.refresh();
	};

    const currentIsland = props.user.islands ? props.user.islands.find(
			(island) => island._id === id
		): null;


	// render JSX
	return (
		<div className='main-container'>
			{props.isLoggedIn && currentIsland ? (
				<div>
					<h3>Island: {currentIsland.name}</h3>
					<p>
						<button
							id='delete'
							onClick={async (event) => {
								if (
									// eslint-disable-next-line no-restricted-globals
									confirm('Are you sure you want to delete this island?')
								) {
									event.preventDefault();
									await deleteIsland(currentIsland._id);
                                    navigate('/');
									props.refresh();
								}
							}}>
							{' '}
							Delete Island: {currentIsland.name}
						</button>
					</p>
					<p>
						<button
							id='edit'
							onClick={async (event) => {
								// eslint-disable-next-line no-restricted-globals
								const newName = prompt('Edit island name:');
								if (newName) {
									event.preventDefault();
									await updateIsland({ name: newName }, currentIsland._id);
									props.refresh();
								}
							}}>
							Edit Island Name
						</button>
					</p>

					<div className='createIsland'>
						{currentIsland.villagers.map((villager) => (
							<div className='villager-hold' key={villager._id}>
								<div className='delete-button'>
									<button
										id='delete'
										onClick={async (event) => {
											if (
												// eslint-disable-next-line no-restricted-globals
												confirm(
													`Are you sure you want to delete this villager: ${villager.name}?`
												)
											) {
												event.preventDefault();
												await deleteVillager(villager._id);
												props.refresh();
											}
										}}>
										Delete {villager.name}
									</button>
								</div>

								<Photos name={villager.name} />

								<h3> {villager.name} </h3>

								<Info name={villager.name} />
							</div>
						))}

						<button
							id='create-villager'
							onClick={() => {
								setShowForm(!showForm);
							}}>
							Add Villager
						</button>
					</div>
					{showForm ? (
						<div className='create-form'>
							<form>
								<label htmlFor='villager-select'>
									Choose which villager to add:
								</label>
								<select
									id='villagers'
									onChange={handleChange}
									value={formState.name}>
									<option value=''> --- </option>
									<optgroup label='Alligator'>
										<option value='Alfonso'>Alfonso</option>
										<option value='Alli'>Alli</option>
										<option value='Boots'>Boots</option>
										<option value='Del'>Del</option>
										<option value='Drago'>Drago</option>
										<option value='Gayle'>Gayle</option>
										<option value='Sly'>Sly</option>
									</optgroup>
									<optgroup label='Anteater'>
										<option value='Anabelle'>Anabelle</option>
										<option value='Annalisa'>Annalisa</option>
										<option value='Antonio'>Antonio</option>
										<option value='Cyrano'>Cyrano</option>
										<option value='Olaf'>Olaf</option>
										<option value='Pango'>Pango</option>
										<option value='Snooty'>Snooty</option>
									</optgroup>
									<optgroup label='Bear'>
										<option value='Beardo'>Beardo</option>
										<option value='Charlise'>Charlise</option>
										<option value='Chow'>Chow</option>
										<option value='Curt'>Curt</option>
										<option value='Grizzly'>Grizzly</option>
										<option value='Groucho'>Groucho</option>
										<option value='Ike'>Ike</option>
										<option value='Klaus'>Klaus</option>
										<option value='Megan'>Megan</option>
										<option value='Nate'>Nate</option>
										<option value='Paula'>Paula</option>
										<option value='Pinky'>Pinky</option>
										<option value='Teddy'>Teddy</option>
										<option value='Tutu'>Tutu</option>
										<option value='Ursala'>Ursala</option>
									</optgroup>
									<optgroup label='Bird'>
										<option value='Admiral'>Admiral</option>
										<option value='Anchovy'>Anchovy</option>
										<option value='Jacob'>Jacob</option>
										<option value='Jacques'>Jacques</option>
										<option value='Jay'>Jay</option>
										<option value='Jitters'>Jitters</option>
										<option value='Lucha'>Lucha</option>
										<option value='Midge'>Midge</option>
										<option value='Peck'>Peck</option>
										<option value='Piper'>Piper</option>
										<option value='Robin'>Robin</option>
										<option value='Sparro'>Sparro</option>
										<option value='Twiggy'>Twiggy</option>
									</optgroup>
									<optgroup label='Bull'>
										<option value='Angus'>Angus</option>
										<option value='Coach'>Coach</option>
										<option value='Rodeo'>Rodeo</option>
										<option value='Stu'>Stu</option>
										<option value='T-Bone'>T-Bone</option>
										<option value='Vic'>Vic</option>
									</optgroup>
									<optgroup label='Cat'>
										<option value='Ankha'>Ankha</option>
										<option value='Bob'>Bob</option>
										<option value='Felicity'>Felicity</option>
										<option value='Kabuki'>Kabuki</option>
										<option value='Katt'>Katt</option>
										<option value='Kid Cat'>Kid Cat</option>
										<option value='Kiki'>Kiki</option>
										<option value='Kitty'>Kitty</option>
										<option value='Lolly'>Lolly</option>
										<option value='Merry'>Merry</option>
										<option value='Mitzi'>Mitzi</option>
										<option value='Moe'>Moe</option>
										<option value='Monique'>Monique</option>
										<option value='Olivia'>Olivia</option>
										<option value='Punchy'>Punchy</option>
										<option value='Purrl'>Purrl</option>
										<option value='Raymond'>Raymond</option>
										<option value='Rosie'>Rosie</option>
										<option value='Rudy'>Rudy</option>
										<option value='Stinky'>Stinky</option>
										<option value='Tabby'>Tabby</option>
										<option value='Tangy'>Tangy</option>
										<option value='Tom'>Tom</option>
									</optgroup>
									<optgroup label='Chicken'>
										<option value='Ava'>Ava</option>
										<option value='Becky'>Becky</option>
										<option value='Benedict'>Benedict</option>
										<option value='Broffina'>Broffina</option>
										<option value='Egbert'>Egbert</option>
										<option value='Goose'>Goose</option>
										<option value='Ken'>Ken</option>
										<option value='Knox'>Knox</option>
										<option value='Plucky'>Plucky</option>
									</optgroup>
									<optgroup label='Cow'>
										<option value='Naomi'>Naomi</option>
										<option value='Norma'>Norma</option>
										<option value='Patty'>Patty</option>
										<option value='Tipper'>Tipper</option>
									</optgroup>
									<optgroup label='Cub'>
										<option value='Barold'>Barold</option>
										<option value='Bluebear'>Bluebear</option>
										<option value='Cheri'>Cheri</option>
										<option value='Chester'>Chester</option>
										<option value='Judy'>Judy</option>
										<option value='June'>June</option>
										<option value='Kody'>Kody</option>
										<option value='Maple'>Maple</option>
										<option value='Murphy'>Murphy</option>
										<option value='Olive'>Olive</option>
										<option value='Pekoe'>Pekoe</option>
										<option value='Poncho'>Poncho</option>
										<option value='Pudge'>Pudge</option>
										<option value='Stitches'>Stitches</option>
										<option value='Tammy'>Tammy</option>
										<option value='Vladimir'>Vladimir</option>
									</optgroup>
									<optgroup label='Deer'>
										<option value='Bam'>Bam</option>
										<option value='Beau'>Beau</option>
										<option value='Bruce'>Bruce</option>
										<option value='Deirdre'>Deirdre</option>
										<option value='Diana'>Diana</option>
										<option value='Erik'>Erik</option>
										<option value='Fauna'>Fauna</option>
										<option value='Fuchsia'>Fuchsia</option>
										<option value='Lopez'>Lopez</option>
										<option value='Zell'>Zell</option>
									</optgroup>
									<optgroup label='Dog'>
										<option value='Bea'>Bea</option>
										<option value='Benjamin'>Benjamin</option>
										<option value='Biskit'>Biskit</option>
										<option value='Bones'>Bones</option>
										<option value='Butch'>Butch</option>
										<option value='Cherry'>Cherry</option>
										<option value='Cookie'>Cookie</option>
										<option value='Daisy'>Daisy</option>
										<option value='Goldie'>Goldie</option>
										<option value='Lucky'>Lucky</option>
										<option value='Mac'>Mac</option>
										<option value='Maddie'>Maddie</option>
										<option value='Marcel'>Marcel</option>
										<option value='Portia'>Portia</option>
										<option value='Shep'>Shep</option>
										<option value='Walker'>Walker</option>
									</optgroup>
									<optgroup label='Duck'>
										<option value='Bill'>Bill</option>
										<option value='Deena'>Deena</option>
										<option value='Derwin'>Derwin</option>
										<option value='Drake'>Drake</option>
										<option value='Freckles'>Freckles</option>
										<option value='Gloria'>Gloria</option>
										<option value='Joey'>Joey</option>
										<option value='Ketchup'>Ketchup</option>
										<option value='Maelle'>Maelle</option>
										<option value='Mallary'>Mallary</option>
										<option value='Miranda'>Miranda</option>
										<option value='Molly'>Molly</option>
										<option value='Pate'>Pate</option>
										<option value='Pompom'>Pompom</option>
										<option value='Quillson'>Quillson</option>
										<option value='Scoot'>Scoot</option>
										<option value='Weber'>Weber</option>
									</optgroup>
									<optgroup label='Eagle'>
										<option value='Amelia'>Amelia</option>
										<option value='Apollo'>Apollo</option>
										<option value='Avery'>Avery</option>
										<option value='Buzz'>Buzz</option>
										<option value='Celia'>Celia</option>
										<option value='Frank'>Frank</option>
										<option value='Keaton'>Keaton</option>
										<option value='Pierce'>Pierce</option>
										<option value='Sterling'>Sterling</option>
									</optgroup>
									<optgroup label='Elephant'>
										<option value='Axel'>Axel</option>
										<option value='Big Top'>Big Top</option>
										<option value='Cyd'>Cyd</option>
										<option value='Dizzy'>Dizzy</option>
										<option value='Ellie'>Ellie</option>
										<option value='Eloise'>Eloise</option>
										<option value='Margie'>Margie</option>
										<option value='Opal'>Opal</option>
										<option value='Paolo'>Paolo</option>
										<option value='Tia'>Tia</option>
										<option value='Tucker'>Tucker</option>
									</optgroup>
									<optgroup label='Frog'>
										<option value='Camofrog'>Camofrog</option>
										<option value='Cousteau'>Cousteau</option>
										<option value='Croque'>Croque</option>
										<option value='Diva'>Diva</option>
										<option value='Drift'>Drift</option>
										<option value='Frobert'>Frobert</option>
										<option value='Gigi'>Gigi</option>
										<option value='Henry'>Henry</option>
										<option value='Huck'>Huck</option>
										<option value='Jambette'>Jambette</option>
										<option value='Jeremiah'>Jeremiah</option>
										<option value='Lily'>Lily</option>
										<option value='Prince'>Prince</option>
										<option value='Puddles'>Puddles</option>
										<option value='Raddle'>Raddle</option>
										<option value='Ribbot'>Ribbot</option>
										<option value='Tad'>Tad</option>
										<option value='Wart Jr.'>Wart Jr.</option>
									</optgroup>
									<optgroup label='Goat'>
										<option value='Billy'>Billy</option>
										<option value='Chevre'>Chevre</option>
										<option value='Gruff'>Gruff</option>
										<option value='Kidd'>Kidd</option>
										<option value='Nan'>Nan</option>
										<option value='Pashmina'>Pashmina</option>
										<option value='Sherb'>Sherb</option>
										<option value='Velma'>Velma</option>
									</optgroup>
									<optgroup label='Gorilla'>
										<option value='Al'>Al</option>
										<option value='Boone'>Boone</option>
										<option value='Boyd'>Boyd</option>
										<option value='Cesar'>Cesar</option>
										<option value='Hans'>Hans</option>
										<option value='Louie'>Louie</option>
										<option value='Peewee'>Peewee</option>
										<option value='Rocket'>Rocket</option>
										<option value='Violet'>Violet</option>
									</optgroup>
									<optgroup label='Hamster'>
										<option value='Apple'>Apple</option>
										<option value='Clay'>Clay</option>
										<option value='Flurry'>Flurry</option>
										<option value='Graham'>Graham</option>
										<option value='Hamlet'>Hamlet</option>
										<option value='Hamphrey'>Hamphrey</option>
										<option value='Rodney'>Rodney</option>
										<option value='Soleil'>Soleil</option>
									</optgroup>
									<optgroup label='Hippo'>
										<option value='Bertha'>Bertha</option>
										<option value='Biff'>Biff</option>
										<option value='Bitty'>Bitty</option>
										<option value='Bubbles'>Bubbles</option>
										<option value='Harry'>Harry</option>
										<option value='Hippeux'>Hippeux</option>
										<option value='Rocco'>Rocco</option>
									</optgroup>
									<optgroup label='Horse'>
										<option value='Annalise'>Annalise</option>
										<option value='Buck'>Buck</option>
										<option value='Cleo'>Cleo</option>
										<option value='Clyde'>Clyde</option>
										<option value='Colton'>Colton</option>
										<option value='Ed'>Ed</option>
										<option value='Elmer'>Elmer</option>
										<option value='Julian'>Julian</option>
										<option value='Papi'>Papi</option>
										<option value='Peaches'>Peaches</option>
										<option value='Reneigh'>Reneigh</option>
										<option value='Roscoe'>Roscoe</option>
										<option value='Savannah'>Savannah</option>
										<option value='Victoria'>Victoria</option>
										<option value='Winnie'>Winnie</option>
									</optgroup>
									<optgroup label='Kangaroo'>
										<option value='Astrid'>Astrid</option>
										<option value='Carrie'>Carrie</option>
										<option value='Kitt'>Kitt</option>
										<option value='Marcie'>Marcie</option>
										<option value='Mathilda'>Mathilda</option>
										<option value='Rooney'>Rooney</option>
										<option value='Sylvia'>Sylvia</option>
										<option value='Walt'>Walt</option>
									</optgroup>
									<optgroup label='Koala'>
										<option value='Alice'>Alice</option>
										<option value='Canberra'>Canberra</option>
										<option value='Eugene'>Eugene</option>
										<option value='Gonzo'>Gonzo</option>
										<option value='Lyman'>Lyman</option>
										<option value='Melba'>Melba</option>
										<option value='Ozzie'>Ozzie</option>
										<option value='Sydney'>Sydney</option>
										<option value='Yuka'>Yuka</option>
									</optgroup>
									<optgroup label='Lion'>
										<option value='Bud'>Bud</option>
										<option value='Elvis'>Elvis</option>
										<option value='Leopold'>Leopold</option>
										<option value='Lionel'>Lionel</option>
										<option value='Mott'>Mott</option>
										<option value='Rex'>Rex</option>
										<option value='Rory'>Rory</option>
									</optgroup>
									<optgroup label='Monkey'>
										<option value='Deli'>Deli</option>
										<option value='Elise'>Elise</option>
										<option value='Flip'>Flip</option>
										<option value='Monty'>Monty</option>
										<option value='Nana'>Nana</option>
										<option value='Shari'>Shari</option>
										<option value='Simon'>Simon</option>
										<option value='Tammi'>Tammi</option>
									</optgroup>
									<optgroup label='Mouse'>
										<option value='Anicotti'>Anicotti</option>
										<option value='Bella'>Bella</option>
										<option value='Bettina'>Bettina</option>
										<option value='Bree'>Bree</option>
										<option value='Broccolo'>Broccolo</option>
										<option value='Candi'>Candi</option>
										<option value='Chadder'>Chadder</option>
										<option value='Dora'>Dora</option>
										<option value='Greta'>Greta</option>
										<option value='Limberg'>Limberg</option>
										<option value='Moose'>Moose</option>
										<option value='Penelope'>Penelope</option>
										<option value='Rizzo'>Rizzo</option>
										<option value='Rod'>Rod</option>
										<option value='Samson'>Samson</option>
									</optgroup>
									<optgroup label='Octopus'>
										<option value='Marina'>Marina</option>
										<option value='Octavian'>Octavian</option>
										<option value='Zucker'>Zucker</option>
									</optgroup>
									<optgroup label='Ostrich'>
										<option value='Blanche'>Blanche</option>
										<option value='Cranston'>Cranston</option>
										<option value='Flora'>Flora</option>
										<option value='Gladys'>Gladys</option>
										<option value='Julia'>Julia</option>
										<option value='Phil'>Phil</option>
										<option value='Phoebe'>Phoebe</option>
										<option value='Queenie'>Queenie</option>
										<option value='Sandy'>Sandy</option>
										<option value='Sprocket'>Sprocket</option>
									</optgroup>
									<optgroup label='Penguin'>
										<option value='Aurora'>Aurora</option>
										<option value='Boomer'>Boomer</option>
										<option value='Cube'>Cube</option>
										<option value='Flo'>Flo</option>
										<option value='Friga'>Friga</option>
										<option value='Gwen'>Gwen</option>
										<option value='Hopper'>Hopper</option>
										<option value='Iggly'>Iggly</option>
										<option value='Puck'>Puck</option>
										<option value='Roald'>Roald</option>
										<option value='Sprinkle'>Sprinkle</option>
										<option value='Tex'>Tex</option>
										<option value='Wade'>Wade</option>
									</optgroup>
									<optgroup label='Pig'>
										<option value='Agnes'>Agnes</option>
										<option value='Boris'>Boris</option>
										<option value='Chops'>Chops</option>
										<option value='Cobb'>Cobb</option>
										<option value='Curly'>Curly</option>
										<option value='Gala'>Gala</option>
										<option value='Hugh'>Hugh</option>
										<option value='Kevin'>Kevin</option>
										<option value='Lucy'>Lucy</option>
										<option value='Maggie'>Maggie</option>
										<option value='Pancetti'>Pancetti</option>
										<option value='Peggy'>Peggy</option>
										<option value='Rasher'>Rasher</option>
										<option value='Spork'>Spork</option>
										<option value='Truffles'>Truffles</option>
									</optgroup>
									<optgroup label='Rabbit'>
										<option value='Bonbon'>Bonbon</option>
										<option value='Bunnie'>Bunnie</option>
										<option value='Carmen'>Carmen</option>
										<option value='Chrissy'>Chrissy</option>
										<option value='Claude'>Claude</option>
										<option value='Coco'>Coco</option>
										<option value='Cole'>Cole</option>
										<option value='Doc'>Doc</option>
										<option value='Dotty'>Dotty</option>
										<option value='Francine'>Francine</option>
										<option value='Gabi'>Gabi</option>
										<option value='Gaston'>Gaston</option>
										<option value='Genji'>Genji</option>
										<option value='Hopkins'>Hopkins</option>
										<option value='Mira'>Mira</option>
										<option value="O'Hare">O'Hare</option>
										<option value='Pippy'>Pippy</option>
										<option value='Ruby'>Ruby</option>
										<option value='Snake'>Snake</option>
										<option value='Tiffany'>Tiffany</option>
									</optgroup>
									<optgroup label='Rhino'>
										<option value='Hornsby'>Hornsby</option>
										<option value='Merengue'>Merengue</option>
										<option value='Renée'>Renée</option>
										<option value='Rhonda'>Rhonda</option>
										<option value='Spike'>Spike</option>
										<option value='Tank'>Tank</option>
									</optgroup>
									<optgroup label='Sheep'>
										<option value='Baabara'>Baabara</option>
										<option value='Cashmere'>Cashmere</option>
										<option value='Curlos'>Curlos</option>
										<option value='Dom'>Dom</option>
										<option value='Eunice'>Eunice</option>
										<option value='Frita'>Frita</option>
										<option value='Muffy'>Muffy</option>
										<option value='Pietro'>Pietro</option>
										<option value='Stella'>Stella</option>
										<option value='Timbra'>Timbra</option>
										<option value='Vesta'>Vesta</option>
										<option value='Wendy'>Wendy</option>
										<option value='Willow'>Willow</option>
									</optgroup>
									<optgroup label='Squirrel'>
										<option value='Agent S'>Agent S</option>
										<option value='Blaire'>Blaire</option>
										<option value='Cally'>Cally</option>
										<option value='Caroline'>Caroline</option>
										<option value='Filbert'>Filbert</option>
										<option value='Hazel'>Hazel</option>
										<option value='Marshal'>Marshal</option>
										<option value='Mint'>Mint</option>
										<option value='Nibbles'>Nibbles</option>
										<option value='Peanut'>Peanut</option>
										<option value='Pecan'>Pecan</option>
										<option value='Poppy'>Poppy</option>
										<option value='Ricky'>Ricky</option>
										<option value='Sally'>Sally</option>
										<option value='Sheldon'>Sheldon</option>
										<option value='Static'>Static</option>
										<option value='Sylvana'>Sylvana</option>
										<option value='Tasha'>Tasha</option>
									</optgroup>
									<optgroup label='Tiger'>
										<option value='Bangle'>Bangle</option>
										<option value='Bianca'>Bianca</option>
										<option value='Claudia'>Claudia</option>
										<option value='Leonardo'>Leonardo</option>
										<option value='Rolf'>Rolf</option>
										<option value='Rowan'>Rowan</option>
										<option value='Tybalt'>Tybalt</option>
									</optgroup>
									<optgroup label='Wolf'>
										<option value='Audie'>Audie</option>
										<option value='Chief'>Chief</option>
										<option value='Dobie'>Dobie</option>
										<option value='Fang'>Fang</option>
										<option value='Freya'>Freya</option>
										<option value='Kyle'>Kyle</option>
										<option value='Lobo'>Lobo</option>
										<option value='Skye'>Skye</option>
										<option value='Vivian'>Vivian</option>
										<option value='Whitney'>Whitney</option>
										<option value='Wolfgang'>Wolfgang</option>
									</optgroup>
								</select>
							</form>

							<button type='submit' onClick={handleSubmit}>
								Confirm Villager
							</button>
						</div>
					) : null}
				</div>
			) : null}
		</div>
	);
}
