import { useState } from 'react';
import { motion } from 'framer-motion';

const EditListingModal = ({
  editingListing,
  editData,
  setEditingListing,
  handleEditChange,
  handleEditSubmit,
}) => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await handleEditSubmit(e);
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  if (!editingListing) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setEditingListing(null)}
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
                ✏️ Edit Listing
              </h2>
              <p className="text-white/90 text-sm">
                Update your listing details below
              </p>
            </div>
            <button
              onClick={() => setEditingListing(null)}
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
        <form onSubmit={onSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleEditChange}
                placeholder="Listing name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Category</span>
              </label>
              <select
                name="category"
                value={editData.category}
                onChange={handleEditChange}
                className="select select-bordered w-full"
                required
              >
                <option>Pets</option>
                <option>Food</option>
                <option>Accessories</option>
                <option>Care Products</option>
              </select>
            </div>
          </div>

          {editData.category !== 'Pets' && (
            <div>
              <label className="label">
                <span className="label-text font-semibold">Price</span>
              </label>
              <input
                type="number"
                name="price"
                value={editData.price}
                onChange={handleEditChange}
                placeholder="Price"
                className="input input-bordered w-full"
                min={0}
                required
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Location</span>
              </label>
              <input
                type="text"
                name="location"
                value={editData.location}
                onChange={handleEditChange}
                placeholder="Enter location"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Listed Date</span>
              </label>
              <input
                type="date"
                name="date"
                value={editData.date}
                onChange={handleEditChange}
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Image URL</span>
            </label>
            <input
              type="text"
              name="image"
              value={editData.image}
              onChange={handleEditChange}
              placeholder="Enter image link"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Description</span>
            </label>
            <textarea
              name="description"
              value={editData.description}
              onChange={handleEditChange}
              placeholder="Describe your listing"
              className="textarea textarea-bordered w-full h-24"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={() => setEditingListing(null)}
              className="btn btn-outline flex-1 rounded-md"
              disabled={submitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary btn-outline flex-1 rounded-md"
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Updating...
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
                  Update Listing
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default EditListingModal;
