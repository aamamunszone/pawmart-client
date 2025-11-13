import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const OrderModal = ({ listing, user, isOpen, onClose }) => {
  const axiosPrivate = useAxiosSecure();
  const [formData, setFormData] = useState({
    productId: listing._id,
    productName: listing.name,
    buyerName: user?.displayName || '',
    email: user?.email || '',
    quantity: listing.category === 'Pets' ? 1 : 1,
    price: listing.price,
    address: '',
    date: '',
    phone: '',
    additionalNotes: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleQuantityChange = (e) => {
    if (listing.category === 'Pets') return;
    setFormData((prev) => ({
      ...prev,
      quantity: parseInt(e.target.value) || 1,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.address || !formData.date || !formData.phone) {
      toast.error('Please fill in all required fields!');
      return;
    }

    try {
      setSubmitting(true);
      await axiosPrivate.post('/orders', formData);
      toast.success('Order placed successfully! 🎉');
      onClose();
    } catch (error) {
      console.error(error);
      toast.error('Failed to place order. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-base-100 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-linear-to-r from-blue-600 to-cyan-500 text-white p-6 rounded-t-3xl z-40">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-black mb-1">
                {listing.category === 'Pets' ? '🐾 Adopt' : '🛒 Order'}{' '}
                {listing.name}
              </h2>
              <p className="text-white/90 text-sm">
                Please fill in the details below
              </p>
            </div>
            <button
              onClick={onClose}
              className="btn btn-circle btn-ghost btn-sm text-white hover:bg-white/20"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Readonly Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Buyer Name</span>
              </label>
              <input
                type="text"
                value={formData.buyerName}
                readOnly
                className="input input-bordered w-full bg-base-200"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                value={formData.email}
                readOnly
                className="input input-bordered w-full bg-base-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Product Name</span>
              </label>
              <input
                type="text"
                value={formData.productName}
                readOnly
                className="input input-bordered w-full bg-base-200"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Product ID</span>
              </label>
              <input
                type="text"
                value={formData.productId}
                readOnly
                className="input input-bordered w-full bg-base-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Price</span>
              </label>
              <input
                type="text"
                value={
                  formData.price === 0 ? 'Free Adoption' : `৳${formData.price}`
                }
                readOnly
                className="input input-bordered w-full bg-base-200"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Quantity {listing.category === 'Pets' && '(Fixed for pets)'}
                </span>
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleQuantityChange}
                min="1"
                disabled={listing.category === 'Pets'}
                className={`input input-bordered w-full ${
                  listing.category === 'Pets' ? 'bg-base-200' : ''
                }`}
              />
            </div>
          </div>

          {/* Required Fields */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Address *</span>
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your full address"
              required
              className="textarea textarea-bordered w-full h-20"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Pickup Date *</span>
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Phone *</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="01XXXXXXXXX"
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">
                Additional Notes (Optional)
              </span>
            </label>
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              placeholder="Any special instructions or notes..."
              className="textarea textarea-bordered w-full h-20"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-outline flex-1 rounded-md"
              disabled={submitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary flex-1 rounded-md"
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Placing Order...
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Confirm Order
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default OrderModal;
