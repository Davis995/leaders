export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <section className="pt-16 lg:pt-24 pb-12">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <p className="text-sm font-medium text-accent uppercase tracking-wider">{eyebrow}</p>
        <h1 className="mt-4 text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl leading-[1.05]">{title}</h1>
        {description && <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{description}</p>}
      </div>
    </section>
  );
}