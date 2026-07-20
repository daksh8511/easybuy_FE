import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";

const ProductsPage = () => {
  return (
    <div className="container mx-auto py-8 mt-20">
      <div className="grid grid-cols-12 gap-6">
        {/* Filter Sidebar */}
        <Card className="col-span-12 h-fit lg:col-span-3">
          <CardContent className="space-y-8 p-6">
            <h2 className="text-2xl font-bold">Filters</h2>

            {/* Category */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Category</h3>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="electronics" />
                  <Label htmlFor="electronics">Electronics</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="fashion" />
                  <Label htmlFor="fashion">Fashion</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="audio" />
                  <Label htmlFor="audio">Audio</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="home" />
                  <Label htmlFor="home">Home & Living</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="sports" />
                  <Label htmlFor="sports">Sports</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="beauty" />
                  <Label htmlFor="beauty">Beauty</Label>
                </div>
              </div>
            </div>

            {/* Sort */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Sort By</h3>

              <RadioGroup>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="high" id="high" />
                  <Label htmlFor="high">Price: High to Low</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="low" id="low" />
                  <Label htmlFor="low">Price: Low to High</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        {/* Products */}
        <div className="col-span-12 lg:col-span-9">
          <h2 className="mb-6 text-2xl font-bold">All Products</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden">
                <div className="h-56 bg-muted" />

                <CardContent className="space-y-4 p-4">
                  <div>
                    <h3 className="text-lg font-semibold">Product Name</h3>
                    <p className="text-sm text-muted-foreground">
                      Short product description goes here.
                    </p>
                  </div>

                  <p className="text-2xl font-bold">$99.99</p>

                  <Button className="w-full">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;