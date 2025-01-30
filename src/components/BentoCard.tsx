import Image from 'next/image';

export default function BentoCard({
  image,
  title,
  description,
  variant = "default",
  className = "",
}: {
  image?: string
  title: string
  description: string
  variant?: "default" | "success" | "purple" | "toggle" | "image"
  className?: string
}) {
  const variants = {
    default: "bg-gray-50",
    success: "bg-[#0D894F] text-white",
    purple: "bg-[#8A3FFC] text-white",
    toggle: "bg-gray-900 text-white",
    image: "relative overflow-hidden",
  }

  if (variant === "image") {
    return (
      <div className={`rounded-2xl ${variants[variant]} ${className}`}>
        {image && <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 p-6 text-white h-full flex flex-col justify-end">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-white/90">{description}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`rounded-2xl p-6 ${variants[variant]} ${className}`}>
      {image && (
        <div className="aspect-[4/3] relative mb-4">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover rounded-xl" />
        </div>
      )}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        {variant !== "default" && <div className="w-12 h-6 bg-white/20 rounded-full" />}
      </div>
      <p className={variant === "default" ? "text-black" : "text-white/90"}>{description}</p>
    </div>
  )
}