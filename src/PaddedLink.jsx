

export function PaddedLink({ href, target, children }) {
    return (
        <a href={href} target={target} className="p-5 bg-blue-900 text-gray-200 font-semibold hover:bg-blue-500 transition-all duration-300 cursor-pointer">
            {children}
        </a>
    )
}