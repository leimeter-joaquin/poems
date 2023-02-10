import { useState } from "react";
import reactLogo from "./assets/react.svg";
import PoemComponent from "./components/Poem";
import { Poem } from "./types/Poem";
import styles from "./App.css";

function App() {
  const poems: Poem[] = [
    {
      title1: "Santiagüetti I.",
      title2: "I'm living in the come down grays.",
      text: "A brightness shone on a fleeting purple wind, its rays geometric. A Symphony of movement twisted and turned in its shade and of it came speeding past me another thought, another glimpse of an unreachable conclusion lost to time and space.\n A trailing mind wandered off onto the concrete pavement of an empty night, an empty city, an empty road. Cars blurring by me, a moving force, not quite so terribly unlike my own, sequestered me, pulling me gently onto a sprouting sidewalk teeming with life and endless shapes -glimmering- all kinds of shapes, all kinds of colours strange to me, unfamiliar.\n A turn around.\n A homeward bounding.\n An elongated dream begun to fade into sunrise.\n A receding tide washed away the night and light and shade and shapes.\n An eternal day is born, of darkened bouquet.\n I'm living in the come down grays.",
    },
    {
      title1: "Santiagüetti II.",
      title2: "A wandering watery wrangle at arms advances.",
      text: "Equilibrium, a pebble perched above another pebble perched above a third. Sun-bathed batches of balanced water-sprinkled stones strewn the causeway of a quiet stream, timeless in form and fashion.\n Momentum gathers in a gust of wind, clouds close in and clash crumbling into myriad minuscule messengers of summer.\n A calming chaos begeting change encounters a calmer structure, poised, deep-set, reluctant. Droplets engrossed with the might of nature decend in force cascading from off fortresses of embolden boulders into the furious flow of the rapids below.\nThe clouds abaited, spent, turn tail and scatter, routed they make way for a crimson dusk entwined with the deepest blues of a clear night.\n The stream, infused with ribbons of purple and red, returns to normalcy as stone sentries, perfumed with a sweetened earthy musk, keep vigil still, perched in perfect balance, sustaining equilibrium.",
    },
    {
      title1: "Santiagüetti III.",
      title2: "A hitchhiker's Day in the Sun",
      text: "Unspotted my self contained prosetion proceeds onwards always onwards through misty valleys, cross pristine rivers into coming rays of red.\n A day, a night, a day again drowned in black, a stick, some smoke, warmth and light. The world reels just beyond the crackles and sparks mingling in a shroud of gray.\n My mind awakens heralding the lightening of its colour palette as the first rays of day-break green the rustling leavery, former black masses dancing in the embers of a dwindling fire, bewildering me in my wilderness. Onyx turned cerulean, a helitrope pale aureate hue arises into morning \n A night, a day, a night again smothered in light, a gust of wind carries away the ashen scent of my former home.\n Out ribbons of gold and violet proceeds my prosetion, my boots cleansed by the water my mind cleared of its mist. Back I return pristine, unspotted.",
    },
    {
      title1: "Santiagüetti IV.",
      title2: "A blind Watcher on the Lookout",
      text: "I sit at the merging point of two imposible paths, unmoving unnerved unsettled settling for a choice that is not my own, choosing for others to do my choosing for me. I'm sitting, crosslegged, staring blindly at the lands between the roads covered in thickets and greenery, hiding spots for crawlers from all walks of life. Time deadens in my mind as I study each path in turn.\n One of them ends abruptly in a gaping chasm, no way forward, one way down, a smoldering void, endless, inviting me, enticing me with the fictitious warmth of absolution, I see myself falling, darkness swallows the earth my vision narrowing I float in a vacuum devoid of senses, and as the last remaining trace of consciousness abandons me I find myself atop the precipice walking backwards, crosslegged, I sit. I'm still sitting I'm not going backwards.\n Deep breath \n A vage figure scurries to the edge of my sight, I follow its ungainly gait onto the first cobbles of the winding road ahead. Its glance meets my gaze as it scuttles onwards, malformed, malnourished, malcontent, vermin. A few dozen creatures emerge from the undergrowth to follow in its crooked footsteps and as my eyes follow their misshapen surge my skin grows pale. Frown wrinkled like a cramped leg, eyes locked open I stare at the second path for far too long.\n Unmoving unnerved unsettled I settle for the place that is now my own. I'm not going forwards, I'm wasting away on the meeting point of the crossroads.\n",
    },
    {
      title1: "Santiagüetti V.",
      title2: "Whats Up? Not Me.",
      text: "Down, shriveling, I contract and compress. Being chipped away under little pressure, melting in room temperature, evaporating in chill air I disassemble, crumbling into disarray, dismally dismissing my sense of self, sensing senseless sensations I cease to be to then regain my strength. Pulled together from thin air I reassemble, solidified from a molten state, reshapen and restructured I look up to find myself again and begin my ascent, clutched to the side of the precipice I climb, blinded by the rising sun my hand slips. Down. Forever down, doomed to be pulled by gravity away from my summit into the black of night. Down untill nothing is up anymore. Down from dawn to dusk my fall unbroken, my will shattered, I'm smashed against the wall of rock now to either side of me, a narrowing funnel, razor sharp. My skin ripped apart, my fingers leave me one by one, my hands fly away from me, I'm abandoned by my arms. I'm slashed into myst, a crimson wind descending, being sucked in by the heart of the earth, a smoldering harth burning lightless. My cloud tightens into rain, droplets scatter dropping still, further down, now away from the earth. Down into the void of nil, a spectacularly null nothingness of presencelessly black array. The earth diminishes in the distance, Condensed into a blue dot to then fade away entirely. I freeze solid, composed of my last remaining droplet, a minuscule pallid pink grain of grit. With no reference in sight, down becomes forward, I curtail my descent to advance in the same direction. Pallid, pink, Painless, peacefully presenceless yet precent I proceed, onwards into nothing.",
    },
    {
      title1: "Santiagüetti VI.",
      title2: "Ozymandian Inception",
      text: "I open my mouth to scream and I find a vacant plot \n of land where my mouth should be\n of sand where my heart is not.\n I lay and bury myself and rot\n To strand myself in that sand-waved-sea\n To ban and banish that ancient thought.\n I close my eyes to cry and I find them locked open still\n Behind them I'm burried now way too deep\n To mind them being too dry to spill\n Themselves on that vacant sand untill,\n Untill I give up and stop\n I stop for the drop is steep\n My eyes and mind separated keep\n My hands and feet from trying to fulfill\n The will of that ancient thought.",
    },
    {
      title1: "Santiagüetti VII.",
      title2: "One Dead Parrot.",
      text: "I close my eyes and the light still shines through them, images burnt in my retinas, escaping them makes them make themselves present. I close my eyes to face them.\nA burning oak tree on a barren field. Life now gone where non should been. Ash snows down on me, my throat inflamed with smoke I collapse and drown in white and black and red -briefly- I find my skin aglow. Consumed I rise in a lick of flame.\n A ship scuttled by my treacherous hands remains afloat. Crewmen lay face down in rising puddles, the wind and waves take hold of splitting wooden beams to make our home their own. Entombed, in Twain, dragged down, I surrender to their will.\n A harrowing fall, the ground concealed by an expansive field of white and gray. I step forward to find no purchase. Engulfed in an amber hue I shoot down into the rising earth. Diving deep into the spliting fog, my self merges with the quietness surrounding it.\n I open my eyes to find no purchase, no tree, no ship, no fall.\n I open my eyes to find no eyes at all.",
    },
    {
      title1: "Santiagüetti VIII.",
      title2: "A Single Chance For A Breath of Air",
      text: "A butterfly descends mid-swing \n eluding swatter, man, and shouts. \n she rises back again to bring \n herself away from fury-bouts. \n A glass reflects her light-blue wings \n to smash against a wall and spread \n Some rain-fall-like erratic streams \n of watery, elusive dread. \n Left and right she sways and twirls \n into another room to bring \n Two gazes on towards herself \n and hope then not another drink. \n A mason jar at lighting speed \n entraps our butterfly. Inside \n she then looked left to tightened lid. \n ensnared in place alone to die. \n That's quite a catch, old john there said \n And Mary, would you be so kind \n As to abscond with me, and left \n so hastily it bogs the mind. \n Gunshots blasted door and wall \n and windows then and all the rest \n as Marianne indeed abscond \n with bug and jar close to her chest. \n god damm you all young sam's request \n Bellowed though the morning mist \n You will in turn turn down to rest \n And twice, you'll find, I won't have missed \n A butterfly grows pale and weak \n entombed, bereft of life and limb\n a wingless bug cocoonless, meak, \n shrinks down and dies, the night grows dim.",
    },
    {
      title1: "Santiagüetti IX.",
      title2: "Clawed, Bit and Bitter",
      text: "A little couch now full of holes \n Sits quietly upon a terrace.\n The holes been made by lonely claws \n Match holes bestowed -quite tenuous- \n By one whose love unfound now lost \n Bore down into the innards \n Of seat and bace and back and most \n Of what's now left -in my words- \n A fucking mess of wood and spring \n Beside our lonely couch outside \n To rot as well as love so dim \n Alas anew was hard to find.\n To love and find love with the one \n Whose love finds love in you\n Is harder still if neither one \n Knows of the other two. \n The one whose love was faint and cold \n Cared for by one of kindred kind.\n And one whose lonileness enthralled  \n The same akin caretaker's mind. \n Conjoined by carer's care, what's more, \n By aftermath of rage released, \n Unmet by parted ways before \n Their paths entwined and gave them peace. \n But truth be told in mind and heart, \n In life and love, in death apart,\n What's mine or yours and full of holes, \n  or Strewn aghast across three souls \n Is better left to rot and not to start.",
    },
    {
      title1: "Santiagetti X.",
      title2: "Fallout the Fiendishly Friendly Fish",
      text: "There once swam around a little fish its tophat made of straw. \n It came around a little peckish and surfaced onto shore. \n It walked around a little bit and clawed its sleeping pray. \n Around it went down to the pit where all the others layed. \n My dudes! He said aloof with glee\n  THE FEAST IS ON! He shouted. \n And guts rained down on to the kids, \n The palid gits departed. \n Around they went till one by one  \n Were caught and split and eaten. \n The fish engrossed and feeling done, \n He surely can't be beaten, \n Made it's way back to the shore \n Where he saw the mushroom clouds \n AND NOW HE TOO IS FUCKING DEAD \n  ALONG WITH EVERYTHING AROUND.",
    },
    {
      title1: "Santiagetti XI.",
      title2: "My Love Lividing",
      text: "And if you choose to sing the blues \n Ignore he who here lays \n Atrophied, bereft of use \n Oh honey, I'm living in the come down grays. \n And if it's true they'll say to you \n Save yourself its here to stay \n So save yourself because it's true  \n Oh honey, I'm coming down a little gray. \n I'm yet to rise to then descend again \n You're yet to look upon my grave  \n In living form I'm dead my friend \n Oh honey, there's nothing left of me but gray. \n And still you sing that song you sung \n And still you try and try in vain \n Eluded still by goings on \n Oh honey, face up I've drowned in rain.",
    },
  ];
  return (
    <div>
      <h1 className={styles.h1}>A Handful of Poetry</h1>
      <h2 className={styles.h2}>The Santiagetti Collection.</h2>
      {poems.map((poem) => {
        return (
          <PoemComponent
            title1={poem.title1}
            title2={poem.title2}
            text={poem.text}
          />
        );
      })}
    </div>
  );
}

export default App;
