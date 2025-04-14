export default function PlaceholderSection({ text }: { text: string }) {
    return (
        <section className="min-h-96 flex items-center justify-center border-2 border-dashed border-gray-400">
            <h4 className="text-2xl font-bold text-center">{text}</h4>
        </section>
    )
}