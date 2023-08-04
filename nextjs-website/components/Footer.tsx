import { Button } from "@/components/ui/button";
import { BadgePlus } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <section className="grid grid-cols-hero place-items-center text-center gap-10 my-10">
        <div className="pb-16 space-y-6">
          <h2 className="text-2xl font-bold text-center">Add Tabliss to your browser</h2>

          <div className="flex items-center justify-evenly gap-3">
            <Button size='lg' className="bg-orange-600 text-white hover:bg-orange-600/90 rounded-full w-full">
              <BadgePlus className="h-6 w-6 mr-2" />
              Firefox
            </Button>
            <Button size='lg' className="bg-green-600 text-white hover:bg-green-600/90 rounded-full w-full">
              <BadgePlus className="h-6 w-6 mr-2" />
              Chrome
            </Button>
            <Button size='lg' className="bg-blue-600 text-white hover:bg-blue-600/90 rounded-full w-full">
              <BadgePlus className="h-6 w-6 mr-2" />
              Micosoft Edge
            </Button>
          </div>
        </div>

      </section>

      <footer className="bg-zinc-100 text-center dark:bg-zinc-800 flex items-center justify-center py-10">
        <div className="flex flex-col space-y-4 text-center">
          <p>Greeting nearly 100,000 users every day.</p>
          <p>© 2023</p>
        </div>
      </footer>
    </>
  )
}
