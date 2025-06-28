"use client"

import { useEffect, useState, useContext } from "react"
import { AuthContext } from "../../Contexts/AuthContext/AuthContext"
import Loading from "../../components/Loading"
import { FaTrash, FaChevronDown, FaChevronUp, FaBox, FaCalendarAlt, FaDollarSign, FaCreditCard } from "react-icons/fa"
import Swal from "sweetalert2"
import axios from "axios"

function MyParcels() {
    const { user } = useContext(AuthContext)
    const [parcels, setParcels] = useState([])
    const [loading, setLoading] = useState(true)
    const [expandedId, setExpandedId] = useState(null)

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/parcels?userEmail=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setParcels(data)
                    setLoading(false)
                })
                .catch((err) => {
                    console.error(err)
                    setLoading(false)
                })
        }
    }, [user])

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "This parcel will be deleted permanently!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        });

        if (result.isConfirmed) {
            try {
                const response = await axios.delete(`http://localhost:5000/parcels/${id}`);
                if (response.data.success) {
                    setParcels((prev) => prev.filter((parcel) => parcel._id !== id));
                    Swal.fire('Deleted!', 'Your parcel has been deleted.', 'success');
                } else {
                    Swal.fire('Error!', 'Failed to delete the parcel.', 'error');
                }
            } catch (error) {
                console.error(error);
                Swal.fire('Error!', 'Something went wrong while deleting.', 'error');
            }
        }
    };
    const toggleSeeMore = (id) => {
        setExpandedId(expandedId === id ? null : id)
    }

    if (loading) return <Loading />

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
                {/* Header Section - Fully Responsive */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-3 sm:mb-4">
                        <FaBox className="text-lg sm:text-xl md:text-2xl text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2 px-4">
                        My Parcels
                    </h2>
                    <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
                </div>

                {parcels.length === 0 ? (
                    <div className="text-center py-12 sm:py-16 px-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-100 rounded-full mb-4 sm:mb-6">
                            <FaBox className="text-2xl sm:text-3xl text-gray-400" />
                        </div>
                        <p className="text-lg sm:text-xl text-gray-500 font-medium mb-2">No parcels found.</p>
                        <p className="text-sm sm:text-base text-gray-400">Your parcels will appear here once you create them.</p>
                    </div>
                ) : (
                    <div className="space-y-4 sm:space-y-6">
                        {parcels.map((parcel) => (
                            <div
                                key={parcel._id}
                                className="group bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                            >
                                {/* Card Header with Gradient */}
                                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-0.5 sm:p-1">
                                    <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6">
                                        <div className="flex flex-col space-y-4 sm:space-y-6">
                                            {/* Title Section - Mobile First */}
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                                                <div className="flex items-center gap-2 sm:gap-3">
                                                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg flex-shrink-0">
                                                        <span className="text-base sm:text-xl">📦</span>
                                                    </div>
                                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors break-words">
                                                        {parcel.parcelTitle || "Untitled Parcel"}
                                                    </h3>
                                                </div>

                                                {/* Action Buttons - Mobile Optimized */}
                                                <div className="flex flex-row sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                                                    <button
                                                        onClick={() => toggleSeeMore(parcel._id)}
                                                        className="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 text-slate-700 rounded-lg border border-slate-300 transition-all duration-200 hover:shadow-md font-medium text-xs sm:text-sm flex-1 sm:flex-none"
                                                    >
                                                        {expandedId === parcel._id ? (
                                                            <FaChevronUp className="text-xs" />
                                                        ) : (
                                                            <FaChevronDown className="text-xs" />
                                                        )}
                                                        <span className="hidden xs:inline">
                                                            {expandedId === parcel._id ? "See Less" : "See More"}
                                                        </span>
                                                        <span className="xs:hidden">{expandedId === parcel._id ? "Less" : "More"}</span>
                                                    </button>

                                                    <button
                                                        onClick={() => handleDelete(parcel._id)}
                                                        className="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 font-medium text-xs sm:text-sm flex-1 sm:flex-none"
                                                    >
                                                        <FaTrash className="text-xs" />
                                                        <span>Delete</span>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Details Grid - Responsive */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                                                <div className="flex items-center gap-2 sm:gap-3 p-3 bg-gray-50 rounded-lg">
                                                    <FaBox className="text-emerald-500 text-sm sm:text-base flex-shrink-0" />
                                                    <div className="min-w-0 flex-1">
                                                        <p className="text-xs text-gray-500 uppercase tracking-wide">Type</p>
                                                        <p className="font-semibold text-gray-800 text-sm sm:text-base truncate">
                                                            {parcel.parcelType}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 sm:gap-3 p-3 bg-gray-50 rounded-lg">
                                                    <FaDollarSign className="text-emerald-500 text-sm sm:text-base flex-shrink-0" />
                                                    <div className="min-w-0 flex-1">
                                                        <p className="text-xs text-gray-500 uppercase tracking-wide">Cost</p>
                                                        <p className="font-semibold text-gray-800 text-sm sm:text-base">{parcel.price} ৳</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 sm:gap-3 p-3 bg-gray-50 rounded-lg">
                                                    <FaCalendarAlt className="text-emerald-500 text-sm sm:text-base flex-shrink-0" />
                                                    <div className="min-w-0 flex-1">
                                                        <p className="text-xs text-gray-500 uppercase tracking-wide">Date</p>
                                                        <p className="font-semibold text-gray-800 text-sm sm:text-base">
                                                            {new Date(parcel.creation_date).toLocaleDateString()}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 sm:gap-3 p-3 bg-gray-50 rounded-lg">
                                                    <FaCreditCard className="text-emerald-500 text-sm sm:text-base flex-shrink-0" />
                                                    <div className="min-w-0 flex-1">
                                                        <p className="text-xs text-gray-500 uppercase tracking-wide">Payment</p>
                                                        <div className="flex items-center gap-2">
                                                            <span
                                                                className={`inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium ${parcel.payment_status === "paid"
                                                                        ? "bg-green-100 text-green-800"
                                                                        : "bg-red-100 text-red-800"
                                                                    }`}
                                                            >
                                                                <span
                                                                    className={`w-1.5 h-1.5 rounded-full mr-1 sm:mr-1.5 ${parcel.payment_status === "paid" ? "bg-green-400" : "bg-red-400"
                                                                        }`}
                                                                ></span>
                                                                <span className="capitalize">{parcel.payment_status}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Expanded Details - Mobile Optimized */}
                                            {expandedId === parcel._id && (
                                                <div className="pt-4 sm:pt-6 border-t border-gray-200">
                                                    <div className="bg-gradient-to-r from-slate-50 to-gray-50 border border-slate-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6">
                                                        <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                                            <span className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></span>
                                                            <span>Detailed Information</span>
                                                        </h4>
                                                        <div className="bg-white rounded-lg border overflow-hidden">
                                                            <pre className="text-xs sm:text-sm text-gray-700 font-mono whitespace-pre-wrap overflow-x-auto p-3 sm:p-4 max-h-64 sm:max-h-96 overflow-y-auto">
                                                                {JSON.stringify(parcel, null, 2)}
                                                            </pre>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default MyParcels
