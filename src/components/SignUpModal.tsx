function closeSignUpModal(){
    const modal = document.getElementById('signUpModal') as HTMLDialogElement;
    modal.close();
}

export function SignUpModal() {
    return (
        <dialog class="bg-primary  rounded-lg p-4 shadow-md" id="signUpModal">
            <div class="flex justify-between items-center">
                <h1 class="text-2xl font-semibold">Sign up</h1>
                <button class="text-2xl font-semibold" aria-label="close" onClick={closeSignUpModal}>X</button>
            </div>
            <form class="space-y-6">
      <div class="space-y-4">
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-1 space-y-2">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="firstName"
            >
              First Name
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-white text-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="firstName"
              placeholder="John"
              required={true}
              type="text"
            />
          </div>
          <div class="col-span-1 space-y-2">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="middleName"
            >
              Middle Name
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-white text-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="middleName"
              placeholder="Doe"
              required={true}
              type="text"
            />
          </div>
          <div class="col-span-1 space-y-2">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="lastName"
            >
              Last Name
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-white text-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="lastName"
              placeholder="Doe"
              required={true}
              type="text"
            />
          </div>
        </div>
      </div>
      <div class="space-y-4">
        <div class="space-y-2">
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="email"
          >
            Email
          </label>
          <input
            class="flex h-10 w-full rounded-md border border-input bg-white text-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="email"
            placeholder="example@email.com"
            required={true}
            type="email"
          />
        </div>
      </div>
      <div class="space-y-4">
        <div class="space-y-2">
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="password"
          >
            Password
          </label>
          <input
            class="flex h-10 w-full rounded-md border border-input bg-white text-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="password"
            placeholder={"•".repeat(10)}
            required={true}
            type="password"
          />
        </div>
      </div>
      <div class="space-y-4">
        <div class="space-y-2">
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="country"
          >
            Country
          </label>
          <button
            type="button"
            role="combobox"
            aria-controls="radix-:r7g:"
            aria-expanded="false"
            aria-autocomplete="none"
            dir="ltr"
            data-state="closed"
            data-placeholder=""
            class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-white text-black px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span style="pointer-events: none;">Select your country</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4 opacity-50"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
          <select
            aria-hidden="true"
            
            style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;"
          >
            <option value=""></option>
            <option value="cn">China</option>
            <option value="hk">Hong Kong</option>
            <option value="tw">Taiwan</option>
            <option value="sg">Singapore</option>
            <option value="us">United States</option>
            <option value="gb">United Kingdom</option>
          </select>
        </div>
      </div>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
        type="submit"
      >
        Sign Up
      </button>
    </form>
        </dialog>
    )
}