import React from 'react'

function Loading() {
    return (
        <div>
            <div className="text-center py-10">
                <div className="flex flex-col items-center gap-4">
                    {/* Truck Animation */}
                    <div className="relative">
                        <div className="w-16 h-10 bg-blue-600 rounded-lg relative animate-bounce">
                            {/* Truck cabin */}
                            <div className="absolute top-1 left-1 w-6 h-6 bg-blue-700 rounded"></div>
                            {/* Wheels */}
                            <div className="absolute -bottom-2 left-2 w-4 h-4 bg-gray-800 rounded-full animate-spin"></div>
                            <div className="absolute -bottom-2 right-2 w-4 h-4 bg-gray-800 rounded-full animate-spin"></div>
                            {/* Exhaust */}
                            <div className="absolute -left-1 top-2 w-1 h-1 bg-gray-400 rounded-full animate-ping"></div>
                        </div>
                        {/* Road */}
                        <div className="w-24 h-1 bg-gray-300 dark:bg-gray-600 mt-3 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-1/3 animate-pulse rounded-full"></div>
                        </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">Delivering your order...</p>
                </div>
            </div>
        </div>
    )
}

export default Loading