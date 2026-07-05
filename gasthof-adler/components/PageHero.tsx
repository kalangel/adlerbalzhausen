import Image from "next/image";

export default function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-wood text-cream">
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wood/80 to-wood/30" />
        </>
      )}
      <div className="relative mx-auto max-w-[1200px] px-4 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-semibold sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/90">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
