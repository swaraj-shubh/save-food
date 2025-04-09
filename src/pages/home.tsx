import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Search, Timer, Utensils } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-12">
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Share Food, Share Love
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Connecting surplus food with those in need. Join our mission to reduce
          food waste and fight hunger in our community.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg">
            <Heart className="mr-2 h-5 w-5" />
            Donate Food
          </Button>
          <Button variant="outline" size="lg">
            <Search className="mr-2 h-5 w-5" />
            Find Food
          </Button>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Utensils className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">List Surplus Food</h3>
            <p className="mt-2 text-muted-foreground">
              Restaurants and food businesses can easily list their surplus food
              and set pickup times.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Timer className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Real-time Updates</h3>
            <p className="mt-2 text-muted-foreground">
              Get instant notifications about available food in your area and
              claim it immediately.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Make a Difference</h3>
            <p className="mt-2 text-muted-foreground">
              Help reduce food waste while supporting those in need in your local
              community.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="rounded-lg bg-muted p-8 md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Join Our Growing Community
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            We've helped connect hundreds of restaurants with local organizations,
            reducing food waste and feeding those in need.
          </p>
          <Button className="mt-6" size="lg">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}