import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Search, Timer, Utensils } from 'lucide-react';

export function Home() {
  return (
    <div className="w-full space-y-12">
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter text-purple-800 sm:text-5xl md:text-6xl">
          Share Food, Share Love
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Connecting surplus food with those in need. Join our mission to reduce
          food waste and fight hunger in our community.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <Button size="lg" className='bg-purple-600 '>
            <Heart className="w-5 h-5 mr-2" />
            Donate Food
          </Button>
          <Button variant="outline" size="lg">
            <Search className="w-5 h-5 mr-2" />
            Find Food
          </Button>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
              <Utensils className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-purple-600">List Surplus Food</h3>
            <p className="mt-2 text-muted-foreground">
              Restaurants and food businesses can easily list their surplus food
              and set pickup times.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
              <Timer className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-purple-600">Real-time Updates</h3>
            <p className="mt-2 text-muted-foreground">
              Get instant notifications about available food in your area and
              claim it immediately.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-purple-600">Make a Difference</h3>
            <p className="mt-2 text-muted-foreground">
              Help reduce food waste while supporting those in need in your local
              community.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="p-8 rounded-lg bg-muted md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Join Our Growing Community
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            We've helped connect hundreds of restaurants with local organizations,
            reducing food waste and feeding those in need.
          </p>
          <Button className="mt-6 bg-purple-600" size="lg">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}