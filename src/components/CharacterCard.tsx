export function CharacterCard(props) {
    return (
        <a href={"/character/"+props.character_id} class="shadow-sm p-4 space-y-3 rounded-lg border cursor-pointer hover:bg-primary  transition-colors" >
            <h4 class="text-center text-5xl font-bold text-primary hover:text-black">{props.character}</h4>
            <p class="text-center text-xl text-black">{`${props.pinyin} - ${props.description}`}</p>
        </a>
    );
}