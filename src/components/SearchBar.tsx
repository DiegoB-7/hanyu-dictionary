import { useEffect,useState } from "preact/hooks";

function renderSearchResults(character) {
    return (
        <a class="font-medium text-black text-left  p-2 hover:bg-slate-200 cursor-pointer" href={"/character/"+character.id}>
            {character.character} - {character.name}
        </a>
    )
}

function renderSearchResultsList(searchResults) {
    return (
        <div class="flex flex-col w-1/2 space-y-1 ">
            {searchResults.map((character) => (
                renderSearchResults(character)
            ))}   
        </div>
    )
}

function renderSearchResultsEmpty() {
    return <p class="font-medium text-black text-left  p-2 w-full">No results found </p>
}

export function SearchBar() {
    const characteres = [
        {
            id: 1,
            name: "Zì",
            character: "字",
            meaning: "Character, Word",
            description: "The Chinese character '字' (Zì) is a fundamental character that represents the concept of a character, word, or written language. It is a versatile character that can be used in various contexts, from formal writing to casual conversation. The character is pronounced as 'zì' and is composed of two radicals: the 'bamboo' radical on the left and the 'child' radical on the right, symbolizing the growth and development of written language."
        },
        {
            id: 2,
            name: "Hǎo",
            character: "好",
            meaning: "Good, Well",
            description: "The Chinese character '好' (Hǎo) is a common character that represents the concept of 'good' or 'well'. It is used in various contexts, from expressing approval or satisfaction to describing the quality of something. The character is pronounced as 'hǎo' and is composed of two radicals:"
        },
        {
            id: 3,
            name: "Míng",
            character: "名",
            meaning: "Name, Famous",
            description: "The Chinese character '名' (Míng) is a versatile character that represents the concept of 'name' or 'famous'. It is used in various contexts, from personal names to the names of places, organizations, or products. The character is pronounced as 'míng' and is composed of two radicals:"

        },
        {
            id: 4,
            name: "Shū",
            character: "书",
            meaning: "Book, Write",
            description: "The Chinese character '书' (Shū) is a fundamental character that represents the concept of 'book' or 'write'. It is a versatile character that can be used in various contexts, from describing the act of writing to referring to a book or written work. The character is pronounced as 'shū' and is composed of two radicals:"
        }
    ];

    const [searchResults, setSearchResults] = useState([]);
    const [search, setSearch] = useState("");

    const debounce = (fn, ms = 300) => {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn.apply(this, args), ms);
        };
    }

    const onSearch = (e) => {
        setSearch(e.target.value);
    };

   useEffect(() => {
        const filteredResults = characteres.filter((character) => {
            return character.character.toLowerCase().includes(search.toLowerCase());
        });
        console.log(filteredResults)
        setSearchResults(filteredResults);
        
    }, [search]);

    return (
        <div class="flex flex-col justify-center items-center rounded-md">
            <input value={search} onInput={onSearch} type="text" placeholder="Search for a character" class="p-2 w-1/2 rounded-sm  outline-none bg-gray-100 text-black" />
            { 
            renderSearchResultsList(searchResults)
            }
           
            
        </div>
    );
}