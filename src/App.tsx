import { useState } from "react";
import reactLogo from "./assets/react.svg";
import PoemComponent from "./components/Poem";
import { Poem } from "./types/Poem";

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
      text: "Unspotted my self contained prosetion proceeds onwards always onwards through misty valleys, cross pristine rivers into coming rays of red.\n A day, a night, a day again drowned in black A stick, some smoke, warmth and light.The world reels just beyond the crackles and sparks mingling in a shroud of gray.\n My mind awakens heralding the lightening of its colour palette as the first rays of day-break green the rustling leavery, former black masses dancing in the embers of a dwindling fire, bewildering me in my wilderness. Onyx turned cerulean, a helitrope pale aureate hue arises into morning \n A night, a day, a night again smothered in light, a gust of wind carries away the ashen scent of my former home.\n Out ribbons of gold and violet proceeds my prosetion, my boots cleansed by the water my mind cleared of its mist. Back I return pristine, unspotted.",
    },
    {
      title1: "Santiagüetti IV.",
      title2: "Ozymandian Inception",
      text: "I open my mouth to scream and I find a vacant plot\n of land where my mouth should be\n of sand where my heart is not.\n I lay and bury myself and rot\n To strand myself in that sand-waved-sea\n To ban and banish that ancient thought.\n I close my eyes to cry and I find them locked open still\n Behind them I'm burried now way too deep\n To mind them being too dry to spill\n Themselves on that vacant sand untill,\n Untill I give up and stop\n I stop for the drop is steep\n My eyes and mind separated keep\n My hands and feet from trying to fulfill\n The will of that ancient thought.",
    },
    {
      title1: "Santiagüetti v.",
      title2: "One Dead Parrot.",
      text: "I close my eyes and the light still shines through them, images burnt in my retinas, escaping them makes them make themselves present. I close my eyes to face them.\nA burning oak tree on a barren field. Life now gone where non should been. Ash snows down on me, my throat inflamed with smoke I collapse and drown in white and black and red -briefly- I find my skin aglow. Consumed I rise in a lick of flame.\n A ship scuttled by my treacherous hands remains afloat. Crewmen lay face down in rising puddles, the wind and waves take hold of splitting wooden beams to make our home their own. Entombed, in Twain, dragged down, I surrender to their will.\n A harrowing fall, the ground concealed by an expansive field of white and gray. I step forward to find no purchase. Engulfed in an amber hue I shoot down into the rising earth. Diving deep into the spliting fog, my self merges with the quietness surrounding it.\n I open my eyes to find no purchase, no tree, no ship, no fall.\n I open my eyes to find no eyes at all.",
    },
    {
      title1: "Santiagüetti VI.",
      title2: "",
      text: "",
    },
    {
      title1: "Santiagüetti VII.",
      title2: "",
      text: "",
    },
    {
      title1: "Santiagüetti VIII.",
      title2: "",
      text: "",
    },
    {
      title1: "Santiagetti IX.",
      title2: "",
      text: "",
    },
    {
      title1: "Santiagetti X.",
      title2: "",
      text: "",
    },
    {
      title1: "Santiagetti XI.",
      title2: "",
      text: "",
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
