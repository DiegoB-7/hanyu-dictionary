import { Component,render } from "preact";
import { CharacterCard } from "../../components/CharacterCard";
import { SearchBar } from "../../components/SearchBar";

export function Home()  {
	return (
		<div class="space-y-10 mt-20">
			<section class="space-y-1 ">
				<h1 class="font-bold text-6xl text-center text-black">Chinese character dictionary</h1>
				<p class="text-center p-3 text-xl text-black">Explore the beauty and complexity of the Chinese language</p>
				<SearchBar />
			</section>
			<section>
				<h3 class="text-black font-bold text-2xl p-4">Most popular characters</h3>
				<div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-3 px-4">
					<CharacterCard character_id="1" character={"人"} pinyin={"rén"} description={"person"} />
					<CharacterCard character_id="2" character={"大"} pinyin={"dà"} description={"big"} />
					<CharacterCard character_id="3" character={"小"} pinyin={"xiǎo"} description={"small"} />
				</div>
			</section>
		</div>
	);
}


