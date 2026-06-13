import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/sections/Hero'
import { WhoIsLumi } from '@/components/sections/WhoIsLumi'
import { WhyLumiExists } from '@/components/sections/WhyLumiExists'
import { WhereLumiLives } from '@/components/sections/WhereLumiLives'
import { ImproveLumiLife } from '@/components/sections/ImproveLumiLife'
import { OutfitSelection } from '@/components/sections/OutfitSelection'
import { OutfitEvaluation } from '@/components/sections/OutfitEvaluation'
import { FashionBattles } from '@/components/sections/FashionBattles'
import { NotPayToWin } from '@/components/sections/NotPayToWin'
import { MediaCharacter } from '@/components/sections/MediaCharacter'
import { Waitlist } from '@/components/sections/Waitlist'
import { FAQ } from '@/components/sections/FAQ'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="overflow-hidden">
        <Hero />
        <WhoIsLumi />
        <WhyLumiExists />
        <WhereLumiLives />
        <ImproveLumiLife />
        <OutfitSelection />
        <OutfitEvaluation />
        <FashionBattles />
        <NotPayToWin />
        <MediaCharacter />
        <Waitlist />
        <FAQ />
        <Footer />
      </main>
    </>
  )
}
