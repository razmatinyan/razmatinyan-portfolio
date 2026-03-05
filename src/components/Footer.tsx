import { Github, Linkedin, Send, ArrowUp } from 'lucide-react'

const Footer = () => {
	return (
		<footer className='border-t border-border py-12 px-6'>
			<div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6'>
				<div className='text-center md:text-left'>
					<p className='text-xs text-muted-foreground'>
						Turning complex problems into elegant software.
					</p>
					<p className='text-[10px] text-muted-foreground/50 mt-1'>
						© 2026 Razmik Matinyan. All rights reserved.
					</p>
				</div>

				<div className='flex items-center gap-4'>
					<a
						href='https://github.com/razmatinyan'
						target='_blank'
						rel='noopener noreferrer'
						className='text-muted-foreground hover:text-foreground transition-colors'
					>
						<Github className='w-4 h-4' />
					</a>
					<a
						href='https://linkedin.com/in/raz28m'
						target='_blank'
						rel='noopener noreferrer'
						className='text-muted-foreground hover:text-foreground transition-colors'
					>
						<Linkedin className='w-4 h-4' />
					</a>
					<a
						href='https://t.me/razotech'
						target='_blank'
						rel='noopener noreferrer'
						className='text-muted-foreground hover:text-foreground transition-colors'
					>
						<Send className='w-4 h-4' />
					</a>

					<button
						onClick={() =>
							window.scrollTo({ top: 0, behavior: 'smooth' })
						}
						className='ml-4 w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors'
					>
						<ArrowUp className='w-3 h-3' />
					</button>
				</div>
			</div>
		</footer>
	)
}

export default Footer
