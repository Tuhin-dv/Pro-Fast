import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import locationData from '../../public/ServicesCenter.json';

const MySwal = withReactContent(Swal);

export default function AddParcelForm() {
  const { register, handleSubmit, watch, reset, setValue, formState: { errors } } = useForm();
  const [cost, setCost] = useState(0);
  const [parcelData, setParcelData] = useState(null);

  const isDocument = watch("parcelType") === "Document";

  const [senderDistricts, setSenderDistricts] = useState([]);
  const [receiverDistricts, setReceiverDistricts] = useState([]);

  const calculateCost = (data) => {
    const isSameCity = data.senderServiceCenter === data.receiverServiceCenter;
    const withinCity = isSameCity;

    if (data.parcelType === "Document") {
      return withinCity ? 60 : 80;
    } else {
      const weight = parseFloat(data.parcelWeight || 0);
      if (weight <= 3) {
        return withinCity ? 110 : 150;
      } else {
        const extraWeight = weight - 3;
        const extraCharge = extraWeight * 40;
        return withinCity ? (110 + extraCharge) : (150 + extraCharge + 40);
      }
    }
  };

  const showPricingBreakdown = (data, totalCost) => {
    const isSameCity = data.senderServiceCenter === data.receiverServiceCenter;
    const weight = parseFloat(data.parcelWeight || 0);
    let breakdown = '';

    if (data.parcelType === 'Document') {
      breakdown = isSameCity
        ? `Document (Any weight) within same city: ৳60`
        : `Document (Any weight) outside city: ৳80`;
    } else {
      if (weight <= 3) {
        breakdown = isSameCity
          ? `Non-Document (≤3kg) within city: ৳110`
          : `Non-Document (≤3kg) outside city: ৳150`;
      } else {
        const extra = weight - 3;
        const base = isSameCity ? 110 : 150;
        const extraCharge = extra * 40;
        const total = isSameCity ? base + extraCharge : base + extraCharge + 40;

        breakdown = isSameCity
          ? `Non-Document (>3kg) within city:\nBase: ৳110\nExtra: ${extra}kg × ৳40 = ৳${extraCharge}\nTotal: ৳${total}`
          : `Non-Document (>3kg) outside city:\nBase: ৳150\nExtra: ${extra}kg × ৳40 = ৳${extraCharge}\n+ ৳40 extra\nTotal: ৳${total}`;
      }
    }

    MySwal.fire({
      title: 'Confirm Parcel Booking',
      html: `<pre class="text-left text-sm">${breakdown}</pre><br/><strong>Total Cost: ৳${totalCost}</strong>`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Confirm Booking',
      cancelButtonText: 'Edit Parcel',
      reverseButtons: true,
      customClass: {
        popup: 'swal2-rounded',
        confirmButton: 'bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700',
        cancelButton: 'bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        handleConfirm();
      } else {
        toast('You can now edit the parcel info.');
      }
    });
  };

  const handleConfirm = () => {
    const finalData = {
      ...parcelData,
      creation_date: new Date().toISOString()
    };
    console.log("Saved to DB:", finalData);
    toast.success('Parcel added successfully!');
    reset();
  };

  const handleSenderRegionChange = (e) => {
    const region = e.target.value;
    const filtered = locationData.filter(item => item.region === region);
    setSenderDistricts(filtered);
    setValue("senderServiceCenter", "");
  };

  const handleReceiverRegionChange = (e) => {
    const region = e.target.value;
    const filtered = locationData.filter(item => item.region === region);
    setReceiverDistricts(filtered);
    setValue("receiverServiceCenter", "");
  };

  const onSubmit = data => {
    const deliveryCost = calculateCost(data);
    setCost(deliveryCost);
    setParcelData(data);
    showPricingBreakdown(data, deliveryCost);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 bg-white rounded shadow">
      <Toaster />
      <h2 className="text-3xl font-bold text-green-800">Add Parcel</h2>
      <p className="text-gray-600 mb-4">Fill the form below with parcel, sender, and receiver information.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        {/* Parcel Info */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Parcel Info</h3>
          <div className="flex items-center gap-6 mb-4">
            <label className="flex items-center gap-2">
              <input type="radio" value="Document" {...register("parcelType", { required: true })} defaultChecked />
              Document
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" value="Not-Document" {...register("parcelType", { required: true })} />
              Not-Document
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Parcel Title" {...register("parcelTitle", { required: true })} className="input" />
            {!isDocument && (
              <input
                type="number"
                step="0.01"
                placeholder="Parcel Weight (kg)"
                {...register("parcelWeight")}
                className="input"
              />
            )}
          </div>
        </div>

        {/* Sender & Receiver Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sender Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Sender Info</h3>
            <div className="space-y-4">
              <input placeholder="Sender Name" {...register("senderName", { required: true })} className="input" />
              <input placeholder="Sender Contact No" {...register("senderContact", { required: true })} className="input" />
              <select {...register("senderRegion", { required: true })} onChange={handleSenderRegionChange} className="input">
                <option value="">Select Region</option>
                {[...new Set(locationData.map(item => item.region))].map((region, i) => (
                  <option key={i} value={region}>{region}</option>
                ))}
              </select>
              <select {...register("senderServiceCenter", { required: true })} className="input">
                <option value="">Select Service Center</option>
                {senderDistricts.map((d, i) => (
                  <option key={i} value={d.city}>{d.city}</option>
                ))}
              </select>
              <input placeholder="Sender Address" {...register("senderAddress", { required: true })} className="input" />
              <textarea placeholder="Pickup Instruction" {...register("pickupInstruction", { required: true })} className="input" />
            </div>
          </div>

          {/* Receiver Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Receiver Info</h3>
            <div className="space-y-4">
              <input placeholder="Receiver Name" {...register("receiverName", { required: true })} className="input" />
              <input placeholder="Receiver Contact No" {...register("receiverContact", { required: true })} className="input" />
              <select {...register("receiverRegion", { required: true })} onChange={handleReceiverRegionChange} className="input">
                <option value="">Select Region</option>
                {[...new Set(locationData.map(item => item.region))].map((region, i) => (
                  <option key={i} value={region}>{region}</option>
                ))}
              </select>
              <select {...register("receiverServiceCenter", { required: true })} className="input">
                <option value="">Select Service Center</option>
                {receiverDistricts.map((d, i) => (
                  <option key={i} value={d.city}>{d.city}</option>
                ))}
              </select>
              <input placeholder="Receiver Address" {...register("receiverAddress", { required: true })} className="input" />
              <textarea placeholder="Delivery Instruction" {...register("deliveryInstruction", { required: true })} className="input" />
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500">* Pickup time: 4pm – 7pm approx.</p>

        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
}
