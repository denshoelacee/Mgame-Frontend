import { bottomNav } from "@/constants/navigation"

function Sidebar() {
    return (
        <aside className={`hidden lg:flex flex-col h-screen transition-all duration-300 w-70 bg-white `}>
            {/* Header */}

            {/* Navigation */}
            <ul className="flex-1 space-y-2 p-4">
                {bottomNav
                    .filter((item) => item.id !== "manoy")
                    .map((item) => (
                        <li key={item.id}>
                            <button
                                className="flex w-full items-center gap-4 rounded-lg p-3 transition hover:bg-gray-100"
                            >
                                <img
                                    src={item.icon}
                                    alt={item.label}
                                    className="h-8 w-8 object-contain"
                                />
                                <span className="font-medium text-sm">
                                    {item.label}
                                </span>
                            </button>
                        </li>
                    ))}
            </ul>
        </aside>
    )
}

export default Sidebar