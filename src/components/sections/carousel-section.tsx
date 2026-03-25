import { motion } from "framer-motion"

const portfolioItems = [
  "https://cdn.poehali.dev/projects/f16b80dc-923f-4a9d-b2cf-886599d3e1f7/files/9b089a6d-ff15-4f3b-95fe-090d3a886c14.jpg",
  "https://cdn.poehali.dev/projects/f16b80dc-923f-4a9d-b2cf-886599d3e1f7/files/71ab8fa4-a7f9-4ca9-a2c0-5056b2359ce5.jpg",
  "https://cdn.poehali.dev/projects/f16b80dc-923f-4a9d-b2cf-886599d3e1f7/files/c81276ec-a758-4e3d-8902-cfd7f8d98579.jpg",
  "https://cdn.poehali.dev/projects/f16b80dc-923f-4a9d-b2cf-886599d3e1f7/files/38e79943-78c6-4011-a1a5-4b008bcf4be5.jpg",
  "https://cdn.poehali.dev/projects/f16b80dc-923f-4a9d-b2cf-886599d3e1f7/files/9eb196f3-66fa-4765-a49f-89f53a352d0b.jpg",
  "https://cdn.poehali.dev/projects/f16b80dc-923f-4a9d-b2cf-886599d3e1f7/files/be1d23b1-52ab-48b4-8964-224ba6732398.jpg",
]

export function CarouselSection() {
  // Duplicate for seamless loop
  const items = [...portfolioItems, ...portfolioItems]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Создано авторами для авторов.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-2xl"
              data-clickable
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Пример портфолио ${(i % portfolioItems.length) + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}