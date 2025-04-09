import { Card, CardContent } from '@/components/ui/card';
import {
  Award,
  Heart,
  Leaf,
  ShieldCheck,
  Users,
  Utensils,
} from 'lucide-react';

export function About() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          About FoodShare
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          We're on a mission to reduce food waste and fight hunger by connecting
          surplus food with those who need it most.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardContent className="pt-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Our Mission</h3>
            <p className="mt-2 text-muted-foreground">
              To create a sustainable solution for food redistribution, connecting
              surplus food from restaurants with people and organizations in need.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Leaf className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Environmental Impact</h3>
            <p className="mt-2 text-muted-foreground">
              By reducing food waste, we're helping to minimize environmental
              impact and create a more sustainable food system.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter">Why Choose Us</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex items-start space-x-4">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">Safe & Secure</h3>
              <p className="text-muted-foreground">
                All food donations follow strict safety guidelines
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Users className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">Community Focused</h3>
              <p className="text-muted-foreground">
                Building stronger local communities
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Award className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">Quality Assured</h3>
              <p className="text-muted-foreground">
                High standards for all food donations
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-lg bg-muted p-8">
        <div className="mx-auto max-w-3xl text-center">
          <Utensils className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 text-3xl font-bold tracking-tighter">
            Join Our Mission
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Whether you're a restaurant looking to donate food or an organization
            helping those in need, we'd love to have you join our community.
          </p>
        </div>
      </section>
    </div>
  );
}