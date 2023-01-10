interface ManifestoTitleProps {
    title: string
}

export default function ManifestoTitle({ title }: ManifestoTitleProps) {
    return (
        <h1 className="text-3xl font-bold text-center text-gray-800">{title}</h1>
    )
}