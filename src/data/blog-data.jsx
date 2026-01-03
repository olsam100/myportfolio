export const blogPosts = [
  {
    id: 1,
    slug: 'business-partners-work-at-modern-office',
    title: 'Business Partners Work at Modern Office',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    excerpt:
      "It's no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies...",
    author: 'Olumide Oladunjoye',
    date: 'July 10, 2018',
    category: 'Social Life',
    content: `
      <p>It's no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least.</p>

      <p>For digital agencies, this means the focus needs to shift from simply offering a service to standing out from the crowd. Competition is fierce, and clients are looking for agencies that can deliver something unique, something that sets them apart from the rest.</p>

      <h3>The Challenge of Standing Out</h3>
      <p>The digital landscape is constantly evolving, and agencies must adapt to stay relevant. This requires a deep understanding of the latest trends, technologies, and best practices. It also requires a commitment to innovation and creativity, as well as a willingness to take risks and try new things.</p>

      <h3>Building Strong Partnerships</h3>
      <p>One of the most important aspects of working in the digital industry is building strong partnerships with clients. This means understanding their needs, goals, and challenges, and working collaboratively to develop solutions that meet their unique requirements.</p>

      <p>Modern offices are designed to foster collaboration and creativity, with open spaces that encourage communication and teamwork. This environment is essential for digital agencies, where collaboration between designers, developers, and strategists is key to success.</p>

      <h3>The Future of Digital Work</h3>
      <p>As we look to the future, it's clear that the digital industry will continue to evolve and grow. New technologies like artificial intelligence, machine learning, and augmented reality are opening up new possibilities for digital agencies and their clients.</p>

      <p>The key to success in this rapidly changing landscape is to stay curious, stay creative, and never stop learning. By embracing new technologies and approaches, digital agencies can continue to deliver innovative solutions that help their clients succeed in an increasingly competitive marketplace.</p>
    `,
  },
  {
    id: 2,
    slug: 'water-engineering-solutions-for-communities',
    title: 'Water Engineering Solutions for Communities',
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
    excerpt:
      'Exploring sustainable water solutions that can transform communities and provide access to clean water for all...',
    author: 'Olumide Oladunjoye',
    date: 'June 15, 2024',
    category: 'Engineering',
    content: `
      <p>Access to clean water is a fundamental human right, yet millions of people around the world still lack access to safe drinking water. As a civil engineer specializing in water engineering, I've seen firsthand the transformative impact that sustainable water solutions can have on communities.</p>

      <h3>The Global Water Crisis</h3>
      <p>The global water crisis is one of the most pressing challenges of our time. Climate change, population growth, and aging infrastructure are all contributing to water scarcity and contamination. In many developing countries, the situation is particularly dire, with communities forced to rely on contaminated water sources that put their health at risk.</p>

      <h3>Innovative Water Treatment Solutions</h3>
      <p>Fortunately, advances in water treatment technology are providing new hope for communities struggling with water scarcity. From simple filtration systems to advanced membrane technologies, there are now more options than ever for providing safe, clean drinking water to communities in need.</p>

      <p>One particularly promising approach is the use of decentralized water treatment systems, which can be deployed quickly and cost-effectively in rural and remote areas. These systems are designed to be easy to maintain and operate, making them ideal for communities with limited technical expertise.</p>

      <h3>Community Engagement and Sustainability</h3>
      <p>Technology alone is not enough to solve the water crisis. Sustainable water solutions require active community engagement and participation. This means working with local communities to understand their needs, educate them about water safety, and empower them to take ownership of their water systems.</p>

      <p>By combining innovative technology with community-based approaches, we can create water solutions that are not only effective but also sustainable over the long term. This is the key to ensuring that all people, regardless of location or economic status, have access to the clean water they need to thrive.</p>
    `,
  },
  {
    id: 3,
    slug: 'innovative-concrete-solutions-with-recycled-materials',
    title: 'Innovative Concrete Solutions with Recycled Materials',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    excerpt:
      'Research into the hydraulic properties and compressive strength of concrete with partially replaced coarse aggregate...',
    author: 'Olumide Oladunjoye',
    date: 'May 22, 2024',
    category: 'Research',
    content: `
      <p>The construction industry is one of the largest consumers of natural resources and producers of waste. As environmental concerns grow, researchers and engineers are exploring ways to make concrete production more sustainable. One promising approach is the use of recycled materials as partial replacements for traditional concrete aggregates.</p>

      <h3>The Environmental Impact of Concrete</h3>
      <p>Concrete is the most widely used construction material in the world, and its production has significant environmental impacts. The extraction of natural aggregates leads to habitat destruction and landscape degradation, while cement production is responsible for approximately 8% of global CO2 emissions.</p>

      <h3>Recycled Materials as Aggregate Replacements</h3>
      <p>My research has focused on using plastic waste and palm kernel shells as partial replacements for coarse aggregate in concrete. These materials are abundant in Nigeria and other tropical regions, and their use in concrete production could help address both waste management challenges and the environmental impact of construction.</p>

      <p>Our laboratory tests have examined the hydraulic properties and compressive strength of concrete mixes with varying percentages of recycled aggregate replacement. The results have been encouraging, showing that concrete with up to 20% recycled aggregate replacement can maintain adequate strength for many construction applications.</p>

      <h3>Hydraulic Properties and Durability</h3>
      <p>In addition to compressive strength, we've also studied the hydraulic properties of these concrete mixes, including water absorption, permeability, and resistance to chemical attack. Understanding these properties is crucial for ensuring that concrete structures remain durable over their intended service life.</p>

      <p>Our findings suggest that with proper mix design and quality control, recycled aggregate concrete can perform comparably to conventional concrete in many applications. This opens up exciting possibilities for more sustainable construction practices.</p>

      <h3>Future Directions</h3>
      <p>While our research has yielded promising results, there is still much work to be done. Future studies should focus on long-term durability, field performance, and life cycle assessment of recycled aggregate concrete. By continuing to innovate and refine these approaches, we can help make the construction industry more sustainable for future generations.</p>
    `,
  },
]

export const getBlogPostBySlug = (slug) => {
  return blogPosts.find((post) => post.slug === slug)
}

export const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
