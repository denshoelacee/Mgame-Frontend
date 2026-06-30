import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

const slotImages = [
  '/assets/images/JDB017.png',
  '/assets/images/JDB221.png',
  '/assets/images/JDB035.png',
  '/assets/images/JDB063.png',
  '/assets/images/JDB064.png',
  '/assets/images/JDB066.png',
  '/assets/images/JDB069.png',
  '/assets/images/JDB086.png',
  '/assets/images/JDB088.png',
  '/assets/images/JDB089.png',
  '/assets/images/JDB135.png',
  '/assets/images/JDB140.png',
  '/assets/images/JDB144.png',
  '/assets/images/JDB160.png',
  '/assets/images/JDB175.png',
  '/assets/images/JDB176.png',
  '/assets/images/JDB181.png',
  '/assets/images/JDB221.png',
  '/assets/images/JDB236.png',
  '/assets/images/JDB175.png',
  '/assets/images/JDB1.png',
  '/assets/images/JDB2.png',
  '/assets/images/JDB3.png',
  '/assets/images/JDB089.png'
]

function SlotViewAll() {
    const navigate = useNavigate();
    const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

    return (

        <div className="pb-24">
            {/* Carousel */}
            <div className="w-full max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-2 gap-2">
                    <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => navigate('/e-casino')}
                        className="bg-[var(--secondary-color)] text-[var(--primary-color)] border-none hover:bg-[var(--secondary-color)]/90"
                    >
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        Back
                    </Button>
                    <h1 className="text-[var(--secondary-color)] bg-[var(--primary-color)] py-2 px-2 w-full rounded-lg font-bold text-sm flex justify-center">
                        Slots
                    </h1>
                </div>

                {/* Images */}
                <div className="mt-2">
                    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2">
                        {slotImages.map((image, index) => (
                            <div
                                key={index}
                                className="relative w-full aspect-[3/3] cursor-pointer group overflow-hidden rounded-lg"
                                onClick={() => setIsComingSoonOpen(true)}
                            >
                                <img
                                    src={image}
                                    alt={`Slot Game ${index + 1}`}
                                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none z-10 animate-shine" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {isComingSoonOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setIsComingSoonOpen(false)}>
                    <div className="bg-[var(--primary-color)] p-6 rounded-lg text-[var(--secondary-color)]" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-xl font-bold mb-2">Coming Soon</h2>
                        <p className="mb-4">This game will be available soon!</p>
                        <Button onClick={() => setIsComingSoonOpen(false)}>Close</Button>
                    </div>
                </div>
            )}
        </div>

    )
}

export default SlotViewAll