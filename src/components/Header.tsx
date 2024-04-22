import { useLocation } from 'preact-iso';
import Logo from '../assets/logo.png';

export function Header() {
	const { url } = useLocation();

	return (
		<header class="bg-primary py-4">
			<div class="mx-auto flex justify-between items-center px-4">
				<a class="flex justify-start " href="/">
						<img src={Logo} alt="logo" class="w-12 h-12" />
				</a>
				<nav>
					<div class="flex justify-end ">
						<ul class="flex space-x-4">
							<li class="p-2 font-semibold">
								<a href="/" class={url === '/' ? 'active' : ''}>Home</a>
							</li>
							<li class="p-2 font-semibold">
								<a href="/about" class={url === '/about' ? 'active' : ''}>About</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	);
}
