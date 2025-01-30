import BentoCard from "./BentoCard";

export default function BentoGrid() {
    return (
        <section className="max-w-7xl mx-auto py-16 px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Seamless control</h2>
          <h3 className="text-2xl font-semibold">anytime and anywhere</h3>
          <p className="max-w-2xl mx-auto text-black">
            With Hydrify app you can take full control of your irrigation anytime from anywhere in the world. The
            control and monitoring of your irrigation is at your fingertips. Cloud intelligence, weather data and AI
            updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="grid gap-6 md:col-span-2">
            <BentoCard
              image="/images/image2.jpeg"
              title="Consistent irrigation"
              description="No matter what you grow with Hydrify you'll always achieve consistent results."
              variant="image"
              className="h-[300px]"
            />
            <div className="grid grid-cols-2 gap-6">
              <BentoCard
                title="Feel safe"
                description="Advanced monitoring ensures your garden is always properly watered."
                variant="toggle"
              />
              <BentoCard
                title="Intelligent irrigation"
                description="Smart sensors provide real-time data for optimal watering."
                variant="purple"
              />
            </div>
          </div>
          <div className="grid gap-6">
            <BentoCard
              image="/images/image1.jpeg"
              title="Save 50% of water"
              description="By optimizing the irrigation at the right moment"
              variant="success"
              className="h-[400px]"
            />
            <BentoCard title="Smart Control" description="Take control from anywhere in the world" variant="default" />
          </div>
        </div>
      </section>
    );
}