import type { TechItem } from '~/types/portfolio'

export interface TechCategoryBase {
  icon: string
  items: TechItem[]
}

// Titles are localized separately (techCategoryTitles); item names are
// technology proper nouns and identical across languages.
export const techCategoriesBase: TechCategoryBase[] = [
  {
    icon: 'fas fa-code',
    items: [
      { name: 'PHP 5/7/8', icon: 'devicon-php-plain colored' },
      { name: 'Java', icon: 'devicon-java-plain colored' },
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'SQL', icon: 'fas fa-database' },
    ],
  },
  {
    icon: 'fas fa-server',
    items: [
      { name: 'Laravel 5–9', icon: 'devicon-laravel-plain colored' },
      { name: 'CodeIgniter 3/4', icon: 'fas fa-fire' },
      { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
      { name: 'Spring MVC', icon: 'devicon-spring-plain colored' },
      { name: 'Spring Data', icon: 'devicon-spring-plain colored' },
      { name: 'JPA / Hibernate', icon: 'devicon-hibernate-plain' },
      { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
      { name: 'Flask', icon: 'fas fa-flask' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    ],
  },
  {
    icon: 'fas fa-display',
    items: [
      { name: 'HTML5', icon: 'devicon-html5-plain colored' },
      { name: 'CSS3', icon: 'devicon-css3-plain colored' },
      { name: 'SASS', icon: 'devicon-sass-original colored' },
      { name: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'jQuery', icon: 'devicon-jquery-plain colored' },
      { name: 'Vanilla JS / ES6+', icon: 'fas fa-bolt' },
    ],
  },
  {
    icon: 'fas fa-database',
    items: [
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
      { name: 'MariaDB', icon: 'devicon-mariadb-plain' },
      { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain colored' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
      { name: 'Redis', icon: 'devicon-redis-plain colored' },
    ],
  },
  {
    icon: 'fas fa-toolbox',
    items: [
      { name: 'Docker', icon: 'devicon-docker-plain colored' },
      { name: 'Docker Compose', icon: 'devicon-docker-plain colored' },
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'GitLab', icon: 'devicon-gitlab-plain colored' },
      { name: 'GitHub', icon: 'fab fa-github' },
      { name: 'GitFlow', icon: 'fas fa-code-branch' },
      { name: 'Jenkins', icon: 'devicon-jenkins-line' },
      { name: 'GitHub Actions', icon: 'fas fa-gears' },
      { name: 'CI/CD', icon: 'fas fa-infinity' },
      { name: 'Linux', icon: 'fab fa-linux' },
      { name: 'Maven', icon: 'devicon-maven-plain colored' },
      { name: 'Gradle', icon: 'devicon-gradle-plain' },
    ],
  },
  {
    icon: 'fas fa-cloud',
    items: [
      { name: 'AWS', icon: 'fab fa-aws' },
      { name: 'Azure', icon: 'devicon-azure-plain colored' },
      { name: 'GCP', icon: 'devicon-googlecloud-plain colored' },
      { name: 'DigitalOcean', icon: 'devicon-digitalocean-plain colored' },
      { name: 'Kubernetes', icon: 'devicon-kubernetes-plain colored' },
      { name: 'Terraform', icon: 'devicon-terraform-plain colored' },
      { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
      { name: 'Cloudflare', icon: 'devicon-cloudflare-plain colored' },
      { name: 'Netlify', icon: 'devicon-netlify-plain colored' },
      { name: 'Heroku', icon: 'devicon-heroku-plain colored' },
    ],
  },
  {
    icon: 'fas fa-sitemap',
    items: [
      { name: 'REST', icon: 'fas fa-network-wired' },
      { name: 'SOAP', icon: 'fas fa-envelope-open-text' },
      { name: 'MVC / MVT', icon: 'fas fa-layer-group' },
      { name: 'Clean Architecture', icon: 'fas fa-drafting-compass' },
      { name: 'SOLID', icon: 'fas fa-cubes' },
      { name: 'DDD', icon: 'fas fa-diagram-project' },
      { name: 'Design Patterns', icon: 'fas fa-shapes' },
      { name: 'Microservices', icon: 'fas fa-circle-nodes' },
      { name: 'Scrum', icon: 'fas fa-people-group' },
      { name: 'Kanban', icon: 'fas fa-table-columns' },
      { name: 'OOP', icon: 'fas fa-cube' },
    ],
  },
  {
    icon: 'fas fa-brain',
    items: [
      { name: 'OpenAI', icon: 'fas fa-robot' },
      { name: 'Anthropic', icon: 'fas fa-brain' },
      { name: 'Gemini', icon: 'fas fa-gem' },
      { name: 'LangChain', icon: 'fas fa-link' },
      { name: 'MCP', icon: 'fas fa-plug' },
      { name: 'LLM Automation', icon: 'fas fa-wand-magic-sparkles' },
    ],
  },
  {
    icon: 'fas fa-newspaper',
    items: [
      { name: 'WordPress', icon: 'devicon-wordpress-plain colored' },
      { name: 'Drupal 7 & 8', icon: 'devicon-drupal-plain colored' },
      { name: 'Joomla', icon: 'fas fa-newspaper' },
      { name: 'Magento', icon: 'devicon-magento-original colored' },
      { name: 'PrestaShop', icon: 'fas fa-cart-shopping' },
      { name: 'TYPO3', icon: 'fas fa-cube' },
      { name: 'Strapi', icon: 'fas fa-server' },
      { name: 'Ghost', icon: 'fas fa-ghost' },
      { name: 'Sanity', icon: 'fas fa-pen-nib' },
      { name: 'Liferay', icon: 'fas fa-window-maximize' },
      { name: 'Magnolia CMS', icon: 'fas fa-leaf' },
      { name: 'CodeFusion', icon: 'fas fa-code' },
    ],
  },
]
