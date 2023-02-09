import { useState } from "react";
import reactLogo from "./assets/react.svg";
import PoemComponent from "./components/Poem";
import { Poem } from "./types/Poem";

function App() {
  const poems: Poem[] = [
    {
      title1: "Santiagetti One.",
      title2: "I'm living in the come down grays.",
      text: "A brightness shone on a fleeting purple wind, its rays geometric. A Symphony of movement twisted and turned in its shade and of it came speeding past me another thought, another glimpse of an unreachable conclusion lost to time and space.\n A trailing mind wandered off onto the concrete pavement of an empty night, an empty city, an empty road. Cars blurring by me, a moving force, not quite so terribly unlike my own, sequestered me, pulling me gently onto a sprouting sidewalk teeming with life and endless shapes -glimmering- all kinds of shapes, all kinds of colours strange to me, unfamiliar.\n A turn around.\n A homeward bounding.\n An elongated dream begun to fade into sunrise.\n A receding tide washed away the night and light and shade and shapes.\n An eternal day is born, of darkened bouquet.\n I'm living in the come down grays.",
    },
    {
      title1: "Santiagetti Two.",
      title2: "A wandering watery wrangle at arms advances.",
      text: "Equilibrium, a pebble perched above another pebble perched above a third. Sun-bathed batches of balanced water-sprinkled stones strewn the causeway of a quiet stream, timeless in form and fashion.Momentum gathers in a gust of wind, clouds close in and clash crumbling into myriad minuscule messengers of summer.A calming chaos begeting change encounters a calmer structure, poised, deep-set, reluctant. Droplets engrossed with the might of nature decend in force cascading from off fortresses of embolden boulders into the furious flow of the rapids below.The clouds abaited, spent, turn tail and scatter, routed they make way for a crimson dusk entwined with the deepest blues of a clear night.The stream, infused with ribbons of purple and red, returns to normalcy as stone sentries, perfumed with a sweetened earthy musk, keep vigil still, perched in perfect balance, sustaining equilibrium.",
    },
    {
      title1: "Santiagetti Three.",
      title2: "One Dead Parrot.",
      text: "I close my eyes and the light still shines through them, images burnt in my retinas, escaping them makes them make themselves present. I close my eyes to face them.A burning oak tree on a barren field. Life now gone where non should been. Ash snows down on me, my throat inflamed with smoke I collapse and drown in white and black and red -briefly- I find my skin aglow. Consumed I rise in a lick of flame. A ship scuttled by my treacherous hands remains afloat. Crewmen lay face down in rising puddles, the wind and waves take hold of splitting wooden beams to make our home their own. Entombed, in Twain, dragged down, I surrender to their will. A harrowing fall, the ground concealed by an expansive field of white and gray. I step forward to find no purchase. Engulfed in an amber hue I shoot down into the rising earth. Diving deep into the spliting fog, my self merges with the quietness surrounding it. I open my eyes to find no purchase, no tree, no ship, no fall. I open my eyes to find no eyes at all.",
    },
    {
      title1: "Santiagetti Four.",
      title2: "Ozymandian Inception",
      text: "I open my mouth to scream and I find a vacant plot of land where my mouth should be of sand where my heart is not I lay and bury myself and rot To strand myself in that sand-waved-sea To ban and banish that ancient thought I close my eyes to cry and I find them locked open still Behind them I'm burried now way too deep To mind them being too dry to spill Themselves on that vacant sand untill, Untill I give up and stop I stop for the drop is steep My eyes and mind separated keep My hands and feet from trying to fulfill The will of that ancient thought.",
    },
  ];
  return (
    <div>
      <h1>A Handful of Poetry</h1>
      <h2>The Santiagetti Collection.</h2>
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
