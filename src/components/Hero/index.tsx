import { HeroModule } from './Hero.module'

const Hero = () => (
  <>
    <HeroModule />
    <form className={HeroModule.form}>
      <div className="container">
        <h2 className={HeroModule.heroTitle}>
          As melhores vagas para tecnologia, design e artes visuais.
        </h2>
      </div>
    </form>
  </>
)

export default Hero
