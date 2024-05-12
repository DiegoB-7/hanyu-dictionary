import { useLocation } from "preact-iso";

export function CharacterDetail() {
  const { url } = useLocation();
  const character_id = url.split("/")[2];
  return (
    <div class="flex flex-col items-center justify-center bg-gray-50 px-4">
      <div class="max-w-3xl w-full mb-3">
        <section class="bg-white  rounded-xl shadow-lg overflow-hidden mt-20">
          <div class="grid md:grid-cols-1">
            <div class="p-8 flex flex-col items-center justify-center">
              <div class="text-9xl font-bold text-primary ">字</div>
              <div class="mt-4 text-2xl font-medium text-black ">Zì</div>
              <div class="mt-2 text-black">Character, Word</div>
            </div>
            
          </div>
        </section>
        <section class="mt-8 bg-white  rounded-xl shadow-lg">
          <div class="p-8">
            <h2 class="text-2xl font-bold text-black">User Comments</h2>
            <div class="mt-6 space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <span class="flex h-full w-full items-center justify-center rounded-full bg-secondary text-black">
                      U
                    </span>
                  </span>
                </div>
                <div class="ml-4">
                  <div class="text-base font-medium text-black ">John Doe</div>
                  <div class="mt-1 text-gray-500 dark:text-gray-400">
                    "I love learning about the history and meaning behind
                    Chinese characters. This one is so elegant and versatile."
                  </div>
                </div>
              </div>
              <div class="flex items-start">
                <form class="w-full" action="javascript:void(0);">
                  <textarea
                    class="w-full p-4 border rounded-lg bg-gray-100 text-black"
                    placeholder="Add a comment..."></textarea>
                  <button class="mt-4 px-8 py-2 font-semibold bg-primary text-white rounded-lg cursor-pointer w-full transition-colors hover:bg-secondary">
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
