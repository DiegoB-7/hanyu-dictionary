function closeSignInModal(){
    const modal = document.getElementById('signInModal') as HTMLDialogElement;
    modal.close();
}
export function SignInModal(){

    return (
        <dialog class="bg-primary w-96 h-72 rounded-lg p-4 shadow-md" id="signInModal">
            <div class="flex justify-between items-center">
                <h1 class="text-2xl font-semibold text-white">Sign in</h1>
                <button class="text-2xl font-semibold" aria-label="close" onClick={closeSignInModal} >X</button>
            </div>
            <form class="flex flex-col space-y-7 mt-5">
                <input type="email" placeholder="Email" class="p-2 rounded-lg bg-white text-black" />
                <input type="password" placeholder="Password" class="p-2 rounded-lg bg-white text-black" />
                <button class="bg-secondary hover:bg-primary transition-colors text-black p-2 rounded-lg" type="submit">Sign in</button>
            </form>
            <a href="#" class="text-white text-sm mt-5  text-right w-full">Forgot password?</a>
        </dialog>
    );
}