<script>
	import { ArrowForward } from 'svelte-ionicons';
</script>

<section>
	<div class="p-6 flex flex-col items-center justify-start space-y-6 md:space-y-0">
		<div class="w-full md:hidden overflow-clip aspect-square rounded-xl bg-white">
			<!--Photo-->
		</div>

		<div class="md:flex md:flex-col md:items-center md:justify-start md:space-y-6">
			<div class="flex space-x-6 h-40">
				<div class="w-full p-6 rounded-xl bg-white flex flex-col space-y-2">
					<h2 class="font-source font-semibold text-2xl">hi there! 👋</h2>
					<p class="font-inter font-light text-sm leading-relaxed overflow-y-scroll">
						<!--Identity, Based, What do I do, small hobby-->
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum mauris nec interdum
						auctor. Fusce gravida dictum rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit
					</p>
				</div>
				<img src="/avatar.png" alt="Avatar" class="h-full aspect-square rounded-xl" />
			</div>
			<div class="w-full p-6 rounded-xl bg-white flex flex-col items-end text-right space-y-2">
				<h2 class="font-source font-semibold text-2xl">the road so far 🚀</h2>
				<p class="font-inter font-light text-sm leading-relaxed">
					<!--origin, freelancing, mobile dev, ui/ux and web dev, present (dsa & system design)-->
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum mauris nec interdum
					auctor. Fusce gravida dictum rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Praesent fermentum mauris nec interdum auctor. Fusce gravida dictum rhoncus.
				</p>
			</div>
			<div class="w-full bg-outline rounded-full bg-opacity-10 h-[0.75px]" />
			<div class="w-full p-3 rounded-xl bg-white flex justify-center">
				<h4 class="font-inter tracking-widest font-medium">EXPERTISE</h4>
			</div>
			<div class="w-full p-6 rounded-xl bg-white flex flex-col space-y-5">
				<div class="flex flex-col space-y-2">
					<h2 class="font-source font-semibold text-2xl">mobile development 📱</h2>
					<p class="font-inter font-light text-sm leading-relaxed">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum mauris nec
						interdum auctor. Fusce gravida dictum rhoncus. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Praesent fermentum mauris nec interdum auctor. Fusce gravida dictum
						rhoncus.
					</p>
				</div>
				<a href="/project" class="flex items-center space-x-2 hover:text-blue-500 duration-200">
					<p class="text-xs tracking-wider font-medium">RELATED PROJECTS</p>
					<ArrowForward size="16" />
				</a>
			</div>
			<div class="w-full p-6 rounded-xl bg-white flex flex-col space-y-5">
				<div class="flex flex-col space-y-2">
					<h2 class="font-source font-semibold text-2xl">fullstack web dev 💻</h2>
					<p class="font-inter font-light text-sm leading-relaxed">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum mauris nec
						interdum auctor. Fusce gravida dictum rhoncus. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Praesent fermentum mauris nec interdum auctor. Fusce gravida dictum
						rhoncus.
					</p>
				</div>
				<a href="/project" class="flex items-center space-x-2 hover:text-blue-500 duration-200">
					<p class="text-xs tracking-wider font-medium">RELATED PROJECTS</p>
					<ArrowForward size="16" />
				</a>
			</div>
			<div class="w-full p-6 rounded-xl bg-white flex flex-col space-y-5">
				<div class="flex flex-col space-y-2">
					<h2 class="font-source font-semibold text-2xl">UI/UX design 🎨</h2>
					<p class="font-inter font-light text-sm leading-relaxed">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum mauris nec
						interdum auctor. Fusce gravida dictum rhoncus. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Praesent fermentum mauris nec interdum auctor. Fusce gravida dictum
						rhoncus.
					</p>
				</div>
				<a href="/project" class="flex items-center space-x-2 hover:text-blue-500 duration-200">
					<p class="text-xs tracking-wider font-medium">RELATED PROJECTS</p>
					<ArrowForward size="16" />
				</a>
			</div>

			<div class="w-full bg-outline rounded-full bg-opacity-20 h-[0.75px]" />
			<div class="w-full p-3 rounded-xl bg-white flex justify-center">
				<h4 class="font-inter tracking-widest font-medium">WHAT DID THEY SAY?</h4>
			</div>
			<div class="w-full p-6 rounded-xl bg-white flex flex-col space-y-3">
				<p class="font-inter font-light italic leading-relaxed">
					"Good communication. Fast replies. Accommodating to requests."
				</p>
				<span class="leading-relaxed"
					>Alexander Eric Leveriza<br />
					<p class="text-sm font-light">My Physical Therapist (2021)</p></span
				>
			</div>
			<div class="w-full p-6 rounded-xl bg-white flex flex-col space-y-3">
				<p class="font-inter font-light italic leading-relaxed">
					"Once again, always delivering above the expectations! Great worker and very
					professional!"
				</p>
				<span class="leading-relaxed"
					>Douglas Simão<br />
					<p class="text-sm font-light">GetHeroes (2021)</p></span
				>
			</div>
			<div class="w-full p-6 rounded-xl bg-white flex flex-col space-y-3">
				<p class="font-inter font-light italic leading-relaxed">
					"Very nice person, and works very well! well done! totally recommend him"
				</p>
				<span class="leading-relaxed"
					>Douglas Simão<br />
					<p class="text-sm font-light">GetNinja (2020)</p></span
				>
			</div>

			<div class="w-full bg-outline rounded-full bg-opacity-10 h-[0.75px]" />
			<div class="w-full p-3 rounded-xl bg-white flex justify-center">
				<h4 class="font-inter tracking-widest font-medium">HIT ME UP!</h4>
			</div>
		</div>
	</div>
</section>
