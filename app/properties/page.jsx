import PropertyCard from "@/components/PropertyCard";
import properties from "@/properties.json";

const page = () => {
  return (
    <section class="px-4 py-6">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-blue-500 mb-6 text-center">
          Recent Properties
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
