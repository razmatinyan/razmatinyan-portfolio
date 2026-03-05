import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Linkedin, Github, Send } from 'lucide-react'

const contactLinks = [
	{
		platform: 'Email',
		value: 'razmatinyan28@gmail.com',
		icon: <Mail className='w-4 h-4' />,
		href: 'mailto:razmatinyan28@gmail.com',
	},
	{
		platform: 'LinkedIn',
		value: 'Razmik Matinyan',
		icon: <Linkedin className='w-4 h-4' />,
		href: 'https://linkedin.com/in/raz28m',
	},
	{
		platform: 'GitHub',
		value: 'razmatinyan',
		icon: <Github className='w-4 h-4' />,
		href: 'https://github.com/razmikmatinyan',
	},
	{
		platform: 'Telegram',
		value: '@razotech',
		icon: <Send className='w-4 h-4' />,
		href: 'https://t.me/razotech',
	},
]

const Contact = () => {
	const ref = useRef(null)
	const inView = useInView(ref, { once: true, margin: '-100px' })
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		projectType: '',
		budget: '',
		message: '',
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Form submission logic
	}

	return (
		<section id='contact' className='py-32 px-6' ref={ref}>
			<div className='max-w-6xl mx-auto'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className='text-center mb-16'
				>
					<p className='text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4'>
						Contact
					</p>
					<h2 className='text-3xl md:text-4xl font-bold text-foreground'>
						Let's Build Something
						<br />
						Together.
					</h2>
					<p className='mt-4 text-sm text-muted-foreground max-w-md mx-auto'>
						Have a project in mind? Send a message and I'll get back
						to you within 24 hours.
					</p>
				</motion.div>

				<div className='grid md:grid-cols-2 gap-12'>
					{/* Form */}
					<motion.form
						onSubmit={handleSubmit}
						initial={{ opacity: 0, x: -20 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='space-y-4'
					>
						<input
							type='text'
							placeholder='Your Name'
							required
							value={formData.name}
							onChange={e =>
								setFormData({
									...formData,
									name: e.target.value,
								})
							}
							className='w-full px-4 py-3 bg-surface border border-border rounded-lg text-xs text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/30 transition-colors'
						/>
						<input
							type='email'
							placeholder='Email Address'
							required
							value={formData.email}
							onChange={e =>
								setFormData({
									...formData,
									email: e.target.value,
								})
							}
							className='w-full px-4 py-3 bg-surface border border-border rounded-lg text-xs text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/30 transition-colors'
						/>
						<select
							value={formData.projectType}
							onChange={e =>
								setFormData({
									...formData,
									projectType: e.target.value,
								})
							}
							className='w-full px-4 py-3 bg-surface border border-border rounded-lg text-xs text-foreground focus:outline-none focus:border-foreground/30 transition-colors'
						>
							<option value='' className='bg-background'>
								Project Type
							</option>
							<option value='fullstack' className='bg-background'>
								Full Stack App
							</option>
							<option value='frontend' className='bg-background'>
								Frontend Only
							</option>
							<option value='backend' className='bg-background'>
								Backend / API
							</option>
							<option
								value='consulting'
								className='bg-background'
							>
								Consulting
							</option>
							<option value='other' className='bg-background'>
								Other
							</option>
						</select>
						<select
							value={formData.budget}
							onChange={e =>
								setFormData({
									...formData,
									budget: e.target.value,
								})
							}
							className='w-full px-4 py-3 bg-surface border border-border rounded-lg text-xs text-foreground focus:outline-none focus:border-foreground/30 transition-colors'
						>
							<option value='' className='bg-background'>
								Estimated Budget
							</option>
							<option value='<1k' className='bg-background'>
								{'< $1,000'}
							</option>
							<option value='1k-5k' className='bg-background'>
								$1,000 – $5,000
							</option>
							<option value='5k-15k' className='bg-background'>
								$5,000 – $15,000
							</option>
							<option value='15k+' className='bg-background'>
								$15,000+
							</option>
							<option value='discuss' className='bg-background'>
								Let's Discuss
							</option>
						</select>
						<textarea
							placeholder='Tell me about your project'
							required
							rows={5}
							value={formData.message}
							onChange={e =>
								setFormData({
									...formData,
									message: e.target.value,
								})
							}
							className='w-full px-4 py-3 bg-surface border border-border rounded-lg text-xs text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/30 transition-colors resize-none'
						/>
						<button
							type='submit'
							className='w-full py-3 bg-foreground text-background text-xs uppercase tracking-widest rounded-full hover:bg-foreground/90 transition-colors'
						>
							Send Message →
						</button>
					</motion.form>

					{/* Contact links */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.3 }}
						className='space-y-4 flex flex-col justify-center'
					>
						{contactLinks.map(link => (
							<a
								key={link.platform}
								href={link.href}
								target='_blank'
								rel='noopener noreferrer'
								className='glass-card rounded-xl p-4 flex items-center gap-4 group'
							>
								<div className='text-muted-foreground group-hover:text-foreground transition-colors'>
									{link.icon}
								</div>
								<div>
									<p className='text-[10px] uppercase tracking-widest text-muted-foreground'>
										{link.platform}
									</p>
									<p className='text-xs text-foreground'>
										{link.value}
									</p>
								</div>
							</a>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Contact
