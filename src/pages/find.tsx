import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Clock, MapPin, Search, UtensilsCrossed } from 'lucide-react';

export function Find() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Find Available Food
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Browse available food donations in your area and help reduce food waste
          while supporting your community.
        </p>
      </section>

      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle>Search Filters</CardTitle>
          <CardDescription>
            Find food donations that match your needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Location
                </label>
                <Input
                  className="mt-2"
                  placeholder="Enter your location"
                  type="text"
                />
              </div>
              <div className="flex-1">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Distance
                </label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select distance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Within 1 km</SelectItem>
                    <SelectItem value="5">Within 5 km</SelectItem>
                    <SelectItem value="10">Within 10 km</SelectItem>
                    <SelectItem value="20">Within 20 km</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Food Type
              </label>
              <Select>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select food type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="cooked">Cooked Food</SelectItem>
                  <SelectItem value="raw">Raw Ingredients</SelectItem>
                  <SelectItem value="packaged">Packaged Food</SelectItem>
                  <SelectItem value="baked">Baked Goods</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Search className="mr-2 h-4 w-4" />
            Search Available Food
          </Button>
        </CardFooter>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Fresh Bread & Pastries</CardTitle>
            <CardDescription>Posted 15 minutes ago</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <UtensilsCrossed className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  20 servings available
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Pickup by 6:00 PM today
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  2.5 km away
                </span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Claim Food</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cooked Meals</CardTitle>
            <CardDescription>Posted 30 minutes ago</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <UtensilsCrossed className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  15 meals available
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Pickup by 7:30 PM today
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  1.8 km away
                </span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Claim Food</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fresh Vegetables</CardTitle>
            <CardDescription>Posted 45 minutes ago</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <UtensilsCrossed className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Various vegetables available
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Pickup by 5:00 PM today
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  3.2 km away
                </span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Claim Food</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}