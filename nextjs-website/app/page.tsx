import HeadingWithIcon from "@/components/HeadingWithIcon";
import Slider from "@/components/Slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BadgePlus, Calendar, ChromeIcon, GiftIcon, ImageIcon, LanguagesIcon, SettingsIcon } from 'lucide-react';

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-hero place-items-center text-center gap-10 my-10">
        <div className="text-lg space-y-6 max-w-[337px]">
          <p>
            A beautiful, customisable New Tab page for Firefox, Chrome, and Edge.
          </p>
          <p>
            <strong>100% free.</strong> No subscriptions. No ads.
          </p>
          <div className="space-y-4">
            <Button size='lg' className="bg-green-600 rounded-full text-lg font-semibold text-white hover:bg-green-600/90">
              <ChromeIcon className="mr-2" /> Add to Chrome
            </Button>
            <p className="text-blue-500 text-sm font-bold cursor-pointer">Try web version</p>
          </div>
        </div>
        <Slider />
      </section>
      <section className="max-w-3xl mt-12 pt-5 mx-auto space-y-20">
        <h1 className="text-3xl font-bold text-blue-500 text-center">Features</h1>
        <div className="flex flex-col space-y-4 text-lg">
          <HeadingWithIcon label="Deep customisation" icon={SettingsIcon} />
          <p>
            Transform your New Tab page to something beautiful and yours. Tabliss offers hundreds of customisation options to create a New Tab page unique to you.
          </p>
        </div>
        <div className="flex flex-col space-y-4 text-lg">
          <HeadingWithIcon label="Tonnes of powerful widgets" icon={Calendar} />
          <p>
            Tabliss comes with tonnes of useful widgets to help you with everything from productivity to inspiration, they can even check your live NBA scores.
          </p>
          <ul className="list-inside list-disc ml-4 text-sm">
            <li>
              Real-time weather conditions
            </li>
            <li>
              clock in analogue, digital, or quotes from literature
            </li>
            <li>
              Greetings that change over the course of the day
            </li>
            <li>
              Inspiring daily quotes (or not inspiring, there are categories)
            </li>
            <li>
              Todo lists to keep track of your tasks
            </li>
            <li>
              Quick links/speed dial for your favourite websites
            </li>
            <li>
              Search box, work hours, and many more…
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4 text-lg">
          <HeadingWithIcon label="Millions of beautiful backgrounds" icon={ImageIcon} />
          <p>
            Tabliss backgrounds are powered by the huge libraries of Unsplash and GIPHY, offering millions of backgrounds with powerful search options. Or just use your own.
          </p>
          <ul className="list-inside list-disc ml-4 text-sm">
            <li>
              Millions of photos with Unsplash
            </li>
            <li>
              Millions of animated gifs with GIPHY
            </li>
            <li>
              Solid colours and colour gradients
            </li>
            <li>
              Your own pictures
            </li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4 text-lg">
          <HeadingWithIcon label="Free, completely free" icon={GiftIcon} />
          <p>
            Tabliss is 100% free. No ads. No subscriptions. No data mining.
          </p>
          <p className="text-sm">
            Tabliss is open source, built by volunteers and users with the goal of making the best New Tab page there is. You won't find any paywalls here.
          </p>
        </div>
        <div className="flex flex-col space-y-4 text-lg">
          <HeadingWithIcon label="Translated to over 40 languages" icon={LanguagesIcon} />
          <p className="text-sm">
            Tabliss greets you in your language. Thanks to the wonderful community, the Tabliss dashboard has been translated to over 40 languages.
          </p>
        </div>
        <Separator />
      </section>
    </>
  )
}
