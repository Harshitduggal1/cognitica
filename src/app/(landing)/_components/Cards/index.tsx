import { FeatureCard } from './feature-card';
import { featuresList } from './features-list';

export function Features() {
  return (
    <div className="bg-black py-[72px] text-white sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">
          Everything you need
        </h2>
        <div className="mx-auto max-w-xl">
          <p className="mt-5 text-center text-xl text-white/70">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuresList.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} href={'/pricing'} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;