import { SignInModal } from "./SignInModal";

function openSignInModal(){
    const modal = document.getElementById("signInModal") as HTMLDialogElement;
    modal.showModal();
}

export function SignInButton() {
    
    return (
        <>
            <button class="bg-tertiarys text-white rounded-lg" onClick={openSignInModal}>Sign in</button>  
            <SignInModal />
        </>  
    );
}