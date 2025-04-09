import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Clock, MapPin, UtensilsCrossed } from 'lucide-react';
import { useForm } from 'react-hook-form';

export function Donate() {
  const form = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Donate Surplus Food
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          List your surplus food to help reduce waste and support those in need.
          Every donation makes a difference.
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
              <UtensilsCrossed className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">List Food Details</h3>
            <p className="mt-2 text-muted-foreground">
              Provide information about the food items you wish to donate.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Set Pickup Time</h3>
            <p className="mt-2 text-muted-foreground">
              Choose a convenient time window for food pickup.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Location Details</h3>
            <p className="mt-2 text-muted-foreground">
              Provide pickup location information for easy coordination.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Donation Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="foodName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Food Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Fresh Bread, Cooked Meals" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Number of servings" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Food Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select food type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="cooked">Cooked Food</SelectItem>
                        <SelectItem value="raw">Raw Ingredients</SelectItem>
                        <SelectItem value="packaged">Packaged Food</SelectItem>
                        <SelectItem value="baked">Baked Goods</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Provide details about the food items"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Include any dietary information or allergens
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pickupTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pickup Time</FormLabel>
                    <FormControl>
                      <Input type="datetime-local" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                List Food Donation
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}