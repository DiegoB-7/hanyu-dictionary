import { SignUpModal } from "./SignUpModal";

function openSignUpModal(){
    const modal = document.getElementById('signUpModal') as HTMLDialogElement;
    modal.showModal();
}
export function SignUpButton(){

    return (
        <>
            <button class="bg-tertiarys text-white rounded-lg" onClick={openSignUpModal}>Sign up</button>  
            <SignUpModal />
        </> 
    );
}