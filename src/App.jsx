import { useState } from "react";

function App() {
  const [photos, setPhotos] = useState([]);
  const [size, setSize] = useState("4x6");
  const [paymentComplete, setPaymentComplete] = useState(false);

  const sizePrices = {
    "4x6": 1.5,
    "5x7": 3,
    "8x10": 5,
  };

  const handlePhotoUpload = (e) => {
  const files = Array.from(e.target.files);
  
  if (photos.length + files.length > 5) {
    alert("You can only upload up to 5 photos.");
    return;
  }

  const previews = files.map((file) => ({
    file,
    url: URL.createObjectURL(file),
  }));

  setPhotos((prev) => [...prev, ...previews]);
};


  const handleSizeChange = (e) => setSize(e.target.value);

  const calculatePrice = () => (photos.length * sizePrices[size]).toFixed(2);

  const handlePayNow = () => {
    if (photos.length === 0) {
      alert("Please upload at least one photo before payment.");
      return;
    }

    setPaymentComplete(true); 
  };

  const handleClear = () => {
    setPhotos([]);
    setSize("4x6");
  };

  const handleNewOrder = () => {
    setPhotos([]);
    setSize("4x6");
    setPaymentComplete(false); 
  };

  if (paymentComplete) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-4">
        <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-md w-full">
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            Payment Complete!
          </h1>
          <p className="text-gray-700 mb-6">
            Thank you for your order. <br />
            Total Paid: <span className="font-semibold">AED {calculatePrice()}</span>
          </p>
          <button
            onClick={handleNewOrder}
            className="bg-blue-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-600 transition-colors duration-200"
          >
            Place Another Order
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center p-4">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-blue-800">
        INEKAS Photography
      </h1>

      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
        {/* Photo Upload */}
        <label className="w-full mb-4">
          <span className="block mb-2 text-gray-700 font-medium">
            Upload Photos (max 5)
          </span>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handlePhotoUpload}
            className="w-full p-2 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>

        {/* Thumbnails */}
        <div className="flex flex-wrap gap-3 mb-4 justify-center">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo.url}
              alt={`upload-${index}`}
              className="w-20 h-20 object-cover border rounded-lg shadow-sm"
            />
          ))}
        </div>

        {/* Print Size */}
        <div className="w-full mb-4">
          <label className="block mb-2 text-gray-700 font-medium">
            Select Print Size
          </label>
          <select
            value={size}
            onChange={handleSizeChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="4x6">4x6</option>
            <option value="5x7">5x7</option>
            <option value="8x10">8x10</option>
          </select>
        </div>

        {/* Price */}
        <p className="mb-6 text-lg md:text-xl font-semibold text-gray-800">
          Total Price: <span className="text-blue-600">AED {calculatePrice()}</span>
        </p>

        {/* Buttons */}
        <div className="flex w-full gap-3">
          <button
            onClick={handlePayNow}
            className="flex-1 bg-blue-500 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Pay Now
          </button>
          <button
            onClick={handleClear}
            className="flex-1 bg-gray-300 text-gray-800 py-3 rounded-lg font-bold text-lg hover:bg-gray-400 transition-colors duration-200"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
